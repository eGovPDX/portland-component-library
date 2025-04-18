import{j as H}from"./jsx-runtime-D_zvdyIk.js";import"./index-CgfFrydU.js";import{H as T}from"./Header-xAOy-1hY.js";import{p as j}from"./PGOV-Logo-CN3CwT-q.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Bumu4uq3.js";import"./HeaderMenuGroup-CdINmRxe.js";import"./HeaderMenuItem-cORIOcpI.js";const G={title:"Components/Header",component:T,parameters:{layout:"fullscreen",docs:{description:{component:"Header component for Portland.gov based on USWDS Header. The header provides branding and identity for the site."}}},tags:["autodocs"]},x=[{label:"Advisory Groups",href:"/advisory-groups",description:"Groups, boards, and commissions."},{label:"Bureaus and Offices",href:"/bureaus-offices",description:"City departments."},{label:"Calendar of Events",href:"/events",description:"Events, public meetings, and hearings."},{label:"Charter, Code, Policies",href:"/charter-code-policies",description:"Official City documents."},{label:"City Council",href:"/council",description:"Districts, officials, meetings, and news."},{label:"Construction Projects",href:"/construction",description:"Building, transportation, maintenance, and sewer projects."},{label:"Find a Park",href:"/parks/search",description:"Parks, facilities, and reservations."},{label:"Neighborhoods",href:"/neighborhoods",description:"Neighborhood directory."},{label:"News",href:"/news",description:"Articles, blogs, press releases, public notices, and newsletters."},{label:"Projects",href:"/projects",description:"Planning, outreach and education, strategic, and technology projects."},{label:"Services and Resources",href:"/services",description:"Service and resource directory."},{label:"Jobs with the City",href:"https://www.governmentjobs.com/careers/portlandor",description:"Opportunities posted to governmentjobs.com"}],e={parameters:{viewport:{defaultViewport:"fullscreen"}},args:{title:"Portland.gov",logoUrl:j,logoAlt:"Portland.gov Logo",navItems:x,mainHeading:"General Information"}},n={parameters:{viewport:{defaultViewport:"fullscreen"}},args:{...e.args,tagline:"The Official Website of the City of Portland"}},o={args:{...e.args},parameters:{viewport:{defaultViewport:"mobile1"}}},t={render:i=>(setTimeout(()=>{const r=document.querySelector(".usa-menu-btn");r&&r.click()},100),H.jsx(T,{...i})),args:{...e.args},parameters:{viewport:{defaultViewport:"mobile1"}}},a={args:{...e.args,menuText:"Menú",openMenuAriaLabel:"Abrir menú",closeMenuAriaLabel:"Cerrar menú",mainHeading:"Información General"}},s={args:{...e.args,navItems:x.map((i,r)=>({...i,current:r===2}))}};var c,l,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'fullscreen'
    }
  },
  args: {
    title: 'Portland.gov',
    logoUrl: pgovLogo,
    logoAlt: 'Portland.gov Logo',
    navItems: defaultNavItems,
    mainHeading: 'General Information'
  }
}`,...(p=(l=e.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var d,u,m;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'fullscreen'
    }
  },
  args: {
    ...Default.args,
    tagline: 'The Official Website of the City of Portland'
  }
}`,...(m=(u=n.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var g,f,h;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...(h=(f=o.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var b,v,w;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => {
    // This is a workaround to show the mobile menu open in Storybook
    // In a real app, this would be controlled by user interaction
    setTimeout(() => {
      const menuButton = document.querySelector('.usa-menu-btn');
      if (menuButton) {
        menuButton.click();
      }
    }, 100);
    return <Header {...args} />;
  },
  args: {
    ...Default.args
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...(w=(v=t.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var y,C,S;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    menuText: 'Menú',
    openMenuAriaLabel: 'Abrir menú',
    closeMenuAriaLabel: 'Cerrar menú',
    mainHeading: 'Información General'
  }
}`,...(S=(C=a.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var P,M,I;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    navItems: defaultNavItems.map((item, index) => ({
      ...item,
      current: index === 2 // Set the third item as current
    }))
  }
}`,...(I=(M=s.parameters)==null?void 0:M.docs)==null?void 0:I.source}}};const N=["Default","WithTagline","Mobile","MobileWithOpenMenu","SpanishMenuText","WithCurrentPage"];export{e as Default,o as Mobile,t as MobileWithOpenMenu,a as SpanishMenuText,s as WithCurrentPage,n as WithTagline,N as __namedExportsOrder,G as default};
