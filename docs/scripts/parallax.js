document.addEventListener("mousemove", parallax);
const elems = document.querySelectorAll(".background-blob")

const intensity = 0.05;

function parallax(e) {
    let _w = window.innerWidth/2;
    let _h = window.innerHeight/2;
    let _mouseX = e.clientX;
    let _mouseY = e.clientY;

    elems.forEach(element => {
        element.style.transform = `translate(${_mouseX * intensity}px, ${_mouseY * intensity}px)`
    });
}