
const app = Vue.createApp({
  data() {
return {
  message: 'The test',
  entry: 3,
  a: math.matrix([[2,3], [3,4]]),
  b: math.matrix([[2,3], [3,4]]),
  dat: '', datt: '', dattt: '',
  ax: '20' , ay: '0', bx: '60' , by: '0' ,cx: '40' , 
  cy: '100' ,
  dx: '', dy: '', ex: '', ey: '', fx: '', fy: '',
  gx: '', gy: '', hx: '', hy: '', ix: '', iy: '', jx: '',
  jy: '', kx: '', ky: '', lx: '', ly: '', mx: '', my: '',
  nx: '', ny: '', ox: '', oy: '', px: '', py: '', qx: '',
  qy: '', rx: '', ry: '', sx: '', sy: '', tx: '', ty: '',
  ux: '', uy: '', vx: '', vy: '', wx: '', wy: '', xx: '', xy: '',
  yx: '', yy: '', zx: '', zy: '',
  angle: 45 , sa: '',

  defaultAxis: '',
  ddefaultAxis: '',

  defaultEntry: '' ,
  editedEntry: '',
  rotat: '',
 
  scalatx: '',
  scalaty: '',
  transatx: '',
  transaty: '',


  srotat: false,
  sscalat: false,
  stransat: false,
  watcher: '',
  tx: '', ty: '', sx: '',  sy: '', 

  tryy: [
    {x: 77, y: 999},  {x: 77, y: 99},
    {x: 47, y: ''} , {x: "", y: ''}
  ],

  ia: false,
  ina: true,
  iaa: true,
  sob: true,
  xaxis: '',
  yaxis:'',
  eachS : '',
  eachSS : '',
  checker: '',
  ccc: '',
  ccd: '',
  mainaa: [],
  xx: [],
  yy: [],
  


  mainr : [],
  maint : [],
  mains : [],
  ggg: [],
  hhh: [],
  data : [],
  uud: 0,
  ood: 0,
  nll: [],
}
  },

  mounted() {
    this.defaultEntry = [
      {N: 'A' ,x: this.ax, y: this.ay}, {N: 'B' ,x: this.bx, y: this.by},
      {N: 'C' ,x: this.cx, y: this.cy},{N: 'D' ,x: this.dx, y: this.dy},
      {N: 'E' ,x: this.ex, y: this.ey},{N: 'F' ,x: this.fx, y: this.fy},
      {N: 'G' ,x: this.gx, y: this.gy},
      {N: 'H' ,x: this.hx, y: this.hy},{N: 'I' ,x: this.ix, y: this.iy},
      {N: 'J' ,x: this.jx, y: this.jy},{N: 'K' ,x: this.kx, y: this.ky},
      {N: 'L' ,x: this.lx, y: this.ly},{N: 'M' ,x: this.mx, y: this.my},
      {N: 'N' ,x: this.nx, y: this.ny},{N: 'O' ,x: this.ox, y: this.oy},
      {N: 'P' ,x: this.px, y: this.py},{N: 'Q' ,x: this.qx, y: this.qy},
      {N: 'R' ,x: this.rx, y: this.ry},{N: 'S' ,x: this.sx, y: this.sy},
      {N: 'T' ,x: this.tx, y: this.ty},{N: 'U' ,x: this.ux, y: this.uy},
      {N: 'V' ,x: this.vx, y: this.vy},{N: 'W' ,x: this.wx, y: this.wy},
      {N: 'X' ,x: this.xx, y: this.xy},{N: 'Y' ,x: this.yx, yy: this.yy},
      {N: 'Z' ,x: this.zx, y: this.zy}
    ]

    this.ddefaultEntry = [
      {N: 'A' ,x: this.ax, y: this.ay}, {N: 'B' ,x: this.bx, y: this.by},
      {N: 'C' ,x: this.cx, y: this.cy},{N: 'D' ,x: this.dx, y: this.dy},
      {N: 'E' ,x: this.ex, y: this.ey},{N: 'F' ,x: this.fx, y: this.fy},
      {N: 'G' ,x: this.gx, y: this.gy},
      {N: 'H' ,x: this.hx, y: this.hy},{N: 'I' ,x: this.ix, y: this.iy},
      {N: 'J' ,x: this.jx, y: this.jy},{N: 'K' ,x: this.kx, y: this.ky},
      {N: 'L' ,x: this.lx, y: this.ly},{N: 'M' ,x: this.mx, y: this.my},
      {N: 'N' ,x: this.nx, y: this.ny},{N: 'O' ,x: this.ox, y: this.oy},
      {N: 'P' ,x: this.px, y: this.py},{N: 'Q' ,x: this.qx, y: this.qy},
      {N: 'R' ,x: this.rx, y: this.ry},{N: 'S' ,x: this.sx, y: this.sy},
      {N: 'T' ,x: this.tx, y: this.ty},{N: 'U' ,x: this.ux, y: this.uy},
      {N: 'V' ,x: this.vx, y: this.vy},{N: 'W' ,x: this.wx, y: this.wy},
      {N: 'X' ,x: this.xx, y: this.xy},{N: 'Y' ,x: this.yx, yy: this.yy},
      {N: 'Z' ,x: this.zx, y: this.zy}
    ]


    this.defaultAxis = [
      [this.ax , this.ay , 1], [this.bx , this.by , 1], [this.cx , this.cy , 1], 
      [this.dx , this.dy , 1], [this.ex , this.ey , 1], [this.fx , this.fy , 1], 
      [this.ex , this.ey , 1], [this.gx , this.gy , 1], [this.hx , this.hy , 1], 
      [this.ix , this.iy , 1], [this.jx , this.jy , 1], [this.kx , this.ky , 1], 
      [this.lx , this.ly , 1], [this.mx , this.my , 1], [this.nx , this.ny , 1], 
      [this.ox , this.oy , 1], [this.px , this.py , 1], [this.qx , this.qy , 1], 
      [this.rx , this.ry , 1], [this.sx , this.sy , 1], [this.tx , this.ty , 1], 
      [this.ux , this.uy , 1], [this.vx , this.vy , 1], [this.wx , this.wy , 1], 
      [this.xx , this.yx , 1], [this.yx , this.yy , 1], [this.zx , this.zy ] 
    ]


    this.xaxis=
    [ this.ax , this.bx , this.cx ,  
      this.dx , this.ex , this.fx  , 
       this.gx , this.hx  , 
      this.ix , this.jx , this.kx  , 
      this.lx , this.mx , this.nx  , 
      this.ox , this.px , this.qx  , 
      this.rx , this.sx , this.tx  , 
      this.ux , this.vx , this.wx  , 
      this.xx , this.yx  , this.zx ]

      this.yaxis =
      [this.ay,  this.by,  this.cy,  
        this.dy,  this.ey,  this.fy,  
             this.gy,  this.hy,  
             this.iy,  this.jy,  this.ky,  
             this.ly,  this.my,  this.ny,  
             this.oy,  this.py,  this.qy,  
             this.ry,  this.sy,  this.ty,  
             this.uy,  this.vy,  this.wy,  
           this.xy , this.yy  , this.zy ]
       
   // console.log(this.defaultEntry)
   // console.log(this.xaxis.slice(0,this.entry))
    },

    

    computed: {
      realShow: function() {
        if (this.entry) {
        this.editedEntry = 
        this.defaultEntry.slice(0,this.entry)
        finalEntry = this.editedEntry
          
      console.log(finalEntry)
        return finalEntry
       
       
      
      }
      },

      chec: function() {
        if  (this.mainaa == '' ) {

        return true

        }

        else if (this.mainaa != '') {
          a = this.mainaa.indexOf('current')
          b = a + 1
          c = Number(this.mainaa[b].slice(0,-1))
          if (c == 1) {
            return true
          }

          else {
            return false
          }
        }
      },

      checc: function() {
        if  (this.mainaa == '' ) {

        return true

        }

        else if (this.mainaa != '') {
          a = this.mainaa.indexOf('current')
          b = a + 1
          c = Number(this.mainaa[b].slice(0,-1))
          if (c == this.ccc) {
            return true
          }

          else {
            return false
          }
        }

       
      },



      sorr: function() {
        term = this.defaultEntry.slice(0,this.entry)
        this.xaxis=
    [ this.ax , this.bx , this.cx ,  
      this.dx , this.ex , this.fx  , 
       this.gx , this.hx  , 
      this.ix , this.jx , this.kx  , 
      this.lx , this.mx , this.nx  , 
      this.ox , this.px , this.qx  , 
      this.rx , this.sx , this.tx  , 
      this.ux , this.vx , this.wx  , 
      this.xx , this.yx  , this.zx ]

      this.yaxis =
      [this.ay,  this.by,  this.cy,  
        this.dy,  this.ey,  this.fy,  
             this.gy,  this.hy,  
             this.iy,  this.jy,  this.ky,  
             this.ly,  this.my,  this.ny,  
             this.oy,  this.py,  this.qy,  
             this.ry,  this.sy,  this.ty,  
             this.uy,  this.vy,  this.wy,  
           this.xy , this.yy  , this.zy ]
       
        
        if ((term != '') && (this.entry != '')) {
          ss = ''
          tt = term.filter((n) => 
          n.x == ss || n.y == ss )
           if (tt.length > 0) {
            console.log(typeof(tt[0].y) , 999)
            
          
            this.xre()
           
             return true
           } 
           else {
           // console.log(tt , 999)
          //  console.log(typeof(term[0].y) , 779)
            this.xre()
           
            // console.log(this.editedEntry)
          
             return false
             
          
             this.sob == false
           }
        }

        else {
          return true
        }
       

      
        
        
        // return xx.filter(
        //   products => !editedEntry.x.indexOf(""))
    },

   

    inpo: function() {
  
      if (this.rotat != '') {
        this.transatx = ''
        this.transaty = ''
        this.scalatx = ''
        this.scalaty = ''
      this.stransat = true
      this.sscalat = true
     
      }

      else {
        this.stransat = false
      this.sscalat = false
      }

   

        
    },

      inpoo: function() {
        if ((this.scalatx != '') || (this.scalaty != '')) {
          this.transatx = ''
        this.transaty = ''
          this.rotat = ''
            this.stransat = true
            this.srotat = true
            }
      
            else {
              this.stransat = false
            this.srotat = false
            }
  
      },

      inpooo: function() {
         if ((this.transatx != '') || (this.transaty != ''))
          {
          this.rotat = ''
          this.scalat = ''
          this.srotat = true
          this.sscalat = true
          }
    
          else {
            this.srotat = false
          this.sscalat = false
          }
    },

       sbtnsolve: function() {
         if (((this.transatx != '') && (this.transaty))
          || ((this.scalatx != '')
         && (this.scalaty)) ||
         (this.rotat != ''))  {
          
          return false
          

         }

         else {
           return true
         }
       },
          
      // bgraph: function() {
      //   var trace22 = {
      //     x: [3, 4, 2, 3],
      //     y: [3, 5, 4, 3],
      //     mode: 'lines+markers',
      //     type: 'scatter'
      //   };
        
      //   var data = [trace22];
        
      //   Plotly.newPlot('myyDiv', data);
      // },
      
 
      
 



      // if (this.scalat != '') {
      //   this.stransat = true
      //   this.srotat = true
      //   }
  
      //   else {
      //     this.stransat = false
      //   this.srotat = false
      //   }

     

    serr: function() {
        if (this.sorr == false) {
          return '00000'
        }
        
      
    },

    ress: function() {
      if (this.entry ==  '') {
        var a = {
          x: [4,4,6],
          y: [23,18,18],
          mode: 'lines+markers',
          type: 'scatter'
        };
        
        var b = {
          x: [7,7],
          y: [23,18],
          mode: 'lines+markers',
          type: 'scatter'
        };
        
        var c = {
          x: [8,9,10],
          y: [23,18,23],
          mode: 'lines+markers',
          type: 'scatter'
        };
        
        var d = {
          x: [12,11,11,11,12,11,11,12],
          y: [18,18,20.5,23,23,23,20.5,20.5],
          mode: 'lines+markers',
          type: 'scatter'
        };
        
        var e = {
          x: [3,1,1,3,3,2,4],
          y: [14,14,9,9,11.5,11.5,11.5],
          mode: 'lines+markers',
          type: 'scatter'
        };
        
        var f = {
          x: [7,5,7,7,5,5,5],
          y: [9,11.5,11.5,14,14,11.5,9],
          mode: 'lines+markers',
          type: 'scatter'
        };
        
        var g = {
          x: [8,9,8.5,9.5,9,10],
          y: [9,14,11.5,11.5,14,9],
          mode: 'lines+markers',
          type: 'scatter'
        };
        
        var h = {
          x: [11,11,11,13,13,11],
          y: [9,11.5,14,14,11.5,11.5],
          mode: 'lines+markers',
          type: 'scatter'
        };
        
        var i = {
          x: [14,14,14,16,16,'16'],
          y: [9,14,11.5,11.5,14,'9'],
          mode: 'lines+markers',
          type: 'scatter',
          marker:{
            color: 'skyblue'
          }
        
        }
        
        var lay = {
          xaxis:{
            rangemode:'tozero'
          },
        
          yaxis:{
            rangemode:'tozero'
          },
        
          margin:{
            pad:20
          },
        
          font: {
            color: 'grey'
          }
        
        }
        
        var data = [a,b,c,d,e,f,g,h,i];
        
        Plotly.newPlot('myyDiv', data, lay);
         
      }
    }
      
    },

    methods: {

      autoG() {
       this.ax = '20', this.ay ='0', this.bx='60', this.by='0',
       this.cx='100', this.cy ='40', this.dx=''
      },

      lag() {
        var label = this.$refs.label
       
          label.classList.remove("active");
       
      },
    
      xre(){
        i = this.entry
        j = 0
        k = this.editedEntry
        jj = 0
        gg = []
        hh = []
        ggg = []
        mainr = []
        while ( j < i) { 
         d = k[j].x
         e = k[j].y
         
            ggg.push(d)
            ggg.push(e)
            ggg.push(1)
            mainr.push(ggg)
            ggg = []

          
          gg.push(d)
          hh.push(e)
          
          j++
         
        }
        this.mainr = mainr
        gg.push(gg[0])
        hh.push(hh[0])

        mm = (Number(this.entry)) 
        sd = 0
        if (this.ccd > 0) {
          oo = this.xx.length
          gg = []
          hh = []
         
          
          while (sd < mm) {
            ld = k[sd].x
            le = k[sd].y
            
               gg.push(ld)
               hh.push(le)
               sd++
              
          }
         gg.push(gg[0])
         hh.push(hh[0])

         var e = {
          x: gg,
         
          y: hh,
          mode: 'lines+markers',
          type: 'scatter'
        };

     

        
        this.data.push(e);
        console.log(this.data,000)
        this.ccd = 0
        }


        else if (this.uud > 0) {
          this.uud = 0
        
        }
         

      else if (this.ood > 0) {
        this.ood = 0
      }

        else  {
          fff = this.data.length
          if (this.data.length == 0) {
            fff = this.data.length
          }

          else {
            fff = this.data.length-1
          }
        
         mm = (Number(this.entry)) 
         sd = 0
            
            gg = []
            hh = []
          
            while (sd < mm) {
              ld = k[sd].x
              le = k[sd].y
              
                 gg.push(ld)
                 hh.push(le)
                 sd++
                
            }
           gg.push(gg[0])
           hh.push(hh[0])
            var e = {
              x: gg,
             
              y: hh,
              mode: 'lines+markers',
              type: 'scatter'
            };
    
            this.data[fff]=  e;
          
            console.log(this.data, 00, gg , hh)
          
         
        }
      
    
        var lay = {
          xaxis:{
            rangemode:'tozero'
          },
        
          yaxis:{
            rangemode:'tozero'
          }

        }
        

        Plotly.newPlot('myyDiv', this.data, lay);
        

       
        

        const a = math.matrix(this.mainr)
        const b = math.matrix([
          [ this.coos(this.rotat) ,  this.siin(-this.rotat) , 0],
          [this.siin(this.rotat), this.coos(this.rotat) ,0] ,
          [0,0,1]])
        c = math.multiply(a, b)
        this.eachS = c

    //    console.log(this.eachS)
        
       
        
      },

      cleara() {
        this.entry = ''
        j = 0
        k = 1
        l = 0
        m = 0
        while (j < 24) {
          this.defaultEntry[j].x
           = ''

          

           this.defaultEntry[j].y
         = ''
             
            

            j++
    

            
           
        }

        var a = {
          x: [4,4,6],
          y: [23,18,18],
          mode: 'lines+markers',
          type: 'scatter'
        };
        
        var b = {
          x: [7,7],
          y: [23,18],
          mode: 'lines+markers',
          type: 'scatter'
        };
        
        var c = {
          x: [8,9,10],
          y: [23,18,23],
          mode: 'lines+markers',
          type: 'scatter'
        };
        
        var d = {
          x: [12,11,11,11,12,11,11,12],
          y: [18,18,20.5,23,23,23,20.5,20.5],
          mode: 'lines+markers',
          type: 'scatter'
        };
        
        var e = {
          x: [3,1,1,3,3,2,4],
          y: [14,14,9,9,11.5,11.5,11.5],
          mode: 'lines+markers',
          type: 'scatter'
        };
        
        var f = {
          x: [7,5,7,7,5,5,5],
          y: [9,11.5,11.5,14,14,11.5,9],
          mode: 'lines+markers',
          type: 'scatter'
        };
        
        var g = {
          x: [8,9,8.5,9.5,9,10],
          y: [9,14,11.5,11.5,14,9],
          mode: 'lines+markers',
          type: 'scatter'
        };
        
        var h = {
          x: [11,11,11,13,13,11],
          y: [9,11.5,14,14,11.5,11.5],
          mode: 'lines+markers',
          type: 'scatter'
        };
        
        var i = {
          x: [14,14,14,16,16,'16'],
          y: [9,14,11.5,11.5,14,'9'],
          mode: 'lines+markers',
          type: 'scatter',
          marker:{
            color: 'skyblue'
          }
        
        }
        
        var lay = {
          xaxis:{
            rangemode:'tozero'
          },
        
          yaxis:{
            rangemode:'tozero'
          },
        
          margin:{
            pad:20
          },
        
          font: {
            color: 'grey'
          }
        
        }
        
        var data = [a,b,c,d,e,f,g,h,i];
        
        Plotly.newPlot('myyDiv', data, lay);
        
      },

      cleg() {
        this.data = []

        
      },

      cla(){

        this.data = []
        
        this.transatx = ''
       
        this.transaty=''
        
        
        this.scalaty=''
       
        this.scalatx= ''
        
       
      },

      cancel(){
        this.transatx = ''
       
        this.rotat= ''
        this.scalatx= ''
        
       
      },

      cancell(){
       
        this.transaty=''
        this.rotat= ''
        
        this.scalaty=''
      },


      sfr() {
        a = this.entry
        j = 0
        k = 1
        l = 0
        m = 0
        while (j < a) {
          this.defaultEntry[j].x
           = this.ro(this.eachS.subset(math.index(l, m))).toString()

           m++

           this.defaultEntry[j].y
           = this.ro(this.eachS.subset(math.index(l, m))).toString()
             
            j++
    

             if (m = 1){
               m = 0
               l++
             }
           
        }
      },

      sft() {
        a = this.entry
        j = 0
        k = 1
        l = 0
        m = 0
        while (j < a) {
          this.defaultEntry[j].x
           = (Number(this.transatx) +
            Number(this.defaultEntry[j].x))
           .toString()

           m++

           this.defaultEntry[j].y
           = (Number(this.transaty) +
           Number( this.defaultEntry[j].y))
          .toString()

            j++
    

             if (m = 1){
               m = 0
               l++
             }
           
        }
      },

      sfs() {


        const aa = math.matrix(this.mainr)
        const bb = math.matrix([
          [ (this.scalatx) ,  0 , 0],
          [0, (this.scalaty) ,0] ,
          [0,0,1]])
        d = math.multiply(aa, bb)
        this.eachSS = d

        a = this.entry
        j = 0
        k = 1
        l = 0
        m = 0
        while (j < a) {
          this.defaultEntry[j].x
           = (this.eachSS.subset(math.index(l, m))).toString()

           m++

           this.defaultEntry[j].y
           = (this.eachSS.subset(math.index(l, m))).toString()
             
            j++
    

             if (m = 1){
               m = 0
               l++
             }
           
        }


      },

      undo() {
        this.uud ++
       // a = (this.ccc - 1).toString() + 'i'
        a = this.mainaa.indexOf('current')
        this.mainaa[a] = 'stop'
        s1 = this.mainaa[a-1]; s2 = this.mainaa[a-2]
        s3 = this.mainaa[(a+1)-s1] ;  s4 = (a-1)-s1; s6 = a+ 2
        s5 = this.mainaa.slice(s4,s4+s1); s6 = this.mainaa[a+2]
        zz = 0
        vv = 0
        lo = []
        ko = []
        loo = []
        koo = []
        while (vv < s6) {
          g = s5[zz]
          
          zz++
          h = s5[zz]
          zz++

          vv++

          lo.push(g)
          ko.push(h)

        }

        lo.push(lo[0])
        ko.push(ko[0])

     
        zzz = 0
        vvv = 0
        qqq = []
        qqe = []

        s8 = this.data.length
        while (vvv < s8) {
        
            g = this.data[vvv].x
            
            while ((zzz < g.length)) {
              qqq.push(g[zzz])
              zzz++
            }
            zzz  = 0

         //   console.log(qqq,lo)

            h = this.data[vvv].y

            while ((zzz < h.length)) {
              qqe.push(h[zzz])
              zzz++
            }

            zzz = 0

          

            console.log(qqe,ko)
         

            if ((qqq == lo)) {
              console.log('same')
            }
            else {
              console.log(6677)
            }
            qqq=[]; qqe= [] 
            vvv++
        
        }

        
        var e = {
          x: lo,
         
          y: ko,
          mode: 'lines+markers',
          type: 'scatter'
        };

        s7 = this.data.pop()





//        console.log(s7,'on')
        e = (Number(this.mainaa[(a+1)].slice(0,-1)) - 1)
        .toString() + 'i'
      
        entryy = (Number(this.mainaa[(a+2)]))
        this.entry = entryy
        b = this.mainaa.indexOf(e)
        this.mainaa[b-1] = 'current'
        c = b-2
        d = this.mainaa[c]
        nl = this.mainaa.slice((c-d),(c))
        console.log(this.mainaa)
        console.log(nl,this.data, 111)


        e = this.entry
        j = 0
        k = 1
        l = 0
        m = 0
        while (j < e) {
          this.defaultEntry[j].x
           = nl[m].toString()

           m++

           this.defaultEntry[j].y
           = nl[m].toString()
             
            m++

            j++
    

            
           
        }



      },

      redo() {
       
       


       

         this.ood ++
         // a = (this.ccc - 1).toString() + 'i'
          a = this.mainaa.indexOf('current')
          this.mainaa[a] = 'stop'
          e = (Number(this.mainaa[(a+1)].slice(0,-1)) + 1)
          .toString() + 'i'
          b = this.mainaa.indexOf(e)
          s = b-1
          s1 = this.mainaa[s-1]; s2 = this.mainaa[s-2]
          s3 = this.mainaa[(s+1)-s1] ;  s4 = (s-1)-s1; s6 = b+ 2
          s5 = this.mainaa.slice(s4,s4+s1); s6 = this.mainaa[s+2]
          console.log(s6, 's5')
          zz = 0
          vv = 0
          lo = []
          ko = []
          loo = []
          koo = []
          while (vv < s6) {
            g = s5[zz]
            
            zz++
            h = s5[zz]
            zz++
  
            vv++
  
            lo.push(g)
            ko.push(h)
  
          }
  
          lo.push(lo[0])
          ko.push(ko[0])

               
        var e = {
          x: lo,
         
          y: ko,
          mode: 'lines+markers',
          type: 'scatter'
        };

         this.data.push(e)
         console.log(this.data, s6)

         entryy = (Number(this.mainaa[(a+2)]))
        this.entry = entryy
      
         this.mainaa[b-1] = 'current'
         c = b-2
         d = this.mainaa[c]
         nl = this.mainaa.slice((c-d),(c))
         console.log(nl,this.data, 111)

         e = this.entry
         j = 0
         k = 1
         l = 0
         m = 0
         while (j < e) {
           this.defaultEntry[j].x
            = nl[m].toString()
 
            m++
 
            this.defaultEntry[j].y
            = nl[m].toString()
              
             m++
 
             j++
     
 
             
            
         }
 
       },


       rug(j,k) {
        a = (k - 1).toString() + 'i'
        
        if (this.mainaa.indexOf(a) == -1) {
          (this.mainaa[(j)]) = a
          
        }

        else {
          c = this.mainaa.indexOf(a)
          this.mainaa[j] = a
          d = k-1
          this.rugg(c,d)
          

          
        }
      },

      rugg(j,k) {
        a = (k - 1).toString() + 'i'
        
        if (this.mainaa.indexOf(a) == -1) {
          (this.mainaa[(j)]) = a
          
        }

        else {
          c = this.mainaa.indexOf(a)
          this.mainaa[j] = a
          d = k-1
          

          
        }
      },


      solvee() {

        this.ccc ++
        this.ccd ++

        if  (this.checker == 1) {

          if (this.transatx)  {
            this.sft()
          }
  
          else if (this.rotat) {
            this.sfr()
          }
          
          else if (this.scalatx) {
            this.sfs()
          }   

          
          a = this.defaultEntry
          b = this.entry * 2
          c= 0
          f =this.mainaa.indexOf('current')
          this.mainaa[f] = 'stop'
          while (c < this.entry) {
            d = this.defaultEntry[c].x
            e = this.defaultEntry[c].y
           this.mainaa.push(d)
           this.mainaa.push(e)
            c++
         
        }
        this.mainaa.push(b)
        this.mainaa.push('current')
        this.mainaa.push(this.ccc.toString() + 'i')
         this.mainaa.push(this.entry)

        

        g = f+1
        h = Number(this.mainaa[(f+1)][0]) 
        i  = (this.ccc - 1).toString() + 'i'


        if ((this.ccc-1) == h) {

        }

        else {
          j = this.mainaa.indexOf(i)
          l = f+1
         this.mainaa[l] = i
          k = this.ccc-1
          l = (this.ccc - 1).toString() + 'i'
          this.rug(j,k)
        }

     
      }

        else {
          this.checker = 1
        a = this.defaultEntry
        b = this.entry
        f = b * 2
        c= 0
        while (c < b) {
          d = this.defaultEntry[c].x
          e = this.defaultEntry[c].y
          this.mainaa.push(d)
          this.mainaa.push(e)
          c++

        }

        c = 0
        this.mainaa.push(f)
        this.mainaa.push('current')
        this.mainaa.push(this.ccc.toString() + 'i')
         this.mainaa.push(this.entry)
       
      

        if (this.transatx)  {
          this.sft()
        }

        else if (this.rotat) {
          this.sfr()
        }
        
        else if (this.scalatx) {
          this.sfs()
        }   

        while (c < b) {
          d = this.defaultEntry[c].x
          e = this.defaultEntry[c].y
          this.mainaa.push(d)
          this.mainaa.push(e)
          c++

        }

        ff =this.mainaa.indexOf('current')
        this.mainaa[ff] = 'stop'

        this.ccc ++
        this.mainaa.push(f)
        this.mainaa.push('current')
        this.mainaa.push(this.ccc.toString() + 'i')
         this.mainaa.push(this.entry)
        console.log(this.mainaa)

        }
        
      
      
      },

      siin(a) {
        return math.sin(math.unit(a, 'deg'))
      },
  
      coos(a) {
        return math.cos(math.unit(a, 'deg'))
      },
  
      ro(a) {
        return math.round(a,5)
      },
  
      sobR() {

        
        // tt = this.defaultAxis
        // yy = tt.slice(0,3)
        // console.log(yy)

        //  tt = this.editedEntry
        //  yy = tt.filter(numm=> 
        //   (numm.x = Number(numm.x) + 2) 
        //   && (numm.y = Number(numm.y) + 100)
        //   )

       //   console.log(8)
        // const term = this.editedEntry
        // if (term != '') {
        //   ss = ''
        //   tt = term.filter((n) => 
        //   (n.y == ss || n.x == ss)     )
           
        // }

        
        // console.log(this.dy, 44, typeof(this.dy), tt)

        
         
    },

      ccc() {
        this.editedEntry = 
        this.defaultEntry.slice(0,this.entry)
        finalEntry = this.editedEntry
      //  console.log(finalEntry)
        
      },

      liveShow() {
        alert(3)
      }
      ,
      backk() {
        this.ia = false
        this.ina = true
        
      },

      

      showt() {
        this.ina = true
        var homen = this.$refs.homen
        homen.classList.add("active");
        var backnn = this.$refs.backnn
        backnn.classList.add("active2");
        var element = this.$refs.graph   
        element.classList.add("active2");
       
      },

        clearall() {
          this.ax = ''
          this.ay = ''
          this.bx = ''
          this.by = ''
          this.cx = ''
          this.cy = ''

          this.axx = ''
          this.ayy = ''
          this.bxx = ''
          this.byy = ''
          this.cxx = ''
          this.cyy = ''
        },
      
        reset() {
          this.ax = 20
          this.ay = 0
          this.bx = 60
          this.by = 0
          this.cx = 40
          this.cy = 100

          this.ia = false
          this.ina = true
          var element = this.$refs.graph   
          element.classList.remove("active2");


        },

    show() {
      this.ia = true
      this.ina = false
    },

    showprev() {
      var element = this.$refs.graph   
      element.classList.remove("active2");
      var backnn = this.$refs.backnn
        backnn.classList.remove("active2");
        var homen = this.$refs.homen
        homen.classList.remove("active");
        this.ia = true
        this.ina = false
    },

    showg() {
     

      var a = this.ax
      var aa = this.ay
      var b = this.bx
      var bb = this.by
      var c = this.cx
      var cc = this.cy

      var ai = this.axx
      var aai = this.ayy
      var bi = this.bxx
      var bbi = this.byy
      var ci = this.cxx
      var cci = this.cyy

      
      var trace2 = {
        x: [a, b, c, a],
        y: [aa, bb, cc, aa],
        mode: 'lines+markers',
        type: 'scatter'
      };
      
      var trace3 = {
        x: [ai, bi, ci, ai],
        y: [aai, bbi, cci, aai],
        mode: 'lines+markers',
        type: 'scatter'
      };
      
      
      
      var trace22 = {
        x: [3, 4, 2, 3],
        y: [3, 5, 4, 3],
        mode: 'lines+markers',
        type: 'scatter'
      };
      
      var data = [trace22];
      
      Plotly.newPlot('myyDiv', data);
      
    },

   


  
    logic() {
      tt = this.defaultAxis
      yy = tt.slice(0,3)
      const a = math.matrix(yy)
     // console.log(yy)
  
     
      // this.dat =  ans.slice(1,-1).slice(1,-1)
      // this.datt = this.dat.split('], [')
      // bb = this.datt
      // this.f = bb
      
     this.datt = math.round(-6577777.877666,3)
        const b = math.matrix([
          [ this.coos(this.angle) ,  this.siin(-this.angle) , 0],
          [this.siin(this.angle), this.coos(this.angle) ,0] ,
          [0,0,1]])
        const c = math.multiply(a, b)
        this.axx = this.ro(c.subset(math.index(0, 0)))
        this.ayy = this.ro(c.subset(math.index(0, 1)))
        this.bxx = this.ro(c.subset(math.index(1, 0)))
        this.byy = this.ro(c.subset(math.index(1, 1)))
        this.cxx = this.ro(c.subset(math.index(2, 0)))
        this.cyy = this.ro(c.subset(math.index(2, 1)))
  
        this.show()
        this.showg()
  
        
    },

    FirstB() {

      
       
      var a = this.ax
      var aa = this.ay
      var b = this.bx
      var bb = this.by
      var c = this.cx
      var cc = this.cy

      var ai = this.axx
      var aai = this.ayy
      var bi = this.bxx
      var bbi = this.byy
      var ci = this.cxx
      var cci = this.cyy

     this.logic()
     
    }
  }
})


app.mount('#app')