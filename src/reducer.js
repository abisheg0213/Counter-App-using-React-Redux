export default function reducer(state = 0, action) {
  if (action.type === "Increment") {
    return state + 1;
  } else if (action.type === "Decrement") {
    return state - 1;
  }
  return state;
}
