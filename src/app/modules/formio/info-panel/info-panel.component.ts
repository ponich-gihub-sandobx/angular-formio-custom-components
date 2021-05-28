import {Component, Input, Output, EventEmitter} from '@angular/core';
import {FormioForm} from '@formio/angular/formio.common';

@Component({
  selector: 'app-formio-info-panel',
  templateUrl: './info-panel.component.html',
  styleUrls: ['./info-panel.component.scss']
})
export class InfoPanelComponent {
  @Input() form: FormioForm = {};
  @Output() updatedForm = new EventEmitter<FormioForm>();

  onLoad(customFormObject: HTMLTextAreaElement): void {
    try {
      this.form = JSON.parse(customFormObject.value);
      this.updatedForm.emit(this.form);
    } catch (e) {
      console.error('Your object is not valid', [customFormObject, customFormObject.value]);
    }
  }

  onCopy(formObjectPreview: HTMLElement): void {
    copyToClipboard(formObjectPreview.innerText);
  }

  onSelectAll(formObjectPreview: HTMLElement): void {
    const range = document.createRange();
    range.selectNode(formObjectPreview);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
  }
}

const copyToClipboard = (val: string) => {
  const selBox = document.createElement('textarea');
  selBox.style.position = 'fixed';
  selBox.style.left = '0';
  selBox.style.top = '0';
  selBox.style.opacity = '0';
  selBox.value = val;
  document.body.appendChild(selBox);
  selBox.focus();
  selBox.select();
  document.execCommand('copy');
  document.body.removeChild(selBox);
};
