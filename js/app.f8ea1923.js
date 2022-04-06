(()=>{"use strict";var t={1050:(t,e,r)=>{r(6992),r(8674),r(9601),r(7727);var i=r(9567),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app2"}},[r("RegistrationForm")],1)},o=[],a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"body"},[r("form",[r("div",{staticClass:"wrapper_form-block flex-row"},[r("h1",[t._v("Регистрация нового клиента.")]),t._m(0),r("hr"),r("div",{staticClass:"form-item _important-label",class:{"form-item_error":t.$v.surname.$error}},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.$v.surname.$model,expression:"$v.surname.$model",modifiers:{trim:!0}}],staticClass:"form-item__input",attrs:{placeholder:"Фамилия",name:"surname",id:"surname"},domProps:{value:t.$v.surname.$model},on:{input:function(e){e.target.composing||t.$set(t.$v.surname,"$model",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t.$v.surname.required?t._e():r("div",{staticClass:"error"},[t._v(" Поле обязательно к заполнению ")])]),r("div",{staticClass:"form-item _important-label",class:{"form-item_error":t.$v.name.$error}},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.$v.name.$model,expression:"$v.name.$model",modifiers:{trim:!0}}],staticClass:"form-item__input",attrs:{placeholder:"Имя",name:"name",id:"name"},domProps:{value:t.$v.name.$model},on:{input:function(e){e.target.composing||t.$set(t.$v.name,"$model",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t.$v.surname.required?t._e():r("div",{staticClass:"error"},[t._v(" Поле обязательно к заполнению ")])]),t._m(1),r("div",{staticClass:"form-item flex-row h-max-cont"},[r("div",{staticClass:"form-item__birthDate _important-label",class:{"form-item_error":t.$v.birthDate.$error}},[r("p",{staticClass:"form-item__title"},[t._v("Дата рождения")]),r("label",{staticClass:"form-item__label",attrs:{for:"birthDate"}},[t._v("Дата рождения")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.$v.birthDate.$model,expression:"$v.birthDate.$model"}],staticClass:"form-item__input form-item__input_birthDate",attrs:{id:"birthDate",name:"birthDate",type:"date"},domProps:{value:t.$v.birthDate.$model},on:{input:function(e){e.target.composing||t.$set(t.$v.birthDate,"$model",e.target.value)}}}),t.$v.birthDate.required?t._e():r("div",{staticClass:"error"},[t._v(" Укажите дату рождения ")])]),r("div",{staticClass:"form-item__gender _important-label",class:{"selected-in-input":t.$v.gender.$error}},[r("label",{attrs:{for:"gender"}}),r("select",{directives:[{name:"model",rawName:"v-model",value:t.$v.gender.$model,expression:"$v.gender.$model"}],staticClass:"form-item__input form-item__input_select",attrs:{id:"gender"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.$v.gender,"$model",e.target.multiple?r:r[0])}}},[r("option",{attrs:{disabled:"",value:""}},[t._v("Пол")]),r("option",{attrs:{value:"Мужчина"}},[t._v("Муж")]),r("option",{attrs:{value:"Женщина"}},[t._v("Жен")])]),r("svg",{staticClass:"down-sfift-icon",attrs:{disabled:"",id:"svg1025",version:"1.1",viewBox:"0 0 19.05 19.050001",width:"15",height:"15",xmlns:"http://www.w3.org/2000/svg","xmlns:inkscape":"http://www.inkscape.org/namespaces/inkscape","xmlns:sodipodi":"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd","xmlns:svg":"http://www.w3.org/2000/svg"}},[r("defs",{attrs:{id:"defs1022"}}),r("g",{attrs:{id:"layer1"}},[r("path",{staticStyle:{"font-variation-settings":"normal",opacity:"1",fill:"none","fill-opacity":"1",stroke:"#808080","stroke-width":"0.5","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"4","stroke-dasharray":"none","stroke-dashoffset":"0","stroke-opacity":"1","paint-order":"markers fill stroke","stop-color":"#000000"},attrs:{d:"M 17.165845,5.6268585 9.5249964,13.423152 1.884155,5.6268631",id:"path1927"}})])])])]),r("div",{staticClass:"form-item form-item_client-group _important-label"},[r("div",{staticClass:"form-item__input",class:{"form-item_error":t.$v.clientGroup.$error},on:{click:t.onShowDropdown}},[r("span",{staticClass:"opac-06"},[t._v("Группа клиентов:")]),t._v(" "+t._s(t.clientGroup.join(", "))+" "),r("svg",{staticClass:"down-sfift-icon",attrs:{id:"svg1025",version:"1.1",viewBox:"0 0 19.05 19.050001",width:"15",height:"15",xmlns:"http://www.w3.org/2000/svg","xmlns:inkscape":"http://www.inkscape.org/namespaces/inkscape","xmlns:sodipodi":"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd","xmlns:svg":"http://www.w3.org/2000/svg"}},[r("defs",{attrs:{id:"defs1022"}}),r("g",{attrs:{id:"layer1"}},[r("path",{staticStyle:{"font-variation-settings":"normal",opacity:"1",fill:"none","fill-opacity":"1",stroke:"#808080","stroke-width":"0.5","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"4","stroke-dasharray":"none","stroke-dashoffset":"0","stroke-opacity":"1","paint-order":"markers fill stroke","stop-color":"#000000"},attrs:{d:"M 17.165845,5.6268585 9.5249964,13.423152 1.884155,5.6268631",id:"path1927"}})])])]),t.showDropdown?r("div",{staticClass:"variants"},[r("div",{class:{selected:t.isSelected("VIP")},on:{click:function(e){return t.onAddClientGroup(e,"VIP")}}},[t._v(" VIP ")]),r("div",{class:{selected:t.isSelected("Проблемные")},on:{click:function(e){return t.onAddClientGroup(e,"Проблемные")}}},[t._v(" Проблемные ")]),r("div",{class:{selected:t.isSelected("ОМС")},on:{click:function(e){return t.onAddClientGroup(e,"ОМС")}}},[t._v(" ОМС ")])]):t._e(),t.$v.clientGroup.$error?r("div",{staticClass:"error"},[t._v("Укажите группу")]):t._e()]),r("div",{staticClass:"form-item _important-label",class:{"selected-in-input":t.$v.doctor.$error}},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.$v.doctor.$model,expression:"$v.doctor.$model"}],staticClass:"form-item__input form-item__input_select",attrs:{id:"doctor"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.$v.doctor,"$model",e.target.multiple?r:r[0])}}},[r("option",{attrs:{disabled:"",value:""}},[t._v("Лечащий врач")]),r("option",{attrs:{value:"VIP"}},[t._v("Иванов")]),r("option",{attrs:{value:"Проблемные"}},[t._v("Захаров")]),r("option",{attrs:{value:"ОМС"}},[t._v("Чернышева")])]),r("svg",{staticClass:"down-sfift-icon",attrs:{disabled:"",id:"svg1025",version:"1.1",viewBox:"0 0 19.05 19.050001",width:"15",height:"15",xmlns:"http://www.w3.org/2000/svg","xmlns:inkscape":"http://www.inkscape.org/namespaces/inkscape","xmlns:sodipodi":"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd","xmlns:svg":"http://www.w3.org/2000/svg"}},[r("defs",{attrs:{id:"defs1022"}}),r("g",{attrs:{id:"layer1"}},[r("path",{staticStyle:{"font-variation-settings":"normal",opacity:"1",fill:"none","fill-opacity":"1",stroke:"#808080","stroke-width":"0.5","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"4","stroke-dasharray":"none","stroke-dashoffset":"0","stroke-opacity":"1","paint-order":"markers fill stroke","stop-color":"#000000"},attrs:{d:"M 17.165845,5.6268585 9.5249964,13.423152 1.884155,5.6268631",id:"path1927"}})])])]),r("div",{staticClass:"form-item _important-label",class:{"form-item_error":t.$v.phoneNumber.$error}},[r("p",{staticClass:"form-item__title"},[t._v("Контактный номер")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.$v.phoneNumber.$model,expression:"$v.phoneNumber.$model"}],staticClass:"form-item__input",attrs:{id:"phoneNumber",placeholder:"7XXXXXXXXXX"},domProps:{value:t.$v.phoneNumber.$model},on:{input:function(e){e.target.composing||t.$set(t.$v.phoneNumber,"$model",e.target.value)}}}),t._m(2),t.$v.phoneNumber.required?t._e():r("div",{staticClass:"error"},[t._v(" Поле обязательно к заполнению ")]),t.$v.phoneNumber.numeric?t._e():r("div",{staticClass:"error"},[t._v(" Поле должно содержать номер телефона ")]),t.$v.phoneNumber.minLength&&t.$v.phoneNumber.maxLength?t._e():r("div",{staticClass:"error"},[t._v(" Поле должно содержать 11 цифр ")]),t.$v.phoneNumber.correctNumber?t._e():r("div",{staticClass:"error"},[t._v(' Номер должен начинатся с "7" ')])])]),r("div",{staticClass:"wrapper_form-block flex-row"},[r("h2",[t._v("Адрес")]),r("hr"),t._m(3),t._m(4),t._m(5),r("div",{staticClass:"form-item _important-label",class:{"form-item_error":t.$v.city.$error}},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.$v.city.$model,expression:"$v.city.$model",modifiers:{trim:!0}}],staticClass:"form-item__input",attrs:{placeholder:"Город",name:"city",id:"city"},domProps:{value:t.$v.city.$model},on:{input:function(e){e.target.composing||t.$set(t.$v.city,"$model",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t.$v.city.required?t._e():r("div",{staticClass:"error"},[t._v(" Поле обязательно к заполнению ")])]),t._m(6),t._m(7)]),r("div",{staticClass:"wrapper_form-block flex-row"},[r("h2",[t._v("Паспорт")]),r("hr"),r("div",{staticClass:"form-item_doc-type-block flex-row"},[r("div",{staticClass:"form-item__document-type _important-label",class:{"selected-in-input":t.$v.documentType.$error}},[r("label",{attrs:{for:"documentType"}}),r("select",{directives:[{name:"model",rawName:"v-model",value:t.$v.documentType.$model,expression:"$v.documentType.$model"}],staticClass:"form-item__input form-item__input_select",attrs:{id:"documentType"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.$v.documentType,"$model",e.target.multiple?r:r[0])}}},[r("option",{attrs:{disabled:"",value:""}},[t._v("Тип документа")]),r("option",{attrs:{value:"Паспорт"}},[t._v("Паспорт")]),r("option",{attrs:{value:"Свид. о рождении"}},[t._v("Свид. о рождении")]),r("option",{attrs:{value:"Вод. удостоверение"}},[t._v("Вод. удостоверение")])]),r("svg",{staticClass:"down-sfift-icon",attrs:{disabled:"",id:"svg1025",version:"1.1",viewBox:"0 0 19.05 19.050001",width:"15",height:"15",xmlns:"http://www.w3.org/2000/svg","xmlns:inkscape":"http://www.inkscape.org/namespaces/inkscape","xmlns:sodipodi":"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd","xmlns:svg":"http://www.w3.org/2000/svg"}},[r("defs",{attrs:{id:"defs1022"}}),r("g",{attrs:{id:"layer1"}},[r("path",{staticStyle:{"font-variation-settings":"normal",opacity:"1",fill:"none","fill-opacity":"1",stroke:"#808080","stroke-width":"0.5","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"4","stroke-dasharray":"none","stroke-dashoffset":"0","stroke-opacity":"1","paint-order":"markers fill stroke","stop-color":"#000000"},attrs:{d:"M 17.165845,5.6268585 9.5249964,13.423152 1.884155,5.6268631",id:"path1927"}})])])]),r("div",{staticClass:"form-item__issue-date _important-label",class:{"form-item_error":t.$v.issueDate.$error}},[r("p",{staticClass:"form-item__title"},[t._v("Дата выдачи")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.$v.issueDate.$model,expression:"$v.issueDate.$model"}],staticClass:"form-item__input form-item__input_birthDate",attrs:{id:"issueDate",name:"issueDate",type:"date"},domProps:{value:t.$v.issueDate.$model},on:{input:function(e){e.target.composing||t.$set(t.$v.issueDate,"$model",e.target.value)}}}),t.$v.issueDate.required?t._e():r("div",{staticClass:"error"},[t._v(" Укажите дату выдачи ")])])]),t._m(8),t._m(9),t._m(10),r("div",{staticClass:"send"},[r("button",{staticClass:"button",class:{_disable:t.$v.validationGroup.$invalid},attrs:{type:"button",disabled:t.disableButton},on:{click:t.success}},[t._v(" Завершить регистрацию ")]),t.disableButton?r("div",{staticClass:"disable-button-comment"},[t._v(" (Для завершения заполните все обязательные поля"),r("span",{staticClass:"f-prime-color"},[t._v("*")]),t._v(") ")]):t._e()])])])])},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"comm-in-main-title"},[t._v(" Обязательно для заполнения "),r("span",{staticClass:"f-prime-color"},[t._v("*")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-item"},[r("input",{staticClass:"form-item__input",attrs:{id:"patronymic",placeholder:"Отчество"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-item_sms flex-row f-al-end"},[r("input",{attrs:{id:"sms",type:"checkbox"}}),t._v("Не отправлять СМС ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-item"},[r("input",{staticClass:"form-item__input",attrs:{id:"index",placeholder:"Индекс"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-item"},[r("input",{staticClass:"form-item__input",attrs:{id:"country",placeholder:"Страна"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-item"},[r("input",{staticClass:"form-item__input",attrs:{id:"region",placeholder:"Область"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-item"},[r("input",{staticClass:"form-item__input",attrs:{id:"srteet",placeholder:"Улица"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-item"},[r("input",{staticClass:"form-item__input",attrs:{id:"house",placeholder:"Дом"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-item"},[r("input",{staticClass:"form-item__input",attrs:{id:"series",placeholder:"Серия"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-item"},[r("input",{staticClass:"form-item__input",attrs:{id:"number",placeholder:"Номер"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-item"},[r("input",{staticClass:"form-item__input",attrs:{id:"issuedBy",placeholder:"Кем выдан"}})])}],l=(r(9653),r(4553),r(561),r(6409)),m=function(t){return 7===Number(t[0])},d=function(t){return t.length>0};const c={data:function(){return{name:"",surname:"",birthDate:"",doctor:"",clientGroup:[],phoneNumber:"",gender:"",city:"",documentType:"",issueDate:"",showDropdown:!1}},mounted:function(){var t=this;document.addEventListener("click",(function(e){t.showDropdown=!1}))},computed:{disableButton:function(){return this.$v.validationGroup.$invalid}},validations:{validationGroup:["name","surname","birthDate","phoneNumber","gender","clientGroup","doctor","city","issueDate","documentType"],name:{required:l.C1},surname:{required:l.C1},birthDate:{required:l.C1},phoneNumber:{maxLength:(0,l.BS)(11),minLength:(0,l.Ei)(11),required:l.C1,numeric:l.uR,correctNumber:m},gender:{required:l.C1},clientGroup:{arrNotEmpty:d},doctor:{required:l.C1},city:{required:l.C1},issueDate:{required:l.C1},documentType:{required:l.C1}},methods:{success:function(){alert("Новый клиент успешно зарегестрирован!!!!")},onAddClientGroup:function(t,e){t.stopPropagation(),t.preventDefault(),this.$v.clientGroup.$touch();var r=this.clientGroup.findIndex((function(t){return e==t}));r>0||0==r?this.clientGroup.splice(r,1):this.clientGroup.push(e)},isSelected:function(t){return this.clientGroup.findIndex((function(e){return t==e}))>=0},onShowDropdown:function(t){t.stopPropagation(),t.preventDefault(),this.showDropdown=!0}}},u=c;var p=r(1001),v=(0,p.Z)(u,a,n,!1,null,"26eeef45",null);const f=v.exports,_={name:"App",components:{RegistrationForm:f}},h=_;var $=(0,p.Z)(h,s,o,!1,null,null,null);const g=$.exports;var w=r(2424);i.Z.config.productionTip=!1,i.Z.use(w.ZP),new i.Z({render:function(t){return t(g)}}).$mount("#app")}},e={};function r(i){var s=e[i];if(void 0!==s)return s.exports;var o=e[i]={exports:{}};return t[i](o,o.exports,r),o.exports}r.m=t,(()=>{var t=[];r.O=(e,i,s,o)=>{if(!i){var a=1/0;for(d=0;d<t.length;d++){for(var[i,s,o]=t[d],n=!0,l=0;l<i.length;l++)(!1&o||a>=o)&&Object.keys(r.O).every((t=>r.O[t](i[l])))?i.splice(l--,1):(n=!1,o<a&&(a=o));if(n){t.splice(d--,1);var m=s();void 0!==m&&(e=m)}}return e}o=o||0;for(var d=t.length;d>0&&t[d-1][2]>o;d--)t[d]=t[d-1];t[d]=[i,s,o]}})(),(()=>{r.d=(t,e)=>{for(var i in e)r.o(e,i)&&!r.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()})(),(()=>{r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e)})(),(()=>{var t={143:0};r.O.j=e=>0===t[e];var e=(e,i)=>{var s,o,[a,n,l]=i,m=0;if(a.some((e=>0!==t[e]))){for(s in n)r.o(n,s)&&(r.m[s]=n[s]);if(l)var d=l(r)}for(e&&e(i);m<a.length;m++)o=a[m],r.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return r.O(d)},i=self["webpackChunktest"]=self["webpackChunktest"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))})();var i=r.O(void 0,[998],(()=>r(1050)));i=r.O(i)})();
//# sourceMappingURL=app.f8ea1923.js.map