var toolLinks = document.querySelectorAll('[data-bs-toggle="tooltip"]');



function handleClick(event) {
    event.preventDefault();
    let target = event.target;
    target.classList.add("tooltip-active")
}
document.addEventListener("click",(e)=>{
    for (let i = 0; i < toolLinks.length; i++) {
        toolLinks[i].classList.remove("tooltip-active")
    }
})
for (let i = 0; i < toolLinks.length; i++) {
    toolLinks[i].addEventListener('click' , handleClick);
}
