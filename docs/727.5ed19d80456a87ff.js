"use strict";(self.webpackChunkutils=self.webpackChunkutils||[]).push([[727],{2247:(J,V,a)=>{a.d(V,{$:()=>f});var o=a(8256),_=a(6895),g=a(433);const A=function(c){return{"d-none":c}};let f=(()=>{class c{constructor(){this.childActionEmitter=new o.vpe,this.secondaryChildActionEmitter=new o.vpe}doAction(){this.childActionEmitter.emit()}doSecondaryAction(){this.secondaryChildActionEmitter.emit()}}return c.\u0275fac=function(O){return new(O||c)},c.\u0275cmp=o.Xpm({type:c,selectors:[["app-generic-textarea"]],inputs:{sharedTextArea:"sharedTextArea"},outputs:{childActionEmitter:"childActionEmitter",secondaryChildActionEmitter:"secondaryChildActionEmitter"},decls:14,vars:9,consts:[[1,"row"],[1,"col-5"],[1,"textarea-size","p-2",3,"ngModel","ngModelChange"],[1,"col-1","align-self-center"],[1,"btn","btn-success","btn-md","m-1",3,"click"],[1,"btn","btn-success","btn-md","m-1",3,"ngClass","click"]],template:function(O,h){1&O&&(o.TgZ(0,"div",0)(1,"div",1)(2,"h6"),o._uU(3),o.qZA(),o.TgZ(4,"textarea",2),o.NdJ("ngModelChange",function(T){return h.sharedTextArea.rawText=T}),o.qZA()(),o.TgZ(5,"div",3)(6,"button",4),o.NdJ("click",function(){return h.doAction()}),o._uU(7),o.qZA(),o.TgZ(8,"button",5),o.NdJ("click",function(){return h.doSecondaryAction()}),o._uU(9),o.qZA()(),o.TgZ(10,"div",1)(11,"h6"),o._uU(12),o.qZA(),o.TgZ(13,"textarea",2),o.NdJ("ngModelChange",function(T){return h.sharedTextArea.result=T}),o.qZA()()()),2&O&&(o.xp6(3),o.Oqu(h.sharedTextArea.workspaceTitle),o.xp6(1),o.Q6J("ngModel",h.sharedTextArea.rawText),o.xp6(3),o.Oqu(h.sharedTextArea.primaryBtnTitle),o.xp6(1),o.Q6J("ngClass",o.VKq(7,A,1!=h.sharedTextArea.secondaryBtnVisibility)),o.xp6(1),o.hij("",h.sharedTextArea.secondaryBtnTitle," "),o.xp6(3),o.Oqu(h.sharedTextArea.resultTitle),o.xp6(1),o.Q6J("ngModel",h.sharedTextArea.result))},dependencies:[_.mk,g.Fj,g.JJ,g.On]}),c})()},8747:(J,V,a)=>{a.d(V,{x:()=>A});var o=a(6895),_=a(433),g=a(8256);let A=(()=>{class f{}return f.\u0275fac=function(E){return new(E||f)},f.\u0275mod=g.oAB({type:f}),f.\u0275inj=g.cJS({imports:[o.ez,_.u5]}),f})()},5563:(J,V,a)=>{a.d(V,{DG:()=>c,GH:()=>_,XD:()=>f,km:()=>o,rC:()=>A});const o="INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)\nVALUES\n('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger','4006','Norway');\n",_='"SELECT\n" +\n                "     trs.payment_method,\n" +\n                "     SUM( (\n" +\n                "         SELECT\n" +\n                "             pyt.amount\n" +\n                "         FROM\n" +\n                "             ci_pyt_transactions pyt\n" +\n                "         WHERE\n" +\n                "             pyt.id = trs.pyt_trs_id\n" +\n                "             AND pyt.status IN(\n" +\n                "                 2,3\n" +\n                "             )\n" +\n                "             AND (OPERATOR(\'Trunc\', trs.payment_date) >= OPERATOR(\'Trunc\', ?1)\n" +\n                "                   AND OPERATOR(\'Trunc\', trs.payment_date) <= OPERATOR(\'Trunc\', ?2) )\n" +\n                "     ) ) total_paid_within_filtered_date,\n" +\n                "     SUM( (\n" +\n                "         SELECT\n" +\n                "             pyt.amount\n" +\n                "         FROM\n" +\n                "             ci_pyt_transactions pyt\n" +\n                "         WHERE\n" +\n                "             pyt.id = trs.pyt_trs_id\n" +\n                "             AND trs.status = 15\n" +\n                "             AND pyt.status = 4\n" +\n                "             AND (OPERATOR(\'Trunc\', trs.payment_date) >= OPERATOR(\'Trunc\', ?3)\n" +\n                "                   AND OPERATOR(\'Trunc\', trs.payment_date) <= OPERATOR(\'Trunc\', ?4) )\n" +\n                "     ) ) total_cancelled_and_paid_within_filtered_date,\n" +\n                "     SUM( (\n" +\n                "         SELECT\n" +\n                "             pyt.amount\n" +\n                "         FROM\n" +\n                "             ci_pyt_transactions pyt\n" +\n                "         WHERE\n" +\n                "             pyt.id = trs.pyt_trs_id\n" +\n                "             AND trs.status = 15\n" +\n                "             AND(pyt.status = 4\n" +\n                "                   AND OPERATOR(\'Trunc\', pyt.update_date) BETWEEN OPERATOR(\'Trunc\', ?5) AND OPERATOR(\'Trunc\', ?6) )\n" +\n                "             AND OPERATOR(\'Trunc\', trs.payment_date) < OPERATOR(\'Trunc\', ?7)\n" +\n                "     ) ) total_cancelled_and_paid_before_from_date\n" +\n                " FROM\n" +\n                "     ci_trs_transactions trs,\n" +\n                "     ci_vtp_test_centers vtc\n" +\n                " WHERE\n" +\n                "     trs.vtc_id = vtc.id\n" +\n                "     AND trs.payment_method IS NOT NULL\n" +\n                "     AND vtc.id = NVL(?8, vtc.id)\n" +\n                "     AND vtc.vtp_id = NVL(?9, vtc.vtp_id)\n" +\n                " GROUP BY\n" +\n                "     trs.payment_method ";\n',A='\n  [\n    {\n      "id": "0001",\n      "type": "donut",\n      "name": "Cake",\n      "ppu": 0.55,\n      "batters":\n        {\n          "batter":\n            [\n              {"id": "1001", "type": "Regular"},\n              {"id": "1002", "type": "Chocolate"},\n              {"id": "1003", "type": "Blueberry"},\n              {"id": "1004", "type": "Devil\'s Food"}\n            ]\n        },\n      "topping":\n        [\n          {"id": "5001", "type": "None"},\n          {"id": "5002", "type": "Glazed"},\n          {"id": "5005", "type": "Sugar"},\n          {"id": "5007", "type": "Powdered Sugar"},\n          {"id": "5006", "type": "Chocolate with Sprinkles"},\n          {"id": "5003", "type": "Chocolate"},\n          {"id": "5004", "type": "Maple"}\n        ]\n    },\n    {\n      "id": "0002",\n      "type": "donut",\n      "name": "Raised",\n      "ppu": 0.55,\n      "batters":\n        {\n          "batter":\n            [\n              {"id": "1001", "type": "Regular"}\n            ]\n        },\n      "topping":\n        [\n          {"id": "5001", "type": "None"},\n          {"id": "5002", "type": "Glazed"},\n          {"id": "5005", "type": "Sugar"},\n          {"id": "5003", "type": "Chocolate"},\n          {"id": "5004", "type": "Maple"}\n        ]\n    },\n    {\n      "id": "0003",\n      "type": "donut",\n      "name": "Old Fashioned",\n      "ppu": 0.55,\n      "batters":\n        {\n          "batter":\n            [\n              {"id": "1001", "type": "Regular"},\n              {"id": "1002", "type": "Chocolate"}\n            ]\n        },\n      "topping":\n        [\n          {"id": "5001", "type": "None"},\n          {"id": "5002", "type": "Glazed"},\n          {"id": "5003", "type": "Chocolate"},\n          {"id": "5004", "type": "Maple"}\n        ]\n    }\n  ]\n  ',f='public static enum PaymentMethodType {\n    CASH(new BigDecimal(1)),\n    CREDIT_CARD(new BigDecimal(2)),\n    VTP_CREDIT_ACCOUNT(new BigDecimal(3)),\n    POST_PAID(new BigDecimal(5)),\n    E_WALLET(new BigDecimal(9)),\n    POS(new BigDecimal(6));\n\n    public static final String DOMAIN_CODE = "TRS_PAYMENT_METHOD";\n\n    private BigDecimal value;\n\n    private PaymentMethodType(BigDecimal value) {\n        this.value = value;\n    }\n\n    public BigDecimal getValue() {\n        return value;\n    }\n}\n',c="We mostly deal with the parent-child component relations in the angular\napplications but sometimes it happens that we parent component makes some\nchanges but the child component won\u2019t notify or change values directly.\nHow we can notify children or update input values directly?"},433:(J,V,a)=>{a.d(V,{Fj:()=>P,u5:()=>bn,JU:()=>m,JJ:()=>je,On:()=>de});var o=a(8256),_=a(6895),g=a(2076),A=a(9751),f=a(4742),c=a(8421),E=a(7669),O=a(5403),h=a(3268),S=a(1810),At=a(4004);let ye=(()=>{class n{constructor(e,r){this._renderer=e,this._elementRef=r,this.onChange=i=>{},this.onTouched=()=>{}}setProperty(e,r){this._renderer.setProperty(this._elementRef.nativeElement,e,r)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(o.Qsj),o.Y36(o.SBq))},n.\u0275dir=o.lG2({type:n}),n})(),D=(()=>{class n extends ye{}return n.\u0275fac=function(){let t;return function(r){return(t||(t=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,features:[o.qOj]}),n})();const m=new o.OlP("NgValueAccessor"),Mt={provide:m,useExisting:(0,o.Gpc)(()=>P),multi:!0},Et=new o.OlP("CompositionEventMode");let P=(()=>{class n extends ye{constructor(e,r,i){super(e,r),this._compositionMode=i,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function bt(){const n=(0,_.q)()?(0,_.q)().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}())}writeValue(e){this.setProperty("value",e??"")}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(o.Qsj),o.Y36(o.SBq),o.Y36(Et,8))},n.\u0275dir=o.lG2({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(e,r){1&e&&o.NdJ("input",function(s){return r._handleInput(s.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(s){return r._compositionEnd(s.target.value)})},features:[o._Bn([Mt]),o.qOj]}),n})();const Ot=!1,u=new o.OlP("NgValidators"),v=new o.OlP("NgAsyncValidators");function Ne(n){return null!=n}function we(n){const t=(0,o.QGY)(n)?(0,g.D)(n):n;if(Ot&&!(0,o.CqO)(t)){let e="Expected async validator to return Promise or Observable.";throw"object"==typeof n&&(e+=" Are you using a synchronous validator where an async validator is expected?"),new o.vHH(-1101,e)}return t}function Se(n){let t={};return n.forEach(e=>{t=null!=e?{...t,...e}:t}),0===Object.keys(t).length?null:t}function Te(n,t){return t.map(e=>e(n))}function Ge(n){return n.map(t=>function Nt(n){return!n.validate}(t)?t:e=>t.validate(e))}function Z(n){return null!=n?function Be(n){if(!n)return null;const t=n.filter(Ne);return 0==t.length?null:function(e){return Se(Te(e,t))}}(Ge(n)):null}function Q(n){return null!=n?function xe(n){if(!n)return null;const t=n.filter(Ne);return 0==t.length?null:function(e){return function T(...n){const t=(0,E.jO)(n),{args:e,keys:r}=(0,f.D)(n),i=new A.y(s=>{const{length:l}=e;if(!l)return void s.complete();const p=new Array(l);let b=l,w=l;for(let z=0;z<l;z++){let _e=!1;(0,c.Xf)(e[z]).subscribe((0,O.x)(s,En=>{_e||(_e=!0,w--),p[z]=En},()=>b--,void 0,()=>{(!b||!_e)&&(w||s.next(r?(0,S.n)(r,p):p),s.complete())}))}});return t?i.pipe((0,h.Z)(t)):i}(Te(e,t).map(we)).pipe((0,At.U)(Se))}}(Ge(n)):null}function Re(n,t){return null===n?[t]:Array.isArray(n)?[...n,t]:[n,t]}function X(n){return n?Array.isArray(n)?n:[n]:[]}function k(n,t){return Array.isArray(n)?n.includes(t):n===t}function ke(n,t){const e=X(t);return X(n).forEach(i=>{k(e,i)||e.push(i)}),e}function He(n,t){return X(t).filter(e=>!k(n,e))}class Ue{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=Z(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=Q(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t){this.control&&this.control.reset(t)}hasError(t,e){return!!this.control&&this.control.hasError(t,e)}getError(t,e){return this.control?this.control.getError(t,e):null}}class d extends Ue{get formDirective(){return null}get path(){return null}}class C extends Ue{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class Le{constructor(t){this._cd=t}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}}let je=(()=>{class n extends Le{constructor(e){super(e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(C,2))},n.\u0275dir=o.lG2({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(e,r){2&e&&o.ekj("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[o.qOj]}),n})();const G="VALID",U="INVALID",F="PENDING",B="DISABLED";function L(n){return null!=n&&!Array.isArray(n)&&"object"==typeof n}class $e{constructor(t,e){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(t),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return this.status===G}get invalid(){return this.status===U}get pending(){return this.status==F}get disabled(){return this.status===B}get enabled(){return this.status!==B}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._assignValidators(t)}setAsyncValidators(t){this._assignAsyncValidators(t)}addValidators(t){this.setValidators(ke(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(ke(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(He(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(He(t,this._rawAsyncValidators))}hasValidator(t){return k(this._rawValidators,t)}hasAsyncValidator(t){return k(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(e=>{e.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(e=>{e.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status=F,!1!==t.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=B,this.errors=null,this._forEachChild(r=>{r.disable({...t,onlySelf:!0})}),this._updateValue(),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...t,skipPristineCheck:e}),this._onDisabledChange.forEach(r=>r(!0))}enable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=G,this._forEachChild(r=>{r.enable({...t,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors({...t,skipPristineCheck:e}),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===G||this.status===F)&&this._runAsyncValidator(t.emitEvent)),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?B:G}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status=F,this._hasOwnPendingAsyncValidator=!0;const e=we(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(r=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(r,{emitEvent:t})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(!1!==e.emitEvent)}get(t){let e=t;return null==e||(Array.isArray(e)||(e=e.split(".")),0===e.length)?null:e.reduce((r,i)=>r&&r._find(i),this)}getError(t,e){const r=e?this.get(e):this;return r&&r.errors?r.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new o.vpe,this.statusChanges=new o.vpe}_calculateStatus(){return this._allControlsDisabled()?B:this.errors?U:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(F)?F:this._anyControlsHaveStatus(U)?U:G}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){L(t)&&null!=t.updateOn&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=function Pt(n){return Array.isArray(n)?Z(n):n||null}(this._rawValidators)}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=function It(n){return Array.isArray(n)?Q(n):n||null}(this._rawAsyncValidators)}}const N=new o.OlP("CallSetDisabledState",{providedIn:"root",factory:()=>j}),j="always";function x(n,t,e=j){(function ie(n,t){const e=function Pe(n){return n._rawValidators}(n);null!==t.validator?n.setValidators(Re(e,t.validator)):"function"==typeof e&&n.setValidators([e]);const r=function Ie(n){return n._rawAsyncValidators}(n);null!==t.asyncValidator?n.setAsyncValidators(Re(r,t.asyncValidator)):"function"==typeof r&&n.setAsyncValidators([r]);const i=()=>n.updateValueAndValidity();Y(t._rawValidators,i),Y(t._rawAsyncValidators,i)})(n,t),t.valueAccessor.writeValue(n.value),(n.disabled||"always"===e)&&t.valueAccessor.setDisabledState?.(n.disabled),function Ut(n,t){t.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,"change"===n.updateOn&&ze(n,t)})}(n,t),function jt(n,t){const e=(r,i)=>{t.valueAccessor.writeValue(r),i&&t.viewToModelUpdate(r)};n.registerOnChange(e),t._registerOnDestroy(()=>{n._unregisterOnChange(e)})}(n,t),function Lt(n,t){t.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,"blur"===n.updateOn&&n._pendingChange&&ze(n,t),"submit"!==n.updateOn&&n.markAsTouched()})}(n,t),function Ht(n,t){if(t.valueAccessor.setDisabledState){const e=r=>{t.valueAccessor.setDisabledState(r)};n.registerOnDisabledChange(e),t._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}(n,t)}function Y(n,t){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function ze(n,t){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function Qe(n,t){const e=n.indexOf(t);e>-1&&n.splice(e,1)}function Xe(n){return"object"==typeof n&&null!==n&&2===Object.keys(n).length&&"value"in n&&"disabled"in n}const Ke=class extends $e{constructor(t=null,e,r){super(function ne(n){return(L(n)?n.validators:n)||null}(e),function re(n,t){return(L(t)?t.asyncValidators:n)||null}(r,e)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),L(e)&&(e.nonNullable||e.initialValueIsDefault)&&(this.defaultValue=Xe(t)?t.value:t)}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&!1!==e.emitModelToViewChange&&this._onChange.forEach(r=>r(this.value,!1!==e.emitViewToModelChange)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=this.defaultValue,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){Qe(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){Qe(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(t){Xe(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}},Qt={provide:C,useExisting:(0,o.Gpc)(()=>de)},nt=(()=>Promise.resolve())();let de=(()=>{class n extends C{constructor(e,r,i,s,l,p){super(),this._changeDetectorRef=l,this.callSetDisabledState=p,this.control=new Ke,this._registered=!1,this.update=new o.vpe,this._parent=e,this._setValidators(r),this._setAsyncValidators(i),this.valueAccessor=function le(n,t){if(!t)return null;let e,r,i;return Array.isArray(t),t.forEach(s=>{s.constructor===P?e=s:function Yt(n){return Object.getPrototypeOf(n.constructor)===D}(s)?r=s:i=s}),i||r||e||null}(0,s)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){const r=e.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),function ae(n,t){if(!n.hasOwnProperty("model"))return!1;const e=n.model;return!!e.isFirstChange()||!Object.is(t,e.currentValue)}(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!(!this.options||!this.options.standalone)}_setUpStandalone(){x(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),this._isStandalone()}_updateValue(e){nt.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){const r=e.isDisabled.currentValue,i=0!==r&&(0,o.D6c)(r);nt.then(()=>{i&&!this.control.disabled?this.control.disable():!i&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?function q(n,t){return[...t.path,n]}(e,this._parent):[e]}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(d,9),o.Y36(u,10),o.Y36(v,10),o.Y36(m,10),o.Y36(o.sBO,8),o.Y36(N,8))},n.\u0275dir=o.lG2({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[o._Bn([Qt]),o.qOj,o.TTD]}),n})(),ot=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({}),n})(),Dn=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[ot]}),n})(),bn=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:N,useValue:e.callSetDisabledState??j}]}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[Dn]}),n})()}}]);