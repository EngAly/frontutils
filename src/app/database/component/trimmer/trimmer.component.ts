import {Component} from '@angular/core';
import {format} from 'sql-formatter';
import {SQL_INTRUDER_TEXT} from 'src/app/utils/mock.database';
import {SharedTextArea} from "../../../model/sared-textarea";

@Component({
  selector: 'app-trimmer',
  templateUrl: './trimmer.component.html',
  styleUrls: ['./trimmer.component.scss']
})
export class TrimmerComponent {


  removeChars = '"+';

  sharedTextArea: SharedTextArea = {
    pageHeader: "Sql Trimmer",
    workspaceTitle: "Sql Text",
    resultTitle: "Result",
    primaryBtnTitle: "Trim Text",
    secondaryBtnTitle: "Format Sql",
    secondaryBtnVisibility: true,
    rawText: SQL_INTRUDER_TEXT,
    result: "",
  }

  private tempRawText: string = "";

  public removeIntruderChars() {

    this.tempRawText = this.sharedTextArea.rawText;

    this.removeChars.split('').forEach(char => {
      this.tempRawText = this.tempRawText.replaceAll(char, "");
    });

    this.sharedTextArea.result = this.tempRawText;

  }

  public formatSql() {
    this.removeIntruderChars();
    this.sharedTextArea.result = format(this.sharedTextArea.result);
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
