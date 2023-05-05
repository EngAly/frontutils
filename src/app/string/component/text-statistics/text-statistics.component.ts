import {Component, OnInit} from '@angular/core';
import {TEXT_STATS_DEMO} from "../../../utils/mock.database";

@Component({
  selector: 'app-text-statistics',
  templateUrl: './text-statistics.component.html',
  styleUrls: ['./text-statistics.component.scss']
})
export class TextStatisticsComponent implements OnInit{

  text = TEXT_STATS_DEMO
  htmlContent = '';

  private linesCount = "Lines Count";
  private wordsCount = "Words Count";
  private length = "Length";
  private charCount = "Chars Count";
  private spacesCount = "Spaces Count";

  private stack1 = new Array();
  private stack2 = new Array();

  ngOnInit(): void {
    this.getStatistics();
  }


  public getStatistics() {
    this.htmlContent = '';
    let statsMap = this.populateMapWithTextStats();
    this.populateMapToHtml(statsMap);
  }

  public clear() {
    this.stack1 = [];
    this.stack2 = [];
    this.text = '';
    this.htmlContent = '';
  }

  private populateMapWithTextStats(): Map<string, number> {
    let statsText = this.text;
    let statsMap: Map<string, number> = new Map();

    return statsMap
      .set(this.linesCount, this.getLinesCount(statsText))
      .set(this.wordsCount, this.getWordsCount(statsText))
      .set(this.length, this.getTextLength(statsText))
      .set(this.charCount, this.getTextChars(statsText))
      .set(this.spacesCount, this.getSpacesCount(statsText))
      ;
  }

  private populateMapToHtml(statsMap: Map<string, number>) {
    Array.from(statsMap.keys()).forEach(key => {
      this.htmlContent += `<h4 class="text-stats-key">${key}: <span class="text-stats-value">${statsMap.get(key)}</span></h4>`;
    });
  }

  private getWordsCount(text: string): number {
    return text.split(/\s+/).length;
  }

  private getTextLength(text: string): number {
    return text.length;
  }

  private getTextChars(text: string): number {
    return text.replace(/\s/g, "").length;
  }

  private getSpacesCount(text: string): number {
    return this.getTextLength(text) - this.getTextChars(text);
  }

  private getLinesCount(text: string): number {
    const lines = (text.match(/\n/g) || '').length + 1
    return lines;
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

    this.getStatistics();

  }

  public undo() {

    let value = this.stack1.pop();
    value = value == this.text ? this.stack1.pop() : value;

    if (value) {
      this.text = value;
      this.stack2.push(value);
    }

    this.getStatistics();
  }

}
