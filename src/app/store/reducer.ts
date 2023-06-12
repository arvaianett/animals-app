import { Action } from '@ngrx/store'

export interface AppState {
  hasMiceClicked: boolean;
}

export function miceClickReducer(state: boolean = false, action: Action) {
  switch (action.type) {
    case 'MICE_CLICKED':
      return state = true;
    default:
      return state;
  }
}
