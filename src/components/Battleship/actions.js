export const boardLocked = board => ({
  type: "BOARD_LOCKED",
  payload: { board }
});

export const attack = coordinates => ({
  type: "ATTACK",
  payload: coordinates
});