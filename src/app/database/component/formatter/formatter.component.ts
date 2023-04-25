import {Component} from '@angular/core';
import {format} from 'sql-formatter';
import {SharedTextArea} from 'src/app/model/sared-textarea';
import {SQL_DEMO_TEXT} from 'src/app/utils/mock.database';


@Component({
  selector: 'database-formatter',
  templateUrl: './formatter.component.html',
  styleUrls: ['./formatter.component.scss']
})
export class FormatterComponent {

  sharedTextArea: SharedTextArea = {
    pageHeader: "Sql Formatter",
    workspaceTitle: "",
    resultTitle: "Result",
    primaryBtnTitle: "Format Sql",
    rawText: SQL_DEMO_TEXT,
    result: "",
  }

  public formatJson() {
    this.sharedTextArea.result = format(this.sharedTextArea.rawText);
  }

}
