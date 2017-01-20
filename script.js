
let header =document.createElement("h1");
header.innerHTML = "Pixel Art Maker!";
header.style.textAlign = "center";
document.body.append(header);

let canvas = document.createElement("div");
canvas.style.width = "50%";
canvas.style.height = "50%";
canvas.style.margin = "0% 25%"
//for loop to append
for (var i = 0; i < 324; i++) {
  let div = document.createElement('div')
  div.style.display = "block"
  div.style.border = "1px solid black"
  div.style.backgroundColor = "#ffffff"
  div.style.height = "5%"
  div.style.float = "left"
  div.style.width = "5%"
  div.innerHTML = "&nbsp;"
  // div.innerHTML= "<div style='display:block; border: 1px solid black;background-color:#ffffff;height:5%;float:left;width:5%'>&nbsp;</div>";
  div.setAttribute("id", `div${i}`)
  div.addEventListener('click', function(){
    console.log(event.target)
  })
  canvas.append(div)
}

document.body.append(canvas)
let blue = document.createElement('div');
blue.innerHTML="<div style='display:block; border: 1px solid black;background-color:#ffffff;height:10%;clear:left;width:10%'>&nbsp;<p>'Click here for blue'</p></div>"
document.body.append(blue);
