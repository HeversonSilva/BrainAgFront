export function SignUpRequest(
  name,
  cpf,
  farm_name,
  city,
  state,
  farm_area,
  plantation
) {
  return {
    type: '@user/SIGN_UP_REQUEST',
    payload: { name, cpf, farm_name, city, state, farm_area, plantation },
  };
}

export function updateRequest(farm) {
  return {
    type: '@user/UPDATE_REQUEST',
    payload: { farm },
  };
}

export function updateSuccess(farm) {
  return {
    type: '@user/UPDATE_SUCCESS',
    payload: { farm },
  };
}

export function updateFailure() {
  return {
    type: '@user/UPDATE_FAILURE',
  };
}
