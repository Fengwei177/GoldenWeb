
function setup() {
    let canvas = createCanvas(400, 400);
    
    
    canvas.parent("sketch");
    
    
  
}


function draw() {
  
 
  
  let size = map(mouseX, 0, 400, 0, 400);
  let constrainedSize = constrain(size, 0, 400);
  let strokeValue = map(mouseY, 0, 400, 0.25, 40);

  strokeWeight(strokeValue);
  stroke(255);
  
  
  rect(width/1000, height/1000, constrainedSize, constrainedSize);
  fill(10, 50, 194);

  
}