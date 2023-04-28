import {Component, Input, OnInit, Output} from '@angular/core';
import {DiffEditorModel} from "ngx-monaco-editor";
import {REMOVE_EMPTY_LINE_EXPRESSION} from "../../../utils/constants";

@Component({
  selector: 'app-text-compare',
  templateUrl: './text-compare.component.html',
  styleUrls: ['./text-compare.component.scss']
})
export class TextCompareComponent implements OnInit {

  originalText = "";
  modifiedText = "";
  isCompared = false;

  @Output() selectedLang = "plaintext";
  @Output() selectedTheme = "vs";

  @Input()
  languages = [
    "bat",
    "c",
    "coffeescript",
    "cpp",
    "csharp",
    "csp",
    "css",
    "dockerfile",
    "fsharp",
    "go",
    "handlebars",
    "html",
    "ini",
    "java",
    "javascript",
    "json",
    "less",
    "lua",
    "markdown",
    "msdax",
    "mysql",
    "objective-c",
    "pgsql",
    "php",
    "plaintext",
    "postiats",
    "powershell",
    "pug",
    "python",
    "r",
    "razor",
    "redis",
    "redshift",
    "ruby",
    "rust",
    "sb",
    "scss",
    "sol",
    "sql",
    "st",
    "swift",
    "typescript",
    "vb",
    "xml",
    "yaml"
  ];

  @Input()
  themes = [
    {
      value: "vs",
      name: "Visual Studio"
    },
    {
      value: "vs-dark",
      name: "Visual Studio Dark"
    },
    {
      value: "hc-black",
      name: "High Contrast Dark"
    }
  ];

  inputOptions = {theme: "vs", language: 'plaintext'};
  diffOptions = {theme: "vs", language: "plaintext", readOnly: true, renderSideBySide: true};

  originalModel: DiffEditorModel = {
    code: '',
    language: 'plaintext'
  };

  modifiedModel: DiffEditorModel = {
    code: '',
    language: 'plaintext'
  };

  public ngOnInit() {

  }

  onChangeLanguage(language: any) {
    this.inputOptions = Object.assign({}, this.inputOptions, {language: language});
    this.originalModel = Object.assign({}, this.originalModel, {language: language});
    this.modifiedModel = Object.assign({}, this.modifiedModel, {language: language});
  }

  onChangeTheme(theme: any) {
    this.inputOptions = Object.assign({}, this.inputOptions, {theme: theme});
    this.diffOptions = Object.assign({}, this.diffOptions, {theme: theme});
  }

  onChangeInline(checked: any) {
    this.diffOptions = Object.assign({}, this.diffOptions, {renderSideBySide: !checked});
  }

  onCompare() {
    this.originalModel = Object.assign({}, this.originalModel, {code: this.originalText});
    this.modifiedModel = Object.assign({}, this.originalModel, {code: this.modifiedText});
    this.isCompared = true;
    window.scrollTo(0, 0); // scroll the window to top
  }

  returnToOriginalText() {
    this.isCompared = false;
  }

  removeLeftTextEmptyLines() {
    this.originalText = this.originalText.replace(REMOVE_EMPTY_LINE_EXPRESSION, "")
  }

  removeRightTextEmptyLines() {
    this.modifiedText = this.modifiedText.replace(REMOVE_EMPTY_LINE_EXPRESSION, "")
  }

  clearOriginalText() {
    this.originalText = "";
  }

  clearModifiedText() {
    this.modifiedText = "";
  }

  clearAll() {
    this.originalText = "";
    this.modifiedText = "";
  }

}
