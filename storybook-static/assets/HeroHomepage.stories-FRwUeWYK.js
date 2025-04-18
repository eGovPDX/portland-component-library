import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./index-CgfFrydU.js";import{P as r}from"./index-Bumu4uq3.js";import{B as q}from"./Button-oDfZ7WaN.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index.es-DfeDeqgr.js";const i=({title:y,subtitle:l,searchComponent:C,links:p=[],className:b,...v})=>{const t="pgov-hero-homepage",P=[t,b].filter(Boolean).join(" ");return e.jsxs("div",{className:P,...v,children:[e.jsx("div",{className:`${t}__title-container`,children:e.jsx("h1",{className:`${t}__title`,children:y})}),e.jsx("div",{className:`${t}__search-container`,children:C}),l&&e.jsx("div",{className:`${t}__subtitle-container`,children:e.jsx("h2",{className:`${t}__subtitle`,children:l})}),p.length>0&&e.jsx("div",{className:`${t}__links-container`,children:p.map((n,S)=>e.jsx("a",{href:n.href,className:`${t}__link`,...n.props,children:n.text},S))})]})};i.propTypes={title:r.string.isRequired,subtitle:r.string,searchComponent:r.node.isRequired,links:r.arrayOf(r.shape({text:r.string.isRequired,href:r.string.isRequired,props:r.object})),className:r.string};i.__docgenInfo={description:"",methods:[],displayName:"HeroHomepage",props:{links:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{text:{name:"string",required:!0},href:{name:"string",required:!0},props:{name:"object",required:!1}}}},required:!1},title:{description:"",type:{name:"string"},required:!0},subtitle:{description:"",type:{name:"string"},required:!1},searchComponent:{description:"",type:{name:"node"},required:!0},className:{description:"",type:{name:"string"},required:!1}}};const L={title:"Components/HeroHomepage",component:i,parameters:{layout:"fullscreen"}},_=[{text:"City of Portland transition",href:"#"},{text:"Charter, code, policies",href:"#"},{text:"Employee portal",href:"#"},{text:"Jobs",href:"#"},{text:"Sewer and water bill",href:"#"},{text:"Business tax",href:"#"},{text:"Council agenda",href:"#"},{text:"Find a park",href:"#"},{text:"Recreation class or activity",href:"#"}],c=()=>e.jsxs(e.Fragment,{children:[e.jsx("input",{type:"text",placeholder:"Search",style:{flex:1,height:"48px",padding:"0 16px",border:"1px solid var(--pgov-color-neutral-lighter)",borderRadius:"4px 0 0 4px",fontSize:"var(--pgov-font-size-sm)"}}),e.jsx(q,{style:{height:"48px",borderRadius:"0 4px 4px 0"},variant:"primary",children:"Search"})]}),s={args:{title:"Welcome to Portland, Oregon",subtitle:"Popular searches",searchComponent:e.jsx(c,{}),links:_}},o={args:{title:"Welcome to Portland, Oregon",searchComponent:e.jsx(c,{}),links:_}},a={args:{title:"Welcome to Portland, Oregon",subtitle:"Popular searches",searchComponent:e.jsx(c,{}),links:[]}};var m,d,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    title: 'Welcome to Portland, Oregon',
    subtitle: 'Popular searches',
    searchComponent: <MockSearchComponent />,
    links: mockLinks
  }
}`,...(u=(d=s.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var h,g,x;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    title: 'Welcome to Portland, Oregon',
    searchComponent: <MockSearchComponent />,
    links: mockLinks
  }
}`,...(x=(g=o.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var f,k,j;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    title: 'Welcome to Portland, Oregon',
    subtitle: 'Popular searches',
    searchComponent: <MockSearchComponent />,
    links: []
  }
}`,...(j=(k=a.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};const B=["Default","WithoutSubtitle","WithoutLinks"];export{s as Default,a as WithoutLinks,o as WithoutSubtitle,B as __namedExportsOrder,L as default};
