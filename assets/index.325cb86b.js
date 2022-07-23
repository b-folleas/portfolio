var Y=Object.defineProperty,J=Object.defineProperties;var K=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var L=(e,n,a)=>n in e?Y(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,b=(e,n)=>{for(var a in n||(n={}))Q.call(n,a)&&L(e,a,n[a]);if(F)for(var a of F(n))X.call(n,a)&&L(e,a,n[a]);return e},y=(e,n)=>J(e,K(n));import{l as Z,r as u,o as i,c as T,a as l,p as h,b as f,d as t,e as p,t as c,n as k,f as w,F as v,g as $,h as I,m as S,i as A,w as ee,T as te,j as ne,k as se,q as P,s as oe,_ as ae,u as re,v as ie,V as ce,x as le}from"./vendor.fef573d5.js";const de=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))d(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&d(o)}).observe(document,{childList:!0,subtree:!0});function a(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(r){if(r.ep)return;r.ep=!0;const s=a(r);fetch(r.href,s)}};de();var _=(e,n)=>{const a=e.__vccOpts||e;for(const[d,r]of n)a[d]=r;return a};const ue={name:"ParticlesComponent",data(){return{particlesInit:null,particlesLoaded:null}},computed:{isSmallScreen(){return window.innerWidth<768}},created(){this.particlesInit=async e=>{await Z(e)}}};function pe(e,n,a,d,r,s){const o=u("Particles",!0);return i(),T(o,{id:"tsparticles",particlesInit:r.particlesInit,particlesLoaded:r.particlesLoaded,options:{background:{color:{value:"black"}},fpsLimit:120,interactivity:{detectsOn:"window",events:{onClick:{enable:!0,mode:"push"},onHover:{enable:!0,mode:"repulse"},resize:!0},modes:{bubble:{distance:200,duration:2,opacity:.8,size:20},push:{default:!0,groups:[],quantity:4,speed:2,maxSpeed:10},repulse:{distance:100,duration:.4,factor:100,speed:2,maxSpeed:10,easing:"ease-out-quad",divs:{distance:200,duration:.4,factor:100,speed:1,maxSpeed:50,easing:"ease-out-quad",selectors:[]}}}},particles:{color:{value:["#ff6f91","#f9f871","#d65db1","6fbffd"]},collisions:{enable:!0},move:{direction:"none",enable:!0,outMode:"split",random:!1,speed:1,straight:!1},number:{density:{enable:!0,value_area:800},value:s.isSmallScreen?20:40},opacity:{value:.6},shape:{type:"circle"},size:{random:!0,value:5}},detectRetina:!0}},null,8,["particlesInit","particlesLoaded","options"])}var _e=_(ue,[["render",pe]]);const ge={},M=e=>(h("data-v-bf455dfe"),e=e(),f(),e),me={class:"container"},he=M(()=>t("div",{class:"chevron"},null,-1)),fe=M(()=>t("div",{class:"chevron"},null,-1)),ve=M(()=>t("div",{class:"chevron"},null,-1)),be=[he,fe,ve];function ke(e,n){return i(),l("div",me,be)}var $e=_(ge,[["render",ke],["__scopeId","data-v-bf455dfe"]]);const ye={name:"ProfileComponent",inject:["$func"],components:{Particles:_e,ScrollDown:$e}},we={class:"noselect"},Ie=["src","title"],Pe={class:"smaller"},xe={class:"emphasis-txt"};function Se(e,n,a,d,r,s){const o=u("Particles"),g=u("ScrollDown");return i(),l("main",null,[p(o),t("div",we,[t("img",{id:"avatar",class:"profile-img fade-in-top noselect",src:s.$func.getImgUrl("avatar","jpg"),alt:"Avatar",title:e.$t("avatar"),ref:"img"},null,8,Ie)]),t("div",{class:k(["profile-text fade-in-top",{smaller:e.$i18n.locale==="ja"}])},[t("h1",null,c(e.$t("hello")),1),t("h1",Pe,c(e.$t("i_m_brice")),1),t("h3",xe,c(e.$t("full_stack_engineer")),1),p(g)],2)])}var je=_(ye,[["render",Se],["__scopeId","data-v-1f494964"]]);const Ce={name:"HomeSection",components:{Profile:je}};function Te(e,n,a,d,r,s){const o=u("Profile");return i(),l("div",null,[p(o)])}var Me=_(Ce,[["render",Te],["__scopeId","data-v-a97107a6"]]);const De={name:"DescriptionComponent"},j=e=>(h("data-v-22308f00"),e=e(),f(),e),Fe={class:"mb-0"},Le=j(()=>t("span",{class:"emphasis-txt"}," Vue.js,\xA0Symfony\xA0&\xA0Spring boot.",-1)),Ae=j(()=>t("br",null,null,-1)),Be={class:"mb-0"},Ue=j(()=>t("span",{class:"emphasis-txt"},"Django\xA0&\xA0Docker",-1)),qe=j(()=>t("br",null,null,-1)),Ee={class:"mb-0"},Ne={class:"emphasis-txt"};function He(e,n,a,d,r,s){return i(),l("div",null,[t("article",null,[t("p",Fe,[w(c(e.$t("description.paragraph_one"))+" ",1),Le]),Ae,t("p",Be,[w(c(e.$t("description.paragraph_two"))+" ",1),Ue]),qe,t("p",Ee,[w(c(e.$t("description.paragraph_three"))+" ",1),t("span",Ne,c(e.$t("description.yokohama"))+"\xA0/\xA0"+c(e.$t("description.tokyo"))+",\xA0"+c(e.$t("description.japan")),1)])])])}var ze=_(De,[["render",He],["__scopeId","data-v-22308f00"]]);const Ve={name:"AboutSection",components:{Description:ze}},Re={class:"flex-div"},Oe=t("span",{id:"about",class:"mb-60"},null,-1),Ge={class:"h-center"};function We(e,n,a,d,r,s){const o=u("Description");return i(),l("div",Re,[Oe,t("h2",Ge,c(e.$t("about")),1),p(o,{class:"w-80"})])}var Ye=_(Ve,[["render",We]]);const Je={name:"SkillsComponent",inject:["$func"],data(){return{skillImages:[{title:"JavaScript",src:"js"},{title:"Vue.js",src:"vue"},{title:"Symfony Framework",src:"symfony"},{title:"Python",src:"python"},{title:"Spring Boot Framework",src:"spring-boot"},{title:"Docker",src:"docker"}]}},computed:{cvUrl(){return new URL("/portfolio/assets/cv.32cbbe70.pdf",self.location).href}}},Ke=e=>(h("data-v-2bc702d2"),e=e(),f(),e),Qe={class:"skills-container"},Xe={class:"flex-icons w-80"},Ze=["title","src","alt"],et=["href"],tt=Ke(()=>t("i",{class:"mr-1 fa fa-download"},null,-1));function nt(e,n,a,d,r,s){return i(),l("div",Qe,[t("div",Xe,[(i(!0),l(v,null,$(r.skillImages,o=>(i(),l("img",{key:o.title,class:"icon-img",loading:"lazy",title:o.title,src:s.$func.getIconImgUrl(o.src),alt:o.title},null,8,Ze))),128)),t("a",{class:"action-btn",href:s.cvUrl,download:"cv-folleas-brice.pdf"},[tt,w(" "+c(e.$t("download_resume")),1)],8,et)])])}var st=_(Je,[["render",nt],["__scopeId","data-v-2bc702d2"]]);const ot={name:"SkillsSection",components:{Skills:st}},B=e=>(h("data-v-141c2b2e"),e=e(),f(),e),at={id:"skillsDiv",class:"flex-div"},rt=B(()=>t("span",{id:"skills",class:"mb-60"},null,-1)),it={class:"h-center"},ct=B(()=>t("p",{class:"mb-skills"},null,-1));function lt(e,n,a,d,r,s){const o=u("Skills",!0);return i(),l("div",at,[rt,t("h2",it,c(e.$t("skills")),1),ct,p(o,{class:"w-80"})])}var dt=_(ot,[["render",lt],["__scopeId","data-v-141c2b2e"]]);const ut={inject:["$func"],props:{eventList:{type:Array,required:!0}},data(){return{activeEvent:this.eventList[0]}},methods:{setActiveTab(e){this.activeEvent=e},isThereHistoryDescriptionPart2(e){return!!this.$i18n.messages.en.history.description[e]}}},pt=e=>(h("data-v-01d311e5"),e=e(),f(),e),_t={class:"history-tabs"},gt={class:"event-selector snip1135"},mt=["onClick"],ht={key:0,class:"event-container"},ft={class:"project-module-title"},vt=pt(()=>t("br",null,null,-1)),bt={key:0,class:"mt-2"};function kt(e,n,a,d,r,s){return i(),l("div",_t,[t("ul",gt,[(i(!0),l(v,null,$(a.eventList,o=>(i(),l("li",{key:o.id,onClick:g=>s.setActiveTab(o),class:k({active:r.activeEvent===o})},[t("a",null,c(e.$t("history.title."+o.title)),1)],10,mt))),128))]),r.activeEvent?(i(),l("article",ht,[t("div",ft,[t("h3",null,c(e.$t("history.title."+r.activeEvent.title)),1)]),t("p",null,c(s.$func.formatDate(r.activeEvent.beginDate))+" - "+c(s.$func.formatDate(r.activeEvent.endDate)),1),vt,t("p",null,c(e.$t("history.description."+r.activeEvent.title)),1),s.isThereHistoryDescriptionPart2(r.activeEvent.title+"_2")?(i(),l("p",bt,c(e.$t("history.description."+r.activeEvent.title+"_2")),1)):I("",!0)])):I("",!0)])}var $t=_(ut,[["render",kt],["__scopeId","data-v-01d311e5"]]);const yt={name:"HistorySection",inject:["$func"],components:{AppTabs:$t},data(){return{events:[{id:1,title:"fiducial",beginDate:new Date(2019,9),endDate:new Date,type:"work"},{id:2,title:"cpe",beginDate:new Date(2019,9),endDate:new Date(2022,7),type:"graduation"},{id:3,title:"conity",beginDate:new Date(2019,4),endDate:new Date(2019,9),type:"work"},{id:3,title:"dawson",beginDate:new Date(2019,1),endDate:new Date(2019,4),type:"graduation"},{id:4,title:"iut",beginDate:new Date(2017,9),endDate:new Date(2019,1),type:"graduation"}]}}},wt={class:"flex-div"},It={class:"h-center"};function Pt(e,n,a,d,r,s){const o=u("AppTabs");return i(),l("div",wt,[t("h2",It,c(e.$t("history.name")),1),p(o,{eventList:r.events},null,8,["eventList"])])}var xt=_(yt,[["render",Pt]]);const St="b-folleas",jt="https://api.github.com";var Ct={async getAllProjects(){return(await fetch(`${jt}/users/${St}/repos?sort=created`)).json()}};const Tt={name:"ProjectModuleComponent",inject:["$func"],props:{name:{type:String,required:!0},url:{type:String,required:!0},description:{type:String,default:"Lorem ipsum",required:!1},language:{type:String,required:!1},topics:{type:Array,required:!1},date:{type:String,required:!1}},computed:y(b({},S("theme",["userTheme"])),{assetsSrc(){return this.userTheme=="dark-theme"?this.$func.getIconImgUrl("github"):this.$func.getIconImgUrl("github-dark")}})},U=e=>(h("data-v-12dfd424"),e=e(),f(),e),Mt={class:"project-container"},Dt={class:"project-module-header"},Ft={class:"project-module-title"},Lt=["href"],At=U(()=>t("i",{class:"fa fa-bold fa-arrow-up-right-from-square"},null,-1)),Bt=[At],Ut={key:0},qt=U(()=>t("i",{class:"fa fa-code"},null,-1)),Et={key:0};function Nt(e,n,a,d,r,s){var o;return i(),l("article",Mt,[t("div",Dt,[t("div",Ft,[t("h3",null,c(a.name),1),t("a",{href:a.url,class:"round-btn"},Bt,8,Lt)]),a.language?(i(),l("em",Ut,[qt,w(" "+c(a.language),1)])):I("",!0)]),t("p",null,c(s.$func.formatDate(a.date)),1),t("p",null,c(a.description),1),((o=a.topics)==null?void 0:o.length)>0?(i(),l("div",Et,[(i(!0),l(v,null,$(a.topics,g=>(i(),l("p",{class:"chip",key:g},c(g),1))),128))])):I("",!0)])}var Ht=_(Tt,[["render",Nt],["__scopeId","data-v-12dfd424"]]);const zt={name:"PaginationComponent",props:{maxVisibleButtons:{type:Number,required:!1,default:4},totalPages:{type:Number,required:!0},perPage:{type:Number,required:!0},currentPage:{type:Number,required:!0}},computed:{startPage(){return this.currentPage===1?1:this.currentPage===this.totalPages?this.totalPages-this.maxVisibleButtons+(this.totalPages/this.currentPage===0?1:2):this.currentPage-1},pages(){const e=[];for(let n=this.startPage;n<=Math.min(this.startPage+this.maxVisibleButtons-1,this.totalPages);n++)e.push({name:n,isDisabled:n===this.currentPage});return e},isInFirstPage(){return this.currentPage===1},isInLastPage(){return this.currentPage===this.totalPages}},methods:{onClickFirstPage(){this.$emit("pagechanged",1)},onClickPreviousPage(){this.$emit("pagechanged",this.currentPage-1)},onClickPage(e){this.$emit("pagechanged",e)},onClickNextPage(){this.$emit("pagechanged",this.currentPage+1)},onClickLastPage(){this.$emit("pagechanged",this.totalPages)},isPageActive(e){return this.currentPage===e}}},C=e=>(h("data-v-0f14d390"),e=e(),f(),e),Vt={class:"pagination"},Rt={class:"pagination-item"},Ot=["disabled"],Gt=C(()=>t("i",{class:"fa-solid fa-backward-fast"},null,-1)),Wt=[Gt],Yt={class:"pagination-item"},Jt=["disabled"],Kt=C(()=>t("i",{class:"fa-solid fa-backward-step"},null,-1)),Qt=[Kt],Xt=["name","onClick","disabled","aria-label"],Zt={class:"pagination-item"},en=["disabled"],tn=C(()=>t("i",{class:"fa-solid fa-forward-step"},null,-1)),nn=[tn],sn={class:"pagination-item"},on=["disabled"],an=C(()=>t("i",{class:"fa-solid fa-forward-fast"},null,-1)),rn=[an];function cn(e,n,a,d,r,s){return i(),l("ul",Vt,[t("li",Rt,[t("button",{name:"Go to first page",type:"button",onClick:n[0]||(n[0]=(...o)=>s.onClickFirstPage&&s.onClickFirstPage(...o)),disabled:s.isInFirstPage,"aria-label":"Go to first page"},Wt,8,Ot)]),t("li",Yt,[t("button",{name:"Go to previous page",type:"button",onClick:n[1]||(n[1]=(...o)=>s.onClickPreviousPage&&s.onClickPreviousPage(...o)),disabled:s.isInFirstPage,"aria-label":"Go to previous page"},Qt,8,Jt)]),(i(!0),l(v,null,$(s.pages,o=>(i(),l("li",{class:"pagination-item",key:o.name},[t("button",{name:`Go to page number ${o.name}`,type:"button",onClick:g=>s.onClickPage(o.name),disabled:o.isDisabled,class:k({active:s.isPageActive(o.name)}),"aria-label":`Go to page number ${o.name}`},c(o.name),11,Xt)]))),128)),t("li",Zt,[t("button",{name:"Go to next page",type:"button",onClick:n[2]||(n[2]=(...o)=>s.onClickNextPage&&s.onClickNextPage(...o)),disabled:s.isInLastPage,"aria-label":"Go to next page"},nn,8,en)]),t("li",sn,[t("button",{type:"button",onClick:n[3]||(n[3]=(...o)=>s.onClickLastPage&&s.onClickLastPage(...o)),disabled:s.isInLastPage,name:"Go to last page","aria-label":"Go to last page"},rn,8,on)])])}var ln=_(zt,[["render",cn],["__scopeId","data-v-0f14d390"]]);const dn={name:"WorksSection",components:{ProjectModule:Ht,Pagination:ln},data:()=>({projects:[],filteredProjects:[],currentProjects:[],currentPage:1,perPage:4,totalPages:10}),computed:{projectsNumbers(){const e=(this.currentPage-1)*this.perPage+1;return this.currentPage===this.totalPages?e===this.filteredProjects.length?e:e+" - "+this.filteredProjects.length:e+" - "+(e+(this.perPage-1))}},async created(){var e;this.projects=await Ct.getAllProjects(),this.filteredProjects=this.projects.filter(n=>!n.archived),this.currentProjects=this.currentProjects=this.getProjectsByPage(this.currentPage,this.perPage),this.totalPages=(e=this.filteredProjects)!=null&&e.length?Math.floor(this.filteredProjects.length/this.perPage):0,this.totalPages+=this.filteredProjects.length/this.perPage!==0?1:0},methods:{async onPageChange(e){document.getElementById("works").scrollIntoView({behavior:"smooth"}),this.currentPage=e,this.currentProjects=this.getProjectsByPage(this.currentPage,this.perPage)},getProjectsByPage(e,n){const a=(e-1)*n;return this.filteredProjects.slice(a,a+n)}}},q=e=>(h("data-v-64d8aa96"),e=e(),f(),e),un={class:"flex-div"},pn=q(()=>t("span",{id:"works",class:"mb-60"},null,-1)),_n={class:"h-center"},gn={class:"mt-3 flex-div"},mn={class:"project-div"},hn=q(()=>t("br",null,null,-1));function fn(e,n,a,d,r,s){const o=u("ProjectModule"),g=u("pagination");return i(),l("div",un,[pn,t("h2",_n,c(e.$t("works")),1),t("div",gn,[t("div",mn,[(i(!0),l(v,null,$(e.currentProjects,m=>(i(),T(o,{key:m.id,name:m.name,description:m.description,url:m.svn_url,language:m.language,topics:m.topics,date:m.updated_at,class:k(["module",{centersection:m!==e.currentProjects[0]}])},null,8,["name","description","url","language","topics","date","class"]))),128))]),t("span",null,c(s.projectsNumbers)+" / "+c(e.filteredProjects.length)+" "+c(e.$t("projects")),1),hn,p(g,{class:"pagination",totalPages:e.totalPages,perPage:e.perPage,currentPage:e.currentPage,onPagechanged:s.onPageChange},null,8,["totalPages","perPage","currentPage","onPagechanged"])])])}var vn=_(dn,[["render",fn],["__scopeId","data-v-64d8aa96"]]);const bn={name:"FindMeIconsComponent",inject:["$func"],props:{title:{type:String,required:!0},content:{type:String,required:!0},link:{type:String,required:!1}},computed:y(b({},S("theme",["userTheme"])),{assetsSrc(){const e={};return this.userTheme=="dark-theme"?(e.email=this.$func.getIconImgUrl("email"),e.linkedin=this.$func.getIconImgUrl("linkedin"),e.github=this.$func.getIconImgUrl("github")):(e.email=this.$func.getIconImgUrl("email-dark"),e.linkedin=this.$func.getIconImgUrl("linkedin-dark"),e.github=this.$func.getIconImgUrl("github-dark")),e}}),methods:{openLink(){window.open(this.link,"_blank","noopener")}}},kn=e=>(h("data-v-141b3794"),e=e(),f(),e),$n={class:"find-me-icons-header"},yn=["src","alt"],wn=kn(()=>t("div",{class:"horizontal-divider"},null,-1));function In(e,n,a,d,r,s){return i(),l("div",{class:"find-me-icons-main-container",onClick:n[0]||(n[0]=(...o)=>s.openLink&&s.openLink(...o))},[t("div",$n,[t("img",{src:s.assetsSrc[a.title],alt:a.title,loading:"lazy"},null,8,yn),wn,t("strong",null,c(a.title),1)]),t("p",null,c(a.content),1)])}var Pn=_(bn,[["render",In],["__scopeId","data-v-141b3794"]]);const xn={name:"InfoSection",components:{FindMeIcons:Pn}},Sn=e=>(h("data-v-1c767780"),e=e(),f(),e),jn={class:"main-container"},Cn=Sn(()=>t("span",{id:"info",class:"mb-60"},null,-1)),Tn={class:"h-center"},Mn={class:"flex-container"};function Dn(e,n,a,d,r,s){const o=u("FindMeIcons");return i(),l("div",jn,[Cn,t("h2",Tn,c(e.$t("info")),1),t("div",Mn,[p(o,{title:"email",content:"brice.folleas@gmail.com",link:"mailto:brice.folleas@gmail.com"}),p(o,{title:"linkedin",content:"brice-foll\xE9as",link:"https://www.linkedin.com/in/brice-foll\xE9as/"}),p(o,{title:"github",content:"b-folleas",link:"https://github.com/b-folleas"})])])}var Fn=_(xn,[["render",Dn],["__scopeId","data-v-1c767780"]]);const Ln={name:"FooterTopInfoComponent",inject:["$func"],data(){return{techImages:[{title:"Vite JS",src:"vitejs"},{title:"Travis CI",src:"travis-ci"},{title:"Freepik",src:"freepik"}]}}},An={class:"footer-top-info"},Bn={class:"h-center mb-0"},Un=["title","src","alt"];function qn(e,n,a,d,r,s){return i(),l("div",An,[t("h6",Bn,c(e.$t("realised")),1),(i(!0),l(v,null,$(r.techImages,o=>(i(),l("img",{key:o.title,title:o.title,class:"icon-img small-icon-img",loading:"lazy",src:s.$func.getIconImgUrl(o.src),alt:o.title},null,8,Un))),128))])}var En=_(Ln,[["render",qn]]);const Nn={name:"FooterSection",props:{src:{type:String,required:!0}}},E=e=>(h("data-v-b6785bf0"),e=e(),f(),e),Hn={class:"main-footer"},zn=["src"],Vn=E(()=>t("div",{class:"vertical-divider noselect"},null,-1)),Rn=E(()=>t("div",null,[t("h4",{class:"mt-1 bg-color"},"\xA9 2022")],-1));function On(e,n,a,d,r,s){return i(),l("div",null,[t("footer",null,[t("div",Hn,[t("img",{src:a.src,alt:"logo"},null,8,zn),Vn,t("h3",null,c(e.$t("brice")),1)]),Rn])])}var Gn=_(Nn,[["render",On],["__scopeId","data-v-b6785bf0"]]);const Wn={name:"ThemeButtonComponent",computed:b({},S("theme",["userTheme"])),methods:y(b({},A("theme",["setUserTheme"])),{toggleTheme(){localStorage.getItem("user-theme")==="light-theme"?this.setTheme("dark-theme"):this.setTheme("light-theme")},setTheme(e){document.documentElement.className=e,this.setUserTheme(e)}})},D=e=>(h("data-v-053ca33a"),e=e(),f(),e),Yn={for:"checkbox",class:"switch-label noselect"},Jn=D(()=>t("span",{class:"noselect"},"\u{1F319}",-1)),Kn=D(()=>t("span",{class:"noselect"},"\xA0",-1)),Qn=D(()=>t("span",{class:"noselect"},"\u2600\uFE0F",-1));function Xn(e,n,a,d,r,s){return i(),l(v,null,[t("input",{onChange:n[0]||(n[0]=(...o)=>s.toggleTheme&&s.toggleTheme(...o)),id:"checkbox",type:"checkbox",class:"switch-checkbox"},null,32),t("label",Yn,[Jn,Kn,Qn,t("div",{class:k(["switch-toggle",{"switch-toggle-checked":e.userTheme==="dark-theme"}])},null,2)])],64)}var Zn=_(Wn,[["render",Xn],["__scopeId","data-v-053ca33a"]]);const es={name:"SelectButtonComponent",data(){return{languages:[{key:"fr",name:"french"},{key:"en",name:"english"},{key:"ja",name:"japanese"}]}},computed:{currentLanguage(){return this.$i18n.locale}}},ts={class:"snip1135"},ns=["onClick"];function ss(e,n,a,d,r,s){return i(),l("ul",ts,[(i(!0),l(v,null,$(r.languages,o=>(i(),l("li",{key:o.key,class:k({active:s.currentLanguage===o.key})},[t("a",{onClick:g=>e.$i18n.locale=o.key},c(e.$t(o.name)),9,ns)],2))),128))])}var os=_(es,[["render",ss],["__scopeId","data-v-5a580816"]]);const as={name:"MenuComponent",components:{ThemeButton:Zn,SelectButton:os},emits:["close"]},rs={class:"snip1217"},is={id:"themeBtn"},cs={id:"selectBtn"};function ls(e,n,a,d,r,s){const o=u("ThemeButton"),g=u("SelectButton");return i(),l("ul",rs,[t("li",null,[t("a",{onClick:n[0]||(n[0]=m=>e.$emit("close")),href:"#about"},c(e.$t("about")),1)]),t("li",null,[t("a",{onClick:n[1]||(n[1]=m=>e.$emit("close")),href:"#works"},c(e.$t("works")),1)]),t("li",null,[t("a",{onClick:n[2]||(n[2]=m=>e.$emit("close")),href:"#info"},c(e.$t("info")),1)]),t("li",is,[p(o)]),t("li",cs,[p(g)])])}var ds=_(as,[["render",ls],["__scopeId","data-v-2f246125"]]);const us={name:"MenuButton",props:{showMenu:{type:Boolean,required:!0}},data(){return{clicked:!1}},methods:{clickMenu(){this.clicked=!this.clicked,this.$emit("toggleMenu")}}},ps=e=>(h("data-v-08ac664e"),e=e(),f(),e),_s=ps(()=>t("svg",{width:"30",height:"30",viewBox:"0 0 100 100"},[t("path",{class:"line line1",d:"M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"}),t("path",{class:"line line2",d:"M 20,50 H 80"}),t("path",{class:"line line3",d:"M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"})],-1)),gs=[_s];function ms(e,n,a,d,r,s){return i(),l("button",{type:"button",name:"Main menu",class:k(["menu",{clicked:!!a.showMenu}]),onClick:n[0]||(n[0]=(...o)=>s.clickMenu&&s.clickMenu(...o)),"aria-label":"Main Menu"},gs,2)}var hs=_(us,[["render",ms],["__scopeId","data-v-08ac664e"]]);const fs={name:"App",inject:["$func"],components:{Home:Me,Menu:ds,MenuButton:hs,About:Ye,Skills:dt,History:xt,Works:vn,Info:Fn,FooterTopInfo:En,Footer:Gn},data(){return{showMenu:!1,initUserTheme:""}},computed:y(b({},S("theme",["userTheme"])),{assetsSrc(){const e={};return this.userTheme=="dark-theme"?(e.logo=this.$func.getImgUrl("logo"),e.menu=this.$func.getIconImgUrl("menu"),e.footer=this.$func.getImgUrl("logo-dark")):(e.logo=this.$func.getImgUrl("logo-dark"),e.menu=this.$func.getIconImgUrl("menu-dark"),e.footer=this.$func.getImgUrl("logo")),e}}),async created(){const e=await this.getLocalStorageTheme()||this.getMediaPreference();document.documentElement.className=e,this.setUserTheme(e)},methods:y(b({},A("theme",["getLocalStorageTheme","setUserTheme"])),{scrollToTop(){window.innerWidth<768?document.getElementById("avatar").scrollIntoView({behavior:"smooth"}):window.scroll({top:0,left:0,behavior:"smooth"})},toggleMenu(){this.showMenu=!this.showMenu},getMediaPreference(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark-theme":"light-theme"}})},vs={id:"app"},bs={class:"nav noselect"},ks=["src"],$s={id:"about-skills",class:"large-width-section"};function ys(e,n,a,d,r,s){const o=u("Menu"),g=u("MenuButton"),m=u("Home"),N=u("About"),H=u("Skills"),z=u("History"),V=u("Works"),R=u("Info"),O=u("FooterTopInfo"),G=u("Footer");return i(),l("div",vs,[t("nav",bs,[t("img",{id:"appLogo",class:"logo noselect",src:s.assetsSrc.logo,alt:"logo",onClick:n[0]||(n[0]=(...W)=>s.scrollToTop&&s.scrollToTop(...W))},null,8,ks),p(te,null,{default:ee(()=>[r.showMenu?(i(),T(o,{key:0,onClose:s.toggleMenu},null,8,["onClose"])):I("",!0)]),_:1}),p(g,{class:"noselect","show-menu":r.showMenu,onToggleMenu:s.toggleMenu},null,8,["show-menu","onToggleMenu"])]),p(m,{name:"home",class:"section"}),t("div",$s,[p(N,{name:"about",class:"small-width-section"}),p(H,{name:"skills",class:"small-width-section"})]),p(z,{name:"history",class:"section"}),p(V,{name:"works",class:"section"}),p(R,{id:"info-section",name:"info",class:"section"}),p(O),p(G,{id:"footer",class:"footer",src:s.assetsSrc.footer},null,8,["src"])])}var ws=_(fs,[["render",ys],["__scopeId","data-v-19c5c9ef"]]),Is={namespaced:!0,state:{userTheme:"light-theme"},mutations:{setUserTheme(e,n){e.userTheme=n}},actions:{setUserTheme(e,n){localStorage.setItem("user-theme",n),e.commit("setUserTheme",n)},getLocalStorageTheme(){return localStorage.getItem("user-theme")}}};const Ps=ne({modules:{theme:Is}}),xs="Hello",Ss="I'm Brice",js="Brice",Cs="Full Stack Engineer",Ts="Avatar by catalyststuff / freepik",Ms={paragraph_one:"Last year student in internship as a Full Stack developer, based in Lyon, France. Through my studies, my three years work experience and personal projects, I deepened my skills in creating websites using frameworks such as",paragraph_two:"In my free time, I try to discover new technologies. Currently, I'm working on a personal project using ",paragraph_three:"I'm looking for a new job oppotunity in ",yokohama:"Yokohama",tokyo:"Tokyo",japan:"Japan"},Ds="Download Resume",Fs="About",Ls="Skills",As={name:"History",title:{fiducial:"Fiducial Staffing",cpe:"CPE Lyon",conity:"Conity",dawson:"Dawson College",iut:"Institute of Technology"},description:{fiducial:"D\xE9veloppeur Full stack au sein de la DSI de Fiducial dans le bureau d'\xE9tudes des M\xE9tiers R\xE9glement\xE9s.",fiducial_2:"Affect\xE9 au pilotage et d\xE9veloppement de projets destin\xE9s au r\xE9seau d'expertise comptable de la firme.",cpe:"Informatique et R\xE9seaux de Communication (IRC) - Majeure Syst\xE8mes d'Informations (SI)",conity:"Stage effectu\xE9 en tant que d\xE9veloppeur full-stack et assureur qualit\xE9 chez Conity, solution num\xE9rique de suivi de projet de construction.",dawson:"Semestre d'\xE9change au Dawson College, effectu\xE9 en partenariat avec l'IUT Lyon 1",dawson_2:"Membre du club Dawson College Blues Athletics",iut:"Sp\xE9cialisation 2\xE8me ann\xE9e : Math\xE9matiques & Technologies Avanc\xE9es"}},Bs="Works on Github",Us="Info",qs="EN",Es="FR",Ns="JA",Hs="Read More",zs="projects",Vs="Realised with Vite.js, Travis CI & Freepik images";var Rs={hello:xs,i_m_brice:Ss,brice:js,full_stack_engineer:Cs,avatar:Ts,description:Ms,download_resume:Ds,about:Fs,skills:Ls,history:As,works:Bs,info:Us,english:qs,french:Es,japanese:Ns,read_more:Hs,projects:zs,realised:Vs};const Os="Bonjour, je suis",Gs="Brice",Ws="Brice",Ys="Ing\xE9nieur Full Stack",Js="Avatar cr\xE9\xE9 par catalyststuff / freepik",Ks={paragraph_one:"\xC9tudiant en derni\xE8re ann\xE9e d'alternance en tant qu'ing\xE9nieur Full Stack, situ\xE9 \xE0 Lyon, France. Au travers de mes \xE9tudes et de mes trois ann\xE9es d'exp\xE9rience en entreprise ainsi que sur des projets personnels, j'ai pu approfondir mes comp\xE9tences dans la cr\xE9ation de site web en utilisant des frameworks tels que ",paragraph_two:"Durant mon temps libre, je cherche \xE0 d\xE9couvrir de nouvelles technologies. Actuellement, je travaille sur un projet personnel en utilisant les technologies ",paragraph_three:"Je suis \xE0 la recherche d'une opportunit\xE9 professionnelle \xE0 ",yokohama:"Yokohama",tokyo:"Yokohama",japan:"Japon."},Qs="T\xE9l\xE9charger mon CV",Xs="\xC0 propos",Zs="Comp\xE9tences",eo={name:"Parcours",title:{fiducial:"Fiducial Staffing",cpe:"CPE Lyon",conity:"Conity",dawson:"Dawson College",iut:"Institute of Technology"},description:{fiducial:"Fiducial Staffing - Ing\xE9nieur Fullstack",cpe:"CPE Lyon - Ing\xE9nieur en informatique",conity:"Conity - D\xE9veloppeur & Assureur Qualit\xE9 Web",dawson:"Dawson College",iut:"IUT Lyon 1 - Sp\xE9cialit\xE9 Math\xE9matiques"}},to="Projets Github",no="Infos",so="EN",oo="FR",ao="JA",ro="Voir plus",io="projets",co="R\xE9alis\xE9 avec Vite.js, Travis CI & les images Freepik";var lo={hello:Os,i_m_brice:Gs,brice:Ws,full_stack_engineer:Ys,avatar:Js,description:Ks,download_resume:Qs,about:Xs,skills:Zs,history:eo,works:to,info:no,english:so,french:oo,japanese:ao,read_more:ro,projects:io,realised:co};const uo="\u3053\u3093\u306B\u3061\u306F",po="\u30D6\u30E9\u30A4\u30B9\u3067\u3059\u3002",_o="\u30D6\u30E9\u30A4\u30B9",go="\u30D5\u30EB\u30B9\u30BF\u30C3\u30AF\u30A8\u30F3\u30B8\u30CB\u30A2",mo="Avatar by catalyststuff / freepik",ho={paragraph_one:"Last year student in internship as a Full Stack developer, based in Lyon, France. Through my studies, my three years work experience and personal projects, I deepened my skills in creating websites using frameworks such as",paragraph_two:"In my free time, I try to discover new technologies. Currently, I'm working on a personal project using ",paragraph_three:"I'm looking for a new job oppotunity in ",yokohama:"Yokohama",tokyo:"Tokyo",japan:"Japan"},fo="\u5C65\u6B74\u66F8\u306E\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9",vo="About",bo="Skills",ko={name:"History",title:{fiducial:"Fiducial Staffing",cpe:"CPE Lyon",conity:"Conity",dawson:"Dawson College",iut:"Institute of Technology"},description:{fiducial:"D\xE9veloppeur Full stack au sein de la DSI de Fiducial dans le bureau d'\xE9tudes des M\xE9tiers R\xE9glement\xE9s (dont 3 ans d'alternance).",fiducial_2:"Principalement affect\xE9 au pilotage et d\xE9veloppement du projet de Suivi des Interlocuteurs et du module d'\xC9laboration Budg\xE9taire interne. Ai \xE9galement supervis\xE9 l'int\xE9gration et le d\xE9veloppement de stagiaires et employ\xE9s en reconversion professionnelle.",cpe:"CPE",conity:"Stage effectu\xE9 en tant que d\xE9veloppeur full-stack et assureur qualit\xE9 chez Conity, solution num\xE9rique de suivi de projet de construction.",dawson:"Dawson College",iut:"Institute of Technology"}},$o="Works on Github",yo="Info",wo="\u82F1\u8A9E",Io="\u30D5\u30E9\u30F3\u30B9\u8A9E",Po="\u65E5\u672C\u8A9E",xo="Read More",So="projects",jo="Realised with Vite.js, Travis CI & Freepik images";var Co={hello:uo,i_m_brice:po,brice:_o,full_stack_engineer:go,avatar:mo,description:ho,download_resume:fo,about:vo,skills:bo,history:ko,works:$o,info:yo,english:wo,french:Io,japanese:Po,read_more:xo,projects:So,realised:jo};const x=se({legacy:!0,globalInjection:!0,locale:"en",fallbackLocale:"en",messages:{en:Rs,fr:lo,ja:Co}});var To="/portfolio/assets/briefcase.22c2ca24.svg",Mo="/portfolio/assets/docker.362bc087.svg",Do="/portfolio/assets/email-dark.d4275cbd.svg",Fo="/portfolio/assets/email.75073418.svg",Lo="/portfolio/assets/freepik.471d2990.svg",Ao="/portfolio/assets/github-dark.7a330b49.svg",Bo="/portfolio/assets/github.921145a1.svg",Uo="/portfolio/assets/graduation-cap.a590a512.svg",qo="/portfolio/assets/js.ec8acd65.svg",Eo="/portfolio/assets/linkedin-dark.3f8477bc.svg",No="/portfolio/assets/linkedin.7a7a5923.svg",Ho="/portfolio/assets/menu-dark.80311574.svg",zo="/portfolio/assets/menu.b9597e4d.svg",Vo="/portfolio/assets/python.fbc3b698.svg",Ro="/portfolio/assets/spring-boot.8f9ccd66.svg",Oo="/portfolio/assets/symfony.921e9a28.svg",Go="/portfolio/assets/travis-ci.1d618cd8.svg",Wo="/portfolio/assets/vitejs.0ca45da0.svg",Yo="/portfolio/assets/vue.b4cdca4a.svg",Jo="/portfolio/assets/avatar.04ec670c.jpg",Ko=`/* color palette from <https://github.com/vuejs/theme> */

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
}`,Qo="/portfolio/assets/cv.32cbbe70.pdf",Xo="/portfolio/assets/logo-dark.6f808d03.svg",Zo="/portfolio/assets/logo.28a0162b.svg",ea={getImgUrl:(e,n="svg")=>new URL({"/src/assets/avatar.jpg":Jo,"/src/assets/base.css":Ko,"/src/assets/cv.pdf":Qo,"/src/assets/logo-dark.svg":Xo,"/src/assets/logo.svg":Zo}[`/src/assets/${e}.${n}`],self.location).href,getIconImgUrl:e=>new URL({"/src/assets/icons/briefcase.svg":To,"/src/assets/icons/docker.svg":Mo,"/src/assets/icons/email-dark.svg":Do,"/src/assets/icons/email.svg":Fo,"/src/assets/icons/freepik.svg":Lo,"/src/assets/icons/github-dark.svg":Ao,"/src/assets/icons/github.svg":Bo,"/src/assets/icons/graduation-cap.svg":Uo,"/src/assets/icons/js.svg":qo,"/src/assets/icons/linkedin-dark.svg":Eo,"/src/assets/icons/linkedin.svg":No,"/src/assets/icons/menu-dark.svg":Ho,"/src/assets/icons/menu.svg":zo,"/src/assets/icons/python.svg":Vo,"/src/assets/icons/spring-boot.svg":Ro,"/src/assets/icons/symfony.svg":Oo,"/src/assets/icons/travis-ci.svg":Go,"/src/assets/icons/vitejs.svg":Wo,"/src/assets/icons/vue.svg":Yo}[`/src/assets/icons/${e}.svg`],self.location).href,formatDate:(e,n)=>{if(P.locale(x.global.locale),n){const a=P(e).format("MMM YYYY");return x.global.locale==="ja"?a+"\u5E74":a}else return x.global.locale==="en"?P(e).format("MMM Do YY"):P(e).format("ll")}};oe.add(ae);re.watch();ie(ws).use(Ps).use(x).use(ce).component("font-awesome-icon",le).provide("$func",ea).mount("#app");
