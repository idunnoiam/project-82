var mouseEvent = "";
var radius;
var lastPositionofx, LastPositionofy;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext('2d');
var color = "black"
var widthOfLine = 1;


canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    radius = document.getElementById("radius").value;
    mouseEvent = "mouseDown";
    color = document.getElementById("color").value;
    widthOfLine = document.getElementById("width_of_line").value;
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {
    mouseEvent = "mouseUp";

}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {
    mouseEvent = "mouseLeave";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    currentPositionofmousex = e.clientX - canvas.offsetLeft;
    currentPositionofmousey = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthOfLine;
        ctx.arc(currentPositionofmousex, currentPositionofmousey, radius, 0, 2 * Math.PI);

        ctx.stroke();

    }
    lastPositionofx = currentPositionofmousex;
    LastPositionofy = currentPositionofmousey;



}

function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}