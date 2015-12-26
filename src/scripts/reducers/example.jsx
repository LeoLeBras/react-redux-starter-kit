import { EXAMPLE } from 'constants/ActionTypes';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({
    data: {}
});

export function example(state = initialState, action) {
    switch(action.type) {
        case EXAMPLE:
            state = state;
            break;
    }

    return state;
}
