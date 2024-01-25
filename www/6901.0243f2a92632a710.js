"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6901],{6901:(M,d,r)=>{r.r(d),r.d(d,{LoginPageModule:()=>C});var v=r(6814),u=r(95),s=r(3582),g=r(467),c=r(5861),t=r(6689),h=r(4414),m=r(6466);const p=(0,r(2726).fo)("Preferences",{web:()=>r.e(899).then(r.bind(r,899)).then(o=>new o.PreferencesWeb)}),f="usuarioData";let Z=(()=>{class o{constructor(){}setItem(n,e){return(0,c.Z)(function*(){yield p.set({key:n,value:e})})()}getItem(n){return(0,c.Z)(function*(){return(yield p.get({key:n})).value})()}guargarUsuario(n){var e=this;return(0,c.Z)(function*(){var i=yield e.obtenerUsuario();for(const a of i)a&&n.push(a);e.setItem(f,JSON.stringify(n))})()}obtenerUsuario(){var n=this;return(0,c.Z)(function*(){const e=yield n.getItem(f);return null==e?[]:JSON.parse(e)||[]})()}static#t=this.\u0275fac=function(e){return new(e||o)};static#n=this.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();const T=[{path:"",component:(()=>{class o{constructor(n,e,i,a,l){this.navCtrl=n,this.toastCtrl=e,this.authService=i,this.router=a,this.storage=l,this.username="",this.password=""}login(){var n=this;return(0,c.Z)(function*(){if(""!==n.username&&""!==n.password)if(n.username.length<4&&n.username.length>8)n.showToast("El nombre de usuario debe contener 4 a 8 caracteres.");else if(n.password.length<4&&n.password.length>8)n.showToast("La contrase\xf1a debe ser un n\xfamero de 4 d\xedgitos.");else try{(yield n.authService.login(n.username,n.password))?n.router.navigate(["/qr"]):n.showToast("Credenciales incorrectas")}catch(e){console.error(e),n.showToast("Error al intentar iniciar sesi\xf3n")}else n.showToast("Por favor, ingrese los valores solicitados.")})()}showToast(n){var e=this;return(0,c.Z)(function*(){yield(yield e.toastCtrl.create({message:n,duration:3e3,position:"top"})).present()})()}iraRestaurar(){this.router.navigate(["/restaurar"])}iraInicio(){this.router.navigate(["/home"])}navigateToLogin(){this.router.navigate(["/login"])}navigateToRegistro(){this.router.navigate(["/registro"])}static#t=this.\u0275fac=function(e){return new(e||o)(t.Y36(h.SH),t.Y36(h.yF),t.Y36(m.e),t.Y36(g.F0),t.Y36(Z))};static#n=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-login"]],decls:26,vars:2,consts:[[1,"ion-padding"],[1,"ion-text-center","ion-padding"],[1,"titulo_principal"],[1,"ion-text-center"],[1,"titulo_secundario"],["position","floating"],["type","text",3,"ngModel","ngModelChange"],["type","password",3,"ngModel","ngModelChange"],[1,"ion-text-center","ion-align-items-center"],["color","primary",1,"btn_iniciar",3,"click"],["color","primary",1,"link_olvido",3,"click"],[1,"div_volver"],[1,"link_volver",3,"click"]],template:function(e,i){1&e&&(t.TgZ(0,"ion-content",0)(1,"div",1)(2,"ion-text",2),t._uU(3,"Attendify"),t.qZA(),t.TgZ(4,"div",3)(5,"ion-text",4),t._uU(6,"Iniciar Sesi\xf3n"),t.qZA()(),t._UZ(7,"p"),t.qZA(),t.TgZ(8,"ion-item")(9,"ion-label",5),t._uU(10,"Usuario"),t.qZA(),t.TgZ(11,"ion-input",6),t.NdJ("ngModelChange",function(l){return i.username=l}),t.qZA()(),t.TgZ(12,"ion-item")(13,"ion-label",5),t._uU(14,"Contrase\xf1a"),t.qZA(),t.TgZ(15,"ion-input",7),t.NdJ("ngModelChange",function(l){return i.password=l}),t.qZA()(),t.TgZ(16,"ion-content")(17,"div",8)(18,"ion-button",9),t.NdJ("click",function(){return i.login()}),t._uU(19,"Iniciar sesi\xf3n"),t.qZA()(),t.TgZ(20,"div",8)(21,"a",10),t.NdJ("click",function(){return i.iraRestaurar()}),t._uU(22,"\xbfOlvido su contrase\xf1a?"),t.qZA()(),t.TgZ(23,"div",11)(24,"a",12),t.NdJ("click",function(){return i.iraInicio()}),t._uU(25,"Volver al inicio"),t.qZA()()()()),2&e&&(t.xp6(11),t.Q6J("ngModel",i.username),t.xp6(4),t.Q6J("ngModel",i.password))},dependencies:[u.JJ,u.On,s.YG,s.W2,s.pK,s.Ie,s.Q$,s.yW,s.j9],styles:[".btn_iniciar[_ngcontent-%COMP%]{margin-top:10px;margin-right:5px;margin-bottom:15px}.link_olvido[_ngcontent-%COMP%]{text-decoration:none;color:#2dd36f}.titulo_principal[_ngcontent-%COMP%]{font-size:55px}.titulo_secundario[_ngcontent-%COMP%]{font-size:25px}.div_volver[_ngcontent-%COMP%]{position:absolute;margin-top:100px;left:0;padding:10px}.link_volver[_ngcontent-%COMP%]{color:#fff;text-decoration:none}"]})}return o})()}];let P=(()=>{class o{static#t=this.\u0275fac=function(e){return new(e||o)};static#n=this.\u0275mod=t.oAB({type:o});static#e=this.\u0275inj=t.cJS({imports:[g.Bz.forChild(T),g.Bz]})}return o})(),C=(()=>{class o{static#t=this.\u0275fac=function(e){return new(e||o)};static#n=this.\u0275mod=t.oAB({type:o});static#e=this.\u0275inj=t.cJS({imports:[v.ez,u.u5,s.Pc,P]})}return o})()}}]);