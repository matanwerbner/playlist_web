const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_REQUEST = "LOGIN_REQUEST";
const initialValue = {
  pending: false,
  data: null
};

export const LoginRequest = () => ({ type: LOGIN_REQUEST });
export const LoginSuccess = (loginData) => ({type: LOGIN_SUCCESS, payload: loginData});

export default(state = initialValue, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, { pending: true });
    case LOGIN_SUCCESS:
      return Object.assign({}, state, { data: action.payload }, { pending: false })
  }
  return state;
}