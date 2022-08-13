
//Lets create lots of circles in different sizes and colors on a webpage!
let canvas = document.getElementById('myCanvas');
//@ts-ignore
let context = canvas.getContext('2d');
var window_height = window.innerHeight;
var window_width = window.innerWidth;
//@ts-ignore
canvas.height = window_height;
//@ts-ignore
canvas.width = window_width;

//@ts-ignore
class Circle {
  constructor(x, y, r, startAngle, endAngle, fillColor) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.fillColor = fillColor;
  }

    draw(context) {
        context.beginPath();
        //@ts-ignore
        //context.arc(this.x, this.y, this.r, this.startAngle, this.endAngle,this.fillColor); just fill with only block;
        context.arc(this.x, this.y, this.r, this.startAngle, this.endAngle);
        context.fillStyle = this.fillColor;
        context.fill();// just fill the color in circles
        context.lineWidth = 2;
        //context.lineCap="round";
        //  context.strokeStyle = '#003300';
        context.stroke();
        context.closePath();
      }
      

}
const c1 = new Circle(50, 50, 20, 0, 2 * Math.PI, "red");
c1.draw(context);




//The circle should have random x, y, radius and color. For giving the circle a random color

//Now lets make art!

setInterval(function() {
    let newColor = generateRandomColor();
  
    function generateRandom(minNum, maxNum) {
        //generate a random decimal from 0 to 1
      let randomDecimal = Math.random();
      let range = maxNum - minNum;
      let scaleUp = Math.round(randomDecimal * range);
      let finalNum = minNum + scaleUp;
      return finalNum;
    }
  
    let xCenter = generateRandom(0, window_width);
    let yCenter = generateRandom(0, window_height);
    let radius = generateRandom(10, 50);
    let c1 = new Circle(xCenter, yCenter, radius, 0, 2 * Math.PI, newColor);
    //console.log(c1);
    c1.draw(context);
  
    function generateRandomColor() {
      let red = generateRandom(0, 255);
      let green = generateRandom(0, 255);
      let blue = generateRandom(0, 255);
      let totalColor = "rgb(" + red + "," + green + "," + blue + ")";
      return totalColor;
    }
  }, 100);
  //Follow the mouse - Optional; 
document.body.addEventListener("mousemove", function(x) {
    //let mouseInfo = 'Position X : ' + x.clientX + 'Position Y : ' + x.clientY;
    let newColor = generateRandomColor();
  
    function generateRandom(minNum, maxNum) {
      let randomDecimal = Math.random();
      let range = maxNum - minNum;
      let scaleUp = Math.round(randomDecimal * range);
      let finalNum = minNum + scaleUp;
      return finalNum;
    }
  
    let radius = generateRandom(10, 50);
    let c1 = new Circle(x.clientX, x.clientY, radius, 0, 2 * Math.PI, newColor);
    //console.log(c1);
    c1.draw(context);

    
  
    function generateRandomColor() {
        // red,green, blue 
        // color 0 to 255.
      let red = generateRandom(0, 255);
      let green = generateRandom(0, 255);
      let blue = generateRandom(0, 255);
      let totalColor = "rgb(" + red + "," + green + "," + blue + ")";
      return totalColor;
    }
  
  });
    










