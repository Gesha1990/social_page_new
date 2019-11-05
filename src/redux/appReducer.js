import { myDataThunkCreator} from "./authReducer";

const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS';

let initialState = {
  initializing: false
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS: {
      return {
        ...state,
        initializing: action.initializing
      };
    }
    default:
      return state;
  }
}
const initializingAppAC = () => ({type: INITIALIZED_SUCCESS, initializing: true});

export const initializeAPPThunkCreator = () => (dispatch) => {
  let promise = dispatch(myDataThunkCreator());
  promise.then(() => {
    dispatch(initializingAppAC())
  });

};

export default appReducer;