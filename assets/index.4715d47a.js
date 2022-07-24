var J=Object.defineProperty,K=Object.defineProperties;var Q=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var L=(e,n,a)=>n in e?J(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,b=(e,n)=>{for(var a in n||(n={}))X.call(n,a)&&L(e,a,n[a]);if(F)for(var a of F(n))Z.call(n,a)&&L(e,a,n[a]);return e},y=(e,n)=>K(e,Q(n));import{l as ee,r as u,o as i,c as T,a as l,p as h,b as f,d as t,e as p,t as c,n as k,f as w,F as v,g as $,h as I,m as j,i as A,w as te,T as ne,j as oe,k as se,q as P,s as ae,_ as re,u as ie,v as ce,V as le,x as de}from"./vendor.fef573d5.js";const ue=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))d(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&d(s)}).observe(document,{childList:!0,subtree:!0});function a(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(r){if(r.ep)return;r.ep=!0;const o=a(r);fetch(r.href,o)}};ue();var _=(e,n)=>{const a=e.__vccOpts||e;for(const[d,r]of n)a[d]=r;return a};const pe={name:"ParticlesComponent",data(){return{particlesInit:null,particlesLoaded:null}},computed:{isSmallScreen(){return window.innerWidth<768}},created(){this.particlesInit=async e=>{await ee(e)}}};function _e(e,n,a,d,r,o){const s=u("Particles",!0);return i(),T(s,{id:"tsparticles",particlesInit:r.particlesInit,particlesLoaded:r.particlesLoaded,options:{background:{color:{value:"black"}},fpsLimit:120,interactivity:{detectsOn:"window",events:{onClick:{enable:!0,mode:"push"},onHover:{enable:!0,mode:"repulse"},resize:!0},modes:{bubble:{distance:200,duration:2,opacity:.8,size:20},push:{default:!0,groups:[],quantity:4,speed:2,maxSpeed:10},repulse:{distance:100,duration:.4,factor:100,speed:2,maxSpeed:10,easing:"ease-out-quad",divs:{distance:200,duration:.4,factor:100,speed:1,maxSpeed:50,easing:"ease-out-quad",selectors:[]}}}},particles:{color:{value:["#ff6f91","#f9f871","#d65db1","6fbffd"]},collisions:{enable:!0},move:{collisions:!0,direction:"none",enable:!0,outMode:"bounce",random:!1,speed:2,straight:!1},number:{density:{enable:!0,value_area:800},value:o.isSmallScreen?30:60},opacity:{value:.6},shape:{type:"circle"},size:{random:!0,value:5}},detectRetina:!0}},null,8,["particlesInit","particlesLoaded","options"])}var me=_(pe,[["render",_e]]);const ge={},M=e=>(h("data-v-cbef9b38"),e=e(),f(),e),he={class:"container"},fe=M(()=>t("div",{class:"chevron"},null,-1)),ve=M(()=>t("div",{class:"chevron"},null,-1)),be=M(()=>t("div",{class:"chevron"},null,-1)),ke=[fe,ve,be];function $e(e,n){return i(),l("div",he,ke)}var ye=_(ge,[["render",$e],["__scopeId","data-v-cbef9b38"]]),B="/portfolio/assets/avatar.f8961f25.jpg";const we={name:"ProfileComponent",inject:["$func"],components:{Particles:me,ScrollDown:ye}},Ie={class:"noselect"},Pe=["title"],xe={class:"smaller"},je={class:"emphasis-txt big-emphasis"};function Se(e,n,a,d,r,o){const s=u("Particles"),m=u("ScrollDown");return i(),l("main",null,[p(s),t("div",Ie,[t("img",{id:"avatar",class:"profile-img fade-in-top noselect",src:B,alt:"Avatar",title:e.$t("avatar"),ref:"img"},null,8,Pe)]),t("div",{class:k(["profile-text fade-in-top",{smaller:e.$i18n.locale==="ja"}])},[t("h1",null,c(e.$t("hello")),1),t("h1",xe,c(e.$t("i_m_brice")),1),t("p",je,c(e.$t("full_stack_engineer")),1),p(m)],2)])}var Ce=_(we,[["render",Se],["__scopeId","data-v-93bc1c68"]]);const Te={name:"HomeSection",components:{Profile:Ce}};function Me(e,n,a,d,r,o){const s=u("Profile");return i(),l("div",null,[p(s)])}var De=_(Te,[["render",Me],["__scopeId","data-v-a97107a6"]]);const Fe={name:"DescriptionComponent"},S=e=>(h("data-v-22308f00"),e=e(),f(),e),Le={class:"mb-0"},Ae=S(()=>t("span",{class:"emphasis-txt"}," Vue.js,\xA0Symfony\xA0&\xA0Spring boot.",-1)),Be=S(()=>t("br",null,null,-1)),qe={class:"mb-0"},Ue=S(()=>t("span",{class:"emphasis-txt"},"Django\xA0&\xA0Docker",-1)),Ee=S(()=>t("br",null,null,-1)),Ne={class:"mb-0"},ze={class:"emphasis-txt"};function He(e,n,a,d,r,o){return i(),l("div",null,[t("article",null,[t("p",Le,[w(c(e.$t("description.paragraph_one"))+" ",1),Ae]),Be,t("p",qe,[w(c(e.$t("description.paragraph_two"))+" ",1),Ue]),Ee,t("p",Ne,[w(c(e.$t("description.paragraph_three"))+" ",1),t("span",ze,c(e.$t("description.yokohama"))+"\xA0/\xA0"+c(e.$t("description.tokyo"))+",\xA0"+c(e.$t("description.japan")),1)])])])}var Ve=_(Fe,[["render",He],["__scopeId","data-v-22308f00"]]);const Re={name:"AboutSection",components:{Description:Ve}},Oe={class:"flex-div"},Ge=t("span",{id:"about",class:"mb-60"},null,-1),We={class:"h-center"};function Ye(e,n,a,d,r,o){const s=u("Description");return i(),l("div",Oe,[Ge,t("h2",We,c(e.$t("about")),1),p(s,{class:"w-80"})])}var Je=_(Re,[["render",Ye]]);const Ke={name:"SkillsComponent",inject:["$func"],data(){return{skillImages:[{title:"JavaScript",src:"js"},{title:"Vue.js",src:"vue"},{title:"Symfony Framework",src:"symfony"},{title:"Python",src:"python"},{title:"Spring Boot Framework",src:"spring-boot"},{title:"Docker",src:"docker"}]}},computed:{cvUrl(){return new URL("/portfolio/assets/cv.32cbbe70.pdf",self.location).href}}},Qe=e=>(h("data-v-2bc702d2"),e=e(),f(),e),Xe={class:"skills-container"},Ze={class:"flex-icons w-80"},et=["title","src","alt"],tt=["href"],nt=Qe(()=>t("i",{class:"mr-1 fa fa-download"},null,-1));function ot(e,n,a,d,r,o){return i(),l("div",Xe,[t("div",Ze,[(i(!0),l(v,null,$(r.skillImages,s=>(i(),l("img",{key:s.title,class:"icon-img",loading:"lazy",title:s.title,src:o.$func.getIconImgUrl(s.src),alt:s.title},null,8,et))),128)),t("a",{class:"action-btn",href:o.cvUrl,download:"cv-folleas-brice.pdf"},[nt,w(" "+c(e.$t("download_resume")),1)],8,tt)])])}var st=_(Ke,[["render",ot],["__scopeId","data-v-2bc702d2"]]);const at={name:"SkillsSection",components:{Skills:st}},q=e=>(h("data-v-141c2b2e"),e=e(),f(),e),rt={id:"skillsDiv",class:"flex-div"},it=q(()=>t("span",{id:"skills",class:"mb-60"},null,-1)),ct={class:"h-center"},lt=q(()=>t("p",{class:"mb-skills"},null,-1));function dt(e,n,a,d,r,o){const s=u("Skills",!0);return i(),l("div",rt,[it,t("h2",ct,c(e.$t("skills")),1),lt,p(s,{class:"w-80"})])}var ut=_(at,[["render",dt],["__scopeId","data-v-141c2b2e"]]);const pt={inject:["$func"],props:{eventList:{type:Array,required:!0}},data(){return{activeEvent:this.eventList[0]}},methods:{setActiveTab(e){this.activeEvent=e},isThereHistoryDescriptionPart2(e){return!!this.$i18n.messages.en.history.description[e]}}},_t=e=>(h("data-v-3390fbcc"),e=e(),f(),e),mt={class:"history-tabs"},gt={class:"event-selector snip1135"},ht=["onClick"],ft={class:"link"},vt={key:0,class:"event-container"},bt={class:"project-module-title"},kt=_t(()=>t("br",null,null,-1)),$t={key:0,class:"mt-2"};function yt(e,n,a,d,r,o){return i(),l("div",mt,[t("ul",gt,[(i(!0),l(v,null,$(a.eventList,s=>(i(),l("li",{key:s.id,onClick:m=>o.setActiveTab(s),class:k({active:r.activeEvent===s})},[t("p",ft,c(e.$t("history.title."+s.title)),1)],10,ht))),128))]),r.activeEvent?(i(),l("article",vt,[t("div",bt,[t("h3",null,c(e.$t("history.title."+r.activeEvent.title)),1)]),t("p",null,c(o.$func.formatDate(r.activeEvent.beginDate))+" - "+c(o.$func.formatDate(r.activeEvent.endDate)),1),kt,t("p",null,c(e.$t("history.description."+r.activeEvent.title)),1),o.isThereHistoryDescriptionPart2(r.activeEvent.title+"_2")?(i(),l("p",$t,c(e.$t("history.description."+r.activeEvent.title+"_2")),1)):I("",!0)])):I("",!0)])}var wt=_(pt,[["render",yt],["__scopeId","data-v-3390fbcc"]]);const It={name:"HistorySection",inject:["$func"],components:{AppTabs:wt},data(){return{events:[{id:1,title:"fiducial",beginDate:new Date(2019,9),endDate:new Date,type:"work"},{id:2,title:"cpe",beginDate:new Date(2019,9),endDate:new Date(2022,7),type:"graduation"},{id:3,title:"conity",beginDate:new Date(2019,4),endDate:new Date(2019,9),type:"work"},{id:3,title:"dawson",beginDate:new Date(2019,1),endDate:new Date(2019,4),type:"graduation"},{id:4,title:"iut",beginDate:new Date(2017,9),endDate:new Date(2019,1),type:"graduation"}]}}},Pt={class:"flex-div"},xt={class:"h-center"};function jt(e,n,a,d,r,o){const s=u("AppTabs");return i(),l("div",Pt,[t("h2",xt,c(e.$t("history.name")),1),p(s,{eventList:r.events},null,8,["eventList"])])}var St=_(It,[["render",jt]]);const Ct="b-folleas",Tt="https://api.github.com";var Mt={async getAllProjects(){return(await fetch(`${Tt}/users/${Ct}/repos?sort=created`)).json()}};const Dt={name:"ProjectModuleComponent",inject:["$func"],props:{name:{type:String,required:!0},url:{type:String,required:!0},description:{type:String,default:"Lorem ipsum",required:!1},language:{type:String,required:!1},topics:{type:Array,required:!1},date:{type:String,required:!1}},computed:y(b({},j("theme",["userTheme"])),{assetsSrc(){return this.userTheme=="dark-theme"?this.$func.getIconImgUrl("github"):this.$func.getIconImgUrl("github-dark")}}),methods:{goToProject(e){window.location.href=e}}},U=e=>(h("data-v-651b81a4"),e=e(),f(),e),Ft={class:"project-container"},Lt={class:"project-module-header"},At={class:"project-module-title"},Bt=["name"],qt=U(()=>t("i",{class:"fa fa-bold fa-arrow-up-right-from-square"},null,-1)),Ut=[qt],Et={key:0},Nt=U(()=>t("i",{class:"fa fa-code"},null,-1)),zt={key:0};function Ht(e,n,a,d,r,o){var s;return i(),l("article",Ft,[t("div",Lt,[t("div",At,[t("h3",null,c(a.name),1),t("button",{class:"round-btn",type:"button",name:`Link to project ${a.name}`,onClick:n[0]||(n[0]=m=>o.goToProject(a.url)),"aria-label":"Link to project"},Ut,8,Bt)]),a.language?(i(),l("em",Et,[Nt,w(" "+c(a.language),1)])):I("",!0)]),t("p",null,c(o.$func.formatDate(a.date)),1),t("p",null,c(a.description),1),((s=a.topics)==null?void 0:s.length)>0?(i(),l("div",zt,[(i(!0),l(v,null,$(a.topics,m=>(i(),l("p",{class:"chip",key:m},c(m),1))),128))])):I("",!0)])}var Vt=_(Dt,[["render",Ht],["__scopeId","data-v-651b81a4"]]);const Rt={name:"PaginationComponent",props:{maxVisibleButtons:{type:Number,required:!1,default:4},totalPages:{type:Number,required:!0},perPage:{type:Number,required:!0},currentPage:{type:Number,required:!0}},computed:{startPage(){return this.currentPage===1?1:this.currentPage===this.totalPages?this.totalPages-this.maxVisibleButtons+(this.totalPages/this.currentPage===0?1:2):this.currentPage-1},pages(){const e=[];for(let n=this.startPage;n<=Math.min(this.startPage+this.maxVisibleButtons-1,this.totalPages);n++)e.push({name:n,isDisabled:n===this.currentPage});return e},isInFirstPage(){return this.currentPage===1},isInLastPage(){return this.currentPage===this.totalPages}},methods:{onClickFirstPage(){this.$emit("pagechanged",1)},onClickPreviousPage(){this.$emit("pagechanged",this.currentPage-1)},onClickPage(e){this.$emit("pagechanged",e)},onClickNextPage(){this.$emit("pagechanged",this.currentPage+1)},onClickLastPage(){this.$emit("pagechanged",this.totalPages)},isPageActive(e){return this.currentPage===e}}},C=e=>(h("data-v-0f14d390"),e=e(),f(),e),Ot={class:"pagination"},Gt={class:"pagination-item"},Wt=["disabled"],Yt=C(()=>t("i",{class:"fa-solid fa-backward-fast"},null,-1)),Jt=[Yt],Kt={class:"pagination-item"},Qt=["disabled"],Xt=C(()=>t("i",{class:"fa-solid fa-backward-step"},null,-1)),Zt=[Xt],en=["name","onClick","disabled","aria-label"],tn={class:"pagination-item"},nn=["disabled"],on=C(()=>t("i",{class:"fa-solid fa-forward-step"},null,-1)),sn=[on],an={class:"pagination-item"},rn=["disabled"],cn=C(()=>t("i",{class:"fa-solid fa-forward-fast"},null,-1)),ln=[cn];function dn(e,n,a,d,r,o){return i(),l("ul",Ot,[t("li",Gt,[t("button",{name:"Go to first page",type:"button",onClick:n[0]||(n[0]=(...s)=>o.onClickFirstPage&&o.onClickFirstPage(...s)),disabled:o.isInFirstPage,"aria-label":"Go to first page"},Jt,8,Wt)]),t("li",Kt,[t("button",{name:"Go to previous page",type:"button",onClick:n[1]||(n[1]=(...s)=>o.onClickPreviousPage&&o.onClickPreviousPage(...s)),disabled:o.isInFirstPage,"aria-label":"Go to previous page"},Zt,8,Qt)]),(i(!0),l(v,null,$(o.pages,s=>(i(),l("li",{class:"pagination-item",key:s.name},[t("button",{name:`Go to page number ${s.name}`,type:"button",onClick:m=>o.onClickPage(s.name),disabled:s.isDisabled,class:k({active:o.isPageActive(s.name)}),"aria-label":`Go to page number ${s.name}`},c(s.name),11,en)]))),128)),t("li",tn,[t("button",{name:"Go to next page",type:"button",onClick:n[2]||(n[2]=(...s)=>o.onClickNextPage&&o.onClickNextPage(...s)),disabled:o.isInLastPage,"aria-label":"Go to next page"},sn,8,nn)]),t("li",an,[t("button",{type:"button",onClick:n[3]||(n[3]=(...s)=>o.onClickLastPage&&o.onClickLastPage(...s)),disabled:o.isInLastPage,name:"Go to last page","aria-label":"Go to last page"},ln,8,rn)])])}var un=_(Rt,[["render",dn],["__scopeId","data-v-0f14d390"]]);const pn={name:"WorksSection",components:{ProjectModule:Vt,Pagination:un},data:()=>({projects:[],filteredProjects:[],currentProjects:[],currentPage:1,perPage:4,totalPages:10}),computed:{projectsNumbers(){const e=(this.currentPage-1)*this.perPage+1;return this.currentPage===this.totalPages?e===this.filteredProjects.length?e:e+" - "+this.filteredProjects.length:e+" - "+(e+(this.perPage-1))}},async created(){var e;this.projects=await Mt.getAllProjects(),this.filteredProjects=this.projects.filter(n=>!n.archived),this.currentProjects=this.currentProjects=this.getProjectsByPage(this.currentPage,this.perPage),this.totalPages=(e=this.filteredProjects)!=null&&e.length?Math.floor(this.filteredProjects.length/this.perPage):0,this.totalPages+=this.filteredProjects.length/this.perPage!==0?1:0},methods:{async onPageChange(e){document.getElementById("works").scrollIntoView({behavior:"smooth"}),this.currentPage=e,this.currentProjects=this.getProjectsByPage(this.currentPage,this.perPage)},getProjectsByPage(e,n){const a=(e-1)*n;return this.filteredProjects.slice(a,a+n)}}},E=e=>(h("data-v-64de5a86"),e=e(),f(),e),_n={class:"flex-div"},mn=E(()=>t("span",{id:"works",class:"mb-60"},null,-1)),gn={class:"h-center"},hn={class:"mt-3 flex-div"},fn={class:"project-div"},vn=E(()=>t("br",null,null,-1));function bn(e,n,a,d,r,o){const s=u("ProjectModule"),m=u("pagination");return i(),l("div",_n,[mn,t("h2",gn,c(e.$t("works")),1),t("div",hn,[t("div",fn,[(i(!0),l(v,null,$(e.currentProjects,g=>(i(),T(s,{key:g.id,name:g.name,description:g.description,url:g.svn_url,language:g.language,topics:g.topics,date:g.updated_at,class:k(["module",{centersection:g!==e.currentProjects[0]}])},null,8,["name","description","url","language","topics","date","class"]))),128))]),t("span",null,c(o.projectsNumbers)+" / "+c(e.filteredProjects.length)+" "+c(e.$t("projects")),1),vn,p(m,{class:"pagination",totalPages:e.totalPages,perPage:e.perPage,currentPage:e.currentPage,onPagechanged:o.onPageChange},null,8,["totalPages","perPage","currentPage","onPagechanged"])])])}var kn=_(pn,[["render",bn],["__scopeId","data-v-64de5a86"]]);const $n={name:"FindMeIconsComponent",inject:["$func"],props:{title:{type:String,required:!0},content:{type:String,required:!0},link:{type:String,required:!1}},computed:y(b({},j("theme",["userTheme"])),{assetsSrc(){const e={};return this.userTheme=="dark-theme"?(e.email=this.$func.getIconImgUrl("email"),e.linkedin=this.$func.getIconImgUrl("linkedin"),e.github=this.$func.getIconImgUrl("github")):(e.email=this.$func.getIconImgUrl("email-dark"),e.linkedin=this.$func.getIconImgUrl("linkedin-dark"),e.github=this.$func.getIconImgUrl("github-dark")),e}}),methods:{openLink(){window.open(this.link,"_blank","noopener")}}},yn=e=>(h("data-v-141b3794"),e=e(),f(),e),wn={class:"find-me-icons-header"},In=["src","alt"],Pn=yn(()=>t("div",{class:"horizontal-divider"},null,-1));function xn(e,n,a,d,r,o){return i(),l("div",{class:"find-me-icons-main-container",onClick:n[0]||(n[0]=(...s)=>o.openLink&&o.openLink(...s))},[t("div",wn,[t("img",{src:o.assetsSrc[a.title],alt:a.title,loading:"lazy"},null,8,In),Pn,t("strong",null,c(a.title),1)]),t("p",null,c(a.content),1)])}var jn=_($n,[["render",xn],["__scopeId","data-v-141b3794"]]);const Sn={name:"InfoSection",components:{FindMeIcons:jn}},Cn=e=>(h("data-v-1c767780"),e=e(),f(),e),Tn={class:"main-container"},Mn=Cn(()=>t("span",{id:"info",class:"mb-60"},null,-1)),Dn={class:"h-center"},Fn={class:"flex-container"};function Ln(e,n,a,d,r,o){const s=u("FindMeIcons");return i(),l("div",Tn,[Mn,t("h2",Dn,c(e.$t("info")),1),t("div",Fn,[p(s,{title:"email",content:"brice.folleas@gmail.com",link:"mailto:brice.folleas@gmail.com"}),p(s,{title:"linkedin",content:"brice-foll\xE9as",link:"https://www.linkedin.com/in/brice-foll\xE9as/"}),p(s,{title:"github",content:"b-folleas",link:"https://github.com/b-folleas"})])])}var An=_(Sn,[["render",Ln],["__scopeId","data-v-1c767780"]]);const Bn={name:"FooterTopInfoComponent",inject:["$func"],data(){return{techImages:[{title:"Vite JS",src:"vitejs"},{title:"Travis CI",src:"travis-ci"},{title:"Freepik",src:"freepik"}]}}},qn={class:"footer-top-info"},Un={class:"h-center mb-0"},En=["title","src","alt"];function Nn(e,n,a,d,r,o){return i(),l("div",qn,[t("p",Un,c(e.$t("realised")),1),(i(!0),l(v,null,$(r.techImages,s=>(i(),l("img",{key:s.title,title:s.title,class:"icon-img small-icon-img",loading:"lazy",src:o.$func.getIconImgUrl(s.src),alt:s.title},null,8,En))),128))])}var zn=_(Bn,[["render",Nn]]);const Hn={name:"FooterSection",props:{src:{type:String,required:!0}}},N=e=>(h("data-v-b6785bf0"),e=e(),f(),e),Vn={class:"main-footer"},Rn=["src"],On=N(()=>t("div",{class:"vertical-divider noselect"},null,-1)),Gn=N(()=>t("div",null,[t("h4",{class:"mt-1 bg-color"},"\xA9 2022")],-1));function Wn(e,n,a,d,r,o){return i(),l("div",null,[t("footer",null,[t("div",Vn,[t("img",{src:a.src,alt:"logo"},null,8,Rn),On,t("h3",null,c(e.$t("brice")),1)]),Gn])])}var Yn=_(Hn,[["render",Wn],["__scopeId","data-v-b6785bf0"]]);const Jn={name:"ThemeButtonComponent",computed:b({},j("theme",["userTheme"])),methods:y(b({},A("theme",["setUserTheme"])),{toggleTheme(){localStorage.getItem("user-theme")==="light-theme"?this.setTheme("dark-theme"):this.setTheme("light-theme")},setTheme(e){document.documentElement.className=e,this.setUserTheme(e)}})},D=e=>(h("data-v-053ca33a"),e=e(),f(),e),Kn={for:"checkbox",class:"switch-label noselect"},Qn=D(()=>t("span",{class:"noselect"},"\u{1F319}",-1)),Xn=D(()=>t("span",{class:"noselect"},"\xA0",-1)),Zn=D(()=>t("span",{class:"noselect"},"\u2600\uFE0F",-1));function eo(e,n,a,d,r,o){return i(),l(v,null,[t("input",{onChange:n[0]||(n[0]=(...s)=>o.toggleTheme&&o.toggleTheme(...s)),id:"checkbox",type:"checkbox",class:"switch-checkbox"},null,32),t("label",Kn,[Qn,Xn,Zn,t("div",{class:k(["switch-toggle",{"switch-toggle-checked":e.userTheme==="dark-theme"}])},null,2)])],64)}var to=_(Jn,[["render",eo],["__scopeId","data-v-053ca33a"]]);const no={name:"SelectButtonComponent",data(){return{languages:[{key:"fr",name:"french"},{key:"en",name:"english"},{key:"ja",name:"japanese"}]}},computed:{currentLanguage(){return this.$i18n.locale}}},oo={class:"snip1135"},so=["onClick"];function ao(e,n,a,d,r,o){return i(),l("ul",oo,[(i(!0),l(v,null,$(r.languages,s=>(i(),l("li",{key:s.key,class:k({active:o.currentLanguage===s.key})},[t("a",{class:"link",onClick:m=>e.$i18n.locale=s.key},c(e.$t(s.name)),9,so)],2))),128))])}var ro=_(no,[["render",ao],["__scopeId","data-v-563051ba"]]);const io={name:"MenuComponent",components:{ThemeButton:to,SelectButton:ro},emits:["close"]},co={class:"snip1217"},lo={id:"themeBtn"},uo={id:"selectBtn"};function po(e,n,a,d,r,o){const s=u("ThemeButton"),m=u("SelectButton");return i(),l("ul",co,[t("li",null,[t("a",{onClick:n[0]||(n[0]=g=>e.$emit("close")),href:"#about"},c(e.$t("about")),1)]),t("li",null,[t("a",{onClick:n[1]||(n[1]=g=>e.$emit("close")),href:"#works"},c(e.$t("works")),1)]),t("li",null,[t("a",{onClick:n[2]||(n[2]=g=>e.$emit("close")),href:"#info"},c(e.$t("info")),1)]),t("li",lo,[p(s)]),t("li",uo,[p(m)])])}var _o=_(io,[["render",po],["__scopeId","data-v-2f246125"]]);const mo={name:"MenuButton",props:{showMenu:{type:Boolean,required:!0}},data(){return{clicked:!1}},methods:{clickMenu(){this.clicked=!this.clicked,this.$emit("toggleMenu")}}},go=e=>(h("data-v-08ac664e"),e=e(),f(),e),ho=go(()=>t("svg",{width:"30",height:"30",viewBox:"0 0 100 100"},[t("path",{class:"line line1",d:"M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"}),t("path",{class:"line line2",d:"M 20,50 H 80"}),t("path",{class:"line line3",d:"M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"})],-1)),fo=[ho];function vo(e,n,a,d,r,o){return i(),l("button",{type:"button",name:"Main menu",class:k(["menu",{clicked:!!a.showMenu}]),onClick:n[0]||(n[0]=(...s)=>o.clickMenu&&o.clickMenu(...s)),"aria-label":"Main Menu"},fo,2)}var bo=_(mo,[["render",vo],["__scopeId","data-v-08ac664e"]]);const ko={name:"App",inject:["$func"],components:{Home:De,Menu:_o,MenuButton:bo,About:Je,Skills:ut,History:St,Works:kn,Info:An,FooterTopInfo:zn,Footer:Yn},data(){return{showMenu:!1,initUserTheme:""}},computed:y(b({},j("theme",["userTheme"])),{assetsSrc(){const e={};return this.userTheme=="dark-theme"?(e.logo=this.$func.getImgUrl("logo"),e.menu=this.$func.getIconImgUrl("menu"),e.footer=this.$func.getImgUrl("logo-dark")):(e.logo=this.$func.getImgUrl("logo-dark"),e.menu=this.$func.getIconImgUrl("menu-dark"),e.footer=this.$func.getImgUrl("logo")),e}}),async created(){const e=await this.getLocalStorageTheme()||this.getMediaPreference();document.documentElement.className=e,this.setUserTheme(e)},methods:y(b({},A("theme",["getLocalStorageTheme","setUserTheme"])),{scrollToTop(){window.innerWidth<768?document.getElementById("avatar").scrollIntoView({behavior:"smooth"}):window.scroll({top:0,left:0,behavior:"smooth"})},toggleMenu(){this.showMenu=!this.showMenu},getMediaPreference(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark-theme":"light-theme"}})},$o={id:"app"},yo={class:"nav noselect"},wo=["src"],Io={id:"about-skills",class:"large-width-section"};function Po(e,n,a,d,r,o){const s=u("Menu"),m=u("MenuButton"),g=u("Home"),z=u("About"),H=u("Skills"),V=u("History"),R=u("Works"),O=u("Info"),G=u("FooterTopInfo"),W=u("Footer");return i(),l("div",$o,[t("nav",yo,[t("img",{id:"appLogo",class:"logo noselect",src:o.assetsSrc.logo,alt:"logo",onClick:n[0]||(n[0]=(...Y)=>o.scrollToTop&&o.scrollToTop(...Y))},null,8,wo),p(ne,null,{default:te(()=>[r.showMenu?(i(),T(s,{key:0,onClose:o.toggleMenu},null,8,["onClose"])):I("",!0)]),_:1}),p(m,{class:"noselect","show-menu":r.showMenu,onToggleMenu:o.toggleMenu},null,8,["show-menu","onToggleMenu"])]),p(g,{name:"home",class:"section"}),t("div",Io,[p(z,{name:"about",class:"small-width-section"}),p(H,{name:"skills",class:"small-width-section"})]),p(V,{name:"history",class:"section"}),p(R,{name:"works",class:"section"}),p(O,{id:"info-section",name:"info",class:"section"}),p(G),p(W,{id:"footer",class:"footer",src:o.assetsSrc.footer},null,8,["src"])])}var xo=_(ko,[["render",Po],["__scopeId","data-v-0cb8ee10"]]),jo={namespaced:!0,state:{userTheme:"light-theme"},mutations:{setUserTheme(e,n){e.userTheme=n}},actions:{setUserTheme(e,n){localStorage.setItem("user-theme",n),e.commit("setUserTheme",n)},getLocalStorageTheme(){return localStorage.getItem("user-theme")}}};const So=oe({modules:{theme:jo}}),Co="Hello",To="I'm Brice",Mo="Brice",Do="Full Stack Engineer",Fo="Avatar by catalyststuff / freepik",Lo={paragraph_one:"Last year student in internship as a Full Stack developer, based in Lyon, France. Through my studies, my three years work experience and personal projects, I deepened my skills in creating websites using frameworks such as",paragraph_two:"In my free time, I try to discover new technologies. Currently, I'm working on a personal project using ",paragraph_three:"I'm looking for a new job oppotunity in ",yokohama:"Yokohama",tokyo:"Tokyo",japan:"Japan"},Ao="Download Resume",Bo="About",qo="Skills",Uo={name:"History",title:{fiducial:"Fiducial Staffing",cpe:"CPE Lyon",conity:"Conity",dawson:"Dawson College",iut:"Institute of Technology"},description:{fiducial:"D\xE9veloppeur Full stack au sein de la DSI de Fiducial dans le bureau d'\xE9tudes des M\xE9tiers R\xE9glement\xE9s.",fiducial_2:"Affect\xE9 au pilotage et d\xE9veloppement de projets destin\xE9s au r\xE9seau d'expertise comptable de la firme.",cpe:"Informatique et R\xE9seaux de Communication (IRC) - Majeure Syst\xE8mes d'Informations (SI)",conity:"Stage effectu\xE9 en tant que d\xE9veloppeur full-stack et assureur qualit\xE9 chez Conity, solution num\xE9rique de suivi de projet de construction.",dawson:"Semestre d'\xE9change au Dawson College, effectu\xE9 en partenariat avec l'IUT Lyon 1",dawson_2:"Membre du club Dawson College Blues Athletics",iut:"Sp\xE9cialisation 2\xE8me ann\xE9e : Math\xE9matiques & Technologies Avanc\xE9es"}},Eo="Works on Github",No="Info",zo="EN",Ho="FR",Vo="JA",Ro="Read More",Oo="projects",Go="Realised with Vite.js, Travis CI & Freepik images";var Wo={hello:Co,i_m_brice:To,brice:Mo,full_stack_engineer:Do,avatar:Fo,description:Lo,download_resume:Ao,about:Bo,skills:qo,history:Uo,works:Eo,info:No,english:zo,french:Ho,japanese:Vo,read_more:Ro,projects:Oo,realised:Go};const Yo="Bonjour, je suis",Jo="Brice",Ko="Brice",Qo="Ing\xE9nieur Full Stack",Xo="Avatar cr\xE9\xE9 par catalyststuff / freepik",Zo={paragraph_one:"\xC9tudiant en derni\xE8re ann\xE9e d'alternance en tant qu'ing\xE9nieur Full Stack, situ\xE9 \xE0 Lyon, France. Au travers de mes \xE9tudes et de mes trois ann\xE9es d'exp\xE9rience en entreprise ainsi que sur des projets personnels, j'ai pu approfondir mes comp\xE9tences dans la cr\xE9ation de site web en utilisant des frameworks tels que ",paragraph_two:"Durant mon temps libre, je cherche \xE0 d\xE9couvrir de nouvelles technologies. Actuellement, je travaille sur un projet personnel en utilisant les technologies ",paragraph_three:"Je suis \xE0 la recherche d'une opportunit\xE9 professionnelle \xE0 ",yokohama:"Yokohama",tokyo:"Yokohama",japan:"Japon."},es="T\xE9l\xE9charger mon CV",ts="\xC0 propos",ns="Comp\xE9tences",os={name:"Parcours",title:{fiducial:"Fiducial Staffing",cpe:"CPE Lyon",conity:"Conity",dawson:"Dawson College",iut:"Institute of Technology"},description:{fiducial:"Fiducial Staffing - Ing\xE9nieur Fullstack",cpe:"CPE Lyon - Ing\xE9nieur en informatique",conity:"Conity - D\xE9veloppeur & Assureur Qualit\xE9 Web",dawson:"Dawson College",iut:"IUT Lyon 1 - Sp\xE9cialit\xE9 Math\xE9matiques"}},ss="Projets Github",as="Infos",rs="EN",is="FR",cs="JA",ls="Voir plus",ds="projets",us="R\xE9alis\xE9 avec Vite.js, Travis CI & les images Freepik";var ps={hello:Yo,i_m_brice:Jo,brice:Ko,full_stack_engineer:Qo,avatar:Xo,description:Zo,download_resume:es,about:ts,skills:ns,history:os,works:ss,info:as,english:rs,french:is,japanese:cs,read_more:ls,projects:ds,realised:us};const _s="\u3053\u3093\u306B\u3061\u306F",ms="\u30D6\u30E9\u30A4\u30B9\u3067\u3059\u3002",gs="\u30D6\u30E9\u30A4\u30B9",hs="\u30D5\u30EB\u30B9\u30BF\u30C3\u30AF\u30A8\u30F3\u30B8\u30CB\u30A2",fs="Avatar by catalyststuff / freepik",vs={paragraph_one:"Last year student in internship as a Full Stack developer, based in Lyon, France. Through my studies, my three years work experience and personal projects, I deepened my skills in creating websites using frameworks such as",paragraph_two:"In my free time, I try to discover new technologies. Currently, I'm working on a personal project using ",paragraph_three:"I'm looking for a new job oppotunity in ",yokohama:"Yokohama",tokyo:"Tokyo",japan:"Japan"},bs="\u5C65\u6B74\u66F8\u306E\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9",ks="About",$s="Skills",ys={name:"History",title:{fiducial:"Fiducial Staffing",cpe:"CPE Lyon",conity:"Conity",dawson:"Dawson College",iut:"Institute of Technology"},description:{fiducial:"D\xE9veloppeur Full stack au sein de la DSI de Fiducial dans le bureau d'\xE9tudes des M\xE9tiers R\xE9glement\xE9s (dont 3 ans d'alternance).",fiducial_2:"Principalement affect\xE9 au pilotage et d\xE9veloppement du projet de Suivi des Interlocuteurs et du module d'\xC9laboration Budg\xE9taire interne. Ai \xE9galement supervis\xE9 l'int\xE9gration et le d\xE9veloppement de stagiaires et employ\xE9s en reconversion professionnelle.",cpe:"CPE",conity:"Stage effectu\xE9 en tant que d\xE9veloppeur full-stack et assureur qualit\xE9 chez Conity, solution num\xE9rique de suivi de projet de construction.",dawson:"Dawson College",iut:"Institute of Technology"}},ws="Works on Github",Is="Info",Ps="\u82F1\u8A9E",xs="\u30D5\u30E9\u30F3\u30B9\u8A9E",js="\u65E5\u672C\u8A9E",Ss="Read More",Cs="projects",Ts="Realised with Vite.js, Travis CI & Freepik images";var Ms={hello:_s,i_m_brice:ms,brice:gs,full_stack_engineer:hs,avatar:fs,description:vs,download_resume:bs,about:ks,skills:$s,history:ys,works:ws,info:Is,english:Ps,french:xs,japanese:js,read_more:Ss,projects:Cs,realised:Ts};const x=se({legacy:!0,globalInjection:!0,locale:"en",fallbackLocale:"en",messages:{en:Wo,fr:ps,ja:Ms}});var Ds="/portfolio/assets/briefcase.22c2ca24.svg",Fs="/portfolio/assets/docker.362bc087.svg",Ls="/portfolio/assets/email-dark.d4275cbd.svg",As="/portfolio/assets/email.75073418.svg",Bs="/portfolio/assets/freepik.471d2990.svg",qs="/portfolio/assets/github-dark.7a330b49.svg",Us="/portfolio/assets/github.921145a1.svg",Es="/portfolio/assets/graduation-cap.a590a512.svg",Ns="/portfolio/assets/js.ec8acd65.svg",zs="/portfolio/assets/linkedin-dark.3f8477bc.svg",Hs="/portfolio/assets/linkedin.7a7a5923.svg",Vs="/portfolio/assets/menu-dark.80311574.svg",Rs="/portfolio/assets/menu.b9597e4d.svg",Os="/portfolio/assets/python.fbc3b698.svg",Gs="/portfolio/assets/spring-boot.8f9ccd66.svg",Ws="/portfolio/assets/symfony.921e9a28.svg",Ys="/portfolio/assets/travis-ci.1d618cd8.svg",Js="/portfolio/assets/vitejs.0ca45da0.svg",Ks="/portfolio/assets/vue.b4cdca4a.svg",Qs=`/* color palette from <https://github.com/vuejs/theme> */

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
}`,Xs="/portfolio/assets/cv.32cbbe70.pdf",Zs="/portfolio/assets/logo-dark.6f808d03.svg",ea="/portfolio/assets/logo.28a0162b.svg",ta={getImgUrl:(e,n="svg")=>new URL({"/src/assets/avatar.jpg":B,"/src/assets/base.css":Qs,"/src/assets/cv.pdf":Xs,"/src/assets/logo-dark.svg":Zs,"/src/assets/logo.svg":ea}[`/src/assets/${e}.${n}`],self.location).href,getIconImgUrl:e=>new URL({"/src/assets/icons/briefcase.svg":Ds,"/src/assets/icons/docker.svg":Fs,"/src/assets/icons/email-dark.svg":Ls,"/src/assets/icons/email.svg":As,"/src/assets/icons/freepik.svg":Bs,"/src/assets/icons/github-dark.svg":qs,"/src/assets/icons/github.svg":Us,"/src/assets/icons/graduation-cap.svg":Es,"/src/assets/icons/js.svg":Ns,"/src/assets/icons/linkedin-dark.svg":zs,"/src/assets/icons/linkedin.svg":Hs,"/src/assets/icons/menu-dark.svg":Vs,"/src/assets/icons/menu.svg":Rs,"/src/assets/icons/python.svg":Os,"/src/assets/icons/spring-boot.svg":Gs,"/src/assets/icons/symfony.svg":Ws,"/src/assets/icons/travis-ci.svg":Ys,"/src/assets/icons/vitejs.svg":Js,"/src/assets/icons/vue.svg":Ks}[`/src/assets/icons/${e}.svg`],self.location).href,formatDate:(e,n)=>{if(P.locale(x.global.locale),n){const a=P(e).format("MMM YYYY");return x.global.locale==="ja"?a+"\u5E74":a}else return x.global.locale==="en"?P(e).format("MMM Do YY"):P(e).format("ll")}};ae.add(re);ie.watch();ce(xo).use(So).use(x).use(le).component("font-awesome-icon",de).provide("$func",ta).mount("#app");
