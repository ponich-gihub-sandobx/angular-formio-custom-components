import {Injector, NgModule} from '@angular/core';
import {FormioModule as FormioCoreModule} from '@formio/angular';
import {EditorComponent} from './editor.component';
import {InfoPanelComponent} from './info-panel/info-panel.component';
import {CommonModule} from '@angular/common';
import {SimpleInputComponent} from './custom-components/simple-input/simple-input.component';
import {registerFormioCustomSimpleInput} from './custom-components/simple-input/simple-input.info';

@NgModule({
  declarations: [
    EditorComponent,
    InfoPanelComponent,
    SimpleInputComponent
  ],
  imports: [
    FormioCoreModule,
    CommonModule
  ],
  exports: [
    EditorComponent
  ],
  providers: [],
  entryComponents: [
    SimpleInputComponent
  ]
})
export class FormioModule {
  constructor(injector: Injector) {
    registerFormioCustomSimpleInput(injector);
  }
}
