export default {
    name: 'container',
//   store: store,
  data() {
      return{

        userObj: {}, //userObj for new
        userObjFromStore: {}, // readonly for load
        userObjTem:{}, // use only for write for tem

        create_name:'',
        create_email:'',
        create_address:'',
        edit_id:'',
        edit_name:'',
        edit_email:'',
        edit_address:'',
      }
  },  
  created() {
      console.log('call fetch User')
        this.$store.dispatch('fetchUsers')
    },
  computed: {
    users() {
    //   return this.$store.state.users
    //console.log(this.$store.getters)
      return this.$store.getters.usersall;
    }
  },
  methods: {
  	createUser() {
      var use_temp={}
      
      //console.log(this.users)
      var nextid = this.users[this.users.length-1].id +1
      //console.log(this.users.length)
      console.log('end_add');
    //   a.id= this.users[length]['id'] + 1
      
      // a.id= this.users.length + 1
      use_temp.id= nextid
      use_temp.name = this.create_name,
      use_temp.email = this.create_email,
      use_temp.address = this.create_address,
      //this.$store.commit('createUser', a)
      this.$store.dispatch('actioncreateUser', use_temp)


      //this.userObj = {}
      this.create_name = '';
      this.create_email = '';
      this.create_address = '';
      $("#createUserModal").modal('hide')
    },  
    showUpdateUserModal(userId) {
        //this.userObjTem = {}
        //this.userObjFromStore = this.users.find(u => u.id == userId)
        var current = this.users.find(u => u.id == userId)

        this.edit_id = current.id
        this.edit_name = current.name
        this.edit_email = current.email
        this.edit_address = current.address
        $("#updateUserModal").modal('show')
    },
    updateUserObj(attribute, e) {
        //this.userObjTem[attribute] = e.target.value
    },
    updateUser() {
      //var finalUserObj = Object.assign({}, this.userObjFromStore, this.userObjTem)
      
      var userTemp ={}
      userTemp.id = this.edit_id
      userTemp.name = this.edit_name
      userTemp.email = this.edit_email
      userTemp.address = this.edit_address
      // console.log(userTemp)
      //this.$store.commit('updateUser', userTemp)
      this.$store.dispatch('actionupdateUser',userTemp)
      //this.userObjTem = {}
      $("#updateUserModal").modal('hide')
      return false;
    },
    deleteUser(userId) {
        this.$store.dispatch('actiondeleteUser',userId)
    	//this.$store.commit('deleteUser', userId)
        
    }
  }
}
