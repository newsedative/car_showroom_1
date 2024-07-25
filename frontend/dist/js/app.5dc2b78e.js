(function(){"use strict";var t={8876:function(t,e,r){var a=r(5471),n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-block"},[e("router-view")],1)},o=[],s={name:"App"},c=s,i=r(1656),l=(0,i.A)(c,n,o,!1,null,"73c8f0d6",null),u=l.exports,d=function(){var t=this,e=t._self._c;return e("button",t._g({staticClass:"m-button"},t.$listeners),[t._t("default")],2)},p=[],m={name:"MButton"},h=m,v=(0,i.A)(h,d,p,!1,null,"6b28abd7",null),f=v.exports,_=function(){var t=this,e=t._self._c;return e("input",{staticClass:"m-input",attrs:{type:"text",placeholder:"Имя"},domProps:{value:t.modelValue},on:{input:t.updateInput}})},y=[],g={name:"MInput",props:{modelValue:[String,Number]},methods:{updateInput(t){this.$emit("input",t.target.value)}}},b=g,x=(0,i.A)(b,_,y,!1,null,"58d24d78",null),A=x.exports,k=function(){var t=this,e=t._self._c;return!0===t.show?e("div",{staticClass:"m-dialog",on:{click:t.hideDialog}},[e("div",{staticClass:"m-dlg-cont",on:{click:function(t){t.stopPropagation()}}},[t._t("default")],2)]):t._e()},C=[],S={props:{show:{type:Boolean,default:!1}},methods:{hideDialog(){this.$emit("update:show",!1)}},mounted(){}},w={name:"MDialog",mixins:[S]},$=w,P=(0,i.A)($,k,C,!1,null,"06fc24d2",null),O=P.exports,j=function(){var t=this,e=t._self._c;return e("select",{staticStyle:{border:"1px solid"},domProps:{value:t.value},on:{change:function(e){return t.$emit("input",e.target.value)}}},[e("option",{attrs:{disabled:"",value:""}},[t._v("Выберите из списка")]),t._l(t.options,(function(r){return e("option",{key:r.value,domProps:{value:r.value}},[t._v(" "+t._s(r.name)+" ")])}))],2)},I=[],L={name:"MSelect",props:{value:{type:String},options:{type:Array,default:()=>[]}}},T=L,D=(0,i.A)(T,j,I,!1,null,"69be78e2",null),N=D.exports,Q=[f,A,O,N],M=r(173),q=function(){var t=this,e=t._self._c;return e("div",[e("div",[e("app-header"),e("navbar")],1),t._m(0)])},E=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-content"},[e("h1",[t._v("Hello")])])}],F=function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-header"},[e("strong",[t._v("Машинова Дарья")]),e("m-button",{staticStyle:{padding:"2%","align-self":"flex-end"},on:{click:t.logout}},[t._v("Выход")])],1)},H=[],B=(r(4114),{name:"AppHeader",methods:{logout(){this.$store.commit("login/removeToken"),this.$router.push("/login")}}}),U=B,z=(0,i.A)(U,F,H,!1,null,"6f711b3f",null),V=z.exports,R=function(){var t=this,e=t._self._c;return e("div",{staticClass:"navbar"},[e("div",{staticClass:"navbar-btns"},[e("m-button",{staticStyle:{"margin-right":"30px"},on:{click:function(e){return t.$router.push("/")}}},[t._v("Главная ")]),e("m-button",{staticStyle:{"margin-right":"30px"},on:{click:function(e){return t.$router.push("/cars")}}},[t._v("Автомобили")]),e("m-button",{staticStyle:{"margin-right":"30px"},on:{click:function(e){return t.$router.push("/carpart")}}},[t._v("Запчасти")]),e("m-button",{staticClass:"current-page",staticStyle:{"margin-right":"30px"},on:{click:function(e){return t.$router.push("/country")}}},[t._v("Страны")])],1)])},G=[],J={},K=J,W=(0,i.A)(K,R,G,!1,null,"677f13a5",null),X=W.exports,Y={components:{Navbar:X,AppHeader:V}},Z=Y,tt=(0,i.A)(Z,q,E,!1,null,"2e77a3b9",null),et=tt.exports,rt=function(){var t=this,e=t._self._c;return e("div",[e("div",[e("app-header"),e("navbar")],1),e("div",{staticClass:"m-content"},[e("m-dialog",{attrs:{show:t.dlgShowOrNot}},[e("car-form",{on:{create:t.createCar}})],1),e("div",[e("m-input",{attrs:{placeholder:"Поиск..."},model:{value:t.searchQuery,callback:function(e){t.searchQuery=e},expression:"searchQuery"}})],1),e("div",{staticStyle:{"padding-top":"20px"}},[e("m-button",{staticStyle:{padding:"2%","align-self":"flex-end"},on:{click:function(e){t.dlgShowOrNot=!0}}},[t._v("Добавить")]),e("m-button",{staticStyle:{padding:"2%","margin-left":"30px"},on:{click:t.fetchCars}},[t._v("Обновить")])],1),e("div",{staticStyle:{"padding-top":"20px"}},[e("m-select",{attrs:{options:t.sortOptions},model:{value:t.selectSort,callback:function(e){t.selectSort=e},expression:"selectSort"}})],1),t.isCarsLoading?e("div",[t._v("Идёт загрузка...")]):e("cars-list",{attrs:{cars:t.sortAndSearchCars},on:{remove:t.removeCars}})],1)])},at=[],nt=function(){var t=this,e=t._self._c;return e("div",[e("form",{staticClass:"m-form",on:{submit:function(t){t.preventDefault()}}},[e("h3",[t._v("Добавить автомобиль")]),e("m-input",{attrs:{type:"text",placeholder:"Марка"},model:{value:t.car.car_brand,callback:function(e){t.$set(t.car,"car_brand",e)},expression:"car.car_brand"}}),e("m-input",{attrs:{type:"text",placeholder:"Модель"},model:{value:t.car.car_model,callback:function(e){t.$set(t.car,"car_model",e)},expression:"car.car_model"}}),e("m-select",{attrs:{options:t.countries},model:{value:t.car.country,callback:function(e){t.$set(t.car,"country",e)},expression:"car.country"}}),e("m-input",{attrs:{type:"text",placeholder:"Стоимость"},model:{value:t.car.price,callback:function(e){t.$set(t.car,"price",e)},expression:"car.price"}}),e("m-button",{on:{click:t.createCar}},[t._v(" Добавить ")])],1)])},ot=[],st={name:"CarForm",data(){return{car:{car_brand:"",car_model:"",country:null,price:""},countries:[{value:null,name:"Не выбрана"}]}},methods:{createCar(){this.$emit("create",{...this.car})},async fetchCountry(){const t=await this.$ajax.get("api/country/");let e=t.data;console.log(e),e.forEach((t=>{this.countries.push({value:t.id,name:t.country_name})}))}},created(){this.fetchCountry()}},ct=st,it=(0,i.A)(ct,nt,ot,!1,null,"152410ac",null),lt=it.exports,ut=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"m-item"},[e("table",{staticClass:"tabel-c"},[t._m(0),e("transition-group",{attrs:{name:"cars-list"}},t._l(t.cars,(function(r){return e("tr",{key:r.id,staticClass:"car"},[e("td",[t._v(t._s(r.id))]),e("td",[t._v(t._s(r.car_brand))]),e("td",[t._v(t._s(r.car_model))]),e("td",[t._v(t._s(r.country_name))]),e("td",[t._v(t._s(r.price))]),e("td",[e("m-button",{staticClass:"x-btn",staticStyle:{width:"max-content","align-self":"flex-end"},on:{click:function(e){return t.$emit("remove",r)}}},[t._v("Удалить")])],1)])})),0)],1)])])},dt=[function(){var t=this,e=t._self._c;return e("tr",[e("td",[t._v("ID")]),e("td",[t._v("Brand")]),e("td",[t._v("Model")]),e("td",[t._v("Country")]),e("td",[t._v("Price")]),e("td",[t._v("Action")])])}],pt={components:{MButton:f},props:{cars:{type:Array,required:!0}},name:"CarsList"},mt=pt,ht=(0,i.A)(mt,ut,dt,!1,null,"f480f2e4",null),vt=ht.exports,ft={name:"CarPage",components:{Navbar:X,AppHeader:V,CarForm:lt,CarsList:vt},data(){return{cars:[],dlgShowOrNot:!1,selectSort:"",sortOptions:[{value:"car_brand",name:"по названию"},{value:"price",name:"по цене"}],isCarsLoading:!1,searchQuery:""}},mounted(){this.fetchCars()},methods:{createCar(t){const e={car_brand:t.car_brand,car_model:t.car_model,country_id:t.country,price:t.price};console.log(e),this.$ajax.post("api/auto/",e).then((e=>this.cars.push({...t,id:e.data.id}))),this.dlgShowOrNot=!1},removeCars(t){this.$ajax.delete(`api/auto/${t.id}/`),this.cars=this.cars.filter((e=>e.id!==t.id))},async fetchCars(){try{this.isCarsLoading=!0;const t=await this.$ajax.get("api/auto/");this.cars=t.data}catch(t){alert("error")}finally{this.isCarsLoading=!1}}},computed:{sortedCars(){return[...this.cars].sort(((t,e)=>t[this.selectSort]>e[this.selectSort]?-1:1))},sortAndSearchCars(){return this.sortedCars.filter((t=>t.car_brand.toLowerCase().includes(this.searchQuery.toLowerCase())))}}},_t=ft,yt=(0,i.A)(_t,rt,at,!1,null,"5ba16ad4",null),gt=yt.exports,bt=function(){var t=this,e=t._self._c;return e("div",[e("div",[e("app-header"),e("navbar")],1),e("div",{staticClass:"m-content"},[e("m-dialog",{attrs:{show:t.dlgShowOrNot}},[e("part-form",{on:{create:t.createPart}})],1),e("div",[e("m-input",{attrs:{placeholder:"Поиск..."},model:{value:t.searchQuery,callback:function(e){t.searchQuery=e},expression:"searchQuery"}})],1),e("div",{staticStyle:{"padding-top":"20px"}},[e("m-button",{staticStyle:{padding:"2%","align-self":"flex-end"},on:{click:function(e){t.dlgShowOrNot=!0}}},[t._v("Добавить")]),e("m-button",{staticStyle:{padding:"2%","margin-left":"30px"},on:{click:t.fetchParts}},[t._v("Обновить")])],1),e("div",{staticStyle:{"padding-top":"20px"}},[e("m-select",{attrs:{options:t.sortOptions},model:{value:t.selectSort,callback:function(e){t.selectSort=e},expression:"selectSort"}})],1),t.isPartLoading?e("div",[t._v("Идёт загрузка...")]):e("parts-list",{attrs:{carparts:t.sortAndSearchParts},on:{remove:t.removePart}})],1)])},xt=[],At=function(){var t=this,e=t._self._c;return e("div",[e("form",{staticClass:"m-form",on:{submit:function(t){t.preventDefault()}}},[e("h3",[t._v("Добавить деталь")]),e("m-input",{attrs:{type:"text",placeholder:"Название"},model:{value:t.carpart.name,callback:function(e){t.$set(t.carpart,"name",e)},expression:"carpart.name"}}),e("m-select",{attrs:{options:t.countries},model:{value:t.carpart.country,callback:function(e){t.$set(t.carpart,"country",e)},expression:"carpart.country"}}),e("m-input",{attrs:{type:"text",placeholder:"Описание"},model:{value:t.carpart.description,callback:function(e){t.$set(t.carpart,"description",e)},expression:"carpart.description"}}),e("m-input",{attrs:{type:"text",placeholder:"Автомобили"},model:{value:t.carpart.autos,callback:function(e){t.$set(t.carpart,"autos",e)},expression:"carpart.autos"}}),e("m-button",{on:{click:t.createPart}},[t._v(" Добавить ")])],1)])},kt=[],Ct={name:"PartForm",data(){return{carpart:{name:"",country:null,description:"",autos:[]},countries:[{value:null,name:"Не выбрана"}]}},methods:{createPart(){this.$emit("create",{...this.carpart})},async fetchCountry(){const t=await this.$ajax.get("api/country/");let e=t.data;console.log(e),e.forEach((t=>{this.countries.push({value:t.id,name:t.country_name})}))}},created(){this.fetchCountry()}},St=Ct,wt=(0,i.A)(St,At,kt,!1,null,"039ddd04",null),$t=wt.exports,Pt=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"m-item"},[e("table",{staticClass:"tabel-c"},[t._m(0),e("transition-group",{attrs:{name:"carparts-list"}},t._l(t.carparts,(function(r){return e("tr",{key:r.id,staticClass:"carparts"},[e("td",[t._v(t._s(r.id))]),e("td",[t._v(t._s(r.name))]),e("td",[t._v(t._s(r.country_name))]),e("td",[t._v(t._s(r.description))]),e("td",[t._v(t._s(r.autos_name))]),e("td",[e("m-button",{staticClass:"x-btn",staticStyle:{width:"max-content","align-self":"flex-end"},on:{click:function(e){return t.$emit("remove",r)}}},[t._v("Удалить")])],1)])})),0)],1)])])},Ot=[function(){var t=this,e=t._self._c;return e("tr",[e("td",[t._v("ID")]),e("td",[t._v("Name")]),e("td",[t._v("Country")]),e("td",[t._v("Description")]),e("td",[t._v("Autos")]),e("td",[t._v("Action")])])}],jt={props:{carparts:{type:Array,required:!0}},name:"PartsList"},It=jt,Lt=(0,i.A)(It,Pt,Ot,!1,null,"2114714f",null),Tt=Lt.exports,Dt={name:"CarPartPage",components:{Navbar:X,AppHeader:V,PartForm:$t,PartsList:Tt},data(){return{carparts:[],dlgShowOrNot:!1,selectSort:"",sortOptions:[{value:"name",name:"по названию"}],isPartLoading:!1,searchQuery:""}},mounted(){this.fetchParts()},methods:{createPart(t){const e={name:t.name,description:t.description,autos:[],autos_names:[],country_id:t.country};this.$ajax.post("api/carpart/",e).then((e=>this.carparts.push({...t,id:e.data.id}))),this.dlgShowOrNot=!1},removePart(t){this.$ajax.delete(`api/carpart/${t.id}/`),this.carparts=this.carparts.filter((e=>e.id!==t.id))},async fetchParts(){try{this.isPartLoading=!0;const t=await this.$ajax.get("api/carpart/");console.log(t),this.carparts=t.data}catch(t){alert("error")}finally{this.isPartLoading=!1}}},computed:{sortedParts(){return[...this.carparts].sort(((t,e)=>t[this.selectSort]>e[this.selectSort]?-1:1))},sortAndSearchParts(){return this.sortedParts.filter((t=>t.name.toLowerCase().includes(this.searchQuery.toLowerCase())))}}},Nt=Dt,Qt=(0,i.A)(Nt,bt,xt,!1,null,"ce6b862e",null),Mt=Qt.exports,qt=r(8505),Et=r(7776),Ft=r(6521),Ht=r(1689),Bt=r(8834),Ut=r(1526),zt=r(6278),Vt=r(1946),Rt=r(4089),Gt=r(9456),Jt=r(8412),Kt=r(7410),Wt=r(5443),Xt=r(5997),Yt=r(9940),Zt=r(7365),te=r(1735),ee=function(){var t=this,e=t._self._c;return e(qt.A,[e(zt.A,[e(Zt.A,{attrs:{flat:""}},[e(te.sw,[t._v("Машинова Дарья")]),e(Kt.A),e("div",[e(Ft.A,{attrs:{color:"#D05353"},on:{click:t.logout}},[t._v("Выход")])],1)],1),e(Et.A,{attrs:{elevation:"4",color:"#D05353"}},[e(Xt.A,{attrs:{"align-with-title":""}},[e(Wt.A,{on:{click:function(e){return t.$router.push("/country")}}},[t._v("Страны")]),e(Wt.A,{on:{click:function(e){return t.$router.push("/cars")}}},[t._v("Автомобили")]),e(Wt.A,{on:{click:function(e){return t.$router.push("/carpart")}}},[t._v("Запчасти")])],1)],1),e("div",[e(Yt.A,{attrs:{label:"Поиск...",rules:t.rules,"hide-details":"auto"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),e(Vt.A,{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.countries,search:t.search},scopedSlots:t._u([{key:"top",fn:function(){return[e(Zt.A,{attrs:{flat:""}},[e(Rt.A,{attrs:{"max-width":"500px"},scopedSlots:t._u([{key:"activator",fn:function({on:r,attrs:a}){return[e(Ft.A,t._g(t._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",a,!1),r),[t._v(" Добавить ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(Ht.A,[e(Bt.OQ,[e(zt.A,[e(Jt.A,[e(Ut.A,{attrs:{cols:"12",sm:"6",md:"4"}},[e(Yt.A,{attrs:{label:"Название"},model:{value:t.country.country_name,callback:function(e){t.$set(t.country,"country_name",e)},expression:"country.country_name"}})],1),e(Ut.A,{attrs:{cols:"12",sm:"6",md:"4"}},[e(Yt.A,{attrs:{label:"Код"},model:{value:t.country.code,callback:function(e){t.$set(t.country,"code",e)},expression:"country.code"}})],1),e(Ut.A,{attrs:{cols:"12",sm:"6",md:"4"}},[e(Yt.A,{attrs:{label:"Валюта"},model:{value:t.country.currency,callback:function(e){t.$set(t.country,"currency",e)},expression:"country.currency"}})],1)],1)],1)],1),e(Bt.SL,[e(Kt.A),e(Ft.A,{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v(" Cancel ")]),e(Ft.A,{attrs:{color:"blue darken-1",text:""},on:{click:t.createCountry}},[t._v(" Сохранить ")])],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function({item:r}){return[e(Gt.A,{attrs:{small:""},on:{click:function(e){return t.deleteItem(r)}}},[t._v(" mdi-delete ")])]}}],null,!0)})],1)],1)},re=[],ae={name:"CarPartPage",data(){return{countries:[],headers:[{text:"ID",value:"id"},{text:"Название",value:"country_name"},{text:"Код",value:"code",sortable:!1},{text:"Валюта",value:"currency",sortable:!1},{text:"Действие",value:"actions",sortable:!1}],search:"",dialog:!1,dialogDelete:!1,desserts:[],editedIndex:-1,country:{country_name:"",code:"",currency:""}}},watch:{dialog(t){t||this.close()}},created(){this.initialize()},methods:{createCountry(){let t={...this.country};const e={country_name:t.country_name,code:t.code,currency:t.currency};this.$ajax.post("api/country/",e).then((e=>this.countries.push({...t,id:e.data.id}))),this.close()},deleteItem(t){this.$ajax.delete(`api/country/${t.id}/`),this.countries=this.countries.filter((e=>e.id!==t.id))},close(){this.dialog=!1,this.$nextTick((()=>{this.editedIndex=-1}))},logout(){this.$store.commit("login/removeToken"),this.$router.push("/login")},async fetchCountry(){try{const t=await this.$ajax.get("api/country/");console.log(t),this.countries=t.data}catch(t){alert("error")}}},mounted(){this.fetchCountry()}},ne=ae,oe=(0,i.A)(ne,ee,re,!1,null,"c0c63d00",null),se=oe.exports,ce=function(){var t=this,e=t._self._c;return e("div",{staticClass:"l-form"},[e("form",{staticClass:"m-form",on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[e("h3",[t._v("Вход")]),e("m-input",{attrs:{type:"text",placeholder:"Имя пользователя"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),e("m-input",{attrs:{type:"password",placeholder:"Пароль"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),e("m-button",{staticStyle:{padding:"2%","align-self":"flex-end"},on:{click:t.loginUser}},[t._v("Вход")])],1)])},ie=[],le=r(5353),ue={data(){return{username:"",password:""}},methods:{...(0,le.i0)(["login/login"]),loginUser(){this["login/login"]({username:this.username,password:this.password,router:this.$router})}}},de=ue,pe=(0,i.A)(de,ce,ie,!1,null,"631cbc8c",null),me=pe.exports,he=r(4335);const ve={namespaced:!0,state:()=>({token:localStorage.getItem("token")||"",username:localStorage.getItem("username")||"",password:localStorage.getItem("password")||""}),getters:{isLoggedIn:t=>!!t.token},mutations:{setToken(t,e,r,a){t.token=e,localStorage.setItem("token",e),localStorage.setItem("username",r),localStorage.setItem("password",a)},removeToken(t){t.token="",t.username="",t.password="",localStorage.setItem("token",""),localStorage.setItem("username",null),localStorage.setItem("password",null)}},actions:{async login({commit:t},{username:e,password:r,router:a}){try{const n=await he.A.post("http://127.0.0.1:8000/api-token-auth/",{username:e,password:r}),o=n.data.token;await t("setToken",o,e,r),a.push("/")}catch(n){alert("Пароль или логин неверны!")}},removeToken({commit:t}){t("removeToken",state)}}};a.Ay.use(le.Ay);var fe=new le.Ay.Store({modules:{login:ve}});a.Ay.use(M.Ay);const _e=[{path:"/",component:et,meta:{requiresAuth:!0}},{path:"/cars",component:gt,meta:{requiresAuth:!0}},{path:"/carpart",component:Mt,meta:{requiresAuth:!0}},{path:"/country",component:se,meta:{requiresAuth:!0}},{path:"/login",component:me}],ye=new M.Ay({mode:"history",base:"/",routes:_e});ye.beforeEach(((t,e,r)=>{const a=fe.state.login.token;t.meta.requiresAuth&&!a?r("/login"):r()}));var ge=ye;const be=he.A.create({baseURL:"http://127.0.0.1:8000/"});be.interceptors.request.use((t=>{const e=fe.state.login.token;return e&&(t.headers.Authorization=`Token ${e}`),t}));var xe={install(t){t.prototype.$ajax=be}},Ae=r(5453);a.Ay.use(Ae.A);var ke=new Ae.A({});a.Ay.config.productionTip=!1,a.Ay.use(xe),Q.forEach((t=>{a.Ay.component(t.name,t)})),new a.Ay({router:ge,store:fe,vuetify:ke,render:t=>t(u)}).$mount("#app")}},e={};function r(a){var n=e[a];if(void 0!==n)return n.exports;var o=e[a]={exports:{}};return t[a].call(o.exports,o,o.exports,r),o.exports}r.m=t,function(){var t=[];r.O=function(e,a,n,o){if(!a){var s=1/0;for(u=0;u<t.length;u++){a=t[u][0],n=t[u][1],o=t[u][2];for(var c=!0,i=0;i<a.length;i++)(!1&o||s>=o)&&Object.keys(r.O).every((function(t){return r.O[t](a[i])}))?a.splice(i--,1):(c=!1,o<s&&(s=o));if(c){t.splice(u--,1);var l=n();void 0!==l&&(e=l)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[a,n,o]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var a in e)r.o(e,a)&&!r.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={524:0};r.O.j=function(e){return 0===t[e]};var e=function(e,a){var n,o,s=a[0],c=a[1],i=a[2],l=0;if(s.some((function(e){return 0!==t[e]}))){for(n in c)r.o(c,n)&&(r.m[n]=c[n]);if(i)var u=i(r)}for(e&&e(a);l<s.length;l++)o=s[l],r.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return r.O(u)},a=self["webpackChunkmashinova_frontend"]=self["webpackChunkmashinova_frontend"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=r.O(void 0,[504],(function(){return r(8876)}));a=r.O(a)})();
//# sourceMappingURL=app.5dc2b78e.js.map