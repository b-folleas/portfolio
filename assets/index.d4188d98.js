var re=Object.defineProperty,ce=Object.defineProperties;var ie=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var le=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable;var q=(e,t,a)=>t in e?re(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,k=(e,t)=>{for(var a in t||(t={}))le.call(t,a)&&q(e,a,t[a]);if(N)for(var a of N(t))de.call(t,a)&&q(e,a,t[a]);return e},b=(e,t)=>ce(e,ie(t));import{o as i,c as l,p as h,a as m,b as s,r as g,d as I,t as c,e as _,n as v,f as $,g as _e,m as P,h as C,F as y,i as w,j as R,k as E,w as ue,T as ge,l as pe,q as he,s as me,_ as fe,u as ve,v as $e,x as ke}from"./vendor.e63b3f16.js";const be=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))d(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&d(n)}).observe(document,{childList:!0,subtree:!0});function a(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(r){if(r.ep)return;r.ep=!0;const o=a(r);fetch(r.href,o)}};be();var u=(e,t)=>{const a=e.__vccOpts||e;for(const[d,r]of t)a[d]=r;return a};const ye={},M=e=>(h("data-v-14d57d8f"),e=e(),m(),e),Ie={class:"container"},Pe=M(()=>s("div",{class:"chevron"},null,-1)),we=M(()=>s("div",{class:"chevron"},null,-1)),Se=M(()=>s("div",{class:"chevron"},null,-1)),je=[Pe,we,Se];function Ce(e,t){return i(),l("div",Ie,je)}var Te=u(ye,[["render",Ce],["__scopeId","data-v-14d57d8f"]]);const Me={name:"ProfileComponent",components:{ScrollDown:Te},computed:{avatar(){return"https://github.com/b-folleas.png"}}},Fe={key:0,class:"noselect"},Le=["src"],Ue={class:"smaller"},Be={class:"emphasis-txt"};function xe(e,t,a,d,r,o){const n=g("ScrollDown");return i(),l("main",null,[o.avatar?(i(),l("div",Fe,[s("img",{class:"profile-img fade-in-top noselect",src:o.avatar,alt:"Avatar",ref:"img"},null,8,Le)])):I("",!0),s("div",{class:v(["profile-text fade-in-top",{smaller:e.$i18n.locale==="ja"}])},[s("h1",null,c(e.$t("hello")),1),s("h1",Ue,c(e.$t("i_m_brice")),1),s("h3",Be,c(e.$t("full_stack_engineer")),1),_(n)],2)])}var De=u(Me,[["render",xe],["__scopeId","data-v-8c24c4c4"]]);const Ae={name:"HomeSection",components:{Profile:De}};function Ne(e,t,a,d,r,o){const n=g("Profile");return i(),l("div",null,[_(n)])}var qe=u(Ae,[["render",Ne],["__scopeId","data-v-a97107a6"]]);const Ve={name:"DescriptionComponent"},J=e=>(h("data-v-21db0b40"),e=e(),m(),e),We={class:"mb-0"},Re={class:"emphasis-txt"},Ee=$(". "),Je=J(()=>s("br",null,null,-1)),He={class:"mb-0"},Oe={class:"emphasis-txt"},Ye=$(". "),ze=J(()=>s("br",null,null,-1)),Ge={class:"mb-0"},Ke={class:"emphasis-txt"},Qe=$(". ");function Xe(e,t,a,d,r,o){return i(),l("article",null,[s("p",We,[$(c(e.$t("description.paragraph_one"))+" ",1),s("span",Re,c(e.$t("description.vue_symfo_springboot")),1),Ee]),Je,s("p",He,[$(c(e.$t("description.paragraph_two"))+" ",1),s("span",Oe,c(e.$t("description.django_and_docker")),1),Ye]),ze,s("p",Ge,[$(c(e.$t("description.paragraph_three"))+" ",1),s("span",Ke,c(e.$t("description.yokohama_tokyo_japan")),1),Qe])])}var Ze=u(Ve,[["render",Xe],["__scopeId","data-v-21db0b40"]]);const es={name:"AboutSection",components:{Description:Ze}},ss=e=>(h("data-v-4c69e694"),e=e(),m(),e),ts=ss(()=>s("span",{id:"about",class:"mb-60"},null,-1)),os={class:"h-center"};function ns(e,t,a,d,r,o){const n=g("Description");return i(),l("div",null,[ts,s("h2",os,c(e.$t("about")),1),_(n,{class:"w-80"})])}var as=u(es,[["render",ns],["__scopeId","data-v-4c69e694"]]),F="/portfolio/assets/js.ec8acd65.svg",L="/portfolio/assets/vue.b4cdca4a.svg",U="/portfolio/assets/symfony.1608e95e.svg",B="/portfolio/assets/python.fbc3b698.svg",x="/portfolio/assets/spring-boot.8f9ccd66.svg",D="/portfolio/assets/docker.362bc087.svg";const rs={name:"SkillsComponent",computed:{cvUrl(){return new URL("/portfolio/assets/cv.32cbbe70.pdf",self.location).href}}},cs=e=>(h("data-v-0756895c"),e=e(),m(),e),is={class:"skills-container"},ls={class:"flex-icons w-80"},ds=_e('<img class="icon-img" title="JavaScript" src="'+F+'" alt="JavaScript" data-v-0756895c><img class="icon-img" title="Vue.js" src="'+L+'" alt="Vue.js" data-v-0756895c><img class="icon-img" title="Symfony Framework" src="'+U+'" alt="Symfony" data-v-0756895c><img class="icon-img" title="Python" src="'+B+'" alt="Python" data-v-0756895c><img class="icon-img" title="Spring Boot Framework" src="'+x+'" alt="Spring Boot" data-v-0756895c><img class="icon-img" title="Docker" src="'+D+'" alt="Docker" data-v-0756895c>',6),_s=["href"],us=cs(()=>s("i",{class:"mr-1 fa fa-download"},null,-1));function gs(e,t,a,d,r,o){return i(),l("div",is,[s("div",ls,[ds,s("a",{class:"action-btn",href:o.cvUrl,download:"cv-folleas-brice.pdf"},[us,$(" "+c(e.$t("download_resume")),1)],8,_s)])])}var ps=u(rs,[["render",gs],["__scopeId","data-v-0756895c"]]);const hs={name:"SkillsSection",components:{Skills:ps},computed:{isInnerWidthSmall(){return window.innerWidth<=426}}},ms=e=>(h("data-v-5ceedcde"),e=e(),m(),e),fs={key:0},vs=ms(()=>s("span",{id:"skills",class:"mb-60"},null,-1)),$s={class:"h-center"},ks={key:1};function bs(e,t,a,d,r,o){const n=g("Skills",!0);return o.isInnerWidthSmall?(i(),l("div",fs,[vs,s("h2",$s,c(e.$t("skills")),1),_(n,{class:"w-80"})])):(i(),l("div",ks,[_(n,{class:"w-80"})]))}var ys=u(hs,[["render",bs],["__scopeId","data-v-5ceedcde"]]);const V="b-folleas",W="https://api.github.com";var T={async getAllProjects(){return(await fetch(`${W}/users/${V}/repos?sort=updated`)).json()},async getProjectsByPage(e,t){return(await fetch(`${W}/users/${V}/repos?sort=updated&page=${e}&per_page=${t}`)).json()}};const Is={name:"ProjectModuleComponent",inject:["$func"],props:{name:{type:String,required:!0},url:{type:String,required:!0},description:{type:String,default:"Lorem ipsum",required:!1},language:{type:String,required:!1},topics:{type:Array,required:!1},date:{type:String,required:!1}},computed:b(k({},P("theme",["userTheme"])),{assetsSrc(){return this.userTheme=="dark-theme"?this.$func.getIconImgUrl("github"):this.$func.getIconImgUrl("github-dark")},formatedDate(){return C.locale(this.$i18n.locale),this.$i18n.locale==="en"?C(this.date).format("MMM Do YY"):C(this.date).format("ll")}})},H=e=>(h("data-v-6fb00e12"),e=e(),m(),e),Ps={class:"project-container"},ws={class:"project-module-header"},Ss={class:"project-module-title"},js=["href"],Cs=H(()=>s("i",{class:"fa fa-bold fa-arrow-up-right-from-square"},null,-1)),Ts=[Cs],Ms={key:0},Fs=H(()=>s("i",{class:"fa fa-code"},null,-1)),Ls={key:0};function Us(e,t,a,d,r,o){var n;return i(),l("article",Ps,[s("div",ws,[s("div",Ss,[s("h3",null,c(a.name),1),s("a",{href:a.url,class:"round-btn"},Ts,8,js)]),a.language?(i(),l("em",Ms,[Fs,$(" "+c(a.language),1)])):I("",!0)]),s("p",null,c(o.formatedDate),1),s("p",null,c(a.description),1),((n=a.topics)==null?void 0:n.length)>0?(i(),l("div",Ls,[(i(!0),l(y,null,w(a.topics,f=>(i(),l("p",{class:"chip",key:f},c(f),1))),128))])):I("",!0)])}var Bs=u(Is,[["render",Us],["__scopeId","data-v-6fb00e12"]]);const xs={name:"PaginationComponent",props:{maxVisibleButtons:{type:Number,required:!1,default:4},totalPages:{type:Number,required:!0},perPage:{type:Number,required:!0},currentPage:{type:Number,required:!0}},computed:{startPage(){return this.currentPage===1?1:this.currentPage===this.totalPages?this.totalPages-this.maxVisibleButtons+1:this.currentPage-1},pages(){const e=[];for(let t=this.startPage;t<=Math.min(this.startPage+this.maxVisibleButtons-1,this.totalPages);t++)e.push({name:t,isDisabled:t===this.currentPage});return e},isInFirstPage(){return this.currentPage===1},isInLastPage(){return this.currentPage===this.totalPages}},methods:{onClickFirstPage(){this.$emit("pagechanged",1)},onClickPreviousPage(){this.$emit("pagechanged",this.currentPage-1)},onClickPage(e){this.$emit("pagechanged",e)},onClickNextPage(){this.$emit("pagechanged",this.currentPage+1)},onClickLastPage(){this.$emit("pagechanged",this.totalPages)},isPageActive(e){return this.currentPage===e}}},S=e=>(h("data-v-4a2cf376"),e=e(),m(),e),Ds={class:"pagination"},As={class:"pagination-item"},Ns=["disabled"],qs=S(()=>s("i",{class:"fa-solid fa-backward-fast"},null,-1)),Vs=[qs],Ws={class:"pagination-item"},Rs=["disabled"],Es=S(()=>s("i",{class:"fa-solid fa-backward-step"},null,-1)),Js=[Es],Hs=["onClick","disabled","aria-label"],Os={class:"pagination-item"},Ys=["disabled"],zs=S(()=>s("i",{class:"fa-solid fa-forward-step"},null,-1)),Gs=[zs],Ks={class:"pagination-item"},Qs=["disabled"],Xs=S(()=>s("i",{class:"fa-solid fa-forward-fast"},null,-1)),Zs=[Xs];function et(e,t,a,d,r,o){return i(),l("ul",Ds,[s("li",As,[s("button",{type:"button",onClick:t[0]||(t[0]=(...n)=>o.onClickFirstPage&&o.onClickFirstPage(...n)),disabled:o.isInFirstPage,"aria-label":"Go to first page"},Vs,8,Ns)]),s("li",Ws,[s("button",{type:"button",onClick:t[1]||(t[1]=(...n)=>o.onClickPreviousPage&&o.onClickPreviousPage(...n)),disabled:o.isInFirstPage},Js,8,Rs)]),(i(!0),l(y,null,w(o.pages,n=>(i(),l("li",{class:"pagination-item",key:n.name},[s("button",{type:"button",onClick:f=>o.onClickPage(n.name),disabled:n.isDisabled,class:v({active:o.isPageActive(n.name)}),"aria-label":`Go to page number ${n.name}`},c(n.name),11,Hs)]))),128)),s("li",Os,[s("button",{type:"button",onClick:t[2]||(t[2]=(...n)=>o.onClickNextPage&&o.onClickNextPage(...n)),disabled:o.isInLastPage},Gs,8,Ys)]),s("li",Ks,[s("button",{type:"button",onClick:t[3]||(t[3]=(...n)=>o.onClickLastPage&&o.onClickLastPage(...n)),disabled:o.isInLastPage},Zs,8,Qs)])])}var st=u(xs,[["render",et],["__scopeId","data-v-4a2cf376"]]);const tt={name:"WorksSection",components:{ProjectModule:Bs,Pagination:st},data:()=>({projects:[],paginatedProjects:[],currentPage:1,perPage:4,totalPages:10}),computed:{projectsNumbers(){const e=(this.currentPage-1)*4+1;return this.currentPage===this.totalPages?e===this.projects.length?e:e+" - "+this.projects.length:e+" - "+(e+3)}},async created(){var e;this.projects=await T.getAllProjects(),this.paginatedProjects=await T.getProjectsByPage(this.currentPage,this.perPage),this.totalPages=(e=this.projects)!=null&&e.length?Math.floor(this.projects.length/this.perPage):0},methods:{async onPageChange(e){document.getElementById("works").scrollIntoView(),this.currentPage=e,this.paginatedProjects=await T.getProjectsByPage(this.currentPage,this.perPage)}}},O=e=>(h("data-v-62bd3cd4"),e=e(),m(),e),ot=O(()=>s("span",{id:"works",class:"mb-60"},null,-1)),nt={class:"h-center"},at={class:"mt-3"},rt={class:"project-div"},ct=O(()=>s("br",null,null,-1));function it(e,t,a,d,r,o){const n=g("ProjectModule"),f=g("pagination");return i(),l("div",null,[ot,s("h2",nt,c(e.$t("works")),1),s("div",at,[s("div",rt,[(i(!0),l(y,null,w(e.paginatedProjects,p=>(i(),R(n,{key:p.id,name:p.name,description:p.description,url:p.svn_url,language:p.language,topics:p.topics,date:p.updated_at,class:v(["module",{centersection:p!==e.paginatedProjects[0]}])},null,8,["name","description","url","language","topics","date","class"]))),128))]),s("span",null,c(o.projectsNumbers)+" / "+c(e.projects.length)+" "+c(e.$t("projects")),1),ct,_(f,{class:"pagination",totalPages:e.totalPages,perPage:e.perPage,currentPage:e.currentPage,onPagechanged:o.onPageChange},null,8,["totalPages","perPage","currentPage","onPagechanged"])])])}var lt=u(tt,[["render",it],["__scopeId","data-v-62bd3cd4"]]),Y="/portfolio/assets/email-dark.d4275cbd.svg",z="/portfolio/assets/email.75073418.svg",G="/portfolio/assets/github-dark.7a330b49.svg",K="/portfolio/assets/github.921145a1.svg",Q="/portfolio/assets/linkedin-dark.3f8477bc.svg",X="/portfolio/assets/linkedin.7a7a5923.svg",Z="/portfolio/assets/menu-dark.80311574.svg",ee="/portfolio/assets/menu.b9597e4d.svg";const dt={name:"FindMeIconsComponent",inject:["$func"],props:{title:{type:String,required:!0},content:{type:String,required:!0},link:{type:String,required:!1}},computed:b(k({},P("theme",["userTheme"])),{assetsSrc(){const e={};return this.userTheme=="dark-theme"?(e.email=this.$func.getIconImgUrl("email"),e.linkedin=this.$func.getIconImgUrl("linkedin"),e.github=this.$func.getIconImgUrl("github")):(e.email=this.$func.getIconImgUrl("email-dark"),e.linkedin=this.$func.getIconImgUrl("linkedin-dark"),e.github=this.$func.getIconImgUrl("github-dark")),e}}),methods:{openLink(){window.open(this.link,"_blank","noopener")},getIconImgUrl(e){return new URL({"../assets/icons/docker.svg":D,"../assets/icons/email-dark.svg":Y,"../assets/icons/email.svg":z,"../assets/icons/github-dark.svg":G,"../assets/icons/github.svg":K,"../assets/icons/js.svg":F,"../assets/icons/linkedin-dark.svg":Q,"../assets/icons/linkedin.svg":X,"../assets/icons/menu-dark.svg":Z,"../assets/icons/menu.svg":ee,"../assets/icons/python.svg":B,"../assets/icons/spring-boot.svg":x,"../assets/icons/symfony.svg":U,"../assets/icons/vue.svg":L}[`../assets/icons/${e}.svg`],self.location).href}}},_t=e=>(h("data-v-4a3174d8"),e=e(),m(),e),ut={class:"find-me-icons-header"},gt=["src","alt"],pt=_t(()=>s("div",{class:"horizontal-divider"},null,-1));function ht(e,t,a,d,r,o){return i(),l("div",{class:"find-me-icons-main-container",onClick:t[0]||(t[0]=(...n)=>o.openLink&&o.openLink(...n))},[s("div",ut,[s("img",{src:o.assetsSrc[a.title],alt:a.title},null,8,gt),pt,s("strong",null,c(a.title),1)]),s("p",null,c(a.content),1)])}var mt=u(dt,[["render",ht],["__scopeId","data-v-4a3174d8"]]);const ft={name:"InfoSection",components:{FindMeIcons:mt}},vt=e=>(h("data-v-6a60eb5f"),e=e(),m(),e),$t={class:"main-container"},kt=vt(()=>s("span",{id:"info",class:"mb-60"},null,-1)),bt={class:"h-center"},yt={class:"flex-container"};function It(e,t,a,d,r,o){const n=g("FindMeIcons");return i(),l("div",$t,[kt,s("h2",bt,c(e.$t("info")),1),s("div",yt,[_(n,{title:"email",content:"brice.folleas@gmail.com",link:"mailto:brice.folleas@gmail.com"}),_(n,{title:"linkedin",content:"brice-foll\xE9as",link:"https://www.linkedin.com/in/brice-foll\xE9as/"}),_(n,{title:"github",content:"b-folleas",link:"https://github.com/b-folleas"})])])}var Pt=u(ft,[["render",It],["__scopeId","data-v-6a60eb5f"]]);const wt={name:"FooterSection",props:{src:{type:String,required:!0}}},se=e=>(h("data-v-c7a86418"),e=e(),m(),e),St={class:"main-footer"},jt=["src"],Ct=se(()=>s("div",{class:"vertical-divider noselect"},null,-1)),Tt=se(()=>s("div",null,[s("h4",{class:"mt-1 bg-color"},"\xA9 2022")],-1));function Mt(e,t,a,d,r,o){return i(),l("div",null,[s("footer",null,[s("div",St,[s("img",{src:a.src,alt:"logo"},null,8,jt),Ct,s("h3",null,c(e.$t("brice")),1)]),Tt])])}var Ft=u(wt,[["render",Mt],["__scopeId","data-v-c7a86418"]]);const Lt={name:"ThemeButtonComponent",computed:k({},P("theme",["userTheme"])),methods:b(k({},E("theme",["setUserTheme"])),{toggleTheme(){localStorage.getItem("user-theme")==="light-theme"?this.setTheme("dark-theme"):this.setTheme("light-theme")},setTheme(e){document.documentElement.className=e,this.setUserTheme(e)}})},A=e=>(h("data-v-053ca33a"),e=e(),m(),e),Ut={for:"checkbox",class:"switch-label noselect"},Bt=A(()=>s("span",{class:"noselect"},"\u{1F319}",-1)),xt=A(()=>s("span",{class:"noselect"},"\xA0",-1)),Dt=A(()=>s("span",{class:"noselect"},"\u2600\uFE0F",-1));function At(e,t,a,d,r,o){return i(),l(y,null,[s("input",{onChange:t[0]||(t[0]=(...n)=>o.toggleTheme&&o.toggleTheme(...n)),id:"checkbox",type:"checkbox",class:"switch-checkbox"},null,32),s("label",Ut,[Bt,xt,Dt,s("div",{class:v(["switch-toggle",{"switch-toggle-checked":e.userTheme==="dark-theme"}])},null,2)])],64)}var Nt=u(Lt,[["render",At],["__scopeId","data-v-053ca33a"]]);const qt={name:"SelectButtonComponent",data(){return{languages:[{key:"fr",name:"french"},{key:"en",name:"english"},{key:"ja",name:"japanese"}]}},computed:{currentLanguage(){return this.$i18n.locale}}},Vt={class:"snip1135"},Wt=["onClick"];function Rt(e,t,a,d,r,o){return i(),l("ul",Vt,[(i(!0),l(y,null,w(r.languages,n=>(i(),l("li",{key:n.key,class:v({active:o.currentLanguage===n.key})},[s("a",{onClick:f=>e.$i18n.locale=n.key},c(e.$t(n.name)),9,Wt)],2))),128))])}var Et=u(qt,[["render",Rt],["__scopeId","data-v-a758f9be"]]);const Jt={name:"MenuComponent",components:{ThemeButton:Nt,SelectButton:Et},emits:["close"]},Ht={class:"snip1217"},Ot={id:"themeBtn"},Yt={id:"selectBtn"};function zt(e,t,a,d,r,o){const n=g("ThemeButton"),f=g("SelectButton");return i(),l("ul",Ht,[s("li",null,[s("a",{onClick:t[0]||(t[0]=p=>e.$emit("close")),href:"#about"},c(e.$t("about")),1)]),s("li",null,[s("a",{onClick:t[1]||(t[1]=p=>e.$emit("close")),href:"#works"},c(e.$t("works")),1)]),s("li",null,[s("a",{onClick:t[2]||(t[2]=p=>e.$emit("close")),href:"#info"},c(e.$t("info")),1)]),s("li",Ot,[_(n)]),s("li",Yt,[_(f)])])}var Gt=u(Jt,[["render",zt],["__scopeId","data-v-492ffbba"]]);const Kt={name:"App",inject:["$func"],components:{Home:qe,Menu:Gt,About:as,Skills:ys,Works:lt,Info:Pt,Footer:Ft},data(){return{showMenu:!1,initUserTheme:""}},computed:b(k({},P("theme",["userTheme"])),{assetsSrc(){const e={};return this.userTheme=="dark-theme"?(e.logo=this.$func.getImgUrl("logo"),e.menu=this.$func.getIconImgUrl("menu"),e.footer=this.$func.getImgUrl("logo-dark")):(e.logo=this.$func.getImgUrl("logo-dark"),e.menu=this.$func.getIconImgUrl("menu-dark"),e.footer=this.$func.getImgUrl("logo")),e},isInnerWidthSmall(){return window.innerWidth<=426}}),async created(){const e=await this.getLocalStorageTheme()||this.getMediaPreference();document.documentElement.className=e,this.setUserTheme(e)},methods:b(k({},E("theme",["getLocalStorageTheme","setUserTheme"])),{scrollToTop(){window.scroll({top:0,left:0,behavior:"smooth"})},toggleMenu(){this.showMenu=!this.showMenu},getMediaPreference(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark-theme":"light-theme"}})},Qt=e=>(h("data-v-78eb4850"),e=e(),m(),e),Xt={id:"app"},Zt={class:"nav noselect"},eo=["src"],so=["src"],to=Qt(()=>s("p",{class:"footer-top-info"},"Realised with Vite Build Tool",-1));function oo(e,t,a,d,r,o){const n=g("Menu"),f=g("Home"),p=g("About"),te=g("Skills"),oe=g("Works"),ne=g("Info"),ae=g("Footer");return i(),l("div",Xt,[s("nav",Zt,[s("img",{id:"appLogo",class:"logo noselect",src:o.assetsSrc.logo,alt:"logo",onClick:t[0]||(t[0]=(...j)=>o.scrollToTop&&o.scrollToTop(...j))},null,8,eo),_(ge,null,{default:ue(()=>[r.showMenu?(i(),R(n,{key:0,onClose:o.toggleMenu},null,8,["onClose"])):I("",!0)]),_:1}),s("img",{class:"menu noselect",src:o.assetsSrc.menu,alt:"menu",onClick:t[1]||(t[1]=(...j)=>o.toggleMenu&&o.toggleMenu(...j))},null,8,so)]),_(f,{name:"home",class:"section"}),s("div",{id:"about-skills",class:v({section:!o.isInnerWidthSmall})},[_(p,{name:"about",class:v({section:o.isInnerWidthSmall})},null,8,["class"]),_(te,{name:"skills",class:v({section:o.isInnerWidthSmall})},null,8,["class"])],2),_(oe,{name:"works",class:"section"}),_(ne,{id:"info-section",name:"info",class:"section"}),to,_(ae,{id:"footer",class:"footer",src:o.assetsSrc.footer},null,8,["src"])])}var no=u(Kt,[["render",oo],["__scopeId","data-v-78eb4850"]]),ao={namespaced:!0,state:{userTheme:"light-theme"},mutations:{setUserTheme(e,t){e.userTheme=t}},actions:{setUserTheme(e,t){localStorage.setItem("user-theme",t),e.commit("setUserTheme",t)},getLocalStorageTheme(){return localStorage.getItem("user-theme")}}};const ro=pe({modules:{theme:ao}}),co="Hello",io="I'm Brice",lo="Brice",_o="Full Stack Engineer",uo={paragraph_one:"Last year student in internship as a Full Stack developer, based in Lyon, France. Through my studies, my three years work experience and personal projects, I deepened my skills in creating websites using frameworks such as",paragraph_two:"In my free time, I try to discover new technologies. Currently, I'm working on a personal project using ",paragraph_three:"I'm looking for a new job oppotunity in ",vue_symfo_springboot:"Vue.js, Symfony & Spring boot",django_and_docker:"Django & Docker",yokohama_tokyo_japan:"Yokohama / Tokyo Japan"},go="Download Resume",po="About",ho="Skills",mo="Works",fo="Info",vo="EN",$o="FR",ko="JA",bo="Read More",yo="projects";var Io={hello:co,i_m_brice:io,brice:lo,full_stack_engineer:_o,description:uo,download_resume:go,about:po,skills:ho,works:mo,info:fo,english:vo,french:$o,japanese:ko,read_more:bo,projects:yo};const Po="Bonjour, je suis",wo="Brice",So="Brice",jo="Ing\xE9nieur Full Stack",Co={paragraph_one:"\xC9tudiant en derni\xE8re ann\xE9e d'alternance en tant qu'ing\xE9nieur Full Stack, situ\xE9 \xE0 Lyon, France. Au travers de mes \xE9tudes et de mes trois ann\xE9es d'exp\xE9rience en entreprise ainsi que sur des projets personnels, j'ai pu approfondir mes comp\xE9tences dans la cr\xE9ation de site web en utilisant des frameworks tels que ",paragraph_two:"Durant mon temps libre, je cherche \xE0 d\xE9couvrir de nouvelles technologies. Actuellement, je travaille sur un projet personnel en utilisant les technologies ",paragraph_three:"Je suis \xE0 la recherche d'une opportunit\xE9 professionnelle \xE0 ",vue_symfo_springboot:"Vue.js, Symfony & Spring boot",django_and_docker:"Django & Docker",yokohama_tokyo_japan:"Yokohama / Tokyo Japan"},To="T\xE9l\xE9charger mon CV",Mo="\xC0 propos",Fo="Comp\xE9tences",Lo="Projets",Uo="Infos",Bo="EN",xo="FR",Do="JA",Ao="Voir plus",No="projets";var qo={hello:Po,i_m_brice:wo,brice:So,full_stack_engineer:jo,description:Co,download_resume:To,about:Mo,skills:Fo,works:Lo,info:Uo,english:Bo,french:xo,japanese:Do,read_more:Ao,projects:No};const Vo="\u3053\u3093\u306B\u3061\u306F",Wo="\u30D6\u30E9\u30A4\u30B9\u3067\u3059\u3002",Ro="\u30D6\u30E9\u30A4\u30B9",Eo="\u30D5\u30EB\u30B9\u30BF\u30C3\u30AF\u30A8\u30F3\u30B8\u30CB\u30A2",Jo={paragraph_one:"Last year student in internship as a Full Stack developer, based in Lyon, France. Through my studies, my three years work experience and personal projects, I deepened my skills in creating websites using frameworks such as",paragraph_two:"In my free time, I try to discover new technologies. Currently, I'm working on a personal project using ",paragraph_three:"I'm looking for a new job oppotunity in ",vue_symfo_springboot:"Vue.js, Symfony & Spring boot",django_and_docker:"Django & Docker",yokohama_tokyo_japan:"Yokohama / Tokyo Japan"},Ho="\u5C65\u6B74\u66F8\u306E\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9",Oo="About",Yo="Skills",zo="Works",Go="Info",Ko="\u82F1\u8A9E",Qo="\u30D5\u30E9\u30F3\u30B9\u8A9E",Xo="\u65E5\u672C\u8A9E",Zo="Read More",en="projects";var sn={hello:Vo,i_m_brice:Wo,brice:Ro,full_stack_engineer:Eo,description:Jo,download_resume:Ho,about:Oo,skills:Yo,works:zo,info:Go,english:Ko,french:Qo,japanese:Xo,read_more:Zo,projects:en};const tn=he({legacy:!0,globalInjection:!0,locale:"en",fallbackLocale:"en",messages:{en:Io,fr:qo,ja:sn}});var on="/portfolio/assets/logo-dark.6f808d03.svg",nn="/portfolio/assets/logo.28a0162b.svg",an={getImgUrl:e=>new URL({"/src/assets/logo-dark.svg":on,"/src/assets/logo.svg":nn}[`/src/assets/${e}.svg`],self.location).href,getIconImgUrl:e=>new URL({"/src/assets/icons/docker.svg":D,"/src/assets/icons/email-dark.svg":Y,"/src/assets/icons/email.svg":z,"/src/assets/icons/github-dark.svg":G,"/src/assets/icons/github.svg":K,"/src/assets/icons/js.svg":F,"/src/assets/icons/linkedin-dark.svg":Q,"/src/assets/icons/linkedin.svg":X,"/src/assets/icons/menu-dark.svg":Z,"/src/assets/icons/menu.svg":ee,"/src/assets/icons/python.svg":B,"/src/assets/icons/spring-boot.svg":x,"/src/assets/icons/symfony.svg":U,"/src/assets/icons/vue.svg":L}[`/src/assets/icons/${e}.svg`],self.location).href};me.add(fe);ve.watch();$e(no).use(ro).use(tn).component("font-awesome-icon",ke).provide("$func",an).mount("#app");
