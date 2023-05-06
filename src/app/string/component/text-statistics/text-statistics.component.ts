import {Component} from '@angular/core';
import {TEXT_STATS_DEMO} from "../../../utils/mock.database";

@Component({
  selector: 'app-text-statistics',
  templateUrl: './text-statistics.component.html',
  styleUrls: ['./text-statistics.component.scss']
})
export class TextStatisticsComponent {

  text = TEXT_STATS_DEMO
  htmlContent = '';

  private stack1 = new Array();
  private stack2 = new Array();

  public setStatistics(text: string) {
    this.htmlContent = text;
  }

  public clear() {
    this.stack1 = [];
    this.stack2 = [];
    this.text = '';
    this.htmlContent = '';
  }


  public do() {

    let value = this.stack2.pop();

    if (value) {
      this.stack1.push(value);
    }

    value = value == this.text ? this.stack2.pop() : value;


    if (value) {
      this.text = value;
      this.stack1.push(value);
    } else {
      if (this.text) {
        this.stack1.push(this.text);
      }
      this.text = "";
    }
  }

  public undo() {

    let value = this.stack1.pop();
    value = value == this.text ? this.stack1.pop() : value;

    if (value) {
      this.text = value;
      this.stack2.push(value);
    }
  }

}
