module.exports=function(e){function t(i){if(r[i])return r[i].exports;var s=r[i]={i:i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,i){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=6)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.VFJS_EVENT_FIELD_STATE_UPDATE="VFJS_EVENT_FIELD_STATE_UPDATE",t.VFJS_EVENT_FIELD_MODEL_VALIDATE="VFJS_EVENT_FIELD_MODEL_VALIDATE",t.VFJS_EVENT_FIELD_MODEL_UPDATE="VFJS_EVENT_FIELD_MODEL_UPDATE",t.VFJS_EVENT_FIELD_MODEL_CLEAR_HIDDEN="VFJS_EVENT_FIELD_MODEL_CLEAR_HIDDEN",t.VFJS_EVENT_MODEL_UPDATE="VFJS_EVENT_MODEL_UPDATE",t.VFJS_EVENT_MODEL_UPDATED="VFJS_EVENT_MODEL_UPDATED",t.VFJS_EVENT_MODEL_VALIDATE="VFJS_EVENT_MODEL_VALIDATE",t.VFJS_EVENT_STATE_UPDATE="VFJS_EVENT_STATE_UPDATE",t.VFJS_EVENT_STATE_UPDATED="VFJS_EVENT_STATE_UPDATED",t.VFJS_EXTERNAL_EVENT_CHANGE="change",t.VFJS_EXTERNAL_EVENT_STATE_CHANGE="state-change",t.VFJS_EXTERNAL_EVENT_VALIDATED="validated"},function(e,t){e.exports=require("lodash/get")},function(e,t){e.exports=require("lodash/set")},function(e,t){e.exports=require("lodash/cloneDeep")},function(e,t,r){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=i(r(7)),n=i(r(8)),o=i(r(13)),f={computed:s.default,props:o.default,methods:n.default};t.default=f},function(e,t,r){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=i(r(14)),n=i(r(15)),o=i(r(16)),f=i(r(38)),l=i(r(39)),a={created:function(){this.vfjsInitialize()},beforeDestroy:function(){this.vfjsDestroy()},computed:s.default,data:n.default,props:f.default,methods:o.default,watch:l.default};t.default=a},function(e,t,r){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.vfjsViewer=t.vfjsGlobalMixin=t.vfjsComponentMixin=void 0;var s=i(r(4)),n=i(r(5)),o=i(r(40));t.vfjsComponentMixin=s.default,t.vfjsGlobalMixin=n.default,t.vfjsViewer=o.default,t.default=o.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=["input","option","textarea"],s=["textarea"],n=["input","select","textarea"],o={vfjsComputedFieldHasErrors:function(){return this.vfjsFieldState.vfjsFieldErrors&&this.vfjsFieldState.vfjsFieldErrors.length>0},vfjsComputedShowFieldErrors:function(){return this.vfjsFieldState.vfjsFieldDirty||this.vfjsState.showValidationErrors},vfjsComputedFieldErrorOptions:function(){return this.vfjsComputedShowFieldErrors&&this.vfjsComputedFieldHasErrors?this.vfjsFieldErrorOptions:{}},vfjsComputedFieldAttrs:function(){var e={};return-1!==n.indexOf(this.component)&&(e.required=this.vfjsFieldRequired),-1!==i.indexOf(this.component)&&(e.value=this.vfjsFieldModel||this.vfjsFieldOptions.attrs&&this.vfjsFieldOptions.attrs.value),e},vfjsComputedFieldDomProps:function(){var e={};return-1!==s.indexOf(this.component)&&(e.innerHTML=this.vfjsFieldModel||this.vfjsFieldOptions.domProps&&this.vfjsFieldOptions.domProps.innerHTML),e},vfjsComputedFieldOptions:function(){return{attrs:this.vfjsComputedFieldAttrs,domProps:this.vfjsComputedFieldDomProps,key:this.vfjsFieldOptions.key||this.vfjsFieldId}},vfjsComputedMergedFieldOptions:function(){return Object.assign({},this.vfjsDefaultOptions,this.vfjsComputedFieldErrorOptions,this.vfjsComputedFieldOptions)}};t.default=o},function(e,t,r){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=i(r(9)),n=i(r(11)),o=i(r(12)),f=(Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e})({},s.default,n.default,o.default);t.default=f},function(e,t,r){"use strict";function i(e,t){var r={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=e[i]);return r}Object.defineProperty(t,"__esModule",{value:!0});var s,n=r(10),o=(s=n)&&s.__esModule?s:{default:s},f={getVfjsAttributes:function(){return this.getVfjsFieldAttributes(this.vfjsFieldOptions,this.vfjsComputedMergedFieldOptions)},getVfjsFieldAttributes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.class,s=t.on,n=t.nativeOn,f=i(t,["class","on","nativeOn"]),l=e.class,a=e.on,u=e.nativeOn,d=i(e,["class","on","nativeOn"]);if(!d)return{};var c={class:(0,o.default)({},this.vfjsFieldHelperFormatClasses(l),this.vfjsFieldHelperFormatClasses(r)),on:(0,o.default)(this.vfjsFieldHelperFormatEvents(a),this.vfjsFieldHelperFormatEvents(s)),nativeOn:(0,o.default)(this.vfjsFieldHelperFormatEvents(u),this.vfjsFieldHelperFormatEvents(n))},v=Object.assign({},{props:this.$options.propsData}),j={props:d};return(0,o.default)({},v,f,j,d,c)}};t.default=f},function(e,t){e.exports=require("lodash/merge")},function(e,t,r){"use strict";function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},n={vfjsFieldHelperAddListener:function(e,t){e.addEventListener(t,this.vfjsFieldHelperStateEventHandler)},vfjsFieldHelperRemoveListener:function(e,t){e.removeEventListener(t,this.vfjsFieldHelperStateEventHandler)},vfjsFieldHelperStateEventHandler:function(e){e&&"blur"===e.type&&this.setVfjsFieldState({$touched:!0})},vfjsFieldHelperFormatEvents:function(e){if(!e)return{};var t=e;return Array.isArray(e)?t=e.reduce(function(e,t){return s({},e,i({},t,!0))},{}):"string"==typeof e&&(t=i({},e,!0)),this.vfjsFieldHelperFormatEventsReducer(t)},vfjsFieldHelperFormatClasses:function(e){return e?"string"==typeof e?i({},e,!0):Array.isArray(e)?e.reduce(function(e,t){return s({},e,i({},t,!0))},{}):e:{}},vfjsFieldHelperEventHandler:function(e,t){var r=this;return function(e){return"function"==typeof t?r.setVfjsFieldModel(t(e)):e instanceof Event?e.target&&e.target.value?r.setVfjsFieldModel(e.target.value):r.setVfjsFieldModel(void 0):r.setVfjsFieldModel(e)}},vfjsFieldHelperFormatEventsReducer:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(t).reduce(function(r,n){return s({},r,i({},n,e.vfjsFieldHelperEventHandler(n,t[n])))},{})}};t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(0),s={setState:function(e){this.setVfjsFieldState(e)},setModel:function(e){this.setVfjsFieldModel(e)},setVfjsFieldState:function(e,t){this.vfjsBus.emit(i.VFJS_EVENT_FIELD_STATE_UPDATE,{key:t||this.vfjsFieldModelKey,value:e})},setVfjsFieldModel:function(e,t){this.vfjsBus.emit(i.VFJS_EVENT_FIELD_MODEL_UPDATE,{key:t||this.vfjsFieldModelKey,value:e})}};t.default=s},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={children:{type:Array,default:function(){return[]}},component:{type:[String,Object]},id:{type:String,required:!0},errorOptions:{type:Object},errors:{type:Array},fieldOptions:{type:Object},model:{type:null},modelKey:{type:String,required:!0},required:{type:Boolean,required:!0},schema:{type:Object,required:!0},schemas:{type:Object},state:{type:Object,required:!0},tag:{type:String,default:"div"},value:{type:null},uiSchema:{type:Object,required:!0},vfjsBus:{type:Object,required:!0},vfjsFieldErrorOptions:{type:Object},vfjsFieldErrors:{type:Array},vfjsFieldId:{type:String,required:!0},vfjsFieldModel:{type:null},vfjsFieldModelKey:{type:String,required:!0},vfjsFieldOptions:{type:Object,required:!0},vfjsFieldRequired:{type:Boolean,required:!0},vfjsFieldSchema:{type:Object,required:!0},vfjsFieldSchemas:{type:Object},vfjsFieldState:{type:Object,required:!0},vfjsFieldTag:{type:String,default:"div"},vfjsFieldUiSchema:{type:Object,required:!0},vfjsModel:{type:Object,required:!0},vfjsState:{type:Object,required:!0}};t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={vfjsSchemaValid:function(){return this.vfjsSchema.every(this.isVfjsFieldSchemaValid)},vfjsModelValid:function(){return this.vfjsSchema.every(this.isVfjsFieldModelValid)},vfjsFields:function(){return this.vfjsFieldsActive.filter(function(e){return e}).map(this.vfjsHelperCreateField)}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(0);t.default=function(){return{vfjsBus:{},vfjsEvents:[i.VFJS_EVENT_FIELD_MODEL_CLEAR_HIDDEN,i.VFJS_EVENT_FIELD_MODEL_UPDATE,i.VFJS_EVENT_FIELD_MODEL_VALIDATE,i.VFJS_EVENT_FIELD_STATE_UPDATE,i.VFJS_EVENT_MODEL_UPDATE,i.VFJS_EVENT_MODEL_UPDATED,i.VFJS_EVENT_MODEL_VALIDATE,i.VFJS_EVENT_STATE_UPDATE,i.VFJS_EVENT_STATE_UPDATED],vfjsFieldsActive:[],vfjsFieldsRequired:[],vfjsListeners:[],vfjsModel:{},vfjsOptions:{allowInvalidModel:!0,ajvOptions:{},validate:!0,validateOnLoad:!0,validateOnChange:!0},vfjsSchema:{},vfjsState:{},vfjsUiSchema:[]}}},function(e,t,r){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=i(r(17)),n=i(r(20)),o=i(r(22)),f=i(r(23)),l=i(r(26)),a=i(r(29)),u=i(r(32)),d=i(r(35)),c=(Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e})({},s.default,o.default,n.default,f.default,a.default,l.default,u.default,d.default);t.default=c},function(e,t,r){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(t,"__esModule",{value:!0});var n=i(r(2)),o=i(r(18)),f=i(r(19)),l=r(0),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},u={addVfjsListener:function(e,t){var r=this.vfjsBus.on(e,function(r){return t(e,r)});this.vfjsListeners.push(r)},addVfjsListeners:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments[1];t.forEach(function(t){return e.addVfjsListener(t,r)})},removeVfjsListener:function(e){this.vfjsBus.off(e)},removeVfjsListeners:function(){(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).forEach(this.removeVfjsListener)},removeVfjsListenersAll:function(){this.vfjsBus.off(),this.vfjsListeners=[]},vfjsBusEventHandler:function(e,t){var r,i=this,f=(s(r={},l.VFJS_EVENT_FIELD_MODEL_CLEAR_HIDDEN,function(){var e=i.vfjsHelperGetFieldsWithClearOnHide(i.uiSchema),t=i.vfjsHelperGetFieldsWithClearOnHide(i.vfjsFieldsActive),r=Object.keys(e).reduce(function(r,i){var n=i in t?{}:s({},i,e[i]);return a({},r,n)},{});Object.keys(r).forEach(function(e){var t=r[e];t&&("string"==typeof t?(0,n.default)(i.vfjsModel,t,void 0):(0,n.default)(i.vfjsModel,e,void 0))})}),s(r,l.VFJS_EVENT_FIELD_MODEL_VALIDATE,function(e){var t=e.key,r=e.value,s=e.cb,n=i.vfjsHelperApplyFieldModel(t,r);i.vfjsBus.emit(l.VFJS_EVENT_MODEL_VALIDATE,{vfjsModel:n,cb:function(){var e=i.getVfjsFieldModelValidationErrors(t,r);s&&"function"==typeof s&&s(e)}})}),s(r,l.VFJS_EVENT_FIELD_MODEL_UPDATE,function(e){var t=e.key,r=e.value,s=e.cb;i.vfjsBus.emit(l.VFJS_EVENT_FIELD_MODEL_VALIDATE,{key:t,value:r,cb:function(e){var n=i.getVfjsFieldModel(t),f=Object.assign({},i.getVfjsFieldState(t),{vfjsFieldDirty:!(0,o.default)(n,r),vfjsFieldErrors:e});if(i.setVfjsFieldState(f,t),!e||e&&0===e.length||i.vfjsOptions.allowInvalidModel){var l=i.vfjsHelperApplyFieldModel(t,r);i.setVfjsModel(l)}s&&"function"==typeof s&&s(e)}})}),s(r,l.VFJS_EVENT_FIELD_STATE_UPDATE,function(e){var t=e.key,r=e.value,s=e.cb;i.vfjsBus.emit(l.VFJS_EVENT_STATE_UPDATE,{key:t,value:r,cb:function(){i.setVfjsUiFieldsActive(),s&&"function"==typeof s&&s()}})}),s(r,l.VFJS_EVENT_MODEL_VALIDATE,function(e){var t=e.vfjsModel,r=e.cb,s=i.getVfjsValidationErrors(t);i.vfjsBus.emit(l.VFJS_EVENT_STATE_UPDATE,{key:"vfjsErrors",value:s,cb:function(){var e=i.getVfjsState();i.$emit(l.VFJS_EXTERNAL_EVENT_VALIDATED,0===e.vfjsErrors.length),r&&"function"==typeof r&&r(s)}})}),s(r,l.VFJS_EVENT_MODEL_UPDATED,function(){i.setVfjsUiFieldsActive(),i.vfjsBus.emit(l.VFJS_EVENT_FIELD_MODEL_CLEAR_HIDDEN),i.$emit(l.VFJS_EXTERNAL_EVENT_CHANGE,i.getVfjsModel())}),s(r,l.VFJS_EVENT_STATE_UPDATE,function(e){var t=e.key,r=e.value,n=e.cb,o=Object.assign({},i.getVfjsState(),s({},t,r));i.setVfjsState(o),n&&"function"==typeof n&&n()}),s(r,l.VFJS_EVENT_STATE_UPDATED,function(){i.$emit(l.VFJS_EXTERNAL_EVENT_STATE_CHANGE,i.getVfjsState())}),r);e&&e in f&&f[e](t)},vfjsBusInitialize:function(){this.vfjsBus=f.default.create()}};t.default=u},function(e,t){e.exports=require("lodash/isEqual")},function(e,t){e.exports=require("minibus")},function(e,t,r){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t){var r={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=e[i]);return r}function n(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0});var o=i(r(3)),f=i(r(2)),l=i(r(21)),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},u={vfjsHelperCreateField:function(e){var t=e.id,r=e.children,i=void 0===r?[]:r,s=e.component,n=e.errorHandler,o=e.errorOptions,f=void 0===o?{}:o,l=e.fieldOptions,u=void 0===l?{}:l,d=e.model,c=void 0===d?"":d,v=e.required,j=void 0!==v&&v,h=this.getVfjsFieldSchema(c)||{},p=this.schemas,E=this.getVfjsFieldModel(c),_=this.getVfjsFieldState(c)||{},V=this.getVfjsModel(),F=this.getVfjsState(),O=_.vfjsFieldErrors,y=void 0===O?[]:O,m=y.length>0&&n?this.vfjsHelperGetErrors(y,t):this.vfjsHelperGetChildren(i,c),g=a({},u,{children:m,id:t,errorOptions:f,errors:y,fieldOptions:u,model:E,modelKey:c,required:j,schema:h,schemas:p,state:_,uiSchema:e,value:E,vfjsBus:this.vfjsBus,vfjsChildren:m,vfjsFieldId:t,vfjsFieldErrorOptions:f,vfjsFieldErrors:y,vfjsFieldModel:E,vfjsFieldModelKey:c,vfjsFieldOptions:u,vfjsFieldRequired:j,vfjsFieldSchema:h,vfjsFieldSchemas:p,vfjsFieldState:_,vfjsFieldUiSchema:e,vfjsModel:V,vfjsState:F});return this.vfjsHelperCreateComponent({children:m,component:s,props:g})},vfjsHelperGetErrors:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments[1];return t.map(function(t,i){return e.vfjsHelperCreateField({id:r+"-error-"+i,component:"div",fieldOptions:{class:["vfjs-error","vfjs-default-error-handler"],domProps:{innerHTML:t.message}}})})},vfjsHelperGetChildren:function(e,t){var r=this;return this.vfjsHelperFieldIsArray(t)?e.reduce(function(e,t){return[].concat(n(e),n(t.map(r.vfjsHelperCreateField)))},[]):e.map(this.vfjsHelperCreateField)},vfjsHelperHashString:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:62,r=0,i=0;i<e.length;i++)r=33*r^e.charCodeAt(i);r>>>=0;for(var s=[];r>=t;){var n=r%t;s.push("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[n]),r=Math.floor(r/t)}return s.join("")},vfjsHelperCreateComponent:function(e){var t=e.children,r=void 0===t?[]:t,i=e.component,s=e.props;if(!s.vfjsFieldModelKey)return this.$createElement(i,a({key:s.vfjsFieldId},s.vfjsFieldOptions),r);var n=this.vfjsComponents[i];return this.$createElement(l.default,{key:s.vfjsFieldId+"-wrapper",props:a({},s,{component:n||i})},r)},vfjsHelperApplyFieldModel:function(e,t){var r=(0,o.default)(this.getVfjsModel());return(0,f.default)(r,e,t),r},vfjsHelperGenerateField:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(!e)return!1;var i=e.children,n=void 0===i?[]:i,o=s(e,["children"]),f=JSON.stringify({fieldWithoutChildren:o,level:r}),l=this.vfjsHelperHashString(f);return a({},e,{id:l,children:n.map(function(e,i){return t.vfjsHelperGenerateField(e,(i+1)*(r+1))})})},vfjsHelperChildArrayMapper:function(e,t,r){var i=e.model,n=e.children,o=void 0===n?[]:n,f=s(e,["model","children"]);return a({},f,{model:this.vfjsHelperGetChildArrayModelAtIndex(i,t,r),children:this.vfjsHelperChildArrayReducerMapper(t,o,r)})},vfjsHelperChildArrayReducerMapper:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],i=arguments[2];return r.reduce(function(r,s){return[].concat(n(r),[t.vfjsHelperChildArrayMapper(s,e,i)])},[])},vfjsHelperGetChildArrayModelAtIndex:function(e,t,r){var i=this.vfjsHelperGetRelativeModel(e,t);return i?t+"."+r+"."+i:e},vfjsHelperGetRelativeModel:function(e,t){return e?String(e).substr(t.length+1):e},vfjsHelperGetParentModel:function(e){var t=String(e).lastIndexOf(".");return String(e).substr(0,t)},vfjsHelperFieldIsRequired:function(e){if(e){var t=this.vfjsHelperGetParentModel(e);return t?-1!==this.vfjsFieldsRequired.indexOf(t):-1!==this.vfjsFieldsRequired.indexOf(e)}return!1},vfjsHelperFieldIsArray:function(e){if(!e)return!1;var t=this.getVfjsFieldSchema(e);return!!t&&Array.isArray(t.items)},vfjsHelperGetFieldsWithClearOnHide:function(e){var t=this;return e.reduce(function(e,r){var i,s,n,o=r.children,f=void 0===o?[]:o,l=r.displayOptions,u=void 0===l?{}:l,d=r.model,c=d?(i={},s=d,n=u.clearOnHide,s in i?Object.defineProperty(i,s,{value:n,enumerable:!0,configurable:!0,writable:!0}):i[s]=n,i):{};return a({},e,c,t.vfjsHelperGetFieldsWithClearOnHide(f))},{})}};t.default=u},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,s=r(4),n=(i=s)&&i.__esModule?i:{default:i},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},f={name:"vue-form-json-schema-field-wrapper",mixins:[n.default],render:function(){return this.$createElement(this.component,o({},this.getVfjsAttributes()),this.$slots.default)}};t.default=f},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={vfjsDestroy:function(){var e=this;this.vfjsEvents.forEach(function(t){return e.removeVfjsListener(t)})},vfjsInitialize:function(){this.setVfjsSchema(this.schema),this.vfjsOptions=this.options,this.vfjsComponents=this.components,this.vfjsBusInitialize(),this.setVfjsModel(this.model),this.vfjsValidationInitialize(),this.setVfjsUiSchema(this.uiSchema),this.addVfjsListeners(this.vfjsEvents,this.vfjsBusEventHandler),this.setVfjsUiFieldsActive()}}},function(e,t,r){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=i(r(24)),n=i(r(25)),o=(Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e})({},s.default,n.default);t.default=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,s=r(1),n=(i=s)&&i.__esModule?i:{default:i},o={getVfjsFieldModel:function(e){return e?this.getVfjsModel(e):this.vfjsFieldModelKey?this.getVfjsModel(this.vfjsFieldModelKey):null},getVfjsModel:function(e){return e?(0,n.default)(this.vfjsModel,e):this.vfjsModel}};t.default=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(0),s={setVfjsFieldModel:function(e,t){this.vfjsBus.emit(i.VFJS_EVENT_FIELD_MODEL_UPDATE,{key:t||this.vfjsFieldModelKey,value:e})},setVfjsModel:function(e){this.vfjsModel=Object.assign({},this.getVfjsModel(),e),this.vfjsBus.emit(i.VFJS_EVENT_MODEL_UPDATED,this.getVfjsModel())}};t.default=s},function(e,t,r){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=i(r(27)),n=i(r(28)),o=(Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e})({},s.default,n.default);t.default=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,s=r(1),n=(i=s)&&i.__esModule?i:{default:i},o={getVfjsState:function(e){return e?(0,n.default)(this.vfjsState,e):this.vfjsState},getVfjsFieldState:function(e){return e?this.getVfjsState(e):this.vfjsFieldModelKey?this.getVfjsState(this.vfjsFieldModelKey):null}};t.default=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(0),s={setVfjsFieldState:function(e,t){this.vfjsBus.emit(i.VFJS_EVENT_FIELD_STATE_UPDATE,{key:t||this.vfjsFieldModelKey,value:e})},setVfjsState:function(e){this.vfjsState=Object.assign({},this.getVfjsState(),e),this.vfjsBus.emit(i.VFJS_EVENT_STATE_UPDATED)}};t.default=s},function(e,t,r){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=i(r(30)),n=i(r(31)),o=(Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e})({},s.default,n.default);t.default=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,s=r(1),n=(i=s)&&i.__esModule?i:{default:i},o={getVfjsFieldSchema:function(e){return e?this.getVfjsSchema(e):this.vfjsFieldModelKey?this.getVfjsSchema(this.vfjsFieldModelKey):null},getVfjsSchema:function(e){return e?(0,n.default)(this.getVfjsSchema.properties,e)||this.getVfjsSchemaFallback(e):this.vfjsSchema},getVfjsSchemaPath:function(e,t){var r=this.getVfjsSchema();if(!e)return r.items?this.getVfjsSchemaPath("items"):"properties."+t;var i=(0,n.default)(r,e);if(i){if(i.items instanceof Array){var s=this.getVfjsSchemaPath(e+".items");return this.getVfjsSchemaPath(s+".0")}if(i.properties instanceof Object)return this.getVfjsSchemaPath(e+".properties")}return t?e+"."+t:e},getVfjsSchemaFallback:function(e){var t=String(e).split(".").reduce(this.getVfjsSchemaPath,"");return(0,n.default)(this.getVfjsSchema(),t)}};t.default=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,s=r(3),n=(i=s)&&i.__esModule?i:{default:i},o={setVfjsSchema:function(e){this.vfjsSchema=(0,n.default)(e)}};t.default=o},function(e,t,r){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=i(r(33)),n=i(r(34)),o=(Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e})({},s.default,n.default);t.default=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,s=r(1),n=(i=s)&&i.__esModule?i:{default:i},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},f={getVfjsUiFieldVisible:function(e){if(!e.displayOptions)return!0;var t=e.displayOptions,r=t.model,i=t.schema,s=r?this.getVfjsFieldModel(r):this.getVfjsModel();return 0===(r?this.getVfjsValidationErrors(s,i):this.getVfjsModelValidationErrors(r,s,i)).length},getVfjsUiFieldArrayChildrenActive:function(e,t){var r=this;return(this.getVfjsFieldModel(e)||[]).map(function(i,s){return r.vfjsHelperChildArrayReducerMapper(e,t,s)}).map(this.getVfjsUiFieldsActive)},getVfjsUiField:function(e){var t=e.children,r=void 0===t?[]:t,i=e.model,s=function(e,t){var r={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=e[i]);return r}(e,["children","model"]);if(this.getVfjsUiFieldVisible(s)){var n=this.vfjsHelperFieldIsArray(i),f=this.vfjsHelperFieldIsRequired(i);return o({},s,n?{model:i,required:f,children:this.getVfjsUiFieldArrayChildrenActive(i,r)}:{model:i,required:f,children:this.getVfjsUiFieldsActive(r)})}return!1},getVfjsUiFieldsActive:function(e){var t=this;return e.reduce(function(e,r,i){if(r){var s=t.getVfjsUiField(r);s&&e.push(s)}return e},[])},getVfjsFieldUiSchema:function(e){return this.getVfjsUiSchema(e)},getVfjsUiSchema:function(e){return e?(0,n.default)(this.vfjsUiSchema,e):this.vfjsUiSchema}};t.default=f},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,s=r(3),n=(i=s)&&i.__esModule?i:{default:i},o={setVfjsUiSchema:function(e){var t=this;this.vfjsUiSchema=(0,n.default)(e.reduce(function(e,r,i){return[].concat(function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(e),[t.vfjsHelperGenerateField(r,i)])},[]))},setVfjsUiFieldsActive:function(){this.vfjsFieldsActive=this.getVfjsUiFieldsActive(this.vfjsUiSchema)}};t.default=o},function(e,t,r){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=i(r(36)),n=i(r(37)),o=r(0),f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},l=f({vfjsValidationInitialize:function(){var e=this,t=this.vfjsOptions.ajvOptions,r=void 0===t?{}:t;this.ajv=new s.default(f({},r,{allErrors:!0}));var i=r.customKeywords,n=void 0===i?{}:i;if(Object.keys(n).forEach(function(t){e.ajv.addKeyword(t,n[t])}),Object.keys(this.schemas).forEach(function(t){e.ajv.addSchema(e.schemas[t],t)}),this.ajv.validate(this.getVfjsSchema(),{}),this.ajv.errors){var l=this.getVfjsPropertiesRequired(this.ajv.errors);this.vfjsFieldsRequired=this.getVfjsChildPropertiesRequired(l)}this.vfjsOptions.validate&&this.vfjsOptions.validateOnLoad&&this.vfjsBus.emit(o.VFJS_EVENT_MODEL_VALIDATE,{vfjsModel:this.getVfjsModel()})}},n.default);t.default=l},function(e,t){e.exports=require("ajv")},function(e,t,r){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function s(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0});var n=i(r(2)),o=i(r(1)),f={getVfjsPropertiesRequired:function(e){return e?e.reduce(function(e,t){if("required"===t.keyword&&t.params&&t.params.missingProperty){var r=t.params.missingProperty,i=String(t.dataPath).substr(1),s=i?i+"."+r:r;-1===e.indexOf(s)&&e.push(s)}return e},[]):[]},getVfjsChildPropertiesRequired:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],i=t.filter(function(e){return-1===r.indexOf(e)});return i.reduce(function(t,o){t.push(o);var f={};(0,n.default)(f,o,{}),e.ajv.validate(e.getVfjsSchema(),f);var l=e.getVfjsPropertiesRequired(e.ajv.errors);if(l.length>0){var a=[].concat(s(r),s(i)),u=e.getVfjsChildPropertiesRequired(l,a);t.push.apply(t,s(u))}return t},[])},getVfjsFieldModelValid:function(e,t){return 0===this.getVfjsFieldModelValidationErrors(e,t).length},getVfjsFieldModelValidationErrors:function(e,t){return this.getVfjsModelValidationErrors(e,t)},getVfjsModelValidationErrorsLocalized:function(){var e=this.vfjsOptions.ajvOptions,t=void 0===e?{}:e,r=t.locale,i=t.locales;r&&i&&r in i&&i[r](this.ajv.errors)},getVfjsModelValidationErrors:function(e,t,r){var i={};return(0,n.default)(i,e,t),this.ajv.validate(r||this.getVfjsSchema(),i),this.ajv.errors?(this.getVfjsModelValidationErrorsLocalized(),this.ajv.errors.reduce(function(t,r){var i=(0,o.default)(r,"params.missingProperty"),s=r.dataPath?r.dataPath.substr(1):"";return e!==(s?s+"."+i:i)&&e!==s||t.push(r),t},[])):[]},getVfjsValid:function(){return 0===this.getVfjsValidationErrors().length},getVfjsValidationErrors:function(e,t){var r=this.ajv.validate(t||this.getVfjsSchema(),e||this.getVfjsModel());return this.getVfjsModelValidationErrorsLocalized(),r?[]:this.ajv.errors}};t.default=f},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={components:{type:Object,default:function(){return{}}},model:{type:Object,default:function(){return{}}},schema:{type:Object,required:!0,default:function(){return{}}},schemas:{type:Object,default:function(){return{}}},options:{type:Object,default:function(){return{}}},tag:{type:String,default:"div"},showValidationErrors:{type:Boolean,default:!1},uiSchema:{type:Array,required:!0,default:function(){return{}}}};t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(0),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},n={components:function(e){this.vfjsComponents=Object.assign({},e)},model:function(e){this.vfjsModel=Object.assign({},e),this.setVfjsUiFieldsActive()},schema:function(e){this.vfjsSchema=Object.assign({},e),this.setVfjsUiFieldsActive()},uiSchema:function(e){this.setVfjsUiSchema(e),this.setVfjsUiFieldsActive()},state:function(e){this.setVfjsUiFieldsActive()},showValidationErrors:function(e){var t=this;e&&this.vfjsBus.emit(i.VFJS_EVENT_MODEL_VALIDATE,{vfjsModel:this.getVfjsModel(),cb:function(){t.vfjsFieldsRequired.map(function(e){return new Promise(function(r,n){t.vfjsBus.emit(i.VFJS_EVENT_FIELD_MODEL_VALIDATE,{key:e,value:t.getVfjsFieldModel(e),cb:function(n){var o=t.getVfjsFieldState(e);t.vfjsBus.emit(i.VFJS_EVENT_FIELD_STATE_UPDATE,{key:e,value:s({},o,{vfjsFieldErrors:n}),cb:function(){r()}})}})})})}}),this.vfjsBus.emit(i.VFJS_EVENT_STATE_UPDATE,{key:"showValidationErrors",value:e})}};t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,s=r(5),n={name:"vue-form-json-schema-viewer",mixins:[((i=s)&&i.__esModule?i:{default:i}).default],render:function(){return this.$createElement(this.tag,this.vfjsFields)}};t.default=n}]);
//# sourceMappingURL=vue-form-json-schema.esm.js.map