import level1_reducer from './level1_reducer';
import level2_reducer from './level2_reducer';
import level3_reducer from './level3/level3_reducer';
import level3_header_reducer from './level3/level3_header_reducer';

const rootReducer = {
    level1: level1_reducer,
    level2: level2_reducer,
    level3: level3_reducer,
    L3_header: level3_header_reducer
};

export default rootReducer