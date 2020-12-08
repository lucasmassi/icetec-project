export function signInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password },
  };
}

export function signInSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user },
  };
}

export function signUpRequest(name, email, state, password) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: { name, email, state, password },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE'
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}

export function verifyTokenRequest(token) {
  return {
    type: '@auth/VERIFY_TOKEN_REQUEST',
    payload: { token },
  };
}

export function verifyTokenSuccess() {
  return {
    type: '@auth/VERIFY_TOKEN_SUCCESS',
  };
}

export function verifyTokenFailure() {
  return {
    type: '@auth/VERIFY_TOKEN_FAILURE',
  };
}

export function returnVerifyToken() {
  return {
    type: '@auth/RETURN_VERIFY_TOKEN'
  };
}

export function resetAllCookies() {
  return {
    type: '@auth/RESET_ALL_COOKIES'
  };
}