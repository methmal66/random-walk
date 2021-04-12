const getRandomStep = (stepSize) => {
  const DIRECTIONS = [
    { x: 0, y: stepSize },
    { x: stepSize, y: 0 },
    { x: -stepSize, y: 0 },
    { x: 0, y: -stepSize },
  ];
  return () => {
    const option = Math.round(3 * Math.random());
    return DIRECTIONS[option];
  };
};

const randomStep = getRandomStep(STEP_SIZE);

const findGotoLocation = (init) => {
  return (current) => {
    const step = randomStep();
    if (isWalkInsideCanvas(current)) {
      return {
        x: current.x + step.x,
        y: current.y + step.y,
      };
    }
    return init;
  };
};

const findNextCoordinate = (init) => {
  let currentLocation = init;
  const gotoLocation = findGotoLocation(init);
  return () => {
    currentLocation = gotoLocation(currentLocation);
    return currentLocation;
  };
};

const nextCoordinate = findNextCoordinate(INITIAL_LOCATION);

const isWalkInsideCanvas = (coords) =>
  coords.x < CANVAS.WIDTH &&
  coords.x > 0 &&
  coords.y < CANVAS.HEIGHT &&
  coords.y > 0;
