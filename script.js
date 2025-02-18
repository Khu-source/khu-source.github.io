// JavaScript for mouse movement and glow effect
window.addEventListener("mousemove", function(e) {
    document.body.style.setProperty('--x', e.clientX + 'px');
    document.body.style.setProperty('--y', e.clientY + 'px');
});
