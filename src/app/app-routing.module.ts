import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CatRouteGuard } from './cat-route.guard';

const routes: Routes = [
	// { path: '', c},
	{ path: 'dogs',  loadChildren: () => import('./dogs/dogs.module').then(mod => mod.DogsModule)},
	{ path: 'cats',  loadChildren: () => import('./cats/cats.module').then(mod => mod.CatsModule), canLoad: [CatRouteGuard]},
	{ path: 'mice',  loadChildren: () => import('./mice/mice.module').then(mod => mod.MiceModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
