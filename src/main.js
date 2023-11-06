var root = document.querySelector(':root');
// document.body.style.visibility = "hidden"
/* function grow() {
    var rs = getComputedStyle(root);
    console.log("root", rs.getPropertyValue('--font'))
} */
setTimeout(() => {
    // document.body.style.visibility = "visible"
    root.style.setProperty('--footer-height', "3em");
    root.style.setProperty('--title-top', "-1em");
    root.style.setProperty('--left-sidebar', "0");
}, 150)
