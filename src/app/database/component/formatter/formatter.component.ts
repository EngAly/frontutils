import { Component } from '@angular/core';
import { format } from 'sql-formatter';
import { SQL_DEMO_TEXT } from 'src/app/utils/mock.database';


@Component({
  selector: 'database-formatter',
  templateUrl: './formatter.component.html',
  styleUrls: ['./formatter.component.scss']
})
export class FormatterComponent {

  title = "Sql Formatter";

  rawText: string = SQL_DEMO_TEXT;
  formattedText: string = "";

  public formatJson() {
    this.formattedText = format(this.rawText);
  }


}