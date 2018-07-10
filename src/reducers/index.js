import level1_reducer from './level1_reducer';
import level2_reducer from './level2_reducer';
import level3_reducer from './level3/level3_reducer';
import level3_header_reducer from './level3/level3_header_reducer';
import level4_reducer from './level4_reducer';
import level5_reducer from './level5/level5_reducer';
import level6_reducer from './level6/level6_reducer';

const rootReducer = {
    level1: level1_reducer,
    level2: level2_reducer,
    level3: level3_reducer,
    L3_header: level3_header_reducer,
    level4: level4_reducer,
    level5: level5_reducer,
    level6: level6_reducer
};

export default rootReducer