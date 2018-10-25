import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppSharedModule } from '../app-shared.module';

import { DemoRoutingModule } from './demo-routing.module';

import { Demo0Component } from './components/demo0/demo0.component';
import { MaterialDemo1Component } from './components/material/demo1/demo1.component';
import { MatCardModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    AppSharedModule,
    DemoRoutingModule,
    MatButtonModule,
    MatCardModule
  ],
  declarations: [
    Demo0Component,
    MaterialDemo1Component
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class DemoModule {
}
