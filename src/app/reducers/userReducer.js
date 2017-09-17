const userReducer = (state={
                       name: "dong",
                       age: 27
                     }, action) => {
  switch (action.type){
    default:
      break;
    case "SET_NAME_FULFILLED":
      state = {
        ...state,
        name: action.payload
      };
      break;
    case "SET_AGE":
      state = {
        ...state,
        age: action.payload
      };
      break;
  }
  return state;
};

export default userReducer;