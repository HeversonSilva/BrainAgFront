import produce from 'immer';

const INITIAL_STATE = {
  farm: null,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@user/UPDATE_SUCCESS': {
        draft.farm = action.payload.farm;
        break;
      }
      default:
        return state;
    }
  });
}
