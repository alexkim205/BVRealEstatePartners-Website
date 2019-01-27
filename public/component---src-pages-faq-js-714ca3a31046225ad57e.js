(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{139:function(e,t,a){"use strict";a.r(t),a.d(t,"faqQuery",function(){return w});a(210);var n=a(7),i=a.n(n),r=a(51),o=a.n(r),l=a(0),d=a.n(l),p=(a(148),a(149)),s=a(165),c=a(171),u=(a(172),a(173),a(177),a(174),a(175),a(176),a(163)),m=a(158),h=a(225),f=a(226),g=a(228),A=a(227),x=[{q:"What would disqualify a property from your program?",a:"Two primary items: location and deferred maintenance. We pride ourselves on providing quality housing in specific, centrally-located geographic areas."},{q:"How do I know I get paid on time each month?",a:"We maintain a reserve fund of 3 months rent for every property to make certain you are secure. Note that as of this writing, we have never had to tap into the reserve fund."},{q:"What happens if an occupant damages my property",a:"GoHomeAway is 100% responsible for repairing any occupant-caused damage, coordinating all repairs and maintenance, paying utilities AND rent even if the property is unoccupied."},{q:"What happens if GoHomeAway breaches any terms of the agreement?",a:"If we default on any terms of our agreement, you have the right to end the agreement and take over as landlord."},{q:"What happens if I breach any terms of the agreement?",a:"If you default on any terms of our agreement, we have the right to end the agreement and let you take over as landlord. Failing to promptly address an issue at the property that negatively impacts the guest’s quality of life (heating, A/C, plumbing) would be considered a default on the terms of our agreement. Also, failing to disclose a problem with the property, like a pest control issue beforehand would be considered a default as well."},{q:"How are repair and maintenance handled?",a:"If the cost of the repair is less than the monthly rent GoHomeAway pays you, GoHomeAway will pay for it upfront and deduct it from the next month’s rent. If the cost of the repair is above the monthly rent GoHomeAway pays you, you are responsible for paying for the repair upfront. All invoices are submitted to you and GoHomeAway does not charge any premiums over and above the actual costs incurred.\n\nWe require that all repairs be handled by a highly trained professional to ensure that they are completed to the highest level of workmanship possible. If there are any repairs that you’d like to make, please do so BEFORE you sign an agreement with GoHomeAway."},{q:"Do I still get to take the depreciation tax deduction on the property?",a:"Absolutely! You are still the owner. No depreciation, voting rights or equitable interest are being transferred. This is just a long term guaranteed lease with the right to sublet, nothing more, nothing less."},{q:"How do I get started?",a:"Here is the order of events:\nComplete the property qualification form on our home page\nIf your property qualifies, we will schedule an appointment to meet at the property\nTour property and discuss the terms of the lease agreement\nWe sign the lease and Occupied furnishes the property\nYou sit back, relax and collect your check!"}],y=function(e){function t(t){var a;return(a=e.call(this,t)||this).toggle=a.toggle.bind(o()(o()(a))),a.state={collapse:0},a}i()(t,e);var a=t.prototype;return a.toggle=function(e){var t=e.target.dataset.event;this.setState({collapse:this.state.collapse===Number(t)?0:Number(t)})},a.render=function(){var e=this,t=this.props.data.kitchen,a=this.state.collapse;return d.a.createElement(l.Fragment,null,d.a.createElement(s.a,null,d.a.createElement(u.a,{title:"Listings"}),d.a.createElement(p.b,null,d.a.createElement("h1",null,"Frequently Asked Questions")),d.a.createElement(m.a,null),d.a.createElement(c.a,{fluidImage:t.childImageSharp.fluid}),d.a.createElement(m.b,null),x.map(function(t,n){return d.a.createElement(h.a,{style:{marginBottom:"1rem"},key:n},d.a.createElement(f.a,{onClick:e.toggle,"data-event":n},t.q),d.a.createElement(g.a,{isOpen:a===n},d.a.createElement(A.a,null,t.a)))})))},t}(l.Component);t.default=y;var w="2137688451"},147:function(e,t,a){"use strict";t.a={theme:{main:"#6BB7B9",secondary:"#FFF6E6",lightaccent:"#9CD6D2",accent:"#6BB7B9",darkaccent:"#007D8C"},font:{dark:"#484848",light:"#767676"},border:{dark:"#484848",light:"#767676",lighter:"rgba(0,0,0,0.2)"}}},148:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return u}),a.d(t,"StaticQuery",function(){return m});var n=a(0),i=a.n(n),r=a(4),o=a.n(r),l=a(146),d=a.n(l);a.d(t,"Link",function(){return d.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var p=a(150),s=a.n(p);a.d(t,"PageRenderer",function(){return s.a});var c=a(32);a.d(t,"parsePath",function(){return c.a});var u=i.a.createContext({}),m=function(e){return i.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},149:function(e,t,a){"use strict";a.d(t,"b",function(){return l}),a.d(t,"a",function(){return p});var n=a(0),i=a.n(n),r=a(145),o=(a(147),r.a.div.withConfig({displayName:"section__StyledSection",componentId:"sc-18ueukn-0"})(["margin:32px 0 0 0;border-radius:3px;overflow:hidden;"," @media (max-width:768px){margin-left:12px;margin-right:12px;}"],function(e){var t=e.color;return"#fff"!==t&&"\n    background-color: rgba(0,0,0,0.08);\n    // border-bottom: 2px solid "+t+";\n    // border-left: 2px solid "+t+";\n    // border-right: 2px solid "+t+";\n  "})),l=function(e){var t=e.children,a=e.color||"#fff";return i.a.createElement(o,{color:a},t)},d=r.a.div.withConfig({displayName:"section__StyledFullSection",componentId:"sc-18ueukn-1"})(["margin:32px -24px 0 -24px;padding:0 24px;border-radius:3px;overflow:hidden;"," @media (max-width:768px){margin-left:-12px;margin-right:-12px;}@media (min-width:1540px){margin-left:0px;margin-right:0px;}"],function(e){var t=e.color;return"#fff"!==t&&"\n    // background-color: rgba(0,0,0,0.08);\n    background-color: "+t+";\n    // color: white !important;\n    h2{color: white !important;}\n    span{color: white !important;}\n    p{color: white !important;}\n    *{color: white !important;}\n    // border-bottom: 2px solid "+t+";\n    // border-left: 2px solid "+t+";\n    // border-right: 2px solid "+t+";\n  "}),p=function(e){var t=e.children,a=e.color||"#fff";return i.a.createElement(d,{color:a},t)}},150:function(e,t,a){var n;e.exports=(n=a(160))&&n.default||n},158:function(e,t,a){"use strict";a.d(t,"b",function(){return i}),a.d(t,"a",function(){return r});a(0);var n=a(145),i=n.a.div.withConfig({displayName:"spaced-hr__SpacedHr",componentId:"sc-18jk6jo-0"})(["margin:1.5em 0;"]),r=n.a.div.withConfig({displayName:"spaced-hr__HalfSpacedHr",componentId:"sc-18jk6jo-1"})(["margin:1em 0;"])},159:function(e){e.exports={data:{site:{siteMetadata:{title:"Trustbnb",officialTitle:"Trustbnb, Co."}}}}},160:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),i=a.n(n),r=a(4),o=a.n(r),l=a(52),d=a(2),p=function(e){var t=e.location,a=d.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};p.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=p},161:function(e){e.exports={data:{logo:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAARABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQDAgX/xAAWAQEBAQAAAAAAAAAAAAAAAAABAgP/2gAMAwEAAhADEAAAAfbk51LsZmJ6QZwa/wD/xAAcEAEAAgIDAQAAAAAAAAAAAAACAAMBBBASIzL/2gAIAQEAAQUCseKxrvPC977jAux14/kT/8QAGREAAgMBAAAAAAAAAAAAAAAAAAECETEh/9oACAEDAQE/AYU+MaoWj0//xAAVEQEBAAAAAAAAAAAAAAAAAAABIP/aAAgBAgEBPwFj/8QAHhAAAQQBBQAAAAAAAAAAAAAAAAECEBFxEiExQUL/2gAIAQEABj8CVylP73jT4ZyWhY7MLk//xAAeEAACAQMFAAAAAAAAAAAAAAAAATEQIWFBgZGhwf/aAAgBAQABPyHTI7M8tUtczJjU1P6LXyppNiAf/9oADAMBAAIAAwAAABAX2IH/xAAYEQEBAQEBAAAAAAAAAAAAAAABADERQf/aAAgBAwEBPxAo+ki42Vtf/8QAGBEBAQEBAQAAAAAAAAAAAAAAAQARMSH/2gAIAQIBAT8Q0ekOzyOX/8QAIRABAAAGAQUBAAAAAAAAAAAAAQARITFBUaEQYXGRsfD/2gAIAQEAAT8QsLGhtghIM10dqzOlGVebjX+7xQKmETAt7t5CBXIWg05iyPnfRHKR/9k=",aspectRatio:1.198019801980198,src:"/static/0dca9b7c64ea7e106afe343a663a3abf/a3fb7/logo-strip.jpg",srcSet:"/static/0dca9b7c64ea7e106afe343a663a3abf/cf328/logo-strip.jpg 125w,\n/static/0dca9b7c64ea7e106afe343a663a3abf/a3fb7/logo-strip.jpg 242w",sizes:"(max-width: 242px) 100vw, 242px"}}}}}},162:function(e,t,a){},163:function(e,t,a){"use strict";var n=a(164),i=a(0),r=a.n(i),o=a(4),l=a.n(o),d=a(170),p=a.n(d),s=a(148);function c(e){var t=e.description,a=e.lang,i=e.meta,o=e.keywords,l=e.title;return r.a.createElement(s.StaticQuery,{query:u,render:function(e){var n=t||e.site.siteMetadata.description;return r.a.createElement(p.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:l},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(i)})},data:n})}c.defaultProps={lang:"en",meta:[],keywords:[]},c.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=c;var u="1025518380"},164:function(e){e.exports={data:{site:{siteMetadata:{title:"Trustbnb",description:"A website to showcase BV Real Estate Partners",author:"Alex Kim <agk2144@columbia.edu>"}}}}},165:function(e,t,a){"use strict";var n=a(159),i=a(0),r=a.n(i),o=a(145),l=a(4),d=a.n(l),p=a(148),s=a(7),c=a.n(s),u=a(51),m=a.n(u),h=a(161),f=a(156),g=a.n(f),A=a(151),x=a(157),y=a(147),w=a(224),b=o.a.div.withConfig({displayName:"header__StyledNavbar",componentId:"zi46uq-0"})(["margin:0px auto;width:100%;padding:12px 24px 12px 24px;position:fixed;display:flex;top:0;background-color:white;align-items:center;z-index:2;a{color:"," !important;}.navbar-brand{font-size:18px !important;font-weight:700;}.navbar-toggler{border-color:white !important;path{fill:",";}}@media (max-width:885px){.navbar-collapse{display:none;}}"],y.a.font.dark,y.a.font.dark),v=Object(o.a)(w.a).withConfig({displayName:"header__StyledNavBarBrand",componentId:"zi46uq-1"})(["width:29px;margin-right:9px !important;overflow:hidden;"]),E=o.a.div.withConfig({displayName:"header__FlexGrow",componentId:"zi46uq-2"})(["flex:1;"]),I=o.a.div.withConfig({displayName:"header__NavItem",componentId:"zi46uq-3"})(["margin:auto 10px;a{color:"," !important;font-size:14px !important;font-weight:500;}@media (max-width:885px){display:none;}"],y.a.font.dark),k=o.a.div.withConfig({displayName:"header__Dropdown",componentId:"zi46uq-4"})(["display:none;position:absolute;top:66px;left:0;width:100%;background-color:",";padding:10px 20px 15px 20px;z-index:2;@media (max-width:885px){display:",";flex-direction:column;}"],y.a.theme.secondary,function(e){return e.isOpen?"flex":"none"}),j=o.a.div.withConfig({displayName:"header__DDNavItem",componentId:"zi46uq-5"})(["margin:25px 20px 15px 20px;"]),C=o.a.div.withConfig({displayName:"header__StyledNavbarToggler",componentId:"zi46uq-6"})(["display:none;margin:0 30px;height:42px;@media (max-width:885px){display:flex !important;align-items:center;}"]),B=o.a.div.withConfig({displayName:"header__StyledNav",componentId:"zi46uq-7"})(["display:flex;"]),N=o.a.div.withConfig({displayName:"header__ActionButton",componentId:"zi46uq-8"})(["background-color:",";border-radius:3px;transition:all 0.2s;padding:8px 15px;margin:0 5px;border-radius:3px;display:flex;align-items:center;a{color:white !important;font-size:14px !important;font-weight:500;transition:color 0.2s;&:hover{text-decoration:none;}}&:hover{box-shadow:0 3px 10px rgba(0,0,0,0.1);}@media (max-width:885px){display:visible;}@media (max-width:630px){display:none;}"],y.a.theme.main),q=(Object(o.a)(N).withConfig({displayName:"header__ActionButtonOutline",componentId:"zi46uq-9"})(["border:2px solid ",";background-color:white;a{color:"," !important;transition:color 0.2s;}"],y.a.theme.accent,y.a.font.dark),function(e){function t(t){var a;return(a=e.call(this,t)||this).toggle=a.toggle.bind(m()(m()(a))),a.state={isOpen:!1},a}c()(t,e);var a=t.prototype;return a.toggle=function(){this.setState({isOpen:!this.state.isOpen})},a.render=function(){var e=this,t=this.props.siteTitle;return console.log(this.state.isOpen),r.a.createElement(p.StaticQuery,{query:"3547022730",render:function(a){return console.log(a),r.a.createElement(i.Fragment,null,r.a.createElement(b,{color:"#fff",light:!0,expand:"md"},r.a.createElement(v,null,r.a.createElement(g.a,{fluid:a.logo.childImageSharp.fluid})),r.a.createElement(w.a,null,t),r.a.createElement(E,null),r.a.createElement(C,{onClick:e.toggle},r.a.createElement(A.a,{icon:x.a})),r.a.createElement(k,{isOpen:e.state.isOpen},r.a.createElement(j,null,r.a.createElement(p.Link,{to:"/"},"Home")),r.a.createElement(j,null,r.a.createElement(p.Link,{to:"/listings/"},"Our Listings")),r.a.createElement(j,null,r.a.createElement(p.Link,{to:"/faq/"},"FAQ")),r.a.createElement(j,null,r.a.createElement(p.Link,{to:"/contact/"},"Work With Us"))),r.a.createElement(B,{navbar:!0},r.a.createElement(I,null,r.a.createElement(p.Link,{to:"/listings/"},"Our Listings")),r.a.createElement(I,null,r.a.createElement(p.Link,{to:"/faq"},"FAQ")),r.a.createElement(N,null,r.a.createElement(p.Link,{to:"/contact"},"Work With Us")))))},data:h})},t}(i.Component));q.propTypes={siteTitle:d.a.string},q.defaultProps={siteTitle:""};var _=q,Q=o.a.div.withConfig({displayName:"footer__StyledFooter",componentId:"sc-1o5r1n6-0"})(["margin:180px auto 50px auto;padding:55px 24px !important;border-top:1px solid ",";max-width:1540px;"],y.a.border.light),T=function(e){var t=e.company;return r.a.createElement(Q,null,"© ",t)};T.propTypes={company:d.a.string.isRequired};var S=T,R=(a(162),a(169),o.a.div.withConfig({displayName:"layout__Body",componentId:"sc-13x6kjw-0"})(["padding:0 24px;max-width:1540px;margin:auto;margin-top:100px;display:flex;flex-direction:column;@media (max-width:767px){padding:0 12px;}"])),z=function(e){var t=e.children;return r.a.createElement(p.StaticQuery,{query:"3926456875",render:function(e){var a=e.site;return r.a.createElement(i.Fragment,null,r.a.createElement(_,{siteTitle:a.siteMetadata.title}),r.a.createElement(R,null,t),r.a.createElement(S,{company:a.siteMetadata.officialTitle}))},data:n})};z.propTypes={children:d.a.node.isRequired};t.a=z},171:function(e,t,a){"use strict";var n=a(7),i=a.n(n),r=a(0),o=a.n(r),l=a(156),d=a.n(l),p=a(145),s=a(4),c=a.n(s),u=a(149),m=Object(p.a)(d.a).withConfig({displayName:"full-width-section__StyledImg",componentId:"u85y5u-0"})(["overflow:hidden;border-radius:3px;position:absolute;top:0;left:0;width:100%;z-index:-1;height:350px;& > img{object-fit:cover !important;object-position:0% 0% !important;font-family:'object-fit: cover !important; object-position: 0% 0% !important;'}"]),h=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props.fluidImage;return o.a.createElement(u.b,null,o.a.createElement(m,{fluid:e}))},t}(r.Component);h.propTypes={fluidImage:c.a.object.isRequired,overlayText:c.a.string},h.defaultProps={overlayText:""},t.a=h},172:function(e,t,a){"use strict";var n=a(7),i=a.n(n),r=a(0),o=a.n(r),l=a(145),d=a(4),p=a.n(d),s=a(149),c=a(158),u=a(147),m=l.a.div.withConfig({displayName:"text-section__TextWrapper",componentId:"n8eq90-0"})(["padding:0 24px 22px 24px;p{color:",";}"],u.a.font.dark),h=l.a.div.withConfig({displayName:"text-section__Head",componentId:"n8eq90-1"})(["padding:24px 24px 0px 24px;h2{margin:0;color:",";}",""],function(e){return e.color},function(e){return"#fff"!==e.color&&"\n    * {color: #fff}\n  "}),f=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props,t=e.header,a=e.children,n=e.color;return o.a.createElement(s.a,{color:n},o.a.createElement(h,{color:n},o.a.createElement("h2",null,t)),o.a.createElement(m,null,o.a.createElement(c.a,null),a))},t}(r.Component);f.propTypes={header:p.a.string.isRequired,color:p.a.string},f.defaultProps={header:"",color:"#fff"},t.a=f},173:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(145).a.div.withConfig({displayName:"grid__StyledGrid",componentId:"sc-11sm5l4-0"})(["margin:18px 0;border-radius:3px;overflow:hidden;z-index:-1;display:flex;justify-content:space-around;flex-wrap:wrap;@media (max-width:768px){margin-left:12px;margin-right:12px;margin-top:12px;flex-wrap:wrap;}"]);t.a=function(e){var t=e.children.length;return i.a.createElement(r,{numChild:t},e.children)}},174:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(145).a.div.withConfig({displayName:"circle-grid__StyledGrid",componentId:"sc-1aq3fik-0"})(["margin:18px 0;border-radius:3px;overflow:hidden;z-index:-1;display:flex;justify-content:space-around;flex-wrap:wrap;@media (max-width:768px){margin-left:12px;margin-right:12px;margin-top:12px;flex-wrap:wrap;}"]);t.a=function(e){var t=e.children.length;return i.a.createElement(r,{numChild:t},e.children)}},175:function(e,t,a){"use strict";var n=a(7),i=a.n(n),r=a(0),o=a.n(r),l=a(145),d=a(4),p=a.n(d),s=(a(149),a(147),l.a.div.withConfig({displayName:"circle-grid-section__GridItem",componentId:"cpmk9-0"})(["text-align:center;padding:10px 0px;margin:18px auto;text-align:center;.grid-title{font-weight:700;}p{font-size:15px;text-align:center;margin:0 10px;}width:19.5%;@media (max-width:768px){width:32.5%;}@media (max-width:545px){width:49.5%;}"])),c=l.a.div.withConfig({displayName:"circle-grid-section__Body",componentId:"cpmk9-1"})(["margin:12px auto;max-width:230px;"]),u=l.a.div.withConfig({displayName:"circle-grid-section__StyledIcon",componentId:"cpmk9-2"})(["border-radius:100%;background-color:white;width:90px;height:90px;display:flex;justify-content:center;margin:0 auto;align-items:center;path{fill:",";}"],function(e){return e.color}),m=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props,t=e.icon,a=e.underTitle,n=e.underText,i=e.color;return o.a.createElement(s,null,o.a.createElement(u,{color:i},t),o.a.createElement(c,null,o.a.createElement("span",{className:"grid-title"},a),o.a.createElement("p",null,n)))},t}(r.Component);m.propTypes={icon:p.a.node.isRequired,underTitle:p.a.string,underText:p.a.string,color:p.a.string},m.defaultProps={underTitle:"",underText:"",color:"#fff"},t.a=m},176:function(e,t,a){"use strict";a(0);var n=a(145);a(151),a(157),a(147),n.a.ul.withConfig({displayName:"list__StyledUList",componentId:"fptqn2-0"})(["margin-bottom:0;margin-left:-14px;list-style-type:none;li{font-size:16px;line-height:2em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}svg{margin-right:1em;path{fill:#3fc380;}}"])},177:function(e,t,a){"use strict";a(178);var n=a(7),i=a.n(n),r=a(0),o=a.n(r),l=(a(148),a(156)),d=a.n(l),p=a(145),s=a(4),c=a.n(s),u=a(151),m=a(157),h=(a(149),a(147)),f=p.a.div.withConfig({displayName:"listings-grid-section__GridItem",componentId:"gxe26b-0"})(["text-align:center;margin-bottom:18px;.grid-title{display:flex;align-items:center;justify-content:center;svg.fa-medal{path{fill:","}}svg.fa-star{path{fill:","}}span{font-size:13px;}}p{font-size:15px;text-align:justify;margin:10px;}width:32.5%;@media (max-width:768px){width:49%;}@media (max-width:545px){width:100%;}"],h.a.theme.main,h.a.theme.accent),g=p.a.div.withConfig({displayName:"listings-grid-section__Body",componentId:"gxe26b-1"})(["margin:12px 0;"]),A=Object(p.a)(d.a).withConfig({displayName:"listings-grid-section__StyledImg",componentId:"gxe26b-2"})(["overflow:hidden;border-radius:3px;position:absolute;top:0;left:0;width:100%;z-index:-1;height:350px;& > img{object-fit:cover !important;object-position:0% 0% !important;font-family:'object-fit: cover !important; object-position: 0% 0% !important;'}"]),x=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props,t=e.fluidImage,a=e.superhost,n=e.rating,i=e.underText;return o.a.createElement(f,null,o.a.createElement(A,{fluid:t}),o.a.createElement(g,null,o.a.createElement("div",{className:"grid-title"},a&&o.a.createElement(r.Fragment,null,o.a.createElement(u.a,{icon:m.e,size:"2x"}),"  ",o.a.createElement("span",null,"Superhost"),"  ",n&&Array(n).fill().map(function(e,t){return o.a.createElement(u.a,{key:t,icon:m.k})}))),o.a.createElement("p",null,i)))},t}(r.Component);x.propTypes={fluidImage:c.a.object.isRequired,superhost:c.a.bool.isRequired,rating:c.a.number.isRequired,underText:c.a.string},x.defaultProps={superhost:!0,rating:5,underText:""},t.a=x}}]);
//# sourceMappingURL=component---src-pages-faq-js-714ca3a31046225ad57e.js.map