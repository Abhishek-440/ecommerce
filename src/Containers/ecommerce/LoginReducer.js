const initialState = {
  isAuthenticated: false,
};

export default function LoginReducer(state = initialState, action) {
  switch (action.type) {
    case "login": {
      return { ...state, isAuthenticated: action.payload };
    }

    case "logOut": {
      return { ...state, isAuthenticated: action.payload };
    }

    default:
      return state;
  }
}
