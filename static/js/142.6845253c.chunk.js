(self.webpackChunknetflix=self.webpackChunknetflix||[]).push([[142],{1497:(e,t,n)=>{"use strict";var o=n(3218);function r(){}function s(){}s.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,s,i){if(i!==o){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:r};return n.PropTypes=n,n}},5173:(e,t,n)=>{e.exports=n(1497)()},3218:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},1142:(e,t,n)=>{"use strict";n.d(t,{A:()=>Ke});var o=n(8139),r=n.n(o);const s=!("undefined"===typeof window||!window.document||!window.document.createElement);var i=!1,a=!1;try{var l={get passive(){return i=!0},get once(){return a=i=!0}};s&&(window.addEventListener("test",l,l),window.removeEventListener("test",l,!0))}catch(Xe){}const c=function(e,t,n,o){if(o&&"boolean"!==typeof o&&!a){var r=o.once,s=o.capture,l=n;!a&&r&&(l=n.__once||function e(o){this.removeEventListener(t,e,s),n.call(this,o)},n.__once=l),e.addEventListener(t,l,i?o:s)}e.addEventListener(t,n,o)};function u(e){return e&&e.ownerDocument||document}const d=function(e,t,n,o){var r=o&&"boolean"!==typeof o?o.capture:o;e.removeEventListener(t,n,r),n.__once&&e.removeEventListener(t,n.__once,r)};var f;function p(e){if((!f&&0!==f||e)&&s){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),f=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return f}var m=n(5043);const h=function(e){const t=(0,m.useRef)(e);return(0,m.useEffect)((()=>{t.current=e}),[e]),t};function E(e){const t=h(e);return(0,m.useCallback)((function(){return t.current&&t.current(...arguments)}),[t])}const x=e=>e&&"function"!==typeof e?t=>{e.current=t}:e;const g=function(e,t){return(0,m.useMemo)((()=>function(e,t){const n=x(e),o=x(t);return e=>{n&&n(e),o&&o(e)}}(e,t)),[e,t])};function v(e){const t=function(e){const t=(0,m.useRef)(e);return t.current=e,t}(e);(0,m.useEffect)((()=>()=>t.current()),[])}function b(e,t){return function(e){var t=u(e);return t&&t.defaultView||window}(e).getComputedStyle(e,t)}var y=/([A-Z])/g;var C=/^ms-/;function k(e){return function(e){return e.replace(y,"-$1").toLowerCase()}(e).replace(C,"-ms-")}var w=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;const O=function(e,t){var n="",o="";if("string"===typeof t)return e.style.getPropertyValue(k(t))||b(e).getPropertyValue(k(t));Object.keys(t).forEach((function(r){var s=t[r];s||0===s?!function(e){return!(!e||!w.test(e))}(r)?n+=k(r)+": "+s+";":o+=r+"("+s+") ":e.style.removeProperty(k(r))})),o&&(n+="transform: "+o+";"),e.style.cssText+=";"+n};const N=function(e,t,n,o){return c(e,t,n,o),function(){d(e,t,n,o)}};function R(e,t,n){void 0===n&&(n=5);var o=!1,r=setTimeout((function(){o||function(e,t,n,o){if(void 0===n&&(n=!1),void 0===o&&(o=!0),e){var r=document.createEvent("HTMLEvents");r.initEvent(t,n,o),e.dispatchEvent(r)}}(e,"transitionend",!0)}),t+n),s=N(e,"transitionend",(function(){o=!0}),{once:!0});return function(){clearTimeout(r),s()}}function T(e,t,n,o){null==n&&(n=function(e){var t=O(e,"transitionDuration")||"",n=-1===t.indexOf("ms")?1e3:1;return parseFloat(t)*n}(e)||0);var r=R(e,n,o),s=N(e,"transitionend",t);return function(){r(),s()}}function S(e){void 0===e&&(e=u());try{var t=e.activeElement;return t&&t.nodeName?t:null}catch(Xe){return e.body}}function j(e,t){return e.contains?e.contains(t):e.compareDocumentPosition?e===t||!!(16&e.compareDocumentPosition(t)):void 0}var L=n(7950);const D=`data-rr-ui-${"modal-open"}`;const P=class{constructor(){let{ownerDocument:e,handleContainerOverflow:t=!0,isRTL:n=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.handleContainerOverflow=t,this.isRTL=n,this.modals=[],this.ownerDocument=e}getScrollbarWidth(){return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;const t=e.defaultView;return Math.abs(t.innerWidth-e.documentElement.clientWidth)}(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(e){}removeModalAttributes(e){}setContainerStyle(e){const t={overflow:"hidden"},n=this.isRTL?"paddingLeft":"paddingRight",o=this.getElement();e.style={overflow:o.style.overflow,[n]:o.style[n]},e.scrollBarWidth&&(t[n]=`${parseInt(O(o,n)||"0",10)+e.scrollBarWidth}px`),o.setAttribute(D,""),O(o,t)}reset(){[...this.modals].forEach((e=>this.remove(e)))}removeContainerStyle(e){const t=this.getElement();t.removeAttribute(D),Object.assign(t.style,e.style)}add(e){let t=this.modals.indexOf(e);return-1!==t?t:(t=this.modals.length,this.modals.push(e),this.setModalAttributes(e),0!==t||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),t)}remove(e){const t=this.modals.indexOf(e);-1!==t&&(this.modals.splice(t,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}isTopModal(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}},M=(0,m.createContext)(s?window:void 0);M.Provider;function F(){return(0,m.useContext)(M)}const B=(e,t)=>s?null==e?(t||u()).body:("function"===typeof e&&(e=e()),e&&"current"in e&&(e=e.current),e&&("nodeType"in e||e.getBoundingClientRect)?e:null):null;const _="undefined"!==typeof n.g&&n.g.navigator&&"ReactNative"===n.g.navigator.product,A="undefined"!==typeof document||_?m.useLayoutEffect:m.useEffect;const W=function(e){let{children:t,in:n,onExited:o,mountOnEnter:r,unmountOnExit:s}=e;const i=(0,m.useRef)(null),a=(0,m.useRef)(n),l=E(o);(0,m.useEffect)((()=>{n?a.current=!0:l(i.current)}),[n,l]);const c=g(i,t.ref),u=(0,m.cloneElement)(t,{ref:c});return n?u:s||!a.current&&r?null:u};function $(){const e=m.version.split(".");return{major:+e[0],minor:+e[1],patch:+e[2]}}const I=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];var H=n(579);const U=["component"];const V=m.forwardRef(((e,t)=>{let{component:n}=e;const o=function(e){let{onEnter:t,onEntering:n,onEntered:o,onExit:r,onExiting:s,onExited:i,addEndListener:a,children:l}=e,c=function(e,t){if(null==e)return{};var n={};for(var o in e)if({}.hasOwnProperty.call(e,o)){if(t.indexOf(o)>=0)continue;n[o]=e[o]}return n}(e,I);const{major:u}=$(),d=u>=19?l.props.ref:l.ref,f=(0,m.useRef)(null),p=g(f,"function"===typeof l?null:d),h=e=>t=>{e&&f.current&&e(f.current,t)},E=(0,m.useCallback)(h(t),[t]),x=(0,m.useCallback)(h(n),[n]),v=(0,m.useCallback)(h(o),[o]),b=(0,m.useCallback)(h(r),[r]),y=(0,m.useCallback)(h(s),[s]),C=(0,m.useCallback)(h(i),[i]),k=(0,m.useCallback)(h(a),[a]);return Object.assign({},c,{nodeRef:f},t&&{onEnter:E},n&&{onEntering:x},o&&{onEntered:v},r&&{onExit:b},s&&{onExiting:y},i&&{onExited:C},a&&{addEndListener:k},{children:"function"===typeof l?(e,t)=>l(e,Object.assign({},t,{ref:p})):(0,m.cloneElement)(l,{ref:p})})}(function(e,t){if(null==e)return{};var n={};for(var o in e)if({}.hasOwnProperty.call(e,o)){if(t.indexOf(o)>=0)continue;n[o]=e[o]}return n}(e,U));return(0,H.jsx)(n,Object.assign({ref:t},o))}));function z(e){let{children:t,in:n,onExited:o,onEntered:r,transition:s}=e;const[i,a]=(0,m.useState)(!n);n&&i&&a(!1);const l=function(e){let{in:t,onTransition:n}=e;const o=(0,m.useRef)(null),r=(0,m.useRef)(!0),s=E(n);return A((()=>{if(!o.current)return;let e=!1;return s({in:t,element:o.current,initial:r.current,isStale:()=>e}),()=>{e=!0}}),[t,s]),A((()=>(r.current=!1,()=>{r.current=!0})),[]),o}({in:!!n,onTransition:e=>{Promise.resolve(s(e)).then((()=>{e.isStale()||(e.in?null==r||r(e.element,e.initial):(a(!0),null==o||o(e.element)))}),(t=>{throw e.in||a(!0),t}))}}),c=g(l,t.ref);return i&&!n?null:(0,m.cloneElement)(t,{ref:c})}function K(e,t,n){return e?(0,H.jsx)(V,Object.assign({},n,{component:e})):t?(0,H.jsx)(z,Object.assign({},n,{transition:t})):(0,H.jsx)(W,Object.assign({},n))}const X=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];let Y;function q(e){const t=F(),n=e||function(e){return Y||(Y=new P({ownerDocument:null==e?void 0:e.document})),Y}(t),o=(0,m.useRef)({dialog:null,backdrop:null});return Object.assign(o.current,{add:()=>n.add(o.current),remove:()=>n.remove(o.current),isTopModal:()=>n.isTopModal(o.current),setDialogRef:(0,m.useCallback)((e=>{o.current.dialog=e}),[]),setBackdropRef:(0,m.useCallback)((e=>{o.current.backdrop=e}),[])})}const G=(0,m.forwardRef)(((e,t)=>{let{show:n=!1,role:o="dialog",className:r,style:i,children:a,backdrop:l=!0,keyboard:c=!0,onBackdropClick:u,onEscapeKeyDown:d,transition:f,runTransition:p,backdropTransition:h,runBackdropTransition:x,autoFocus:g=!0,enforceFocus:b=!0,restoreFocus:y=!0,restoreFocusOptions:C,renderDialog:k,renderBackdrop:w=e=>(0,H.jsx)("div",Object.assign({},e)),manager:O,container:R,onShow:T,onHide:D=()=>{},onExit:P,onExited:M,onExiting:_,onEnter:A,onEntering:W,onEntered:$}=e,I=function(e,t){if(null==e)return{};var n={};for(var o in e)if({}.hasOwnProperty.call(e,o)){if(t.indexOf(o)>=0)continue;n[o]=e[o]}return n}(e,X);const U=F(),V=function(e,t){const n=F(),[o,r]=(0,m.useState)((()=>B(e,null==n?void 0:n.document)));if(!o){const t=B(e);t&&r(t)}return(0,m.useEffect)((()=>{t&&o&&t(o)}),[t,o]),(0,m.useEffect)((()=>{const t=B(e);t!==o&&r(t)}),[e,o]),o}(R),z=q(O),Y=function(){const e=(0,m.useRef)(!0),t=(0,m.useRef)((()=>e.current));return(0,m.useEffect)((()=>(e.current=!0,()=>{e.current=!1})),[]),t.current}(),G=function(e){const t=(0,m.useRef)(null);return(0,m.useEffect)((()=>{t.current=e})),t.current}(n),[Z,J]=(0,m.useState)(!n),Q=(0,m.useRef)(null);(0,m.useImperativeHandle)(t,(()=>z),[z]),s&&!G&&n&&(Q.current=S(null==U?void 0:U.document)),n&&Z&&J(!1);const ee=E((()=>{if(z.add(),ie.current=N(document,"keydown",re),se.current=N(document,"focus",(()=>setTimeout(ne)),!0),T&&T(),g){var e,t;const n=S(null!=(e=null==(t=z.dialog)?void 0:t.ownerDocument)?e:null==U?void 0:U.document);z.dialog&&n&&!j(z.dialog,n)&&(Q.current=n,z.dialog.focus())}})),te=E((()=>{var e;(z.remove(),null==ie.current||ie.current(),null==se.current||se.current(),y)&&(null==(e=Q.current)||null==e.focus||e.focus(C),Q.current=null)}));(0,m.useEffect)((()=>{n&&V&&ee()}),[n,V,ee]),(0,m.useEffect)((()=>{Z&&te()}),[Z,te]),v((()=>{te()}));const ne=E((()=>{if(!b||!Y()||!z.isTopModal())return;const e=S(null==U?void 0:U.document);z.dialog&&e&&!j(z.dialog,e)&&z.dialog.focus()})),oe=E((e=>{e.target===e.currentTarget&&(null==u||u(e),!0===l&&D())})),re=E((e=>{c&&function(e){return"Escape"===e.code||27===e.keyCode}(e)&&z.isTopModal()&&(null==d||d(e),e.defaultPrevented||D())})),se=(0,m.useRef)(),ie=(0,m.useRef)();if(!V)return null;const ae=Object.assign({role:o,ref:z.setDialogRef,"aria-modal":"dialog"===o||void 0},I,{style:i,className:r,tabIndex:-1});let le=k?k(ae):(0,H.jsx)("div",Object.assign({},ae,{children:m.cloneElement(a,{role:"document"})}));le=K(f,p,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!n,onExit:P,onExiting:_,onExited:function(){J(!0),null==M||M(...arguments)},onEnter:A,onEntering:W,onEntered:$,children:le});let ce=null;return l&&(ce=w({ref:z.setBackdropRef,onClick:oe}),ce=K(h,x,{in:!!n,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:ce})),(0,H.jsx)(H.Fragment,{children:L.createPortal((0,H.jsxs)(H.Fragment,{children:[ce,le]}),V)})}));G.displayName="Modal";const Z=Object.assign(G,{Manager:P});var J=Function.prototype.bind.call(Function.prototype.call,[].slice);function Q(e,t){return J(e.querySelectorAll(t))}function ee(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}const te=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",ne=".sticky-top",oe=".navbar-toggler";class re extends P{adjustAndStore(e,t,n){const o=t.style[e];t.dataset[e]=o,O(t,{[e]:`${parseFloat(O(t,e))+n}px`})}restore(e,t){const n=t.dataset[e];void 0!==n&&(delete t.dataset[e],O(t,{[e]:n}))}setContainerStyle(e){super.setContainerStyle(e);const t=this.getElement();var n,o;if(o="modal-open",(n=t).classList?n.classList.add(o):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(n,o)||("string"===typeof n.className?n.className=n.className+" "+o:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+o)),!e.scrollBarWidth)return;const r=this.isRTL?"paddingLeft":"paddingRight",s=this.isRTL?"marginLeft":"marginRight";Q(t,te).forEach((t=>this.adjustAndStore(r,t,e.scrollBarWidth))),Q(t,ne).forEach((t=>this.adjustAndStore(s,t,-e.scrollBarWidth))),Q(t,oe).forEach((t=>this.adjustAndStore(s,t,e.scrollBarWidth)))}removeContainerStyle(e){super.removeContainerStyle(e);const t=this.getElement();var n,o;o="modal-open",(n=t).classList?n.classList.remove(o):"string"===typeof n.className?n.className=ee(n.className,o):n.setAttribute("class",ee(n.className&&n.className.baseVal||"",o));const r=this.isRTL?"paddingLeft":"paddingRight",s=this.isRTL?"marginLeft":"marginRight";Q(t,te).forEach((e=>this.restore(r,e))),Q(t,ne).forEach((e=>this.restore(s,e))),Q(t,oe).forEach((e=>this.restore(s,e)))}}let se;function ie(e,t){return ie=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},ie(e,t)}const ae=!1,le=m.createContext(null);var ce="unmounted",ue="exited",de="entering",fe="entered",pe="exiting",me=function(e){var t,n;function o(t,n){var o;o=e.call(this,t,n)||this;var r,s=n&&!n.isMounting?t.enter:t.appear;return o.appearStatus=null,t.in?s?(r=ue,o.appearStatus=de):r=fe:r=t.unmountOnExit||t.mountOnEnter?ce:ue,o.state={status:r},o.nextCallback=null,o}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,ie(t,n),o.getDerivedStateFromProps=function(e,t){return e.in&&t.status===ce?{status:ue}:null};var r=o.prototype;return r.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},r.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==de&&n!==fe&&(t=de):n!==de&&n!==fe||(t=pe)}this.updateStatus(!1,t)},r.componentWillUnmount=function(){this.cancelNextCallback()},r.getTimeouts=function(){var e,t,n,o=this.props.timeout;return e=t=n=o,null!=o&&"number"!==typeof o&&(e=o.exit,t=o.enter,n=void 0!==o.appear?o.appear:t),{exit:e,enter:t,appear:n}},r.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t)if(this.cancelNextCallback(),t===de){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:L.findDOMNode(this);n&&function(e){e.scrollTop}(n)}this.performEnter(e)}else this.performExit();else this.props.unmountOnExit&&this.state.status===ue&&this.setState({status:ce})},r.performEnter=function(e){var t=this,n=this.props.enter,o=this.context?this.context.isMounting:e,r=this.props.nodeRef?[o]:[L.findDOMNode(this),o],s=r[0],i=r[1],a=this.getTimeouts(),l=o?a.appear:a.enter;!e&&!n||ae?this.safeSetState({status:fe},(function(){t.props.onEntered(s)})):(this.props.onEnter(s,i),this.safeSetState({status:de},(function(){t.props.onEntering(s,i),t.onTransitionEnd(l,(function(){t.safeSetState({status:fe},(function(){t.props.onEntered(s,i)}))}))})))},r.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),o=this.props.nodeRef?void 0:L.findDOMNode(this);t&&!ae?(this.props.onExit(o),this.safeSetState({status:pe},(function(){e.props.onExiting(o),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:ue},(function(){e.props.onExited(o)}))}))}))):this.safeSetState({status:ue},(function(){e.props.onExited(o)}))},r.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},r.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},r.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(o){n&&(n=!1,t.nextCallback=null,e(o))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},r.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:L.findDOMNode(this),o=null==e&&!this.props.addEndListener;if(n&&!o){if(this.props.addEndListener){var r=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],s=r[0],i=r[1];this.props.addEndListener(s,i)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},r.render=function(){var e=this.state.status;if(e===ce)return null;var t=this.props,n=t.children,o=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,function(e,t){if(null==e)return{};var n={};for(var o in e)if({}.hasOwnProperty.call(e,o)){if(t.includes(o))continue;n[o]=e[o]}return n}(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return m.createElement(le.Provider,{value:null},"function"===typeof n?n(e,o):m.cloneElement(m.Children.only(n),o))},o}(m.Component);function he(){}me.contextType=le,me.propTypes={},me.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:he,onEntering:he,onEntered:he,onExit:he,onExiting:he,onExited:he},me.UNMOUNTED=ce,me.EXITED=ue,me.ENTERING=de,me.ENTERED=fe,me.EXITING=pe;const Ee=me;function xe(e,t){const n=O(e,t)||"",o=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*o}function ge(e,t){const n=xe(e,"transitionDuration"),o=xe(e,"transitionDelay"),r=T(e,(n=>{n.target===e&&(r(),t(n))}),n+o)}const ve=m.forwardRef(((e,t)=>{let{onEnter:n,onEntering:o,onEntered:r,onExit:s,onExiting:i,onExited:a,addEndListener:l,children:c,childRef:u,...d}=e;const f=(0,m.useRef)(null),p=g(f,u),h=e=>{var t;p((t=e)&&"setState"in t?L.findDOMNode(t):null!=t?t:null)},E=e=>t=>{e&&f.current&&e(f.current,t)},x=(0,m.useCallback)(E(n),[n]),v=(0,m.useCallback)(E(o),[o]),b=(0,m.useCallback)(E(r),[r]),y=(0,m.useCallback)(E(s),[s]),C=(0,m.useCallback)(E(i),[i]),k=(0,m.useCallback)(E(a),[a]),w=(0,m.useCallback)(E(l),[l]);return(0,H.jsx)(Ee,{ref:t,...d,onEnter:x,onEntered:b,onEntering:v,onExit:y,onExited:k,onExiting:C,addEndListener:w,nodeRef:f,children:"function"===typeof c?(e,t)=>c(e,{...t,ref:h}):m.cloneElement(c,{ref:h})})})),be={[de]:"show",[fe]:"show"},ye=m.forwardRef(((e,t)=>{let{className:n,children:o,transitionClasses:s={},onEnter:i,...a}=e;const l={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...a},c=(0,m.useCallback)(((e,t)=>{!function(e){e.offsetHeight}(e),null==i||i(e,t)}),[i]),{major:u}=$(),d=u>=19?o.props.ref:o.ref;return(0,H.jsx)(ve,{ref:t,addEndListener:ge,...l,onEnter:c,childRef:d,children:(e,t)=>m.cloneElement(o,{...t,className:r()("fade",n,o.props.className,be[e],s[e])})})}));ye.displayName="Fade";const Ce=ye;var ke=n(7852);const we=m.forwardRef(((e,t)=>{let{className:n,bsPrefix:o,as:s="div",...i}=e;return o=(0,ke.oU)(o,"modal-body"),(0,H.jsx)(s,{ref:t,className:r()(n,o),...i})}));we.displayName="ModalBody";const Oe=we,Ne=m.createContext({onHide(){}}),Re=m.forwardRef(((e,t)=>{let{bsPrefix:n,className:o,contentClassName:s,centered:i,size:a,fullscreen:l,children:c,scrollable:u,...d}=e;n=(0,ke.oU)(n,"modal");const f=`${n}-dialog`,p="string"===typeof l?`${n}-fullscreen-${l}`:`${n}-fullscreen`;return(0,H.jsx)("div",{...d,ref:t,className:r()(f,o,a&&`${n}-${a}`,i&&`${f}-centered`,u&&`${f}-scrollable`,l&&p),children:(0,H.jsx)("div",{className:r()(`${n}-content`,s),children:c})})}));Re.displayName="ModalDialog";const Te=Re,Se=m.forwardRef(((e,t)=>{let{className:n,bsPrefix:o,as:s="div",...i}=e;return o=(0,ke.oU)(o,"modal-footer"),(0,H.jsx)(s,{ref:t,className:r()(n,o),...i})}));Se.displayName="ModalFooter";const je=Se;var Le=n(5173),De=n.n(Le);const Pe={"aria-label":De().string,onClick:De().func,variant:De().oneOf(["white"])},Me=m.forwardRef(((e,t)=>{let{className:n,variant:o,"aria-label":s="Close",...i}=e;return(0,H.jsx)("button",{ref:t,type:"button",className:r()("btn-close",o&&`btn-close-${o}`,n),"aria-label":s,...i})}));Me.displayName="CloseButton",Me.propTypes=Pe;const Fe=Me,Be=m.forwardRef(((e,t)=>{let{closeLabel:n="Close",closeVariant:o,closeButton:r=!1,onHide:s,children:i,...a}=e;const l=(0,m.useContext)(Ne),c=E((()=>{null==l||l.onHide(),null==s||s()}));return(0,H.jsxs)("div",{ref:t,...a,children:[i,r&&(0,H.jsx)(Fe,{"aria-label":n,variant:o,onClick:c})]})})),_e=m.forwardRef(((e,t)=>{let{bsPrefix:n,className:o,closeLabel:s="Close",closeButton:i=!1,...a}=e;return n=(0,ke.oU)(n,"modal-header"),(0,H.jsx)(Be,{ref:t,...a,className:r()(o,n),closeLabel:s,closeButton:i})}));_e.displayName="ModalHeader";const Ae=_e,We=($e="h4",m.forwardRef(((e,t)=>(0,H.jsx)("div",{...e,ref:t,className:r()(e.className,$e)}))));var $e;const Ie=m.forwardRef(((e,t)=>{let{className:n,bsPrefix:o,as:s=We,...i}=e;return o=(0,ke.oU)(o,"modal-title"),(0,H.jsx)(s,{ref:t,className:r()(n,o),...i})}));Ie.displayName="ModalTitle";const He=Ie;function Ue(e){return(0,H.jsx)(Ce,{...e,timeout:null})}function Ve(e){return(0,H.jsx)(Ce,{...e,timeout:null})}const ze=m.forwardRef(((e,t)=>{let{bsPrefix:n,className:o,style:i,dialogClassName:a,contentClassName:l,children:f,dialogAs:h=Te,"data-bs-theme":x,"aria-labelledby":b,"aria-describedby":y,"aria-label":C,show:k=!1,animation:w=!0,backdrop:O=!0,keyboard:N=!0,onEscapeKeyDown:R,onShow:S,onHide:j,container:L,autoFocus:D=!0,enforceFocus:P=!0,restoreFocus:M=!0,restoreFocusOptions:F,onEntered:B,onExit:_,onExiting:A,onEnter:W,onEntering:$,onExited:I,backdropClassName:U,manager:V,...z}=e;const[K,X]=(0,m.useState)({}),[Y,q]=(0,m.useState)(!1),G=(0,m.useRef)(!1),J=(0,m.useRef)(!1),Q=(0,m.useRef)(null),[ee,te]=(0,m.useState)(null),ne=g(t,te),oe=E(j),ie=(0,ke.Wz)();n=(0,ke.oU)(n,"modal");const ae=(0,m.useMemo)((()=>({onHide:oe})),[oe]);function le(){return V||function(e){return se||(se=new re(e)),se}({isRTL:ie})}function ce(e){if(!s)return;const t=le().getScrollbarWidth()>0,n=e.scrollHeight>u(e).documentElement.clientHeight;X({paddingRight:t&&!n?p():void 0,paddingLeft:!t&&n?p():void 0})}const ue=E((()=>{ee&&ce(ee.dialog)}));v((()=>{d(window,"resize",ue),null==Q.current||Q.current()}));const de=()=>{G.current=!0},fe=e=>{G.current&&ee&&e.target===ee.dialog&&(J.current=!0),G.current=!1},pe=()=>{q(!0),Q.current=T(ee.dialog,(()=>{q(!1)}))},me=e=>{"static"!==O?J.current||e.target!==e.currentTarget?J.current=!1:null==j||j():(e=>{e.target===e.currentTarget&&pe()})(e)},he=(0,m.useCallback)((e=>(0,H.jsx)("div",{...e,className:r()(`${n}-backdrop`,U,!w&&"show")})),[w,U,n]),Ee={...i,...K};Ee.display="block";return(0,H.jsx)(Ne.Provider,{value:ae,children:(0,H.jsx)(Z,{show:k,ref:ne,backdrop:O,container:L,keyboard:!0,autoFocus:D,enforceFocus:P,restoreFocus:M,restoreFocusOptions:F,onEscapeKeyDown:e=>{N?null==R||R(e):(e.preventDefault(),"static"===O&&pe())},onShow:S,onHide:j,onEnter:(e,t)=>{e&&ce(e),null==W||W(e,t)},onEntering:(e,t)=>{null==$||$(e,t),c(window,"resize",ue)},onEntered:B,onExit:e=>{null==Q.current||Q.current(),null==_||_(e)},onExiting:A,onExited:e=>{e&&(e.style.display=""),null==I||I(e),d(window,"resize",ue)},manager:le(),transition:w?Ue:void 0,backdropTransition:w?Ve:void 0,renderBackdrop:he,renderDialog:e=>(0,H.jsx)("div",{role:"dialog",...e,style:Ee,className:r()(o,n,Y&&`${n}-static`,!w&&"show"),onClick:O?me:void 0,onMouseUp:fe,"data-bs-theme":x,"aria-label":C,"aria-labelledby":b,"aria-describedby":y,children:(0,H.jsx)(h,{...z,onMouseDown:de,className:a,contentClassName:l,children:f})})})})}));ze.displayName="Modal";const Ke=Object.assign(ze,{Body:Oe,Header:Ae,Title:He,Footer:je,Dialog:Te,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150})},7852:(e,t,n)=>{"use strict";n.d(t,{Jm:()=>d,Wz:()=>f,gy:()=>u,oU:()=>c});var o=n(5043);n(579);const r=["xxl","xl","lg","md","sm","xs"],s="xs",i=o.createContext({prefixes:{},breakpoints:r,minBreakpoint:s}),{Consumer:a,Provider:l}=i;function c(e,t){const{prefixes:n}=(0,o.useContext)(i);return e||n[t]||t}function u(){const{breakpoints:e}=(0,o.useContext)(i);return e}function d(){const{minBreakpoint:e}=(0,o.useContext)(i);return e}function f(){const{dir:e}=(0,o.useContext)(i);return"rtl"===e}}}]);
//# sourceMappingURL=142.6845253c.chunk.js.map