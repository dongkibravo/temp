const mathReducer = (state={
                       result: 1,
                       lastValues: []
                     }, action) => {
  switch (action.type){
    default:
      break;
    case "ADD":
      state = {
        ...state,
        result: state.result + action.payload,
        lastValues: [...state.lastValues, action.payload]
      };
      break;
    case "SUBTRACT":
      state = {
        ...state,
        result: state.result - action.payload,
        lastValues: [...state.lastValues, action.payload]
      };
      break;
  }
  return state;
};


export default mathReducer;