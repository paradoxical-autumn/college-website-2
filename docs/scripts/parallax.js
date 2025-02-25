// document.addEventListener("mousemove", parallax);
const elems = document.querySelectorAll(".background-blob")

const default_intensity = 0.05;

function lerp(a, b, t) {
    return a + (b - a) * t;
}

let current_x = 0;
let current_y = 0;
let target_x = 0;
let target_y = 0;

// function parallax(e) {
//     let _w = window.innerWidth/2;
//     let _h = window.innerHeight/2;
//     let _mouseX = e.pageX;
//     let _mouseY = e.pageY;

//     current_x = lerp(current_x, _mouseX, 0.1);
//     current_y = lerp(current_y, _mouseY, 0.1);

//     elems.forEach(element => {
//         element.style.transform = `translate(${current_x * intensity}px, ${current_y * intensity}px)`
//     });
// }

document.addEventListener("mousemove", (event) => {
    target_x = event.screenX;
    target_y = event.screenY;
});

function animate() {
    current_x = lerp(current_x, target_x, 0.1);
    current_y = lerp(current_y, target_y, 0.1);

    elems.forEach(element => {
        let intensity = element.getAttribute("prlx-in") ?? default_intensity
        element.style.transform = `translate(${current_x * intensity}px, ${current_y * intensity}px)`
    });

    requestAnimationFrame(animate)
};

animate();