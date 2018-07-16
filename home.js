(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{49:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(1)),o=n(11),a=n(19),l=n(20),i=c(n(63)),u=c(n(51));function c(e){return e&&e.__esModule?e:{default:e}}function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),d(this,m(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,r.default.Component),function(e,t,n){t&&s(e.prototype,t),n&&s(e,n)}(t,[{key:"render",value:function(){return r.default.createElement(o.Scoped,{css:b},r.default.createElement("div",{className:"navbar-margin-top home"},r.default.createElement("div",{className:"hero"},r.default.createElement("h1",null,__("HOME_PAGE_TITLE")),r.default.createElement("div",{className:"actions"},r.default.createElement(a.Link,{to:"/app"},r.default.createElement("button",{className:"primary"},__("HOME_PAGE_PRIMARY_ACTION"))),r.default.createElement("a",{href:"https://utahexpungements.freeflarum.com",target:"_blank"},r.default.createElement("button",{className:"secondary"},__("COMMUNITY_FORUM")))),r.default.createElement("div",{className:"padding-below"})),r.default.createElement("div",{className:"more-details"},r.default.createElement(i.default,{icon:"/static/icons/svg/007-user-4.svg",title:"Completely free to use!",description:r.default.createElement(r.default.Fragment,null,"This website is ",r.default.createElement(a.Link,{className:"underline",to:"/about-us"},"built by Utah community members for Utah community members"),". We'll never charge you anything.")}),r.default.createElement(i.default,{icon:"/static/icons/svg/008-chat-2.svg",title:"Ask and answer questions",description:r.default.createElement(r.default.Fragment,null,"Join our ",r.default.createElement("a",{className:"underline",href:"https://utahexpungements.freeflarum.com",target:"_blank"},"discussion forum")," to ask and answer questions about the expungement process in Utah.")}),r.default.createElement(i.default,{icon:"/static/icons/svg/025-presentation.svg",title:"Find out if you qualify",description:r.default.createElement(r.default.Fragment,null,"Our ",r.default.createElement(a.Link,{className:"underline",to:"/app/are-you-eligible"},"screening tool")," will help you understand if and when your convictions are ready to be expunged from your criminal record.")}),r.default.createElement(i.default,{icon:"/static/icons/svg/003-laptop.svg",title:"Fill out the paperwork online",description:"Enter your information in a web form and we'll generate the documents you'll need to file with the courts."})),r.default.createElement(u.default,null)))}}]),t}();t.default=y;var b="\n  & .home {\n    position: relative;\n  }\n\n  & .hero {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100vw;\n    background-image: url('static/adventure-blue-sky-clouds-343299.jpg');\n    background-position: center;\n    background-color: ".concat(l.lightGray,";\n    background-size: cover;\n    text-align: center;\n    height: 500rem;\n  }\n\n  & .padding-below {\n    padding-bottom: 10%;\n  }\n\n  ").concat(l.mediaDesktop," {\n    & .actions {\n      display: flex;\n      flex-direction: row;\n    }\n\n    & .actions > * {\n      margin-right: 16px;\n    }\n\n    & .actions > *:last-child {\n      margin-right: 0;\n    }\n  }\n\n  ").concat(l.mediaMobile," {\n    & .actions {\n      display: flex;\n      flex-direction: column;\n    }\n\n    & .actions > * {\n      margin-bottom: 16px;\n    }\n\n    & .actions > *:last-child {\n      margin-bottom: 0;\n    }\n\n    & .more-details {\n      flex-direction: column;\n    }\n  }\n\n  & .more-details {\n    background-color: white;\n    width: 100vw;\n    padding: 32rem 48rem;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n\n  & .underline {\n    text-decoration: underline;\n  }\n")},51:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){return e&&e.__esModule?e:{default:e}}(n(1)),o=n(11),a=n(20),l=n(19);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),c(this,f(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,r.default.Component),function(e,t,n){t&&u(e.prototype,t),n&&u(e,n)}(t,[{key:"render",value:function(){return r.default.createElement(o.Scoped,{css:m},r.default.createElement("div",{className:"footer"},r.default.createElement("ul",{className:"links"},r.default.createElement(l.Link,{to:"/"},r.default.createElement("li",null,"Home")),r.default.createElement(l.Link,{to:"/app/expungements-overview"},r.default.createElement("li",null,"What is an expungement?")),r.default.createElement("a",{href:"https://utahexpungements.freeflarum.com",target:"_blank"},r.default.createElement("li",null,"Ask a question"))),r.default.createElement("ul",{className:"links"},r.default.createElement(l.Link,{to:"/about-us"},r.default.createElement("li",null,"About us")),r.default.createElement("a",{href:"https://utahexpungements.freeflarum.com",target:"_blank"},r.default.createElement("li",null,"Community Forum")),r.default.createElement(l.Link,{to:"/contribute"},r.default.createElement("li",null,"Report a problem")))))}}]),t}();t.default=d;var m="\n  & .footer {\n    background-color: ".concat(a.secondary,";\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n    padding: 48rem 0rem;\n  }\n\n  & .links {\n    padding: 0 16rem;\n  }\n\n  & .links a:hover {\n    text-decoration: underline;\n  }\n\n  & .links li {\n    padding: 4rem 0;\n  }\n")},63:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){return e&&e.__esModule?e:{default:e}}(n(1)),o=n(11);n(20);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),i(this,u(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,r.default.Component),function(e,t,n){t&&l(e.prototype,t),n&&l(e,n)}(t,[{key:"render",value:function(){return r.default.createElement(o.Scoped,{css:s},r.default.createElement("div",{className:"detail-highlight"},r.default.createElement("img",{className:"icon",src:this.props.icon}),r.default.createElement("div",{className:"text"},r.default.createElement("h3",null,this.props.title),r.default.createElement("div",null,this.props.description))))}}]),t}();t.default=f;var s="\n  & .icon {\n    width: 100rem;\n    height: 100rem;\n    min-width: 100rem;\n    min-height: 100rem;\n  }\n\n  & .detail-highlight {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    flex-direction: column;\n    padding: 16rem 40rem;\n  }\n\n  & .text {\n    max-width: 200rem;\n  }\n"}}]);
//# sourceMappingURL=home.js.map