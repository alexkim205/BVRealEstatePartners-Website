(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"faqQuery",function(){return v});n(207);var a=n(7),i=n.n(a),r=n(51),o=n.n(r),l=n(0),d=n.n(l),p=(n(147),n(148)),s=n(162),c=n(169),u=(n(170),n(171),n(177),n(172),n(173),n(174),n(160)),m=n(156),h=n(222),f=n(223),g=n(225),y=n(224),x=[{q:"What would disqualify a property from your program?",a:"Two primary items: location and deferred maintenance. We pride ourselves on providing quality housing in specific, centrally-located geographic areas."},{q:"How do I know I get paid on time each month?",a:"We maintain a reserve fund of 3 months rent for every property to make certain you are secure. Note that as of this writing, we have never had to tap into the reserve fund."},{q:"What happens if an occupant damages my property",a:"GoHomeAway is 100% responsible for repairing any occupant-caused damage, coordinating all repairs and maintenance, paying utilities AND rent even if the property is unoccupied."},{q:"What happens if GoHomeAway breaches any terms of the agreement?",a:"If we default on any terms of our agreement, you have the right to end the agreement and take over as landlord."},{q:"What happens if I breach any terms of the agreement?",a:"If you default on any terms of our agreement, we have the right to end the agreement and let you take over as landlord. Failing to promptly address an issue at the property that negatively impacts the guest’s quality of life (heating, A/C, plumbing) would be considered a default on the terms of our agreement. Also, failing to disclose a problem with the property, like a pest control issue beforehand would be considered a default as well."},{q:"How are repair and maintenance handled?",a:"If the cost of the repair is less than the monthly rent GoHomeAway pays you, GoHomeAway will pay for it upfront and deduct it from the next month’s rent. If the cost of the repair is above the monthly rent GoHomeAway pays you, you are responsible for paying for the repair upfront. All invoices are submitted to you and GoHomeAway does not charge any premiums over and above the actual costs incurred.\n\nWe require that all repairs be handled by a highly trained professional to ensure that they are completed to the highest level of workmanship possible. If there are any repairs that you’d like to make, please do so BEFORE you sign an agreement with GoHomeAway."},{q:"Do I still get to take the depreciation tax deduction on the property?",a:"Absolutely! You are still the owner. No depreciation, voting rights or equitable interest are being transferred. This is just a long term guaranteed lease with the right to sublet, nothing more, nothing less."},{q:"How do I get started?",a:"Here is the order of events:\nComplete the property qualification form on our home page\nIf your property qualifies, we will schedule an appointment to meet at the property\nTour property and discuss the terms of the lease agreement\nWe sign the lease and Occupied furnishes the property\nYou sit back, relax and collect your check!"}],w=function(e){function t(t){var n;return(n=e.call(this,t)||this).toggle=n.toggle.bind(o()(o()(n))),n.state={collapse:0},n}i()(t,e);var n=t.prototype;return n.toggle=function(e){var t=e.target.dataset.event;this.setState({collapse:this.state.collapse===Number(t)?0:Number(t)})},n.render=function(){var e=this,t=this.props.data.kitchen,n=this.state.collapse;return d.a.createElement(l.Fragment,null,d.a.createElement(s.a,null,d.a.createElement(u.a,{title:"Listings"}),d.a.createElement(p.b,null,d.a.createElement("h1",null,"Frequently Asked Questions")),d.a.createElement(m.a,null),d.a.createElement(c.a,{fluidImage:t.childImageSharp.fluid}),d.a.createElement(m.b,null),x.map(function(t,a){return d.a.createElement(h.a,{style:{marginBottom:"1rem"},key:a},d.a.createElement(f.a,{onClick:e.toggle,"data-event":a},t.q),d.a.createElement(g.a,{isOpen:n===a},d.a.createElement(y.a,null,t.a)))})))},t}(l.Component);t.default=w;var v="2137688451"},146:function(e,t,n){"use strict";t.a={theme:{main:"#F16664",secondary:"#FFF6E6",lightaccent:"#9CD6D2",accent:"#6BB7B9",darkaccent:"#007D8C",lightmain:"#F48583"},font:{dark:"#484848",light:"#767676"},border:{dark:"#484848",light:"#767676",lighter:"rgba(0,0,0,0.2)"}}},147:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return u}),n.d(t,"StaticQuery",function(){return m});var a=n(0),i=n.n(a),r=n(4),o=n.n(r),l=n(145),d=n.n(l);n.d(t,"Link",function(){return d.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var p=n(149),s=n.n(p);n.d(t,"PageRenderer",function(){return s.a});var c=n(32);n.d(t,"parsePath",function(){return c.a});var u=i.a.createContext({}),m=function(e){return i.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},148:function(e,t,n){"use strict";n.d(t,"b",function(){return l}),n.d(t,"a",function(){return p});var a=n(0),i=n.n(a),r=n(144),o=(n(146),r.a.div.withConfig({displayName:"section__StyledSection",componentId:"sc-18ueukn-0"})(["margin:32px 0 0 0;border-radius:3px;overflow:hidden;"," @media (max-width:768px){margin-left:12px;margin-right:12px;}"],function(e){var t=e.color;return"#fff"!==t&&"\n    background-color: rgba(0,0,0,0.08);\n    // border-bottom: 2px solid "+t+";\n    // border-left: 2px solid "+t+";\n    // border-right: 2px solid "+t+";\n  "})),l=function(e){var t=e.children,n=e.color||"#fff";return i.a.createElement(o,{color:n},t)},d=r.a.div.withConfig({displayName:"section__StyledFullSection",componentId:"sc-18ueukn-1"})(["margin:32px -24px 0 -24px;padding:0 24px;border-radius:3px;overflow:hidden;"," @media (max-width:768px){margin-left:-12px;margin-right:-12px;}@media (min-width:1540px){margin-left:0px;margin-right:0px;}"],function(e){var t=e.color;return"#fff"!==t&&"\n    // background-color: rgba(0,0,0,0.08);\n    background-color: "+t+";\n    // color: white !important;\n    h2{color: white !important;}\n    span{color: white !important;}\n    p{color: white !important;}\n    *{color: white !important;}\n    // border-bottom: 2px solid "+t+";\n    // border-left: 2px solid "+t+";\n    // border-right: 2px solid "+t+";\n  "}),p=function(e){var t=e.children,n=e.color||"#fff";return i.a.createElement(d,{color:n},t)}},149:function(e,t,n){var a;e.exports=(a=n(158))&&a.default||a},156:function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"a",function(){return r});n(0);var a=n(144),i=a.a.div.withConfig({displayName:"spaced-hr__SpacedHr",componentId:"sc-18jk6jo-0"})(["margin:1.5em 0;"]),r=a.a.div.withConfig({displayName:"spaced-hr__HalfSpacedHr",componentId:"sc-18jk6jo-1"})(["margin:1em 0;"])},157:function(e){e.exports={data:{site:{siteMetadata:{title:"Trustbnb",officialTitle:"Trustbnb, Co."}}}}},158:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),i=n.n(a),r=n(4),o=n.n(r),l=n(52),d=n(2),p=function(e){var t=e.location,n=d.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};p.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=p},159:function(e,t,n){},160:function(e,t,n){"use strict";var a=n(161),i=n(0),r=n.n(i),o=n(4),l=n.n(o),d=n(168),p=n.n(d),s=n(147);function c(e){var t=e.description,n=e.lang,i=e.meta,o=e.keywords,l=e.title;return r.a.createElement(s.StaticQuery,{query:u,render:function(e){var a=t||e.site.siteMetadata.description;return r.a.createElement(p.a,{htmlAttributes:{lang:n},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:l},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(i)})},data:a})}c.defaultProps={lang:"en",meta:[],keywords:[]},c.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=c;var u="1025518380"},161:function(e){e.exports={data:{site:{siteMetadata:{title:"Trustbnb",description:"A website to showcase BV Real Estate Partners",author:"Alex Kim <agk2144@columbia.edu>"}}}}},162:function(e,t,n){"use strict";var a=n(157),i=n(0),r=n.n(i),o=n(144),l=n(4),d=n.n(l),p=n(147),s=n(7),c=n.n(s),u=n(51),m=n.n(u),h=n(150),f=n(151),g=n(146),y=n(221),x=o.a.div.withConfig({displayName:"header__StyledNavbar",componentId:"zi46uq-0"})(["margin:0px auto;width:100%;padding:12px 24px 12px 24px;position:fixed;display:flex;top:0;background-color:white;align-items:center;z-index:2;a{color:"," !important;}.navbar-brand{font-size:18px !important;font-weight:700;}.navbar-toggler{border-color:white !important;path{fill:",";}}@media (max-width:885px){.navbar-collapse{display:none;}}"],g.a.font.dark,g.a.font.dark),w=o.a.div.withConfig({displayName:"header__FlexGrow",componentId:"zi46uq-1"})(["flex:1;"]),v=o.a.div.withConfig({displayName:"header__NavItem",componentId:"zi46uq-2"})(["margin:auto 10px;a{color:"," !important;font-size:14px !important;font-weight:500;}@media (max-width:885px){display:none;}"],g.a.font.dark),b=o.a.div.withConfig({displayName:"header__Dropdown",componentId:"zi46uq-3"})(["display:none;position:absolute;top:75px;left:0;width:100%;background-color:white;padding:0 20px 12px 20px;z-index:2;@media (max-width:885px){display:",";flex-direction:column;}"],function(e){return e.isOpen?"flex":"none"}),E=o.a.div.withConfig({displayName:"header__DDNavItem",componentId:"zi46uq-4"})(["margin:5px 30px;border-bottom:2px solid ",";"],g.a.border.lighter),k=o.a.div.withConfig({displayName:"header__StyledNavbarToggler",componentId:"zi46uq-5"})(["display:none;margin:0 30px;height:42px;@media (max-width:885px){display:flex !important;align-items:center;}"]),q=o.a.div.withConfig({displayName:"header__StyledNav",componentId:"zi46uq-6"})(["display:flex;"]),_=o.a.div.withConfig({displayName:"header__ActionButton",componentId:"zi46uq-7"})(["background-color:",";border-radius:3px;transition:all 0.2s;padding:8px 15px;margin:0 5px;border-radius:3px;display:flex;align-items:center;a{color:white !important;font-size:14px !important;font-weight:500;transition:color 0.2s;&:hover{text-decoration:none;}}&:hover{box-shadow:0 3px 10px rgba(0,0,0,0.1);}@media (max-width:885px){display:visible;}@media (max-width:630px){display:none;}"],g.a.theme.main),I=(Object(o.a)(_).withConfig({displayName:"header__ActionButtonOutline",componentId:"zi46uq-8"})(["border:2px solid ",";background-color:white;a{color:"," !important;transition:color 0.2s;}"],g.a.theme.accent,g.a.font.dark),function(e){function t(t){var n;return(n=e.call(this,t)||this).toggle=n.toggle.bind(m()(m()(n))),n.state={isOpen:!1},n}c()(t,e);var n=t.prototype;return n.toggle=function(){this.setState({isOpen:!this.state.isOpen})},n.render=function(){var e=this.props.siteTitle;return console.log(this.state.isOpen),r.a.createElement(i.Fragment,null,r.a.createElement(x,{color:"#fff",light:!0,expand:"md"},r.a.createElement(y.a,{href:"/"},e),r.a.createElement(w,null),r.a.createElement(k,{onClick:this.toggle},r.a.createElement(h.a,{icon:f.a})),r.a.createElement(b,{isOpen:this.state.isOpen},r.a.createElement(E,null,r.a.createElement(p.Link,{to:"/listings/"},"Our Listings")),r.a.createElement(E,null,r.a.createElement(p.Link,{to:"/faq/"},"FAQ")),r.a.createElement(E,null,r.a.createElement(p.Link,{to:"/contact/"},"Work With Us"))),r.a.createElement(q,{navbar:!0},r.a.createElement(v,null,r.a.createElement(p.Link,{to:"/listings/"},"Our Listings")),r.a.createElement(v,null,r.a.createElement(p.Link,{to:"/faq"},"FAQ")),r.a.createElement(_,null,r.a.createElement(p.Link,{to:"/contact"},"Work With Us")))))},t}(i.Component));I.propTypes={siteTitle:d.a.string},I.defaultProps={siteTitle:""};var C=I,N=o.a.div.withConfig({displayName:"footer__StyledFooter",componentId:"sc-1o5r1n6-0"})(["margin:180px auto 50px auto;padding:55px 24px !important;border-top:1px solid ",";max-width:1540px;"],g.a.border.light),T=function(e){var t=e.company;return r.a.createElement(N,null,"© ",t)};T.propTypes={company:d.a.string.isRequired};var j=T,S=(n(159),n(167),o.a.div.withConfig({displayName:"layout__Body",componentId:"sc-13x6kjw-0"})(["padding:0 24px;max-width:1540px;margin:auto;margin-top:100px;display:flex;flex-direction:column;@media (max-width:767px){padding:0 12px;}"])),z=function(e){var t=e.children;return r.a.createElement(p.StaticQuery,{query:"3926456875",render:function(e){var n=e.site;return r.a.createElement(i.Fragment,null,r.a.createElement(C,{siteTitle:n.siteMetadata.title}),r.a.createElement(S,null,t),r.a.createElement(j,{company:n.siteMetadata.officialTitle}))},data:a})};z.propTypes={children:d.a.node.isRequired};t.a=z},169:function(e,t,n){"use strict";var a=n(7),i=n.n(a),r=n(0),o=n.n(r),l=n(165),d=n.n(l),p=n(144),s=n(4),c=n.n(s),u=n(148),m=Object(p.a)(d.a).withConfig({displayName:"full-width-section__StyledImg",componentId:"u85y5u-0"})(["overflow:hidden;border-radius:3px;position:absolute;top:0;left:0;width:100%;z-index:-1;height:350px;& > img{object-fit:cover !important;object-position:0% 0% !important;font-family:'object-fit: cover !important; object-position: 0% 0% !important;'}"]),h=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props.fluidImage;return o.a.createElement(u.b,null,o.a.createElement(m,{fluid:e}))},t}(r.Component);h.propTypes={fluidImage:c.a.object.isRequired,overlayText:c.a.string},h.defaultProps={overlayText:""},t.a=h},170:function(e,t,n){"use strict";var a=n(7),i=n.n(a),r=n(0),o=n.n(r),l=n(144),d=n(4),p=n.n(d),s=n(148),c=n(156),u=n(146),m=l.a.div.withConfig({displayName:"text-section__TextWrapper",componentId:"n8eq90-0"})(["padding:0 24px 22px 24px;p{color:",";}"],u.a.font.dark),h=l.a.div.withConfig({displayName:"text-section__Head",componentId:"n8eq90-1"})(["padding:24px 24px 0px 24px;h2{margin:0;color:",";}",""],function(e){return e.color},function(e){return"#fff"!==e.color&&"\n    * {color: #fff}\n  "}),f=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props,t=e.header,n=e.children,a=e.color;return o.a.createElement(s.a,{color:a},o.a.createElement(h,{color:a},o.a.createElement("h2",null,t)),o.a.createElement(m,null,o.a.createElement(c.a,null),n))},t}(r.Component);f.propTypes={header:p.a.string.isRequired,color:p.a.string},f.defaultProps={header:"",color:"#fff"},t.a=f},171:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(144).a.div.withConfig({displayName:"grid__StyledGrid",componentId:"sc-11sm5l4-0"})(["margin:18px 0;border-radius:3px;overflow:hidden;z-index:-1;display:flex;justify-content:space-around;flex-wrap:wrap;@media (max-width:768px){margin-left:12px;margin-right:12px;margin-top:12px;flex-wrap:wrap;}"]);t.a=function(e){var t=e.children.length;return i.a.createElement(r,{numChild:t},e.children)}},172:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(144).a.div.withConfig({displayName:"circle-grid__StyledGrid",componentId:"sc-1aq3fik-0"})(["margin:18px 0;border-radius:3px;overflow:hidden;z-index:-1;display:flex;justify-content:space-around;flex-wrap:wrap;@media (max-width:768px){margin-left:12px;margin-right:12px;margin-top:12px;flex-wrap:wrap;}"]);t.a=function(e){var t=e.children.length;return i.a.createElement(r,{numChild:t},e.children)}},173:function(e,t,n){"use strict";var a=n(7),i=n.n(a),r=n(0),o=n.n(r),l=n(144),d=n(4),p=n.n(d),s=(n(148),n(146),l.a.div.withConfig({displayName:"circle-grid-section__GridItem",componentId:"cpmk9-0"})(["text-align:center;padding:10px 0px;margin:18px auto;text-align:center;.grid-title{font-weight:700;}p{font-size:15px;text-align:center;margin:0 10px;}width:19.5%;@media (max-width:768px){width:32.5%;}@media (max-width:545px){width:49.5%;}"])),c=l.a.div.withConfig({displayName:"circle-grid-section__Body",componentId:"cpmk9-1"})(["margin:12px auto;max-width:230px;"]),u=l.a.div.withConfig({displayName:"circle-grid-section__StyledIcon",componentId:"cpmk9-2"})(["border-radius:100%;background-color:white;width:90px;height:90px;display:flex;justify-content:center;margin:0 auto;align-items:center;path{fill:",";}"],function(e){return e.color}),m=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props,t=e.icon,n=e.underTitle,a=e.underText,i=e.color;return o.a.createElement(s,null,o.a.createElement(u,{color:i},t),o.a.createElement(c,null,o.a.createElement("span",{className:"grid-title"},n),o.a.createElement("p",null,a)))},t}(r.Component);m.propTypes={icon:p.a.node.isRequired,underTitle:p.a.string,underText:p.a.string,color:p.a.string},m.defaultProps={underTitle:"",underText:"",color:"#fff"},t.a=m},174:function(e,t,n){"use strict";n(0);var a=n(144);n(150),n(151),n(146),a.a.ul.withConfig({displayName:"list__StyledUList",componentId:"fptqn2-0"})(["margin-bottom:0;margin-left:-14px;list-style-type:none;li{font-size:16px;line-height:2em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}svg{margin-right:1em;path{fill:#3fc380;}}"])},177:function(e,t,n){"use strict";n(178);var a=n(7),i=n.n(a),r=n(0),o=n.n(r),l=(n(147),n(165)),d=n.n(l),p=n(144),s=n(4),c=n.n(s),u=n(150),m=n(151),h=(n(148),n(146)),f=p.a.div.withConfig({displayName:"listings-grid-section__GridItem",componentId:"gxe26b-0"})(["text-align:center;margin-bottom:18px;.grid-title{display:flex;align-items:center;justify-content:center;svg.fa-medal{path{fill:","}}svg.fa-star{path{fill:","}}span{font-size:13px;}}p{font-size:15px;text-align:justify;margin:10px;}width:32.5%;@media (max-width:768px){width:49%;}@media (max-width:545px){width:100%;}"],h.a.theme.main,h.a.theme.accent),g=p.a.div.withConfig({displayName:"listings-grid-section__Body",componentId:"gxe26b-1"})(["margin:12px 0;"]),y=Object(p.a)(d.a).withConfig({displayName:"listings-grid-section__StyledImg",componentId:"gxe26b-2"})(["overflow:hidden;border-radius:3px;position:absolute;top:0;left:0;width:100%;z-index:-1;height:350px;& > img{object-fit:cover !important;object-position:0% 0% !important;font-family:'object-fit: cover !important; object-position: 0% 0% !important;'}"]),x=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props,t=e.fluidImage,n=e.superhost,a=e.rating,i=e.underText;return o.a.createElement(f,null,o.a.createElement(y,{fluid:t}),o.a.createElement(g,null,o.a.createElement("div",{className:"grid-title"},n&&o.a.createElement(r.Fragment,null,o.a.createElement(u.a,{icon:m.e,size:"2x"}),"  ",o.a.createElement("span",null,"Superhost"),"  ",a&&Array(a).fill().map(function(e,t){return o.a.createElement(u.a,{key:t,icon:m.k})}))),o.a.createElement("p",null,i)))},t}(r.Component);x.propTypes={fluidImage:c.a.object.isRequired,superhost:c.a.bool.isRequired,rating:c.a.number.isRequired,underText:c.a.string},x.defaultProps={superhost:!0,rating:5,underText:""},t.a=x}}]);
//# sourceMappingURL=component---src-pages-faq-js-a8b671ae7f9be6bcad78.js.map