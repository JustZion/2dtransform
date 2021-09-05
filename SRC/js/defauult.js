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
