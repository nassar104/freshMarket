"use strict";(self.webpackChunkfinalpro=self.webpackChunkfinalpro||[]).push([[868],{2868:(e,r,a)=>{a.r(r),a.d(r,{default:()=>c});var s=a(9060);var l=a(2622),n=a(4568),o=a(8372),d=a(2024),i=a(1560),t=a(12),m=a(496),h=a(2496);function c(){m.S;let e=(0,i.i6)();const[r,a]=(0,s.useState)(!1),[c,p]=(0,s.useState)("");let u=n.kt({name:n.Qb().required(" name is repuird").min(3," name must be minem 3 ").max(20,"name must be maxm 20"),email:n.Qb().required(" email is repuird").email(" email is not valed "),password:n.Qb().required(" password is repuird").matches(/^[A-Z][\w @]{5,8}/,"invaled password"),rePassword:n.Qb().required(" repassword is repuird").oneOf([n.IL("password")],"password is not match"),phone:n.Qb().required(" phone is repuird").matches(/^01[0125][0-9]{8}$/,"Enter egipt Numper")}),g=(0,l.KO)({initialValues:{name:"",email:"",password:"",rePassword:"",phone:""},validationSchema:u,onSubmit:async function(r){a(!0);let{data:s}=await o.c.post("https://ecommerce.routemisr.com/api/v1/auth/signup",r).catch((e=>{p(e.response.data.message),a(!1)}));"success"==s.message&&(a(!1),e("/login"))}});return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)("div",{className:"row",children:(0,h.jsxs)("div",{className:"col-md-9 mx-auto py-4",children:[(0,h.jsx)("h2",{children:"Register Now"}),c?(0,h.jsx)("div",{className:"alert alert-danger py-2 ",children:c}):"",(0,h.jsxs)("form",{action:"",onSubmit:g.handleSubmit,children:[(0,h.jsxs)("div",{className:"form-group my-3",children:[(0,h.jsx)("label",{htmlFor:"name",children:"Name "}),(0,h.jsx)("input",{onChange:g.handleChange,onBlur:g.handleBlur,type:"text",className:"form-control",id:"name",placeholder:"Enter name"}),g.errors.name&&g.touched.name?(0,h.jsx)("div",{className:"alert alert-danger py-2",children:g.errors.name}):null]}),(0,h.jsxs)("div",{className:"form-group my-3 ",children:[(0,h.jsx)("label",{htmlFor:"email",children:"Email "}),(0,h.jsx)("input",{onChange:g.handleChange,onBlur:g.handleBlur,type:"email",className:"form-control",id:"email",placeholder:"Enter email"}),g.errors.email&&g.touched.email?(0,h.jsx)("div",{className:"alert alert-danger py-2",children:g.errors.email}):null]}),(0,h.jsxs)("div",{className:"form-group my-3 ",children:[(0,h.jsx)("label",{htmlFor:"password",children:"Password "}),(0,h.jsx)("input",{onChange:g.handleChange,onBlur:g.handleBlur,type:"password",className:"form-control",id:"password",placeholder:"Enter password"}),g.errors.password&&g.touched.password?(0,h.jsx)("div",{className:"alert alert-danger py-2",children:g.errors.password}):null]}),(0,h.jsxs)("div",{className:"form-group my-3 ",children:[(0,h.jsx)("label",{htmlFor:"rePassword",children:"RE-Password "}),(0,h.jsx)("input",{onChange:g.handleChange,onBlur:g.handleBlur,type:"password",className:"form-control",id:"rePassword",placeholder:" rePassword"}),g.errors.rePassword&&g.touched.rePassword?(0,h.jsx)("div",{className:"alert alert-danger py-2",children:g.errors.rePassword}):null]}),(0,h.jsxs)("div",{className:"form-group my-3 ",children:[(0,h.jsx)("label",{htmlFor:"phone",children:"Phone "}),(0,h.jsx)("input",{onChange:g.handleChange,onBlur:g.handleBlur,type:"tel",className:"form-control",id:"phone",placeholder:"Enter phone"}),g.errors.phone&&g.touched.phone?(0,h.jsx)("div",{className:"alert alert-danger py-2",children:g.errors.phone}):null]}),r?(0,h.jsx)(d.IL,{height:"40",width:"40",color:"#4fa94d",ariaLabel:"bars-loading",wrapperStyle:{},wrapperClass:"",visible:!0}):(0,h.jsx)("button",{disabled:!(g.dirty&&g.isValid),className:"btn bg-main text-light",type:"submit",children:" submit "}),(0,h.jsx)(t.cH,{className:"ps-5",to:"/login",children:" login "})]})]})})})}}}]);
//# sourceMappingURL=868.ce4db707.chunk.js.map