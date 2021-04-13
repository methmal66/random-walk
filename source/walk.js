const findtNextRandomStep = (() => {
  const DIRECTIONS = [
    { x: 0, y: STEP_SIZE },
    { x: STEP_SIZE, y: 0 },
    { x: -STEP_SIZE, y: 0 },
    { x: 0, y: -STEP_SIZE },
  ];
  return () => {
    const option = Math.round(3 * Math.random());
    return DIRECTIONS[option];
  };
})();

const findGotoLocation = (current) => {
  const step = findtNextRandomStep();
  if (isWalkInsideCanvas(current)) {
    return {
      x: current.x + step.x,
      y: current.y + step.y,
    };
  }
  return INITIAL_LOCATION;
};

const findNextCoordinate = (() => {
  let current = INITIAL_LOCATION;
  return () => {
    current = findGotoLocation(current);
    return current;
  };
})();

const isWalkInsideCanvas = (coords) =>
  coords.x < CANVAS.WIDTH &&
  coords.x > 0 &&
  coords.y < CANVAS.HEIGHT &&
  coords.y > 0;
