(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{48:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.css=t.default=void 0;var o=y(n(1)),r=n(11),u=n(19),i=y(n(62)),f=y(n(61)),c=y(n(60)),l=y(n(59)),a=y(n(58)),p=y(n(51)),s=y(n(57));function y(e){return e&&e.__esModule?e:{default:e}}function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function m(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var _=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),m(this,h(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,o.default.Component),function(e,t,n){t&&d(e.prototype,t),n&&d(e,n)}(t,[{key:"render",value:function(){var e=this;return o.default.createElement(r.Scoped,{css:O},o.default.createElement(s.default,this.props),o.default.createElement("div",{className:"app breadcrumb-margin-top"},o.default.createElement("div",{className:"card main-content"},o.default.createElement(u.Route,{path:this.props.match.url,exact:!0,render:function(){return o.default.createElement(u.Redirect,{to:e.props.match.url+"/expungements-overview"})}}),o.default.createElement(u.Route,{path:this.props.match.url+"/expungements-overview",component:i.default}),o.default.createElement(u.Route,{path:this.props.match.url+"/are-you-eligible",component:f.default}),o.default.createElement(u.Route,{path:this.props.match.url+"/certificate-of-eligibility",component:c.default}),o.default.createElement(u.Route,{path:this.props.match.url+"/file-petition",component:l.default}),o.default.createElement(u.Route,{path:this.props.match.url+"/serve-petition",component:a.default}))),o.default.createElement(p.default,null))}}]),t}();t.default=_;var O="\n  & .app {\n    margin-left: auto;\n    margin-right: auto;\n    width: 65%;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n  }\n\n  & .main-content {\n    width: 75vw;\n    max-width: 936rem;\n    margin: 48rem 0;\n    padding: 32rem;\n  }\n";t.css=O},51:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){return e&&e.__esModule?e:{default:e}}(n(1)),r=n(11),u=n(20),i=n(19);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),l(this,a(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,o.default.Component),function(e,t,n){t&&c(e.prototype,t),n&&c(e,n)}(t,[{key:"render",value:function(){return o.default.createElement(r.Scoped,{css:y},o.default.createElement("div",{className:"footer"},o.default.createElement("ul",{className:"links"},o.default.createElement(i.Link,{to:"/"},o.default.createElement("li",null,"Home")),o.default.createElement(i.Link,{to:"/app/expungements-overview"},o.default.createElement("li",null,"What is an expungement?")),o.default.createElement("a",{href:"https://utahexpungements.freeflarum.com",target:"_blank"},o.default.createElement("li",null,"Ask a question"))),o.default.createElement("ul",{className:"links"},o.default.createElement(i.Link,{to:"/about-us"},o.default.createElement("li",null,"About us")),o.default.createElement("a",{href:"https://utahexpungements.freeflarum.com",target:"_blank"},o.default.createElement("li",null,"Community Forum")),o.default.createElement(i.Link,{to:"/contribute"},o.default.createElement("li",null,"Report a problem")))))}}]),t}();t.default=s;var y="\n  & .footer {\n    background-color: ".concat(u.secondary,";\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n    padding: 48rem 0rem;\n  }\n\n  & .links {\n    padding: 0 16rem;\n  }\n\n  & .links a:hover {\n    text-decoration: underline;\n  }\n\n  & .links li {\n    padding: 4rem 0;\n  }\n")},52:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){return e&&e.__esModule?e:{default:e}}(n(1)),r=n(11),u=n(19);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function c(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),c(this,l(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(t,o.default.Component),function(e,t,n){t&&f(e.prototype,t),n&&f(e,n)}(t,[{key:"render",value:function(){return o.default.createElement(r.Scoped,{css:s},!this.props.isFirst&&o.default.createElement("div",{className:"caret"},">"),o.default.createElement(u.Link,{to:this.props.url},this.props.name),this.props.childCrumbs)}}]),t}();t.default=p;var s="\n  & .caret {\n    margin: 0 8rem;\n  }\n"},53:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){return e&&e.__esModule?e:{default:e}}(n(1));function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),i(this,f(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,o.default.Component),function(e,t,n){t&&u(e.prototype,t),n&&u(e,n)}(t,[{key:"render",value:function(){return o.default.createElement(o.default.Fragment,null)}}]),t}();t.default=l},54:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){return e&&e.__esModule?e:{default:e}}(n(1));function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),i(this,f(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,o.default.Component),function(e,t,n){t&&u(e.prototype,t),n&&u(e,n)}(t,[{key:"render",value:function(){return o.default.createElement(o.default.Fragment,null)}}]),t}();t.default=l},55:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){return e&&e.__esModule?e:{default:e}}(n(1));function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),i(this,f(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,o.default.Component),function(e,t,n){t&&u(e.prototype,t),n&&u(e,n)}(t,[{key:"render",value:function(){return o.default.createElement(o.default.Fragment,null)}}]),t}();t.default=l},56:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n(1)),r=n(19),u=i(n(52));function i(e){return e&&e.__esModule?e:{default:e}}function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),l(this,a(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,o.default.Component),function(e,t,n){t&&c(e.prototype,t),n&&c(e,n)}(t,[{key:"render",value:function(){var e=this.props.match.url+"/are-you-eligible";return o.default.createElement(r.Route,{path:e,render:function(){return o.default.createElement(u.default,{name:"Step 1: Are you eligible?",url:e})}})}}]),t}();t.default=s},57:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=p(n(1)),r=n(11),u=n(20),i=p(n(52)),f=p(n(56)),c=p(n(55)),l=p(n(54)),a=p(n(53));function p(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function b(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),b(this,d(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,o.default.Component),function(e,t,n){t&&y(e.prototype,t),n&&y(e,n)}(t,[{key:"render",value:function(){return o.default.createElement(r.Scoped,{css:v},o.default.createElement("nav",{className:"breadcrumbs"},o.default.createElement(i.default,{isFirst:!0,name:"Expungement tool",url:"/app",childCrumbs:o.default.createElement(o.default.Fragment,null,o.default.createElement(f.default,this.props),o.default.createElement(c.default,this.props),o.default.createElement(l.default,this.props),o.default.createElement(a.default,this.props))})))}}]),t}();t.default=h;var v="\n  & .breadcrumbs {\n    position: fixed;\n    top: ".concat(u.navbarHeight,";\n    left: 0;\n    width: 100vw;\n    background-color: ").concat(u.tertiary,";\n    height: ").concat(u.breadcrumbHeight,";\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center;\n    padding: 0 16rem;\n  }\n")},58:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){return e&&e.__esModule?e:{default:e}}(n(1));function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),i(this,f(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,o.default.Component),function(e,t,n){t&&u(e.prototype,t),n&&u(e,n)}(t,[{key:"render",value:function(){return o.default.createElement("h1",null,"Serve Petition")}}]),t}();t.default=l},59:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){return e&&e.__esModule?e:{default:e}}(n(1));function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),i(this,f(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,o.default.Component),function(e,t,n){t&&u(e.prototype,t),n&&u(e,n)}(t,[{key:"render",value:function(){return o.default.createElement("h1",null,"File Petition")}}]),t}();t.default=l},60:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){return e&&e.__esModule?e:{default:e}}(n(1));function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),i(this,f(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,o.default.Component),function(e,t,n){t&&u(e.prototype,t),n&&u(e,n)}(t,[{key:"render",value:function(){return o.default.createElement("h1",null,"Certificate of Eligibility")}}]),t}();t.default=l},61:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){return e&&e.__esModule?e:{default:e}}(n(1));function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var l=[{id:1,yesHandler:2,noHandler:4,content:"Does your Crime hae a conviction?"},{id:2,yesHandler:101,noHandler:3,content:"Do You have a criminal case pending?"},{id:3,yesHandler:4,noHandler:101,content:"Have all fines, fees, restitution, and interest been paid?"},{id:4,yesHandler:1,noHandler:1,content:"Still Working On this"},{id:101,yesHandler:1,noHandler:1,content:"You Are Not Eligible For An Expungement"}],a=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,u=new Array(o),f=0;f<o;f++)u[f]=arguments[f];return function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(c(c(n=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?c(e):t}(this,(e=i(t)).call.apply(e,[this].concat(u))))),"state",{step:l[0]}),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,o.default.Component),function(e,t,n){t&&u(e.prototype,t),n&&u(e,n)}(t,[{key:"render",value:function(){var e=this;return console.log("this is this.state.step",this.state.step),o.default.createElement("div",null,o.default.createElement("p",null,this.state.step.content),o.default.createElement("button",{className:"primary",onClick:function(){return e.setState({currentStep:e.state.step.yesHandler,step:l.find(function(t){return t.id===e.state.step.yesHandler})})}},"Yes"),o.default.createElement("button",{className:"primary",onClick:function(){return e.setState({currentStep:e.state.step.noHandler,step:l.find(function(t){return t.id===e.state.step.noHandler})})}},"No"))}}]),t}();t.default=a},62:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){return e&&e.__esModule?e:{default:e}}(n(1));function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),i(this,f(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,o.default.Component),function(e,t,n){t&&u(e.prototype,t),n&&u(e,n)}(t,[{key:"render",value:function(){return o.default.createElement("h1",null,"Overview!")}}]),t}();t.default=l}}]);
//# sourceMappingURL=app.js.map