(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["LabelDetail"],{"03fa":function(t,e,a){},"05ce":function(t,e,a){"use strict";a("e7ba")},"10db3":function(t,e,a){},"243a":function(t,e,a){"use strict";a("dd70")},6062:function(t,e,a){"use strict";var n=a("6d61"),s=a("6566");t.exports=n("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),s)},"841ca":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Block",[a("Block",{staticStyle:{"margin-bottom":"0 !important"}},[a("h5",{staticClass:"d-flex"},[a("FlexBox",{staticClass:"flex-auto align-items-center"},[a("RouterLink",{attrs:{to:"/labels"}},[t._v(" Labels ")]),a("Icon",{attrs:{name:"angle-double-right px-2"}}),a("Block",{attrs:{position:"relative"}},[a("Skeleton",{style:t.isLoading?"width: 200px; position: absolute; top: -22px":"",attrs:{loading:t.isLoading,active:t.isLoading,paragraph:!1}},[t._v(" "+t._s(t.label.name)+" ")])],1)],1),a("Block",{class:{hidden:t.isLoading}},[a("FlexBox",{staticClass:"w-max"},[a("Button",{staticClass:"p-2 mx-1 text-dark",attrs:{color:"light",title:"add contacts"},on:{click:function(e){t.isAddContactsModalShown=!0}}},[a("Icon",{attrs:{type:"si",name:"user-follow",size:"medium"}})],1),a("Button",{staticClass:"p-2 mx-1 text-dark",attrs:{color:"light",title:"Import contacts to "+t.label.name},on:{click:function(e){t.isImportFormShown=!0}}},[a("Icon",{attrs:{type:"si",name:"cloud-upload",size:"medium"}})],1),a("Button",{staticClass:"p-2 mx-1 text-dark",attrs:{color:"light",title:"compose message for all contacts of "+t.label.name},on:{click:t.onCompose}},[a("CardLoader",{attrs:{opacity:"0","is-loading":t.isComposing,"loader-size":"20"}},[a("Icon",{class:{invisible:t.isComposing},attrs:{type:"si",name:"envelope-letter",size:"medium"}})],1)],1),a("Button",{staticClass:"p-2 mx-1 text-dark",attrs:{color:"light",title:"edit label"},on:{click:function(e){t.isEditModalShown=!0}}},[a("Icon",{attrs:{type:"fa",name:"pencil",size:"medium"}})],1),a("Button",{staticClass:"p-2 mx-1 text-danger",attrs:{color:"light",title:"edit label"},on:{click:function(e){t.isDeleteModalShown=!0}}},[a("Icon",{attrs:{type:"fa",name:"trash",size:"medium"}})],1)],1)],1)],1)]),t.label.description?a("p",[t._v(" "+t._s(t.label.description)+" ")]):t._e(),a("ImportContact",{attrs:{label:t.label,visible:t.isImportFormShown},on:{success:t.onImportSuccess,close:function(e){t.isImportFormShown=!1}}}),a("ContactsTable",{attrs:{"is-loading":t.isLoading||t.isFiltering,contacts:t.contacts,"data-filters":t.filters,pagination:t.pagination,"hide-status":""},on:{reload:function(e){return t.fetchData(!0,e)}}}),a("AddContacts",{attrs:{visible:t.isAddContactsModalShown,"label-id":t.label.id,"exclude-contacts":t.contacts.map((function(t){return t.phone}))},on:{success:t.fetchData,close:function(e){t.isAddContactsModalShown=!1}}}),a("EditLabel",{attrs:{"label-id":t.label.id,visible:t.isEditModalShown},on:{success:t.fetchData,close:function(e){t.isEditModalShown=!1}}}),a("DeleteLabel",{attrs:{visible:t.isDeleteModalShown,label:t.label},on:{success:t.onDeleteLabel,close:function(e){t.isDeleteModalShown=!1}}})],1)},s=[],i=(a("d3b7"),a("b2a3"),a("03fa"),a("6042")),o=a.n(i),l=a("41b2"),r=a.n(l),c=a("1098"),d=a.n(c),u=a("4d26"),f=a.n(u),p=a("4d91"),h=a("daa3"),m=a("4df5"),b={prefixCls:p["a"].string,size:p["a"].oneOfType([p["a"].oneOf(["large","small","default"]),p["a"].number]),shape:p["a"].oneOf(["circle","square"])},g=p["a"].shape(b).loose,v={props:Object(h["k"])(b,{size:"large"}),render:function(){var t,e,a=arguments[0],n=this.$props,s=n.prefixCls,i=n.size,l=n.shape,r=f()((t={},o()(t,s+"-lg","large"===i),o()(t,s+"-sm","small"===i),t)),c=f()((e={},o()(e,s+"-circle","circle"===l),o()(e,s+"-square","square"===l),e)),d="number"===typeof i?{width:i+"px",height:i+"px",lineHeight:i+"px"}:{};return a("span",{class:f()(s,r,c),style:d})}},y=v,x={prefixCls:p["a"].string,width:p["a"].oneOfType([p["a"].number,p["a"].string])},C=p["a"].shape(x),w={props:x,render:function(){var t=arguments[0],e=this.$props,a=e.prefixCls,n=e.width,s="number"===typeof n?n+"px":n;return t("h3",{class:a,style:{width:s}})}},S=w,k=a("9b57"),L=a.n(k),_=p["a"].oneOfType([p["a"].number,p["a"].string]),$={prefixCls:p["a"].string,width:p["a"].oneOfType([_,p["a"].arrayOf(_)]),rows:p["a"].number},B=p["a"].shape($),F={props:$,methods:{getWidth:function(t){var e=this.width,a=this.rows,n=void 0===a?2:a;return Array.isArray(e)?e[t]:n-1===t?e:void 0}},render:function(){var t=this,e=arguments[0],a=this.$props,n=a.prefixCls,s=a.rows,i=[].concat(L()(Array(s))).map((function(a,n){var s=t.getWidth(n);return e("li",{key:n,style:{width:"number"===typeof s?s+"px":s}})}));return e("ul",{class:n},[i])}},j=F,O=a("db14"),D={active:p["a"].bool,loading:p["a"].bool,prefixCls:p["a"].string,children:p["a"].any,avatar:p["a"].oneOfType([p["a"].string,g,p["a"].bool]),title:p["a"].oneOfType([p["a"].bool,p["a"].string,C]),paragraph:p["a"].oneOfType([p["a"].bool,p["a"].string,B])};function I(t){return t&&"object"===("undefined"===typeof t?"undefined":d()(t))?t:{}}function M(t,e){return t&&!e?{shape:"square"}:{shape:"circle"}}function A(t,e){return!t&&e?{width:"38%"}:t&&e?{width:"50%"}:{}}function E(t,e){var a={};return t&&e||(a.width="61%"),a.rows=!t&&e?3:2,a}var T={name:"ASkeleton",props:Object(h["k"])(D,{avatar:!1,title:!0,paragraph:!0}),inject:{configProvider:{default:function(){return m["a"]}}},render:function(){var t=arguments[0],e=this.$props,a=e.prefixCls,n=e.loading,s=e.avatar,i=e.title,l=e.paragraph,c=e.active,d=this.configProvider.getPrefixCls,u=d("skeleton",a);if(n||!Object(h["j"])(this,"loading")){var p,m=!!s||""===s,b=!!i,g=!!l,v=void 0;if(m){var x={props:r()({prefixCls:u+"-avatar"},M(b,g),I(s))};v=t("div",{class:u+"-header"},[t(y,x)])}var C=void 0;if(b||g){var w=void 0;if(b){var k={props:r()({prefixCls:u+"-title"},A(m,g),I(i))};w=t(S,k)}var L=void 0;if(g){var _={props:r()({prefixCls:u+"-paragraph"},E(m,b),I(l))};L=t(j,_)}C=t("div",{class:u+"-content"},[w,L])}var $=f()(u,(p={},o()(p,u+"-with-avatar",m),o()(p,u+"-active",c),p));return t("div",{class:$},[v,C])}var B=this.$slots["default"];return B&&1===B.length?B[0]:t("span",[B])},install:function(t){t.use(O["a"]),t.component(T.name,T)}},R=T,q=a("0814"),z=a("f85f"),U=a("d76a"),N=a("5d35"),P=a("ad4f"),V=a("b881"),J=a("9ea2"),H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Modal",{attrs:{title:"Add new contacts","modal-style":"max-width: 500px;","hide-controls":"",visible:t.visible},on:{close:t.close}},[a("Block",{staticClass:"px-4"},[a("SelectContacts",{attrs:{"show-actions":"","exclude-labels":[t.labelId],"exclude-contacts":t.excludeContacts,"is-submitting":t.isSubmitting},on:{submit:t.onSubmit,close:t.close},model:{value:t.contacts,callback:function(e){t.contacts=e},expression:"contacts"}})],1)],1)},W=[],G=(a("d81d"),a("a9e3"),a("78b5")),K=a("b0e0"),Q={name:"AddContacts",components:{SelectContacts:K["a"],Block:q["a"],Modal:G["a"]},props:{labelId:{type:[Number,String],default:null},excludeContacts:{type:Array,default:function(){return[]}},visible:{type:Boolean,default:!1}},data:function(){return{error:{},contacts:[],isLoading:!1,isSubmitting:!1,isUserFormShown:!0}},methods:{onSubmit:function(){var t=this,e=this.contacts;e.length?(this.isSubmitting=!0,Object(z["a"])(this.labelId,e.map((function(t){return t.id}))).then((function(){t.$emit("success"),t.close()})).catch((function(e){var a=e||"Couldn't add contacts.";t.$toast.error(a)})).finally((function(){t.isSubmitting=!1}))):this.$toast.error("Please select contacts to continue")},close:function(){this.contacts=[],this.$emit("close")}}},X=Q,Y=a("2877"),Z=Object(Y["a"])(X,H,W,!1,null,"44f3add7",null),tt=Z.exports,et=a("9559"),at=a("7228"),nt=a("c2cd"),st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Modal",{attrs:{title:"Import contacts "+(t.label.name?"to "+t.label.name:""),visible:t.visible,"modal-style":"max-width: min-content;"},on:{closed:t.reset,close:t.close}},[a("Block",{staticClass:"px-4"},[a("CardLoader",{attrs:{"is-loading":t.isLoading}},[a("Block",{style:{height:"180px",width:"450px "}},[a("FileUploader",{attrs:{info:"Drop your excel or csv file here",mimes:[".xls",".xlsx",".csv"]},on:{upload:t.onFileUpload}})],1)],1)],1),a("template",{slot:"footer"},[a("Button",{attrs:{color:"secondary"},on:{click:t.close}},[t._v(" Cancel ")])],1),a("ResultContacts",{attrs:{"label-id":t.label.id,visible:t.isResultModalShown},on:{success:t.onSuccess,close:function(e){t.isResultModalShown=!1}},model:{value:t.contacts,callback:function(e){t.contacts=e},expression:"contacts"}})],2)},it=[],ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Form",{staticClass:"file-upload m-auto d-flex justify-content-center",class:{dragging:t.isDragging},on:{dragenter:function(e){t.isDragging=!0},dragover:function(t){t.preventDefault()},drop:function(e){return e.preventDefault(),t.onFileDrop(e)},dragleave:function(e){t.isDragging=!1}}},[a("Block",{staticClass:"d-flex flex-column justify-content-center align-items-center",class:{"disable-pointer-event":t.isDragging}},[a("Icon",{staticClass:"fa-4x",attrs:{type:"si",name:"cloud-download"}}),a("span",{staticClass:"mt-2"},[t._v(" "+t._s(t.info)+". Or, ")]),a("Button",{staticClass:"mt-2",attrs:{size:"sm",color:"primary",bordered:""},on:{click:t.openFileExplorer}},[t._v(" Select from your device ")]),a("input",{ref:"inputFile",staticClass:"d-none",attrs:{type:"file",accept:t.accept},on:{change:t.onFileSelect}})],1)],1)},lt=[],rt=(a("a15b"),a("a4d3"),a("e01a"),a("d28b"),a("3ca3"),a("ddb0"),a("06c5"));function ct(t,e){var a;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(a=Object(rt["a"])(t))||e&&t&&"number"===typeof t.length){a&&(t=a);var n=0,s=function(){};return{s:s,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,l=!1;return{s:function(){a=t[Symbol.iterator]()},n:function(){var t=a.next();return o=t.done,t},e:function(t){l=!0,i=t},f:function(){try{o||null==a["return"]||a["return"]()}finally{if(l)throw i}}}}var dt=a("6436"),ut={name:"FileUploader",components:{Icon:N["a"],Form:dt["a"],Block:q["a"],Button:P["a"]},props:{info:{type:String,default:"Drop your files here"},mimes:{type:[String,Array],default:""}},data:function(){return{isDragging:!1}},computed:{accept:function(){var t=this.mimes;return"string"===typeof t?t:t.join(",")}},methods:{getFiles:function(t){var e=[];if(t.items.length){var a,n=ct(t.items);try{for(n.s();!(a=n.n()).done;){var s=a.value,i=s.getAsFile();e.push(i)}}catch(c){n.e(c)}finally{n.f()}}else if(t.files.length){var o,l=ct(t.files);try{for(l.s();!(o=l.n()).done;){var r=o.value;e.push(r)}}catch(c){l.e(c)}finally{l.f()}}return e},openFileExplorer:function(){this.$refs.inputFile.click()},onUpload:function(t){this.$emit("upload",t),this.$refs.inputFile.value=""},onFileDrop:function(t){this.isDragging=!1;var e=this.getFiles(t.dataTransfer);e.length&&this.onUpload(e)},onFileSelect:function(t){var e=t.target;this.isDragging=!1;var a=e.files;a.length&&this.onUpload(a)}}},ft=ut,pt=(a("243a"),Object(Y["a"])(ft,ot,lt,!1,null,"7a663418",null)),ht=pt.exports,mt=a("0e85"),bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Modal",{attrs:{title:"Result contacts ("+t.contacts.length+")",visible:t.visible,"hide-controls":"","modal-style":"max-width: max-content;"},on:{close:t.close}},[a("Block",{staticClass:"px-4"},[a("p",{staticClass:"mb-2"},[t._v(" Select appropriate column fields ("),a("span",{class:t.checkRequired?"":"text-danger"},[t._v("fields with '*' are required")]),t._v(" and "),a("span",{class:t.checkDuplicates?"":"text-danger"},[t._v("duplicate fields are not allowed")]),t._v("): "),a("br"),t._v(" Also make sure to edit all the invalid records. ")]),a("Block",{staticClass:"conf-table-wrapper"},[a("table",{staticClass:"table table-borderless table-striped m-0 border"},[a("thead",{staticClass:"w-100 border-bottom"},[a("tr",[a("th",{staticStyle:{width:"60px"}},[t._v(" # ")]),t._l(t.columns,(function(e){return a("th",{key:e,staticClass:"text-nowrap"},[a("InputSelect",{staticClass:"mb-0",attrs:{options:t.fields,"option-text":"name","option-value":"id"},model:{value:t.selected[e-1],callback:function(a){t.$set(t.selected,e-1,a)},expression:"selected[index - 1]"}})],1)})),a("th"),a("th",{staticStyle:{width:"60px"}})],2)]),t.contacts.length?a("tbody",t._l(t.contacts,(function(e,n){return a("tr",{key:n},[a("td",{staticStyle:{width:"60px"}},[t._v(" "+t._s(n+1)+" ")]),t._l(Object.keys(e),(function(s,i){return a("td",{key:i,style:"message"===s?"width: 0;":""},["status"===s?[a("FlexBox",{class:e.status?"text-success":"text-danger cursor-help",attrs:{"align-items":"center",title:e.message}},[a("span",{staticClass:"mr-2"},[t._v(t._s(e.status?"Looks good":"Error"))]),"status"===s&&e.message?a("Icon",{attrs:{type:"si",name:"info",color:"danger"}}):t._e()],1)]:"message"===s?[a("Block",{staticStyle:{width:"0"}})]:[e.status?a("span",{staticClass:"text-wrap-break-word"},[t._v(" "+t._s(e[s])+" ")]):a("InputText",{staticClass:"m-0 p-0",attrs:{material:!0},model:{value:t.contacts[n][s],callback:function(e){t.$set(t.contacts[n],s,e)},expression:"contacts[index][key]"}})]],2)})),a("td",{staticStyle:{width:"60px"}},[t.contacts.length>1?a("Button",{staticClass:"p-2 mx-1 text-danger",attrs:{color:"light",title:"delete contact"},on:{click:function(e){return t.deleteRecord(n)}}},[a("Icon",{attrs:{type:"fa",name:"trash",size:"regular"}})],1):t._e()],1)],2)})),0):a("tbody",[a("tr",[a("td",{attrs:{colspan:t.columns.length}})])])])])],1),a("FlexBox",{staticClass:"py-3 px-4",attrs:{"align-items":"start",justify:"between"}},[a("span",{staticClass:"link select-none",on:{click:t.loadContacts}},[t._v(" Reset records ")]),a("Block",[a("Button",{staticClass:"mr-2",attrs:{color:"primary",disabled:!t.validated||t.isLoading,loading:t.isLoading},on:{click:t.createContacts}},[t._v(" Confirm ")]),a("Button",{attrs:{color:"secondary"},on:{click:t.close}},[t._v(" Cancel ")])],1)],1)],1)},gt=[],vt=(a("99af"),a("4de4"),a("4160"),a("caad"),a("a434"),a("b64b"),a("6062"),a("2532"),a("159b"),a("5530")),yt=a("2909"),xt=a("e9b6"),Ct=a("0af5"),wt=a("dc4c"),St=a("7fb4"),kt={name:"ResultContacts",components:{InputText:St["a"],FlexBox:et["a"],Block:q["a"],Modal:G["a"],Icon:N["a"],InputSelect:Ct["a"],Button:P["a"]},props:{value:{type:Array,default:function(){return[]}},labelId:{type:Number,default:null},visible:{type:Boolean,default:!1}},data:function(){return{contacts:[],selected:[],isLoading:!1,isValidated:!1,isDeleteContactModalShown:!1}},computed:{fields:function(){return[{id:null,name:"Select field",selected:!0,disabled:!0,hidden:!0},{id:null,name:"--none--"}].concat(Object(yt["a"])(xt))},columns:function(){var t=this.contacts;return t.length?Object.keys(t[0]).length-2:[]},checkDuplicates:function(){var t=this.selected,e=t.filter((function(t){return t}));return!e.length||new Set(e).size===e.length},checkRequired:function(){var t=this.fields,e=this.selected,a=e.filter((function(t){return t}));if(a.length){var n=t.filter((function(t){return t.required})).map((function(t){return t.id}));return n.filter((function(t){return e.includes(t)})).length===n.length}return!0},validated:function(){var t=this.fields,e=this.selected,a=this.contacts,n=this.checkRequired;if(!n)return!1;var s=e.filter((function(t){return t}));if(a.length&&new Set(s).size===s.length){var i=t.filter((function(t){return t.required})).map((function(t){return t.id}));if(i.filter((function(t){return e.includes(t)})).length===i.length)return!0}return!1}},watch:{value:{handler:function(t){Array.isArray(t)&&this.loadContacts()},immediate:!0}},methods:{ValidateContacts:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return Object(wt["a"])(this.selected,this.contacts).then((function(a){var n=a.filter((function(t){return!t.status}));if(t.contacts=a,0!==n.length)throw t.isValidated=!1,new Error("Please edit/delete the invalid contacts.").message;t.isValidated=!0,e&&t.$toast.success("Contacts are validated")}))},createContacts:function(){var t=this;this.isLoading=!0,this.ValidateContacts(!1).then((function(){if(t.isValidated){var e=t.getFormattedContacts();return Object(z["b"])(t.labelId,e)}})).then((function(e){var a=e.message;t.$toast.success(a||"Contacts imported successfully"),t.$store.dispatch("listLabels",{force:!0}),t.$emit("success"),t.close()})).catch((function(e){var a=e||"There was an error while importing contacts.";t.$toast.error(a)})).finally((function(){t.isLoading=!1}))},getFormattedContacts:function(){var t=this,e=this.selected,a=this.contacts;return a.map((function(a){var n={},s=Object.keys(a);return s.forEach((function(t,s){n[e[s]]=a[t]})),Object.keys(n).forEach((function(e){return t.isEmpty(e)&&delete n[e]})),n}))},loadContacts:function(){var t=this.value,e=[];t.forEach((function(t){e.push(Object(vt["a"])({},t))})),this.contacts=e,this.isValidated=!1},deleteRecord:function(t){this.contacts.splice(t,1)},close:function(){this.$emit("close"),this.contacts=[],this.selected=[]}}},Lt=kt,_t=(a("cf2c"),Object(Y["a"])(Lt,bt,gt,!1,null,"494c91e5",null)),$t=_t.exports,Bt={name:"ImportContact",components:{ResultContacts:$t,Button:P["a"],FileUploader:ht,CardLoader:nt["a"],Block:q["a"],Modal:G["a"]},props:{label:{type:Object,default:function(){return{}}},visible:{type:Boolean,default:!1}},data:function(){return{contacts:[],isLoading:!1,isResultModalShown:!1}},methods:{onFileUpload:function(t){var e=this;this.isLoading=!0;var a=t[0];a?Object(mt["a"])(a).then((function(t){if(!t.length)return e.$toast.error("contacts not found");e.contacts=t,e.isResultModalShown=!0})).catch((function(t){var a=t||"Couldn't parse contacts  from the file.";e.$toast.error(a)})).finally((function(){e.isLoading=!1})):this.$toast.error("Please select a file to continue")},onSuccess:function(){this.$emit("success"),this.close()},close:function(){this.isLoading||this.$emit("close")},reset:function(){this.contact={},this.isLoading=!1,this.isResultModalShown=!1}}},Ft=Bt,jt=Object(Y["a"])(Ft,st,it,!1,null,"50959a84",null),Ot=jt.exports,Dt={name:"LabelDetail",components:{CardLoader:nt["a"],FlexBox:et["a"],AddContacts:tt,DeleteLabel:J["a"],EditLabel:V["a"],Button:P["a"],Icon:N["a"],ContactsTable:U["a"],Block:q["a"],Skeleton:R,ImportContact:Ot},data:function(){return{targetContact:{},isLoading:!1,isFiltering:!1,isComposing:!1,isEditModalShown:!1,isImportFormShown:!1,isDeleteModalShown:!1,isAddContactsModalShown:!1,isRemoveLabelContactModalShown:!1,label:{},contacts:[],errorMsg:"Hello world",pagination:{pages:1,current:1,perPage:15},filters:{keyword:""}}},watch:{"$route.params.id":{handler:function(){this.fetchData()}}},created:function(){this.$bus.on("reload-contacts-table",this.fetchData),this.fetchData()},beforeDestroy:function(){this.$bus.removeAllListeners("reload-contacts-table")},methods:{fetchData:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a=arguments.length>1?arguments[1]:void 0,n=this.$route.params.id;e?this.isFiltering=!0:this.isLoading=!0,Object(z["g"])(n).then((function(e){return t.label=e,Object(z["f"])(n,{keyword:t.filters.keyword||null,page:a||t.pagination.current||null,per_page:t.pagination.perPage,labels:1})})).then((function(e){var a=e.data,n=e.meta;t.contacts=a,t.pagination=Object(at["b"])(n)})).catch((function(e){t.$toast.error(e)})).finally((function(){t.isLoading=!1,t.isFiltering=!1}))},onImportSuccess:function(){this.fetchData()},onCompose:function(){var t=this;this.isComposing=!0,Object(z["f"])(this.$route.params.id,{per_page:0}).then((function(e){var a=e.data;t.$bus.emit("compose",{action:"New",recipients:a})})).catch((function(e){t.$toast.error(e)})).finally((function(){t.isComposing=!1}))},onDeleteLabel:function(){this.$router.go(-1),this.isDeleteModalShown=!1}}},It=Dt,Mt=(a("f674"),Object(Y["a"])(It,n,s,!1,null,null,null));e["default"]=Mt.exports},"8bd0":function(t,e,a){},"9ea2":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Modal",{staticClass:"delete-label-modal",attrs:{title:"Delete this label permanently?",visible:t.visible,loading:t.isLoading,"modal-style":"max-width: 550px;"},on:{close:t.close,success:t.deleteLabel}},[a("Block",{staticClass:"px-4"},[a("p",{staticClass:"mb-3"},[a("span",[t._v("The contacts will be released from the label and won't be affected.")])]),a("Block",{staticClass:"label-details"},[a("table",{staticClass:"w-100"},[a("tbody",[a("tr",[a("th",{staticStyle:{width:"100px"}},[t._v(" Label name: ")]),a("td",[t._v(" "+t._s(t.label.name||" N/A")+" ")])]),a("tr",[a("th",{staticStyle:{width:"70px"}},[t._v(" Contacts: ")]),a("td",[t._v(" "+t._s(t.label.total_contacts||" N/A")+" ")])]),a("tr",[a("th",{staticStyle:{width:"70px"}},[t._v(" Description: ")]),a("td",[a("Block",{staticClass:"description-block mb-3"},[a("read-more",{staticClass:"description-text",attrs:{text:t.label.description||"","max-chars":100,"more-str":"Show More"}})],1)],1)])])])])],1)],1)},s=[],i=(a("d3b7"),a("78b5")),o=a("f85f"),l=a("0814"),r={name:"DeleteLabel",components:{Block:l["a"],Modal:i["a"]},props:{visible:{type:Boolean,default:!1},label:{type:Object,default:function(){return{}}}},data:function(){return{isLoading:!1}},methods:{deleteLabel:function(){var t=this;this.isLoading=!0,Object(o["e"])(this.label.id).then((function(){t.$emit("success"),t.$store.dispatch("listLabels",{force:!0}),t.$toast.success("Label deleted successfully!"),t.close()})).catch((function(e){var a=e||"Couldn't delete label.";t.$toast.error(a)})).finally((function(){t.isLoading=!1,t.close()}))},close:function(){this.isLoading||this.$emit("close")}}},c=r,d=(a("05ce"),a("2877")),u=Object(d["a"])(c,n,s,!1,null,null,null);e["a"]=u.exports},b881:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Modal",{attrs:{title:"Update label","hide-controls":"","modal-style":"max-width: 500px;","modal-class":"pr-2",visible:t.visible},on:{closed:t.reset,close:t.close}},[a("CardLoader",{attrs:{"is-loading":t.isLoading}},[a("LabelForm",{attrs:{error:t.error,"is-loading":t.isSubmitting},on:{submit:t.updateLabel,cancel:t.close},model:{value:t.label,callback:function(e){t.label=e},expression:"label"}})],1)],1)},s=[],i=(a("a4d3"),a("e01a"),a("b0c0"),a("a9e3"),a("d3b7"),a("53ca")),o=a("f85f"),l=a("78b5"),r=a("f669"),c=a("c2cd"),d={name:"EditLabel",components:{CardLoader:c["a"],LabelForm:r["a"],Modal:l["a"]},props:{labelId:{type:[Number,String],default:null},visible:{type:Boolean,default:!1}},data:function(){return{label:{},error:{},isLoading:!1,isSubmitting:!1,isUserFormShown:!0}},watch:{visible:function(t){t&&this.fetchData()}},methods:{fetchData:function(){var t=this;this.isLoading=!0,Object(o["g"])(this.labelId).then((function(e){t.label=e})).catch((function(){t.close(),t.$toast.error("There was an error while fetching label data!")})).finally((function(){t.isLoading=!1}))},updateLabel:function(t){var e=this;this.isSubmitting=!0;var a=t.name,n=t.description;Object(o["k"])(this.labelId,{name:a,description:n}).then((function(t){e.error={},e.close(),e.$emit("success",t),e.$store.dispatch("listLabels",{force:!0}),e.$toast.success("Label updated successfully"),e.close()})).catch((function(t){"object"===Object(i["a"])(t)?e.error=t:e.$toast.error(t)})).finally((function(){e.isSubmitting=!1}))},close:function(){this.isLoading&&this.isSubmitting||this.$emit("close")},reset:function(){this.label={},this.isLoading=!1,this.isUserFormShown=!0}}},u=d,f=a("2877"),p=Object(f["a"])(u,n,s,!1,null,"7dfea746",null);e["a"]=p.exports},be95:function(t,e,a){t.exports={primary:"#FF6C37",inverse:"#343a40",secondary:"#343a40",success:"#9ccc65",info:"#26c6da",warning:"#ffca28",danger:"#ef5350"}},cf2c:function(t,e,a){"use strict";a("10db3")},dd70:function(t,e,a){},e7ba:function(t,e,a){t.exports={primary:"#FF6C37",inverse:"#343a40",secondary:"#343a40",success:"#9ccc65",info:"#26c6da",warning:"#ffca28",danger:"#ef5350"}},e9b6:function(t){t.exports=JSON.parse('[{"id":"name","name":"Full Name","dataType":"string","required":false},{"id":"phone","name":"Mobile Number *","dataType":"string","required":true},{"id":"email","name":"Email","dataType":"string","required":false},{"id":"address","name":"Address","dataType":"string","required":false}]')},f669:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("CardLoader",{attrs:{"is-loading":t.isFetchingData}},[a("Form",{staticClass:"px-2 pb-2",on:{submit:t.onSubmit}},[a("table",{staticClass:"table-borderless w-100"},[a("tr",[a("th",{staticStyle:{width:"60px"},attrs:{scope:"row"}},[a("FlexBox",{staticClass:"h-100 w-100",attrs:{"align-items":"center",justify:"center"}},[a("Icon",{attrs:{name:"user",size:"large",color:"muted"}})],1)],1),a("td",{attrs:{colspan:"2"}},[a("InputText",{attrs:{required:"",type:"text",title:"Label Name",error:t.error.name},model:{value:t.label.name,callback:function(e){t.$set(t.label,"name",e)},expression:"label.name"}})],1)]),a("tr",[a("th",{attrs:{scope:"row"}},[a("FlexBox",{staticClass:"h-100 w-100",attrs:{"align-items":"center",justify:"center"}},[a("Icon",{staticClass:"fa-rotate-90",attrs:{name:"file",size:"regular",color:"muted"}})],1)],1),a("td",{attrs:{colspan:"2"}},[a("InputTextArea",{attrs:{title:"Description",rows:"3",error:t.error.description},model:{value:t.label.description,callback:function(e){t.$set(t.label,"description",e)},expression:"label.description"}})],1)])]),a("FlexBox",{staticClass:"px-2",attrs:{justify:"end"}},[a("Button",{staticClass:"mr-2",attrs:{type:"submit",color:"primary",disabled:t.isLoading,loading:t.isLoading}},[t._v(" Save ")]),a("Button",{attrs:{color:"secondary"},on:{click:function(e){return t.$emit("cancel")}}},[t._v(" Cancel ")])],1)],1)],1)},s=[],i=a("5530"),o=a("6436"),l=a("7fb4"),r=a("5d35"),c=a("9559"),d=a("c6b1"),u=a("ad4f"),f=a("c2cd"),p={name:"LabelForm",components:{CardLoader:f["a"],Button:u["a"],InputTextArea:d["a"],FlexBox:c["a"],Icon:r["a"],InputText:l["a"],Form:o["a"]},props:{value:{type:Object,default:function(){return{}}},error:{type:Object,default:function(){return{}}},isLoading:{type:Boolean}},data:function(){return{isFetchingData:!1,label:{name:"",description:""}}},computed:{},watch:{value:{handler:function(){var t=this.value,e=this.label;this.label=Object(i["a"])(Object(i["a"])({},e),t)},immediate:!0}},methods:{onSubmit:function(){this.$emit("submit",this.label)}}},h=p,m=(a("fc7d"),a("2877")),b=Object(m["a"])(h,n,s,!1,null,"756a1623",null);e["a"]=b.exports},f674:function(t,e,a){"use strict";a("be95")},fc7d:function(t,e,a){"use strict";a("8bd0")}}]);