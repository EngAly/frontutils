import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SharedTextArea } from 'src/app/model/sared-textarea';

@Component({
  selector: 'app-generic-textarea',
  templateUrl: './generic-textarea.component.html',
  styleUrls: ['./generic-textarea.component.scss']
})
export class GenericTextareaComponent {

  @Input() sharedTextArea: SharedTextArea
  // @Input() doAction: any;

  @Output() childActionEmitter = new EventEmitter();

  public doAction() {
    this.childActionEmitter.emit();
  }

}
