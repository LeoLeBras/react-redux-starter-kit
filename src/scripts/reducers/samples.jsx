import { handleActions } from 'redux-actions';
import {
    SAMPLE
} from 'constants/ActionTypes';

const samples = handleActions({
    [SAMPLE]: (state) => (
        state
    )
}, []);

export default samples;
