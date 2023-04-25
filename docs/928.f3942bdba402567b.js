(self.webpackChunkutils=self.webpackChunkutils||[]).push([[928],{928:(J,T,u)=>{"use strict";u.r(T),u.d(T,{StringModule:()=>M});var O=u(895),h=u(433),e=u(256);let x=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({}),n})(),v=(()=>{class n{transform(t,r){try{return this.applyColors("object"==typeof t?t:JSON.parse(t),r[0],r[1])}catch{return this.applyColors({error:"Invalid JSON"},r[0],r[1])}}applyColors(t,r=!1,s=4){let l=1;return"string"!=typeof t&&(t=JSON.stringify(t,void 0,3)),t=(t=t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")).replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,j=>{let C="number";return/^"/.test(j)?C=/:$/.test(j)?"key":"string":/true|false/.test(j)?C="boolean":/null/.test(j)&&(C="null"),'<span class="'+C+'">'+j+"</span>"}),r?t.replace(/^/gm,()=>`<span class="number-line pl-3 select-none" >${String(l++).padEnd(s)}</span>`):t}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275pipe=e.Yjl({name:"prettyjsoncustom",type:n,pure:!0}),n})(),w=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[O.ez,h.u5]}),n})();var o=u(736),i=u(563);let a=(()=>{class n{constructor(){this.childActionEmitter=new e.vpe}doAction(){this.childActionEmitter.emit()}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-generic-textarea"]],inputs:{sharedTextArea:"sharedTextArea"},outputs:{childActionEmitter:"childActionEmitter"},decls:12,vars:5,consts:[[1,"row"],[1,"col-5"],[1,"textarea-size","p-2",3,"ngModel","ngModelChange"],[1,"col-1","align-self-center"],[1,"btn","btn-success","btn-md","m-1",3,"click"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h5"),e._uU(3),e.qZA(),e.TgZ(4,"textarea",2),e.NdJ("ngModelChange",function(l){return r.sharedTextArea.rawText=l}),e.qZA()(),e.TgZ(5,"div",3)(6,"button",4),e.NdJ("click",function(){return r.doAction()}),e._uU(7),e.qZA()(),e.TgZ(8,"div",1)(9,"h5"),e._uU(10),e.qZA(),e.TgZ(11,"textarea",2),e.NdJ("ngModelChange",function(l){return r.sharedTextArea.result=l}),e.qZA()()()),2&t&&(e.xp6(3),e.Oqu(r.sharedTextArea.workspaceTitle),e.xp6(1),e.Q6J("ngModel",r.sharedTextArea.rawText),e.xp6(3),e.Oqu(r.sharedTextArea.primaryBtn),e.xp6(3),e.Oqu(r.sharedTextArea.resultTitle),e.xp6(1),e.Q6J("ngModel",r.sharedTextArea.result))},dependencies:[h.Fj,h.JJ,h.On]}),n})(),d=(()=>{class n{constructor(){this.sharedTextArea={pageHeader:"Generate Enum Operations",workspaceTitle:"Generate Enum Methods",resultTitle:"Result",primaryBtn:"Do Generation",rawText:i.XD,result:""},this.methodPrefix="is",this.entityField="entityFieldName"}doEnumMethodsGeneration(){this.sharedTextArea.result="";const t=this.getEnumName(this.sharedTextArea.rawText);this.getEnumTokens().forEach(r=>{this.sharedTextArea.result=this.sharedTextArea.result+this.generateEnumMethod(t,this.entityField,r)})}generateEnumMethod(t,r,s){var l=this.generateMethodName(t,s);return this.getEnumMethodTemplate(l,r,t,s)}generateMethodName(t,r){var s=this.methodPrefix.concat(t);return r.split("_").forEach(l=>s=s.concat(l.substring(0,1).toUpperCase()+l.substring(1).toLowerCase())),s}getEnumMethodTemplate(t,r,s,l){return`public boolean ${t}() {\n\treturn this.${r} == ${s}.${l};\n}\n\n`}getEnumTokens(){let t=new Set;var r;const s=this.sharedTextArea.rawText;var l=s.indexOf("{"),j=s.indexOf("}");return s.substring(l+1,j).split(",").forEach(N=>{(r=this.removeIntruderChars(N))&&t.add(r)}),Array.from(t)}removeIntruderChars(t){const r=t.includes("(")?t.indexOf("("):t.length;return t.substring(0,r).trim()}getEnumName(t){const r=t.indexOf("enum")+4,s=t.indexOf("{");var l=t.substring(r,s).trim();return l.replace("Enum","")}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["string-enum"]],decls:5,vars:3,consts:[[1,"container-fluid"],[1,"text-center"],[1,"input-group-text",3,"ngModel","ngModelChange"],[3,"sharedTextArea","childActionEmitter"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0)(1,"h2",1),e._uU(2),e.qZA(),e.TgZ(3,"input",2),e.NdJ("ngModelChange",function(l){return r.entityField=l}),e.qZA(),e.TgZ(4,"app-generic-textarea",3),e.NdJ("childActionEmitter",function(){return r.doEnumMethodsGeneration()}),e.qZA()()),2&t&&(e.xp6(2),e.Oqu(r.sharedTextArea.pageHeader),e.xp6(1),e.Q6J("ngModel",r.entityField),e.xp6(1),e.Q6J("sharedTextArea",r.sharedTextArea))},dependencies:[h.Fj,h.JJ,h.On,a]}),n})();var f=u(272),g=u.n(f);const k=[{path:"",component:(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-string"]],decls:11,vars:0,consts:[[1,"card"],[1,"card-body"],[1,"nav"],[1,"nav-item"],["routerLink","enum","routerLinkActive","active",1,"nav-link"],["routerLink","formatter","routerLinkActive","active",1,"nav-link"],[1,"card-text"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"ul",2)(3,"li",3)(4,"a",4),e._uU(5," Enum "),e.qZA()(),e.TgZ(6,"li",3)(7,"a",5),e._uU(8," Formatter "),e.qZA()()(),e.TgZ(9,"p",6),e._UZ(10,"router-outlet"),e.qZA()()())},dependencies:[o.lC,o.rH,o.Od]}),n})(),children:[{path:"enum",component:d},{path:"formatter",component:(()=>{class n{constructor(t){this.prettyJsonCustomPipe=t,this.title="Text Formatter",this.rawText=i.rC,this.formatter=new(g())(JSON.parse(this.rawText))}formatJson(){var t=document.getElementById("jsonFormatterParent"),r=this.createPreNode();r.innerHTML=this.prettyJsonCustomPipe.transform(this.rawText,[!0,3]),this.renewOldNode(t,r)}formatJsonDetails(){this.formatter=new(g())(JSON.parse(this.rawText));var t=document.getElementById("jsonFormatterParent"),r=this.createDivNode();this.renewOldNode(t,r)}toggleOpen(){this.formatter.toggleOpen()}expandAll(){var t=new Number("Infinity");this.formatter.openAtDepth(t)}collapseAll(){this.formatter.openAtDepth(0)}renewOldNode(t,r){var s=t?.childElementCount;return s>1?this.replaceLastChildNode(t,r):this.appendChildNode(t,r),r}appendChildNode(t,r){t?.appendChild(r)}replaceLastChildNode(t,r){var s=t?.lastChild;t?.replaceChild(r,s)}createDivNode(){let t=this.formatter.render();return t.setAttribute("class","textarea-scroller"),t}createPreNode(){var t=document.createElement("pre");return t.setAttribute("class","textarea-scroller"),t}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(v))},n.\u0275cmp=e.Xpm({type:n,selectors:[["string-formatter"]],decls:22,vars:2,consts:[[1,"container-fluid"],[1,"text-center"],[1,"row"],[1,"col-5","m-2"],[1,"textarea-size",3,"ngModel","ngModelChange"],[1,"col-1","align-self-center"],[1,"btn","btn-success","btn-md","m-1",3,"click"],[1,"btn","btn-secondary","btn-md","m-1",3,"click"],["id","jsonFormatterParent",1,"col-5","m-2"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0)(1,"h1",1),e._uU(2),e.qZA(),e.TgZ(3,"div",2)(4,"div",3)(5,"h3"),e._uU(6,"raw text"),e.qZA(),e.TgZ(7,"textarea",4),e.NdJ("ngModelChange",function(l){return r.rawText=l}),e.qZA()(),e.TgZ(8,"div",5)(9,"button",6),e.NdJ("click",function(){return r.formatJson()}),e._uU(10,"Format Json"),e.qZA(),e.TgZ(11,"button",6),e.NdJ("click",function(){return r.formatJsonDetails()}),e._uU(12,"Format Json Details"),e.qZA(),e.TgZ(13,"button",7),e.NdJ("click",function(){return r.toggleOpen()}),e._uU(14,"Toggle Open"),e.qZA(),e.TgZ(15,"button",7),e.NdJ("click",function(){return r.expandAll()}),e._uU(16,"Expand All"),e.qZA(),e.TgZ(17,"button",7),e.NdJ("click",function(){return r.collapseAll()}),e._uU(18,"Collapse All"),e.qZA()(),e.TgZ(19,"div",8)(20,"h3"),e._uU(21,"Result"),e.qZA()()()()),2&t&&(e.xp6(2),e.Oqu(r.title),e.xp6(5),e.Q6J("ngModel",r.rawText))},dependencies:[h.Fj,h.JJ,h.On],styles:["p[_ngcontent-%COMP%]{font-family:Lato}"]}),n})()}]}];let _=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[o.Bz.forChild(k),o.Bz]}),n})(),M=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[v],imports:[O.ez,h.u5,x,w,_]}),n})()},272:function(J){J.exports=function(){"use strict";function T(o){return null===o?"null":typeof o}function u(o){return!!o&&"object"==typeof o}function O(o){if(void 0===o)return"";if(null===o||"object"==typeof o&&!o.constructor)return"Object";var i=/function ([^(]*)/.exec(o.constructor.toString());return i&&i.length>1?i[1]:""}function h(o,i,a){return"null"===o||"undefined"===o?o:("string"!==o&&"stringifiable"!==o||(a='"'+a.replace(/"/g,'\\"')+'"'),"function"===o?i.toString().replace(/[\r\n]/g,"").replace(/\{.*\}/,"")+"{\u2026}":a)}function e(o){var i="";return u(o)?(i=O(o),Array.isArray(o)&&(i+="["+o.length+"]")):i=h(T(o),o,o),i}function m(o){return"json-formatter-"+o}function p(o,i,a){var d=document.createElement(o);return i&&d.classList.add(m(i)),void 0!==a&&(a instanceof Node?d.appendChild(a):d.appendChild(document.createTextNode(String(a)))),d}!function(o){if(o&&typeof window<"u"){var i=document.createElement("style");i.setAttribute("media","screen"),i.innerHTML=o,document.head.appendChild(i)}}('.json-formatter-row {\n  font-family: monospace;\n}\n.json-formatter-row,\n.json-formatter-row a,\n.json-formatter-row a:hover {\n  color: black;\n  text-decoration: none;\n}\n.json-formatter-row .json-formatter-row {\n  margin-left: 1rem;\n}\n.json-formatter-row .json-formatter-children.json-formatter-empty {\n  opacity: 0.5;\n  margin-left: 1rem;\n}\n.json-formatter-row .json-formatter-children.json-formatter-empty:after {\n  display: none;\n}\n.json-formatter-row .json-formatter-children.json-formatter-empty.json-formatter-object:after {\n  content: "No properties";\n}\n.json-formatter-row .json-formatter-children.json-formatter-empty.json-formatter-array:after {\n  content: "[]";\n}\n.json-formatter-row .json-formatter-string,\n.json-formatter-row .json-formatter-stringifiable {\n  color: green;\n  white-space: pre;\n  word-wrap: break-word;\n}\n.json-formatter-row .json-formatter-number {\n  color: blue;\n}\n.json-formatter-row .json-formatter-boolean {\n  color: red;\n}\n.json-formatter-row .json-formatter-null {\n  color: #855A00;\n}\n.json-formatter-row .json-formatter-undefined {\n  color: #ca0b69;\n}\n.json-formatter-row .json-formatter-function {\n  color: #FF20ED;\n}\n.json-formatter-row .json-formatter-date {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n.json-formatter-row .json-formatter-url {\n  text-decoration: underline;\n  color: blue;\n  cursor: pointer;\n}\n.json-formatter-row .json-formatter-bracket {\n  color: blue;\n}\n.json-formatter-row .json-formatter-key {\n  color: #00008B;\n  padding-right: 0.2rem;\n}\n.json-formatter-row .json-formatter-toggler-link {\n  cursor: pointer;\n}\n.json-formatter-row .json-formatter-toggler {\n  line-height: 1.2rem;\n  font-size: 0.7rem;\n  vertical-align: middle;\n  opacity: 0.6;\n  cursor: pointer;\n  padding-right: 0.2rem;\n}\n.json-formatter-row .json-formatter-toggler:after {\n  display: inline-block;\n  transition: transform 100ms ease-in;\n  content: "\u25ba";\n}\n.json-formatter-row > a > .json-formatter-preview-text {\n  opacity: 0;\n  transition: opacity 0.15s ease-in;\n  font-style: italic;\n}\n.json-formatter-row:hover > a > .json-formatter-preview-text {\n  opacity: 0.6;\n}\n.json-formatter-row.json-formatter-open > .json-formatter-toggler-link .json-formatter-toggler:after {\n  transform: rotate(90deg);\n}\n.json-formatter-row.json-formatter-open > .json-formatter-children:after {\n  display: inline-block;\n}\n.json-formatter-row.json-formatter-open > a > .json-formatter-preview-text {\n  display: none;\n}\n.json-formatter-row.json-formatter-open.json-formatter-empty:after {\n  display: block;\n}\n.json-formatter-dark.json-formatter-row {\n  font-family: monospace;\n}\n.json-formatter-dark.json-formatter-row,\n.json-formatter-dark.json-formatter-row a,\n.json-formatter-dark.json-formatter-row a:hover {\n  color: white;\n  text-decoration: none;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-row {\n  margin-left: 1rem;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-children.json-formatter-empty {\n  opacity: 0.5;\n  margin-left: 1rem;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-children.json-formatter-empty:after {\n  display: none;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-children.json-formatter-empty.json-formatter-object:after {\n  content: "No properties";\n}\n.json-formatter-dark.json-formatter-row .json-formatter-children.json-formatter-empty.json-formatter-array:after {\n  content: "[]";\n}\n.json-formatter-dark.json-formatter-row .json-formatter-string,\n.json-formatter-dark.json-formatter-row .json-formatter-stringifiable {\n  color: #31F031;\n  white-space: pre;\n  word-wrap: break-word;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-number {\n  color: #66C2FF;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-boolean {\n  color: #EC4242;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-null {\n  color: #EEC97D;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-undefined {\n  color: #ef8fbe;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-function {\n  color: #FD48CB;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-date {\n  background-color: rgba(255, 255, 255, 0.05);\n}\n.json-formatter-dark.json-formatter-row .json-formatter-url {\n  text-decoration: underline;\n  color: #027BFF;\n  cursor: pointer;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-bracket {\n  color: #9494FF;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-key {\n  color: #23A0DB;\n  padding-right: 0.2rem;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-toggler-link {\n  cursor: pointer;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-toggler {\n  line-height: 1.2rem;\n  font-size: 0.7rem;\n  vertical-align: middle;\n  opacity: 0.6;\n  cursor: pointer;\n  padding-right: 0.2rem;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-toggler:after {\n  display: inline-block;\n  transition: transform 100ms ease-in;\n  content: "\u25ba";\n}\n.json-formatter-dark.json-formatter-row > a > .json-formatter-preview-text {\n  opacity: 0;\n  transition: opacity 0.15s ease-in;\n  font-style: italic;\n}\n.json-formatter-dark.json-formatter-row:hover > a > .json-formatter-preview-text {\n  opacity: 0.6;\n}\n.json-formatter-dark.json-formatter-row.json-formatter-open > .json-formatter-toggler-link .json-formatter-toggler:after {\n  transform: rotate(90deg);\n}\n.json-formatter-dark.json-formatter-row.json-formatter-open > .json-formatter-children:after {\n  display: inline-block;\n}\n.json-formatter-dark.json-formatter-row.json-formatter-open > a > .json-formatter-preview-text {\n  display: none;\n}\n.json-formatter-dark.json-formatter-row.json-formatter-open.json-formatter-empty:after {\n  display: block;\n}\n');var A=/(^\d{1,4}[\.|\\/|-]\d{1,2}[\.|\\/|-]\d{1,4})(\s*(?:0?[1-9]:[0-5]|1(?=[012])\d:[0-5])\d\s*[ap]m)?$/,P=/\d{2}:\d{2}:\d{2} GMT-\d{4}/,x=/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/,v=window.requestAnimationFrame||function(o){return o(),0},w={hoverPreviewEnabled:!1,hoverPreviewArrayCount:100,hoverPreviewFieldCount:5,animateOpen:!0,animateClose:!0,theme:null,useToJSON:!0,sortPropertiesBy:null};return function(){function o(i,a,d,f){void 0===a&&(a=1),void 0===d&&(d=w),this.json=i,this.open=a,this.config=d,this.key=f,this._isOpen=null,void 0===this.config.hoverPreviewEnabled&&(this.config.hoverPreviewEnabled=w.hoverPreviewEnabled),void 0===this.config.hoverPreviewArrayCount&&(this.config.hoverPreviewArrayCount=w.hoverPreviewArrayCount),void 0===this.config.hoverPreviewFieldCount&&(this.config.hoverPreviewFieldCount=w.hoverPreviewFieldCount),void 0===this.config.useToJSON&&(this.config.useToJSON=w.useToJSON),""===this.key&&(this.key='""')}return Object.defineProperty(o.prototype,"isOpen",{get:function(){return null!==this._isOpen?this._isOpen:this.open>0},set:function(i){this._isOpen=i},enumerable:!0,configurable:!0}),Object.defineProperty(o.prototype,"isDate",{get:function(){return this.json instanceof Date||"string"===this.type&&(A.test(this.json)||x.test(this.json)||P.test(this.json))},enumerable:!0,configurable:!0}),Object.defineProperty(o.prototype,"isUrl",{get:function(){return"string"===this.type&&0===this.json.indexOf("http")},enumerable:!0,configurable:!0}),Object.defineProperty(o.prototype,"isArray",{get:function(){return Array.isArray(this.json)},enumerable:!0,configurable:!0}),Object.defineProperty(o.prototype,"isObject",{get:function(){return u(this.json)},enumerable:!0,configurable:!0}),Object.defineProperty(o.prototype,"isEmptyObject",{get:function(){return!this.keys.length&&!this.isArray},enumerable:!0,configurable:!0}),Object.defineProperty(o.prototype,"isEmpty",{get:function(){return this.isEmptyObject||this.keys&&!this.keys.length&&this.isArray},enumerable:!0,configurable:!0}),Object.defineProperty(o.prototype,"useToJSON",{get:function(){return this.config.useToJSON&&"stringifiable"===this.type},enumerable:!0,configurable:!0}),Object.defineProperty(o.prototype,"hasKey",{get:function(){return void 0!==this.key},enumerable:!0,configurable:!0}),Object.defineProperty(o.prototype,"constructorName",{get:function(){return O(this.json)},enumerable:!0,configurable:!0}),Object.defineProperty(o.prototype,"type",{get:function(){return this.config.useToJSON&&this.json&&this.json.toJSON?"stringifiable":T(this.json)},enumerable:!0,configurable:!0}),Object.defineProperty(o.prototype,"keys",{get:function(){if(this.isObject){var i=Object.keys(this.json);return!this.isArray&&this.config.sortPropertiesBy?i.sort(this.config.sortPropertiesBy):i}return[]},enumerable:!0,configurable:!0}),o.prototype.toggleOpen=function(){this.isOpen=!this.isOpen,this.element&&(this.isOpen?this.appendChildren(this.config.animateOpen):this.removeChildren(this.config.animateClose),this.element.classList.toggle(m("open")))},o.prototype.openAtDepth=function(i){void 0===i&&(i=1),i<0||(this.open=i,this.isOpen=0!==i,this.element&&(this.removeChildren(!1),0===i?this.element.classList.remove(m("open")):(this.appendChildren(this.config.animateOpen),this.element.classList.add(m("open")))))},o.prototype.getInlinepreview=function(){var i=this;if(this.isArray)return this.json.length>this.config.hoverPreviewArrayCount?"Array["+this.json.length+"]":"["+this.json.map(e).join(", ")+"]";var a=this.keys,d=a.slice(0,this.config.hoverPreviewFieldCount).map(function(g){return g+":"+e(i.json[g])}),f=a.length>=this.config.hoverPreviewFieldCount?"\u2026":"";return"{"+d.join(", ")+f+"}"},o.prototype.render=function(){this.element=p("div","row");var i=this.isObject?p("a","toggler-link"):p("span");if(this.isObject&&!this.useToJSON&&i.appendChild(p("span","toggler")),this.hasKey&&i.appendChild(p("span","key",this.key+":")),this.isObject&&!this.useToJSON){var a=p("span","value"),d=p("span"),f=p("span","constructor-name",this.constructorName);if(d.appendChild(f),this.isArray){var g=p("span");g.appendChild(p("span","bracket","[")),g.appendChild(p("span","number",this.json.length)),g.appendChild(p("span","bracket","]")),d.appendChild(g)}a.appendChild(d),i.appendChild(a)}else{(a=p(this.isUrl?"a":"span")).classList.add(m(this.type)),this.isDate&&a.classList.add(m("date")),this.isUrl&&(a.classList.add(m("url")),a.setAttribute("href",this.json));var y=h(this.type,this.json,this.useToJSON?this.json.toJSON():this.json);a.appendChild(document.createTextNode(y)),i.appendChild(a)}if(this.isObject&&this.config.hoverPreviewEnabled){var b=p("span","preview-text");b.appendChild(document.createTextNode(this.getInlinepreview())),i.appendChild(b)}var k=p("div","children");return this.isObject&&k.classList.add(m("object")),this.isArray&&k.classList.add(m("array")),this.isEmpty&&k.classList.add(m("empty")),this.config&&this.config.theme&&this.element.classList.add(m(this.config.theme)),this.isOpen&&this.element.classList.add(m("open")),this.element.appendChild(i),this.element.appendChild(k),this.isObject&&this.isOpen&&this.appendChildren(),this.isObject&&!this.useToJSON&&i.addEventListener("click",this.toggleOpen.bind(this)),this.element},o.prototype.appendChildren=function(i){var a=this;void 0===i&&(i=!1);var d=this.element.querySelector("div."+m("children"));if(d&&!this.isEmpty)if(i){var f=0,g=function(){var y=a.keys[f],b=new o(a.json[y],a.open-1,a.config,y);d.appendChild(b.render()),(f+=1)<a.keys.length&&(f>10?g():v(g))};v(g)}else this.keys.forEach(function(y){var b=new o(a.json[y],a.open-1,a.config,y);d.appendChild(b.render())})},o.prototype.removeChildren=function(i){void 0===i&&(i=!1);var a=this.element.querySelector("div."+m("children"));if(i){var d=0,f=function(){a&&a.children.length&&(a.removeChild(a.children[0]),(d+=1)>10?f():v(f))};v(f)}else a&&(a.innerHTML="")},o}()}()}}]);