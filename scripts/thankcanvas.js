function draw() {
    const canvasThank = document.getElementById("canvasThank");
    const ctx = canvasThank.getContext("2d");
    
    ctx.font = "50px Arial";
    ctx.fillText("Hello World",10,80);
    }
  draw();