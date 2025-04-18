import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./index-CgfFrydU.js";import{P as s}from"./index-Bumu4uq3.js";import{F as z}from"./index.es-DfeDeqgr.js";import{e as g,g as G,h as H,i as J,j as K}from"./index-Tp8Q1HZG.js";import"./_commonjsHelpers-CqkleIqs.js";const d=({type:r="info",heading:p,children:P,slim:D=!1,noIcon:u=!1,className:R=""})=>{const B=["pgov-alert",`pgov-alert--${r}`,D&&"pgov-alert--slim",u&&"pgov-alert--no-icon",R].filter(Boolean).join(" "),$=()=>{switch(r){case"info":return g;case"warning":return K;case"success":return J;case"error":return H;case"emergency":return G;default:return g}};return e.jsx("div",{className:B,role:r==="error"||r==="emergency"?"alert":void 0,children:e.jsxs("div",{className:"pgov-alert__body",children:[!u&&e.jsx("div",{className:"pgov-alert__icon",children:e.jsx(z,{icon:$()})}),e.jsxs("div",{className:"pgov-alert__content",children:[p&&e.jsx("h4",{className:"pgov-alert__heading",children:p}),e.jsx("div",{className:"pgov-alert__text",children:P})]})]})})};d.propTypes={type:s.oneOf(["info","warning","success","error","emergency"]),heading:s.string,children:s.node.isRequired,slim:s.bool,noIcon:s.bool,className:s.string};d.defaultProps={type:"info",heading:void 0,slim:!1,noIcon:!1,className:""};d.__docgenInfo={description:`Alert component based on USWDS Alert
Used to keep users informed of important and sometimes time-sensitive changes`,methods:[],displayName:"Alert",props:{type:{defaultValue:{value:"'info'",computed:!1},description:"Type of alert to display",type:{name:"enum",value:[{value:"'info'",computed:!1},{value:"'warning'",computed:!1},{value:"'success'",computed:!1},{value:"'error'",computed:!1},{value:"'emergency'",computed:!1}]},required:!1},slim:{defaultValue:{value:"false",computed:!1},description:"Whether to display a slim version of the alert",type:{name:"bool"},required:!1},noIcon:{defaultValue:{value:"false",computed:!1},description:"Whether to display the alert without an icon",type:{name:"bool"},required:!1},className:{defaultValue:{value:"''",computed:!1},description:"Additional CSS class names",type:{name:"string"},required:!1},heading:{defaultValue:{value:"undefined",computed:!0},description:"Optional heading text for the alert",type:{name:"string"},required:!1},children:{description:"Content to display in the alert",type:{name:"node"},required:!0}}};const se={title:"Components/Alert",component:d,parameters:{docs:{description:{component:"Alert component based on USWDS Alert. Used to keep users informed of important and sometimes time-sensitive changes."}},options:{storySort:{order:["Emergency","Error","Info","NoIcon","Slim","Success","Warning","WithLink"]}}},tags:["autodocs"]},a={args:{type:"emergency",heading:"Emergency status",children:"This is an emergency alert message."}},n={args:{type:"error",heading:"Error status",children:"This is an error alert message."}},t={args:{type:"info",heading:"Informative status",children:"This is an informative alert message."}},o={args:{type:"info",noIcon:!0,children:"This is an alert without an icon."}},i={args:{type:"info",slim:!0,children:"This is a slim alert message."}},c={args:{type:"success",heading:"Success status",children:"This is a success alert message."}},l={args:{type:"warning",heading:"Warning status",children:"This is a warning alert message."}},m={args:{type:"info",heading:"Alert with Link",children:e.jsxs(e.Fragment,{children:["This is an alert with a"," ",e.jsx("a",{href:"#",className:"pgov-link",children:"link"}),"."]})}};var h,f,y;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    type: 'emergency',
    heading: 'Emergency status',
    children: 'This is an emergency alert message.'
  }
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var v,S,T;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    type: 'error',
    heading: 'Error status',
    children: 'This is an error alert message.'
  }
}`,...(T=(S=n.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var x,w,I;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    type: 'info',
    heading: 'Informative status',
    children: 'This is an informative alert message.'
  }
}`,...(I=(w=t.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var E,N,_;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    type: 'info',
    noIcon: true,
    children: 'This is an alert without an icon.'
  }
}`,...(_=(N=o.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var j,k,A;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    type: 'info',
    slim: true,
    children: 'This is a slim alert message.'
  }
}`,...(A=(k=i.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var W,C,b;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    type: 'success',
    heading: 'Success status',
    children: 'This is a success alert message.'
  }
}`,...(b=(C=c.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var q,L,V;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    type: 'warning',
    heading: 'Warning status',
    children: 'This is a warning alert message.'
  }
}`,...(V=(L=l.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var U,F,O;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    type: 'info',
    heading: 'Alert with Link',
    children: <>
        This is an alert with a{' '}
        <a href="#" className="pgov-link">
          link
        </a>
        .
      </>
  }
}`,...(O=(F=m.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};const re=["Emergency","Error","Info","NoIcon","Slim","Success","Warning","WithLink"];export{a as Emergency,n as Error,t as Info,o as NoIcon,i as Slim,c as Success,l as Warning,m as WithLink,re as __namedExportsOrder,se as default};
