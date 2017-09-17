const initialState ={
  jwt: null,
  userPk: null,
  fetching: false,
  fetched: false,
  error: null,
};

const authReducer = (state=initialState, action)=>{
  switch(action.type){
    case "LOGIN_FETCHING_START":{
      state ={
        ...state,
        fetching: true,
      };
      break;
    }
    case "LOGIN_FULFILLED":{
      state={
        ...state,
        jwt: action.payload,
        fetching: false,
        fetched: true,
      };
      break;
    }
    case "LOGIN_REJECTED":{
      state={
        ...state,
        fetched: false,
        error: action.payload
      };
      break;
    }
    return state;
  }
};