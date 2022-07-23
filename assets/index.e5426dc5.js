var J=Object.defineProperty,K=Object.defineProperties;var Q=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var L=(e,n,a)=>n in e?J(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,b=(e,n)=>{for(var a in n||(n={}))X.call(n,a)&&L(e,a,n[a]);if(F)for(var a of F(n))Z.call(n,a)&&L(e,a,n[a]);return e},y=(e,n)=>K(e,Q(n));import{l as ee,r as u,o as i,c as T,a as l,p as h,b as f,d as t,e as p,t as c,n as k,f as w,F as v,g as $,h as I,m as S,i as A,w as te,T as ne,j as oe,k as se,q as P,s as ae,_ as re,u as ie,v as ce,V as le,x as de}from"./vendor.fef573d5.js";const ue=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))d(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&d(s)}).observe(document,{childList:!0,subtree:!0});function a(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(r){if(r.ep)return;r.ep=!0;const o=a(r);fetch(r.href,o)}};ue();var _=(e,n)=>{const a=e.__vccOpts||e;for(const[d,r]of n)a[d]=r;return a};const pe={name:"ParticlesComponent",data(){return{particlesInit:null,particlesLoaded:null}},computed:{isSmallScreen(){return window.innerWidth<768}},created(){this.particlesInit=async e=>{await ee(e)}}};function _e(e,n,a,d,r,o){const s=u("Particles",!0);return i(),T(s,{id:"tsparticles",particlesInit:r.particlesInit,particlesLoaded:r.particlesLoaded,options:{background:{color:{value:"black"}},fpsLimit:120,interactivity:{detectsOn:"window",events:{onClick:{enable:!0,mode:"push"},onHover:{enable:!0,mode:"repulse"},resize:!0},modes:{bubble:{distance:200,duration:2,opacity:.8,size:20},push:{default:!0,groups:[],quantity:4,speed:2,maxSpeed:10},repulse:{distance:100,duration:.4,factor:100,speed:2,maxSpeed:10,easing:"ease-out-quad",divs:{distance:200,duration:.4,factor:100,speed:1,maxSpeed:50,easing:"ease-out-quad",selectors:[]}}}},particles:{color:{value:["#ff6f91","#f9f871","#d65db1","6fbffd"]},collisions:{enable:!0},move:{direction:"none",enable:!0,outMode:"split",random:!1,speed:1,straight:!1},number:{density:{enable:!0,value_area:800},value:o.isSmallScreen?20:40},opacity:{value:.6},shape:{type:"circle"},size:{random:!0,value:5}},detectRetina:!0}},null,8,["particlesInit","particlesLoaded","options"])}var ge=_(pe,[["render",_e]]);const me={},M=e=>(h("data-v-bf455dfe"),e=e(),f(),e),he={class:"container"},fe=M(()=>t("div",{class:"chevron"},null,-1)),ve=M(()=>t("div",{class:"chevron"},null,-1)),be=M(()=>t("div",{class:"chevron"},null,-1)),ke=[fe,ve,be];function $e(e,n){return i(),l("div",he,ke)}var ye=_(me,[["render",$e],["__scopeId","data-v-bf455dfe"]]),B="/portfolio/assets/avatar.f8961f25.jpg";const we={name:"ProfileComponent",inject:["$func"],components:{Particles:ge,ScrollDown:ye}},Ie={class:"noselect"},Pe=["title"],xe={class:"smaller"},Se={class:"emphasis-txt"};function je(e,n,a,d,r,o){const s=u("Particles"),g=u("ScrollDown");return i(),l("main",null,[p(s),t("div",Ie,[t("img",{id:"avatar",class:"profile-img fade-in-top noselect",src:B,alt:"Avatar",title:e.$t("avatar"),ref:"img"},null,8,Pe)]),t("div",{class:k(["profile-text fade-in-top",{smaller:e.$i18n.locale==="ja"}])},[t("h1",null,c(e.$t("hello")),1),t("h1",xe,c(e.$t("i_m_brice")),1),t("h3",Se,c(e.$t("full_stack_engineer")),1),p(g)],2)])}var Ce=_(we,[["render",je],["__scopeId","data-v-38db9b89"]]);const Te={name:"HomeSection",components:{Profile:Ce}};function Me(e,n,a,d,r,o){const s=u("Profile");return i(),l("div",null,[p(s)])}var De=_(Te,[["render",Me],["__scopeId","data-v-a97107a6"]]);const Fe={name:"DescriptionComponent"},j=e=>(h("data-v-22308f00"),e=e(),f(),e),Le={class:"mb-0"},Ae=j(()=>t("span",{class:"emphasis-txt"}," Vue.js,\xA0Symfony\xA0&\xA0Spring boot.",-1)),Be=j(()=>t("br",null,null,-1)),Ue={class:"mb-0"},qe=j(()=>t("span",{class:"emphasis-txt"},"Django\xA0&\xA0Docker",-1)),Ee=j(()=>t("br",null,null,-1)),Ne={class:"mb-0"},He={class:"emphasis-txt"};function ze(e,n,a,d,r,o){return i(),l("div",null,[t("article",null,[t("p",Le,[w(c(e.$t("description.paragraph_one"))+" ",1),Ae]),Be,t("p",Ue,[w(c(e.$t("description.paragraph_two"))+" ",1),qe]),Ee,t("p",Ne,[w(c(e.$t("description.paragraph_three"))+" ",1),t("span",He,c(e.$t("description.yokohama"))+"\xA0/\xA0"+c(e.$t("description.tokyo"))+",\xA0"+c(e.$t("description.japan")),1)])])])}var Ve=_(Fe,[["render",ze],["__scopeId","data-v-22308f00"]]);const Re={name:"AboutSection",components:{Description:Ve}},Oe={class:"flex-div"},Ge=t("span",{id:"about",class:"mb-60"},null,-1),We={class:"h-center"};function Ye(e,n,a,d,r,o){const s=u("Description");return i(),l("div",Oe,[Ge,t("h2",We,c(e.$t("about")),1),p(s,{class:"w-80"})])}var Je=_(Re,[["render",Ye]]);const Ke={name:"SkillsComponent",inject:["$func"],data(){return{skillImages:[{title:"JavaScript",src:"js"},{title:"Vue.js",src:"vue"},{title:"Symfony Framework",src:"symfony"},{title:"Python",src:"python"},{title:"Spring Boot Framework",src:"spring-boot"},{title:"Docker",src:"docker"}]}},computed:{cvUrl(){return new URL("/portfolio/assets/cv.32cbbe70.pdf",self.location).href}}},Qe=e=>(h("data-v-2bc702d2"),e=e(),f(),e),Xe={class:"skills-container"},Ze={class:"flex-icons w-80"},et=["title","src","alt"],tt=["href"],nt=Qe(()=>t("i",{class:"mr-1 fa fa-download"},null,-1));function ot(e,n,a,d,r,o){return i(),l("div",Xe,[t("div",Ze,[(i(!0),l(v,null,$(r.skillImages,s=>(i(),l("img",{key:s.title,class:"icon-img",loading:"lazy",title:s.title,src:o.$func.getIconImgUrl(s.src),alt:s.title},null,8,et))),128)),t("a",{class:"action-btn",href:o.cvUrl,download:"cv-folleas-brice.pdf"},[nt,w(" "+c(e.$t("download_resume")),1)],8,tt)])])}var st=_(Ke,[["render",ot],["__scopeId","data-v-2bc702d2"]]);const at={name:"SkillsSection",components:{Skills:st}},U=e=>(h("data-v-141c2b2e"),e=e(),f(),e),rt={id:"skillsDiv",class:"flex-div"},it=U(()=>t("span",{id:"skills",class:"mb-60"},null,-1)),ct={class:"h-center"},lt=U(()=>t("p",{class:"mb-skills"},null,-1));function dt(e,n,a,d,r,o){const s=u("Skills",!0);return i(),l("div",rt,[it,t("h2",ct,c(e.$t("skills")),1),lt,p(s,{class:"w-80"})])}var ut=_(at,[["render",dt],["__scopeId","data-v-141c2b2e"]]);const pt={inject:["$func"],props:{eventList:{type:Array,required:!0}},data(){return{activeEvent:this.eventList[0]}},methods:{setActiveTab(e){this.activeEvent=e},isThereHistoryDescriptionPart2(e){return!!this.$i18n.messages.en.history.description[e]}}},_t=e=>(h("data-v-01d311e5"),e=e(),f(),e),gt={class:"history-tabs"},mt={class:"event-selector snip1135"},ht=["onClick"],ft={key:0,class:"event-container"},vt={class:"project-module-title"},bt=_t(()=>t("br",null,null,-1)),kt={key:0,class:"mt-2"};function $t(e,n,a,d,r,o){return i(),l("div",gt,[t("ul",mt,[(i(!0),l(v,null,$(a.eventList,s=>(i(),l("li",{key:s.id,onClick:g=>o.setActiveTab(s),class:k({active:r.activeEvent===s})},[t("a",null,c(e.$t("history.title."+s.title)),1)],10,ht))),128))]),r.activeEvent?(i(),l("article",ft,[t("div",vt,[t("h3",null,c(e.$t("history.title."+r.activeEvent.title)),1)]),t("p",null,c(o.$func.formatDate(r.activeEvent.beginDate))+" - "+c(o.$func.formatDate(r.activeEvent.endDate)),1),bt,t("p",null,c(e.$t("history.description."+r.activeEvent.title)),1),o.isThereHistoryDescriptionPart2(r.activeEvent.title+"_2")?(i(),l("p",kt,c(e.$t("history.description."+r.activeEvent.title+"_2")),1)):I("",!0)])):I("",!0)])}var yt=_(pt,[["render",$t],["__scopeId","data-v-01d311e5"]]);const wt={name:"HistorySection",inject:["$func"],components:{AppTabs:yt},data(){return{events:[{id:1,title:"fiducial",beginDate:new Date(2019,9),endDate:new Date,type:"work"},{id:2,title:"cpe",beginDate:new Date(2019,9),endDate:new Date(2022,7),type:"graduation"},{id:3,title:"conity",beginDate:new Date(2019,4),endDate:new Date(2019,9),type:"work"},{id:3,title:"dawson",beginDate:new Date(2019,1),endDate:new Date(2019,4),type:"graduation"},{id:4,title:"iut",beginDate:new Date(2017,9),endDate:new Date(2019,1),type:"graduation"}]}}},It={class:"flex-div"},Pt={class:"h-center"};function xt(e,n,a,d,r,o){const s=u("AppTabs");return i(),l("div",It,[t("h2",Pt,c(e.$t("history.name")),1),p(s,{eventList:r.events},null,8,["eventList"])])}var St=_(wt,[["render",xt]]);const jt="b-folleas",Ct="https://api.github.com";var Tt={async getAllProjects(){return(await fetch(`${Ct}/users/${jt}/repos?sort=created`)).json()}};const Mt={name:"ProjectModuleComponent",inject:["$func"],props:{name:{type:String,required:!0},url:{type:String,required:!0},description:{type:String,default:"Lorem ipsum",required:!1},language:{type:String,required:!1},topics:{type:Array,required:!1},date:{type:String,required:!1}},computed:y(b({},S("theme",["userTheme"])),{assetsSrc(){return this.userTheme=="dark-theme"?this.$func.getIconImgUrl("github"):this.$func.getIconImgUrl("github-dark")}})},q=e=>(h("data-v-12dfd424"),e=e(),f(),e),Dt={class:"project-container"},Ft={class:"project-module-header"},Lt={class:"project-module-title"},At=["href"],Bt=q(()=>t("i",{class:"fa fa-bold fa-arrow-up-right-from-square"},null,-1)),Ut=[Bt],qt={key:0},Et=q(()=>t("i",{class:"fa fa-code"},null,-1)),Nt={key:0};function Ht(e,n,a,d,r,o){var s;return i(),l("article",Dt,[t("div",Ft,[t("div",Lt,[t("h3",null,c(a.name),1),t("a",{href:a.url,class:"round-btn"},Ut,8,At)]),a.language?(i(),l("em",qt,[Et,w(" "+c(a.language),1)])):I("",!0)]),t("p",null,c(o.$func.formatDate(a.date)),1),t("p",null,c(a.description),1),((s=a.topics)==null?void 0:s.length)>0?(i(),l("div",Nt,[(i(!0),l(v,null,$(a.topics,g=>(i(),l("p",{class:"chip",key:g},c(g),1))),128))])):I("",!0)])}var zt=_(Mt,[["render",Ht],["__scopeId","data-v-12dfd424"]]);const Vt={name:"PaginationComponent",props:{maxVisibleButtons:{type:Number,required:!1,default:4},totalPages:{type:Number,required:!0},perPage:{type:Number,required:!0},currentPage:{type:Number,required:!0}},computed:{startPage(){return this.currentPage===1?1:this.currentPage===this.totalPages?this.totalPages-this.maxVisibleButtons+(this.totalPages/this.currentPage===0?1:2):this.currentPage-1},pages(){const e=[];for(let n=this.startPage;n<=Math.min(this.startPage+this.maxVisibleButtons-1,this.totalPages);n++)e.push({name:n,isDisabled:n===this.currentPage});return e},isInFirstPage(){return this.currentPage===1},isInLastPage(){return this.currentPage===this.totalPages}},methods:{onClickFirstPage(){this.$emit("pagechanged",1)},onClickPreviousPage(){this.$emit("pagechanged",this.currentPage-1)},onClickPage(e){this.$emit("pagechanged",e)},onClickNextPage(){this.$emit("pagechanged",this.currentPage+1)},onClickLastPage(){this.$emit("pagechanged",this.totalPages)},isPageActive(e){return this.currentPage===e}}},C=e=>(h("data-v-0f14d390"),e=e(),f(),e),Rt={class:"pagination"},Ot={class:"pagination-item"},Gt=["disabled"],Wt=C(()=>t("i",{class:"fa-solid fa-backward-fast"},null,-1)),Yt=[Wt],Jt={class:"pagination-item"},Kt=["disabled"],Qt=C(()=>t("i",{class:"fa-solid fa-backward-step"},null,-1)),Xt=[Qt],Zt=["name","onClick","disabled","aria-label"],en={class:"pagination-item"},tn=["disabled"],nn=C(()=>t("i",{class:"fa-solid fa-forward-step"},null,-1)),on=[nn],sn={class:"pagination-item"},an=["disabled"],rn=C(()=>t("i",{class:"fa-solid fa-forward-fast"},null,-1)),cn=[rn];function ln(e,n,a,d,r,o){return i(),l("ul",Rt,[t("li",Ot,[t("button",{name:"Go to first page",type:"button",onClick:n[0]||(n[0]=(...s)=>o.onClickFirstPage&&o.onClickFirstPage(...s)),disabled:o.isInFirstPage,"aria-label":"Go to first page"},Yt,8,Gt)]),t("li",Jt,[t("button",{name:"Go to previous page",type:"button",onClick:n[1]||(n[1]=(...s)=>o.onClickPreviousPage&&o.onClickPreviousPage(...s)),disabled:o.isInFirstPage,"aria-label":"Go to previous page"},Xt,8,Kt)]),(i(!0),l(v,null,$(o.pages,s=>(i(),l("li",{class:"pagination-item",key:s.name},[t("button",{name:`Go to page number ${s.name}`,type:"button",onClick:g=>o.onClickPage(s.name),disabled:s.isDisabled,class:k({active:o.isPageActive(s.name)}),"aria-label":`Go to page number ${s.name}`},c(s.name),11,Zt)]))),128)),t("li",en,[t("button",{name:"Go to next page",type:"button",onClick:n[2]||(n[2]=(...s)=>o.onClickNextPage&&o.onClickNextPage(...s)),disabled:o.isInLastPage,"aria-label":"Go to next page"},on,8,tn)]),t("li",sn,[t("button",{type:"button",onClick:n[3]||(n[3]=(...s)=>o.onClickLastPage&&o.onClickLastPage(...s)),disabled:o.isInLastPage,name:"Go to last page","aria-label":"Go to last page"},cn,8,an)])])}var dn=_(Vt,[["render",ln],["__scopeId","data-v-0f14d390"]]);const un={name:"WorksSection",components:{ProjectModule:zt,Pagination:dn},data:()=>({projects:[],filteredProjects:[],currentProjects:[],currentPage:1,perPage:4,totalPages:10}),computed:{projectsNumbers(){const e=(this.currentPage-1)*this.perPage+1;return this.currentPage===this.totalPages?e===this.filteredProjects.length?e:e+" - "+this.filteredProjects.length:e+" - "+(e+(this.perPage-1))}},async created(){var e;this.projects=await Tt.getAllProjects(),this.filteredProjects=this.projects.filter(n=>!n.archived),this.currentProjects=this.currentProjects=this.getProjectsByPage(this.currentPage,this.perPage),this.totalPages=(e=this.filteredProjects)!=null&&e.length?Math.floor(this.filteredProjects.length/this.perPage):0,this.totalPages+=this.filteredProjects.length/this.perPage!==0?1:0},methods:{async onPageChange(e){document.getElementById("works").scrollIntoView({behavior:"smooth"}),this.currentPage=e,this.currentProjects=this.getProjectsByPage(this.currentPage,this.perPage)},getProjectsByPage(e,n){const a=(e-1)*n;return this.filteredProjects.slice(a,a+n)}}},E=e=>(h("data-v-64d8aa96"),e=e(),f(),e),pn={class:"flex-div"},_n=E(()=>t("span",{id:"works",class:"mb-60"},null,-1)),gn={class:"h-center"},mn={class:"mt-3 flex-div"},hn={class:"project-div"},fn=E(()=>t("br",null,null,-1));function vn(e,n,a,d,r,o){const s=u("ProjectModule"),g=u("pagination");return i(),l("div",pn,[_n,t("h2",gn,c(e.$t("works")),1),t("div",mn,[t("div",hn,[(i(!0),l(v,null,$(e.currentProjects,m=>(i(),T(s,{key:m.id,name:m.name,description:m.description,url:m.svn_url,language:m.language,topics:m.topics,date:m.updated_at,class:k(["module",{centersection:m!==e.currentProjects[0]}])},null,8,["name","description","url","language","topics","date","class"]))),128))]),t("span",null,c(o.projectsNumbers)+" / "+c(e.filteredProjects.length)+" "+c(e.$t("projects")),1),fn,p(g,{class:"pagination",totalPages:e.totalPages,perPage:e.perPage,currentPage:e.currentPage,onPagechanged:o.onPageChange},null,8,["totalPages","perPage","currentPage","onPagechanged"])])])}var bn=_(un,[["render",vn],["__scopeId","data-v-64d8aa96"]]);const kn={name:"FindMeIconsComponent",inject:["$func"],props:{title:{type:String,required:!0},content:{type:String,required:!0},link:{type:String,required:!1}},computed:y(b({},S("theme",["userTheme"])),{assetsSrc(){const e={};return this.userTheme=="dark-theme"?(e.email=this.$func.getIconImgUrl("email"),e.linkedin=this.$func.getIconImgUrl("linkedin"),e.github=this.$func.getIconImgUrl("github")):(e.email=this.$func.getIconImgUrl("email-dark"),e.linkedin=this.$func.getIconImgUrl("linkedin-dark"),e.github=this.$func.getIconImgUrl("github-dark")),e}}),methods:{openLink(){window.open(this.link,"_blank","noopener")}}},$n=e=>(h("data-v-141b3794"),e=e(),f(),e),yn={class:"find-me-icons-header"},wn=["src","alt"],In=$n(()=>t("div",{class:"horizontal-divider"},null,-1));function Pn(e,n,a,d,r,o){return i(),l("div",{class:"find-me-icons-main-container",onClick:n[0]||(n[0]=(...s)=>o.openLink&&o.openLink(...s))},[t("div",yn,[t("img",{src:o.assetsSrc[a.title],alt:a.title,loading:"lazy"},null,8,wn),In,t("strong",null,c(a.title),1)]),t("p",null,c(a.content),1)])}var xn=_(kn,[["render",Pn],["__scopeId","data-v-141b3794"]]);const Sn={name:"InfoSection",components:{FindMeIcons:xn}},jn=e=>(h("data-v-1c767780"),e=e(),f(),e),Cn={class:"main-container"},Tn=jn(()=>t("span",{id:"info",class:"mb-60"},null,-1)),Mn={class:"h-center"},Dn={class:"flex-container"};function Fn(e,n,a,d,r,o){const s=u("FindMeIcons");return i(),l("div",Cn,[Tn,t("h2",Mn,c(e.$t("info")),1),t("div",Dn,[p(s,{title:"email",content:"brice.folleas@gmail.com",link:"mailto:brice.folleas@gmail.com"}),p(s,{title:"linkedin",content:"brice-foll\xE9as",link:"https://www.linkedin.com/in/brice-foll\xE9as/"}),p(s,{title:"github",content:"b-folleas",link:"https://github.com/b-folleas"})])])}var Ln=_(Sn,[["render",Fn],["__scopeId","data-v-1c767780"]]);const An={name:"FooterTopInfoComponent",inject:["$func"],data(){return{techImages:[{title:"Vite JS",src:"vitejs"},{title:"Travis CI",src:"travis-ci"},{title:"Freepik",src:"freepik"}]}}},Bn={class:"footer-top-info"},Un={class:"h-center mb-0"},qn=["title","src","alt"];function En(e,n,a,d,r,o){return i(),l("div",Bn,[t("h6",Un,c(e.$t("realised")),1),(i(!0),l(v,null,$(r.techImages,s=>(i(),l("img",{key:s.title,title:s.title,class:"icon-img small-icon-img",loading:"lazy",src:o.$func.getIconImgUrl(s.src),alt:s.title},null,8,qn))),128))])}var Nn=_(An,[["render",En]]);const Hn={name:"FooterSection",props:{src:{type:String,required:!0}}},N=e=>(h("data-v-b6785bf0"),e=e(),f(),e),zn={class:"main-footer"},Vn=["src"],Rn=N(()=>t("div",{class:"vertical-divider noselect"},null,-1)),On=N(()=>t("div",null,[t("h4",{class:"mt-1 bg-color"},"\xA9 2022")],-1));function Gn(e,n,a,d,r,o){return i(),l("div",null,[t("footer",null,[t("div",zn,[t("img",{src:a.src,alt:"logo"},null,8,Vn),Rn,t("h3",null,c(e.$t("brice")),1)]),On])])}var Wn=_(Hn,[["render",Gn],["__scopeId","data-v-b6785bf0"]]);const Yn={name:"ThemeButtonComponent",computed:b({},S("theme",["userTheme"])),methods:y(b({},A("theme",["setUserTheme"])),{toggleTheme(){localStorage.getItem("user-theme")==="light-theme"?this.setTheme("dark-theme"):this.setTheme("light-theme")},setTheme(e){document.documentElement.className=e,this.setUserTheme(e)}})},D=e=>(h("data-v-053ca33a"),e=e(),f(),e),Jn={for:"checkbox",class:"switch-label noselect"},Kn=D(()=>t("span",{class:"noselect"},"\u{1F319}",-1)),Qn=D(()=>t("span",{class:"noselect"},"\xA0",-1)),Xn=D(()=>t("span",{class:"noselect"},"\u2600\uFE0F",-1));function Zn(e,n,a,d,r,o){return i(),l(v,null,[t("input",{onChange:n[0]||(n[0]=(...s)=>o.toggleTheme&&o.toggleTheme(...s)),id:"checkbox",type:"checkbox",class:"switch-checkbox"},null,32),t("label",Jn,[Kn,Qn,Xn,t("div",{class:k(["switch-toggle",{"switch-toggle-checked":e.userTheme==="dark-theme"}])},null,2)])],64)}var eo=_(Yn,[["render",Zn],["__scopeId","data-v-053ca33a"]]);const to={name:"SelectButtonComponent",data(){return{languages:[{key:"fr",name:"french"},{key:"en",name:"english"},{key:"ja",name:"japanese"}]}},computed:{currentLanguage(){return this.$i18n.locale}}},no={class:"snip1135"},oo=["onClick"];function so(e,n,a,d,r,o){return i(),l("ul",no,[(i(!0),l(v,null,$(r.languages,s=>(i(),l("li",{key:s.key,class:k({active:o.currentLanguage===s.key})},[t("a",{onClick:g=>e.$i18n.locale=s.key},c(e.$t(s.name)),9,oo)],2))),128))])}var ao=_(to,[["render",so],["__scopeId","data-v-5a580816"]]);const ro={name:"MenuComponent",components:{ThemeButton:eo,SelectButton:ao},emits:["close"]},io={class:"snip1217"},co={id:"themeBtn"},lo={id:"selectBtn"};function uo(e,n,a,d,r,o){const s=u("ThemeButton"),g=u("SelectButton");return i(),l("ul",io,[t("li",null,[t("a",{onClick:n[0]||(n[0]=m=>e.$emit("close")),href:"#about"},c(e.$t("about")),1)]),t("li",null,[t("a",{onClick:n[1]||(n[1]=m=>e.$emit("close")),href:"#works"},c(e.$t("works")),1)]),t("li",null,[t("a",{onClick:n[2]||(n[2]=m=>e.$emit("close")),href:"#info"},c(e.$t("info")),1)]),t("li",co,[p(s)]),t("li",lo,[p(g)])])}var po=_(ro,[["render",uo],["__scopeId","data-v-2f246125"]]);const _o={name:"MenuButton",props:{showMenu:{type:Boolean,required:!0}},data(){return{clicked:!1}},methods:{clickMenu(){this.clicked=!this.clicked,this.$emit("toggleMenu")}}},go=e=>(h("data-v-08ac664e"),e=e(),f(),e),mo=go(()=>t("svg",{width:"30",height:"30",viewBox:"0 0 100 100"},[t("path",{class:"line line1",d:"M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"}),t("path",{class:"line line2",d:"M 20,50 H 80"}),t("path",{class:"line line3",d:"M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"})],-1)),ho=[mo];function fo(e,n,a,d,r,o){return i(),l("button",{type:"button",name:"Main menu",class:k(["menu",{clicked:!!a.showMenu}]),onClick:n[0]||(n[0]=(...s)=>o.clickMenu&&o.clickMenu(...s)),"aria-label":"Main Menu"},ho,2)}var vo=_(_o,[["render",fo],["__scopeId","data-v-08ac664e"]]);const bo={name:"App",inject:["$func"],components:{Home:De,Menu:po,MenuButton:vo,About:Je,Skills:ut,History:St,Works:bn,Info:Ln,FooterTopInfo:Nn,Footer:Wn},data(){return{showMenu:!1,initUserTheme:""}},computed:y(b({},S("theme",["userTheme"])),{assetsSrc(){const e={};return this.userTheme=="dark-theme"?(e.logo=this.$func.getImgUrl("logo"),e.menu=this.$func.getIconImgUrl("menu"),e.footer=this.$func.getImgUrl("logo-dark")):(e.logo=this.$func.getImgUrl("logo-dark"),e.menu=this.$func.getIconImgUrl("menu-dark"),e.footer=this.$func.getImgUrl("logo")),e}}),async created(){const e=await this.getLocalStorageTheme()||this.getMediaPreference();document.documentElement.className=e,this.setUserTheme(e)},methods:y(b({},A("theme",["getLocalStorageTheme","setUserTheme"])),{scrollToTop(){window.innerWidth<768?document.getElementById("avatar").scrollIntoView({behavior:"smooth"}):window.scroll({top:0,left:0,behavior:"smooth"})},toggleMenu(){this.showMenu=!this.showMenu},getMediaPreference(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark-theme":"light-theme"}})},ko={id:"app"},$o={class:"nav noselect"},yo=["src"],wo={id:"about-skills",class:"large-width-section"};function Io(e,n,a,d,r,o){const s=u("Menu"),g=u("MenuButton"),m=u("Home"),H=u("About"),z=u("Skills"),V=u("History"),R=u("Works"),O=u("Info"),G=u("FooterTopInfo"),W=u("Footer");return i(),l("div",ko,[t("nav",$o,[t("img",{id:"appLogo",class:"logo noselect",src:o.assetsSrc.logo,alt:"logo",onClick:n[0]||(n[0]=(...Y)=>o.scrollToTop&&o.scrollToTop(...Y))},null,8,yo),p(ne,null,{default:te(()=>[r.showMenu?(i(),T(s,{key:0,onClose:o.toggleMenu},null,8,["onClose"])):I("",!0)]),_:1}),p(g,{class:"noselect","show-menu":r.showMenu,onToggleMenu:o.toggleMenu},null,8,["show-menu","onToggleMenu"])]),p(m,{name:"home",class:"section"}),t("div",wo,[p(H,{name:"about",class:"small-width-section"}),p(z,{name:"skills",class:"small-width-section"})]),p(V,{name:"history",class:"section"}),p(R,{name:"works",class:"section"}),p(O,{id:"info-section",name:"info",class:"section"}),p(G),p(W,{id:"footer",class:"footer",src:o.assetsSrc.footer},null,8,["src"])])}var Po=_(bo,[["render",Io],["__scopeId","data-v-19c5c9ef"]]),xo={namespaced:!0,state:{userTheme:"light-theme"},mutations:{setUserTheme(e,n){e.userTheme=n}},actions:{setUserTheme(e,n){localStorage.setItem("user-theme",n),e.commit("setUserTheme",n)},getLocalStorageTheme(){return localStorage.getItem("user-theme")}}};const So=oe({modules:{theme:xo}}),jo="Hello",Co="I'm Brice",To="Brice",Mo="Full Stack Engineer",Do="Avatar by catalyststuff / freepik",Fo={paragraph_one:"Last year student in internship as a Full Stack developer, based in Lyon, France. Through my studies, my three years work experience and personal projects, I deepened my skills in creating websites using frameworks such as",paragraph_two:"In my free time, I try to discover new technologies. Currently, I'm working on a personal project using ",paragraph_three:"I'm looking for a new job oppotunity in ",yokohama:"Yokohama",tokyo:"Tokyo",japan:"Japan"},Lo="Download Resume",Ao="About",Bo="Skills",Uo={name:"History",title:{fiducial:"Fiducial Staffing",cpe:"CPE Lyon",conity:"Conity",dawson:"Dawson College",iut:"Institute of Technology"},description:{fiducial:"D\xE9veloppeur Full stack au sein de la DSI de Fiducial dans le bureau d'\xE9tudes des M\xE9tiers R\xE9glement\xE9s.",fiducial_2:"Affect\xE9 au pilotage et d\xE9veloppement de projets destin\xE9s au r\xE9seau d'expertise comptable de la firme.",cpe:"Informatique et R\xE9seaux de Communication (IRC) - Majeure Syst\xE8mes d'Informations (SI)",conity:"Stage effectu\xE9 en tant que d\xE9veloppeur full-stack et assureur qualit\xE9 chez Conity, solution num\xE9rique de suivi de projet de construction.",dawson:"Semestre d'\xE9change au Dawson College, effectu\xE9 en partenariat avec l'IUT Lyon 1",dawson_2:"Membre du club Dawson College Blues Athletics",iut:"Sp\xE9cialisation 2\xE8me ann\xE9e : Math\xE9matiques & Technologies Avanc\xE9es"}},qo="Works on Github",Eo="Info",No="EN",Ho="FR",zo="JA",Vo="Read More",Ro="projects",Oo="Realised with Vite.js, Travis CI & Freepik images";var Go={hello:jo,i_m_brice:Co,brice:To,full_stack_engineer:Mo,avatar:Do,description:Fo,download_resume:Lo,about:Ao,skills:Bo,history:Uo,works:qo,info:Eo,english:No,french:Ho,japanese:zo,read_more:Vo,projects:Ro,realised:Oo};const Wo="Bonjour, je suis",Yo="Brice",Jo="Brice",Ko="Ing\xE9nieur Full Stack",Qo="Avatar cr\xE9\xE9 par catalyststuff / freepik",Xo={paragraph_one:"\xC9tudiant en derni\xE8re ann\xE9e d'alternance en tant qu'ing\xE9nieur Full Stack, situ\xE9 \xE0 Lyon, France. Au travers de mes \xE9tudes et de mes trois ann\xE9es d'exp\xE9rience en entreprise ainsi que sur des projets personnels, j'ai pu approfondir mes comp\xE9tences dans la cr\xE9ation de site web en utilisant des frameworks tels que ",paragraph_two:"Durant mon temps libre, je cherche \xE0 d\xE9couvrir de nouvelles technologies. Actuellement, je travaille sur un projet personnel en utilisant les technologies ",paragraph_three:"Je suis \xE0 la recherche d'une opportunit\xE9 professionnelle \xE0 ",yokohama:"Yokohama",tokyo:"Yokohama",japan:"Japon."},Zo="T\xE9l\xE9charger mon CV",es="\xC0 propos",ts="Comp\xE9tences",ns={name:"Parcours",title:{fiducial:"Fiducial Staffing",cpe:"CPE Lyon",conity:"Conity",dawson:"Dawson College",iut:"Institute of Technology"},description:{fiducial:"Fiducial Staffing - Ing\xE9nieur Fullstack",cpe:"CPE Lyon - Ing\xE9nieur en informatique",conity:"Conity - D\xE9veloppeur & Assureur Qualit\xE9 Web",dawson:"Dawson College",iut:"IUT Lyon 1 - Sp\xE9cialit\xE9 Math\xE9matiques"}},os="Projets Github",ss="Infos",as="EN",rs="FR",is="JA",cs="Voir plus",ls="projets",ds="R\xE9alis\xE9 avec Vite.js, Travis CI & les images Freepik";var us={hello:Wo,i_m_brice:Yo,brice:Jo,full_stack_engineer:Ko,avatar:Qo,description:Xo,download_resume:Zo,about:es,skills:ts,history:ns,works:os,info:ss,english:as,french:rs,japanese:is,read_more:cs,projects:ls,realised:ds};const ps="\u3053\u3093\u306B\u3061\u306F",_s="\u30D6\u30E9\u30A4\u30B9\u3067\u3059\u3002",gs="\u30D6\u30E9\u30A4\u30B9",ms="\u30D5\u30EB\u30B9\u30BF\u30C3\u30AF\u30A8\u30F3\u30B8\u30CB\u30A2",hs="Avatar by catalyststuff / freepik",fs={paragraph_one:"Last year student in internship as a Full Stack developer, based in Lyon, France. Through my studies, my three years work experience and personal projects, I deepened my skills in creating websites using frameworks such as",paragraph_two:"In my free time, I try to discover new technologies. Currently, I'm working on a personal project using ",paragraph_three:"I'm looking for a new job oppotunity in ",yokohama:"Yokohama",tokyo:"Tokyo",japan:"Japan"},vs="\u5C65\u6B74\u66F8\u306E\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9",bs="About",ks="Skills",$s={name:"History",title:{fiducial:"Fiducial Staffing",cpe:"CPE Lyon",conity:"Conity",dawson:"Dawson College",iut:"Institute of Technology"},description:{fiducial:"D\xE9veloppeur Full stack au sein de la DSI de Fiducial dans le bureau d'\xE9tudes des M\xE9tiers R\xE9glement\xE9s (dont 3 ans d'alternance).",fiducial_2:"Principalement affect\xE9 au pilotage et d\xE9veloppement du projet de Suivi des Interlocuteurs et du module d'\xC9laboration Budg\xE9taire interne. Ai \xE9galement supervis\xE9 l'int\xE9gration et le d\xE9veloppement de stagiaires et employ\xE9s en reconversion professionnelle.",cpe:"CPE",conity:"Stage effectu\xE9 en tant que d\xE9veloppeur full-stack et assureur qualit\xE9 chez Conity, solution num\xE9rique de suivi de projet de construction.",dawson:"Dawson College",iut:"Institute of Technology"}},ys="Works on Github",ws="Info",Is="\u82F1\u8A9E",Ps="\u30D5\u30E9\u30F3\u30B9\u8A9E",xs="\u65E5\u672C\u8A9E",Ss="Read More",js="projects",Cs="Realised with Vite.js, Travis CI & Freepik images";var Ts={hello:ps,i_m_brice:_s,brice:gs,full_stack_engineer:ms,avatar:hs,description:fs,download_resume:vs,about:bs,skills:ks,history:$s,works:ys,info:ws,english:Is,french:Ps,japanese:xs,read_more:Ss,projects:js,realised:Cs};const x=se({legacy:!0,globalInjection:!0,locale:"en",fallbackLocale:"en",messages:{en:Go,fr:us,ja:Ts}});var Ms="/portfolio/assets/briefcase.22c2ca24.svg",Ds="/portfolio/assets/docker.362bc087.svg",Fs="/portfolio/assets/email-dark.d4275cbd.svg",Ls="/portfolio/assets/email.75073418.svg",As="/portfolio/assets/freepik.471d2990.svg",Bs="/portfolio/assets/github-dark.7a330b49.svg",Us="/portfolio/assets/github.921145a1.svg",qs="/portfolio/assets/graduation-cap.a590a512.svg",Es="/portfolio/assets/js.ec8acd65.svg",Ns="/portfolio/assets/linkedin-dark.3f8477bc.svg",Hs="/portfolio/assets/linkedin.7a7a5923.svg",zs="/portfolio/assets/menu-dark.80311574.svg",Vs="/portfolio/assets/menu.b9597e4d.svg",Rs="/portfolio/assets/python.fbc3b698.svg",Os="/portfolio/assets/spring-boot.8f9ccd66.svg",Gs="/portfolio/assets/symfony.921e9a28.svg",Ws="/portfolio/assets/travis-ci.1d618cd8.svg",Ys="/portfolio/assets/vitejs.0ca45da0.svg",Js="/portfolio/assets/vue.b4cdca4a.svg",Ks=`/* color palette from <https://github.com/vuejs/theme> */

:root {
    --vt-c-white: #ffffff;
    --vt-c-white-soft: #f5f5f5;
    --vt-c-light: #efefef;
    --vt-c-grey: #d0d0d0;
    --vt-c-grey-dark: #aeaeae;
    --vt-c-black: #14151c;
    --vt-c-black-soft: #1d1e27;
    --vt-c-text-light-1: var(--vt-c-indigo);
    --vt-c-text-light-2: rgba(60, 60, 60, 0.66);
    --vt-c-text-dark-1: var(--vt-c-white);
    --vt-c-text-dark-2: rgba(235, 235, 235, 0.64);
}


/* semantic color variables for this project */

:root {
    --color-background: var(--vt-c-light);
    --color-background-emphasis: var(--vt-c-white);
    --color-background-reverse: var(--vt-c-black);
    --color-background-soft: var(--vt-c-white);
    --color-background-dark: var(--vt-c-black);
    --color-borders: var(--vt-c-grey);
    --color-link-borders: var(--vt-c-grey);
    --color-primary: var(--primary);
    --color-primary-light: var(--indigo);
    --color-primary-background: #e1eff8;
    --color-background-project: var(--vt-c-white);
    --color-tag-background: #e1eff8;
    --color-tag-text: var(--primary);
    --color-text: var(--vt-c-black-soft);
    --color-text-hover: var(--vt-c-black);
    --color-grey: var(--vt-c-grey);
    --element-size: 4rem;
}

:root.dark-theme {
    --color-background: var(--vt-c-black);
    --color-background-emphasis: var(--vt-c-black);
    --color-background-reverse: var(--vt-c-light);
    --color-background-soft: var(--vt-c-black-soft);
    --color-borders: var(--vt-c-black-soft);
    --color-link-borders: var(--vt-c-grey);
    --color-primary: var(--indigo);
    --color-primary-light: var(--primary);
    --color-primary-background: #343646;
    --color-background-project: var(--vt-c-white);
    --color-tag-background: #ffe7fa;
    --color-tag-text: var(--indigo);
    --color-text: var(--vt-c-white-soft);
    --color-text-hover: var(--vt-c-white);
    --color-grey: var(--vt-c-grey-dark);
}

*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
    position: relative;
    font-weight: normal;
}

body {
    min-height: 100vh;
    color: var(--color-text);
    background: var(--color-background);
    transition: color 0.2s, background-color 0.5s;
    line-height: 1.6;
    font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-size: 15px;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}


/* Headings */

h2.h-center {
    text-align: center;
    margin-bottom: 1em;
}

.mb-60 {
    margin-bottom: 60px;
}

.w-80 {
    width: 80vw;
}


/* Fade in top animation */

.fade-in-top {
    -webkit-animation: fadeintop 3s;
    /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadeintop 3s;
    /* Firefox < 16 */
    -ms-animation: fadeintop 3s;
    /* Internet Explorer */
    -o-animation: fadeintop 3s;
    /* Opera < 12.1 */
    animation: fadeintop 3s;
}

@keyframes fadeintop {
    from {
        opacity: 0;
        top: -20px;
    }
    to {
        opacity: 1;
        top: 0px;
    }
}


/* Firefox < 16 */

@-moz-keyframes fadeintop {
    from {
        opacity: 0;
        top: -20px;
    }
    to {
        opacity: 1;
        top: 0px;
    }
}


/* Safari, Chrome and Opera > 12.1 */

@-webkit-keyframes fadeintop {
    from {
        opacity: 0;
        top: -20px;
    }
    to {
        opacity: 1;
        top: 0px;
    }
}


/* Internet Explorer */

@-ms-keyframes fadeintop {
    from {
        opacity: 0;
        top: -20px;
    }
    to {
        opacity: 1;
        top: 0px;
    }
}


/* Opera < 12.1 */

@-o-keyframes fadeintop {
    from {
        opacity: 0;
        top: -20px;
    }
    to {
        opacity: 1;
        top: 0px;
    }
}


/* No select element */

.noselect {
    -webkit-touch-callout: none;
    /* iOS Safari */
    -webkit-user-select: none;
    /* Safari */
    -khtml-user-select: none;
    /* Konqueror HTML */
    -moz-user-select: none;
    /* Old versions of Firefox */
    -ms-user-select: none;
    /* Internet Explorer/Edge */
    user-select: none;
    /* Non-prefixed version, currently
                                  supported by Chrome, Opera and Firefox */
}


/* Emphasis text */

.emphasis-txt {
    padding: 0.25em 0.5em 0.35em 0.5em;
    -webkit-transition: all 0.4s ease;
    transition: all 0.4s ease;
    background-color: var(--color-background-soft);
    border-radius: 1em;
    color: var(--color-text);
}

.emphasis-txt:hover {
    -webkit-transition: all 0.4s ease;
    transition: all 0.4s ease;
    background-color: var(--color-tag-background);
    color: var(--color-tag-text);
}


/* Icons with grayscale effect */

.icon-img {
    margin: 2em;
    width: 30px;
    height: 30px;
    filter: grayscale();
    transition: filter 0.2s ease-in-out;
}

.icon-img:hover {
    filter: none;
}


/* Action Button */

.action-btn {
    background-color: var(--color-background-soft);
    border: 2px solid var(--color-background-reverse);
    border-radius: 20px;
    cursor: pointer;
    color: var(--color-text);
    font-weight: 600;
    height: fit-content;
    margin: 1.5em 2em 2em 2em;
    outline: none;
    padding: 10px 20px;
    text-align: center;
    transition: all 0.2s ease-in-out;
}

.action-btn:hover {
    background-color: var(--color-primary);
    box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.4);
    border: 2px solid var(--color-primary);
    color: var(--vt-c-white);
    text-decoration: none;
}

.action-link {
    cursor: pointer;
    color: var(--color-text);
    /* outline: none; */
    transition: all 0.2s ease-in-out;
}

.action-link:hover {
    color: var(--color-primary);
    text-decoration: none;
}

.snip1135 {
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 0;
}

.snip1135 * {
    box-sizing: border-box;
}

.snip1135 li {
    cursor: pointer;
    font-size: clamp(14px, 1vw, 1vw);
    display: inline-block;
    list-style: outside none none;
    margin: 0 0.5em;
    padding: 0;
}

.snip1135 a {
    padding: 0.5em 0;
    position: relative;
    letter-spacing: 1px;
    text-decoration: none;
}

.snip1135 a:before,
.snip1135 a:after {
    /* Underline effect */
    position: absolute;
    -webkit-transition: all 0.35s ease-in-out;
    transition: all 0.35s ease-in-out;
}

.snip1135 a:before {
    bottom: 0;
    display: block;
    height: 3px;
    width: 0%;
    content: "";
    background-color: var(--color-primary);
}

.snip1135 a:after {
    left: 0;
    top: 0;
    padding: 0.5em 0;
    position: absolute;
    content: attr(data-hover);
    color: #ffffff;
    white-space: nowrap;
    max-width: 0%;
    overflow: hidden;
}

.snip1135 a:hover:before,
.snip1135 .active a:before {
    opacity: 1;
    width: 100%;
}

.snip1135 a:hover:after,
.snip1135 .active a:after {
    max-width: 100%;
}

@media (max-width:768px) {
    .mb-60 {
        margin-bottom: 2vh;
    }
    .small-icon-img {
        margin: 0.5em;
        height: 20px;
    }
    h2.h-center {
        margin-top: 1.5em;
        margin-bottom: 0.5rem;
    }
}`,Qs="/portfolio/assets/cv.32cbbe70.pdf",Xs="/portfolio/assets/logo-dark.6f808d03.svg",Zs="/portfolio/assets/logo.28a0162b.svg",ea={getImgUrl:(e,n="svg")=>new URL({"/src/assets/avatar.jpg":B,"/src/assets/base.css":Ks,"/src/assets/cv.pdf":Qs,"/src/assets/logo-dark.svg":Xs,"/src/assets/logo.svg":Zs}[`/src/assets/${e}.${n}`],self.location).href,getIconImgUrl:e=>new URL({"/src/assets/icons/briefcase.svg":Ms,"/src/assets/icons/docker.svg":Ds,"/src/assets/icons/email-dark.svg":Fs,"/src/assets/icons/email.svg":Ls,"/src/assets/icons/freepik.svg":As,"/src/assets/icons/github-dark.svg":Bs,"/src/assets/icons/github.svg":Us,"/src/assets/icons/graduation-cap.svg":qs,"/src/assets/icons/js.svg":Es,"/src/assets/icons/linkedin-dark.svg":Ns,"/src/assets/icons/linkedin.svg":Hs,"/src/assets/icons/menu-dark.svg":zs,"/src/assets/icons/menu.svg":Vs,"/src/assets/icons/python.svg":Rs,"/src/assets/icons/spring-boot.svg":Os,"/src/assets/icons/symfony.svg":Gs,"/src/assets/icons/travis-ci.svg":Ws,"/src/assets/icons/vitejs.svg":Ys,"/src/assets/icons/vue.svg":Js}[`/src/assets/icons/${e}.svg`],self.location).href,formatDate:(e,n)=>{if(P.locale(x.global.locale),n){const a=P(e).format("MMM YYYY");return x.global.locale==="ja"?a+"\u5E74":a}else return x.global.locale==="en"?P(e).format("MMM Do YY"):P(e).format("ll")}};ae.add(re);ie.watch();ce(Po).use(So).use(x).use(le).component("font-awesome-icon",de).provide("$func",ea).mount("#app");
