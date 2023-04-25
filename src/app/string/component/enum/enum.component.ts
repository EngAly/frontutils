import { Component } from '@angular/core';
import { SharedTextArea } from 'src/app/model/sared-textarea';
import { ENUM_DEMO_CLASS } from 'src/app/utils/mock.database';

@Component({
  selector: 'string-enum',
  templateUrl: './enum.component.html',
  styleUrls: ['./enum.component.scss']
})
export class EnumComponent {

  sharedTextArea: SharedTextArea = {
    pageHeader: "Generate Enum Operations",
    workspaceTitle: "Generate Enum Methods",
    resultTitle: "Result",
    primaryBtnTitle: "Do Generation",
    rawText: ENUM_DEMO_CLASS,
    result: ""
  }

  private methodPrefix = "is"
  entityField = "entityFieldName"


  public doEnumMethodsGeneration() {

    this.sharedTextArea.result = ""
    const enumName = this.getEnumName(this.sharedTextArea.rawText)

    this.getEnumTokens().forEach(item => {
      this.sharedTextArea.result = this.sharedTextArea.result + this.generateEnumMethod(enumName, this.entityField, item);
    })
  }

  private generateEnumMethod(enumName: string, entityField: string, enumItem: string): string {

    var methodName = this.generateMethodName(enumName, enumItem);
    return this.getEnumMethodTemplate(methodName, entityField, enumName, enumItem)
  }

  private generateMethodName(enumName: string, enumItem: string): string {

    var methodName = this.methodPrefix.concat(enumName);

    enumItem.split("_").forEach(item => methodName = methodName.concat(item.substring(0, 1).toUpperCase() + item.substring(1).toLowerCase()))
    return methodName;
  }


  private getEnumMethodTemplate(methodName: string, entityField: string, enumName: string, enumItem: string): string {
    return `public boolean ${methodName}() {\n\treturn this.${entityField} == ${enumName}.${enumItem};\n}\n\n`
  }

  private getEnumTokens(): string[] {

    let tokenSet = new Set<string>();
    var trimmerToken;

    const enumType = this.sharedTextArea.rawText;
    var start = enumType.indexOf("{");
    var end = enumType.indexOf("}");

    enumType.substring(start + 1, end).split(",").forEach(item => {

      if (trimmerToken = this.removeIntruderChars(item))
        tokenSet.add(trimmerToken);
    })

    // return [...tokenSet]
    var tokens = Array.from(tokenSet);
    // console.log(tokens);
    return tokens;
  }

  private removeIntruderChars(value: string): string {

    const bracketIdx = value.includes("(") ? value.indexOf("(") : value.length
    value = value.substring(0, bracketIdx).trim()
    return value;
  }

  private getEnumName(enumClass: string) {

    const enumKeywordIdx = enumClass.indexOf("enum") + "enum".length
    const openedBracketIdx = enumClass.indexOf("{")

    var enumName = enumClass.substring(enumKeywordIdx, openedBracketIdx).trim();
    enumName = enumName.replace("Enum", "");
    return enumName;
  }


}
