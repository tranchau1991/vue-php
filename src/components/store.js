console.log('load store')

const loadState = () => {
  /*
  try {
    var serializedState = localStorage.getItem('todo');
    if (serializedState === null || serializedState == '[]') {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
  */

};



import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    // users: loadState() 
    users: []
    // ||  [
    // 	{'id':1, 'name':'Nguyễn Văn A', 'email':'a.nguyenvan@allaravel.com', 'address':'Hà Nội'},
    //   {'id':2, 'name':'Nguyễn Văn B', 'email':'b.nguyenvan@allaravel.com', 'address':'Hồ Chí Minh'},
    //   {'id':3, 'name':'Nguyễn Văn C', 'email':'c.nguyenvan@allaravel.com', 'address':'Đà Nẵng'},
    //   {'id':4, 'name':'Nguyễn Văn D', 'email':'d.nguyenvan@allaravel.com', 'address':'Hải Phòng'},
    //   {'id':5, 'name':'Nguyễn Văn E', 'email':'e.nguyenvan@allaravel.com', 'address':'Thanh Hóa'},
    // ]
  },
  mutations: {
    setUsers: function (state, userObj) {
      console.log('set Users')
      //console.log(userObj)

      state.users=userObj
    },
    createUser: function (state, userObj) {
      state.users.push(userObj)
    },
    updateUser: function (state, finalUserObj) {
      let index = state.users.map(u => u.id).indexOf(finalUserObj.id)
      state.users.splice(index, 1, finalUserObj)
    },
    deleteUser: function (state, userId) {
      let index = state.users.map(u => u.id).indexOf(userId)
      state.users.splice(index, 1)
    }
  },
  getters:{
      usersall: state => state.users
    
  },
  actions: {
        fetchUsers(context) {
          console.log('action fetch User')
            // axios.get('http://localhost/centaur/public/api/notes?notebook_id=1')
            //         .then( function(res) {
            //             context.commit('setNotes', res.data);
            //             context.commit('setCurrentNote', res.data[0]);
            //         });

            //var res = this;
            $.ajax({
                  url: 'http://localhost:99',
                  data: { 'action':'list' },
                  type: 'GET',
                  success: function(response) { 
                    console.log(response)
                    if(!response){
                      response=[]
                    }
                    context.commit('setUsers', response);
                      //console.log(before_all.users);
                      //console.log(response);
                      // before_all.users=response;
                      //return response;
                  },
                  error: function(msg) {
                      alert('Failed!');console.log(msg);
                  },
              });

        },
        actioncreateUser(context, userObj){
          console.log('Action create')
          console.log(userObj)
          $.ajax({
                  url: 'http://localhost:99',
                  data: { 'action':'list',
                    'name':userObj.name,
                    'email':userObj.email,
                    'address':userObj.address,
                  },
                  type: 'POST',
                  success: function(response) {
                    //console.log(response)
                    //context.commit('setUsers', response);
                      //console.log(before_all.users);
                      //console.log(response);
                      // before_all.users=response;
                      //return response;
                  },
                  error: function(msg) {
                      alert('Failed!');console.log(msg);
                  },
              });
               this.commit('createUser', userObj)
        },
        actiondeleteUser(context, userId){
          $.ajax({
                  url: 'http://localhost:99',
                  data: { 'action':'delete',
                    'id':userId,
                  },
                  type: 'DELETE',
                  success: function(response) {
                    console.log(response)
                    //context.commit('setUsers', response);
                      //console.log(before_all.users);
                      //console.log(response);
                      // before_all.users=response;
                      //return response;
                  },
                  error: function(msg) {
                      alert('Failed!');console.log(msg);
                  },
              });
               this.commit('deleteUser', userId)
        },actionupdateUser(context,userObj){
          console.log(userObj)
          //editUser
            $.ajax({
                  url: 'http://localhost:99',
                  data: { 'action':'edit',
                    'id':userObj.id,
                    'name':userObj.name,
                    'email':userObj.email,
                    'address':userObj.address
                  },
                  type: 'PUT',
                  success: function(response) {
                    console.log(response)
                    //context.commit('setUsers', response);
                      //console.log(before_all.users);
                      //console.log(response);
                      // before_all.users=response;
                      //return response;
                  },
                  error: function(msg) {
                      alert('Failed!');console.log(msg);
                  },
              });

          this.commit('updateUser',userObj)
          // this.$store.commit('updateUser', userTemp)
      // this.$store.dispatch('actionupdateUser',userTemp)
        }
        

    },

});


