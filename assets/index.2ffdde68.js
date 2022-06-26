var te=Object.defineProperty,oe=Object.defineProperties;var ne=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var ae=Object.prototype.hasOwnProperty,re=Object.prototype.propertyIsEnumerable;var q=(e,t,a)=>t in e?te(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,f=(e,t)=>{for(var a in t||(t={}))ae.call(t,a)&&q(e,a,t[a]);if(D)for(var a of D(t))re.call(t,a)&&q(e,a,t[a]);return e},v=(e,t)=>oe(e,ne(t));import{o as c,c as l,a as s,b as y,t as i,d as _,r as g,e as h,p as $,f as k,g as ie,m as P,F as b,h as I,n as w,i as J,j as E,w as ce,T as le,k as de,l as _e,q as ue,_ as ge,s as me,u as pe,v as he}from"./vendor.ba9eef86.js";const fe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))d(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&d(n)}).observe(document,{childList:!0,subtree:!0});function a(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(r){if(r.ep)return;r.ep=!0;const o=a(r);fetch(r.href,o)}};fe();var u=(e,t)=>{const a=e.__vccOpts||e;for(const[d,r]of t)a[d]=r;return a};const ve={name:"ProfileComponent",computed:{avatar(){return"https://github.com/b-folleas.png"}}},$e={key:0,class:"noselect"},ke=["src"],be={class:"profile-text fade-in-top"},ye={class:"smaller"},Pe={class:"emphasis-txt"};function Ie(e,t,a,d,r,o){return c(),l("main",null,[o.avatar?(c(),l("div",$e,[s("img",{class:"profile-img fade-in-top noselect",src:o.avatar,alt:"Avatar",ref:"img"},null,8,ke)])):y("",!0),s("div",be,[s("h1",null,i(e.$t("hello")),1),s("h1",ye,i(e.$t("i_m_brice")),1),s("h3",Pe,i(e.$t("full_stack_engineer")),1)])])}var we=u(ve,[["render",Ie],["__scopeId","data-v-6b3ea649"]]);const je={name:"HomeSection",components:{Profile:we}};function Se(e,t,a,d,r,o){const n=g("Profile");return c(),l("div",null,[_(n)])}var Te=u(je,[["render",Se],["__scopeId","data-v-a97107a6"]]),C="/portfolio/assets/js.ec8acd65.svg",L="/portfolio/assets/vue.b4cdca4a.svg",F="/portfolio/assets/symfony.1608e95e.svg",M="/portfolio/assets/python.fbc3b698.svg",U="/portfolio/assets/spring-boot.8f9ccd66.svg",B="/portfolio/assets/docker.362bc087.svg";const Ce={name:"DescriptionComponent",computed:{cvUrl(){return new URL("/portfolio/assets/cv.32cbbe70.pdf",self.location).href}}},A=e=>($("data-v-320dae0a"),e=e(),k(),e),Le={class:"mb-0"},Fe={class:"emphasis-txt"},Me=h(". "),Ue=A(()=>s("br",null,null,-1)),Be={class:"mb-0"},Ae={class:"emphasis-txt"},xe=h(". "),De=A(()=>s("br",null,null,-1)),qe={class:"mb-0"},Ne={class:"emphasis-txt"},Ve=h(". "),Je={class:"flex-icons"},Ee=ie('<img class="icon-img" title="JavaScript" src="'+C+'" alt="JavaScript" data-v-320dae0a><img class="icon-img" title="Vue.js" src="'+L+'" alt="Vue.js" data-v-320dae0a><img class="icon-img" title="Symfony Framework" src="'+F+'" alt="Symfony" data-v-320dae0a><img class="icon-img" title="Python" src="'+M+'" alt="Python" data-v-320dae0a><img class="icon-img" title="Spring Boot Framework" src="'+U+'" alt="Spring Boot" data-v-320dae0a><img class="icon-img" title="Docker" src="'+B+'" alt="Docker" data-v-320dae0a>',6),Re=["href"],We=A(()=>s("i",{class:"fa fa-download"},null,-1));function He(e,t,a,d,r,o){return c(),l("article",null,[s("p",Le,[h(i(e.$t("description.paragraph_one"))+" ",1),s("span",Fe,i(e.$t("description.vue_symfo_springboot")),1),Me]),Ue,s("p",Be,[h(i(e.$t("description.paragraph_two"))+" ",1),s("span",Ae,i(e.$t("description.django_and_docker")),1),xe]),De,s("p",qe,[h(i(e.$t("description.paragraph_three"))+" ",1),s("span",Ne,i(e.$t("description.yokohama_tokyo_japan")),1),Ve]),s("div",Je,[Ee,s("a",{class:"action-btn",href:o.cvUrl,download:"cv-folleas-brice.pdf"},[We,h(" "+i(e.$t("download_resume")),1)],8,Re)])])}var Oe=u(Ce,[["render",He],["__scopeId","data-v-320dae0a"]]);const Ge={name:"AboutSection",components:{Description:Oe}},Ye={class:"h-center"};function ze(e,t,a,d,r,o){const n=g("Description");return c(),l("div",null,[s("h2",Ye,i(e.$t("about")),1),_(n,{class:"description"})])}var Ke=u(Ge,[["render",ze],["__scopeId","data-v-2ef4ec1e"]]);const N="b-folleas",V="https://api.github.com";var T={async getAllProjects(){return(await fetch(`${V}/users/${N}/repos?sort=updated`)).json()},async getProjectsByPage(e,t){return(await fetch(`${V}/users/${N}/repos?sort=updated&page=${e}&per_page=${t}`)).json()}};const Qe={name:"ProjectModuleComponent",inject:["$func"],props:{name:{type:String,required:!0},url:{type:String,required:!0},description:{type:String,default:"Lorem ipsum",required:!1},language:{type:String,required:!1},topics:{type:Array,required:!1},date:{type:String,required:!1}},computed:v(f({},P("theme",["userTheme"])),{assetsSrc(){return this.userTheme=="dark-theme"?this.$func.getIconImgUrl("github"):this.$func.getIconImgUrl("github-dark")},formatedDate(){return this.date}})},R=e=>($("data-v-17ebb16a"),e=e(),k(),e),Xe={class:"project-container"},Ze={class:"project-module-header"},es={class:"project-module-title"},ss={class:"project-module-date"},ts=["href"],os=["src"],ns={key:0},as=R(()=>s("i",{class:"fa fa-code"},null,-1)),rs={key:0},is={class:"project-module-link"},cs={href:"url",class:"action-btn smaller-btn"},ls=R(()=>s("i",{class:"fa fa-arrow-up-right-from-square"},null,-1));function ds(e,t,a,d,r,o){var n;return c(),l("article",Xe,[s("div",Ze,[s("div",es,[s("h3",null,i(a.name),1),s("div",ss,[s("p",null,i(o.formatedDate),1),s("a",{href:a.url,target:"_blank",rel:"noopener"},[s("img",{class:"preview-platform-icons",src:o.assetsSrc,alt:"Link for Github"},null,8,os)],8,ts)])]),a.language?(c(),l("em",ns,[as,h(" "+i(a.language),1)])):y("",!0)]),s("p",null,i(a.description),1),((n=a.topics)==null?void 0:n.length)>0?(c(),l("div",rs,[(c(!0),l(b,null,I(a.topics,p=>(c(),l("p",{class:"chip",key:p},i(p),1))),128))])):y("",!0),s("div",is,[s("a",cs,[h(i(e.$t("read_more"))+" ",1),ls])])])}var _s=u(Qe,[["render",ds],["__scopeId","data-v-17ebb16a"]]);const us={name:"PaginationComponent",props:{maxVisibleButtons:{type:Number,required:!1,default:3},totalPages:{type:Number,required:!0},perPage:{type:Number,required:!0},currentPage:{type:Number,required:!0}},computed:{startPage(){return this.currentPage===1?1:this.currentPage===this.totalPages?this.totalPages-this.maxVisibleButtons+1:this.currentPage-1},pages(){const e=[];for(let t=this.startPage;t<=Math.min(this.startPage+this.maxVisibleButtons-1,this.totalPages);t++)e.push({name:t,isDisabled:t===this.currentPage});return e},isInFirstPage(){return this.currentPage===1},isInLastPage(){return this.currentPage===this.totalPages}},methods:{onClickFirstPage(){this.$emit("pagechanged",1)},onClickPreviousPage(){this.$emit("pagechanged",this.currentPage-1)},onClickPage(e){this.$emit("pagechanged",e)},onClickNextPage(){this.$emit("pagechanged",this.currentPage+1)},onClickLastPage(){this.$emit("pagechanged",this.totalPages)},isPageActive(e){return this.currentPage===e}}},j=e=>($("data-v-472d658a"),e=e(),k(),e),gs={class:"pagination"},ms={class:"pagination-item"},ps=["disabled"],hs=j(()=>s("i",{class:"fa-solid fa-backward-fast"},null,-1)),fs=[hs],vs={class:"pagination-item"},$s=["disabled"],ks=j(()=>s("i",{class:"fa-solid fa-backward-step"},null,-1)),bs=[ks],ys=["onClick","disabled","aria-label"],Ps={class:"pagination-item"},Is=["disabled"],ws=j(()=>s("i",{class:"fa-solid fa-forward-step"},null,-1)),js=[ws],Ss={class:"pagination-item"},Ts=["disabled"],Cs=j(()=>s("i",{class:"fa-solid fa-forward-fast"},null,-1)),Ls=[Cs];function Fs(e,t,a,d,r,o){return c(),l("ul",gs,[s("li",ms,[s("button",{type:"button",onClick:t[0]||(t[0]=(...n)=>o.onClickFirstPage&&o.onClickFirstPage(...n)),disabled:o.isInFirstPage,"aria-label":"Go to first page"},fs,8,ps)]),s("li",vs,[s("button",{type:"button",onClick:t[1]||(t[1]=(...n)=>o.onClickPreviousPage&&o.onClickPreviousPage(...n)),disabled:o.isInFirstPage},bs,8,$s)]),(c(!0),l(b,null,I(o.pages,n=>(c(),l("li",{class:"pagination-item",key:n.name},[s("button",{type:"button",onClick:p=>o.onClickPage(n.name),disabled:n.isDisabled,class:w({active:o.isPageActive(n.name)}),"aria-label":`Go to page number ${n.name}`},i(n.name),11,ys)]))),128)),s("li",Ps,[s("button",{type:"button",onClick:t[2]||(t[2]=(...n)=>o.onClickNextPage&&o.onClickNextPage(...n)),disabled:o.isInLastPage},js,8,Is)]),s("li",Ss,[s("button",{type:"button",onClick:t[3]||(t[3]=(...n)=>o.onClickLastPage&&o.onClickLastPage(...n)),disabled:o.isInLastPage},Ls,8,Ts)])])}var Ms=u(us,[["render",Fs],["__scopeId","data-v-472d658a"]]);const Us={name:"WorksSection",components:{ProjectModule:_s,Pagination:Ms},data:()=>({projects:[],paginatedProjects:[],currentPage:1,perPage:3,totalPages:10}),async created(){var e;this.projects=await T.getAllProjects(),this.paginatedProjects=await T.getProjectsByPage(this.currentPage,this.perPage),this.totalPages=(e=this.projects)!=null&&e.length?Math.floor(this.projects.length/this.perPage)+1:0},methods:{async onPageChange(e){this.currentPage=e,this.paginatedProjects=await T.getProjectsByPage(this.currentPage,this.perPage)}}},Bs={id:"works"},As={class:"h-center"},xs={class:"mt-3"};function Ds(e,t,a,d,r,o){const n=g("ProjectModule"),p=g("pagination");return c(),l("div",Bs,[s("h2",As,i(e.$t("works")),1),s("div",xs,[(c(!0),l(b,null,I(e.paginatedProjects,m=>(c(),J(n,{key:m.id,name:m.name,description:m.description,url:m.svn_url,language:m.language,topics:m.topics,date:m.updated_at,class:"module"},null,8,["name","description","url","language","topics","date"]))),128)),_(p,{class:"pagination",totalPages:e.totalPages,perPage:e.perPage,currentPage:e.currentPage,onPagechanged:o.onPageChange},null,8,["totalPages","perPage","currentPage","onPagechanged"])])])}var qs=u(Us,[["render",Ds],["__scopeId","data-v-8c01ad32"]]),W="/portfolio/assets/email-dark.d4275cbd.svg",H="/portfolio/assets/email.75073418.svg",O="/portfolio/assets/github-dark.7a330b49.svg",G="/portfolio/assets/github.921145a1.svg",Y="/portfolio/assets/linkedin-dark.3f8477bc.svg",z="/portfolio/assets/linkedin.7a7a5923.svg",K="/portfolio/assets/menu-dark.80311574.svg",Q="/portfolio/assets/menu.b9597e4d.svg";const Ns={name:"FindMeIconsComponent",inject:["$func"],props:{title:{type:String,required:!0},content:{type:String,required:!0},link:{type:String,required:!1}},computed:v(f({},P("theme",["userTheme"])),{assetsSrc(){const e={};return this.userTheme=="dark-theme"?(e.email=this.$func.getIconImgUrl("email"),e.linkedin=this.$func.getIconImgUrl("linkedin"),e.github=this.$func.getIconImgUrl("github")):(e.email=this.$func.getIconImgUrl("email-dark"),e.linkedin=this.$func.getIconImgUrl("linkedin-dark"),e.github=this.$func.getIconImgUrl("github-dark")),e}}),methods:{openLink(){window.open(this.link,"_blank","noopener")},getIconImgUrl(e){return new URL({"../assets/icons/docker.svg":B,"../assets/icons/email-dark.svg":W,"../assets/icons/email.svg":H,"../assets/icons/github-dark.svg":O,"../assets/icons/github.svg":G,"../assets/icons/js.svg":C,"../assets/icons/linkedin-dark.svg":Y,"../assets/icons/linkedin.svg":z,"../assets/icons/menu-dark.svg":K,"../assets/icons/menu.svg":Q,"../assets/icons/python.svg":M,"../assets/icons/spring-boot.svg":U,"../assets/icons/symfony.svg":F,"../assets/icons/vue.svg":L}[`../assets/icons/${e}.svg`],self.location).href}}},Vs=e=>($("data-v-4a3174d8"),e=e(),k(),e),Js={class:"find-me-icons-header"},Es=["src","alt"],Rs=Vs(()=>s("div",{class:"horizontal-divider"},null,-1));function Ws(e,t,a,d,r,o){return c(),l("div",{class:"find-me-icons-main-container",onClick:t[0]||(t[0]=(...n)=>o.openLink&&o.openLink(...n))},[s("div",Js,[s("img",{src:o.assetsSrc[a.title],alt:a.title},null,8,Es),Rs,s("strong",null,i(a.title),1)]),s("p",null,i(a.content),1)])}var Hs=u(Ns,[["render",Ws],["__scopeId","data-v-4a3174d8"]]);const Os={name:"InfoSection",components:{FindMeIcons:Hs}},Gs={class:"main-container"},Ys={class:"h-center"},zs={class:"flex-container"};function Ks(e,t,a,d,r,o){const n=g("FindMeIcons");return c(),l("div",Gs,[s("h2",Ys,i(e.$t("info")),1),s("div",zs,[_(n,{title:"email",content:"brice.folleas@gmail.com",link:"mailto:brice.folleas@gmail.com"}),_(n,{title:"linkedin",content:"brice-foll\xE9as",link:"https://www.linkedin.com/in/brice-foll\xE9as/"}),_(n,{title:"github",content:"b-folleas",link:"https://github.com/b-folleas"})])])}var Qs=u(Os,[["render",Ks],["__scopeId","data-v-66cb493f"]]);const Xs={name:"FooterSection",props:{src:{type:String,required:!0}}},X=e=>($("data-v-0d32dc1a"),e=e(),k(),e),Zs={class:"main-footer"},et=["src"],st=X(()=>s("div",{class:"vertical-divider noselect"},null,-1)),tt=X(()=>s("div",null,[s("h4",{class:"mt-1 bg-color"},"\xA9 2022")],-1));function ot(e,t,a,d,r,o){return c(),l("div",null,[s("footer",null,[s("div",Zs,[s("img",{src:a.src,alt:"logo"},null,8,et),st,s("h3",null,i(e.$t("brice")),1)]),tt])])}var nt=u(Xs,[["render",ot],["__scopeId","data-v-0d32dc1a"]]);const at={name:"ThemeButtonComponent",computed:f({},P("theme",["userTheme"])),methods:v(f({},E("theme",["setUserTheme"])),{toggleTheme(){localStorage.getItem("user-theme")==="light-theme"?this.setTheme("dark-theme"):this.setTheme("light-theme")},setTheme(e){document.documentElement.className=e,this.setUserTheme(e)}})},x=e=>($("data-v-76081d94"),e=e(),k(),e),rt={for:"checkbox",class:"switch-label noselect"},it=x(()=>s("span",{class:"noselect"},"\u{1F319}",-1)),ct=x(()=>s("span",{class:"noselect"},"\xA0",-1)),lt=x(()=>s("span",{class:"noselect"},"\u2600\uFE0F",-1));function dt(e,t,a,d,r,o){return c(),l(b,null,[s("input",{onChange:t[0]||(t[0]=(...n)=>o.toggleTheme&&o.toggleTheme(...n)),id:"checkbox",type:"checkbox",class:"switch-checkbox"},null,32),s("label",rt,[it,ct,lt,s("div",{class:w(["switch-toggle",{"switch-toggle-checked":e.userTheme==="dark-theme"}])},null,2)])],64)}var _t=u(at,[["render",dt],["__scopeId","data-v-76081d94"]]);const ut={name:"SelectButtonComponent",data(){return{languages:[{key:"fr",name:"french"},{key:"en",name:"english"},{key:"ja",name:"japanese"}]}},computed:{currentLanguage(){return this.$i18n.locale}}},gt={class:"snip1135"},mt=["onClick"];function pt(e,t,a,d,r,o){return c(),l("ul",gt,[(c(!0),l(b,null,I(r.languages,n=>(c(),l("li",{key:n.key,class:w({active:o.currentLanguage===n.key})},[s("a",{onClick:p=>e.$i18n.locale=n.key},i(e.$t(n.name)),9,mt)],2))),128))])}var ht=u(ut,[["render",pt],["__scopeId","data-v-ae8159ce"]]);const ft={name:"MenuComponent",components:{ThemeButton:_t,SelectButton:ht},emits:["close"]},vt={class:"snip1217"},$t={id:"themeBtn"},kt={id:"selectBtn"};function bt(e,t,a,d,r,o){const n=g("ThemeButton"),p=g("SelectButton");return c(),l("ul",vt,[s("li",null,[s("a",{onClick:t[0]||(t[0]=m=>e.$emit("close")),href:"#about"},i(e.$t("about")),1)]),s("li",null,[s("a",{onClick:t[1]||(t[1]=m=>e.$emit("close")),href:"#works"},i(e.$t("works")),1)]),s("li",null,[s("a",{onClick:t[2]||(t[2]=m=>e.$emit("close")),href:"#info"},i(e.$t("info")),1)]),s("li",$t,[_(n)]),s("li",kt,[_(p)])])}var yt=u(ft,[["render",bt],["__scopeId","data-v-aa4a14b6"]]);const Pt={name:"App",inject:["$func"],components:{Home:Te,Menu:yt,About:Ke,Works:qs,Info:Qs,Footer:nt},data(){return{showMenu:!1,initUserTheme:""}},computed:v(f({},P("theme",["userTheme"])),{assetsSrc(){const e={};return this.userTheme=="dark-theme"?(e.logo=this.$func.getImgUrl("logo"),e.menu=this.$func.getIconImgUrl("menu"),e.footer=this.$func.getImgUrl("logo-dark")):(e.logo=this.$func.getImgUrl("logo-dark"),e.menu=this.$func.getIconImgUrl("menu-dark"),e.footer=this.$func.getImgUrl("logo")),e}}),async created(){const e=await this.getLocalStorageTheme()||this.getMediaPreference();document.documentElement.className=e,this.setUserTheme(e)},methods:v(f({},E("theme",["getLocalStorageTheme","setUserTheme"])),{scrollToTop(){window.scroll({top:0,left:0,behavior:"smooth"})},toggleMenu(){this.showMenu=!this.showMenu},getMediaPreference(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark-theme":"light-theme"}})},It={id:"app"},wt=["src"],jt=["src"];function St(e,t,a,d,r,o){const n=g("Menu"),p=g("Home"),m=g("About"),Z=g("Works"),ee=g("Info"),se=g("Footer");return c(),l("div",It,[s("nav",{class:w(["nav noselect",{"background-active":r.showMenu}])},[s("img",{id:"appLogo",class:"logo noselect",src:o.assetsSrc.logo,alt:"logo",onClick:t[0]||(t[0]=(...S)=>o.scrollToTop&&o.scrollToTop(...S))},null,8,wt),_(le,null,{default:ce(()=>[r.showMenu?(c(),J(n,{key:0,onClose:o.toggleMenu},null,8,["onClose"])):y("",!0)]),_:1}),s("img",{class:"menu noselect",src:o.assetsSrc.menu,alt:"menu",onClick:t[1]||(t[1]=(...S)=>o.toggleMenu&&o.toggleMenu(...S))},null,8,jt)],2),_(p,{id:"home",name:"home",class:"section"}),_(m,{id:"about",name:"about",class:"section"}),_(Z,{id:"works",name:"works",class:"section"}),_(ee,{id:"info",name:"info",class:"section"}),_(se,{class:"footer",src:o.assetsSrc.footer},null,8,["src"])])}var Tt=u(Pt,[["render",St],["__scopeId","data-v-e85da5c2"]]),Ct={namespaced:!0,state:{userTheme:"light-theme"},mutations:{setUserTheme(e,t){e.userTheme=t}},actions:{setUserTheme(e,t){localStorage.setItem("user-theme",t),e.commit("setUserTheme",t)},getLocalStorageTheme(){return localStorage.getItem("user-theme")}}};const Lt=de({modules:{theme:Ct}}),Ft="Hello",Mt="I'm Brice",Ut="Brice",Bt="Full Stack Engineer",At={paragraph_one:"Last year student in internship as a Full Stack developer, based in Lyon, France. Through my studies, my three years work experience and personal projects, I deepened my skills in creating websites using frameworks such as",paragraph_two:"In my free time, I try to discover new technologies. Currently, I'm working on a personal project using ",paragraph_three:"I'm looking for a new job oppotunity in ",vue_symfo_springboot:"Vue.js, Symfony & Spring boot",django_and_docker:"Django & Docker",yokohama_tokyo_japan:"Yokohama / Tokyo Japan"},xt="Download Resume",Dt="About",qt="Works",Nt="Info",Vt="EN",Jt="FR",Et="JA",Rt="More";var Wt={hello:Ft,i_m_brice:Mt,brice:Ut,full_stack_engineer:Bt,description:At,download_resume:xt,about:Dt,works:qt,info:Nt,english:Vt,french:Jt,japanese:Et,read_more:Rt};const Ht="Bonjour, je suis",Ot="Brice",Gt="Brice",Yt="Ing\xE9nieur Full Stack",zt={paragraph_one:"\xC9tudiant en derni\xE8re ann\xE9e d'alternance en tant qu'ing\xE9nieur Full Stack, situ\xE9 \xE0 Lyon, France. Au travers de mes \xE9tudes et de mes trois ann\xE9es d'exp\xE9rience en entreprise ainsi que sur des projets personnels, j'ai pu approfondir mes comp\xE9tences dans la cr\xE9ation de site web en utilisant des frameworks tels que ",paragraph_two:"Durant mon temps libre, je cherche \xE0 d\xE9couvrir de nouvelles technologies. Actuellement, je travaille sur un projet personnel en utilisant les technologies ",paragraph_three:"Je suis \xE0 la recherche d'une opportunit\xE9 professionnelle \xE0 ",vue_symfo_springboot:"Vue.js, Symfony & Spring boot",django_and_docker:"Django & Docker",yokohama_tokyo_japan:"Yokohama / Tokyo Japan"},Kt="T\xE9l\xE9charger mon CV",Qt="\xC0 propos",Xt="Projets",Zt="Infos",eo="EN",so="FR",to="JA",oo="Voir plus";var no={hello:Ht,i_m_brice:Ot,brice:Gt,full_stack_engineer:Yt,description:zt,download_resume:Kt,about:Qt,works:Xt,info:Zt,english:eo,french:so,japanese:to,read_more:oo};const ao="\u3053\u3093\u306B\u3061\u306F",ro="\u30D6\u30E9\u30A4\u30B9\u3067\u3059\u3002",io="\u30D6\u30E9\u30A4\u30B9",co="\u30D5\u30EB\u30B9\u30BF\u30C3\u30AF\u30A8\u30F3\u30B8\u30CB\u30A2",lo={paragraph_one:"Last year student in internship as a Full Stack developer, based in Lyon, France. Through my studies, my three years work experience and personal projects, I deepened my skills in creating websites using frameworks such as",paragraph_two:"In my free time, I try to discover new technologies. Currently, I'm working on a personal project using ",paragraph_three:"I'm looking for a new job oppotunity in ",vue_symfo_springboot:"Vue.js, Symfony & Spring boot",django_and_docker:"Django & Docker",yokohama_tokyo_japan:"Yokohama / Tokyo Japan"},_o="\u5C65\u6B74\u66F8\u306E\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9",uo="About",go="Works",mo="Info",po="\u82F1\u8A9E",ho="\u30D5\u30E9\u30F3\u30B9\u8A9E",fo="\u65E5\u672C\u8A9E",vo="More";var $o={hello:ao,i_m_brice:ro,brice:io,full_stack_engineer:co,description:lo,download_resume:_o,about:uo,works:go,info:mo,english:po,french:ho,japanese:fo,read_more:vo};const ko=_e({legacy:!0,globalInjection:!0,locale:"en",fallbackLocale:"en",messages:{en:Wt,fr:no,ja:$o}});var bo="/portfolio/assets/logo-dark.6f808d03.svg",yo="/portfolio/assets/logo.28a0162b.svg",Po={getImgUrl:e=>new URL({"/src/assets/logo-dark.svg":bo,"/src/assets/logo.svg":yo}[`/src/assets/${e}.svg`],self.location).href,getIconImgUrl:e=>new URL({"/src/assets/icons/docker.svg":B,"/src/assets/icons/email-dark.svg":W,"/src/assets/icons/email.svg":H,"/src/assets/icons/github-dark.svg":O,"/src/assets/icons/github.svg":G,"/src/assets/icons/js.svg":C,"/src/assets/icons/linkedin-dark.svg":Y,"/src/assets/icons/linkedin.svg":z,"/src/assets/icons/menu-dark.svg":K,"/src/assets/icons/menu.svg":Q,"/src/assets/icons/python.svg":M,"/src/assets/icons/spring-boot.svg":U,"/src/assets/icons/symfony.svg":F,"/src/assets/icons/vue.svg":L}[`/src/assets/icons/${e}.svg`],self.location).href};ue.add(ge);me.watch();pe(Tt).use(Lt).use(ko).component("font-awesome-icon",he).provide("$func",Po).mount("#app");
