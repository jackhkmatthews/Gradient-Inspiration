var html = '';
var rgbColor;
var rgbColor1;
var rgbColor2;


function getRgbNumber() {
  return Math.floor(Math.random() * 256 );
}

function getRgbColor () {
  var color = 'rgb(' + getRgbNumber() + ',' + getRgbNumber() + ',' + getRgbNumber() + ')';
  return color;
}
  
for (var i = 0; i < 1; i += 1) {
  rgbColor1 = getRgbColor();
  rgbColor2 = getRgbColor();
  html += '<h2>Top: ' + rgbColor1 + ' to bottom: ' + rgbColor2 + '</h2><div style="background:linear-gradient(' + rgbColor1 + ',' + rgbColor2 + ');"></div>';
}

document.write(html);

// use setTimeout or setInterval() to keep changing the color
// automatically every two seconds