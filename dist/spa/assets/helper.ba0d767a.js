import{c as l,b as i}from"./dom.54c08c2d.js";import{d,e as r,c as u,h as f,f as m,j as v,g,z as y,_ as q,s as w,E as C,Q as $,r as k,o as Q,m as _,w as x}from"./index.084cebfa.js";var z=l({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:n}){const{proxy:{$q:a}}=g(),t=d(m,r);if(t===r)return console.error("QPage needs to be a deep child of QLayout"),r;if(d(v,r)===r)return console.error("QPage needs to be child of QPageContainer"),r;const o=u(()=>{const s=(t.header.space===!0?t.header.size:0)+(t.footer.space===!0?t.footer.size:0);if(typeof e.styleFn=="function"){const h=t.isContainer.value===!0?t.containerHeight.value:a.screen.height;return e.styleFn(s,h)}return{minHeight:t.isContainer.value===!0?t.containerHeight.value-s+"px":a.screen.height===0?s!==0?`calc(100vh - ${s}px)`:"100vh":a.screen.height-s+"px"}}),p=u(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>f("main",{class:p.value,style:o.value},i(n.default))}});const b=y({name:"NoteContainer"}),S={class:"q-mr-auto q-ml-auto",style:{"max-width":"700px"}};function B(e,n,a,t,c,o){return w(),C("div",S,[$(e.$slots,"default")])}var D=q(b,[["render",B]]);const N={dark:{type:Boolean,default:null}};function P(e,n){return u(()=>e.dark===null?n.dark.isActive:e.dark)}var H=l({name:"QCard",props:{...N,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:n}){const{proxy:{$q:a}}=g(),t=P(e,a),c=u(()=>"q-card"+(t.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>f(e.tag,{class:c.value},i(n.default))}});const F=(e,n)=>{const a=k(n),t=()=>{const o=window.localStorage.getItem(e);o!=null&&(a.value=JSON.parse(o))};return t(),Q(()=>{window.addEventListener("storage",t)}),_(()=>{window.removeEventListener("storage",t)}),x([a],()=>{window.localStorage.setItem(e,JSON.stringify(a.value))},{deep:!0}),a},I=()=>F("note",[]);export{D as N,H as Q,z as a,N as b,P as c,I as u};
