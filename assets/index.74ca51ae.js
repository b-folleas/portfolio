var ce=Object.defineProperty,le=Object.defineProperties;var de=Object.getOwnPropertyDescriptors;var q=Object.getOwnPropertySymbols;var _e=Object.prototype.hasOwnProperty,ue=Object.prototype.propertyIsEnumerable;var N=(e,t,n)=>t in e?ce(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))_e.call(t,n)&&N(e,n,t[n]);if(q)for(var n of q(t))ue.call(t,n)&&N(e,n,t[n]);return e},$=(e,t)=>le(e,de(t));import{l as pe,r as _,o as c,c as M,a as l,p as h,b as m,d as s,e as u,f as I,t as i,n as b,g as k,h as ge,m as S,F as y,i as j,j as V,w as he,T as me,k as fe,q as ve,s as P,u as $e,_ as be,v as ke,x as ye,V as Pe,y as we}from"./vendor.56c7b044.js";const Ie=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))d(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&d(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}};Ie();var p=(e,t)=>{const n=e.__vccOpts||e;for(const[d,r]of t)n[d]=r;return n};const Se={name:"ParticlesComponent",data(){return{particlesInit:null,particlesLoaded:null}},computed:{isSmallScreen(){return window.innerWidth<768}},created(){this.particlesInit=async e=>{await pe(e)},this.particlesLoaded=async e=>{console.log("Particles container loaded",e)}}};function je(e,t,n,d,r,o){const a=_("Particles",!0);return c(),M(a,{id:"tsparticles",particlesInit:r.particlesInit,particlesLoaded:r.particlesLoaded,options:{background:{color:{value:"black"}},fpsLimit:120,interactivity:{detectsOn:"window",events:{onClick:{enable:!0,mode:"push"},onHover:{enable:!0,mode:"repulse"},resize:!0},modes:{bubble:{distance:200,duration:2,opacity:.8,size:20},push:{default:!0,groups:[],quantity:4,speed:2,maxSpeed:10},repulse:{distance:100,duration:.4,factor:100,speed:2,maxSpeed:10,easing:"ease-out-quad",divs:{distance:200,duration:.4,factor:100,speed:1,maxSpeed:50,easing:"ease-out-quad",selectors:[]}}}},particles:{color:{value:["#ff6f91","#f9f871","#d65db1","6fbffd"]},collisions:{enable:!0},move:{direction:"none",enable:!0,outMode:"split",random:!1,speed:1,straight:!1},number:{density:{enable:!0,value_area:800},value:o.isSmallScreen?20:40},opacity:{value:.6},shape:{type:"circle"},size:{random:!0,value:5}},detectRetina:!0}},null,8,["particlesInit","particlesLoaded","options"])}var Ce=p(Se,[["render",je]]);const Me={},T=e=>(h("data-v-bf455dfe"),e=e(),m(),e),Te={class:"container"},Le=T(()=>s("div",{class:"chevron"},null,-1)),Be=T(()=>s("div",{class:"chevron"},null,-1)),Fe=T(()=>s("div",{class:"chevron"},null,-1)),xe=[Le,Be,Fe];function Ue(e,t){return c(),l("div",Te,xe)}var De=p(Me,[["render",Ue],["__scopeId","data-v-bf455dfe"]]);const Ae={name:"ProfileComponent",components:{Particles:Ce,ScrollDown:De},computed:{avatar(){return"https://github.com/b-folleas.png"}}},qe={key:0,class:"noselect"},Ne=["src"],Ve={class:"smaller"},Re={class:"emphasis-txt"};function He(e,t,n,d,r,o){const a=_("Particles"),f=_("ScrollDown");return c(),l("main",null,[u(a),o.avatar?(c(),l("div",qe,[s("img",{class:"profile-img fade-in-top noselect",src:o.avatar,alt:"Avatar",ref:"img"},null,8,Ne)])):I("",!0),s("div",{class:b(["profile-text fade-in-top",{smaller:e.$i18n.locale==="ja"}])},[s("h1",null,i(e.$t("hello")),1),s("h1",Ve,i(e.$t("i_m_brice")),1),s("h3",Re,i(e.$t("full_stack_engineer")),1),u(f)],2)])}var Ee=p(Ae,[["render",He],["__scopeId","data-v-057c3f51"]]);const We={name:"HomeSection",components:{Profile:Ee}};function Ye(e,t,n,d,r,o){const a=_("Profile");return c(),l("div",null,[u(a)])}var Je=p(We,[["render",Ye],["__scopeId","data-v-a97107a6"]]);const Oe={name:"DescriptionComponent"},R=e=>(h("data-v-300672c4"),e=e(),m(),e),ze={class:"mb-0"},Ge={class:"emphasis-txt"},Ke=R(()=>s("br",null,null,-1)),Qe={class:"mb-0"},Xe={class:"emphasis-txt"},Ze=R(()=>s("br",null,null,-1)),es={class:"mb-0"},ss={class:"emphasis-txt"};function ts(e,t,n,d,r,o){return c(),l("article",null,[s("p",ze,[k(i(e.$t("description.paragraph_one"))+" ",1),s("span",Ge,i(e.$t("description.vue_symfo_springboot")),1)]),Ke,s("p",Qe,[k(i(e.$t("description.paragraph_two"))+" ",1),s("span",Xe,i(e.$t("description.django_and_docker")),1)]),Ze,s("p",es,[k(i(e.$t("description.paragraph_three"))+" ",1),s("span",ss,i(e.$t("description.yokohama_tokyo_japan")),1)])])}var os=p(Oe,[["render",ts],["__scopeId","data-v-300672c4"]]);const ns={name:"AboutSection",components:{Description:os}},as=e=>(h("data-v-4c69e694"),e=e(),m(),e),rs=as(()=>s("span",{id:"about",class:"mb-60"},null,-1)),is={class:"h-center"};function cs(e,t,n,d,r,o){const a=_("Description");return c(),l("div",null,[rs,s("h2",is,i(e.$t("about")),1),u(a,{class:"w-80"})])}var ls=p(ns,[["render",cs],["__scopeId","data-v-4c69e694"]]),L="/portfolio/assets/js.ec8acd65.svg",B="/portfolio/assets/vue.b4cdca4a.svg",F="/portfolio/assets/symfony.1608e95e.svg",x="/portfolio/assets/python.fbc3b698.svg",U="/portfolio/assets/spring-boot.8f9ccd66.svg",D="/portfolio/assets/docker.362bc087.svg";const ds={name:"SkillsComponent",computed:{cvUrl(){return new URL("/portfolio/assets/cv.32cbbe70.pdf",self.location).href}}},_s=e=>(h("data-v-0756895c"),e=e(),m(),e),us={class:"skills-container"},ps={class:"flex-icons w-80"},gs=ge('<img class="icon-img" title="JavaScript" src="'+L+'" alt="JavaScript" data-v-0756895c><img class="icon-img" title="Vue.js" src="'+B+'" alt="Vue.js" data-v-0756895c><img class="icon-img" title="Symfony Framework" src="'+F+'" alt="Symfony" data-v-0756895c><img class="icon-img" title="Python" src="'+x+'" alt="Python" data-v-0756895c><img class="icon-img" title="Spring Boot Framework" src="'+U+'" alt="Spring Boot" data-v-0756895c><img class="icon-img" title="Docker" src="'+D+'" alt="Docker" data-v-0756895c>',6),hs=["href"],ms=_s(()=>s("i",{class:"mr-1 fa fa-download"},null,-1));function fs(e,t,n,d,r,o){return c(),l("div",us,[s("div",ps,[gs,s("a",{class:"action-btn",href:o.cvUrl,download:"cv-folleas-brice.pdf"},[ms,k(" "+i(e.$t("download_resume")),1)],8,hs)])])}var vs=p(ds,[["render",fs],["__scopeId","data-v-0756895c"]]);const $s={name:"SkillsSection",components:{Skills:vs}},H=e=>(h("data-v-4660ab7e"),e=e(),m(),e),bs={id:"skillsDiv"},ks=H(()=>s("span",{id:"skills",class:"mb-60"},null,-1)),ys={class:"h-center"},Ps=H(()=>s("p",{class:"mb-skills"},null,-1));function ws(e,t,n,d,r,o){const a=_("Skills",!0);return c(),l("div",bs,[ks,s("h2",ys,i(e.$t("skills")),1),Ps,u(a,{class:"w-80"})])}var Is=p($s,[["render",ws],["__scopeId","data-v-4660ab7e"]]);const Ss="b-folleas",js="https://api.github.com";var Cs={async getAllProjects(){return(await fetch(`${js}/users/${Ss}/repos?sort=updated`)).json()}};const Ms={name:"ProjectModuleComponent",inject:["$func"],props:{name:{type:String,required:!0},url:{type:String,required:!0},description:{type:String,default:"Lorem ipsum",required:!1},language:{type:String,required:!1},topics:{type:Array,required:!1},date:{type:String,required:!1}},computed:$(v({},S("theme",["userTheme"])),{assetsSrc(){return this.userTheme=="dark-theme"?this.$func.getIconImgUrl("github"):this.$func.getIconImgUrl("github-dark")}})},E=e=>(h("data-v-63bad1a4"),e=e(),m(),e),Ts={class:"project-container"},Ls={class:"project-module-header"},Bs={class:"project-module-title"},Fs=["href"],xs=E(()=>s("i",{class:"fa fa-bold fa-arrow-up-right-from-square"},null,-1)),Us=[xs],Ds={key:0},As=E(()=>s("i",{class:"fa fa-code"},null,-1)),qs={key:0};function Ns(e,t,n,d,r,o){var a;return c(),l("article",Ts,[s("div",Ls,[s("div",Bs,[s("h3",null,i(n.name),1),s("a",{href:n.url,class:"round-btn"},Us,8,Fs)]),n.language?(c(),l("em",Ds,[As,k(" "+i(n.language),1)])):I("",!0)]),s("p",null,i(o.$func.formatDate(n.date)),1),s("p",null,i(n.description),1),((a=n.topics)==null?void 0:a.length)>0?(c(),l("div",qs,[(c(!0),l(y,null,j(n.topics,f=>(c(),l("p",{class:"chip",key:f},i(f),1))),128))])):I("",!0)])}var Vs=p(Ms,[["render",Ns],["__scopeId","data-v-63bad1a4"]]);const Rs={name:"PaginationComponent",props:{maxVisibleButtons:{type:Number,required:!1,default:4},totalPages:{type:Number,required:!0},perPage:{type:Number,required:!0},currentPage:{type:Number,required:!0}},computed:{startPage(){return this.currentPage===1?1:this.currentPage===this.totalPages?this.totalPages-this.maxVisibleButtons+(this.totalPages/this.currentPage===0?1:2):this.currentPage-1},pages(){const e=[];for(let t=this.startPage;t<=Math.min(this.startPage+this.maxVisibleButtons-1,this.totalPages);t++)e.push({name:t,isDisabled:t===this.currentPage});return e},isInFirstPage(){return this.currentPage===1},isInLastPage(){return this.currentPage===this.totalPages}},methods:{onClickFirstPage(){this.$emit("pagechanged",1)},onClickPreviousPage(){this.$emit("pagechanged",this.currentPage-1)},onClickPage(e){this.$emit("pagechanged",e)},onClickNextPage(){this.$emit("pagechanged",this.currentPage+1)},onClickLastPage(){this.$emit("pagechanged",this.totalPages)},isPageActive(e){return this.currentPage===e}}},C=e=>(h("data-v-1743f737"),e=e(),m(),e),Hs={class:"pagination"},Es={class:"pagination-item"},Ws=["disabled"],Ys=C(()=>s("i",{class:"fa-solid fa-backward-fast"},null,-1)),Js=[Ys],Os={class:"pagination-item"},zs=["disabled"],Gs=C(()=>s("i",{class:"fa-solid fa-backward-step"},null,-1)),Ks=[Gs],Qs=["onClick","disabled","aria-label"],Xs={class:"pagination-item"},Zs=["disabled"],et=C(()=>s("i",{class:"fa-solid fa-forward-step"},null,-1)),st=[et],tt={class:"pagination-item"},ot=["disabled"],nt=C(()=>s("i",{class:"fa-solid fa-forward-fast"},null,-1)),at=[nt];function rt(e,t,n,d,r,o){return c(),l("ul",Hs,[s("li",Es,[s("button",{type:"button",onClick:t[0]||(t[0]=(...a)=>o.onClickFirstPage&&o.onClickFirstPage(...a)),disabled:o.isInFirstPage,"aria-label":"Go to first page"},Js,8,Ws)]),s("li",Os,[s("button",{type:"button",onClick:t[1]||(t[1]=(...a)=>o.onClickPreviousPage&&o.onClickPreviousPage(...a)),disabled:o.isInFirstPage},Ks,8,zs)]),(c(!0),l(y,null,j(o.pages,a=>(c(),l("li",{class:"pagination-item",key:a.name},[s("button",{type:"button",onClick:f=>o.onClickPage(a.name),disabled:a.isDisabled,class:b({active:o.isPageActive(a.name)}),"aria-label":`Go to page number ${a.name}`},i(a.name),11,Qs)]))),128)),s("li",Xs,[s("button",{type:"button",onClick:t[2]||(t[2]=(...a)=>o.onClickNextPage&&o.onClickNextPage(...a)),disabled:o.isInLastPage},st,8,Zs)]),s("li",tt,[s("button",{type:"button",onClick:t[3]||(t[3]=(...a)=>o.onClickLastPage&&o.onClickLastPage(...a)),disabled:o.isInLastPage},at,8,ot)])])}var it=p(Rs,[["render",rt],["__scopeId","data-v-1743f737"]]);const ct={name:"WorksSection",components:{ProjectModule:Vs,Pagination:it},data:()=>({projects:[],filteredProjects:[],currentProjects:[],currentPage:1,perPage:4,totalPages:10}),computed:{projectsNumbers(){const e=(this.currentPage-1)*this.perPage+1;return this.currentPage===this.totalPages?e===this.filteredProjects.length?e:e+" - "+this.filteredProjects.length:e+" - "+(e+(this.perPage-1))}},async created(){var e;this.projects=await Cs.getAllProjects(),this.filteredProjects=this.projects.filter(t=>!t.archived),this.currentProjects=this.currentProjects=this.getProjectsByPage(this.currentPage,this.perPage),this.totalPages=(e=this.filteredProjects)!=null&&e.length?Math.floor(this.filteredProjects.length/this.perPage):0,this.totalPages+=this.filteredProjects.length/this.perPage!==0?1:0},methods:{async onPageChange(e){document.getElementById("works").scrollIntoView(),this.currentPage=e,this.currentProjects=this.getProjectsByPage(this.currentPage,this.perPage)},getProjectsByPage(e,t){const n=(e-1)*t;return this.filteredProjects.slice(n,n+t)}}},W=e=>(h("data-v-4f404188"),e=e(),m(),e),lt=W(()=>s("span",{id:"works",class:"mb-60"},null,-1)),dt={class:"h-center"},_t={class:"mt-3"},ut={class:"project-div"},pt=W(()=>s("br",null,null,-1));function gt(e,t,n,d,r,o){const a=_("ProjectModule"),f=_("pagination");return c(),l("div",null,[lt,s("h2",dt,i(e.$t("works")),1),s("div",_t,[s("div",ut,[(c(!0),l(y,null,j(e.currentProjects,g=>(c(),M(a,{key:g.id,name:g.name,description:g.description,url:g.svn_url,language:g.language,topics:g.topics,date:g.updated_at,class:b(["module",{centersection:g!==e.currentProjects[0]}])},null,8,["name","description","url","language","topics","date","class"]))),128))]),s("span",null,i(o.projectsNumbers)+" / "+i(e.filteredProjects.length)+" "+i(e.$t("projects")),1),pt,u(f,{class:"pagination",totalPages:e.totalPages,perPage:e.perPage,currentPage:e.currentPage,onPagechanged:o.onPageChange},null,8,["totalPages","perPage","currentPage","onPagechanged"])])])}var ht=p(ct,[["render",gt],["__scopeId","data-v-4f404188"]]),Y="/portfolio/assets/briefcase.22c2ca24.svg",J="/portfolio/assets/email-dark.d4275cbd.svg",O="/portfolio/assets/email.75073418.svg",z="/portfolio/assets/github-dark.7a330b49.svg",G="/portfolio/assets/github.921145a1.svg",K="/portfolio/assets/graduation-cap.a590a512.svg",Q="/portfolio/assets/linkedin-dark.3f8477bc.svg",X="/portfolio/assets/linkedin.7a7a5923.svg",Z="/portfolio/assets/menu-dark.80311574.svg",ee="/portfolio/assets/menu.b9597e4d.svg";const mt={name:"FindMeIconsComponent",inject:["$func"],props:{title:{type:String,required:!0},content:{type:String,required:!0},link:{type:String,required:!1}},computed:$(v({},S("theme",["userTheme"])),{assetsSrc(){const e={};return this.userTheme=="dark-theme"?(e.email=this.$func.getIconImgUrl("email"),e.linkedin=this.$func.getIconImgUrl("linkedin"),e.github=this.$func.getIconImgUrl("github")):(e.email=this.$func.getIconImgUrl("email-dark"),e.linkedin=this.$func.getIconImgUrl("linkedin-dark"),e.github=this.$func.getIconImgUrl("github-dark")),e}}),methods:{openLink(){window.open(this.link,"_blank","noopener")},getIconImgUrl(e){return new URL({"../assets/icons/briefcase.svg":Y,"../assets/icons/docker.svg":D,"../assets/icons/email-dark.svg":J,"../assets/icons/email.svg":O,"../assets/icons/github-dark.svg":z,"../assets/icons/github.svg":G,"../assets/icons/graduation-cap.svg":K,"../assets/icons/js.svg":L,"../assets/icons/linkedin-dark.svg":Q,"../assets/icons/linkedin.svg":X,"../assets/icons/menu-dark.svg":Z,"../assets/icons/menu.svg":ee,"../assets/icons/python.svg":x,"../assets/icons/spring-boot.svg":U,"../assets/icons/symfony.svg":F,"../assets/icons/vue.svg":B}[`../assets/icons/${e}.svg`],self.location).href}}},ft=e=>(h("data-v-583233c2"),e=e(),m(),e),vt={class:"find-me-icons-header"},$t=["src","alt"],bt=ft(()=>s("div",{class:"horizontal-divider"},null,-1));function kt(e,t,n,d,r,o){return c(),l("div",{class:"find-me-icons-main-container",onClick:t[0]||(t[0]=(...a)=>o.openLink&&o.openLink(...a))},[s("div",vt,[s("img",{src:o.assetsSrc[n.title],alt:n.title},null,8,$t),bt,s("strong",null,i(n.title),1)]),s("p",null,i(n.content),1)])}var yt=p(mt,[["render",kt],["__scopeId","data-v-583233c2"]]);const Pt={name:"InfoSection",components:{FindMeIcons:yt}},wt=e=>(h("data-v-6a60eb5f"),e=e(),m(),e),It={class:"main-container"},St=wt(()=>s("span",{id:"info",class:"mb-60"},null,-1)),jt={class:"h-center"},Ct={class:"flex-container"};function Mt(e,t,n,d,r,o){const a=_("FindMeIcons");return c(),l("div",It,[St,s("h2",jt,i(e.$t("info")),1),s("div",Ct,[u(a,{title:"email",content:"brice.folleas@gmail.com",link:"mailto:brice.folleas@gmail.com"}),u(a,{title:"linkedin",content:"brice-foll\xE9as",link:"https://www.linkedin.com/in/brice-foll\xE9as/"}),u(a,{title:"github",content:"b-folleas",link:"https://github.com/b-folleas"})])])}var Tt=p(Pt,[["render",Mt],["__scopeId","data-v-6a60eb5f"]]);const Lt={name:"FooterSection",props:{src:{type:String,required:!0}}},se=e=>(h("data-v-c7a86418"),e=e(),m(),e),Bt={class:"main-footer"},Ft=["src"],xt=se(()=>s("div",{class:"vertical-divider noselect"},null,-1)),Ut=se(()=>s("div",null,[s("h4",{class:"mt-1 bg-color"},"\xA9 2022")],-1));function Dt(e,t,n,d,r,o){return c(),l("div",null,[s("footer",null,[s("div",Bt,[s("img",{src:n.src,alt:"logo"},null,8,Ft),xt,s("h3",null,i(e.$t("brice")),1)]),Ut])])}var At=p(Lt,[["render",Dt],["__scopeId","data-v-c7a86418"]]);const qt={name:"ThemeButtonComponent",computed:v({},S("theme",["userTheme"])),methods:$(v({},V("theme",["setUserTheme"])),{toggleTheme(){localStorage.getItem("user-theme")==="light-theme"?this.setTheme("dark-theme"):this.setTheme("light-theme")},setTheme(e){document.documentElement.className=e,this.setUserTheme(e)}})},A=e=>(h("data-v-053ca33a"),e=e(),m(),e),Nt={for:"checkbox",class:"switch-label noselect"},Vt=A(()=>s("span",{class:"noselect"},"\u{1F319}",-1)),Rt=A(()=>s("span",{class:"noselect"},"\xA0",-1)),Ht=A(()=>s("span",{class:"noselect"},"\u2600\uFE0F",-1));function Et(e,t,n,d,r,o){return c(),l(y,null,[s("input",{onChange:t[0]||(t[0]=(...a)=>o.toggleTheme&&o.toggleTheme(...a)),id:"checkbox",type:"checkbox",class:"switch-checkbox"},null,32),s("label",Nt,[Vt,Rt,Ht,s("div",{class:b(["switch-toggle",{"switch-toggle-checked":e.userTheme==="dark-theme"}])},null,2)])],64)}var Wt=p(qt,[["render",Et],["__scopeId","data-v-053ca33a"]]);const Yt={name:"SelectButtonComponent",data(){return{languages:[{key:"fr",name:"french"},{key:"en",name:"english"},{key:"ja",name:"japanese"}]}},computed:{currentLanguage(){return this.$i18n.locale}}},Jt={class:"snip1135"},Ot=["onClick"];function zt(e,t,n,d,r,o){return c(),l("ul",Jt,[(c(!0),l(y,null,j(r.languages,a=>(c(),l("li",{key:a.key,class:b({active:o.currentLanguage===a.key})},[s("a",{onClick:f=>e.$i18n.locale=a.key},i(e.$t(a.name)),9,Ot)],2))),128))])}var Gt=p(Yt,[["render",zt],["__scopeId","data-v-a758f9be"]]);const Kt={name:"MenuComponent",components:{ThemeButton:Wt,SelectButton:Gt},emits:["close"]},Qt={class:"snip1217"},Xt={id:"themeBtn"},Zt={id:"selectBtn"};function eo(e,t,n,d,r,o){const a=_("ThemeButton"),f=_("SelectButton");return c(),l("ul",Qt,[s("li",null,[s("a",{onClick:t[0]||(t[0]=g=>e.$emit("close")),href:"#about"},i(e.$t("about")),1)]),s("li",null,[s("a",{onClick:t[1]||(t[1]=g=>e.$emit("close")),href:"#works"},i(e.$t("works")),1)]),s("li",null,[s("a",{onClick:t[2]||(t[2]=g=>e.$emit("close")),href:"#info"},i(e.$t("info")),1)]),s("li",Xt,[u(a)]),s("li",Zt,[u(f)])])}var so=p(Kt,[["render",eo],["__scopeId","data-v-492ffbba"]]);const to={name:"MenuButton",props:{showMenu:{type:Boolean,required:!0}},data(){return{clicked:!1}},methods:{clickMenu(){this.clicked=!this.clicked,this.$emit("toggleMenu")}}},oo=e=>(h("data-v-69836bdc"),e=e(),m(),e),no=oo(()=>s("svg",{width:"30",height:"30",viewBox:"0 0 100 100"},[s("path",{class:"line line1",d:"M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"}),s("path",{class:"line line2",d:"M 20,50 H 80"}),s("path",{class:"line line3",d:"M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"})],-1)),ao=[no];function ro(e,t,n,d,r,o){return c(),l("button",{type:"button",class:b(["menu",{clicked:!!n.showMenu}]),onClick:t[0]||(t[0]=(...a)=>o.clickMenu&&o.clickMenu(...a)),"aria-label":"Main Menu"},ao,2)}var io=p(to,[["render",ro],["__scopeId","data-v-69836bdc"]]);const co={name:"App",inject:["$func"],components:{Home:Je,Menu:so,MenuButton:io,About:ls,Skills:Is,Works:ht,Info:Tt,Footer:At},data(){return{showMenu:!1,initUserTheme:""}},computed:$(v({},S("theme",["userTheme"])),{assetsSrc(){const e={};return this.userTheme=="dark-theme"?(e.logo=this.$func.getImgUrl("logo"),e.menu=this.$func.getIconImgUrl("menu"),e.footer=this.$func.getImgUrl("logo-dark")):(e.logo=this.$func.getImgUrl("logo-dark"),e.menu=this.$func.getIconImgUrl("menu-dark"),e.footer=this.$func.getImgUrl("logo")),e}}),async created(){const e=await this.getLocalStorageTheme()||this.getMediaPreference();document.documentElement.className=e,this.setUserTheme(e)},methods:$(v({},V("theme",["getLocalStorageTheme","setUserTheme"])),{scrollToTop(){window.scroll({top:0,left:0,behavior:"smooth"})},toggleMenu(){this.showMenu=!this.showMenu},getMediaPreference(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark-theme":"light-theme"}})},lo={id:"app"},_o={class:"nav noselect"},uo=["src"],po={id:"about-skills",class:"large-width-section"},go={class:"footer-top-info"};function ho(e,t,n,d,r,o){const a=_("Menu"),f=_("MenuButton"),g=_("Home"),te=_("About"),oe=_("Skills"),ne=_("Works"),ae=_("Info"),re=_("Footer");return c(),l("div",lo,[s("nav",_o,[s("img",{id:"appLogo",class:"logo noselect",src:o.assetsSrc.logo,alt:"logo",onClick:t[0]||(t[0]=(...ie)=>o.scrollToTop&&o.scrollToTop(...ie))},null,8,uo),u(me,null,{default:he(()=>[r.showMenu?(c(),M(a,{key:0,onClose:o.toggleMenu},null,8,["onClose"])):I("",!0)]),_:1}),u(f,{class:"noselect","show-menu":r.showMenu,onToggleMenu:o.toggleMenu},null,8,["show-menu","onToggleMenu"])]),u(g,{name:"home",class:"section"}),s("div",po,[u(te,{name:"about",class:"small-width-section"}),u(oe,{name:"skills",class:"small-width-section"})]),u(ne,{name:"works",class:"section"}),u(ae,{id:"info-section",name:"info",class:"section"}),s("p",go,i(e.$t("realised")),1),u(re,{id:"footer",class:"footer",src:o.assetsSrc.footer},null,8,["src"])])}var mo=p(co,[["render",ho],["__scopeId","data-v-9c31863a"]]),fo={namespaced:!0,state:{userTheme:"light-theme"},mutations:{setUserTheme(e,t){e.userTheme=t}},actions:{setUserTheme(e,t){localStorage.setItem("user-theme",t),e.commit("setUserTheme",t)},getLocalStorageTheme(){return localStorage.getItem("user-theme")}}};const vo=fe({modules:{theme:fo}}),$o="Hello",bo="I'm Brice",ko="Brice",yo="Full Stack Engineer",Po={paragraph_one:"Last year student in internship as a Full Stack developer, based in Lyon, France. Through my studies, my three years work experience and personal projects, I deepened my skills in creating websites using frameworks such as",paragraph_two:"In my free time, I try to discover new technologies. Currently, I'm working on a personal project using ",paragraph_three:"I'm looking for a new job oppotunity in ",vue_symfo_springboot:"Vue.js, Symfony & Spring boot.",django_and_docker:"Django & Docker.",yokohama_tokyo_japan:"Yokohama / Tokyo Japan."},wo="Download Resume",Io="About",So="Skills",jo="History",Co="Works on Github",Mo="Info",To="EN",Lo="FR",Bo="JA",Fo="Read More",xo="projects",Uo="Realised with Vite Build Tool";var Do={hello:$o,i_m_brice:bo,brice:ko,full_stack_engineer:yo,description:Po,download_resume:wo,about:Io,skills:So,history:jo,"history-description":{fiducial:"Fiducial Staffing",cpe:"CPE",conity:"Conity",dawson:"Dawson College",iut:"Institute of Technology"},works:Co,info:Mo,english:To,french:Lo,japanese:Bo,read_more:Fo,projects:xo,realised:Uo};const Ao="Bonjour, je suis",qo="Brice",No="Brice",Vo="Ing\xE9nieur Full Stack",Ro={paragraph_one:"\xC9tudiant en derni\xE8re ann\xE9e d'alternance en tant qu'ing\xE9nieur Full Stack, situ\xE9 \xE0 Lyon, France. Au travers de mes \xE9tudes et de mes trois ann\xE9es d'exp\xE9rience en entreprise ainsi que sur des projets personnels, j'ai pu approfondir mes comp\xE9tences dans la cr\xE9ation de site web en utilisant des frameworks tels que ",paragraph_two:"Durant mon temps libre, je cherche \xE0 d\xE9couvrir de nouvelles technologies. Actuellement, je travaille sur un projet personnel en utilisant les technologies ",paragraph_three:"Je suis \xE0 la recherche d'une opportunit\xE9 professionnelle \xE0 ",vue_symfo_springboot:"Vue.js, Symfony & Spring boot.",django_and_docker:"Django & Docker.",yokohama_tokyo_japan:"Yokohama / Tokyo Japan."},Ho="T\xE9l\xE9charger mon CV",Eo="\xC0 propos",Wo="Comp\xE9tences",Yo="Parcours",Jo="Projets Github",Oo="Infos",zo="EN",Go="FR",Ko="JA",Qo="Voir plus",Xo="projets",Zo="R\xE9alis\xE9 avec l'Outil de D\xE9veloppement Vite";var en={hello:Ao,i_m_brice:qo,brice:No,full_stack_engineer:Vo,description:Ro,download_resume:Ho,about:Eo,skills:Wo,history:Yo,"history-description":{fiducial:"Fiducial Staffing - Ing\xE9nieur Fullstack",cpe:"CPE Lyon - Ing\xE9nieur en informatique",conity:"Conity - D\xE9veloppeur & Assureur Qualit\xE9 Web",dawson:"Dawson College",iut:"IUT Lyon 1 - Sp\xE9cialit\xE9 Math\xE9matiques"},works:Jo,info:Oo,english:zo,french:Go,japanese:Ko,read_more:Qo,projects:Xo,realised:Zo};const sn="\u3053\u3093\u306B\u3061\u306F",tn="\u30D6\u30E9\u30A4\u30B9\u3067\u3059\u3002",on="\u30D6\u30E9\u30A4\u30B9",nn="\u30D5\u30EB\u30B9\u30BF\u30C3\u30AF\u30A8\u30F3\u30B8\u30CB\u30A2",an={paragraph_one:"Last year student in internship as a Full Stack developer, based in Lyon, France. Through my studies, my three years work experience and personal projects, I deepened my skills in creating websites using frameworks such as",paragraph_two:"In my free time, I try to discover new technologies. Currently, I'm working on a personal project using ",paragraph_three:"I'm looking for a new job oppotunity in ",vue_symfo_springboot:"Vue.js, Symfony & Spring boot.",django_and_docker:"Django & Docker.",yokohama_tokyo_japan:"Yokohama / Tokyo Japan."},rn="\u5C65\u6B74\u66F8\u306E\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9",cn="About",ln="Skills",dn="History",_n="Works on Github",un="Info",pn="\u82F1\u8A9E",gn="\u30D5\u30E9\u30F3\u30B9\u8A9E",hn="\u65E5\u672C\u8A9E",mn="Read More",fn="projects",vn="Realised with Vite Build Tool";var $n={hello:sn,i_m_brice:tn,brice:on,full_stack_engineer:nn,description:an,download_resume:rn,about:cn,skills:ln,history:dn,works:_n,info:un,english:pn,french:gn,japanese:hn,read_more:mn,projects:fn,realised:vn};const w=ve({legacy:!0,globalInjection:!0,locale:"en",fallbackLocale:"en",messages:{en:Do,fr:en,ja:$n}});var bn="/portfolio/assets/logo-dark.6f808d03.svg",kn="/portfolio/assets/logo.28a0162b.svg",yn={getImgUrl:e=>new URL({"/src/assets/logo-dark.svg":bn,"/src/assets/logo.svg":kn}[`/src/assets/${e}.svg`],self.location).href,getIconImgUrl:e=>new URL({"/src/assets/icons/briefcase.svg":Y,"/src/assets/icons/docker.svg":D,"/src/assets/icons/email-dark.svg":J,"/src/assets/icons/email.svg":O,"/src/assets/icons/github-dark.svg":z,"/src/assets/icons/github.svg":G,"/src/assets/icons/graduation-cap.svg":K,"/src/assets/icons/js.svg":L,"/src/assets/icons/linkedin-dark.svg":Q,"/src/assets/icons/linkedin.svg":X,"/src/assets/icons/menu-dark.svg":Z,"/src/assets/icons/menu.svg":ee,"/src/assets/icons/python.svg":x,"/src/assets/icons/spring-boot.svg":U,"/src/assets/icons/symfony.svg":F,"/src/assets/icons/vue.svg":B}[`/src/assets/icons/${e}.svg`],self.location).href,formatDate:(e,t)=>{if(P.locale(w.global.locale),t){const n=P(e).format("MMM YYYY");return w.global.locale==="ja"?n+"\u5E74":n}else return w.global.locale==="en"?P(e).format("MMM Do YY"):P(e).format("ll")}};$e.add(be);ke.watch();ye(mo).use(vo).use(w).use(Pe).component("font-awesome-icon",we).provide("$func",yn).mount("#app");
