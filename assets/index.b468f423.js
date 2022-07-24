var Q=Object.defineProperty,X=Object.defineProperties;var Z=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var ee=Object.prototype.hasOwnProperty,te=Object.prototype.propertyIsEnumerable;var A=(e,n,a)=>n in e?Q(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,b=(e,n)=>{for(var a in n||(n={}))ee.call(n,a)&&A(e,a,n[a]);if(L)for(var a of L(n))te.call(n,a)&&A(e,a,n[a]);return e},y=(e,n)=>X(e,Z(n));import{l as ne,r as u,o as i,c as T,a as l,p as h,b as f,d as t,e as p,t as c,n as k,f as w,F as v,g as $,h as I,m as j,i as B,w as oe,T as se,j as ae,k as re,q as P,s as ie,_ as ce,u as le,v as de,V as ue,x as pe}from"./vendor.fef573d5.js";const _e=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))d(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&d(s)}).observe(document,{childList:!0,subtree:!0});function a(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(r){if(r.ep)return;r.ep=!0;const o=a(r);fetch(r.href,o)}};_e();var _=(e,n)=>{const a=e.__vccOpts||e;for(const[d,r]of n)a[d]=r;return a};const ge={name:"ParticlesComponent",data(){return{particlesInit:null,particlesLoaded:null}},computed:{isSmallScreen(){return window.innerWidth<768}},created(){this.particlesInit=async e=>{await ne(e)}}};function me(e,n,a,d,r,o){const s=u("Particles",!0);return i(),T(s,{id:"tsparticles",particlesInit:r.particlesInit,particlesLoaded:r.particlesLoaded,options:{background:{color:{value:"black"}},fpsLimit:120,interactivity:{detectsOn:"window",events:{onClick:{enable:!0,mode:"push"},onHover:{enable:!0,mode:"repulse"},resize:!0},modes:{bubble:{distance:200,duration:2,opacity:.8,size:20},push:{default:!0,groups:[],quantity:4,speed:2,maxSpeed:10},repulse:{distance:100,duration:.4,factor:100,speed:2,maxSpeed:10,easing:"ease-out-quad",divs:{distance:200,duration:.4,factor:100,speed:1,maxSpeed:50,easing:"ease-out-quad",selectors:[]}}}},particles:{color:{value:["#ff6f91","#f9f871","#d65db1","6fbffd"]},collisions:{enable:!0},move:{collisions:!0,direction:"none",enable:!0,outMode:"bounce",random:!1,speed:2,straight:!1},number:{density:{enable:!0,value_area:800},value:o.isSmallScreen?30:60},opacity:{value:.6},shape:{type:"circle"},size:{random:!0,value:5}},detectRetina:!0}},null,8,["particlesInit","particlesLoaded","options"])}var he=_(ge,[["render",me]]);const fe={},M=e=>(h("data-v-cbef9b38"),e=e(),f(),e),ve={class:"container"},be=M(()=>t("div",{class:"chevron"},null,-1)),ke=M(()=>t("div",{class:"chevron"},null,-1)),$e=M(()=>t("div",{class:"chevron"},null,-1)),ye=[be,ke,$e];function we(e,n){return i(),l("div",ve,ye)}var Ie=_(fe,[["render",we],["__scopeId","data-v-cbef9b38"]]),D="/portfolio/assets/avatar.f8961f25.jpg",q="/portfolio/assets/avatar-250.3ccff08a.jpg",U="/portfolio/assets/avatar-350.8f42c870.jpg";const Pe={name:"ProfileComponent",inject:["$func"],components:{Particles:he,ScrollDown:Ie}},xe=q+" 250w, "+U+" 350w, "+D+" 512w",je={class:"noselect"},Se=["title"],Ce={class:"smaller"},Te={class:"emphasis-txt big-emphasis"};function Me(e,n,a,d,r,o){const s=u("Particles"),g=u("ScrollDown");return i(),l("main",null,[p(s),t("div",je,[t("img",{srcset:xe,sizes:"(max-width: 768px) 250px, (min-width: 768px) and (max-width: 2000px) 512px, (min-width: 2000px) 512px",id:"avatar",class:"profile-img fade-in-top noselect",src:D,alt:"Avatar",title:e.$t("avatar"),ref:"img"},null,8,Se)]),t("div",{class:k(["profile-text fade-in-top",{smaller:e.$i18n.locale==="ja"}])},[t("h1",null,c(e.$t("hello")),1),t("h1",Ce,c(e.$t("i_m_brice")),1),t("p",Te,c(e.$t("full_stack_engineer")),1),p(g)],2)])}var De=_(Pe,[["render",Me],["__scopeId","data-v-234c0a12"]]);const Fe={name:"HomeSection",components:{Profile:De}};function Le(e,n,a,d,r,o){const s=u("Profile");return i(),l("div",null,[p(s)])}var Ae=_(Fe,[["render",Le],["__scopeId","data-v-a97107a6"]]);const Be={name:"DescriptionComponent"},S=e=>(h("data-v-22308f00"),e=e(),f(),e),qe={class:"mb-0"},Ue=S(()=>t("span",{class:"emphasis-txt"}," Vue.js,\xA0Symfony\xA0&\xA0Spring boot.",-1)),Ee=S(()=>t("br",null,null,-1)),Ne={class:"mb-0"},ze=S(()=>t("span",{class:"emphasis-txt"},"Django\xA0&\xA0Docker",-1)),He=S(()=>t("br",null,null,-1)),Ve={class:"mb-0"},Re={class:"emphasis-txt"};function Oe(e,n,a,d,r,o){return i(),l("div",null,[t("article",null,[t("p",qe,[w(c(e.$t("description.paragraph_one"))+" ",1),Ue]),Ee,t("p",Ne,[w(c(e.$t("description.paragraph_two"))+" ",1),ze]),He,t("p",Ve,[w(c(e.$t("description.paragraph_three"))+" ",1),t("span",Re,c(e.$t("description.yokohama"))+"\xA0/\xA0"+c(e.$t("description.tokyo"))+",\xA0"+c(e.$t("description.japan")),1)])])])}var Ge=_(Be,[["render",Oe],["__scopeId","data-v-22308f00"]]);const We={name:"AboutSection",components:{Description:Ge}},Ye={class:"flex-div"},Je=t("span",{id:"about",class:"mb-60"},null,-1),Ke={class:"h-center"};function Qe(e,n,a,d,r,o){const s=u("Description");return i(),l("div",Ye,[Je,t("h2",Ke,c(e.$t("about")),1),p(s,{class:"w-80"})])}var Xe=_(We,[["render",Qe]]);const Ze={name:"SkillsComponent",inject:["$func"],data(){return{skillImages:[{title:"JavaScript",src:"js"},{title:"Vue.js",src:"vue"},{title:"Symfony Framework",src:"symfony"},{title:"Python",src:"python"},{title:"Spring Boot Framework",src:"spring-boot"},{title:"Docker",src:"docker"}]}},computed:{cvUrl(){return new URL("/portfolio/assets/cv.32cbbe70.pdf",self.location).href}}},et=e=>(h("data-v-2bc702d2"),e=e(),f(),e),tt={class:"skills-container"},nt={class:"flex-icons w-80"},ot=["title","src","alt"],st=["href"],at=et(()=>t("i",{class:"mr-1 fa fa-download"},null,-1));function rt(e,n,a,d,r,o){return i(),l("div",tt,[t("div",nt,[(i(!0),l(v,null,$(r.skillImages,s=>(i(),l("img",{key:s.title,class:"icon-img",loading:"lazy",title:s.title,src:o.$func.getIconImgUrl(s.src),alt:s.title},null,8,ot))),128)),t("a",{class:"action-btn",href:o.cvUrl,download:"cv-folleas-brice.pdf"},[at,w(" "+c(e.$t("download_resume")),1)],8,st)])])}var it=_(Ze,[["render",rt],["__scopeId","data-v-2bc702d2"]]);const ct={name:"SkillsSection",components:{Skills:it}},E=e=>(h("data-v-141c2b2e"),e=e(),f(),e),lt={id:"skillsDiv",class:"flex-div"},dt=E(()=>t("span",{id:"skills",class:"mb-60"},null,-1)),ut={class:"h-center"},pt=E(()=>t("p",{class:"mb-skills"},null,-1));function _t(e,n,a,d,r,o){const s=u("Skills",!0);return i(),l("div",lt,[dt,t("h2",ut,c(e.$t("skills")),1),pt,p(s,{class:"w-80"})])}var gt=_(ct,[["render",_t],["__scopeId","data-v-141c2b2e"]]);const mt={inject:["$func"],props:{eventList:{type:Array,required:!0}},data(){return{activeEvent:this.eventList[0]}},methods:{setActiveTab(e){this.activeEvent=e},isThereHistoryDescriptionPart2(e){return!!this.$i18n.messages.en.history.description[e]}}},ht=e=>(h("data-v-3390fbcc"),e=e(),f(),e),ft={class:"history-tabs"},vt={class:"event-selector snip1135"},bt=["onClick"],kt={class:"link"},$t={key:0,class:"event-container"},yt={class:"project-module-title"},wt=ht(()=>t("br",null,null,-1)),It={key:0,class:"mt-2"};function Pt(e,n,a,d,r,o){return i(),l("div",ft,[t("ul",vt,[(i(!0),l(v,null,$(a.eventList,s=>(i(),l("li",{key:s.id,onClick:g=>o.setActiveTab(s),class:k({active:r.activeEvent===s})},[t("p",kt,c(e.$t("history.title."+s.title)),1)],10,bt))),128))]),r.activeEvent?(i(),l("article",$t,[t("div",yt,[t("h3",null,c(e.$t("history.title."+r.activeEvent.title)),1)]),t("p",null,c(o.$func.formatDate(r.activeEvent.beginDate))+" - "+c(o.$func.formatDate(r.activeEvent.endDate)),1),wt,t("p",null,c(e.$t("history.description."+r.activeEvent.title)),1),o.isThereHistoryDescriptionPart2(r.activeEvent.title+"_2")?(i(),l("p",It,c(e.$t("history.description."+r.activeEvent.title+"_2")),1)):I("",!0)])):I("",!0)])}var xt=_(mt,[["render",Pt],["__scopeId","data-v-3390fbcc"]]);const jt={name:"HistorySection",inject:["$func"],components:{AppTabs:xt},data(){return{events:[{id:1,title:"fiducial",beginDate:new Date(2019,9),endDate:new Date,type:"work"},{id:2,title:"cpe",beginDate:new Date(2019,9),endDate:new Date(2022,7),type:"graduation"},{id:3,title:"conity",beginDate:new Date(2019,4),endDate:new Date(2019,9),type:"work"},{id:3,title:"dawson",beginDate:new Date(2019,1),endDate:new Date(2019,4),type:"graduation"},{id:4,title:"iut",beginDate:new Date(2017,9),endDate:new Date(2019,1),type:"graduation"}]}}},St={class:"flex-div"},Ct={class:"h-center"};function Tt(e,n,a,d,r,o){const s=u("AppTabs");return i(),l("div",St,[t("h2",Ct,c(e.$t("history.name")),1),p(s,{eventList:r.events},null,8,["eventList"])])}var Mt=_(jt,[["render",Tt]]);const Dt="b-folleas",Ft="https://api.github.com";var Lt={async getAllProjects(){return(await fetch(`${Ft}/users/${Dt}/repos?sort=created`)).json()}};const At={name:"ProjectModuleComponent",inject:["$func"],props:{name:{type:String,required:!0},url:{type:String,required:!0},description:{type:String,default:"Lorem ipsum",required:!1},language:{type:String,required:!1},topics:{type:Array,required:!1},date:{type:String,required:!1}},computed:y(b({},j("theme",["userTheme"])),{assetsSrc(){return this.userTheme=="dark-theme"?this.$func.getIconImgUrl("github"):this.$func.getIconImgUrl("github-dark")}}),methods:{goToProject(e){window.location.href=e}}},N=e=>(h("data-v-651b81a4"),e=e(),f(),e),Bt={class:"project-container"},qt={class:"project-module-header"},Ut={class:"project-module-title"},Et=["name"],Nt=N(()=>t("i",{class:"fa fa-bold fa-arrow-up-right-from-square"},null,-1)),zt=[Nt],Ht={key:0},Vt=N(()=>t("i",{class:"fa fa-code"},null,-1)),Rt={key:0};function Ot(e,n,a,d,r,o){var s;return i(),l("article",Bt,[t("div",qt,[t("div",Ut,[t("h3",null,c(a.name),1),t("button",{class:"round-btn",type:"button",name:`Link to project ${a.name}`,onClick:n[0]||(n[0]=g=>o.goToProject(a.url)),"aria-label":"Link to project"},zt,8,Et)]),a.language?(i(),l("em",Ht,[Vt,w(" "+c(a.language),1)])):I("",!0)]),t("p",null,c(o.$func.formatDate(a.date)),1),t("p",null,c(a.description),1),((s=a.topics)==null?void 0:s.length)>0?(i(),l("div",Rt,[(i(!0),l(v,null,$(a.topics,g=>(i(),l("p",{class:"chip",key:g},c(g),1))),128))])):I("",!0)])}var Gt=_(At,[["render",Ot],["__scopeId","data-v-651b81a4"]]);const Wt={name:"PaginationComponent",props:{maxVisibleButtons:{type:Number,required:!1,default:4},totalPages:{type:Number,required:!0},perPage:{type:Number,required:!0},currentPage:{type:Number,required:!0}},computed:{startPage(){return this.currentPage===1?1:this.currentPage===this.totalPages?this.totalPages-this.maxVisibleButtons+(this.totalPages/this.currentPage===0?1:2):this.currentPage-1},pages(){const e=[];for(let n=this.startPage;n<=Math.min(this.startPage+this.maxVisibleButtons-1,this.totalPages);n++)e.push({name:n,isDisabled:n===this.currentPage});return e},isInFirstPage(){return this.currentPage===1},isInLastPage(){return this.currentPage===this.totalPages}},methods:{onClickFirstPage(){this.$emit("pagechanged",1)},onClickPreviousPage(){this.$emit("pagechanged",this.currentPage-1)},onClickPage(e){this.$emit("pagechanged",e)},onClickNextPage(){this.$emit("pagechanged",this.currentPage+1)},onClickLastPage(){this.$emit("pagechanged",this.totalPages)},isPageActive(e){return this.currentPage===e}}},C=e=>(h("data-v-0f14d390"),e=e(),f(),e),Yt={class:"pagination"},Jt={class:"pagination-item"},Kt=["disabled"],Qt=C(()=>t("i",{class:"fa-solid fa-backward-fast"},null,-1)),Xt=[Qt],Zt={class:"pagination-item"},en=["disabled"],tn=C(()=>t("i",{class:"fa-solid fa-backward-step"},null,-1)),nn=[tn],on=["name","onClick","disabled","aria-label"],sn={class:"pagination-item"},an=["disabled"],rn=C(()=>t("i",{class:"fa-solid fa-forward-step"},null,-1)),cn=[rn],ln={class:"pagination-item"},dn=["disabled"],un=C(()=>t("i",{class:"fa-solid fa-forward-fast"},null,-1)),pn=[un];function _n(e,n,a,d,r,o){return i(),l("ul",Yt,[t("li",Jt,[t("button",{name:"Go to first page",type:"button",onClick:n[0]||(n[0]=(...s)=>o.onClickFirstPage&&o.onClickFirstPage(...s)),disabled:o.isInFirstPage,"aria-label":"Go to first page"},Xt,8,Kt)]),t("li",Zt,[t("button",{name:"Go to previous page",type:"button",onClick:n[1]||(n[1]=(...s)=>o.onClickPreviousPage&&o.onClickPreviousPage(...s)),disabled:o.isInFirstPage,"aria-label":"Go to previous page"},nn,8,en)]),(i(!0),l(v,null,$(o.pages,s=>(i(),l("li",{class:"pagination-item",key:s.name},[t("button",{name:`Go to page number ${s.name}`,type:"button",onClick:g=>o.onClickPage(s.name),disabled:s.isDisabled,class:k({active:o.isPageActive(s.name)}),"aria-label":`Go to page number ${s.name}`},c(s.name),11,on)]))),128)),t("li",sn,[t("button",{name:"Go to next page",type:"button",onClick:n[2]||(n[2]=(...s)=>o.onClickNextPage&&o.onClickNextPage(...s)),disabled:o.isInLastPage,"aria-label":"Go to next page"},cn,8,an)]),t("li",ln,[t("button",{type:"button",onClick:n[3]||(n[3]=(...s)=>o.onClickLastPage&&o.onClickLastPage(...s)),disabled:o.isInLastPage,name:"Go to last page","aria-label":"Go to last page"},pn,8,dn)])])}var gn=_(Wt,[["render",_n],["__scopeId","data-v-0f14d390"]]);const mn={name:"WorksSection",components:{ProjectModule:Gt,Pagination:gn},data:()=>({projects:[],filteredProjects:[],currentProjects:[],currentPage:1,perPage:4,totalPages:10}),computed:{projectsNumbers(){const e=(this.currentPage-1)*this.perPage+1;return this.currentPage===this.totalPages?e===this.filteredProjects.length?e:e+" - "+this.filteredProjects.length:e+" - "+(e+(this.perPage-1))}},async created(){var e;this.projects=await Lt.getAllProjects(),this.filteredProjects=this.projects.filter(n=>!n.archived),this.currentProjects=this.currentProjects=this.getProjectsByPage(this.currentPage,this.perPage),this.totalPages=(e=this.filteredProjects)!=null&&e.length?Math.floor(this.filteredProjects.length/this.perPage):0,this.totalPages+=this.filteredProjects.length/this.perPage!==0?1:0},methods:{async onPageChange(e){document.getElementById("works").scrollIntoView({behavior:"smooth"}),this.currentPage=e,this.currentProjects=this.getProjectsByPage(this.currentPage,this.perPage)},getProjectsByPage(e,n){const a=(e-1)*n;return this.filteredProjects.slice(a,a+n)}}},z=e=>(h("data-v-64de5a86"),e=e(),f(),e),hn={class:"flex-div"},fn=z(()=>t("span",{id:"works",class:"mb-60"},null,-1)),vn={class:"h-center"},bn={class:"mt-3 flex-div"},kn={class:"project-div"},$n=z(()=>t("br",null,null,-1));function yn(e,n,a,d,r,o){const s=u("ProjectModule"),g=u("pagination");return i(),l("div",hn,[fn,t("h2",vn,c(e.$t("works")),1),t("div",bn,[t("div",kn,[(i(!0),l(v,null,$(e.currentProjects,m=>(i(),T(s,{key:m.id,name:m.name,description:m.description,url:m.svn_url,language:m.language,topics:m.topics,date:m.updated_at,class:k(["module",{centersection:m!==e.currentProjects[0]}])},null,8,["name","description","url","language","topics","date","class"]))),128))]),t("span",null,c(o.projectsNumbers)+" / "+c(e.filteredProjects.length)+" "+c(e.$t("projects")),1),$n,p(g,{class:"pagination",totalPages:e.totalPages,perPage:e.perPage,currentPage:e.currentPage,onPagechanged:o.onPageChange},null,8,["totalPages","perPage","currentPage","onPagechanged"])])])}var wn=_(mn,[["render",yn],["__scopeId","data-v-64de5a86"]]);const In={name:"FindMeIconsComponent",inject:["$func"],props:{title:{type:String,required:!0},content:{type:String,required:!0},link:{type:String,required:!1}},computed:y(b({},j("theme",["userTheme"])),{assetsSrc(){const e={};return this.userTheme=="dark-theme"?(e.email=this.$func.getIconImgUrl("email"),e.linkedin=this.$func.getIconImgUrl("linkedin"),e.github=this.$func.getIconImgUrl("github")):(e.email=this.$func.getIconImgUrl("email-dark"),e.linkedin=this.$func.getIconImgUrl("linkedin-dark"),e.github=this.$func.getIconImgUrl("github-dark")),e}}),methods:{openLink(){window.open(this.link,"_blank","noopener")}}},Pn=e=>(h("data-v-141b3794"),e=e(),f(),e),xn={class:"find-me-icons-header"},jn=["src","alt"],Sn=Pn(()=>t("div",{class:"horizontal-divider"},null,-1));function Cn(e,n,a,d,r,o){return i(),l("div",{class:"find-me-icons-main-container",onClick:n[0]||(n[0]=(...s)=>o.openLink&&o.openLink(...s))},[t("div",xn,[t("img",{src:o.assetsSrc[a.title],alt:a.title,loading:"lazy"},null,8,jn),Sn,t("strong",null,c(a.title),1)]),t("p",null,c(a.content),1)])}var Tn=_(In,[["render",Cn],["__scopeId","data-v-141b3794"]]);const Mn={name:"InfoSection",components:{FindMeIcons:Tn}},Dn=e=>(h("data-v-1c767780"),e=e(),f(),e),Fn={class:"main-container"},Ln=Dn(()=>t("span",{id:"info",class:"mb-60"},null,-1)),An={class:"h-center"},Bn={class:"flex-container"};function qn(e,n,a,d,r,o){const s=u("FindMeIcons");return i(),l("div",Fn,[Ln,t("h2",An,c(e.$t("info")),1),t("div",Bn,[p(s,{title:"email",content:"brice.folleas@gmail.com",link:"mailto:brice.folleas@gmail.com"}),p(s,{title:"linkedin",content:"brice-foll\xE9as",link:"https://www.linkedin.com/in/brice-foll\xE9as/"}),p(s,{title:"github",content:"b-folleas",link:"https://github.com/b-folleas"})])])}var Un=_(Mn,[["render",qn],["__scopeId","data-v-1c767780"]]);const En={name:"FooterTopInfoComponent",inject:["$func"],data(){return{techImages:[{title:"Vite JS",src:"vitejs"},{title:"Travis CI",src:"travis-ci"},{title:"Freepik",src:"freepik"}]}}},Nn={class:"footer-top-info"},zn={class:"h-center mb-0"},Hn=["title","src","alt"];function Vn(e,n,a,d,r,o){return i(),l("div",Nn,[t("p",zn,c(e.$t("realised")),1),(i(!0),l(v,null,$(r.techImages,s=>(i(),l("img",{key:s.title,title:s.title,class:"icon-img small-icon-img",loading:"lazy",src:o.$func.getIconImgUrl(s.src),alt:s.title},null,8,Hn))),128))])}var Rn=_(En,[["render",Vn]]);const On={name:"FooterSection",props:{src:{type:String,required:!0}}},H=e=>(h("data-v-b6785bf0"),e=e(),f(),e),Gn={class:"main-footer"},Wn=["src"],Yn=H(()=>t("div",{class:"vertical-divider noselect"},null,-1)),Jn=H(()=>t("div",null,[t("h4",{class:"mt-1 bg-color"},"\xA9 2022")],-1));function Kn(e,n,a,d,r,o){return i(),l("div",null,[t("footer",null,[t("div",Gn,[t("img",{src:a.src,alt:"logo"},null,8,Wn),Yn,t("h3",null,c(e.$t("brice")),1)]),Jn])])}var Qn=_(On,[["render",Kn],["__scopeId","data-v-b6785bf0"]]);const Xn={name:"ThemeButtonComponent",computed:b({},j("theme",["userTheme"])),methods:y(b({},B("theme",["setUserTheme"])),{toggleTheme(){localStorage.getItem("user-theme")==="light-theme"?this.setTheme("dark-theme"):this.setTheme("light-theme")},setTheme(e){document.documentElement.className=e,this.setUserTheme(e)}})},F=e=>(h("data-v-053ca33a"),e=e(),f(),e),Zn={for:"checkbox",class:"switch-label noselect"},eo=F(()=>t("span",{class:"noselect"},"\u{1F319}",-1)),to=F(()=>t("span",{class:"noselect"},"\xA0",-1)),no=F(()=>t("span",{class:"noselect"},"\u2600\uFE0F",-1));function oo(e,n,a,d,r,o){return i(),l(v,null,[t("input",{onChange:n[0]||(n[0]=(...s)=>o.toggleTheme&&o.toggleTheme(...s)),id:"checkbox",type:"checkbox",class:"switch-checkbox"},null,32),t("label",Zn,[eo,to,no,t("div",{class:k(["switch-toggle",{"switch-toggle-checked":e.userTheme==="dark-theme"}])},null,2)])],64)}var so=_(Xn,[["render",oo],["__scopeId","data-v-053ca33a"]]);const ao={name:"SelectButtonComponent",data(){return{languages:[{key:"fr",name:"french"},{key:"en",name:"english"},{key:"ja",name:"japanese"}]}},computed:{currentLanguage(){return this.$i18n.locale}}},ro={class:"snip1135"},io=["onClick"];function co(e,n,a,d,r,o){return i(),l("ul",ro,[(i(!0),l(v,null,$(r.languages,s=>(i(),l("li",{key:s.key,class:k({active:o.currentLanguage===s.key})},[t("a",{class:"link",onClick:g=>e.$i18n.locale=s.key},c(e.$t(s.name)),9,io)],2))),128))])}var lo=_(ao,[["render",co],["__scopeId","data-v-563051ba"]]);const uo={name:"MenuComponent",components:{ThemeButton:so,SelectButton:lo},emits:["close"]},po={class:"snip1217"},_o={id:"themeBtn"},go={id:"selectBtn"};function mo(e,n,a,d,r,o){const s=u("ThemeButton"),g=u("SelectButton");return i(),l("ul",po,[t("li",null,[t("a",{onClick:n[0]||(n[0]=m=>e.$emit("close")),href:"#about"},c(e.$t("about")),1)]),t("li",null,[t("a",{onClick:n[1]||(n[1]=m=>e.$emit("close")),href:"#works"},c(e.$t("works")),1)]),t("li",null,[t("a",{onClick:n[2]||(n[2]=m=>e.$emit("close")),href:"#info"},c(e.$t("info")),1)]),t("li",_o,[p(s)]),t("li",go,[p(g)])])}var ho=_(uo,[["render",mo],["__scopeId","data-v-2f246125"]]);const fo={name:"MenuButton",props:{showMenu:{type:Boolean,required:!0}},data(){return{clicked:!1}},methods:{clickMenu(){this.clicked=!this.clicked,this.$emit("toggleMenu")}}},vo=e=>(h("data-v-08ac664e"),e=e(),f(),e),bo=vo(()=>t("svg",{width:"30",height:"30",viewBox:"0 0 100 100"},[t("path",{class:"line line1",d:"M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"}),t("path",{class:"line line2",d:"M 20,50 H 80"}),t("path",{class:"line line3",d:"M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"})],-1)),ko=[bo];function $o(e,n,a,d,r,o){return i(),l("button",{type:"button",name:"Main menu",class:k(["menu",{clicked:!!a.showMenu}]),onClick:n[0]||(n[0]=(...s)=>o.clickMenu&&o.clickMenu(...s)),"aria-label":"Main Menu"},ko,2)}var yo=_(fo,[["render",$o],["__scopeId","data-v-08ac664e"]]);const wo={name:"App",inject:["$func"],components:{Home:Ae,Menu:ho,MenuButton:yo,About:Xe,Skills:gt,History:Mt,Works:wn,Info:Un,FooterTopInfo:Rn,Footer:Qn},data(){return{showMenu:!1,initUserTheme:""}},computed:y(b({},j("theme",["userTheme"])),{assetsSrc(){const e={};return this.userTheme=="dark-theme"?(e.logo=this.$func.getImgUrl("logo"),e.menu=this.$func.getIconImgUrl("menu"),e.footer=this.$func.getImgUrl("logo-dark")):(e.logo=this.$func.getImgUrl("logo-dark"),e.menu=this.$func.getIconImgUrl("menu-dark"),e.footer=this.$func.getImgUrl("logo")),e}}),async created(){const e=await this.getLocalStorageTheme()||this.getMediaPreference();document.documentElement.className=e,this.setUserTheme(e)},methods:y(b({},B("theme",["getLocalStorageTheme","setUserTheme"])),{scrollToTop(){window.innerWidth<768?document.getElementById("avatar").scrollIntoView({behavior:"smooth"}):window.scroll({top:0,left:0,behavior:"smooth"})},toggleMenu(){this.showMenu=!this.showMenu},getMediaPreference(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark-theme":"light-theme"}})},Io={id:"app"},Po={class:"nav noselect"},xo=["src"],jo={id:"about-skills",class:"large-width-section"};function So(e,n,a,d,r,o){const s=u("Menu"),g=u("MenuButton"),m=u("Home"),V=u("About"),R=u("Skills"),O=u("History"),G=u("Works"),W=u("Info"),Y=u("FooterTopInfo"),J=u("Footer");return i(),l("div",Io,[t("nav",Po,[t("img",{id:"appLogo",class:"logo noselect",src:o.assetsSrc.logo,alt:"logo",onClick:n[0]||(n[0]=(...K)=>o.scrollToTop&&o.scrollToTop(...K))},null,8,xo),p(se,null,{default:oe(()=>[r.showMenu?(i(),T(s,{key:0,onClose:o.toggleMenu},null,8,["onClose"])):I("",!0)]),_:1}),p(g,{class:"noselect","show-menu":r.showMenu,onToggleMenu:o.toggleMenu},null,8,["show-menu","onToggleMenu"])]),p(m,{name:"home",class:"section"}),t("div",jo,[p(V,{name:"about",class:"small-width-section"}),p(R,{name:"skills",class:"small-width-section"})]),p(O,{name:"history",class:"section"}),p(G,{name:"works",class:"section"}),p(W,{id:"info-section",name:"info",class:"section"}),p(Y),p(J,{id:"footer",class:"footer",src:o.assetsSrc.footer},null,8,["src"])])}var Co=_(wo,[["render",So],["__scopeId","data-v-0cb8ee10"]]),To={namespaced:!0,state:{userTheme:"light-theme"},mutations:{setUserTheme(e,n){e.userTheme=n}},actions:{setUserTheme(e,n){localStorage.setItem("user-theme",n),e.commit("setUserTheme",n)},getLocalStorageTheme(){return localStorage.getItem("user-theme")}}};const Mo=ae({modules:{theme:To}}),Do="Hello",Fo="I'm Brice",Lo="Brice",Ao="Full Stack Engineer",Bo="Avatar by catalyststuff / freepik",qo={paragraph_one:"Last year student in internship as a Full Stack developer, based in Lyon, France. Through my studies, my three years work experience and personal projects, I deepened my skills in creating websites using frameworks such as",paragraph_two:"In my free time, I try to discover new technologies. Currently, I'm working on a personal project using ",paragraph_three:"I'm looking for a new job oppotunity in ",yokohama:"Yokohama",tokyo:"Tokyo",japan:"Japan"},Uo="Download Resume",Eo="About",No="Skills",zo={name:"History",title:{fiducial:"Fiducial Staffing",cpe:"CPE Lyon",conity:"Conity",dawson:"Dawson College",iut:"Institute of Technology"},description:{fiducial:"D\xE9veloppeur Full stack au sein de la DSI de Fiducial dans le bureau d'\xE9tudes des M\xE9tiers R\xE9glement\xE9s.",fiducial_2:"Affect\xE9 au pilotage et d\xE9veloppement de projets destin\xE9s au r\xE9seau d'expertise comptable de la firme.",cpe:"Informatique et R\xE9seaux de Communication (IRC) - Majeure Syst\xE8mes d'Informations (SI)",conity:"Stage effectu\xE9 en tant que d\xE9veloppeur full-stack et assureur qualit\xE9 chez Conity, solution num\xE9rique de suivi de projet de construction.",dawson:"Semestre d'\xE9change au Dawson College, effectu\xE9 en partenariat avec l'IUT Lyon 1",dawson_2:"Membre du club Dawson College Blues Athletics",iut:"Sp\xE9cialisation 2\xE8me ann\xE9e : Math\xE9matiques & Technologies Avanc\xE9es"}},Ho="Works on Github",Vo="Info",Ro="EN",Oo="FR",Go="JA",Wo="Read More",Yo="projects",Jo="Realised with Vite.js, Travis CI & Freepik images";var Ko={hello:Do,i_m_brice:Fo,brice:Lo,full_stack_engineer:Ao,avatar:Bo,description:qo,download_resume:Uo,about:Eo,skills:No,history:zo,works:Ho,info:Vo,english:Ro,french:Oo,japanese:Go,read_more:Wo,projects:Yo,realised:Jo};const Qo="Bonjour, je suis",Xo="Brice",Zo="Brice",es="Ing\xE9nieur Full Stack",ts="Avatar cr\xE9\xE9 par catalyststuff / freepik",ns={paragraph_one:"\xC9tudiant en derni\xE8re ann\xE9e d'alternance en tant qu'ing\xE9nieur Full Stack, situ\xE9 \xE0 Lyon, France. Au travers de mes \xE9tudes et de mes trois ann\xE9es d'exp\xE9rience en entreprise ainsi que sur des projets personnels, j'ai pu approfondir mes comp\xE9tences dans la cr\xE9ation de site web en utilisant des frameworks tels que ",paragraph_two:"Durant mon temps libre, je cherche \xE0 d\xE9couvrir de nouvelles technologies. Actuellement, je travaille sur un projet personnel en utilisant les technologies ",paragraph_three:"Je suis \xE0 la recherche d'une opportunit\xE9 professionnelle \xE0 ",yokohama:"Yokohama",tokyo:"Yokohama",japan:"Japon."},os="T\xE9l\xE9charger mon CV",ss="\xC0 propos",as="Comp\xE9tences",rs={name:"Parcours",title:{fiducial:"Fiducial Staffing",cpe:"CPE Lyon",conity:"Conity",dawson:"Dawson College",iut:"Institute of Technology"},description:{fiducial:"Fiducial Staffing - Ing\xE9nieur Fullstack",cpe:"CPE Lyon - Ing\xE9nieur en informatique",conity:"Conity - D\xE9veloppeur & Assureur Qualit\xE9 Web",dawson:"Dawson College",iut:"IUT Lyon 1 - Sp\xE9cialit\xE9 Math\xE9matiques"}},is="Projets Github",cs="Infos",ls="EN",ds="FR",us="JA",ps="Voir plus",_s="projets",gs="R\xE9alis\xE9 avec Vite.js, Travis CI & les images Freepik";var ms={hello:Qo,i_m_brice:Xo,brice:Zo,full_stack_engineer:es,avatar:ts,description:ns,download_resume:os,about:ss,skills:as,history:rs,works:is,info:cs,english:ls,french:ds,japanese:us,read_more:ps,projects:_s,realised:gs};const hs="\u3053\u3093\u306B\u3061\u306F",fs="\u30D6\u30E9\u30A4\u30B9\u3067\u3059\u3002",vs="\u30D6\u30E9\u30A4\u30B9",bs="\u30D5\u30EB\u30B9\u30BF\u30C3\u30AF\u30A8\u30F3\u30B8\u30CB\u30A2",ks="Avatar by catalyststuff / freepik",$s={paragraph_one:"Last year student in internship as a Full Stack developer, based in Lyon, France. Through my studies, my three years work experience and personal projects, I deepened my skills in creating websites using frameworks such as",paragraph_two:"In my free time, I try to discover new technologies. Currently, I'm working on a personal project using ",paragraph_three:"I'm looking for a new job oppotunity in ",yokohama:"Yokohama",tokyo:"Tokyo",japan:"Japan"},ys="\u5C65\u6B74\u66F8\u306E\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9",ws="About",Is="Skills",Ps={name:"History",title:{fiducial:"Fiducial Staffing",cpe:"CPE Lyon",conity:"Conity",dawson:"Dawson College",iut:"Institute of Technology"},description:{fiducial:"D\xE9veloppeur Full stack au sein de la DSI de Fiducial dans le bureau d'\xE9tudes des M\xE9tiers R\xE9glement\xE9s (dont 3 ans d'alternance).",fiducial_2:"Principalement affect\xE9 au pilotage et d\xE9veloppement du projet de Suivi des Interlocuteurs et du module d'\xC9laboration Budg\xE9taire interne. Ai \xE9galement supervis\xE9 l'int\xE9gration et le d\xE9veloppement de stagiaires et employ\xE9s en reconversion professionnelle.",cpe:"CPE",conity:"Stage effectu\xE9 en tant que d\xE9veloppeur full-stack et assureur qualit\xE9 chez Conity, solution num\xE9rique de suivi de projet de construction.",dawson:"Dawson College",iut:"Institute of Technology"}},xs="Works on Github",js="Info",Ss="\u82F1\u8A9E",Cs="\u30D5\u30E9\u30F3\u30B9\u8A9E",Ts="\u65E5\u672C\u8A9E",Ms="Read More",Ds="projects",Fs="Realised with Vite.js, Travis CI & Freepik images";var Ls={hello:hs,i_m_brice:fs,brice:vs,full_stack_engineer:bs,avatar:ks,description:$s,download_resume:ys,about:ws,skills:Is,history:Ps,works:xs,info:js,english:Ss,french:Cs,japanese:Ts,read_more:Ms,projects:Ds,realised:Fs};const x=re({legacy:!0,globalInjection:!0,locale:"en",fallbackLocale:"en",messages:{en:Ko,fr:ms,ja:Ls}});var As="/portfolio/assets/briefcase.22c2ca24.svg",Bs="/portfolio/assets/docker.362bc087.svg",qs="/portfolio/assets/email-dark.d4275cbd.svg",Us="/portfolio/assets/email.75073418.svg",Es="/portfolio/assets/freepik.471d2990.svg",Ns="/portfolio/assets/github-dark.7a330b49.svg",zs="/portfolio/assets/github.921145a1.svg",Hs="/portfolio/assets/graduation-cap.a590a512.svg",Vs="/portfolio/assets/js.ec8acd65.svg",Rs="/portfolio/assets/linkedin-dark.3f8477bc.svg",Os="/portfolio/assets/linkedin.7a7a5923.svg",Gs="/portfolio/assets/menu-dark.80311574.svg",Ws="/portfolio/assets/menu.b9597e4d.svg",Ys="/portfolio/assets/python.fbc3b698.svg",Js="/portfolio/assets/spring-boot.8f9ccd66.svg",Ks="/portfolio/assets/symfony.921e9a28.svg",Qs="/portfolio/assets/travis-ci.1d618cd8.svg",Xs="/portfolio/assets/vitejs.0ca45da0.svg",Zs="/portfolio/assets/vue.b4cdca4a.svg",ea=`/* color palette from <https://github.com/vuejs/theme> */

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
    --color-tag-text: #02366e;
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
    --color-tag-text: #26055b;
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
    font-family: Inter, -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
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

.snip1135 .link {
    padding: 0.5em 0;
    position: relative;
    letter-spacing: 1px;
    text-decoration: none;
}

.snip1135 .link:before,
.snip1135 .link:after {
    /* Underline effect */
    position: absolute;
    -webkit-transition: all 0.35s ease-in-out;
    transition: all 0.35s ease-in-out;
}

.snip1135 .link:before {
    bottom: 0;
    display: block;
    height: 3px;
    width: 0%;
    content: "";
    background-color: var(--color-primary);
}

.snip1135 .link:after {
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

.snip1135 .link:hover:before,
.snip1135 .active .link:before {
    opacity: 1;
    width: 100%;
}

.snip1135 .link:hover:after,
.snip1135 .active .link:after {
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
}`,ta="/portfolio/assets/cv.32cbbe70.pdf",na="/portfolio/assets/logo-dark.6f808d03.svg",oa="/portfolio/assets/logo.28a0162b.svg",sa={getImgUrl:(e,n="svg")=>new URL({"/src/assets/avatar-250.jpg":q,"/src/assets/avatar-350.jpg":U,"/src/assets/avatar.jpg":D,"/src/assets/base.css":ea,"/src/assets/cv.pdf":ta,"/src/assets/logo-dark.svg":na,"/src/assets/logo.svg":oa}[`/src/assets/${e}.${n}`],self.location).href,getIconImgUrl:e=>new URL({"/src/assets/icons/briefcase.svg":As,"/src/assets/icons/docker.svg":Bs,"/src/assets/icons/email-dark.svg":qs,"/src/assets/icons/email.svg":Us,"/src/assets/icons/freepik.svg":Es,"/src/assets/icons/github-dark.svg":Ns,"/src/assets/icons/github.svg":zs,"/src/assets/icons/graduation-cap.svg":Hs,"/src/assets/icons/js.svg":Vs,"/src/assets/icons/linkedin-dark.svg":Rs,"/src/assets/icons/linkedin.svg":Os,"/src/assets/icons/menu-dark.svg":Gs,"/src/assets/icons/menu.svg":Ws,"/src/assets/icons/python.svg":Ys,"/src/assets/icons/spring-boot.svg":Js,"/src/assets/icons/symfony.svg":Ks,"/src/assets/icons/travis-ci.svg":Qs,"/src/assets/icons/vitejs.svg":Xs,"/src/assets/icons/vue.svg":Zs}[`/src/assets/icons/${e}.svg`],self.location).href,formatDate:(e,n)=>{if(P.locale(x.global.locale),n){const a=P(e).format("MMM YYYY");return x.global.locale==="ja"?a+"\u5E74":a}else return x.global.locale==="en"?P(e).format("MMM Do YY"):P(e).format("ll")}};ie.add(ce);le.watch();de(Co).use(Mo).use(x).use(ue).component("font-awesome-icon",pe).provide("$func",sa).mount("#app");
