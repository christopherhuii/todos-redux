import { SWITCH_LIST } from './../actions/action-creators';

export default(state = 1, payload) => {
  switch(payload.type) {
    case SWITCH_LIST:
      return payload.listId;
    default:
      return state;
  }
}
