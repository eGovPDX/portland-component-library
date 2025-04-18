import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./index-CgfFrydU.js";import{P as a}from"./index-Bumu4uq3.js";import{F as D}from"./index.es-DfeDeqgr.js";import{k as V}from"./index-Tp8Q1HZG.js";import"./_commonjsHelpers-CqkleIqs.js";const c=({variant:s="default",buttonText:l="Search",className:j,id:i,name:_="search",placeholder:q,onSubmit:m,...C})=>{const F=["usa-search",s==="big"?"usa-search--big":s==="small"?"usa-search--small":"",j].filter(Boolean).join(" "),B=u=>{u.preventDefault(),m&&m(u)};return e.jsx("section",{"aria-label":`${s} search component`,children:e.jsxs("form",{className:F,role:"search",onSubmit:B,children:[e.jsx("label",{className:"usa-sr-only",htmlFor:i,children:l}),e.jsx("input",{className:"usa-input",id:i,type:"search",name:_,placeholder:q,...C}),e.jsx("button",{className:"usa-button",type:"submit",children:s==="small"?e.jsx(D,{icon:V,className:"usa-search__submit-icon","aria-hidden":"true"}):e.jsx("span",{className:"usa-search__submit-text",children:l})})]})})};c.propTypes={variant:a.oneOf(["default","big","small"]),buttonText:a.string,className:a.string,id:a.string.isRequired,name:a.string,placeholder:a.string,onSubmit:a.func};c.__docgenInfo={description:"",methods:[],displayName:"Search",props:{variant:{defaultValue:{value:"'default'",computed:!1},description:"The variant of the search component",type:{name:"enum",value:[{value:"'default'",computed:!1},{value:"'big'",computed:!1},{value:"'small'",computed:!1}]},required:!1},buttonText:{defaultValue:{value:"'Search'",computed:!1},description:"The text to display on the search button",type:{name:"string"},required:!1},name:{defaultValue:{value:"'search'",computed:!1},description:"The name of the search input",type:{name:"string"},required:!1},className:{description:"Additional className to be applied to the search component",type:{name:"string"},required:!1},id:{description:"The id of the search input",type:{name:"string"},required:!0},placeholder:{description:"The placeholder text for the search input",type:{name:"string"},required:!1},onSubmit:{description:"Function to call when the form is submitted",type:{name:"func"},required:!1}}};const k={title:"Components/Search",component:c,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","big","small"]},buttonText:{control:"text"},onSubmit:{action:"submitted"}}},r={args:{id:"search-default",placeholder:"Search"}},t={args:{id:"search-big",variant:"big",placeholder:"Search"}},o={args:{id:"search-small",variant:"small",placeholder:"Search"}},n={args:{id:"search-custom",buttonText:"Find",placeholder:"Search"}};var d,p,h;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    id: 'search-default',
    placeholder: 'Search'
  }
}`,...(h=(p=r.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var f,g,b;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    id: 'search-big',
    variant: 'big',
    placeholder: 'Search'
  }
}`,...(b=(g=t.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var S,x,y;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    id: 'search-small',
    variant: 'small',
    placeholder: 'Search'
  }
}`,...(y=(x=o.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var v,N,T;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    id: 'search-custom',
    buttonText: 'Find',
    placeholder: 'Search'
  }
}`,...(T=(N=n.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};const $=["Default","Big","Small","WithCustomButtonText"];export{t as Big,r as Default,o as Small,n as WithCustomButtonText,$ as __namedExportsOrder,k as default};
