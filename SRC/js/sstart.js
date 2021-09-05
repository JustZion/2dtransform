
const app = Vue.createApp({
  data() {
return {
  message: 'The test',
  a: math.matrix([[2,3], [3,4]]),
  b: math.matrix([[2,3], [3,4]]),
  dat: '', datt: '', dattt: '',
 
  ax: 20 , bbb: 87, ay: 0, bx: 60 , by: 0 ,cx: 40 , cy: 100 ,
  dx: '', dy: '', ex: '', ey: '', fx: '', fy: '',
  gx: '', gy: '', hx: '', hy: '', ix: '', iy: '', jx: '',
  jy: '', kx: '', ky: '', lx: '', ly: '', mx: '', my: '',
  nx: '', ny: '', ox: '', oy: '', px: '', py: '', qx: '',
  qy: '', rx: '', ry: '', sx: '', sy: '', tx: '', ty: '',
  ux: '', uy: '', vx: '', vy: '', wx: '', wy: '', xx: '', xy: '',
  yx: '', yy: '', zx: '', zy: '',
  angle: 45 , sa: '',

  defaultEntry: [
    {x: '', y: ''}, {x: '', y: ''}, {x: '', y: ''},
    {x: '', y: ''},{x: '', y: ''},{x: '', y: ''},
    {x: '', y: ''},{x: '', y: ''},{x: '', y: ''},
    {x: '', y: ''},{x: '', y: ''},{x: '', y: ''},
    {x: '', y: ''},{x: '', y: ''},{x: '', y: ''},
    {x: '', y: ''},{x: '', y: ''},{x: '', y: ''},
    {x: '', y: ''},{x: '', y: ''},{x: '', y: ''},
    {x: '', y: ''},{x: '', y: ''},{x: '', y: ''},
    {x: '', y: ''},{x: '', y: ''}
  ],

  kkk: 6995,

  axx: '' , ayy: '' , bxx: '' , byy: '' ,
  cxx: '' , cyy: '' , angle: 45 ,

  ia: false,
  ina: true,
  iaa: true,
}
  },

    methods: {
      ccc() {
        alert(this.kkk)
      }
      
     
    }
})


app.mount('#app')