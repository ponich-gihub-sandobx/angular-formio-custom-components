import {Injector} from '@angular/core';
import {registerCustomFormioComponent} from '@formio/angular';
import {SimpleInputComponent} from './simple-input.component';
import {EditForm} from '../../types/common';

export function registerFormioCustomSimpleInput(injector: Injector): void {
  registerCustomFormioComponent({
    type: 'SimpleInput',
    title: 'Simple Input',
    group: 'basic',
    icon: 'fa fa-edit',
    selector: 'app-formio-custom-simple-input',
    editForm: getEditForm
  }, SimpleInputComponent, injector);
}


const getEditForm = (): EditForm => {
  return {
    components: [
      {
        label: 'Property #1',
        type: 'textfield',
        key: 'prop1',
        input: true
      },
      {
        label: 'Property #2',
        type: 'select',
        key: 'prop2',
        input: true,
        valueProperty: 'value',
        dataSrc: 'values',
        data: {
          values: [
            { label: 'Value 1', value: 'Prop 2, value 1' },
            { label: 'Value 2', value: 'Prop 2, value 2' },
            { label: 'Value 3', value: 'Prop 2, value 3' },
            { label: 'Value 4', value: 'Prop 2, value 4' },
          ],
        },
      }
    ]
  };
};

