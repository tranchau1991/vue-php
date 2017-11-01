// alert("2");

var axios = require('axios');

export default {
  name: 'ShowList',
  data () {
    return {
    //     users:[
	// 	{ userId: 40, name:'Nguyen Van A', email:'nguyena@gmail.com', address:'Hanoi' },
	// 	// { name: "Laravel", vote: 100 },
	// 	// { name: "Symfony", vote: 35 },
	// 	// { name: "Zend", vote: 18 },
	// 	// { name: "Yii", vote: 7 }
	// ],
      msg: 'Welcome to Your Vue.js App',
      quote: "",
            author: "",
            quoteMarkup: "",
            authorMarkup: "",
            source: "",
            url: "",
            apiUrl: "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&",
            tweetUrlPrefix: "https://twitter.com/intent/tweet?text="
    }
  },
  computed: {
    users() {
    //   return this.$store.state.users
    console.log(this.$store.getters)
      return this.$store.getters.usersall;
    }
  },
//   created () {
//     // fetch the data when the view is created and the data is
//     // already being observed
//     //this.fetchData()
//     this.getQuote()
//   },
  created() {
      console.log('call fetch User')
        this.$store.dispatch('fetchUsers')
    },
  watch: {
    // call again the method if the route changes
    // '$route': 'fetchData'
    '$route': 'getQuote'
  },
  methods: {
    fetchData () {
        console.log("ferchdata");

        /*
        // axios.post('http://localhost:99', { 
        axios.post('http://localhost/test/php/', { 
            crossDomain: true, 
            data: this.data,
            headers: {
                // 'Content-Type: application/json;charset=UTF-8'
                'Access-Control-Allow-Origin': '*',
                // 'Content-Type': 'application/json',
                // 'Accept': 'application/json',
                // 'Content-Type': 'application/json',
            },
         })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            // Wu oh! Something went wrong
            console.log(error.message);
        });
        */

/*
        jQuery.ajax({
            method: "POST",
            headers: {
    // Accept : "application/json; charset=utf-8",
    // "Content-Type": "application/json; charset=utf-8"
},             
            url: "http://localhost:80/test/php/",
            data: { name: "John", location: "Boston" },
            beforeSend: setHeader
            // dataType: "jsonp",
        // crossDomain: true,
        })
        
            .done(function( msg ) {
                console.log(msg);
                alert( "Data Saved: " + msg );
            }.fail(function(msg){
                console.log(msg)
            }));
            */

    },
     getQuote: function() {
        //this.Item_Add();
        var before_all = this;
         $.ajax({
            url: 'http://localhost:99',
            data: { 'action':'list' },
            type: 'GET',
            success: function(response) { 
                //console.log(before_all.users);
                //console.log(response);
                before_all.users=response;
            },
            error: function(msg) {
                alert('Failed!');console.log(msg);
            },
        });
        

        
        /*
        //https://jsonplaceholder.typicode.com/posts
        //http://jsonplaceholder.typicode.com/posts?_start=5&_limit=5
        //http://localhost:99/?list
        var data ={'action':'action_add'};
        
//         let urlSearchParams = new URLSearchParams();
// urlSearchParams.append('username', 'username');
// urlSearchParams.append('password', 'password');
         this.$http.post('?add', data).then(response => {
        //  this.$http.get('http://localhost:80/test/php/').then(response => {
            //No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:8080' is therefore not allowed access.
            // success callback
            // console.log("succes");
            console.log(response);
            var obj = (response.body);
            //console.log(obj[0])
            this.items=obj;
            
        }, response => {
            console.log("reporse");
            // error callback
        });
        */

         /*
            this.resetData();
            var timestamp = new Date();
            console.log(this.$http)
            this.$http.get( this.apiUrl + timestamp )
            .then( function( response ) {
              return response.json();
            })
            .then( function( json ) {
              var qData = json.shift();
              this.quote = qData.content;
              this.author = qData.title;
              this.url = qData.link;
              if ( qData.custom_meta ) {
                this.source = qData.custom_meta.Source;
                this.authorMarkup = "<footer><cite>" + this.author + " (" + this.source + ")</cite></footer>";
              } else {
                this.authorMarkup = "<footer><cite>" + this.author + "</cite></footer>";
              }
              this.quoteMarkup = this.quote + this.authorMarkup;
            });
            */
          },
          Item_Add(){

            var before_all = this;
            $.ajax({
                url: 'http://localhost:99',
                data: { 'action':'action' },
                type: 'POST',
                success: function(response) {
                    console.log(response);
                    //alert("add users to server");
                    //before_all.items=response;
                },
                error: function(msg) {
                    alert('Failed!');console.log(msg);
                },
            });

          },
          Item_Edit(){

            var before_all = this;
            $.ajax({
                url: 'http://localhost:99',
                data: { 
                    'action':'edit',
                    'id':'user_id',
                    'title':'title description', 
                    'body':'title description' 
                },
                type: 'PUT',
                success: function(response) { 
                    console.log(response);
                    alert("Edit success to server");
                    //before_all.items=response;
                },
                error: function(msg) { 
                    alert('Failed!');console.log(msg); 
                },
            });

          },
          Item_Delte(){

            var before_all = this;
            $.ajax({
                url: 'http://localhost:99',
                data: { 
                    'action':'edit',
                    'id':'user_id'
                },
                type: 'DELETE',
                success: function(response) { 
                    console.log(response);
                    alert("Delete success to server");
                    //before_all.items=response;
                },
                error: function(msg) { 
                    alert('Failed!');console.log(msg); 
                },
            });

          }
  }
}