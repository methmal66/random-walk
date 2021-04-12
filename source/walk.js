const getRandomStep = (stepSize) => {
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

const randomStep = getRandomStep(STEP_SIZE);

const findNextCoordinate = (init) => {
  let currentLocation = init;
  return () => {
    const step = randomStep();
    const gotoLocation = {
      x: currentLocation.x + step.x,
      y: currentLocation.y + step.y,
    };
    currentLocation = gotoLocation;
    return gotoLocation;
  };
};

const nextCoordinate = findNextCoordinate(INITIAL_LOCATION);
