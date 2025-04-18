import{j as o}from"./jsx-runtime-D_zvdyIk.js";import"./index-CgfFrydU.js";import{B as z}from"./Breadcrumbs-BtCdAr96.js";import{F as W}from"./index.es-DfeDeqgr.js";import{f as y}from"./index-Tp8Q1HZG.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Bumu4uq3.js";const L={title:"Components/Breadcrumbs",component:z,parameters:{layout:"padded"}},n=B=>o.jsx("div",{style:{width:"100%",resize:"horizontal",overflow:"auto",minWidth:"200px",maxWidth:"100%",padding:"1rem"},children:o.jsx(z,{...B})}),r=n.bind({});r.args={items:[{text:"Home",href:"/"},{text:"Services",href:"/services"},{text:"Current Page"}]};const t=n.bind({});t.args={items:[{text:"Home",href:"/"},{text:"Services",href:"/services"},{text:"Government",href:"/services/government"},{text:"Local",href:"/services/government/local"},{text:"Portland",href:"/services/government/local/portland"},{text:"Current Page with a Very Long Title"}],truncateMiddle:!0};const e=n.bind({});e.args={items:[{text:"Home",href:"/"},{text:"City Services",href:"/services"},{text:"Transportation",href:"/services/transportation"},{text:"Public Transit",href:"/services/transportation/transit"},{text:"Bus Routes",href:"/services/transportation/transit/bus"},{text:"Route 20 - Burnside/Stark"}],truncateMiddle:!0};e.parameters={docs:{description:{story:`This example demonstrates the truncation behavior. Resize the container to see how the breadcrumbs adapt:
- On wider screens, all items are visible
- As the container narrows, middle items are replaced with an ellipsis
- On mobile screens (< 768px), items stack vertically with no truncation`}}};const s=n.bind({});s.args={items:[{text:"Home",href:"/"},{text:"Services",href:"/services"},{text:"Current Page"}],customSeparator:o.jsx(W,{icon:y,className:"pgov-breadcrumb__separator","aria-hidden":"true"})};const a=n.bind({});a.args={items:[{text:"Current Page"}]};var i,d,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`args => <div style={{
  width: '100%',
  resize: 'horizontal',
  overflow: 'auto',
  minWidth: '200px',
  maxWidth: '100%',
  padding: '1rem'
}}>
    <Breadcrumbs {...args} />
  </div>`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var c,p,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`args => <div style={{
  width: '100%',
  resize: 'horizontal',
  overflow: 'auto',
  minWidth: '200px',
  maxWidth: '100%',
  padding: '1rem'
}}>
    <Breadcrumbs {...args} />
  </div>`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var l,h,x;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`args => <div style={{
  width: '100%',
  resize: 'horizontal',
  overflow: 'auto',
  minWidth: '200px',
  maxWidth: '100%',
  padding: '1rem'
}}>
    <Breadcrumbs {...args} />
  </div>`,...(x=(h=e.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var g,v,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`args => <div style={{
  width: '100%',
  resize: 'horizontal',
  overflow: 'auto',
  minWidth: '200px',
  maxWidth: '100%',
  padding: '1rem'
}}>
    <Breadcrumbs {...args} />
  </div>`,...(f=(v=s.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var b,w,S;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`args => <div style={{
  width: '100%',
  resize: 'horizontal',
  overflow: 'auto',
  minWidth: '200px',
  maxWidth: '100%',
  padding: '1rem'
}}>
    <Breadcrumbs {...args} />
  </div>`,...(S=(w=a.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};const R=["Default","LongBreadcrumbs","TruncationDemo","CustomSeparator","SingleItem"];export{s as CustomSeparator,r as Default,t as LongBreadcrumbs,a as SingleItem,e as TruncationDemo,R as __namedExportsOrder,L as default};
