const getRandomDirection = (stepSize) => {
  const DIRECTIONS = [
    { x: stepSize, y: stepSize },
    { x: -stepSize, y: stepSize },
    { x: stepSize, y: -stepSize },
    { x: -stepSize, y: -stepSize },
  ];
  return () => {
    const option = Math.round(3 * Math.random());
    return DIRECTIONS[option];
  };
};

const randomDirection = getRandomDirection(2);

const nextCoordinates = (initialLocation) => {
  let currentLocation = initialLocation;
  return () => {
    const step = randomDirection();
    const gotoLocation = {
      x: currentLocation.x + step.x,
      y: currentLocation.y + step.y,
    };
    currentLocation = gotoLocation;
    return gotoLocation;
  };
};

const findNextCoordinates = nextCoordinates({ x: 200, y: 200 });

function setup() {
  createCanvas(790, 580);
  strokeWeight(3);
}

function draw() {
  const coords = findNextCoordinates();
  point(coords.x, coords.y);
}
