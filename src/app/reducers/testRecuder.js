const initialState={
  fetching: false,
  fetched: false,
  users: [],
  error: null,
};


const testReducer = (state=initialState, action)=>{
  switch(action.type){
    default:
      break;
    case "FETCH_USERS_START":{
      state={
        ...state,
        fetching: true,
      };
      break;
    }
    case "FETCH_USERS_ERROR_REJECTED":{
      state={
        ...state,
        fetching: false,
        error: action.payload,
      };
      break;
    }
    case "FETCH_USERS_FULFILLED":{
      state={
        ...state,
        fetching: false,
        fetched:true,
        users:action.payload,
      };
      break;
    }
  }
  return state;
};

export default testReducer;