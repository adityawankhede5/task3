(this.webpackJsonpsnaptrude=this.webpackJsonpsnaptrude||[]).push([[0],{101:function(e,n,t){"use strict";t.r(n);var a=t(29),i=t.n(a),c=t(91),r=t.n(c),l=(t(97),t(68)),s=(t(98),t(92)),o=t(49),u=t(40);function d(e){var n=e.addPlane;return Object(u.jsx)("div",{className:"rectangle",onClick:n})}var j=function(e){var n=e.lables,t=e.mesh,a=e.updateMeshName;return n.map((function(e){return Object(u.jsx)("div",{className:"lableContainer",onClick:function(){a(t,e)},children:e},e)}))};function h(e){var n=e.position,t=e.mesh,i=e.updateMeshName,c=e.closeOptions,r=["back door","backyard","basement","bathroom","bedroom","ceiling","chimney","column","dining room","doghouse","door","fence","fenced yard","fireplace","furniture"],s=Object(a.useState)(r),o=Object(l.a)(s,2),d=o[0],h=o[1],b=Object(a.useState)(""),m=Object(l.a)(b,2),f=m[0],g=m[1];return Object(u.jsxs)("div",{className:"lablesContainer",style:{top:n.top,left:n.left},children:[Object(u.jsx)("input",{type:"text",placeholder:"Search",value:f,onChange:function(e){g(e.target.value),h(r.filter((function(n){return n.startsWith(e.target.value)})))}}),Object(u.jsx)("div",{className:"allLablesContainer",children:Object(u.jsx)(j,{lables:d,mesh:t,updateMeshName:i})}),Object(u.jsx)("div",{className:"cancelButton",onClick:c,children:"Cancel"})]})}var b=function(){var e="40px arial",n=Object(a.useState)(null),t=Object(l.a)(n,2),i=t[0],c=t[1],r=Object(a.useState)({top:0,left:0}),j=Object(l.a)(r,2),b=j[0],m=j[1],f=Object(a.useState)(null),g=Object(l.a)(f,2),p=g[0],O=g[1],x=function(n){n.material.diffuseTexture.drawText(n.name,null,null,e,"black","white",!0,!0),setTimeout((function(){n.material.diffuseTexture.drawText(n.name,null,null,e,"white","white",!0,!0)}),2e3)};return Object(u.jsxs)("div",{className:"main",children:[p?Object(u.jsx)(h,{position:b,mesh:p,updateMeshName:function(e,n){e.name=n,O(null),x(e)},closeOptions:function(){O(null)}}):Object(u.jsx)(u.Fragment,{}),Object(u.jsx)("div",{className:"titleBar",children:"Snaptrude"}),Object(u.jsxs)("div",{className:"sceneContainer",children:[Object(u.jsx)(s.a,{className:"sceneComponent",antialias:!0,onSceneReady:function(e){c(e),e.clearColor=o.c.FromHexString("#e5e5e5"),new o.b("cam",-Math.PI/2,Math.PI/2,3,new o.j.Zero,e),e.getEngine().getRenderingCanvas(),new o.f("light",new o.j(2,-1,-1),e)}}),Object(u.jsx)("div",{className:"sidecontrolContainer",children:Object(u.jsx)(d,{addPlane:function(){var n=o.g.CreatePlane("Plane",{size:1},i),t=new o.h({dragPlaneNormal:new o.j(0,0,1)});n.addBehavior(t);var a=new o.d("plane texture",{width:512,height:256},i),c=new o.i("plane",i);c.diffuseTexture=a,n.material=c,a.drawText("Plane",null,null,e,"white","white",!0,!0),n.actionManager=new o.a(i),n.actionManager.registerAction(new o.e(o.a.OnPickTrigger,(function(e){var n=e.meshUnderPointer;x(n)}))),n.actionManager.registerAction(new o.e(o.a.OnDoublePickTrigger,(function(e){m({top:e.pointerY,left:e.pointerX}),O(e.meshUnderPointer)})))}})})]})]})},m=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,102)).then((function(n){var t=n.getCLS,a=n.getFID,i=n.getFCP,c=n.getLCP,r=n.getTTFB;t(e),a(e),i(e),c(e),r(e)}))};r.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root")),m()},97:function(e,n,t){},98:function(e,n,t){}},[[101,1,2]]]);
//# sourceMappingURL=main.642794c2.chunk.js.map