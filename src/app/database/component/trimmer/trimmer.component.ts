import { Component } from '@angular/core';
import { format } from 'sql-formatter';
import { SQL_DEMO_TEXT, SQL_INTRUDER_TEXT } from 'src/app/utils/mock.database';

@Component({
  selector: 'app-trimmer',
  templateUrl: './trimmer.component.html',
  styleUrls: ['./trimmer.component.scss']
})
export class TrimmerComponent {

  title = "Sql Trimmer";

  removeChars = "";
  rawText: string = SQL_INTRUDER_TEXT;
  private tempRawText: string = "";
  formattedText: string = "";

  public removeIntruderChars() {

    this.tempRawText = this.rawText;

    this.removeChars.split('').forEach(char => {
      this.tempRawText = this.tempRawText.replaceAll(char, "");
    });

    this.formattedText = this.tempRawText;

  }

  public formatJson() {
    this.removeIntruderChars();
    this.formattedText = format(this.formattedText);
  }

  public appendPlus() {
    this.appendRemoveChar("+")
  }

  public appendQuotation() {
    this.appendRemoveChar("\"");
  }

  public appendSingleQuotation() {
    this.appendRemoveChar("'");
  }

  public appendSingleComma() {
    this.appendRemoveChar(",");
  }

  private not(value: boolean): boolean {
    return !value;
  }

  private appendRemoveChar(char: string) {

    if (this.not(this.removeChars.includes(char))) {
      this.removeChars = this.removeChars + char;
    } else {
      this.removeChars = this.removeChars.replace(char, "");
    }
  }

}
