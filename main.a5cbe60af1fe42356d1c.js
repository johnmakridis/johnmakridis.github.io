(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{0:function(l,n,u){l.exports=u("zUnb")},crnd:function(l,n){function u(l){return Promise.resolve().then(function(){var n=new Error("Cannot find module '"+l+"'");throw n.code="MODULE_NOT_FOUND",n})}u.keys=function(){return[]},u.resolve=u,l.exports=u,u.id="crnd"},zUnb:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),e=(u("yLV6"),function(){return function(){}}()),i=u("LvDl"),o=u("PSD3"),a=u.n(o),s=u("EVdn"),c=function(){function l(l){this.http=l,this.contactForm={fullname:null,email:null,message:null}}return l.prototype.ngOnInit=function(){return l=this,void 0,u=function(){var l,n,u;return function(l,n){var u,t,e,i,o={label:0,sent:function(){if(1&e[0])throw e[1];return e[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(u)throw new TypeError("Generator is already executing.");for(;o;)try{if(u=1,t&&(e=2&i[0]?t.return:i[0]?t.throw||((e=t.return)&&e.call(t),0):t.next)&&!(e=e.call(t,i[1])).done)return e;switch(t=0,e&&(i=[2&i[0],e.value]),i[0]){case 0:case 1:e=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,t=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(e=(e=o.trys).length>0&&e[e.length-1])&&(6===i[0]||2===i[0])){o=0;continue}if(3===i[0]&&(!e||i[1]>e[0]&&i[1]<e[3])){o.label=i[1];break}if(6===i[0]&&o.label<e[1]){o.label=e[1],e=i;break}if(e&&o.label<e[2]){o.label=e[2],o.ops.push(i);break}e[2]&&o.ops.pop(),o.trys.pop();continue}i=n.call(l,o)}catch(a){i=[6,a],t=0}finally{u=e=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}(this,function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),l=this,[4,this.http.get("assets/data.json").toPromise()];case 1:return l.data=t.sent(),n=i.orderBy(this.data.projects,["id"],["desc"]),this.data.projectsGrouped=i.chunk(n,i.round(n.length/4)),this.data.publications=i.orderBy(this.data.publications,["id"],["desc"]),[3,3];case 2:return u=t.sent(),console.log(u),[3,3];case 3:return[2]}})},new((n=void 0)||(n=Promise))(function(t,e){function i(l){try{a(u.next(l))}catch(n){e(n)}}function o(l){try{a(u.throw(l))}catch(n){e(n)}}function a(l){l.done?t(l.value):new n(function(n){n(l.value)}).then(i,o)}a((u=u.apply(l,[])).next())});var l,n,u},l.prototype.ngOnDestroy=function(){},l.prototype.submitContactForm=function(l){this.contactForm.fullname&&this.contactForm.email&&this.contactForm.message?s("#cform").submit():a.a.fire({type:"error",title:"Notification",text:"Form cannot be submitted. Please fill all the fields."})},l}(),r=u("pMnS"),b=function(){function l(){}return l.prototype.ngOnInit=function(){},l}(),p=t.nb({encapsulation:0,styles:[[""]],data:{}});function d(l){return t.Cb(0,[(l()(),t.pb(0,0,null,null,0,"p",[],null,null,null,null,null))],null,null)}function m(l){return t.Cb(0,[(l()(),t.pb(0,0,null,null,1,"app-home",[],null,null,null,d,p)),t.ob(1,114688,null,0,b,[],null,null)],function(l,n){l(n,1,0)},null)}var g=t.lb("app-home",b,m,{},{},[]),f=u("Ip0R"),x=u("gIcY"),h=u("t/Na"),v=t.nb({encapsulation:0,styles:[["mat-toolbar.app-header[_ngcontent-%COMP%]{position:fixed;top:0;left:0;right:0}.example-is-mobile[_ngcontent-%COMP%]   mat-toolbar.app-header[_ngcontent-%COMP%]{position:fixed;z-index:2}h1.app-name[_ngcontent-%COMP%]{margin-left:8px}.app-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:absolute;top:0;bottom:0;left:0;right:0}mat-sidenav-container[_ngcontent-%COMP%]{position:absolute;top:56px;bottom:0;left:0;right:0}mat-sidenav[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:250px}mat-toolbar.app-footer[_ngcontent-%COMP%]{position:fixed;bottom:0;left:0;right:0}mat-sidenav-content[_ngcontent-%COMP%]{padding:4px 20px}.sidenav-container[_ngcontent-%COMP%]{z-index:-1!important}.example-is-mobile[_ngcontent-%COMP%]   mat-sidenav-container[_ngcontent-%COMP%]{flex:1 0 auto}.mat-toolbar-row[_ngcontent-%COMP%], .mat-toolbar-single-row[_ngcontent-%COMP%]{height:56px}button.sidebar-item[_ngcontent-%COMP%]{width:100%;text-align:left}.empty-space[_ngcontent-%COMP%]{flex:1 1 auto}@media only screen and (min-width:601px){.sidenav-toggler[_ngcontent-%COMP%]{margin-left:8px}}"]],data:{}});function y(l){return t.Cb(0,[(l()(),t.pb(0,0,null,null,33,"nav",[["class","navbar navbar-expand-lg navbar-dark bg-primary fixed-top"],["id","sideNav"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,4,"a",[["class","navbar-brand js-scroll-trigger"],["href","#page-top"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,1,"span",[["class","d-block d-lg-none"],["itemprop","name"]],null,null,null,null,null)),(l()(),t.Bb(3,null,["",""])),(l()(),t.pb(4,0,null,null,1,"span",[["class","d-none d-lg-block"]],null,null,null,null,null)),(l()(),t.pb(5,0,null,null,0,"img",[["alt","John Makridis"],["class","img-fluid img-profile rounded-circle mx-auto mb-2"],["itemprop","image"],["src","assets/img/john-makridis.jpg"]],null,null,null,null,null)),(l()(),t.pb(6,0,null,null,1,"button",[["aria-controls","navbarSupportedContent"],["aria-expanded","false"],["aria-label","Toggle navigation"],["class","navbar-toggler"],["data-target","#navbarSupportedContent"],["data-toggle","collapse"],["type","button"]],null,null,null,null,null)),(l()(),t.pb(7,0,null,null,0,"span",[["class","navbar-toggler-icon"]],null,null,null,null,null)),(l()(),t.pb(8,0,null,null,25,"div",[["class","collapse navbar-collapse"],["id","navbarSupportedContent"]],null,null,null,null,null)),(l()(),t.pb(9,0,null,null,24,"ul",[["class","navbar-nav"]],null,null,null,null,null)),(l()(),t.pb(10,0,null,null,2,"li",[["class","nav-item"]],null,null,null,null,null)),(l()(),t.pb(11,0,null,null,1,"a",[["class","nav-link js-scroll-trigger"],["href","#about"]],null,null,null,null,null)),(l()(),t.Bb(-1,null,["About"])),(l()(),t.pb(13,0,null,null,2,"li",[["class","nav-item"]],null,null,null,null,null)),(l()(),t.pb(14,0,null,null,1,"a",[["class","nav-link js-scroll-trigger"],["href","#education"]],null,null,null,null,null)),(l()(),t.Bb(-1,null,["Education"])),(l()(),t.pb(16,0,null,null,2,"li",[["class","nav-item"]],null,null,null,null,null)),(l()(),t.pb(17,0,null,null,1,"a",[["class","nav-link js-scroll-trigger"],["href","#experience"]],null,null,null,null,null)),(l()(),t.Bb(-1,null,["Experience"])),(l()(),t.pb(19,0,null,null,2,"li",[["class","nav-item"]],null,null,null,null,null)),(l()(),t.pb(20,0,null,null,1,"a",[["class","nav-link js-scroll-trigger"],["href","#services"]],null,null,null,null,null)),(l()(),t.Bb(-1,null,["Services"])),(l()(),t.pb(22,0,null,null,2,"li",[["class","nav-item"]],null,null,null,null,null)),(l()(),t.pb(23,0,null,null,1,"a",[["class","nav-link js-scroll-trigger"],["href","#skills"]],null,null,null,null,null)),(l()(),t.Bb(-1,null,["Skills"])),(l()(),t.pb(25,0,null,null,2,"li",[["class","nav-item"]],null,null,null,null,null)),(l()(),t.pb(26,0,null,null,1,"a",[["class","nav-link js-scroll-trigger"],["href","#projects"]],null,null,null,null,null)),(l()(),t.Bb(-1,null,["Projects"])),(l()(),t.pb(28,0,null,null,2,"li",[["class","nav-item"]],null,null,null,null,null)),(l()(),t.pb(29,0,null,null,1,"a",[["class","nav-link js-scroll-trigger"],["href","#publications"]],null,null,null,null,null)),(l()(),t.Bb(-1,null,["Publications"])),(l()(),t.pb(31,0,null,null,2,"li",[["class","nav-item"]],null,null,null,null,null)),(l()(),t.pb(32,0,null,null,1,"a",[["class","nav-link js-scroll-trigger"],["href","#contact"]],null,null,null,null,null)),(l()(),t.Bb(-1,null,["Contact"]))],null,function(l,n){l(n,3,0,n.component.data.bio.fullname)})}function C(l){return t.Cb(0,[(l()(),t.pb(0,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),t.Bb(1,null,["Specialization: ",""]))],null,function(l,n){l(n,1,0,n.parent.context.$implicit.specialization)})}function k(l){return t.Cb(0,[(l()(),t.pb(0,0,null,null,4,"div",[],null,null,null,null,null)),(l()(),t.Bb(-1,null,["Thesis: "])),(l()(),t.pb(2,0,null,null,2,"a",[["rel","noreferrer"],["target","_blank"]],[[8,"href",4]],null,null,null,null)),(l()(),t.Bb(3,null,[""," "])),(l()(),t.pb(4,0,null,null,0,"i",[["class","fa fa-link fa-xs"]],null,null,null,null,null))],null,function(l,n){l(n,2,0,n.parent.context.$implicit.thesis_url),l(n,3,0,n.parent.context.$implicit.thesis)})}function w(l){return t.Cb(0,[(l()(),t.pb(0,0,null,null,14,"div",[["class","resume-item d-flex flex-column flex-md-row justify-content-between mb-5"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,10,"div",[["class","resume-content"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,1,"h3",[["class","mb-0"]],null,null,null,null,null)),(l()(),t.Bb(3,null,["",""])),(l()(),t.pb(4,0,null,null,1,"div",[["class","subheading mb-3"]],null,null,null,null,null)),(l()(),t.Bb(5,null,["",""])),(l()(),t.pb(6,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),t.Bb(7,null,["",""])),(l()(),t.gb(16777216,null,null,1,null,C)),t.ob(9,16384,null,0,f.i,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,null,1,null,k)),t.ob(11,16384,null,0,f.i,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.pb(12,0,null,null,2,"div",[["class","resume-date text-md-right"]],null,null,null,null,null)),(l()(),t.pb(13,0,null,null,1,"span",[["class","text-primary"]],null,null,null,null,null)),(l()(),t.Bb(14,null,["",""]))],function(l,n){l(n,9,0,n.context.$implicit.specialization),l(n,11,0,n.context.$implicit.thesis)},function(l,n){l(n,3,0,n.context.$implicit.degree),l(n,5,0,n.context.$implicit.institute),l(n,7,0,n.context.$implicit.department),l(n,14,0,n.context.$implicit.period)})}function B(l){return t.Cb(0,[(l()(),t.pb(0,0,null,null,0,"p",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(l,n){l(n,0,0,n.parent.context.$implicit.description)})}function O(l){return t.Cb(0,[(l()(),t.pb(0,0,null,null,10,"div",[["class","resume-item d-flex flex-column flex-md-row justify-content-between mb-5"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,6,"div",[["class","resume-content"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,1,"h3",[["class","mb-0"]],null,null,null,null,null)),(l()(),t.Bb(3,null,["",""])),(l()(),t.pb(4,0,null,null,1,"div",[["class","subheading mb-3"]],null,null,null,null,null)),(l()(),t.Bb(5,null,["",""])),(l()(),t.gb(16777216,null,null,1,null,B)),t.ob(7,16384,null,0,f.i,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.pb(8,0,null,null,2,"div",[["class","resume-date text-md-right"]],null,null,null,null,null)),(l()(),t.pb(9,0,null,null,1,"span",[["class","text-primary"]],null,null,null,null,null)),(l()(),t.Bb(10,null,["",""]))],function(l,n){l(n,7,0,n.context.$implicit.description)},function(l,n){l(n,3,0,n.context.$implicit.position),l(n,5,0,n.context.$implicit.company),l(n,10,0,n.context.$implicit.period)})}function M(l){return t.Cb(0,[(l()(),t.pb(0,0,null,null,5,"div",[["class","resume-item d-flex flex-column flex-md-row justify-content-between mb-5"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,4,"div",[["class","resume-content"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,1,"h3",[["class","mb-0"]],null,null,null,null,null)),(l()(),t.Bb(3,null,["",""])),(l()(),t.pb(4,0,null,null,1,"div",[["class","subheading mb-3"]],null,null,null,null,null)),(l()(),t.Bb(5,null,["",""]))],null,function(l,n){l(n,3,0,n.context.$implicit.title),l(n,5,0,n.context.$implicit.description)})}function j(l){return t.Cb(0,[(l()(),t.pb(0,0,null,null,1,"li",[["class","list-inline-item"],["data-placement","bottom"],["data-toggle","tooltip"]],[[8,"title",0]],null,null,null,null)),(l()(),t.pb(1,0,null,null,0,"img",[["class","technology-icon"]],[[8,"src",4],[8,"alt",0]],null,null,null,null))],null,function(l,n){l(n,0,0,t.rb(1,"",n.context.$implicit.name,"")),l(n,1,0,n.context.$implicit.logo,t.rb(1,"",n.context.$implicit.name,""))})}function I(l){return t.Cb(0,[(l()(),t.pb(0,0,null,null,2,"p",[["class","mb-0 text-right"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,1,"a",[["rel","noreferrer"],["target","_blank"]],[[8,"href",4]],null,null,null,null)),(l()(),t.Bb(-1,null,["View Project"]))],null,function(l,n){l(n,1,0,n.parent.context.$implicit.project_website)})}function P(l){return t.Cb(0,[(l()(),t.pb(0,0,null,null,8,"div",[["class","col-lg-4"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,7,"div",[["class","card mb-5"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,0,"img",[["class","card-img-top"]],[[8,"src",4],[8,"alt",0]],null,null,null,null)),(l()(),t.pb(3,0,null,null,5,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t.pb(4,0,null,null,1,"h5",[["class","card-title"]],null,null,null,null,null)),(l()(),t.Bb(5,null,["",""])),(l()(),t.pb(6,0,null,null,0,"p",[["class","card-text"]],[[8,"innerHTML",1]],null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,I)),t.ob(8,16384,null,0,f.i,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,8,0,n.context.$implicit.project_website)},function(l,n){l(n,2,0,n.context.$implicit.image,t.rb(1,"",n.context.$implicit.name,"")),l(n,5,0,n.context.$implicit.name),l(n,6,0,n.context.$implicit.short_description)})}function _(l){return t.Cb(0,[(l()(),t.pb(0,0,null,null,2,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,P)),t.ob(2,278528,null,0,f.h,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,2,0,n.context.$implicit)},null)}function $(l){return t.Cb(0,[(l()(),t.pb(0,0,null,null,0,"div",[["class",""]],[[8,"innerHTML",1]],null,null,null,null))],null,function(l,n){l(n,0,0,n.parent.context.$implicit.book)})}function F(l){return t.Cb(0,[(l()(),t.pb(0,0,null,null,0,"div",[["class",""]],[[8,"innerHTML",1]],null,null,null,null))],null,function(l,n){l(n,0,0,n.parent.context.$implicit.conference)})}function L(l){return t.Cb(0,[(l()(),t.pb(0,0,null,null,0,"div",[["class",""]],[[8,"innerHTML",1]],null,null,null,null))],null,function(l,n){l(n,0,0,n.parent.context.$implicit.publisher)})}function q(l){return t.Cb(0,[(l()(),t.pb(0,0,null,null,0,"div",[["class",""]],[[8,"innerHTML",1]],null,null,null,null))],null,function(l,n){l(n,0,0,n.parent.context.$implicit.doi)})}function T(l){return t.Cb(0,[(l()(),t.pb(0,0,null,null,16,"div",[["class","resume-item d-flex flex-column flex-md-row justify-content-between mb-5"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,12,"div",[["class","resume-content"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,1,"h3",[["class","mb-0"]],null,null,null,null,null)),(l()(),t.Bb(3,null,["",""])),(l()(),t.pb(4,0,null,null,1,"div",[["class","subheading mb-3"]],null,null,null,null,null)),(l()(),t.Bb(5,null,["",""])),(l()(),t.gb(16777216,null,null,1,null,$)),t.ob(7,16384,null,0,f.i,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,null,1,null,F)),t.ob(9,16384,null,0,f.i,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,null,1,null,L)),t.ob(11,16384,null,0,f.i,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,null,1,null,q)),t.ob(13,16384,null,0,f.i,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.pb(14,0,null,null,2,"div",[["class","resume-date text-md-right"]],null,null,null,null,null)),(l()(),t.pb(15,0,null,null,1,"span",[["class","text-primary"]],null,null,null,null,null)),(l()(),t.Bb(16,null,["",""]))],function(l,n){l(n,7,0,n.context.$implicit.book),l(n,9,0,n.context.$implicit.conference),l(n,11,0,n.context.$implicit.publisher),l(n,13,0,n.context.$implicit.doi)},function(l,n){l(n,3,0,n.context.$implicit.title),l(n,5,0,n.context.$implicit.type),l(n,16,0,n.context.$implicit.published_date)})}function z(l){return t.Cb(0,[(l()(),t.pb(0,0,null,null,146,"div",[["class","container-fluid p-0"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,18,"section",[["class","resume-section p-3 p-lg-5 d-flex align-items-center about-section"],["id","about"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,17,"div",[["class","w-100"]],null,null,null,null,null)),(l()(),t.pb(3,0,null,null,3,"h1",[["class","mb-0 heading-fullname"]],null,null,null,null,null)),(l()(),t.Bb(-1,null,["John "])),(l()(),t.pb(5,0,null,null,1,"span",[["class","text-primary"]],null,null,null,null,null)),(l()(),t.Bb(-1,null,["Makridis"])),(l()(),t.pb(7,0,null,null,5,"div",[["class","subheading mb-5"]],null,null,null,null,null)),(l()(),t.pb(8,0,null,null,1,"span",[["itemprop","jobTitle"]],null,null,null,null,null)),(l()(),t.Bb(9,null,["",""])),(l()(),t.Bb(-1,null,[" \xb7 "])),(l()(),t.pb(11,0,null,null,1,"span",[["itemprop","address"]],null,null,null,null,null)),(l()(),t.Bb(12,null,["",""])),(l()(),t.pb(13,0,null,null,1,"p",[["class","lead mb-5"]],null,null,null,null,null)),(l()(),t.Bb(14,null,["",""])),(l()(),t.pb(15,0,null,null,4,"div",[["class","social-icons"]],null,null,null,null,null)),(l()(),t.pb(16,0,null,null,1,"a",[["data-placement","bottom"],["data-toggle","tooltip"],["rel","noreferrer"],["target","_blank"],["title","My LinkedIn Profile"]],[[8,"href",4]],null,null,null,null)),(l()(),t.pb(17,0,null,null,0,"i",[["class","fab fa-linkedin-in"]],null,null,null,null,null)),(l()(),t.pb(18,0,null,null,1,"a",[["data-placement","bottom"],["data-toggle","tooltip"],["rel","noreferrer"],["target","_blank"],["title","My GitHub Profile"]],[[8,"href",4]],null,null,null,null)),(l()(),t.pb(19,0,null,null,0,"i",[["class","fab fa-github"]],null,null,null,null,null)),(l()(),t.pb(20,0,null,null,0,"hr",[["class","m-0"]],null,null,null,null,null)),(l()(),t.pb(21,0,null,null,5,"section",[["class","resume-section p-3 p-lg-5 d-flex align-items-center"],["id","education"]],null,null,null,null,null)),(l()(),t.pb(22,0,null,null,4,"div",[["class","w-100"]],null,null,null,null,null)),(l()(),t.pb(23,0,null,null,1,"h2",[["class","mb-5"]],null,null,null,null,null)),(l()(),t.Bb(-1,null,["Education"])),(l()(),t.gb(16777216,null,null,1,null,w)),t.ob(26,278528,null,0,f.h,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(l()(),t.pb(27,0,null,null,0,"hr",[["class","m-0"]],null,null,null,null,null)),(l()(),t.pb(28,0,null,null,5,"section",[["class","resume-section p-3 p-lg-5 d-flex justify-content-center"],["id","experience"]],null,null,null,null,null)),(l()(),t.pb(29,0,null,null,4,"div",[["class","w-100"]],null,null,null,null,null)),(l()(),t.pb(30,0,null,null,1,"h2",[["class","mb-5"]],null,null,null,null,null)),(l()(),t.Bb(-1,null,["Experience"])),(l()(),t.gb(16777216,null,null,1,null,O)),t.ob(33,278528,null,0,f.h,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(l()(),t.pb(34,0,null,null,0,"hr",[["class","m-0"]],null,null,null,null,null)),(l()(),t.pb(35,0,null,null,5,"section",[["class","resume-section p-3 p-lg-5 d-flex justify-content-center"],["id","services"]],null,null,null,null,null)),(l()(),t.pb(36,0,null,null,4,"div",[["class","w-100"]],null,null,null,null,null)),(l()(),t.pb(37,0,null,null,1,"h2",[["class","mb-5"]],null,null,null,null,null)),(l()(),t.Bb(-1,null,["Services"])),(l()(),t.gb(16777216,null,null,1,null,M)),t.ob(40,278528,null,0,f.h,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(l()(),t.pb(41,0,null,null,0,"hr",[["class","m-0"]],null,null,null,null,null)),(l()(),t.pb(42,0,null,null,35,"section",[["class","resume-section p-3 p-lg-5 d-flex align-items-center"],["id","skills"]],null,null,null,null,null)),(l()(),t.pb(43,0,null,null,34,"div",[["class","w-100"]],null,null,null,null,null)),(l()(),t.pb(44,0,null,null,1,"h2",[["class","mb-5"]],null,null,null,null,null)),(l()(),t.Bb(-1,null,["Skills"])),(l()(),t.pb(46,0,null,null,1,"div",[["class","subheading mb-3"]],null,null,null,null,null)),(l()(),t.Bb(-1,null,["Expertise"])),(l()(),t.pb(48,0,null,null,24,"ul",[["class","fa-ul mb-3"]],null,null,null,null,null)),(l()(),t.pb(49,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.pb(50,0,null,null,0,"i",[["class","fa-li fa fa-check"]],null,null,null,null,null)),(l()(),t.pb(51,0,null,null,1,"span",[["itemprop","knowsAbout"]],null,null,null,null,null)),(l()(),t.Bb(-1,null,["Web Applications"])),(l()(),t.pb(53,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.pb(54,0,null,null,0,"i",[["class","fa-li fa fa-check"]],null,null,null,null,null)),(l()(),t.pb(55,0,null,null,1,"span",[["itemprop","knowsAbout"]],null,null,null,null,null)),(l()(),t.Bb(-1,null,["Mobile Applications"])),(l()(),t.pb(57,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.pb(58,0,null,null,0,"i",[["class","fa-li fa fa-check"]],null,null,null,null,null)),(l()(),t.pb(59,0,null,null,1,"span",[["itemprop","knowsAbout"]],null,null,null,null,null)),(l()(),t.Bb(-1,null,["Information Systems"])),(l()(),t.pb(61,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.pb(62,0,null,null,0,"i",[["class","fa-li fa fa-check"]],null,null,null,null,null)),(l()(),t.pb(63,0,null,null,1,"span",[["itemprop","knowsAbout"]],null,null,null,null,null)),(l()(),t.Bb(-1,null,["Databases"])),(l()(),t.pb(65,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.pb(66,0,null,null,0,"i",[["class","fa-li fa fa-check"]],null,null,null,null,null)),(l()(),t.pb(67,0,null,null,1,"span",[["itemprop","knowsAbout"]],null,null,null,null,null)),(l()(),t.Bb(-1,null,["Web APIs"])),(l()(),t.pb(69,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.pb(70,0,null,null,0,"i",[["class","fa-li fa fa-check"]],null,null,null,null,null)),(l()(),t.pb(71,0,null,null,1,"span",[["itemprop","knowsAbout"]],null,null,null,null,null)),(l()(),t.Bb(-1,null,["Data Analytics"])),(l()(),t.pb(73,0,null,null,1,"div",[["class","subheading mb-0"]],null,null,null,null,null)),(l()(),t.Bb(-1,null,["Programming Languages & Tools"])),(l()(),t.pb(75,0,null,null,2,"ul",[["class","list-inline dev-icons"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,j)),t.ob(77,278528,null,0,f.h,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(l()(),t.pb(78,0,null,null,0,"hr",[["class","m-0"]],null,null,null,null,null)),(l()(),t.pb(79,0,null,null,5,"section",[["class","resume-section p-3 p-lg-5 d-flex align-items-center"],["id","projects"]],null,null,null,null,null)),(l()(),t.pb(80,0,null,null,4,"div",[["class","w-100"]],null,null,null,null,null)),(l()(),t.pb(81,0,null,null,1,"h2",[["class","mb-5"]],null,null,null,null,null)),(l()(),t.Bb(-1,null,["Projects"])),(l()(),t.gb(16777216,null,null,1,null,_)),t.ob(84,278528,null,0,f.h,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(l()(),t.pb(85,0,null,null,0,"hr",[["class","m-0"]],null,null,null,null,null)),(l()(),t.pb(86,0,null,null,5,"section",[["class","resume-section p-3 p-lg-5 d-flex justify-content-center"],["id","publications"]],null,null,null,null,null)),(l()(),t.pb(87,0,null,null,4,"div",[["class","w-100"]],null,null,null,null,null)),(l()(),t.pb(88,0,null,null,1,"h2",[["class","mb-5"]],null,null,null,null,null)),(l()(),t.Bb(-1,null,["Publications"])),(l()(),t.gb(16777216,null,null,1,null,T)),t.ob(91,278528,null,0,f.h,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(l()(),t.pb(92,0,null,null,0,"hr",[["class","m-0"]],null,null,null,null,null)),(l()(),t.pb(93,0,null,null,53,"section",[["class","resume-section p-3 p-lg-5 d-flex align-items-center"],["id","contact"]],null,null,null,null,null)),(l()(),t.pb(94,0,null,null,52,"div",[["class","w-100"]],null,null,null,null,null)),(l()(),t.pb(95,0,null,null,1,"h2",[["class","mb-5"]],null,null,null,null,null)),(l()(),t.Bb(-1,null,["Contact"])),(l()(),t.pb(97,0,null,null,49,"form",[["action","https://formspree.io/j.makridis7@gmail.com"],["id","cform"],["method","POST"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var e=!0;return"submit"===n&&(e=!1!==t.yb(l,99).onSubmit(u)&&e),"reset"===n&&(e=!1!==t.yb(l,99).onReset()&&e),e},null,null)),t.ob(98,16384,null,0,x.p,[],null,null),t.ob(99,4210688,null,0,x.k,[[8,null],[8,null]],null,null),t.zb(2048,null,x.b,null,[x.k]),t.ob(101,16384,null,0,x.j,[[4,x.b]],null,null),(l()(),t.pb(102,0,null,null,26,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(103,0,null,null,11,"div",[["class","col-xs-12 col-sm-12 col-md-4 col-lg-4 offset-lg-2 offset-md-2"]],null,null,null,null,null)),(l()(),t.pb(104,0,null,null,10,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.pb(105,0,null,null,1,"label",[["for","contactInputName"]],null,null,null,null,null)),(l()(),t.Bb(-1,null,["Name"])),(l()(),t.pb(107,0,null,null,7,"input",[["class","form-control"],["id","contactInputName"],["name","fullname"],["placeholder","Your full name"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0,i=l.component;return"input"===n&&(e=!1!==t.yb(l,108)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.yb(l,108).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.yb(l,108)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.yb(l,108)._compositionEnd(u.target.value)&&e),"ngModelChange"===n&&(e=!1!==(i.contactForm.fullname=u)&&e),e},null,null)),t.ob(108,16384,null,0,x.c,[t.D,t.k,[2,x.a]],null,null),t.ob(109,16384,null,0,x.n,[],{required:[0,"required"]},null),t.zb(1024,null,x.f,function(l){return[l]},[x.n]),t.zb(1024,null,x.g,function(l){return[l]},[x.c]),t.ob(112,671744,null,0,x.l,[[2,x.b],[6,x.f],[8,null],[6,x.g]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.zb(2048,null,x.h,null,[x.l]),t.ob(114,16384,null,0,x.i,[[4,x.h]],null,null),(l()(),t.pb(115,0,null,null,13,"div",[["class","col-xs-12 col-sm-12 col-md-4 col-lg-4"]],null,null,null,null,null)),(l()(),t.pb(116,0,null,null,12,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.pb(117,0,null,null,1,"label",[["for","contactInputEmail"]],null,null,null,null,null)),(l()(),t.Bb(-1,null,["Email"])),(l()(),t.pb(119,0,null,null,7,"input",[["aria-describedby","emailHelp"],["class","form-control"],["id","contactInputEmail"],["name","email"],["placeholder","Your email address"],["required",""],["type","email"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0,i=l.component;return"input"===n&&(e=!1!==t.yb(l,120)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.yb(l,120).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.yb(l,120)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.yb(l,120)._compositionEnd(u.target.value)&&e),"ngModelChange"===n&&(e=!1!==(i.contactForm.email=u)&&e),e},null,null)),t.ob(120,16384,null,0,x.c,[t.D,t.k,[2,x.a]],null,null),t.ob(121,16384,null,0,x.n,[],{required:[0,"required"]},null),t.zb(1024,null,x.f,function(l){return[l]},[x.n]),t.zb(1024,null,x.g,function(l){return[l]},[x.c]),t.ob(124,671744,null,0,x.l,[[2,x.b],[6,x.f],[8,null],[6,x.g]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.zb(2048,null,x.h,null,[x.l]),t.ob(126,16384,null,0,x.i,[[4,x.h]],null,null),(l()(),t.pb(127,0,null,null,1,"small",[["class","form-text text-muted"],["id","emailHelp"]],null,null,null,null,null)),(l()(),t.Bb(-1,null,["I'll not share your email with anyone else."])),(l()(),t.pb(129,0,null,null,12,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(130,0,null,null,11,"div",[["class","col-xs-12 col-sm-12 col-md-8 col-lg-8 offset-lg-2 offset-md-2"]],null,null,null,null,null)),(l()(),t.pb(131,0,null,null,10,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.pb(132,0,null,null,1,"label",[["for","contactInputMessage"]],null,null,null,null,null)),(l()(),t.Bb(-1,null,["Message"])),(l()(),t.pb(134,0,null,null,7,"textarea",[["class","form-control"],["id","contactInputMessage"],["name","message"],["placeholder","Your message"],["required",""],["rows","4"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0,i=l.component;return"input"===n&&(e=!1!==t.yb(l,135)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.yb(l,135).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.yb(l,135)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.yb(l,135)._compositionEnd(u.target.value)&&e),"ngModelChange"===n&&(e=!1!==(i.contactForm.message=u)&&e),e},null,null)),t.ob(135,16384,null,0,x.c,[t.D,t.k,[2,x.a]],null,null),t.ob(136,16384,null,0,x.n,[],{required:[0,"required"]},null),t.zb(1024,null,x.f,function(l){return[l]},[x.n]),t.zb(1024,null,x.g,function(l){return[l]},[x.c]),t.ob(139,671744,null,0,x.l,[[2,x.b],[6,x.f],[8,null],[6,x.g]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.zb(2048,null,x.h,null,[x.l]),t.ob(141,16384,null,0,x.i,[[4,x.h]],null,null),(l()(),t.pb(142,0,null,null,4,"div",[["class","row text-right"]],null,null,null,null,null)),(l()(),t.pb(143,0,null,null,3,"div",[["class","col-xs-12 col-sm-12 col-md-8 col-lg-8 offset-lg-2 offset-md-2"]],null,null,null,null,null)),(l()(),t.pb(144,0,null,null,2,"button",[["class","btn btn-primary"],["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0,e=l.component;return"click"===n&&(t=!1!==e.submitContactForm(e.cform)&&t),t},null,null)),(l()(),t.pb(145,0,null,null,0,"i",[["class","fa fa-paper-plane"]],null,null,null,null,null)),(l()(),t.Bb(-1,null,[" Send message"]))],function(l,n){var u=n.component;l(n,26,0,u.data.education),l(n,33,0,u.data.experience),l(n,40,0,u.data.services),l(n,77,0,u.data.technologies),l(n,84,0,u.data.projectsGrouped),l(n,91,0,u.data.publications),l(n,109,0,""),l(n,112,0,"fullname",u.contactForm.fullname),l(n,121,0,""),l(n,124,0,"email",u.contactForm.email),l(n,136,0,""),l(n,139,0,"message",u.contactForm.message)},function(l,n){var u=n.component;l(n,9,0,u.data.bio.headline),l(n,12,0,u.data.bio.location),l(n,14,0,u.data.bio.intro_text),l(n,16,0,u.data.bio.social.linkedin_url),l(n,18,0,u.data.bio.social.github_url),l(n,97,0,t.yb(n,101).ngClassUntouched,t.yb(n,101).ngClassTouched,t.yb(n,101).ngClassPristine,t.yb(n,101).ngClassDirty,t.yb(n,101).ngClassValid,t.yb(n,101).ngClassInvalid,t.yb(n,101).ngClassPending),l(n,107,0,t.yb(n,109).required?"":null,t.yb(n,114).ngClassUntouched,t.yb(n,114).ngClassTouched,t.yb(n,114).ngClassPristine,t.yb(n,114).ngClassDirty,t.yb(n,114).ngClassValid,t.yb(n,114).ngClassInvalid,t.yb(n,114).ngClassPending),l(n,119,0,t.yb(n,121).required?"":null,t.yb(n,126).ngClassUntouched,t.yb(n,126).ngClassTouched,t.yb(n,126).ngClassPristine,t.yb(n,126).ngClassDirty,t.yb(n,126).ngClassValid,t.yb(n,126).ngClassInvalid,t.yb(n,126).ngClassPending),l(n,134,0,t.yb(n,136).required?"":null,t.yb(n,141).ngClassUntouched,t.yb(n,141).ngClassTouched,t.yb(n,141).ngClassPristine,t.yb(n,141).ngClassDirty,t.yb(n,141).ngClassValid,t.yb(n,141).ngClassInvalid,t.yb(n,141).ngClassPending)})}function S(l){return t.Cb(0,[(l()(),t.gb(16777216,null,null,1,null,y)),t.ob(1,16384,null,0,f.i,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,null,1,null,z)),t.ob(3,16384,null,0,f.i,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,1,0,u.data),l(n,3,0,u.data)},null)}function E(l){return t.Cb(0,[(l()(),t.pb(0,0,null,null,1,"app-root",[],null,null,null,S,v)),t.ob(1,245760,null,0,c,[h.c],null,null)],function(l,n){l(n,1,0)},null)}var A=t.lb("app-root",c,E,{},{},[]),D=u("ZYjt"),N=u("NSYL"),H=u("wFw1"),Y=u("ihYY"),U=u("AtLt"),V=u("ZYCi"),G=function(){return function(){}}(),J=t.mb(e,[c],function(l){return t.wb([t.xb(512,t.j,t.bb,[[8,[r.a,g,A]],[3,t.j],t.x]),t.xb(5120,t.u,t.kb,[[3,t.u]]),t.xb(4608,f.k,f.j,[t.u,[2,f.r]]),t.xb(5120,t.c,t.hb,[]),t.xb(5120,t.s,t.ib,[]),t.xb(5120,t.t,t.jb,[]),t.xb(4608,D.c,D.l,[f.c]),t.xb(6144,t.G,null,[D.c]),t.xb(4608,D.f,D.h,[]),t.xb(5120,D.d,function(l,n,u,t,e,i,o,a){return[new D.j(l,n,u),new D.o(t),new D.n(e,i,o,a)]},[f.c,t.z,t.B,f.c,f.c,D.f,t.cb,[2,D.g]]),t.xb(4608,D.e,D.e,[D.d,t.z]),t.xb(135680,D.m,D.m,[f.c]),t.xb(4608,D.k,D.k,[D.e,D.m]),t.xb(5120,N.a,H.e,[]),t.xb(5120,N.c,H.f,[]),t.xb(4608,N.b,H.d,[f.c,N.a,N.c]),t.xb(5120,t.E,H.g,[D.k,N.b,t.z]),t.xb(6144,D.p,null,[D.m]),t.xb(4608,t.M,t.M,[t.z]),t.xb(4608,Y.b,H.c,[t.E,D.b]),t.xb(4608,x.q,x.q,[]),t.xb(4608,x.d,x.d,[]),t.xb(5120,U.d,U.h,[U.e,t.B]),t.xb(4608,U.b,U.b,[U.d]),t.xb(4608,U.c,U.c,[U.d]),t.xb(5120,V.a,V.x,[V.k]),t.xb(4608,V.d,V.d,[]),t.xb(6144,V.f,null,[V.d]),t.xb(135680,V.n,V.n,[V.k,t.w,t.i,t.q,V.f]),t.xb(4608,V.e,V.e,[]),t.xb(5120,V.B,V.t,[V.k,f.n,V.g]),t.xb(5120,V.h,V.A,[V.y]),t.xb(5120,t.b,function(l){return[l]},[V.h]),t.xb(4608,h.h,h.n,[f.c,t.B,h.l]),t.xb(4608,h.o,h.o,[h.h,h.m]),t.xb(5120,h.a,function(l){return[l]},[h.o]),t.xb(4608,h.k,h.k,[]),t.xb(6144,h.i,null,[h.k]),t.xb(4608,h.g,h.g,[h.i]),t.xb(6144,h.b,null,[h.g]),t.xb(4608,h.f,h.j,[h.b,t.q]),t.xb(4608,h.c,h.c,[h.f]),t.xb(1073742336,f.b,f.b,[]),t.xb(1024,t.l,D.q,[]),t.xb(1024,t.y,function(){return[V.s()]},[]),t.xb(512,V.y,V.y,[t.q]),t.xb(256,U.f,"ngsw-worker.js",[]),t.xb(256,U.e,{enabled:!0},[]),t.xb(1024,t.d,function(l,n,u,t,e,i){return[D.r(l),V.z(n),U.g(u,t,e,i)]},[[2,t.y],V.y,t.q,U.f,U.e,t.B]),t.xb(512,t.e,t.e,[[2,t.d]]),t.xb(131584,t.g,t.g,[t.z,t.cb,t.q,t.l,t.j,t.e]),t.xb(1073742336,t.f,t.f,[t.g]),t.xb(1073742336,D.a,D.a,[[3,D.a]]),t.xb(1073742336,H.b,H.b,[]),t.xb(1073742336,x.o,x.o,[]),t.xb(1073742336,x.e,x.e,[]),t.xb(1073742336,x.m,x.m,[]),t.xb(1073742336,U.a,U.a,[]),t.xb(1024,V.r,V.v,[[3,V.k]]),t.xb(512,V.p,V.c,[]),t.xb(512,V.b,V.b,[]),t.xb(256,V.g,{},[]),t.xb(1024,f.g,V.u,[f.m,[2,f.a],V.g]),t.xb(512,f.f,f.f,[f.g]),t.xb(512,t.i,t.i,[]),t.xb(512,t.w,t.J,[t.i,[2,t.K]]),t.xb(1024,V.i,function(){return[[{path:"",component:b,pathMatch:"full"},{path:"**",redirectTo:""}]]},[]),t.xb(1024,V.k,V.w,[t.g,V.p,V.b,f.f,t.q,t.w,t.i,V.i,V.g,[2,V.o],[2,V.j]]),t.xb(1073742336,V.l,V.l,[[2,V.r],[2,V.k]]),t.xb(1073742336,G,G,[]),t.xb(1073742336,h.e,h.e,[]),t.xb(1073742336,h.d,h.d,[]),t.xb(1073742336,e,e,[]),t.xb(256,t.ab,!0,[]),t.xb(256,H.a,"BrowserAnimations",[]),t.xb(256,h.l,"XSRF-TOKEN",[]),t.xb(256,h.m,"X-XSRF-TOKEN",[])])});Object(t.T)(),D.i().bootstrapModuleFactory(J).then(function(){"serviceWorker"in navigator&&navigator.serviceWorker.register("worker-basic.min.js")}).catch(function(l){return console.error(l)})}},[[0,0,4]]]);