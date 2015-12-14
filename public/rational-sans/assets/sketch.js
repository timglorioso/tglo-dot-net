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

function determineScale() {
    if (windowWidth < 1500) {
        scale = 180;
    } else {
        scale = 250;
    }
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(4);
    pixelDensity(2);
    determineScale();
}

count = 0;

function nextGlyph() {
    if (count >= glyphs.length) {
        count = 0;
    }
    return glyphs[count++]; // for now, increment
}

function drawGlyph(glyph, x, y) {
    image(glyph, 0, 0, glyph.width, glyph.height, x, y, scale, scale);
}

on = false;

function draw() {
    if (on) {
        clear();
        drawGlyph(nextGlyph(), 0, 0);
        drawGlyph(nextGlyph(), 0, scale);
    }
}

function mouseClicked() {
    on = !on;
}
