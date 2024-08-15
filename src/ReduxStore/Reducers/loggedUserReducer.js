let blank = [1,2,3];

const loggedUserReducer = (state = [], action) => {
    switch (action.type) {
      case "SET_LOGGEDUSER":
        return action.payload;
      case "LOGOUT":
        console.log("Inside Reducer");
        return [];
      default:
        return state;
    }
  };
  
  export default loggedUserReducer;