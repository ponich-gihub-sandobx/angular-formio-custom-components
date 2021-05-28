import {Component} from '@angular/core';
import {FormioForm, FormioOptions} from '@formio/angular';

@Component({
  selector: 'app-formio-editor',
  template: `
    <div class="container">
      <form-builder
        (change)="onFormChange($event)"
        [form]="form"
        [options]="options"></form-builder>

      <div>
        <app-formio-info-panel [form]="form" (updatedForm)="onUpdateForm($event)"></app-formio-info-panel>
      </div>
    </div>
  `,
  styles: [
    '@import "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"',
    '@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"',
  ]
})
export class EditorComponent {
  public form: FormioForm = {
    components: [],
  };

  public options: CustomFormioOptions = {
    advanced: true,
    noDefaultSubmitButton: true,
    builder: {
      customBasic: {
        title: 'Custom Components',
        default: true,
        weight: 0,
        components: {
          'SimpleInput': true
        }
      },
    },
  };

  onFormChange($event: any): void {

  }

  onUpdateForm($event: FormioForm) {
    this.form = $event;
  }
}

export interface CustomFormioOptions extends FormioOptions {
  noDefaultSubmitButton?: boolean;
  basic?: boolean;
  advanced?: boolean;
  data?: boolean;
  builder?: {
    basic?: boolean;
    advanced?: boolean;
    data?: boolean;
    customBasic?: any;
    custom?: any;
    layout?: any;
    premium?: any;
  };
}
