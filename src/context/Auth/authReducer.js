import { TOKEN_KEY_NAME } from '../../config/static.config';

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      localStorage.setItem(
        TOKEN_KEY_NAME,
        JSON.stringify(action.payload.user.accessToken)
      );
      return {
        ...state,
        token: action.payload.user.accessToken,
        user: action.payload.user,
      };
    default:
      return state;
  }
};
export default reducer;
