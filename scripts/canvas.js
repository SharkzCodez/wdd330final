function draw1() {
  const canvas1 = document.getElementById("canvasOne");
  if (canvas1.getContext) {
    const ctx = canvas1.getContext("2d");

    ctx.strokeStyle = "#216869";
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 100);
    ctx.stroke();
  }
}
draw1();

function draw2() {
  const canvas2 = document.getElementById("canvasTwo");
  if (canvas2.getContext) {
    const ctx = canvas2.getContext("2d");

    ctx.fillStyle = "#216869";
    ctx.fillRect(25, 25, 100, 100);
    ctx.clearRect(45, 45, 60, 60)
  }
}
draw2();

function draw3() {
  const canvas3 = document.getElementById("canvasThree");
  if (canvas3.getContext) {
    const ctx = canvas3.getContext("2d");

    ctx.fillStyle = "#CD7A89";
    ctx.fillRect(10, 10, 50, 50);

    ctx.fillStyle = "#21686980";
    ctx.fillRect(30, 30, 50, 50);
  }
}
draw3();

function draw4() {
  const canvas4 = document.getElementById("canvasFour");
  if (canvas4.getContext) {
    const ctx = canvas4.getContext("2d");

    const grad=ctx.createLinearGradient(0,0, 280,0);
    grad.addColorStop(0, "#CD7A89");
    grad.addColorStop(1, "#216869");

    ctx.fillStyle = grad;
    ctx.fillRect(10,10, 280,130);
  }
}
draw4();

function draw5() {
  const canvas5 = document.getElementById("canvasFive");
  if (canvas5.getContext) {
    const ctx = canvas5.getContext("2d");

    ctx.fillStyle = "#CD7A89";
    ctx.beginPath();
    ctx.moveTo(75, 40);
    ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
    ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
    ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
    ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
    ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
    ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
    ctx.fill();
  }
}
draw5();

function draw6() {
  const canvas6 = document.getElementById("canvasSix");
  if (canvas6.getContext) {
    const ctx = canvas6.getContext("2d");

    ctx.strokeStyle = "#216869";
    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true);
    ctx.moveTo(110, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false);
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true);
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true);
    ctx.stroke();
  }
}
draw6();
