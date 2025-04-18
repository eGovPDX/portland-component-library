import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./index-CgfFrydU.js";import{P as e}from"./index-Bumu4uq3.js";import{B as I}from"./Banner-BjPPk_0o.js";import{H as L}from"./Header-xAOy-1hY.js";import{S as F}from"./SkipNav-BwRbFrx1.js";import{F as q}from"./Footer-Bop7f-Kr.js";import{B as D}from"./Breadcrumbs-BtCdAr96.js";import{p as P}from"./PGOV-Logo-CN3CwT-q.js";import"./_commonjsHelpers-CqkleIqs.js";import"./HeaderMenuGroup-CdINmRxe.js";import"./HeaderMenuItem-cORIOcpI.js";import"./index.es-DfeDeqgr.js";import"./index-Tp8Q1HZG.js";const s=({bannerProps:y,headerProps:k,skipNavProps:x,footerProps:B,breadcrumbsProps:S,children:N,includeBanner:j=!0,includeSkipNav:T=!0,includeFooter:C=!0,includeBreadcrumbs:w=!0,className:A=""})=>r.jsxs("div",{className:`pgov-page-template ${A}`,children:[T&&r.jsx(F,{...x}),j&&r.jsx(I,{...y}),r.jsx(L,{...k}),r.jsxs("main",{id:"main-content",className:"pgov-page-template-main",tabIndex:"-1",role:"main","aria-label":"Main content",children:[w&&r.jsx(D,{...S}),N]}),C&&r.jsx(q,{...B})]});s.propTypes={bannerProps:e.object,headerProps:e.object.isRequired,skipNavProps:e.object,footerProps:e.object,breadcrumbsProps:e.object,children:e.node,includeBanner:e.bool,includeSkipNav:e.bool,includeFooter:e.bool,includeBreadcrumbs:e.bool,className:e.string};s.defaultProps={bannerProps:{},skipNavProps:{},breadcrumbsProps:{},children:null,includeBanner:!0,includeSkipNav:!0,includeFooter:!0,includeBreadcrumbs:!0,className:""};s.__docgenInfo={description:"Page template component that combines Banner, Header, and Footer",methods:[],displayName:"PageTemplate",props:{includeBanner:{defaultValue:{value:"true",computed:!1},description:"Whether to include the Banner component",type:{name:"bool"},required:!1},includeSkipNav:{defaultValue:{value:"true",computed:!1},description:"Whether to include the SkipNav component",type:{name:"bool"},required:!1},includeFooter:{defaultValue:{value:"true",computed:!1},description:"Whether to include the Footer component",type:{name:"bool"},required:!1},includeBreadcrumbs:{defaultValue:{value:"true",computed:!1},description:"Whether to include the Breadcrumbs component",type:{name:"bool"},required:!1},className:{defaultValue:{value:"''",computed:!1},description:"Additional CSS class name",type:{name:"string"},required:!1},bannerProps:{defaultValue:{value:"{}",computed:!1},description:"Props for the Banner component",type:{name:"object"},required:!1},skipNavProps:{defaultValue:{value:"{}",computed:!1},description:"Props for the SkipNav component",type:{name:"object"},required:!1},breadcrumbsProps:{defaultValue:{value:"{}",computed:!1},description:"Props for the Breadcrumbs component",type:{name:"object"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"Content to be rendered in the main section",type:{name:"node"},required:!1},headerProps:{description:"Props for the Header component",type:{name:"object"},required:!0},footerProps:{description:"Props for the Footer component",type:{name:"object"},required:!1}}};const Z={title:"Templates/PageTemplate",component:s,parameters:{layout:"fullscreen"}},V=[{label:"Advisory Groups",href:"/advisory-groups",description:"Groups, boards, and commissions."},{label:"Bureaus and Offices",href:"/bureaus-offices",description:"City departments."},{label:"Calendar of Events",href:"/events",description:"Events, public meetings, and hearings."},{label:"Charter, Code, Policies",href:"/charter-code-policies",description:"Official City documents."},{label:"City Council",href:"/council",description:"Districts, officials, meetings, and news."},{label:"Construction Projects",href:"/construction",description:"Building, transportation, maintenance, and sewer projects."},{label:"Find a Park",href:"/parks/search",description:"Parks, facilities, and reservations."},{label:"Neighborhoods",href:"/neighborhoods",description:"Neighborhood directory."},{label:"News",href:"/news",description:"Articles, blogs, press releases, public notices, and newsletters."},{label:"Projects",href:"/projects",description:"Planning, outreach and education, strategic, and technology projects."},{label:"Services and Resources",href:"/services",description:"Service and resource directory."},{label:"Jobs with the City",href:"https://www.governmentjobs.com/careers/portlandor",description:"Opportunities posted to governmentjobs.com"}],W=[{text:"Home",href:"/"},{text:"Services",href:"/services"},{text:"Government",href:"/government"},{text:"Local",href:"/government/local"},{text:"Current Page"}],M={feedbackUrl:"/contact",accessibilityText:"The City of Portland ensures meaningful access to City programs, services, and activities to comply with Civil Rights Title VI and ADA Title II laws and reasonably provides: translation, interpretation, modifications, accommodations, alternative formats, auxiliary aids and services.",serviceRequestText:"Request these services",onlineServiceUrl:"/contact",phoneNumber:"503-823-4000",relayServiceText:"Relay Service",relayServiceNumber:"711",translationText:"Traducción e Interpretación | Biên Dịch và Thông Dịch | 口笔译服务 | Устный и письменный перевод | Turjumaad iyo Fasiraad | Письмовий і усний переклад | Traducere și interpretariat | Chiaku me Awewen Kapas | अनुवादन तथा व्याख्या",generalInfoLinks:[{label:"311@portlandoregon.gov",href:"mailto:311@portlandoregon.gov"},{label:"311 information an customer service",href:"/customer-service"},{label:"503-823-4000",href:"tel:5038234000"},{label:"711 Oregon Relay Service",href:"tel:711"}],termsLinks:[{label:"ADA accommodation",href:"/ada-accommodation"},{label:"Captioning and transcription",href:"/captioning"},{label:"Privacy Policy",href:"/privacy"}],portlandGovLinks:[{label:"About this website",href:"/about"},{label:"Employee portal",href:"/employees"},{label:"Editor log in",href:"/login"}],socialMediaLinks:[{label:"Bluesky",href:"https://bsky.app"},{label:"Facebook",href:"https://facebook.com/CityofPortland"},{label:"Instagram",href:"https://instagram.com/portlandoregon"},{label:"X (Twitter)",href:"https://twitter.com/portlandgov"}],cityName:"City of Portland",cityLogoUrl:P,cityLogoAlt:"Portland.gov Logo",copyrightText:"© 2024 City of Portland",exploreServicesText:"Explore City Services",exploreServicesUrl:"/services"},o={parameters:{viewport:{defaultViewport:"fullscreen"}},args:{bannerProps:{domain:"An official website of the City of Portland"},headerProps:{title:"Portland.gov",logoUrl:P,logoAlt:"Portland.gov Logo",navItems:V,mainHeading:"General Information",menuText:"Menu",openMenuAriaLabel:"Open menu",closeMenuAriaLabel:"Close menu"},skipNavProps:{skipToId:"main-content",label:"Skip to main content"},breadcrumbsProps:{items:W,truncateMiddle:!0},footerProps:M,includeBanner:!0,includeSkipNav:!0,includeFooter:!0,includeBreadcrumbs:!0,children:r.jsxs("div",{style:{padding:"2rem"},children:[r.jsx("h1",{children:"Welcome to Portland.gov"}),r.jsx("p",{children:"This is an example of content within the page template."})]})}},t={...o,args:{...o.args,includeBanner:!1}},a={...o,args:{...o.args,includeSkipNav:!1}},n={...o,args:{...o.args,includeBreadcrumbs:!1}};var i,l,c;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'fullscreen'
    }
  },
  args: {
    bannerProps: {
      domain: 'An official website of the City of Portland'
    },
    headerProps: {
      title: 'Portland.gov',
      logoUrl: pgovLogo,
      logoAlt: 'Portland.gov Logo',
      navItems: defaultNavItems,
      mainHeading: 'General Information',
      menuText: 'Menu',
      openMenuAriaLabel: 'Open menu',
      closeMenuAriaLabel: 'Close menu'
    },
    skipNavProps: {
      skipToId: 'main-content',
      label: 'Skip to main content'
    },
    breadcrumbsProps: {
      items: defaultBreadcrumbItems,
      truncateMiddle: true
    },
    footerProps: defaultFooterProps,
    includeBanner: true,
    includeSkipNav: true,
    includeFooter: true,
    includeBreadcrumbs: true,
    children: <div style={{
      padding: '2rem'
    }}>
        <h1>Welcome to Portland.gov</h1>
        <p>This is an example of content within the page template.</p>
      </div>
  }
}`,...(c=(l=o.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,p,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    includeBanner: false
  }
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,f,h;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    includeSkipNav: false
  }
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var b,g,v;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    includeBreadcrumbs: false
  }
}`,...(v=(g=n.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const ee=["Default","WithoutBanner","WithoutSkipNav","WithoutBreadcrumbs"];export{o as Default,t as WithoutBanner,n as WithoutBreadcrumbs,a as WithoutSkipNav,ee as __namedExportsOrder,Z as default};
