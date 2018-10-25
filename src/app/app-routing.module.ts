import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './ui/containers/layout/layout.component';
import { MyMaterialNavComponent } from './my-material-nav/my-material-nav.component';

const routes: Routes = [{
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'demos' },
      {
        path: 'demos',
        loadChildren: './demo/demo.module#DemoModule',
      }
    ],
  },
  {
    path: 'material-nav',
    component: MyMaterialNavComponent 
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
