import{A as x,Aa as C,B as r,Ba as F,C as d,F as f,H as c,J as e,K as n,L as o,O as b,P as g,S as a,e as u,ja as y,ka as E,l as S,ma as I,p as h,q as v,xa as k}from"./chunk-ERKQ57OH.js";function D(i,t){if(i&1&&(e(0,"li",12),o(1,"img",13),n()),i&2){let m=t.$implicit;g("title",m.name),r(),g("alt",m.name),c("src",m.logo,x)}}function j(i,t){if(i&1&&(e(0,"section",2)(1,"div",3)(2,"h2",4),a(3,"Skills"),n(),e(4,"div",5),a(5,"Expertise"),n(),e(6,"ul",6)(7,"li"),o(8,"i",7),e(9,"span",8),a(10,"Web Applications"),n()(),e(11,"li"),o(12,"i",7),e(13,"span",8),a(14,"Mobile Applications"),n()(),e(15,"li"),o(16,"i",7),e(17,"span",8),a(18,"Information Systems"),n()(),e(19,"li"),o(20,"i",7),e(21,"span",8),a(22,"Databases"),n()(),e(23,"li"),o(24,"i",7),e(25,"span",8),a(26,"Web APIs"),n()(),e(27,"li"),o(28,"i",7),e(29,"span",8),a(30,"Data Analytics"),n()()(),e(31,"div",9),a(32,"Programming Languages & Technologies"),n(),e(33,"ul",10),f(34,D,2,3,"li",11),n()()()),i&2){let m=b();r(34),c("ngForOf",m.data.technologies)}}var M=(()=>{let t=class t{constructor(s,l){this.dataService=s,this.seo=l,this.data=null,this.dataSubscription=this.dataService.data$.subscribe(p=>{this.data=p})}ngOnInit(){return u(this,null,function*(){this.seo.updatePageMetadata({title:"Skills"})})}};t.\u0275fac=function(l){return new(l||t)(d(C),d(F))},t.\u0275cmp=h({type:t,selectors:[["app-skills-page"]],decls:2,vars:1,consts:[[1,"container-fluid","p-0","page-content"],["class","resume-section p-3 p-lg-5 d-flex align-items-center","id","skills",4,"ngIf"],["id","skills",1,"resume-section","p-3","p-lg-5","d-flex","align-items-center"],[1,"w-100"],[1,"mb-5","section-title"],[1,"subheading","mb-3"],[1,"fa-ul","mb-3"],[1,"fa-li","fa","fa-check"],["itemprop","knowsAbout"],[1,"subheading","mb-0"],[1,"list-inline","dev-icons"],["class","list-inline-item","data-toggle","tooltip","data-placement","bottom",3,"title",4,"ngFor","ngForOf"],["data-toggle","tooltip","data-placement","bottom",1,"list-inline-item",3,"title"],[1,"technology-icon",3,"src","alt"]],template:function(l,p){l&1&&(e(0,"div",0),f(1,j,35,1,"section",1),n()),l&2&&(r(),c("ngIf",p.data))},dependencies:[y,E]});let i=t;return i})();var z=(()=>{let t=class t{};t.\u0275fac=function(l){return new(l||t)},t.\u0275mod=v({type:t}),t.\u0275inj=S({imports:[I,k.forChild([{path:"",component:M}])]});let i=t;return i})();export{z as SkillsPageModule};