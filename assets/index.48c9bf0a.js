var Y=Object.defineProperty,J=Object.defineProperties;var K=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var L=(e,n,a)=>n in e?Y(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,b=(e,n)=>{for(var a in n||(n={}))Q.call(n,a)&&L(e,a,n[a]);if(F)for(var a of F(n))X.call(n,a)&&L(e,a,n[a]);return e},$=(e,n)=>J(e,K(n));import{l as Z,r as u,o as i,c as T,a as c,p as h,b as f,d as t,e as _,t as l,n as k,f as w,F as v,g as y,h as I,m as x,i as A,w as ee,T as te,j as ne,k as se,q as P,s as oe,_ as ae,u as re,v as ie,V as ce,x as le}from"./vendor.fef573d5.js";const de=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))d(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&d(o)}).observe(document,{childList:!0,subtree:!0});function a(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(r){if(r.ep)return;r.ep=!0;const s=a(r);fetch(r.href,s)}};de();var p=(e,n)=>{const a=e.__vccOpts||e;for(const[d,r]of n)a[d]=r;return a};const ue={name:"ParticlesComponent",data(){return{particlesInit:null,particlesLoaded:null}},computed:{isSmallScreen(){return window.innerWidth<768}},created(){this.particlesInit=async e=>{await Z(e)}}};function _e(e,n,a,d,r,s){const o=u("Particles",!0);return i(),T(o,{id:"tsparticles",particlesInit:r.particlesInit,particlesLoaded:r.particlesLoaded,options:{background:{color:{value:"black"}},fpsLimit:120,interactivity:{detectsOn:"window",events:{onClick:{enable:!0,mode:"push"},onHover:{enable:!0,mode:"repulse"},resize:!0},modes:{bubble:{distance:200,duration:2,opacity:.8,size:20},push:{default:!0,groups:[],quantity:4,speed:2,maxSpeed:10},repulse:{distance:100,duration:.4,factor:100,speed:2,maxSpeed:10,easing:"ease-out-quad",divs:{distance:200,duration:.4,factor:100,speed:1,maxSpeed:50,easing:"ease-out-quad",selectors:[]}}}},particles:{color:{value:["#ff6f91","#f9f871","#d65db1","6fbffd"]},collisions:{enable:!0},move:{collisions:!0,direction:"none",enable:!0,outMode:"bounce",random:!1,speed:2,straight:!1},number:{density:{enable:!0,value_area:800},value:s.isSmallScreen?10:30},opacity:{value:.6},shape:{type:"circle"},size:{random:!0,value:5}},detectRetina:!0}},null,8,["particlesInit","particlesLoaded","options"])}var pe=p(ue,[["render",_e]]);const ge={},M=e=>(h("data-v-cbef9b38"),e=e(),f(),e),me={class:"container"},he=M(()=>t("div",{class:"chevron"},null,-1)),fe=M(()=>t("div",{class:"chevron"},null,-1)),ve=M(()=>t("div",{class:"chevron"},null,-1)),be=[he,fe,ve];function ke(e,n){return i(),c("div",me,be)}var ye=p(ge,[["render",ke],["__scopeId","data-v-cbef9b38"]]),B="/portfolio/assets/avatar.25f2fa86.jpg",U="/portfolio/assets/avatar-350.ce037254.jpg",q="/portfolio/assets/avatar-250.cafc2e7b.jpg";const $e={name:"ProfileComponent",inject:["$func"],components:{Particles:pe,ScrollDown:ye}},E=e=>(h("data-v-74e4c9ba"),e=e(),f(),e),we=B,Ie=U,Pe={id:"profileDiv",class:"noselect"},je=E(()=>t("source",{srcset:we,media:"(min-width: 2000px)"},null,-1)),xe=E(()=>t("source",{srcset:Ie,media:"(min-width: 768px)"},null,-1)),Se=["title"],Ce={class:"smaller"},Te={class:"emphasis-txt big-emphasis"};function Me(e,n,a,d,r,s){const o=u("Particles"),g=u("ScrollDown");return i(),c("main",null,[_(o),t("div",Pe,[t("picture",null,[je,xe,t("img",{src:q,id:"avatar",alt:"Avatar",class:"profile-img fade-in-top noselect",title:e.$t("avatar"),ref:"img"},null,8,Se)])]),t("div",{class:k(["profile-text fade-in-top",{smaller:e.$i18n.locale==="ja"}])},[t("h1",null,l(e.$t("hello")),1),t("h1",Ce,l(e.$t("i_m_brice")),1),t("p",Te,l(e.$t("full_stack_engineer")),1),_(g)],2)])}var De=p($e,[["render",Me],["__scopeId","data-v-74e4c9ba"]]);const Fe={name:"HomeSection",components:{Profile:De}};function Le(e,n,a,d,r,s){const o=u("Profile");return i(),c("div",null,[_(o)])}var Ae=p(Fe,[["render",Le],["__scopeId","data-v-a97107a6"]]);const Be={name:"DescriptionComponent"},S=e=>(h("data-v-22308f00"),e=e(),f(),e),Ue={class:"mb-0"},qe=S(()=>t("span",{class:"emphasis-txt"}," Vue.js,\xA0Symfony\xA0&\xA0Spring boot.",-1)),Ee=S(()=>t("br",null,null,-1)),Ne={class:"mb-0"},ze=S(()=>t("span",{class:"emphasis-txt"},"Django\xA0&\xA0Docker",-1)),He=S(()=>t("br",null,null,-1)),Ve={class:"mb-0"},Re={class:"emphasis-txt"};function Ge(e,n,a,d,r,s){return i(),c("div",null,[t("article",null,[t("p",Ue,[w(l(e.$t("description.paragraph_one"))+" ",1),qe]),Ee,t("p",Ne,[w(l(e.$t("description.paragraph_two"))+" ",1),ze]),He,t("p",Ve,[w(l(e.$t("description.paragraph_three"))+" ",1),t("span",Re,l(e.$t("description.yokohama"))+"\xA0/\xA0"+l(e.$t("description.tokyo"))+",\xA0"+l(e.$t("description.japan")),1)])])])}var Oe=p(Be,[["render",Ge],["__scopeId","data-v-22308f00"]]);const We={name:"AboutSection",components:{Description:Oe}},Ye={class:"flex-div"},Je=t("span",{id:"about",class:"mb-60"},null,-1),Ke={class:"h-center"};function Qe(e,n,a,d,r,s){const o=u("Description");return i(),c("div",Ye,[Je,t("h2",Ke,l(e.$t("about")),1),_(o,{class:"w-80"})])}var Xe=p(We,[["render",Qe]]);const Ze={name:"SkillsComponent",inject:["$func"],data(){return{skillImages:[{title:"JavaScript",src:"js"},{title:"Vue.js",src:"vue"},{title:"Symfony Framework",src:"symfony"},{title:"Python",src:"python"},{title:"Spring Boot Framework",src:"spring-boot"},{title:"Docker",src:"docker"}]}},computed:{cvUrl(){return new URL("/portfolio/assets/cv.0e62bae7.pdf",self.location).href}}},et=e=>(h("data-v-2bc702d2"),e=e(),f(),e),tt={class:"skills-container"},nt={class:"flex-icons w-80"},st=["title","src","alt"],ot=["href"],at=et(()=>t("i",{class:"mr-1 fa fa-download"},null,-1));function rt(e,n,a,d,r,s){return i(),c("div",tt,[t("div",nt,[(i(!0),c(v,null,y(r.skillImages,o=>(i(),c("img",{key:o.title,class:"icon-img",loading:"lazy",title:o.title,src:s.$func.getIconImgUrl(o.src),alt:o.title},null,8,st))),128)),t("a",{class:"action-btn",href:s.cvUrl,download:"cv-folleas-brice.pdf"},[at,w(" "+l(e.$t("download_resume")),1)],8,ot)])])}var it=p(Ze,[["render",rt],["__scopeId","data-v-2bc702d2"]]);const ct={name:"SkillsSection",components:{Skills:it}},N=e=>(h("data-v-141c2b2e"),e=e(),f(),e),lt={id:"skillsDiv",class:"flex-div"},dt=N(()=>t("span",{id:"skills",class:"mb-60"},null,-1)),ut={class:"h-center"},_t=N(()=>t("p",{class:"mb-skills"},null,-1));function pt(e,n,a,d,r,s){const o=u("Skills",!0);return i(),c("div",lt,[dt,t("h2",ut,l(e.$t("skills")),1),_t,_(o,{class:"w-80"})])}var gt=p(ct,[["render",pt],["__scopeId","data-v-141c2b2e"]]);const mt={inject:["$func"],props:{eventList:{type:Array,required:!0}},data(){return{activeEvent:this.eventList[0]}},methods:{setActiveTab(e){this.activeEvent=e},isThereHistoryDescriptionPart2(e){return!!this.$i18n.messages.en.history.description[e]}}},ht=e=>(h("data-v-3a4c6064"),e=e(),f(),e),ft={class:"history-tabs"},vt={class:"event-selector snip1135"},bt=["onClick"],kt={class:"link"},yt={key:0,class:"event-container"},$t={class:"project-module-title"},wt={key:0},It={key:1},Pt=ht(()=>t("br",null,null,-1)),jt={key:0,class:"mt-2"};function xt(e,n,a,d,r,s){return i(),c("div",ft,[t("ul",vt,[(i(!0),c(v,null,y(a.eventList,o=>(i(),c("li",{key:o.id,onClick:g=>s.setActiveTab(o),class:k({active:r.activeEvent===o})},[t("p",kt,l(e.$t("history.title."+o.title)),1)],10,bt))),128))]),r.activeEvent?(i(),c("article",yt,[t("div",$t,[t("h3",null,l(e.$t("history.title."+r.activeEvent.title)),1)]),t("p",null,[t("span",null,l(s.$func.formatDate(r.activeEvent.beginDate))+"\xA0-\xA0 ",1),r.activeEvent.endDate==="now"?(i(),c("span",wt,l(e.$t("now")),1)):(i(),c("span",It,l(s.$func.formatDate(r.activeEvent.endDate)),1))]),Pt,t("p",null,l(e.$t("history.description."+r.activeEvent.title)),1),s.isThereHistoryDescriptionPart2(r.activeEvent.title+"_2")?(i(),c("p",jt,l(e.$t("history.description."+r.activeEvent.title+"_2")),1)):I("",!0)])):I("",!0)])}var St=p(mt,[["render",xt],["__scopeId","data-v-3a4c6064"]]);const Ct={name:"HistorySection",inject:["$func"],components:{AppTabs:St},data(){return{events:[{id:1,title:"fiducial",beginDate:new Date(2019,9),endDate:"now",type:"work"},{id:2,title:"cpe",beginDate:new Date(2019,9),endDate:new Date(2022,7),type:"graduation"},{id:3,title:"conity",beginDate:new Date(2019,4),endDate:new Date(2019,9),type:"work"},{id:3,title:"dawson",beginDate:new Date(2019,1),endDate:new Date(2019,4),type:"graduation"},{id:4,title:"iut",beginDate:new Date(2017,9),endDate:new Date(2019,1),type:"graduation"}]}}},Tt={class:"flex-div"},Mt={class:"h-center"};function Dt(e,n,a,d,r,s){const o=u("AppTabs");return i(),c("div",Tt,[t("h2",Mt,l(e.$t("history.name")),1),_(o,{eventList:r.events},null,8,["eventList"])])}var Ft=p(Ct,[["render",Dt]]);const Lt="b-folleas",At="https://api.github.com";var Bt={async getAllProjects(){return(await fetch(`${At}/users/${Lt}/repos?sort=created`)).json()}};const Ut={name:"ProjectModuleComponent",inject:["$func"],props:{name:{type:String,required:!0},url:{type:String,required:!0},description:{type:String,default:"Lorem ipsum",required:!1},language:{type:String,required:!1},topics:{type:Array,required:!1},date:{type:String,required:!1}},computed:$(b({},x("theme",["userTheme"])),{assetsSrc(){return this.userTheme=="dark-theme"?{github:this.$func.getIconImgUrl("github"),code:this.$func.getIconImgUrl("code")}:{github:this.$func.getIconImgUrl("github-dark"),code:this.$func.getIconImgUrl("code-dark")}}}),methods:{goToProject(e){window.location.href=e}}},qt={class:"project-container"},Et={class:"project-module-header"},Nt={class:"project-module-title"},zt=["name"],Ht=["src","alt"],Vt={key:0},Rt=["src","alt"],Gt={key:0};function Ot(e,n,a,d,r,s){var o;return i(),c("article",qt,[t("div",Et,[t("div",Nt,[t("h3",null,l(a.name),1),t("button",{class:"round-btn",type:"button",name:`Link to project ${a.name}`,title:"Explore the GitHub repository ! ",onClick:n[0]||(n[0]=g=>s.goToProject(a.url)),"aria-label":"Link to project"},[t("img",{class:"small-img",src:s.assetsSrc.code,alt:a.language,loading:"lazy"},null,8,Ht)],8,zt)]),a.language?(i(),c("em",Vt,[t("img",{class:"icon-img inline-icon",src:s.assetsSrc.code,alt:a.language,loading:"lazy"},null,8,Rt),w(l(a.language),1)])):I("",!0)]),t("p",null,l(s.$func.formatDate(a.date)),1),t("p",null,l(a.description),1),((o=a.topics)==null?void 0:o.length)>0?(i(),c("div",Gt,[(i(!0),c(v,null,y(a.topics,g=>(i(),c("p",{class:"chip",key:g},l(g),1))),128))])):I("",!0)])}var Wt=p(Ut,[["render",Ot],["__scopeId","data-v-25ce5494"]]);const Yt={name:"PaginationComponent",props:{maxVisibleButtons:{type:Number,required:!1,default:4},totalPages:{type:Number,required:!0},perPage:{type:Number,required:!0},currentPage:{type:Number,required:!0}},computed:{startPage(){return this.currentPage===1?1:this.currentPage===this.totalPages?this.totalPages-this.maxVisibleButtons+(this.totalPages/this.currentPage===0?1:2):this.currentPage-1},pages(){const e=[];for(let n=this.startPage;n<=Math.min(this.startPage+this.maxVisibleButtons-1,this.totalPages);n++)e.push({name:n,isDisabled:n===this.currentPage});return e},isInFirstPage(){return this.currentPage===1},isInLastPage(){return this.currentPage===this.totalPages}},methods:{onClickFirstPage(){this.$emit("pagechanged",1)},onClickPreviousPage(){this.$emit("pagechanged",this.currentPage-1)},onClickPage(e){this.$emit("pagechanged",e)},onClickNextPage(){this.$emit("pagechanged",this.currentPage+1)},onClickLastPage(){this.$emit("pagechanged",this.totalPages)},isPageActive(e){return this.currentPage===e}}},C=e=>(h("data-v-0f14d390"),e=e(),f(),e),Jt={class:"pagination"},Kt={class:"pagination-item"},Qt=["disabled"],Xt=C(()=>t("i",{class:"fa-solid fa-backward-fast"},null,-1)),Zt=[Xt],en={class:"pagination-item"},tn=["disabled"],nn=C(()=>t("i",{class:"fa-solid fa-backward-step"},null,-1)),sn=[nn],on=["name","onClick","disabled","aria-label"],an={class:"pagination-item"},rn=["disabled"],cn=C(()=>t("i",{class:"fa-solid fa-forward-step"},null,-1)),ln=[cn],dn={class:"pagination-item"},un=["disabled"],_n=C(()=>t("i",{class:"fa-solid fa-forward-fast"},null,-1)),pn=[_n];function gn(e,n,a,d,r,s){return i(),c("ul",Jt,[t("li",Kt,[t("button",{name:"Go to first page",type:"button",onClick:n[0]||(n[0]=(...o)=>s.onClickFirstPage&&s.onClickFirstPage(...o)),disabled:s.isInFirstPage,"aria-label":"Go to first page"},Zt,8,Qt)]),t("li",en,[t("button",{name:"Go to previous page",type:"button",onClick:n[1]||(n[1]=(...o)=>s.onClickPreviousPage&&s.onClickPreviousPage(...o)),disabled:s.isInFirstPage,"aria-label":"Go to previous page"},sn,8,tn)]),(i(!0),c(v,null,y(s.pages,o=>(i(),c("li",{class:"pagination-item",key:o.name},[t("button",{name:`Go to page number ${o.name}`,type:"button",onClick:g=>s.onClickPage(o.name),disabled:o.isDisabled,class:k({active:s.isPageActive(o.name)}),"aria-label":`Go to page number ${o.name}`},l(o.name),11,on)]))),128)),t("li",an,[t("button",{name:"Go to next page",type:"button",onClick:n[2]||(n[2]=(...o)=>s.onClickNextPage&&s.onClickNextPage(...o)),disabled:s.isInLastPage,"aria-label":"Go to next page"},ln,8,rn)]),t("li",dn,[t("button",{type:"button",onClick:n[3]||(n[3]=(...o)=>s.onClickLastPage&&s.onClickLastPage(...o)),disabled:s.isInLastPage,name:"Go to last page","aria-label":"Go to last page"},pn,8,un)])])}var mn=p(Yt,[["render",gn],["__scopeId","data-v-0f14d390"]]);const hn={name:"WorksSection",components:{ProjectModule:Wt,Pagination:mn},data:()=>({projects:[],filteredProjects:[],currentProjects:[],currentPage:1,perPage:4,totalPages:10}),computed:{projectsNumbers(){const e=(this.currentPage-1)*this.perPage+1;return this.currentPage===this.totalPages?e===this.filteredProjects.length?e:e+" - "+this.filteredProjects.length:e+" - "+(e+(this.perPage-1))}},async created(){var e;this.projects=await Bt.getAllProjects(),this.filteredProjects=this.projects.filter(n=>!n.archived),this.currentProjects=this.currentProjects=this.getProjectsByPage(this.currentPage,this.perPage),this.totalPages=(e=this.filteredProjects)!=null&&e.length?Math.floor(this.filteredProjects.length/this.perPage):0,this.totalPages+=this.filteredProjects.length/this.perPage!==0?1:0},methods:{async onPageChange(e){document.getElementById("works").scrollIntoView({behavior:"smooth"}),this.currentPage=e,this.currentProjects=this.getProjectsByPage(this.currentPage,this.perPage)},getProjectsByPage(e,n){const a=(e-1)*n;return this.filteredProjects.slice(a,a+n)}}},z=e=>(h("data-v-64de5a86"),e=e(),f(),e),fn={class:"flex-div"},vn=z(()=>t("span",{id:"works",class:"mb-60"},null,-1)),bn={class:"h-center"},kn={class:"mt-3 flex-div"},yn={class:"project-div"},$n=z(()=>t("br",null,null,-1));function wn(e,n,a,d,r,s){const o=u("ProjectModule"),g=u("pagination");return i(),c("div",fn,[vn,t("h2",bn,l(e.$t("works")),1),t("div",kn,[t("div",yn,[(i(!0),c(v,null,y(e.currentProjects,m=>(i(),T(o,{key:m.id,name:m.name,description:m.description,url:m.svn_url,language:m.language,topics:m.topics,date:m.updated_at,class:k(["module",{centersection:m!==e.currentProjects[0]}])},null,8,["name","description","url","language","topics","date","class"]))),128))]),t("span",null,l(s.projectsNumbers)+" / "+l(e.filteredProjects.length)+" "+l(e.$t("projects")),1),$n,_(g,{class:"pagination",totalPages:e.totalPages,perPage:e.perPage,currentPage:e.currentPage,onPagechanged:s.onPageChange},null,8,["totalPages","perPage","currentPage","onPagechanged"])])])}var In=p(hn,[["render",wn],["__scopeId","data-v-64de5a86"]]);const Pn={name:"FooterTopInfoComponent",inject:["$func"],data(){return{techImages:[{title:"Vite JS",src:"vitejs"},{title:"Travis CI",src:"travis-ci"},{title:"Freepik",src:"freepik"}]}}},jn={class:"mb-auto"},xn={class:"h-center mt-5 mb-0"},Sn={class:"techs-img"},Cn=["title","src","alt"];function Tn(e,n,a,d,r,s){return i(),c("div",jn,[t("p",xn,l(e.$t("realised")),1),t("div",Sn,[(i(!0),c(v,null,y(r.techImages,o=>(i(),c("img",{key:o.title,title:o.title,class:"icon-img small-icon-img",loading:"lazy",src:s.$func.getIconImgUrl(o.src),alt:o.title},null,8,Cn))),128))])])}var Mn=p(Pn,[["render",Tn],["__scopeId","data-v-220afaad"]]);const Dn={name:"FindMeIconsComponent",inject:["$func"],props:{title:{type:String,required:!0},content:{type:String,required:!0},link:{type:String,required:!1}},computed:$(b({},x("theme",["userTheme"])),{assetsSrc(){const e={};return this.userTheme=="dark-theme"?(e.email=this.$func.getIconImgUrl("email"),e.linkedin=this.$func.getIconImgUrl("linkedin"),e.github=this.$func.getIconImgUrl("github")):(e.email=this.$func.getIconImgUrl("email-dark"),e.linkedin=this.$func.getIconImgUrl("linkedin-dark"),e.github=this.$func.getIconImgUrl("github-dark")),e}}),methods:{openLink(){window.open(this.link,"_blank","noopener")}}},Fn=e=>(h("data-v-414f9dca"),e=e(),f(),e),Ln={class:"find-me-icons-header"},An=["src","alt"],Bn=Fn(()=>t("div",{class:"horizontal-divider"},null,-1));function Un(e,n,a,d,r,s){return i(),c("div",{class:"find-me-icons-main-container",onClick:n[0]||(n[0]=(...o)=>s.openLink&&s.openLink(...o))},[t("div",Ln,[t("img",{src:s.assetsSrc[a.title],alt:a.title,loading:"lazy"},null,8,An),Bn,t("strong",null,l(a.title),1)]),t("p",null,l(a.content),1)])}var qn=p(Dn,[["render",Un],["__scopeId","data-v-414f9dca"]]);const En={name:"FooterSection",components:{FooterTopInfo:Mn,FindMeIcons:qn},props:{src:{type:String,required:!0}}},Nn=e=>(h("data-v-6d597eb6"),e=e(),f(),e),zn={class:"flex-div"},Hn=Nn(()=>t("span",{id:"info",class:"mb-60"},null,-1)),Vn={class:"h-center"},Rn={class:"flex-container"};function Gn(e,n,a,d,r,s){const o=u("FindMeIcons"),g=u("FooterTopInfo");return i(),c("div",zn,[Hn,t("h2",Vn,l(e.$t("info")),1),t("div",Rn,[_(o,{title:"email",content:"brice.folleas@gmail.com",link:"mailto:brice.folleas@gmail.com"}),_(o,{title:"linkedin",content:"brice-foll\xE9as",link:"https://www.linkedin.com/in/brice-foll\xE9as/"}),_(o,{title:"github",content:"b-folleas",link:"https://github.com/b-folleas"})]),_(g)])}var On=p(En,[["render",Gn],["__scopeId","data-v-6d597eb6"]]);const Wn={name:"ThemeButtonComponent",computed:b({},x("theme",["userTheme"])),methods:$(b({},A("theme",["setUserTheme"])),{toggleTheme(){localStorage.getItem("user-theme")==="light-theme"?this.setTheme("dark-theme"):this.setTheme("light-theme")},setTheme(e){document.documentElement.className=e,this.setUserTheme(e)}})},D=e=>(h("data-v-053ca33a"),e=e(),f(),e),Yn={for:"checkbox",class:"switch-label noselect"},Jn=D(()=>t("span",{class:"noselect"},"\u{1F319}",-1)),Kn=D(()=>t("span",{class:"noselect"},"\xA0",-1)),Qn=D(()=>t("span",{class:"noselect"},"\u2600\uFE0F",-1));function Xn(e,n,a,d,r,s){return i(),c(v,null,[t("input",{onChange:n[0]||(n[0]=(...o)=>s.toggleTheme&&s.toggleTheme(...o)),id:"checkbox",type:"checkbox",class:"switch-checkbox"},null,32),t("label",Yn,[Jn,Kn,Qn,t("div",{class:k(["switch-toggle",{"switch-toggle-checked":e.userTheme==="dark-theme"}])},null,2)])],64)}var Zn=p(Wn,[["render",Xn],["__scopeId","data-v-053ca33a"]]);const es={name:"SelectButtonComponent",data(){return{languages:[{key:"fr",name:"french"},{key:"en",name:"english"},{key:"ja",name:"japanese"}]}},computed:{currentLanguage(){return this.$i18n.locale}}},ts={class:"snip1135"},ns=["onClick"];function ss(e,n,a,d,r,s){return i(),c("ul",ts,[(i(!0),c(v,null,y(r.languages,o=>(i(),c("li",{key:o.key,class:k({active:s.currentLanguage===o.key})},[t("a",{class:"link",onClick:g=>e.$i18n.locale=o.key},l(e.$t(o.name)),9,ns)],2))),128))])}var os=p(es,[["render",ss]]);const as={name:"MenuComponent",components:{ThemeButton:Zn,SelectButton:os},emits:["close"]},rs={class:"snip1217"},is={id:"themeBtn"},cs={id:"selectBtn"};function ls(e,n,a,d,r,s){const o=u("ThemeButton"),g=u("SelectButton");return i(),c("ul",rs,[t("li",null,[t("a",{onClick:n[0]||(n[0]=m=>e.$emit("close")),href:"#about"},l(e.$t("about")),1)]),t("li",null,[t("a",{onClick:n[1]||(n[1]=m=>e.$emit("close")),href:"#works"},l(e.$t("works")),1)]),t("li",null,[t("a",{onClick:n[2]||(n[2]=m=>e.$emit("close")),href:"#info"},l(e.$t("info")),1)]),t("li",is,[_(o)]),t("li",cs,[_(g)])])}var ds=p(as,[["render",ls],["__scopeId","data-v-4664e395"]]);const us={name:"MenuButton",props:{showMenu:{type:Boolean,required:!0}},data(){return{clicked:!1}},methods:{clickMenu(){this.clicked=!this.clicked,this.$emit("toggleMenu")}}},_s=e=>(h("data-v-08ac664e"),e=e(),f(),e),ps=_s(()=>t("svg",{width:"30",height:"30",viewBox:"0 0 100 100"},[t("path",{class:"line line1",d:"M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"}),t("path",{class:"line line2",d:"M 20,50 H 80"}),t("path",{class:"line line3",d:"M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"})],-1)),gs=[ps];function ms(e,n,a,d,r,s){return i(),c("button",{type:"button",name:"Main menu",class:k(["menu",{clicked:!!a.showMenu}]),onClick:n[0]||(n[0]=(...o)=>s.clickMenu&&s.clickMenu(...o)),"aria-label":"Main Menu"},gs,2)}var hs=p(us,[["render",ms],["__scopeId","data-v-08ac664e"]]);const fs={name:"App",inject:["$func"],components:{Home:Ae,Menu:ds,MenuButton:hs,About:Xe,Skills:gt,History:Ft,Works:In,Footer:On},data(){return{showMenu:!1,initUserTheme:""}},computed:$(b({},x("theme",["userTheme"])),{assetsSrc(){const e={};return this.userTheme=="dark-theme"?(e.logo=this.$func.getImgUrl("logo"),e.menu=this.$func.getIconImgUrl("menu"),e.footer=this.$func.getImgUrl("logo-dark")):(e.logo=this.$func.getImgUrl("logo-dark"),e.menu=this.$func.getIconImgUrl("menu-dark"),e.footer=this.$func.getImgUrl("logo")),e}}),async created(){const e=await this.getLocalStorageTheme()||this.getMediaPreference();document.documentElement.className=e,this.setUserTheme(e)},methods:$(b({},A("theme",["getLocalStorageTheme","setUserTheme"])),{scrollToTop(){window.innerWidth<768?document.getElementById("avatar").scrollIntoView({behavior:"smooth"}):window.scroll({top:0,left:0,behavior:"smooth"})},toggleMenu(){this.showMenu=!this.showMenu},getMediaPreference(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark-theme":"light-theme"}})},vs={id:"app"},bs={class:"nav noselect"},ks=["src"],ys={id:"about-skills",class:"large-width-section"};function $s(e,n,a,d,r,s){const o=u("Menu"),g=u("MenuButton"),m=u("Home"),H=u("About"),V=u("Skills"),R=u("History"),G=u("Works"),O=u("Footer");return i(),c("div",vs,[t("nav",bs,[t("img",{id:"appLogo",class:"logo noselect",src:s.assetsSrc.logo,alt:"logo",onClick:n[0]||(n[0]=(...W)=>s.scrollToTop&&s.scrollToTop(...W))},null,8,ks),_(te,null,{default:ee(()=>[r.showMenu?(i(),T(o,{key:0,onClose:s.toggleMenu},null,8,["onClose"])):I("",!0)]),_:1}),_(g,{class:"noselect","show-menu":r.showMenu,onToggleMenu:s.toggleMenu},null,8,["show-menu","onToggleMenu"])]),_(m,{name:"home",class:"section"}),t("div",ys,[_(H,{name:"about",class:"small-width-section"}),_(V,{name:"skills",class:"small-width-section"})]),_(R,{name:"history",class:"section"}),_(G,{name:"works",class:"section"}),_(O,{id:"footer",class:"section",src:s.assetsSrc.footer},null,8,["src"])])}var ws=p(fs,[["render",$s],["__scopeId","data-v-573b7d6a"]]),Is={namespaced:!0,state:{userTheme:"light-theme"},mutations:{setUserTheme(e,n){e.userTheme=n}},actions:{setUserTheme(e,n){localStorage.setItem("user-theme",n),e.commit("setUserTheme",n)},getLocalStorageTheme(){return localStorage.getItem("user-theme")}}};const Ps=ne({modules:{theme:Is}}),js="Hello",xs="I'm Brice",Ss="Brice",Cs="Full Stack Engineer",Ts="Avatar by catalyststuff / freepik",Ms="Now",Ds={paragraph_one:"Last year student in internship as a Full Stack developer, based in Lyon, France. Through my studies, my three years work experience and personal projects, I deepened my skills in creating websites using frameworks such as",paragraph_two:"In my free time, I try to discover new technologies. Currently, I'm working on a personal project using ",paragraph_three:"I'm looking for a new job oppotunity in ",yokohama:"Yokohama",tokyo:"Tokyo",japan:"Japan"},Fs="Download Resume",Ls="About",As="Skills",Bs={name:"History",title:{fiducial:"Fiducial Staffing",cpe:"CPE Lyon",conity:"Conity",dawson:"Dawson College",iut:"Institute of Technology"},description:{fiducial:"D\xE9veloppeur Full stack au sein de la DSI de Fiducial dans le bureau d'\xE9tudes des M\xE9tiers R\xE9glement\xE9s.",fiducial_2:"Affect\xE9 au pilotage et d\xE9veloppement de projets destin\xE9s au r\xE9seau d'expertise comptable de la firme.",cpe:"Informatique et R\xE9seaux de Communication (IRC) - Majeure Syst\xE8mes d'Informations (SI)",conity:"Stage effectu\xE9 en tant que d\xE9veloppeur full-stack et assureur qualit\xE9 chez Conity, solution num\xE9rique de suivi de projet de construction.",dawson:"Semestre d'\xE9change au Dawson College, effectu\xE9 en partenariat avec l'IUT Lyon 1",dawson_2:"Membre du club Dawson College Blues Athletics",iut:"Sp\xE9cialisation 2\xE8me ann\xE9e : Math\xE9matiques & Technologies Avanc\xE9es"}},Us="Works on Github",qs="Info",Es="EN",Ns="FR",zs="JA",Hs="Read More",Vs="projects",Rs="Realised with Vite.js, Travis CI & Freepik images";var Gs={hello:js,i_m_brice:xs,brice:Ss,full_stack_engineer:Cs,avatar:Ts,now:Ms,description:Ds,download_resume:Fs,about:Ls,skills:As,history:Bs,works:Us,info:qs,english:Es,french:Ns,japanese:zs,read_more:Hs,projects:Vs,realised:Rs};const Os="Bonjour, je suis",Ws="Brice",Ys="Brice",Js="Ing\xE9nieur Full Stack",Ks="Avatar cr\xE9\xE9 par catalyststuff / freepik",Qs="Aujourd'hui",Xs={paragraph_one:"\xC9tudiant en derni\xE8re ann\xE9e d'alternance en tant qu'ing\xE9nieur Full Stack, situ\xE9 \xE0 Lyon, France. Au travers de mes \xE9tudes et de mes trois ann\xE9es d'exp\xE9rience en entreprise ainsi que sur des projets personnels, j'ai pu approfondir mes comp\xE9tences dans la cr\xE9ation de site web en utilisant des frameworks tels que ",paragraph_two:"Durant mon temps libre, je cherche \xE0 d\xE9couvrir de nouvelles technologies. Actuellement, je travaille sur un projet personnel en utilisant les technologies ",paragraph_three:"Je suis \xE0 la recherche d'une opportunit\xE9 professionnelle \xE0 ",yokohama:"Yokohama",tokyo:"Yokohama",japan:"Japon."},Zs="T\xE9l\xE9charger mon CV",eo="\xC0 propos",to="Comp\xE9tences",no={name:"Parcours",title:{fiducial:"Fiducial Staffing",cpe:"CPE Lyon",conity:"Conity",dawson:"Dawson College",iut:"Institute of Technology"},description:{fiducial:"Fiducial Staffing - Ing\xE9nieur Fullstack",cpe:"CPE Lyon - Ing\xE9nieur en informatique",conity:"Conity - D\xE9veloppeur & Assureur Qualit\xE9 Web",dawson:"Dawson College",iut:"IUT Lyon 1 - Sp\xE9cialit\xE9 Math\xE9matiques"}},so="Projets Github",oo="Infos",ao="EN",ro="FR",io="JA",co="Voir plus",lo="projets",uo="R\xE9alis\xE9 avec Vite.js, Travis CI & les images Freepik";var _o={hello:Os,i_m_brice:Ws,brice:Ys,full_stack_engineer:Js,avatar:Ks,now:Qs,description:Xs,download_resume:Zs,about:eo,skills:to,history:no,works:so,info:oo,english:ao,french:ro,japanese:io,read_more:co,projects:lo,realised:uo};const po="\u3053\u3093\u306B\u3061\u306F",go="\u30D6\u30E9\u30A4\u30B9\u3067\u3059\u3002",mo="\u30D6\u30E9\u30A4\u30B9",ho="\u30D5\u30EB\u30B9\u30BF\u30C3\u30AF\u30A8\u30F3\u30B8\u30CB\u30A2",fo="\u30A2\u30D0\u30BF\u30FC by catalyststuff / freepik",vo="\u4ECA\u65E5",bo={paragraph_one:"Last year student in internship as a Full Stack developer, based in Lyon, France. Through my studies, my three years work experience and personal projects, I deepened my skills in creating websites using frameworks such as",paragraph_two:"In my free time, I try to discover new technologies. Currently, I'm working on a personal project using ",paragraph_three:"I'm looking for a new job oppotunity in ",yokohama:"Yokohama",tokyo:"Tokyo",japan:"Japan"},ko="\u5C65\u6B74\u66F8\u306E\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9",yo="About",$o="Skills",wo={name:"History",title:{fiducial:"Fiducial Staffing",cpe:"CPE Lyon",conity:"\u30B3\u30CB\u30C1",dawson:"\u30C9\u30FC\u30BD\u30F3\u30AB\u30EC\u30C3\u30B8",iut:"\u30EA\u30E8\u30F3\u5DE5\u696D\u9AD8\u7B49\u5C02\u9580\u5B66\u6821"},description:{fiducial:"D\xE9veloppeur Full stack au sein de la DSI de Fiducial dans le bureau d'\xE9tudes des M\xE9tiers R\xE9glement\xE9s (dont 3 ans d'alternance).",fiducial_2:"Principalement affect\xE9 au pilotage et d\xE9veloppement du projet de Suivi des Interlocuteurs et du module d'\xC9laboration Budg\xE9taire interne. Ai \xE9galement supervis\xE9 l'int\xE9gration et le d\xE9veloppement de stagiaires et employ\xE9s en reconversion professionnelle.",cpe:"CPE",conity:"Stage effectu\xE9 en tant que d\xE9veloppeur full-stack et assureur qualit\xE9 chez Conity, solution num\xE9rique de suivi de projet de construction.",dawson:"Dawson College",iut:"Institute of Technology"}},Io="Works on Github",Po="Info",jo="\u82F1\u8A9E",xo="\u30D5\u30E9\u30F3\u30B9\u8A9E",So="\u65E5\u672C\u8A9E",Co="Read More",To="projects",Mo="Realised with Vite.js, Travis CI & Freepik images";var Do={hello:po,i_m_brice:go,brice:mo,full_stack_engineer:ho,avatar:fo,now:vo,description:bo,download_resume:ko,about:yo,skills:$o,history:wo,works:Io,info:Po,english:jo,french:xo,japanese:So,read_more:Co,projects:To,realised:Mo};const j=se({legacy:!0,globalInjection:!0,locale:"en",fallbackLocale:"en",messages:{en:Gs,fr:_o,ja:Do}});var Fo="/portfolio/assets/briefcase.22c2ca24.svg",Lo="/portfolio/assets/code-dark.c397d647.svg",Ao="/portfolio/assets/code.bb3fb8ba.svg",Bo="/portfolio/assets/docker.362bc087.svg",Uo="/portfolio/assets/email-dark.d4275cbd.svg",qo="/portfolio/assets/email.75073418.svg",Eo="/portfolio/assets/freepik.471d2990.svg",No="/portfolio/assets/github-dark.7a330b49.svg",zo="/portfolio/assets/github.f5b58c39.svg",Ho="/portfolio/assets/graduation-cap.a590a512.svg",Vo="/portfolio/assets/js.ec8acd65.svg",Ro="/portfolio/assets/linkedin-dark.3f8477bc.svg",Go="/portfolio/assets/linkedin.7a7a5923.svg",Oo="/portfolio/assets/menu-dark.80311574.svg",Wo="/portfolio/assets/menu.b9597e4d.svg",Yo="/portfolio/assets/python.fbc3b698.svg",Jo="/portfolio/assets/rocket-dark.170132bd.svg",Ko="/portfolio/assets/rocket.25a73509.svg",Qo="/portfolio/assets/spring-boot.8f9ccd66.svg",Xo="/portfolio/assets/symfony.921e9a28.svg",Zo="/portfolio/assets/travis-ci.1d618cd8.svg",ea="/portfolio/assets/vitejs.0ca45da0.svg",ta="/portfolio/assets/vue.b4cdca4a.svg",na=`/* color palette from <https://github.com/vuejs/theme> */

:root {
    --vt-c-white: #fff;
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
    font-weight: 400;
}

body {
    min-height: 100vh;
    color: var(--color-text);
    background: var(--color-background);
    transition: color 0.2s, background-color 0.5s;
    line-height: 1.6;
    font-family: Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
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
        top: 0;
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
        top: 0;
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
        top: 0;
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
        top: 0;
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
        top: 0;
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
    outline: 0;
    padding: 10px 20px;
    text-align: center;
    transition: all 0.2s ease-in-out;
}

.action-btn:hover {
    background-color: var(--color-primary);
    box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.4);
    border: 2px solid var(--color-primary);
    color: var(--vt-c-white);
    text-decoration: none;
}

.action-link {
    cursor: pointer;
    color: var(--color-text);
    transition: all 0.2s ease-in-out;
}

.action-link:hover {
    color: var(--color-primary);
    text-decoration: none;
}

.snip1135 {
    text-align: center;
    text-transform: uppercase;
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
    color: var(--vt-c-white);
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

.inline-icon {
    margin: 0 !important;
    margin-right: 1em !important;
}

@media (max-width: 768px) {
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
}`,sa="/portfolio/assets/cv.0e62bae7.pdf",oa="/portfolio/assets/logo-dark.6f808d03.svg",aa="/portfolio/assets/logo.28a0162b.svg",ra={getImgUrl:(e,n="svg")=>new URL({"/src/assets/avatar-250.jpg":q,"/src/assets/avatar-350.jpg":U,"/src/assets/avatar.jpg":B,"/src/assets/base.css":na,"/src/assets/cv.pdf":sa,"/src/assets/logo-dark.svg":oa,"/src/assets/logo.svg":aa}[`/src/assets/${e}.${n}`],self.location).href,getIconImgUrl:e=>new URL({"/src/assets/icons/briefcase.svg":Fo,"/src/assets/icons/code-dark.svg":Lo,"/src/assets/icons/code.svg":Ao,"/src/assets/icons/docker.svg":Bo,"/src/assets/icons/email-dark.svg":Uo,"/src/assets/icons/email.svg":qo,"/src/assets/icons/freepik.svg":Eo,"/src/assets/icons/github-dark.svg":No,"/src/assets/icons/github.svg":zo,"/src/assets/icons/graduation-cap.svg":Ho,"/src/assets/icons/js.svg":Vo,"/src/assets/icons/linkedin-dark.svg":Ro,"/src/assets/icons/linkedin.svg":Go,"/src/assets/icons/menu-dark.svg":Oo,"/src/assets/icons/menu.svg":Wo,"/src/assets/icons/python.svg":Yo,"/src/assets/icons/rocket-dark.svg":Jo,"/src/assets/icons/rocket.svg":Ko,"/src/assets/icons/spring-boot.svg":Qo,"/src/assets/icons/symfony.svg":Xo,"/src/assets/icons/travis-ci.svg":Zo,"/src/assets/icons/vitejs.svg":ea,"/src/assets/icons/vue.svg":ta}[`/src/assets/icons/${e}.svg`],self.location).href,formatDate:(e,n)=>{if(P.locale(j.global.locale),n){const a=P(e).format("MMM YYYY");return j.global.locale==="ja"?a+"\u5E74":a}else return j.global.locale==="en"?P(e).format("MMM Do YY"):P(e).format("ll")}};oe.add(ae);re.watch();ie(ws).use(Ps).use(j).use(ce).component("font-awesome-icon",le).provide("$func",ra).mount("#app");
