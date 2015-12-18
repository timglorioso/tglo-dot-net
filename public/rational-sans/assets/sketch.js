/*
 * Rational Sans (Showcase)
 *
 * a p5js program to display the Rational Sans typeface design
 *
 * by tim glorioso
 *
 *                                  R
 *                              Q = —
 *                                  S
 *
 */

// global variables
var glyphs;
var rationalQ;
var equalsSign;
var fractionBar;
var scale;

// likely to change or be removed
var count;
var on;

/*
 * Fetch all the SVG resources before starting the sketch.
 */
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
        loadImage('assets/svg/u.svg'),
        loadImage('assets/svg/O_.svg')
    ];

    rationalQ = loadImage('assets/svg/Q_.svg');
    equalsSign = loadImage('assets/svg/equals-sign.svg');
    fractionBar = loadImage('assets/svg/fraction-bar.svg');
}

/*
 * Employ media-query-esque window width checking to put the 'S' in SVG.
 */
function determineScale() {
    if (windowWidth < 1500) {
        scale = 180;
    } else {
        scale = 250;
    }
}

/*
 * Initialize and configure the drawing environment.
 */
function setup() {

    /* Setup canvas, set animation and display properties */
    createCanvas(windowWidth, windowHeight);
    frameRate(2);
    pixelDensity(2);
    determineScale();

    /* Place the equals sign in the center of the window */
    var centerX = (windowWidth / 2) - (scale / 2);
    var centerY = (windowHeight / 2) - (scale / 1.4);
    drawGlyph(equalsSign, centerX, centerY);

    /* Place the Q and fraction bar relative to the equals sign */
    drawGlyph(rationalQ, centerX - scale / 1.2, centerY + scale / 12);
    drawGlyph(fractionBar, centerX + scale, centerY + scale / 10);

    count = 0;
    on = true;
}

/*
 * Return a glyph from the glyphs list to use in the next drawing.
 */
function nextGlyph() {
    return glyphs[floor(random(glyphs.length))];
}

/*
 * Because I never want to decipher those method arguments again.
 */
function drawGlyph(glyph, x, y) {
    image(glyph, 0, 0, glyph.width, glyph.height, x, y, scale, scale);
}

/*
 * Draw the next two glyphs at the specified locations.
 *
 * Thanks to the speed of modern computers, this sequence seems to occur
 * instantaneously.
 */
function draw() {
    var glyph1 = nextGlyph();
    var glyph2 = nextGlyph();

    var locX = (windowWidth / 2) + (scale / 2);
    var locY = (windowHeight / 2) - 1.2 * scale;

    // out with the old glyphs (sorta)
    fill(255);
    noStroke();
    rect(locX, locY - 30, scale, scale);
    rect(locX, locY + scale + 50, scale, scale);

    // in with the new glyphs
    drawGlyph(glyph1, locX, locY - 30);
    drawGlyph(glyph2, locX, locY + scale + 50);
}

function mouseClicked() {
    if (on) {
        noLoop();
    } else {
        loop();
    }
    on = !on;
}
