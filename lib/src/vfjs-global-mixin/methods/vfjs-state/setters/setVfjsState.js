import { isEqual } from 'lodash-es';
import { VFJS_EVENT_STATE_UPDATED } from '../../../../constants';

function setVfjsState(newState) {
  const state = this.getVfjsState();
  if (!isEqual(newState, state)) {
    this.vfjsState = Object.assign({}, state, newState);
    this.vfjsBus.$emit(VFJS_EVENT_STATE_UPDATED, {});
  }
}

export default setVfjsState;
