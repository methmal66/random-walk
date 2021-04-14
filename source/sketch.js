function setup() {
  createCanvas(CANVAS.WIDTH, CANVAS.HEIGHT);
  strokeWeight(STROKE_WEIGHT);
}

function draw() {
  const coords = findNextCoordinate();
  point(coords.x, coords.y);
}
