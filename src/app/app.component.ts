import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'animals-app';

  navigationList: NavigationListItem[] = [
    { title: 'egerek', icon: 'assets/mouse_icon.png', routerLink: 'mice'},
    { title: 'macskák', icon: 'assets/cat_icon.png', routerLink: 'cats'},
    { title: 'kutyák', icon: 'assets/dog_icon.png', routerLink: 'dogs'}
  ]
}

interface NavigationListItem {
  title: string;
  icon: string;
  routerLink: string;
}
