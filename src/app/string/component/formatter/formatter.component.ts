import { Component, ElementRef, QueryList, Renderer2, ViewChildren } from '@angular/core';
import JSONFormatter from 'json-formatter-js';
import { JSON_DEMO_TEXT, JSON_DEMO_TEXT_STRING } from 'src/app/utils/mock.database';
import { PrettyJsonCustomPipe } from '../../pipe/prettyjson.pipe';

@Component({
  selector: 'string-formatter',
  templateUrl: './formatter.component.html',
  styleUrls: ['./formatter.component.scss']
})
export class FormatterComponent {

  title = "Text Formatter";

  rawText: string = JSON_DEMO_TEXT_STRING;
  formatter: JSONFormatter = new JSONFormatter(JSON.parse(this.rawText));

  constructor(private prettyJsonCustomPipe: PrettyJsonCustomPipe) {

  }

  protected formatJson() {

    var parentElement = document.getElementById('jsonFormatterParent');
    var newNode = this.createPreNode();
    newNode.innerHTML = this.prettyJsonCustomPipe.transform(this.rawText, [true, 3]);

    this.renewOldNode(parentElement, newNode);
  }

  protected formatJsonDetails() {

    this.formatter = new JSONFormatter(JSON.parse(this.rawText));
    var parentElement = document.getElementById('jsonFormatterParent');
    var newNode = this.createDivNode();

    this.renewOldNode(parentElement, newNode);
  }


  protected toggleOpen() {
    this.formatter.toggleOpen();
  }

  protected expandAll() {

    var infinity = new Number("Infinity") as number;
    this.formatter.openAtDepth(infinity);
  }

  protected collapseAll() {
    this.formatter.openAtDepth(0);
  }

  private renewOldNode(parentElement: HTMLElement | null, newNode: Node): Node {

    var count = parentElement?.childElementCount as number;
    count > 1 ? this.replaceLastChildNode(parentElement, newNode) : this.appendChildNode(parentElement, newNode)

    return newNode;
  }

  private appendChildNode(parentElement: HTMLElement | null, newNode: Node) {

    parentElement?.appendChild(newNode);
  }

  private replaceLastChildNode(parentElement: HTMLElement | null, newNode: Node) {

    var oldNode = parentElement?.lastChild as Node;
    parentElement?.replaceChild(newNode, oldNode);
  }

  private createDivNode(): HTMLDivElement {

    let newNode = this.formatter.render() as HTMLDivElement;
    newNode.setAttribute("class", "textarea-scroller");

    return newNode;
  }

  private createPreNode(): HTMLPreElement {

    var newNode = document.createElement("pre");
    newNode.setAttribute("class", "textarea-scroller");

    return newNode;
  }


}
