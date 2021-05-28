import {Component, EventEmitter} from '@angular/core';
import {FormioCustomComponent, FormioEvent} from '@formio/angular';
import {SimpleInput} from './simple-input';

@Component({
  selector: 'app-formio-custom-simple-input',
  templateUrl: './simple-input.component.html',
  styleUrls: ['./simple-input.component.scss'],
})
export class SimpleInputComponent implements FormioCustomComponent<SimpleInput> {
  disabled: boolean;
  formioEvent: EventEmitter<FormioEvent>;
  value: SimpleInput;
  valueChange: EventEmitter<SimpleInput>;
}
