import { fromJS } from 'immutable';

export const initialState = fromJS({ });
export const EXAMPLE_ACTION = 'boilerplate/Login/EXAMPLE_ACTION';

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case EXAMPLE_ACTION:
      return state.set('state_nmae', 'state_value');
    default:
      return state;
  }
}

export default loginReducer;
