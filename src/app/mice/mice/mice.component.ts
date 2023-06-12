import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducer';

@Component({
  selector: 'app-mice',
  templateUrl: './mice.component.html',
  styleUrls: ['./mice.component.scss']
})
export class MiceComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch({type: 'MICE_CLICKED'});
  }

}
