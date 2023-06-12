import { Injectable } from '@angular/core';
import { CanLoad } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from './store/reducer';

@Injectable({
  providedIn: 'root'
})
export class CatRouteGuard implements CanLoad {
  constructor(private store: Store<AppState>) {}

  canLoad(): boolean {
    let helper = false;
    this.store.select('hasMiceClicked').subscribe(mc => {
      if (mc === true) {
        helper = true;
      }
    })
    if (helper === false) {
      alert('Csak az egerek megtekintése után lehet a macskákat megnézni.');
    }
    return helper;
  }

}
