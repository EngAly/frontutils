import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'string-text-statistics-process',
  template: ''
})
export class TextStatisticsProcessComponent implements OnChanges {

  @Input() text: string;
  @Output() statsEmitter = new EventEmitter();

  htmlContent = '';

  private linesCount = "Lines Count";
  private wordsCount = "Words Count";
  private length = "Length";
  private charCount = "Chars Count";
  private spacesCount = "Spaces Count";

  ngOnChanges(changes: SimpleChanges): void {
    setTimeout(() => {
      this.statsEmitter.emit(this.getStatistics());
    });
  }


  public getStatistics() {
    this.htmlContent = '';
    let statsMap = this.populateMapWithTextStats();
    this.htmlContent = this.populateMapToHtml(statsMap);

    return this.htmlContent
  }

  public clear() {
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

  private populateMapToHtml(statsMap: Map<string, number>): string {
    let htmlContent = '';
    Array.from(statsMap.keys()).forEach(key => {
      htmlContent += `<h4 class="text-stats-key">${key}: <span class="text-stats-value">${statsMap.get(key)}</span></h4>`;
    });

    return htmlContent;
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
}
