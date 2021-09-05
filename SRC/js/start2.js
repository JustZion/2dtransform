
const app = Vue.createApp({
  data() {
return {
  range: [
    {x: 34, y: 45},
    {x: 343, y: 25},
    {x: 342, y: 458},
    {x: 344, y: 455},
    {x: 343, y: 25},
    {x: 342, y: 458},
    {x: 344, y: 455},
    {x: 343, y: 25},
    {x: 342, y: 458},
    {x: 344, y: 455}
  ],

  entry: '',

  rangee: ''
  
}
  },

  methods: {

    setEntry() {
      this.rangee = this.range.slice(0,this.entry)
    }

  }

   
})


app.mount('#app')