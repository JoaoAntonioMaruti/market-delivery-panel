import { fromJS } from 'immutable';

export const initialState = fromJS({});
export const EXAMPLE_ACTION = 'boilerplate/Component/EXAMPLE_ACTION';

function marcaReducer(state = initialState, action) {
  switch (action.type) {
    case EXAMPLE_ACTION:
      return state.set('state_nmae', 'state_value');
    default:
      return state;
  }
}

export default marcaReducer;
