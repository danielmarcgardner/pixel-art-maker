//Creating the header for the page
let header =document.createElement("h1");
header.innerHTML = "Pixel Art Maker!";
header.style.textAlign = "center";
document.body.append(header);

//Creating instructions
let instructions = document.createElement("h3");
instructions.innerHTML = "Click to start brush and double click to end brush stroke!";
instructions.style.textAlign = "center";
document.body.append(instructions);

//Global variable for all color and mousedown
var color = 'White'
var mousedown = false;

//creating the picture canvas
let canvas = document.createElement("div");
canvas.style.width = "600px";
canvas.style.height = "600px";
canvas.style.margin = "0% 25%"
canvas.style.display = "inline-block"

//for loop to append the pixels to the canvas
for (var i = 0; i < 1764; i++) {
  let div = document.createElement('div')
  div.style.display = "block";
  div.style.border = "1px solid black";
  div.style.backgroundColor = "#ffffff";
  div.style.height = "2%";
  div.style.float = "left";
  div.style.width = "2%";
  div.innerHTML = "&nbsp;";
  div.setAttribute("id", `div${i}`);
  //event listener for pixels to start brush
  div.addEventListener('click', function(){
    console.log(event.target);
    this.style.backgroundColor = color;
    mousedown = true;
  })
  //event listner for brush
  div.addEventListener('mouseenter', function(){
    if (mousedown){
      this.style.backgroundColor = color;
    }
  })
  //event listener to end brush
div.addEventListener('dblclick', function(){
  mousedown = false;
})
  //appending the pixels to the canvas
  canvas.append(div);
}

// append the canvas to the body
document.body.append(canvas);

//creating the color palette to hold all colors
let palette = document.createElement('div');
palette.style.marginLeft = "5%";

//all css named colors minus the duplicates for the greys
let cssNames = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];


//loop to create all colors
for (var i = 0; i < cssNames.length; i++) {
  let colorCells = document.createElement('div');
  let currColor = cssNames[i];
  colorCells.style.backgroundColor = currColor;
  colorCells.setAttribute("class", "colorSelectors")
  colorCells.style.height = "40px";
  colorCells.style.width = "100px";
  colorCells.style.display = "inline-block";
  colorCells.style.float = "left";
  colorCells.style.border = "1px solid black";
  colorCells.style.fontSize = "65%"
  colorCells.style.textAlign = "center"
  colorCells.innerText = cssNames[i];
  colorCells.addEventListener("click", function(){
    //sets color to click on
    color = currColor;
    // sets current color selector information
    currentColor.style.backgroundColor = color;
    currentColor.innerText = "Your current color is: "+color;
  })
  // append palette to page
  palette.append(colorCells);
}

// creates the current color cell at the bottom
let currentColor = document.createElement('div')
currentColor.innerText = "Your current color is: "+color;
currentColor.style.height = "40px";
currentColor.style.width = "600px";
currentColor.style.display = "inline-block";
currentColor.style.border = "1px solid black";
currentColor.style.float = "left";
palette.append(currentColor);
document.body.append(palette);

// creates and adds the made by
let madeby = document.createElement('div');
madeby.style.clear ="left";
madeby.innerHTML= "<br><br><h2>Made by Daniel Gardner for Galvnize G42 ⚙️🏅👍</h2>";
document.body.append(madeby);
