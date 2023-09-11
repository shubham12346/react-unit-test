import { combineReducers } from '@reduxjs/toolkit';
import { dataSliceReducer } from '../../shared/component/datalist/datalist.service';
const combinedReducer = combineReducers({
  listDataReducer : dataSliceReducer
});

const rootReducer = (state: any, action: any) => {
  if (action.type === 'user/logout') {
    state = undefined;
  }
  return combinedReducer(state, action);
};
export default rootReducer;
