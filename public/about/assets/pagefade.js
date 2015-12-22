var bg = document.body;
bg.addEventListener('animationend', function() {
   bg.style.backgroundColor = '#111';
}, false);
bg.classList.add('bgfade');
