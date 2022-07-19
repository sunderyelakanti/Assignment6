const INITIAL_STATE = 0;

export const ChangeSign = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
      
    case "DECREMENT":
      return state - 1;
     
    case "RESET":
      return 0;
      
    default:
      return state;
  }
};
