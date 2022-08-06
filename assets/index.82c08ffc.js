var K=Object.defineProperty,Q=Object.defineProperties;var X=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable;var A=(e,n,a)=>n in e?K(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,b=(e,n)=>{for(var a in n||(n={}))Z.call(n,a)&&A(e,a,n[a]);if(L)for(var a of L(n))ee.call(n,a)&&A(e,a,n[a]);return e},y=(e,n)=>Q(e,X(n));import{l as te,r as u,o as i,c as T,a as c,p as h,b as f,d as t,e as _,t as l,n as k,f as w,F as v,g as $,h as I,m as x,i as B,w as ne,T as se,j as oe,k as ae,q as P,s as re,_ as ie,u as ce,v as le,V as de,x as ue}from"./vendor.fef573d5.js";const _e=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))d(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&d(o)}).observe(document,{childList:!0,subtree:!0});function a(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(r){if(r.ep)return;r.ep=!0;const s=a(r);fetch(r.href,s)}};_e();var p=(e,n)=>{const a=e.__vccOpts||e;for(const[d,r]of n)a[d]=r;return a};const pe={name:"ParticlesComponent",data(){return{particlesInit:null,particlesLoaded:null}},computed:{isSmallScreen(){return window.innerWidth<768}},created(){this.particlesInit=async e=>{await te(e)}}};function ge(e,n,a,d,r,s){const o=u("Particles",!0);return i(),T(o,{id:"tsparticles",particlesInit:r.particlesInit,particlesLoaded:r.particlesLoaded,options:{background:{color:{value:"black"}},fpsLimit:120,interactivity:{detectsOn:"window",events:{onClick:{enable:!0,mode:"push"},onHover:{enable:!0,mode:"repulse"},resize:!0},modes:{bubble:{distance:200,duration:2,opacity:.8,size:20},push:{default:!0,groups:[],quantity:4,speed:2,maxSpeed:10},repulse:{distance:100,duration:.4,factor:100,speed:2,maxSpeed:10,easing:"ease-out-quad",divs:{distance:200,duration:.4,factor:100,speed:1,maxSpeed:50,easing:"ease-out-quad",selectors:[]}}}},particles:{color:{value:["#ff6f91","#f9f871","#d65db1","6fbffd"]},collisions:{enable:!0},move:{collisions:!0,direction:"none",enable:!0,outMode:"bounce",random:!1,speed:2,straight:!1},number:{density:{enable:!0,value_area:800},value:s.isSmallScreen?10:30},opacity:{value:.6},shape:{type:"circle"},size:{random:!0,value:5}},detectRetina:!0}},null,8,["particlesInit","particlesLoaded","options"])}var me=p(pe,[["render",ge]]);const he={},M=e=>(h("data-v-cbef9b38"),e=e(),f(),e),fe={class:"container"},ve=M(()=>t("div",{class:"chevron"},null,-1)),be=M(()=>t("div",{class:"chevron"},null,-1)),ke=M(()=>t("div",{class:"chevron"},null,-1)),$e=[ve,be,ke];function ye(e,n){return i(),c("div",fe,$e)}var we=p(he,[["render",ye],["__scopeId","data-v-cbef9b38"]]),D="/portfolio/assets/avatar.f8961f25.jpg",U="/portfolio/assets/avatar-250.3ccff08a.jpg",q="/portfolio/assets/avatar-350.8f42c870.jpg";const Ie={name:"ProfileComponent",inject:["$func"],components:{Particles:me,ScrollDown:we}},Pe=U+" 250w, "+q+" 350w, "+D+" 512w",je={class:"noselect"},xe=["title"],Se={class:"smaller"},Ce={class:"emphasis-txt big-emphasis"};function Te(e,n,a,d,r,s){const o=u("Particles"),g=u("ScrollDown");return i(),c("main",null,[_(o),t("div",je,[t("img",{srcset:Pe,sizes:"(max-width: 768px) 250px, (min-width: 768px) and (max-width: 2000px) 512px, (min-width: 2000px) 512px",id:"avatar",class:"profile-img fade-in-top noselect",src:D,alt:"Avatar",title:e.$t("avatar"),ref:"img"},null,8,xe)]),t("div",{class:k(["profile-text fade-in-top",{smaller:e.$i18n.locale==="ja"}])},[t("h1",null,l(e.$t("hello")),1),t("h1",Se,l(e.$t("i_m_brice")),1),t("p",Ce,l(e.$t("full_stack_engineer")),1),_(g)],2)])}var Me=p(Ie,[["render",Te],["__scopeId","data-v-5655aa7c"]]);const De={name:"HomeSection",components:{Profile:Me}};function Fe(e,n,a,d,r,s){const o=u("Profile");return i(),c("div",null,[_(o)])}var Le=p(De,[["render",Fe],["__scopeId","data-v-a97107a6"]]);const Ae={name:"DescriptionComponent"},S=e=>(h("data-v-22308f00"),e=e(),f(),e),Be={class:"mb-0"},Ue=S(()=>t("span",{class:"emphasis-txt"}," Vue.js,\xA0Symfony\xA0&\xA0Spring boot.",-1)),qe=S(()=>t("br",null,null,-1)),Ee={class:"mb-0"},ze=S(()=>t("span",{class:"emphasis-txt"},"Django\xA0&\xA0Docker",-1)),Ne=S(()=>t("br",null,null,-1)),He={class:"mb-0"},Ve={class:"emphasis-txt"};function Re(e,n,a,d,r,s){return i(),c("div",null,[t("article",null,[t("p",Be,[w(l(e.$t("description.paragraph_one"))+" ",1),Ue]),qe,t("p",Ee,[w(l(e.$t("description.paragraph_two"))+" ",1),ze]),Ne,t("p",He,[w(l(e.$t("description.paragraph_three"))+" ",1),t("span",Ve,l(e.$t("description.yokohama"))+"\xA0/\xA0"+l(e.$t("description.tokyo"))+",\xA0"+l(e.$t("description.japan")),1)])])])}var Ge=p(Ae,[["render",Re],["__scopeId","data-v-22308f00"]]);const Oe={name:"AboutSection",components:{Description:Ge}},We={class:"flex-div"},Ye=t("span",{id:"about",class:"mb-60"},null,-1),Je={class:"h-center"};function Ke(e,n,a,d,r,s){const o=u("Description");return i(),c("div",We,[Ye,t("h2",Je,l(e.$t("about")),1),_(o,{class:"w-80"})])}var Qe=p(Oe,[["render",Ke]]);const Xe={name:"SkillsComponent",inject:["$func"],data(){return{skillImages:[{title:"JavaScript",src:"js"},{title:"Vue.js",src:"vue"},{title:"Symfony Framework",src:"symfony"},{title:"Python",src:"python"},{title:"Spring Boot Framework",src:"spring-boot"},{title:"Docker",src:"docker"}]}},computed:{cvUrl(){return new URL("/portfolio/assets/cv.32cbbe70.pdf",self.location).href}}},Ze=e=>(h("data-v-2bc702d2"),e=e(),f(),e),et={class:"skills-container"},tt={class:"flex-icons w-80"},nt=["title","src","alt"],st=["href"],ot=Ze(()=>t("i",{class:"mr-1 fa fa-download"},null,-1));function at(e,n,a,d,r,s){return i(),c("div",et,[t("div",tt,[(i(!0),c(v,null,$(r.skillImages,o=>(i(),c("img",{key:o.title,class:"icon-img",loading:"lazy",title:o.title,src:s.$func.getIconImgUrl(o.src),alt:o.title},null,8,nt))),128)),t("a",{class:"action-btn",href:s.cvUrl,download:"cv-folleas-brice.pdf"},[ot,w(" "+l(e.$t("download_resume")),1)],8,st)])])}var rt=p(Xe,[["render",at],["__scopeId","data-v-2bc702d2"]]);const it={name:"SkillsSection",components:{Skills:rt}},E=e=>(h("data-v-141c2b2e"),e=e(),f(),e),ct={id:"skillsDiv",class:"flex-div"},lt=E(()=>t("span",{id:"skills",class:"mb-60"},null,-1)),dt={class:"h-center"},ut=E(()=>t("p",{class:"mb-skills"},null,-1));function _t(e,n,a,d,r,s){const o=u("Skills",!0);return i(),c("div",ct,[lt,t("h2",dt,l(e.$t("skills")),1),ut,_(o,{class:"w-80"})])}var pt=p(it,[["render",_t],["__scopeId","data-v-141c2b2e"]]);const gt={inject:["$func"],props:{eventList:{type:Array,required:!0}},data(){return{activeEvent:this.eventList[0]}},methods:{setActiveTab(e){this.activeEvent=e},isThereHistoryDescriptionPart2(e){return!!this.$i18n.messages.en.history.description[e]}}},mt=e=>(h("data-v-ee5d1182"),e=e(),f(),e),ht={class:"history-tabs"},ft={class:"event-selector snip1135"},vt=["onClick"],bt={class:"link"},kt={key:0,class:"event-container"},$t={class:"project-module-title"},yt={key:0},wt={key:1},It=mt(()=>t("br",null,null,-1)),Pt={key:0,class:"mt-2"};function jt(e,n,a,d,r,s){return i(),c("div",ht,[t("ul",ft,[(i(!0),c(v,null,$(a.eventList,o=>(i(),c("li",{key:o.id,onClick:g=>s.setActiveTab(o),class:k({active:r.activeEvent===o})},[t("p",bt,l(e.$t("history.title."+o.title)),1)],10,vt))),128))]),r.activeEvent?(i(),c("article",kt,[t("div",$t,[t("h3",null,l(e.$t("history.title."+r.activeEvent.title)),1)]),t("p",null,[t("span",null,l(s.$func.formatDate(r.activeEvent.beginDate))+"\xA0-\xA0 ",1),r.activeEvent.endDate==="now"?(i(),c("span",yt,l(e.$t("now")),1)):(i(),c("span",wt,l(s.$func.formatDate(r.activeEvent.endDate)),1))]),It,t("p",null,l(e.$t("history.description."+r.activeEvent.title)),1),s.isThereHistoryDescriptionPart2(r.activeEvent.title+"_2")?(i(),c("p",Pt,l(e.$t("history.description."+r.activeEvent.title+"_2")),1)):I("",!0)])):I("",!0)])}var xt=p(gt,[["render",jt],["__scopeId","data-v-ee5d1182"]]);const St={name:"HistorySection",inject:["$func"],components:{AppTabs:xt},data(){return{events:[{id:1,title:"fiducial",beginDate:new Date(2019,9),endDate:"now",type:"work"},{id:2,title:"cpe",beginDate:new Date(2019,9),endDate:new Date(2022,7),type:"graduation"},{id:3,title:"conity",beginDate:new Date(2019,4),endDate:new Date(2019,9),type:"work"},{id:3,title:"dawson",beginDate:new Date(2019,1),endDate:new Date(2019,4),type:"graduation"},{id:4,title:"iut",beginDate:new Date(2017,9),endDate:new Date(2019,1),type:"graduation"}]}}},Ct={class:"flex-div"},Tt={class:"h-center"};function Mt(e,n,a,d,r,s){const o=u("AppTabs");return i(),c("div",Ct,[t("h2",Tt,l(e.$t("history.name")),1),_(o,{eventList:r.events},null,8,["eventList"])])}var Dt=p(St,[["render",Mt]]);const Ft="b-folleas",Lt="https://api.github.com";var At={async getAllProjects(){return(await fetch(`${Lt}/users/${Ft}/repos?sort=created`)).json()}};const Bt={name:"ProjectModuleComponent",inject:["$func"],props:{name:{type:String,required:!0},url:{type:String,required:!0},description:{type:String,default:"Lorem ipsum",required:!1},language:{type:String,required:!1},topics:{type:Array,required:!1},date:{type:String,required:!1}},computed:y(b({},x("theme",["userTheme"])),{assetsSrc(){return this.userTheme=="dark-theme"?{link:this.$func.getIconImgUrl("rocket"),code:this.$func.getIconImgUrl("code")}:{link:this.$func.getIconImgUrl("rocket-dark"),code:this.$func.getIconImgUrl("code-dark")}}}),methods:{goToProject(e){window.location.href=e}}},Ut={class:"project-container"},qt={class:"project-module-header"},Et={class:"project-module-title"},zt=["name"],Nt=["src","alt"],Ht={key:0},Vt=["src","alt"],Rt={key:0};function Gt(e,n,a,d,r,s){var o;return i(),c("article",Ut,[t("div",qt,[t("div",Et,[t("h3",null,l(a.name),1),t("button",{class:"round-btn",type:"button",name:`Link to project ${a.name}`,title:"Explore the GitHub repository !  ",onClick:n[0]||(n[0]=g=>s.goToProject(a.url)),"aria-label":"Link to project"},[t("img",{src:s.assetsSrc.link,alt:a.language,loading:"lazy"},null,8,Nt)],8,zt)]),a.language?(i(),c("em",Ht,[t("img",{class:"icon-img inline-icon",src:s.assetsSrc.code,alt:a.language,loading:"lazy"},null,8,Vt),w(l(a.language),1)])):I("",!0)]),t("p",null,l(s.$func.formatDate(a.date)),1),t("p",null,l(a.description),1),((o=a.topics)==null?void 0:o.length)>0?(i(),c("div",Rt,[(i(!0),c(v,null,$(a.topics,g=>(i(),c("p",{class:"chip",key:g},l(g),1))),128))])):I("",!0)])}var Ot=p(Bt,[["render",Gt],["__scopeId","data-v-867ee38c"]]);const Wt={name:"PaginationComponent",props:{maxVisibleButtons:{type:Number,required:!1,default:4},totalPages:{type:Number,required:!0},perPage:{type:Number,required:!0},currentPage:{type:Number,required:!0}},computed:{startPage(){return this.currentPage===1?1:this.currentPage===this.totalPages?this.totalPages-this.maxVisibleButtons+(this.totalPages/this.currentPage===0?1:2):this.currentPage-1},pages(){const e=[];for(let n=this.startPage;n<=Math.min(this.startPage+this.maxVisibleButtons-1,this.totalPages);n++)e.push({name:n,isDisabled:n===this.currentPage});return e},isInFirstPage(){return this.currentPage===1},isInLastPage(){return this.currentPage===this.totalPages}},methods:{onClickFirstPage(){this.$emit("pagechanged",1)},onClickPreviousPage(){this.$emit("pagechanged",this.currentPage-1)},onClickPage(e){this.$emit("pagechanged",e)},onClickNextPage(){this.$emit("pagechanged",this.currentPage+1)},onClickLastPage(){this.$emit("pagechanged",this.totalPages)},isPageActive(e){return this.currentPage===e}}},C=e=>(h("data-v-0f14d390"),e=e(),f(),e),Yt={class:"pagination"},Jt={class:"pagination-item"},Kt=["disabled"],Qt=C(()=>t("i",{class:"fa-solid fa-backward-fast"},null,-1)),Xt=[Qt],Zt={class:"pagination-item"},en=["disabled"],tn=C(()=>t("i",{class:"fa-solid fa-backward-step"},null,-1)),nn=[tn],sn=["name","onClick","disabled","aria-label"],on={class:"pagination-item"},an=["disabled"],rn=C(()=>t("i",{class:"fa-solid fa-forward-step"},null,-1)),cn=[rn],ln={class:"pagination-item"},dn=["disabled"],un=C(()=>t("i",{class:"fa-solid fa-forward-fast"},null,-1)),_n=[un];function pn(e,n,a,d,r,s){return i(),c("ul",Yt,[t("li",Jt,[t("button",{name:"Go to first page",type:"button",onClick:n[0]||(n[0]=(...o)=>s.onClickFirstPage&&s.onClickFirstPage(...o)),disabled:s.isInFirstPage,"aria-label":"Go to first page"},Xt,8,Kt)]),t("li",Zt,[t("button",{name:"Go to previous page",type:"button",onClick:n[1]||(n[1]=(...o)=>s.onClickPreviousPage&&s.onClickPreviousPage(...o)),disabled:s.isInFirstPage,"aria-label":"Go to previous page"},nn,8,en)]),(i(!0),c(v,null,$(s.pages,o=>(i(),c("li",{class:"pagination-item",key:o.name},[t("button",{name:`Go to page number ${o.name}`,type:"button",onClick:g=>s.onClickPage(o.name),disabled:o.isDisabled,class:k({active:s.isPageActive(o.name)}),"aria-label":`Go to page number ${o.name}`},l(o.name),11,sn)]))),128)),t("li",on,[t("button",{name:"Go to next page",type:"button",onClick:n[2]||(n[2]=(...o)=>s.onClickNextPage&&s.onClickNextPage(...o)),disabled:s.isInLastPage,"aria-label":"Go to next page"},cn,8,an)]),t("li",ln,[t("button",{type:"button",onClick:n[3]||(n[3]=(...o)=>s.onClickLastPage&&s.onClickLastPage(...o)),disabled:s.isInLastPage,name:"Go to last page","aria-label":"Go to last page"},_n,8,dn)])])}var gn=p(Wt,[["render",pn],["__scopeId","data-v-0f14d390"]]);const mn={name:"WorksSection",components:{ProjectModule:Ot,Pagination:gn},data:()=>({projects:[],filteredProjects:[],currentProjects:[],currentPage:1,perPage:4,totalPages:10}),computed:{projectsNumbers(){const e=(this.currentPage-1)*this.perPage+1;return this.currentPage===this.totalPages?e===this.filteredProjects.length?e:e+" - "+this.filteredProjects.length:e+" - "+(e+(this.perPage-1))}},async created(){var e;this.projects=await At.getAllProjects(),this.filteredProjects=this.projects.filter(n=>!n.archived),this.currentProjects=this.currentProjects=this.getProjectsByPage(this.currentPage,this.perPage),this.totalPages=(e=this.filteredProjects)!=null&&e.length?Math.floor(this.filteredProjects.length/this.perPage):0,this.totalPages+=this.filteredProjects.length/this.perPage!==0?1:0},methods:{async onPageChange(e){document.getElementById("works").scrollIntoView({behavior:"smooth"}),this.currentPage=e,this.currentProjects=this.getProjectsByPage(this.currentPage,this.perPage)},getProjectsByPage(e,n){const a=(e-1)*n;return this.filteredProjects.slice(a,a+n)}}},z=e=>(h("data-v-64de5a86"),e=e(),f(),e),hn={class:"flex-div"},fn=z(()=>t("span",{id:"works",class:"mb-60"},null,-1)),vn={class:"h-center"},bn={class:"mt-3 flex-div"},kn={class:"project-div"},$n=z(()=>t("br",null,null,-1));function yn(e,n,a,d,r,s){const o=u("ProjectModule"),g=u("pagination");return i(),c("div",hn,[fn,t("h2",vn,l(e.$t("works")),1),t("div",bn,[t("div",kn,[(i(!0),c(v,null,$(e.currentProjects,m=>(i(),T(o,{key:m.id,name:m.name,description:m.description,url:m.svn_url,language:m.language,topics:m.topics,date:m.updated_at,class:k(["module",{centersection:m!==e.currentProjects[0]}])},null,8,["name","description","url","language","topics","date","class"]))),128))]),t("span",null,l(s.projectsNumbers)+" / "+l(e.filteredProjects.length)+" "+l(e.$t("projects")),1),$n,_(g,{class:"pagination",totalPages:e.totalPages,perPage:e.perPage,currentPage:e.currentPage,onPagechanged:s.onPageChange},null,8,["totalPages","perPage","currentPage","onPagechanged"])])])}var wn=p(mn,[["render",yn],["__scopeId","data-v-64de5a86"]]);const In={name:"FindMeIconsComponent",inject:["$func"],props:{title:{type:String,required:!0},content:{type:String,required:!0},link:{type:String,required:!1}},computed:y(b({},x("theme",["userTheme"])),{assetsSrc(){const e={};return this.userTheme=="dark-theme"?(e.email=this.$func.getIconImgUrl("email"),e.linkedin=this.$func.getIconImgUrl("linkedin"),e.github=this.$func.getIconImgUrl("github")):(e.email=this.$func.getIconImgUrl("email-dark"),e.linkedin=this.$func.getIconImgUrl("linkedin-dark"),e.github=this.$func.getIconImgUrl("github-dark")),e}}),methods:{openLink(){window.open(this.link,"_blank","noopener")}}},Pn=e=>(h("data-v-bcfeaaa0"),e=e(),f(),e),jn={class:"find-me-icons-header"},xn=["src","alt"],Sn=Pn(()=>t("div",{class:"horizontal-divider"},null,-1));function Cn(e,n,a,d,r,s){return i(),c("div",{class:"find-me-icons-main-container",onClick:n[0]||(n[0]=(...o)=>s.openLink&&s.openLink(...o))},[t("div",jn,[t("img",{src:s.assetsSrc[a.title],alt:a.title,loading:"lazy"},null,8,xn),Sn,t("strong",null,l(a.title),1)]),t("p",null,l(a.content),1)])}var Tn=p(In,[["render",Cn],["__scopeId","data-v-bcfeaaa0"]]);const Mn={name:"InfoSection",components:{FindMeIcons:Tn}},Dn=e=>(h("data-v-1c767780"),e=e(),f(),e),Fn={class:"main-container"},Ln=Dn(()=>t("span",{id:"info",class:"mb-60"},null,-1)),An={class:"h-center"},Bn={class:"flex-container"};function Un(e,n,a,d,r,s){const o=u("FindMeIcons");return i(),c("div",Fn,[Ln,t("h2",An,l(e.$t("info")),1),t("div",Bn,[_(o,{title:"email",content:"brice.folleas@gmail.com",link:"mailto:brice.folleas@gmail.com"}),_(o,{title:"linkedin",content:"brice-foll\xE9as",link:"https://www.linkedin.com/in/brice-foll\xE9as/"}),_(o,{title:"github",content:"b-folleas",link:"https://github.com/b-folleas"})])])}var qn=p(Mn,[["render",Un],["__scopeId","data-v-1c767780"]]);const En={name:"FooterTopInfoComponent",inject:["$func"],data(){return{techImages:[{title:"Vite JS",src:"vitejs"},{title:"Travis CI",src:"travis-ci"},{title:"Freepik",src:"freepik"}]}}},zn={class:"footer-top-info"},Nn={class:"h-center mb-0"},Hn=["title","src","alt"];function Vn(e,n,a,d,r,s){return i(),c("div",zn,[t("p",Nn,l(e.$t("realised")),1),(i(!0),c(v,null,$(r.techImages,o=>(i(),c("img",{key:o.title,title:o.title,class:"icon-img small-icon-img",loading:"lazy",src:s.$func.getIconImgUrl(o.src),alt:o.title},null,8,Hn))),128))])}var Rn=p(En,[["render",Vn]]);const Gn={name:"FooterSection",props:{src:{type:String,required:!0}}},N=e=>(h("data-v-5c9d3a90"),e=e(),f(),e),On={class:"main-footer"},Wn=["src"],Yn=N(()=>t("div",{class:"vertical-divider noselect"},null,-1)),Jn=N(()=>t("div",null,[t("h4",{class:"mt-1 bg-color"},"\xA9 2022")],-1));function Kn(e,n,a,d,r,s){return i(),c("div",null,[t("footer",null,[t("div",On,[t("img",{src:a.src,alt:"logo"},null,8,Wn),Yn,t("h3",null,l(e.$t("brice")),1)]),Jn])])}var Qn=p(Gn,[["render",Kn],["__scopeId","data-v-5c9d3a90"]]);const Xn={name:"ThemeButtonComponent",computed:b({},x("theme",["userTheme"])),methods:y(b({},B("theme",["setUserTheme"])),{toggleTheme(){localStorage.getItem("user-theme")==="light-theme"?this.setTheme("dark-theme"):this.setTheme("light-theme")},setTheme(e){document.documentElement.className=e,this.setUserTheme(e)}})},F=e=>(h("data-v-053ca33a"),e=e(),f(),e),Zn={for:"checkbox",class:"switch-label noselect"},es=F(()=>t("span",{class:"noselect"},"\u{1F319}",-1)),ts=F(()=>t("span",{class:"noselect"},"\xA0",-1)),ns=F(()=>t("span",{class:"noselect"},"\u2600\uFE0F",-1));function ss(e,n,a,d,r,s){return i(),c(v,null,[t("input",{onChange:n[0]||(n[0]=(...o)=>s.toggleTheme&&s.toggleTheme(...o)),id:"checkbox",type:"checkbox",class:"switch-checkbox"},null,32),t("label",Zn,[es,ts,ns,t("div",{class:k(["switch-toggle",{"switch-toggle-checked":e.userTheme==="dark-theme"}])},null,2)])],64)}var os=p(Xn,[["render",ss],["__scopeId","data-v-053ca33a"]]);const as={name:"SelectButtonComponent",data(){return{languages:[{key:"fr",name:"french"},{key:"en",name:"english"},{key:"ja",name:"japanese"}]}},computed:{currentLanguage(){return this.$i18n.locale}}},rs={class:"snip1135"},is=["onClick"];function cs(e,n,a,d,r,s){return i(),c("ul",rs,[(i(!0),c(v,null,$(r.languages,o=>(i(),c("li",{key:o.key,class:k({active:s.currentLanguage===o.key})},[t("a",{class:"link",onClick:g=>e.$i18n.locale=o.key},l(e.$t(o.name)),9,is)],2))),128))])}var ls=p(as,[["render",cs],["__scopeId","data-v-563051ba"]]);const ds={name:"MenuComponent",components:{ThemeButton:os,SelectButton:ls},emits:["close"]},us={class:"snip1217"},_s={id:"themeBtn"},ps={id:"selectBtn"};function gs(e,n,a,d,r,s){const o=u("ThemeButton"),g=u("SelectButton");return i(),c("ul",us,[t("li",null,[t("a",{onClick:n[0]||(n[0]=m=>e.$emit("close")),href:"#about"},l(e.$t("about")),1)]),t("li",null,[t("a",{onClick:n[1]||(n[1]=m=>e.$emit("close")),href:"#works"},l(e.$t("works")),1)]),t("li",null,[t("a",{onClick:n[2]||(n[2]=m=>e.$emit("close")),href:"#info"},l(e.$t("info")),1)]),t("li",_s,[_(o)]),t("li",ps,[_(g)])])}var ms=p(ds,[["render",gs],["__scopeId","data-v-2f246125"]]);const hs={name:"MenuButton",props:{showMenu:{type:Boolean,required:!0}},data(){return{clicked:!1}},methods:{clickMenu(){this.clicked=!this.clicked,this.$emit("toggleMenu")}}},fs=e=>(h("data-v-08ac664e"),e=e(),f(),e),vs=fs(()=>t("svg",{width:"30",height:"30",viewBox:"0 0 100 100"},[t("path",{class:"line line1",d:"M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"}),t("path",{class:"line line2",d:"M 20,50 H 80"}),t("path",{class:"line line3",d:"M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"})],-1)),bs=[vs];function ks(e,n,a,d,r,s){return i(),c("button",{type:"button",name:"Main menu",class:k(["menu",{clicked:!!a.showMenu}]),onClick:n[0]||(n[0]=(...o)=>s.clickMenu&&s.clickMenu(...o)),"aria-label":"Main Menu"},bs,2)}var $s=p(hs,[["render",ks],["__scopeId","data-v-08ac664e"]]);const ys={name:"App",inject:["$func"],components:{Home:Le,Menu:ms,MenuButton:$s,About:Qe,Skills:pt,History:Dt,Works:wn,Info:qn,FooterTopInfo:Rn,Footer:Qn},data(){return{showMenu:!1,initUserTheme:""}},computed:y(b({},x("theme",["userTheme"])),{assetsSrc(){const e={};return this.userTheme=="dark-theme"?(e.logo=this.$func.getImgUrl("logo"),e.menu=this.$func.getIconImgUrl("menu"),e.footer=this.$func.getImgUrl("logo-dark")):(e.logo=this.$func.getImgUrl("logo-dark"),e.menu=this.$func.getIconImgUrl("menu-dark"),e.footer=this.$func.getImgUrl("logo")),e}}),async created(){const e=await this.getLocalStorageTheme()||this.getMediaPreference();document.documentElement.className=e,this.setUserTheme(e)},methods:y(b({},B("theme",["getLocalStorageTheme","setUserTheme"])),{scrollToTop(){window.innerWidth<768?document.getElementById("avatar").scrollIntoView({behavior:"smooth"}):window.scroll({top:0,left:0,behavior:"smooth"})},toggleMenu(){this.showMenu=!this.showMenu},getMediaPreference(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark-theme":"light-theme"}})},ws={id:"app"},Is={class:"nav noselect"},Ps=["src"],js={id:"about-skills",class:"large-width-section"};function xs(e,n,a,d,r,s){const o=u("Menu"),g=u("MenuButton"),m=u("Home"),H=u("About"),V=u("Skills"),R=u("History"),G=u("Works"),O=u("Info"),W=u("FooterTopInfo"),Y=u("Footer");return i(),c("div",ws,[t("nav",Is,[t("img",{id:"appLogo",class:"logo noselect",src:s.assetsSrc.logo,alt:"logo",onClick:n[0]||(n[0]=(...J)=>s.scrollToTop&&s.scrollToTop(...J))},null,8,Ps),_(se,null,{default:ne(()=>[r.showMenu?(i(),T(o,{key:0,onClose:s.toggleMenu},null,8,["onClose"])):I("",!0)]),_:1}),_(g,{class:"noselect","show-menu":r.showMenu,onToggleMenu:s.toggleMenu},null,8,["show-menu","onToggleMenu"])]),_(m,{name:"home",class:"section"}),t("div",js,[_(H,{name:"about",class:"small-width-section"}),_(V,{name:"skills",class:"small-width-section"})]),_(R,{name:"history",class:"section"}),_(G,{name:"works",class:"section"}),_(O,{id:"info-section",name:"info",class:"section"}),_(W),_(Y,{id:"footer",class:"footer",src:s.assetsSrc.footer},null,8,["src"])])}var Ss=p(ys,[["render",xs],["__scopeId","data-v-0cb8ee10"]]),Cs={namespaced:!0,state:{userTheme:"light-theme"},mutations:{setUserTheme(e,n){e.userTheme=n}},actions:{setUserTheme(e,n){localStorage.setItem("user-theme",n),e.commit("setUserTheme",n)},getLocalStorageTheme(){return localStorage.getItem("user-theme")}}};const Ts=oe({modules:{theme:Cs}}),Ms="Hello",Ds="I'm Brice",Fs="Brice",Ls="Full Stack Engineer",As="Avatar by catalyststuff / freepik",Bs="Now",Us={paragraph_one:"Last year student in internship as a Full Stack developer, based in Lyon, France. Through my studies, my three years work experience and personal projects, I deepened my skills in creating websites using frameworks such as",paragraph_two:"In my free time, I try to discover new technologies. Currently, I'm working on a personal project using ",paragraph_three:"I'm looking for a new job oppotunity in ",yokohama:"Yokohama",tokyo:"Tokyo",japan:"Japan"},qs="Download Resume",Es="About",zs="Skills",Ns={name:"History",title:{fiducial:"Fiducial Staffing",cpe:"CPE Lyon",conity:"Conity",dawson:"Dawson College",iut:"Institute of Technology"},description:{fiducial:"D\xE9veloppeur Full stack au sein de la DSI de Fiducial dans le bureau d'\xE9tudes des M\xE9tiers R\xE9glement\xE9s.",fiducial_2:"Affect\xE9 au pilotage et d\xE9veloppement de projets destin\xE9s au r\xE9seau d'expertise comptable de la firme.",cpe:"Informatique et R\xE9seaux de Communication (IRC) - Majeure Syst\xE8mes d'Informations (SI)",conity:"Stage effectu\xE9 en tant que d\xE9veloppeur full-stack et assureur qualit\xE9 chez Conity, solution num\xE9rique de suivi de projet de construction.",dawson:"Semestre d'\xE9change au Dawson College, effectu\xE9 en partenariat avec l'IUT Lyon 1",dawson_2:"Membre du club Dawson College Blues Athletics",iut:"Sp\xE9cialisation 2\xE8me ann\xE9e : Math\xE9matiques & Technologies Avanc\xE9es"}},Hs="Works on Github",Vs="Info",Rs="EN",Gs="FR",Os="JA",Ws="Read More",Ys="projects",Js="Realised with Vite.js, Travis CI & Freepik images";var Ks={hello:Ms,i_m_brice:Ds,brice:Fs,full_stack_engineer:Ls,avatar:As,now:Bs,description:Us,download_resume:qs,about:Es,skills:zs,history:Ns,works:Hs,info:Vs,english:Rs,french:Gs,japanese:Os,read_more:Ws,projects:Ys,realised:Js};const Qs="Bonjour, je suis",Xs="Brice",Zs="Brice",eo="Ing\xE9nieur Full Stack",to="Avatar cr\xE9\xE9 par catalyststuff / freepik",no="Aujourd'hui",so={paragraph_one:"\xC9tudiant en derni\xE8re ann\xE9e d'alternance en tant qu'ing\xE9nieur Full Stack, situ\xE9 \xE0 Lyon, France. Au travers de mes \xE9tudes et de mes trois ann\xE9es d'exp\xE9rience en entreprise ainsi que sur des projets personnels, j'ai pu approfondir mes comp\xE9tences dans la cr\xE9ation de site web en utilisant des frameworks tels que ",paragraph_two:"Durant mon temps libre, je cherche \xE0 d\xE9couvrir de nouvelles technologies. Actuellement, je travaille sur un projet personnel en utilisant les technologies ",paragraph_three:"Je suis \xE0 la recherche d'une opportunit\xE9 professionnelle \xE0 ",yokohama:"Yokohama",tokyo:"Yokohama",japan:"Japon."},oo="T\xE9l\xE9charger mon CV",ao="\xC0 propos",ro="Comp\xE9tences",io={name:"Parcours",title:{fiducial:"Fiducial Staffing",cpe:"CPE Lyon",conity:"Conity",dawson:"Dawson College",iut:"Institute of Technology"},description:{fiducial:"Fiducial Staffing - Ing\xE9nieur Fullstack",cpe:"CPE Lyon - Ing\xE9nieur en informatique",conity:"Conity - D\xE9veloppeur & Assureur Qualit\xE9 Web",dawson:"Dawson College",iut:"IUT Lyon 1 - Sp\xE9cialit\xE9 Math\xE9matiques"}},co="Projets Github",lo="Infos",uo="EN",_o="FR",po="JA",go="Voir plus",mo="projets",ho="R\xE9alis\xE9 avec Vite.js, Travis CI & les images Freepik";var fo={hello:Qs,i_m_brice:Xs,brice:Zs,full_stack_engineer:eo,avatar:to,now:no,description:so,download_resume:oo,about:ao,skills:ro,history:io,works:co,info:lo,english:uo,french:_o,japanese:po,read_more:go,projects:mo,realised:ho};const vo="\u3053\u3093\u306B\u3061\u306F",bo="\u30D6\u30E9\u30A4\u30B9\u3067\u3059\u3002",ko="\u30D6\u30E9\u30A4\u30B9",$o="\u30D5\u30EB\u30B9\u30BF\u30C3\u30AF\u30A8\u30F3\u30B8\u30CB\u30A2",yo="\u30A2\u30D0\u30BF\u30FC by catalyststuff / freepik",wo="\u4ECA\u65E5",Io={paragraph_one:"Last year student in internship as a Full Stack developer, based in Lyon, France. Through my studies, my three years work experience and personal projects, I deepened my skills in creating websites using frameworks such as",paragraph_two:"In my free time, I try to discover new technologies. Currently, I'm working on a personal project using ",paragraph_three:"I'm looking for a new job oppotunity in ",yokohama:"Yokohama",tokyo:"Tokyo",japan:"Japan"},Po="\u5C65\u6B74\u66F8\u306E\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9",jo="About",xo="Skills",So={name:"History",title:{fiducial:"Fiducial Staffing",cpe:"CPE Lyon",conity:"\u30B3\u30CB\u30C1",dawson:"\u30C9\u30FC\u30BD\u30F3\u30AB\u30EC\u30C3\u30B8",iut:"\u30EA\u30E8\u30F3\u5DE5\u696D\u9AD8\u7B49\u5C02\u9580\u5B66\u6821"},description:{fiducial:"D\xE9veloppeur Full stack au sein de la DSI de Fiducial dans le bureau d'\xE9tudes des M\xE9tiers R\xE9glement\xE9s (dont 3 ans d'alternance).",fiducial_2:"Principalement affect\xE9 au pilotage et d\xE9veloppement du projet de Suivi des Interlocuteurs et du module d'\xC9laboration Budg\xE9taire interne. Ai \xE9galement supervis\xE9 l'int\xE9gration et le d\xE9veloppement de stagiaires et employ\xE9s en reconversion professionnelle.",cpe:"CPE",conity:"Stage effectu\xE9 en tant que d\xE9veloppeur full-stack et assureur qualit\xE9 chez Conity, solution num\xE9rique de suivi de projet de construction.",dawson:"Dawson College",iut:"Institute of Technology"}},Co="Works on Github",To="Info",Mo="\u82F1\u8A9E",Do="\u30D5\u30E9\u30F3\u30B9\u8A9E",Fo="\u65E5\u672C\u8A9E",Lo="Read More",Ao="projects",Bo="Realised with Vite.js, Travis CI & Freepik images";var Uo={hello:vo,i_m_brice:bo,brice:ko,full_stack_engineer:$o,avatar:yo,now:wo,description:Io,download_resume:Po,about:jo,skills:xo,history:So,works:Co,info:To,english:Mo,french:Do,japanese:Fo,read_more:Lo,projects:Ao,realised:Bo};const j=ae({legacy:!0,globalInjection:!0,locale:"en",fallbackLocale:"en",messages:{en:Ks,fr:fo,ja:Uo}});var qo="/portfolio/assets/briefcase.22c2ca24.svg",Eo="/portfolio/assets/code-dark.c397d647.svg",zo="/portfolio/assets/code.bb3fb8ba.svg",No="/portfolio/assets/docker.362bc087.svg",Ho="/portfolio/assets/email-dark.d4275cbd.svg",Vo="/portfolio/assets/email.75073418.svg",Ro="/portfolio/assets/freepik.471d2990.svg",Go="/portfolio/assets/github-dark.7a330b49.svg",Oo="/portfolio/assets/github.921145a1.svg",Wo="/portfolio/assets/graduation-cap.a590a512.svg",Yo="/portfolio/assets/js.ec8acd65.svg",Jo="/portfolio/assets/linkedin-dark.3f8477bc.svg",Ko="/portfolio/assets/linkedin.7a7a5923.svg",Qo="/portfolio/assets/menu-dark.80311574.svg",Xo="/portfolio/assets/menu.b9597e4d.svg",Zo="/portfolio/assets/python.fbc3b698.svg",ea="/portfolio/assets/rocket-dark.170132bd.svg",ta="/portfolio/assets/rocket.25a73509.svg",na="/portfolio/assets/spring-boot.8f9ccd66.svg",sa="/portfolio/assets/symfony.921e9a28.svg",oa="/portfolio/assets/travis-ci.1d618cd8.svg",aa="/portfolio/assets/vitejs.0ca45da0.svg",ra="/portfolio/assets/vue.b4cdca4a.svg",ia=`/* color palette from <https://github.com/vuejs/theme> */

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
}`,ca="/portfolio/assets/cv.32cbbe70.pdf",la="/portfolio/assets/logo-dark.6f808d03.svg",da="/portfolio/assets/logo.28a0162b.svg",ua={getImgUrl:(e,n="svg")=>new URL({"/src/assets/avatar-250.jpg":U,"/src/assets/avatar-350.jpg":q,"/src/assets/avatar.jpg":D,"/src/assets/base.css":ia,"/src/assets/cv.pdf":ca,"/src/assets/logo-dark.svg":la,"/src/assets/logo.svg":da}[`/src/assets/${e}.${n}`],self.location).href,getIconImgUrl:e=>new URL({"/src/assets/icons/briefcase.svg":qo,"/src/assets/icons/code-dark.svg":Eo,"/src/assets/icons/code.svg":zo,"/src/assets/icons/docker.svg":No,"/src/assets/icons/email-dark.svg":Ho,"/src/assets/icons/email.svg":Vo,"/src/assets/icons/freepik.svg":Ro,"/src/assets/icons/github-dark.svg":Go,"/src/assets/icons/github.svg":Oo,"/src/assets/icons/graduation-cap.svg":Wo,"/src/assets/icons/js.svg":Yo,"/src/assets/icons/linkedin-dark.svg":Jo,"/src/assets/icons/linkedin.svg":Ko,"/src/assets/icons/menu-dark.svg":Qo,"/src/assets/icons/menu.svg":Xo,"/src/assets/icons/python.svg":Zo,"/src/assets/icons/rocket-dark.svg":ea,"/src/assets/icons/rocket.svg":ta,"/src/assets/icons/spring-boot.svg":na,"/src/assets/icons/symfony.svg":sa,"/src/assets/icons/travis-ci.svg":oa,"/src/assets/icons/vitejs.svg":aa,"/src/assets/icons/vue.svg":ra}[`/src/assets/icons/${e}.svg`],self.location).href,formatDate:(e,n)=>{if(P.locale(j.global.locale),n){const a=P(e).format("MMM YYYY");return j.global.locale==="ja"?a+"\u5E74":a}else return j.global.locale==="en"?P(e).format("MMM Do YY"):P(e).format("ll")}};re.add(ie);ce.watch();le(Ss).use(Ts).use(j).use(de).component("font-awesome-icon",ue).provide("$func",ua).mount("#app");
