function preload() {
    glyphs = [
        loadImage('assets/svg/a.svg'),
        loadImage('assets/svg/b.svg'),
        loadImage('assets/svg/c.svg'),
        loadImage('assets/svg/d.svg'),
        loadImage('assets/svg/e.svg'),
        loadImage('assets/svg/f.svg'),
        loadImage('assets/svg/h.svg'),
        loadImage('assets/svg/i.svg'),
        loadImage('assets/svg/l.svg'),
        loadImage('assets/svg/n.svg'),
        loadImage('assets/svg/o.svg'),
        loadImage('assets/svg/p.svg'),
        loadImage('assets/svg/q.svg'),
        loadImage('assets/svg/r.svg'),
        loadImage('assets/svg/s.svg'),
        loadImage('assets/svg/t.svg'),
        loadImage('assets/svg/u.svg')
    ];
}

scale = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(4);
    pixelDensity(2);
    if (windowWidth < 1500) {
        scale = 180;
    }
}

count = 0;

function nextGlyph() {
    return glyphs[count++]; // for now, increment
}

function drawGlyph(x, y) {
    if (count < glyphs.length) {
        img = nextGlyph();
        image(img, 0, 0, img.width, img.height, x, y, scale, scale);
    } else {
        count = 0;
    }
}

on = false;

function draw() {
    if (on) {
        clear();
        drawGlyph(0, 0);
        drawGlyph(0, 180);
    }
}

function mouseClicked() {
    on = !on;
}
