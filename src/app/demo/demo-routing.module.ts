import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutSidebarComponent } from '../ui/containers/layout-sidebar/layout-sidebar.component';

import { Demo0Component } from './components/demo0/demo0.component';
import { MaterialDemo1Component } from './components/material/demo1/demo1.component';

const routes: Routes = [{
  path: '',
  component: LayoutSidebarComponent,
  data: {
    links: [
      { label: 'Introduction', url: 'introduction' },
      { label: 'Getting started', url: 'material-getting-started' },
      /*{ label: 'Transform streams', url: 'transform-streams' },
      { label: 'Draw on a canvas', url: 'draw-canvas' },
      { label: 'Network Request', url: 'network-request' },
      { label: 'Text Input', url: 'text-input' },
      { label: 'Creating Observables', url: 'creating-observables' },
      { label: 'Subjects', url: 'subjects' },
      { label: 'Extra Exercises', url: 'extra-exercises' },*/
    ],
  },
  children: [
    { path: '', pathMatch: 'full', redirectTo: 'introduction' },
    { path: 'introduction', component: Demo0Component },
    { path: 'material-getting-started', component: MaterialDemo1Component },
    /* { path: 'transform-streams', component: Demo2Component },
    { path: 'draw-canvas', component: Demo3Component },
    { path: 'network-request', component: Demo4Component },
    { path: 'text-input', component: Demo5Component },
    { path: 'creating-observables', component: Demo6Component },
    { path: 'subjects', component: Demo7Component },
    { path: 'extra-exercises', component: Demo8Component }, */
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
