import{j as C}from"./jsx-runtime-D_zvdyIk.js";import"./index-CgfFrydU.js";import{P as t}from"./index-Bumu4uq3.js";import"./_commonjsHelpers-CqkleIqs.js";const r=({variant:g="default",children:f,className:h,...T})=>{const v=["usa-tag",g==="big"?"usa-tag--big":"",h].filter(Boolean).join(" ");return C.jsx("span",{className:v,...T,children:f})};r.propTypes={children:t.node.isRequired,variant:t.oneOf(["default","big"]),className:t.string};r.__docgenInfo={description:"",methods:[],displayName:"Tag",props:{variant:{defaultValue:{value:"'default'",computed:!1},description:"The variant of the tag",type:{name:"enum",value:[{value:"'default'",computed:!1},{value:"'big'",computed:!1}]},required:!1},children:{description:"The content of the tag",type:{name:"node"},required:!0},className:{description:"Additional className to be applied to the tag",type:{name:"string"},required:!1}}};const _={title:"Components/Tag",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","big"]}}},a={args:{children:"Example Default Tag"}},e={args:{variant:"big",children:"Example Big Tag"}},s={args:{children:"Custom Tag",className:"custom-class"}};var o,n,i;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: 'Example Default Tag'
  }
}`,...(i=(n=a.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var c,l,m;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: 'big',
    children: 'Example Big Tag'
  }
}`,...(m=(l=e.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var p,d,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'Custom Tag',
    className: 'custom-class'
  }
}`,...(u=(d=s.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const j=["Default","Big","WithCustomClass"];export{e as Big,a as Default,s as WithCustomClass,j as __namedExportsOrder,_ as default};
