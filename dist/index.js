module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,u){function a(e){try{l(n.next(e))}catch(e){u(e)}}function i(e){try{l(n.throw(e))}catch(e){u(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,i)}l((n=n.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var r,n,o,u,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function i(u){return function(i){return function(u){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&u[0]?n.return:u[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,u[1])).done)return o;switch(n=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,n=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===u[0]||2===u[0])){a=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){a.label=u[1];break}if(6===u[0]&&a.label<o[1]){a.label=o[1],o=u;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(u);break}o[2]&&a.ops.pop(),a.trys.pop();continue}u=t.call(e,a)}catch(e){u=[6,e],n=0}finally{r=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,i])}}};Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(){}return e.set=function(t){return n(this,void 0,void 0,(function(){var r,n,u,a;return o(this,(function(o){switch(o.label){case 0:r=t.key,n=t.value,u=t.age;try{a=JSON.stringify({value:n,age:"number"==typeof u?1e3*u+Date.now():void 0})}catch(e){throw new TypeError("invalid value")}return e.tryCount=0,[4,e.setItem(r,a)];case 1:return o.sent(),[2]}}))}))},e.setItem=function(t,r){return n(this,void 0,void 0,(function(){return o(this,(function(n){try{localStorage.setItem(t,r)}catch(n){if(e.tryCount>0)throw n;e.filterDeadline(),e.tryCount++,e.setItem(t,r)}return[2]}))}))},e.get=function(e){var t=localStorage.getItem(e);if(t){var r=JSON.parse(t);return r.age<Date.now()?void 0:r.value}},e.filterDeadline=function(){for(var e=localStorage.length-1;e>=0;e--){var t=localStorage.key(e);if(t){var r=localStorage.getItem(t);if(r)JSON.parse(r).age<Date.now()&&localStorage.removeItem(t)}}},e.tryCount=0,e}();t.default=u}]);