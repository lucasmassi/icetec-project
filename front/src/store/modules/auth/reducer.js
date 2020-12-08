import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
  verifyToken: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/SIGN_IN_SUCCESS': {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.token = null;
        draft.signed = false;
        break;
      }
      case '@auth/VERIFY_TOKEN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/VERIFY_TOKEN_SUCCESS': {
        draft.loading = false;
        draft.verifyToken = true;
        draft.forgotSuccess = false;
        break;
      }
      case '@auth/VERIFY_TOKEN_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@auth/RETURN_VERIFY_TOKEN': {
        draft.verifyToken = false;
        break;
      }
      case '@auth/RESET_ALL_COOKIES': {
        draft.verifyToken = false;
        draft.forgotSuccess = false;
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
