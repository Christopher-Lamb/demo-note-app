(this["webpackJsonpdemo-note-app"]=this["webpackJsonpdemo-note-app"]||[]).push([[0],[,,,,function(e,t,n){e.exports={container:"NoteText_container__2fAPC",editingTextarea:"NoteText_editingTextarea__q_HhU",editingHeading:"NoteText_editingHeading__3TXNZ",btnContainer:"NoteText_btnContainer__2WEjJ",btn:"NoteText_btn__UhAqr",gradient:"NoteText_gradient__3mhvD",del:"NoteText_del__Qq9Tn",save:"NoteText_save__3I7jA",close:"NoteText_close__28CNR",pTagContainer:"NoteText_pTagContainer__1870p",pTag:"NoteText_pTag__1caG2",headingTag:"NoteText_headingTag__QTncV",hidden:"NoteText_hidden__151ib"}},,,function(e,t,n){e.exports={storageBox:"BoxItem_storageBox__2nDMK",storageBoxOpen:"BoxItem_storageBoxOpen__itgPJ",contentContainer:"BoxItem_contentContainer__kWkfB",title:"BoxItem_title__niZVl",titleHover:"BoxItem_titleHover__v7HxM",closeBoxBtn:"BoxItem_closeBoxBtn__3BuK9"}},function(e,t,n){e.exports={container:"ContentSelector_container__3mTmJ",btnContainer:"ContentSelector_btnContainer__2ui2G",btn:"ContentSelector_btn__2ahxr",btnActive:"ContentSelector_btnActive__2viqs"}},,function(e,t,n){e.exports={container:"ThreeDotsMenu_container__VjbDk",dots:"ThreeDotsMenu_dots__E8gLW",dot1:"ThreeDotsMenu_dot1__2VYl5",dot2:"ThreeDotsMenu_dot2__3iCcM",dot3:"ThreeDotsMenu_dot3__25qQs"}},,,,function(e,t,n){e.exports={screen:"NewBoxPopUp_screen__68joZ",container:"NewBoxPopUp_container__3hB5T",popupExit:"NewBoxPopUp_popupExit__34HEn",createBtn:"NewBoxPopUp_createBtn__1lpMA"}},function(e,t,n){e.exports={container:"addText_container__3jLZ7",btn:"addText_btn__1t9By",text:"addText_text__2wJm5",heading:"addText_heading__LvQdu"}},function(e,t,n){e.exports={box:"AddBox_box__2DH3j",plus:"AddBox_plus__sxaRU",verticalLine:"AddBox_verticalLine__3R5ff",horizontalLine:"AddBox_horizontalLine__BfDjc"}},,,function(e){e.exports=JSON.parse('[{"boxId":100,"title":"Demo Note","notes":[{"noteId":1,"type":"heading","text":"Welcome to the demmo Note"},{"noteId":10,"type":"heading","text":"These Items are Headers"},{"noteId":2,"type":"text","text":"Items like these are text items. They allow a user to input their information directly into the page."},{"noteId":4,"type":"heading","text":"Adding Headers and Text"},{"noteId":5,"type":"text","text":"Adding headers and text can be done at the bottom of the screen. By selecting header or text you will be able to input and save a new text which as of right now will be stored in your local storage."},{"noteId":6,"type":"heading","text":"Editing an Item"},{"noteId":7,"type":"text","text":"Every time your mouse passes over an item rendered in the box your current item will be highlighted. When clicked the use will be given the opportunity to edit their item. If text is changed and they try to close the editor without saving they will be issued a warning to continue. Common practice will be to save before exiting in order to avoid accidentally not saving information that you have input. The title can be edited but not deleted."},{"noteId":8,"type":"heading","text":"Future Features"},{"noteId":9,"type":"text","text":"1. Numbered/bulleted lists should be added"},{"noteId":11,"type":"text","text":"2. More reliable way of saving user information\\nRight now all information is stored in the browser and can be easily/mistakenly deleted"},{"noteId":12,"type":"text","text":"3. Customizable fonts colors and backgrounds"},{"noteId":13,"type":"text","text":"4. A way to export Notes created into pdfs so that they can be easily transfered to word documents or google docs type apps"},{"noteId":14,"type":"text","text":"5. More stops to prevent accidental deletion of information"}]}]')},function(e,t,n){e.exports={container:"WelcomeHeader_container__23eFS",gradient:"WelcomeHeader_gradient__3mqsG",text:"WelcomeHeader_text__3sfyN"}},function(e,t,n){e.exports={container:"DeleteBoxPopUp_container__-_YwP",item:"DeleteBoxPopUp_item__1Qc74"}},,,,,function(e,t,n){e.exports={container:"StorageBoxesContainer_container__3VILU",btn:"StorageBoxesContainer_btn__2qPAj"}},function(e,t,n){e.exports={btn:"RenderDemo_btn__2NMZ3"}},,,,,,,,function(e,t,n){},,,function(e,t,n){e.exports={title:"BoxTitle_title__XS79f"}},,,,,,,,,function(e,t,n){"use strict";n.r(t);var o=n(1),a=n.n(o),c=n(24),r=n.n(c),i=(n(35),n(30)),s=n(3),l=n(20),d=n.n(l),u=n(0);function x(){return Object(u.jsx)("div",{className:d.a.container,children:Object(u.jsx)("h1",{className:d.a.text,children:"Jot Freely"})})}var b=n(2),j=n(25),f=n(14),p=n.n(f);function _(e){var t=e.length;if(0===t)return 0;e.sort((function(e,t){return e-t}));try{for(var n=0;n<t;n++){var o=e[n]+1;if(1===e[0])return 0;if(o!==e[n+1])return o}}catch(a){}}var h=n(19),O=function(){return JSON.parse(localStorage.getItem("StorageBoxes"))},m=function(e){localStorage.setItem("StorageBoxes",JSON.stringify(e))},v={initDemo:function(){m(h)},getAllStorage:function(){return JSON.parse(localStorage.getItem("StorageBoxes"))},removeAllStorage:function(){localStorage.removeItem("StorageBoxes")},addBox:function(e){var t=O();if(null===t){m([{boxId:0,title:e,notes:[]}])}else{var n={boxId:_(O().map((function(e){return e.boxId}))),title:e,notes:[]};t.push(n),m(t)}},delBox:function(e){var t=O().filter((function(t){return t.boxId===e?void 0:t}));return m(t),t},updateBox:function(e){console.log()},addNote:function(e,t,n){var o=0,a=O().map((function(a){if(n===a.boxId){var c=a.notes.map((function(e){return e.noteId}));return o=_(c),a.notes.push({noteId:o,type:e,text:t}),a}return a}));return m(a),console.log(o),o},delNote:function(e,t){var n=JSON.parse(localStorage.getItem("StorageBoxes")).map((function(n){if(n.boxId===e){var o=n.notes.filter((function(e){return e.noteId===t?void 0:e}));n.notes=o}return n}));m(n)},updateNote:function(e,t,n,o){var a=O().map((function(a){if(e===a.boxId){if("title"===o)return a.title=n,a;var c=a.notes.map((function(e){return e.noteId===t?(e.text=n,e):e}));a.notes=c}return a}));m(a)}};function g(e){var t=e.onExitPopUp,n=e.onCreate,a=Object(o.useState)(""),c=Object(b.a)(a,2),r=c[0],i=c[1];return Object(u.jsx)("div",{className:p.a.screen,children:Object(u.jsxs)("div",{className:p.a.container,children:[Object(u.jsx)("button",{className:p.a.popupExit,onClick:t,children:"X"}),Object(u.jsx)("input",{onChange:function(e){!function(e){var t=e.target.value;i(t)}(e)},placeholder:"Title"}),Object(u.jsx)("button",{className:p.a.createBtn,onClick:function(){v.addBox(r),n()},children:Object(u.jsx)("p",{children:"Create New Box"})})]})})}var N=n(26),y=n.n(N),I=n(7),B=n.n(I),w=n(11),T=n(9),C=n.n(T),S=n(13),k=n(8),A=n.n(k),D=n(15),E=n.n(D);function M(e){e.id;var t=e.onSave,n=e.type,a=(e.closeBtn,Object(o.useRef)());Object(o.useEffect)((function(){switch(n){case"text":a.current.className=E.a.text;break;case"heading":a.current.className=E.a.heading}}),[]);return Object(u.jsxs)("div",{className:E.a.container,children:[Object(u.jsx)("div",{ref:a,contentEditable:!0,suppressContentEditableWarning:!0}),Object(u.jsx)("button",{onClick:function(){t({type:n,text:a.current.innerText}),console.log(a),a.current.textContent=""},className:E.a.btn,children:"Save"})]})}function R(e){var t=e.box,n=e.onSave,a=Object(o.useState)(!1),c=Object(b.a)(a,2),r=c[0],i=c[1],s=Object(o.useState)("text"),l=Object(b.a)(s,2),d=l[0],x=l[1],j=Object(o.useRef)(),f=Object(o.useRef)(),p=function(){var e=Object(S.a)(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f.current.className=A.a.btnActive,j.current.className=A.a.btn,x("text"),e.next=5,i(!1);case 5:return e.next=7,i(!0);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(S.a)(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j.current.className=A.a.btnActive,f.current.className=A.a.btn,x("heading"),e.next=5,i(!1);case 5:return e.next=7,i(!0);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:A.a.container,children:[Object(u.jsxs)("div",{className:A.a.btnContainer,children:[Object(u.jsx)("p",{ref:j,onMouseDown:_,className:A.a.btn,children:"Header"}),Object(u.jsx)("p",{ref:f,onMouseDown:p,className:A.a.btn,children:"Text"}),Object(u.jsx)("p",{onMouseDown:function(){f.current.className=A.a.btn,j.current.className=A.a.btn,i(!1)},className:A.a.btn,children:"Cancel"})]}),r&&Object(u.jsx)(M,{boxId:t,type:d,onSave:n})]})}var H=n(4),L=n.n(H),P=a.a.forwardRef((function(e,t){var n=e.text,a=e.type,c=e.onClose,r=e.onSave,i=e.onDel,s=Object(o.useState)(),l=Object(b.a)(s,2),d=l[0],x=l[1],j=Object(o.useState)(n),f=Object(b.a)(j,2),p=f[0],_=f[1],h=Object(o.useRef)();Object(o.useEffect)((function(){switch(a){case"text":h.current.className=L.a.editingTextarea;break;case"heading":case"title":h.current.className=L.a.editingHeading}m()}),[]);var O=function(e){var t=e.replaceAll("<div>","").replaceAll("</div>","").replaceAll("<p>","").replaceAll("</p>","\n").replaceAll("&nbsp;"," ").replaceAll("&amp;","&").replaceAll("&lt;","<").replaceAll("&gt;",">").replaceAll("<br>","\n").split(/(\n)/);return t.pop(),t.pop(),console.log(t),t.join("")},m=function(){var e=p.split("\n").map((function(e,t){return""===e?Object(u.jsx)("br",{},t):Object(u.jsx)("p",{children:e},t)}));x(Object(u.jsx)("div",{children:e}))};return Object(u.jsx)("div",{className:L.a.container,children:Object(u.jsxs)("div",{ref:t,children:[Object(u.jsx)("p",{children:"Editing"}),Object(u.jsx)("div",{ref:h,contentEditable:!0,suppressContentEditableWarning:!0,children:d}),Object(u.jsx)("br",{}),Object(u.jsxs)("div",{className:L.a.btnContainer,children:[Object(u.jsx)("button",{className:"".concat(L.a.btn," ").concat(L.a.close),onMouseDown:function(e){O(h.current.innerHTML)!==p?window.confirm("You didnt save would you still like to close?")&&c():c()},children:"Close Editor"}),Object(u.jsx)("button",{className:"".concat(L.a.btn," ").concat(L.a.save),onMouseDown:function(e){var t=O(h.current.innerHTML);_(t),r(t)},children:"Save"}),"title"!==a&&Object(u.jsx)("button",{onClick:function(){i()},className:"".concat(L.a.btn," ").concat(L.a.del),children:"Delete"})]})]})})})),F=a.a.forwardRef((function(e,t){var n=e.text;return Object(u.jsx)(u.Fragment,{children:function(){var e=n.split("\n").map((function(e,t){return""===e?Object(u.jsx)("br",{},t):Object(u.jsx)("p",{className:L.a.pTag,children:e},t)}));return Object(u.jsx)("div",{ref:t,className:L.a.pTagContainer,children:e})}()})})),J=a.a.forwardRef((function(e,t){var n=e.text;return Object(u.jsx)("h1",{ref:t,children:n})})),U=a.a.forwardRef((function(e,t){var n=e.text;return Object(u.jsx)("h2",{ref:t,children:n})}));function W(e){e.id;var t=e.note,n=e.onDel,a=e.updateTitle,c=Object(o.useState)(!1),r=Object(b.a)(c,2),i=r[0],s=r[1],l=Object(o.useState)(t.text),d=Object(b.a)(l,2),x=d[0],j=d[1],f=Object(o.useState)(),p=Object(b.a)(f,2),_=(p[0],p[1],Object(o.useState)(t.text)),h=Object(b.a)(_,2),O=(h[0],h[1],Object(o.useRef)()),m=(Object(o.useRef)(),Object(o.useRef)(),Object(o.useRef)());Object(o.useEffect)((function(){switch(t.type){case"text":O.current=L.a.editingTextarea;break;case"heading":case"title":O.current=L.a.editingHeading}y(),g()}),[]),Object(o.useEffect)((function(){}),[x]);var g=function(){switch(t.type){case"heading":return Object(u.jsx)(U,{ref:m,text:x});case"text":return Object(u.jsx)(F,{ref:m,text:x});case"title":return Object(u.jsx)(J,{ref:m,text:x})}},N=function(){var e=Object(S.a)(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s(!0),void 0!==m.current&&(m.current.className=L.a.hidden);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){};return Object(u.jsx)(u.Fragment,{children:i?Object(u.jsx)(P,{onDel:function(){n(t.noteId)},type:t.type,text:x,onClose:function(){s(!1)},onSave:function(e){var n;j(n=e),v.updateNote(t.boxId,t.noteId,n,t.type),"title"===t.type&&a(n)}}):Object(u.jsx)("div",{onClick:N,className:L.a.container,children:g()})})}var q=n(10),Q=n.n(q),V=n(21),Z=n.n(V);function z(e){var t=e.onClick;return Object(u.jsx)("div",{onClick:function(e){e.stopPropagation(),window.confirm("Are you sure you want to delete this Box?")&&t()},className:Z.a.container,children:Object(u.jsx)("p",{className:Z.a.item,children:"Delete Box"})})}function G(e){var t=e.onDel,n=Object(o.useState)(!1),a=Object(b.a)(n,2),c=a[0],r=a[1];return Object(u.jsxs)(u.Fragment,{children:[c&&Object(u.jsx)(z,{onClick:t}),Object(u.jsxs)("div",{onClick:function(e){e.stopPropagation(),r(!c)},className:Q.a.container,children:[Object(u.jsx)("div",{className:"".concat(Q.a.dot1," ").concat(Q.a.dots),children:"."}),Object(u.jsx)("div",{className:"".concat(Q.a.dot2," ").concat(Q.a.dots),children:"."}),Object(u.jsx)("div",{className:"".concat(Q.a.dot3," ").concat(Q.a.dots),children:"."})]})]})}n(38);var X=a.a.forwardRef((function(e,t){return Object(u.jsx)("p",{ref:t,className:e.className,children:e.children})}));function Y(e){var t=e.content,n=e.deleteBox,a=Object(o.useState)("".concat(B.a.storageBox)),c=Object(b.a)(a,2),r=c[0],i=c[1],s=Object(o.useState)(!1),l=Object(b.a)(s,2),d=l[0],x=l[1],j=Object(o.useState)(t),f=Object(b.a)(j,2),p=f[0],_=f[1],h=function(e){v.delNote(t.boxId,e);var n=p.notes.filter((function(t){return t.noteId===e?void 0:t}));_((function(e){return Object(w.a)(Object(w.a)({},e),{},{notes:n})}))},O=Object(o.useRef)();return Object(u.jsxs)("div",{onClick:function(){d||(i("".concat(B.a.storageBox," ").concat(B.a.storageBoxOpen)),x(!0))},onMouseEnter:function(){d||(O.current.classList="".concat(B.a.titleHover," ").concat(B.a.title))},onMouseLeave:function(){d||(O.current.classList="".concat(B.a.title))},className:r,children:[!d&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(G,{onDel:function(){n(p.boxId)}}),Object(u.jsx)(X,{ref:O,className:B.a.title,children:p.title})]}),d&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("button",{className:B.a.closeBoxBtn,onClick:function(){d&&(i("".concat(B.a.storageBox," ")),x(!1))},children:"Close"}),Object(u.jsx)(W,{contentType:"title",note:{type:"title",text:p.title,boxId:p.boxId,noteId:"title"},updateTitle:function(e){_((function(t){return Object(w.a)(Object(w.a)({},t),{},{title:e})}))}},"title"),Object(u.jsxs)("div",{className:B.a.contentContainer,children:[function(){var e=[];return p.notes&&(e=p.notes.map((function(e){return Object(u.jsx)(W,{note:{type:e.type,text:e.text,boxId:p.boxId,noteId:e.noteId},onDel:h},e.noteId)}))),e}(),d&&Object(u.jsx)(R,{box:p.boxId,onSave:function(e){var n=v.addNote(e.type,e.text,t.boxId);console.log(p);var o=p.notes;o.push({noteId:n,type:e.type,text:e.text}),_((function(e){return Object(w.a)(Object(w.a)({},e),{},{notes:o})}))}})]})]})]})}var K=n(16),$=n.n(K);function ee(e){var t=e.onClick;return Object(u.jsx)("div",{className:$.a.box,onClick:t,children:Object(u.jsxs)("div",{className:$.a.plus,children:[Object(u.jsx)("div",{className:$.a.verticalLine}),Object(u.jsx)("div",{className:$.a.horizontalLine})]})})}var te=n(27),ne=n.n(te);function oe(e){var t=e.onClick;return Object(u.jsx)("div",{onClick:t,className:ne.a.btn,children:"Render Demo"})}function ae(e){Object(j.a)(e);var t=Object(o.useState)([]),n=Object(b.a)(t,2),a=n[0],c=n[1],r=Object(o.useState)([]),i=Object(b.a)(r,2),s=i[0],l=i[1],d=Object(o.useState)(!1),x=Object(b.a)(d,2),f=x[0],p=x[1];Object(o.useRef)(!1);Object(o.useEffect)((function(){O()}),[]),Object(o.useEffect)((function(){_()}),[a]);var _=function(){var e=[];null!==a&&(e=a.map((function(e,t){return Object(u.jsx)(Y,{content:e,deleteBox:m},e.boxId)})));l(e)},h=function(){p(!1)},O=function(){var e=v.getAllStorage();c(e),_()},m=function(e){var t=v.delBox(e);c(t),_()};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(oe,{onClick:function(){window.confirm("This will delete all your notes and render the demo note. Are you sure you want to do this?")&&(v.initDemo(),O(),window.location.reload())}}),Object(u.jsxs)("div",{className:y.a.container,children:[Object(u.jsx)(ee,{onClick:function(){p(!0)}}),f&&Object(u.jsx)(g,{onExitPopUp:h,onCreate:function(){O(),h()}}),s]})]})}function ce(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(x,{}),Object(u.jsx)(ae,{})]})}var re=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(i.a,{children:Object(u.jsx)(s.c,{children:Object(u.jsx)(s.a,{component:ce})})})})};r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(re,{})}),document.getElementById("root"))}],[[47,1,2]]]);
//# sourceMappingURL=main.9fba231a.chunk.js.map