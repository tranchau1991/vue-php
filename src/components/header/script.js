

export default {
  name: 'header',
  data () {
    return {
      //msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    refreshMessage() {
        alert("refresh");
      //this.$store.dispatch('refeshMessage').then(() => {
        // do stuff
      //});
    }
  }
}