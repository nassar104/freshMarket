"use strict";(self.webpackChunkfinalpro=self.webpackChunkfinalpro||[]).push([[923],{5304:(e,a,s)=>{s.r(a),s.d(a,{default:()=>h});var l=s(9060);var i=s(2622),t=s(4568),r=s(8372),n=s(2024),c=s(1560),m=s(12),d=(s(6756),s(4320)),o=s(496),u=s(2496);function h(){o.S;let e=(0,c.i6)();const[a,s]=(0,l.useState)(!1),[h,p]=(0,l.useState)("");let g=t.kt({email:t.Qb().required(" email is repuird").email(" email is not valed ")}),b=(0,i.KO)({initialValues:{email:""},validationSchema:g,onSubmit:async function(a){s(!0);let{data:l}=await r.c.post("https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords",a).catch((e=>{p(e.response.data.statusMsg),s(!1)}));"success"==l.statusMsg&&(s(!1),d.cp.success(l.message),e("/"))}});return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("div",{className:"row",children:(0,u.jsxs)("div",{className:"col-md-9 mx-auto py-4",children:[(0,u.jsx)("h2",{className:"text-center",children:"Login Now"}),h?(0,u.jsx)("div",{className:"alert alert-danger py-2 ",children:h}):"",(0,u.jsxs)("form",{action:"",onSubmit:b.handleSubmit,children:[(0,u.jsxs)("div",{className:"form-group my-3 ",children:[(0,u.jsx)("label",{htmlFor:"email",children:"Email "}),(0,u.jsx)("input",{onChange:b.handleChange,onBlur:b.handleBlur,type:"email",className:"form-control",id:"email",placeholder:"Enter email"}),b.errors.email&&b.touched.email?(0,u.jsx)("div",{className:"alert alert-danger py-2",children:b.errors.email}):null]}),a?(0,u.jsx)(n.IL,{height:"40",width:"40",color:"#4fa94d",ariaLabel:"bars-loading",wrapperStyle:{},wrapperClass:"",visible:!0}):(0,u.jsx)("button",{disabled:!(b.dirty&&b.isValid),className:"btn bg-main text-light",type:"submit",children:" submit "}),(0,u.jsx)(m.cH,{className:"ps-5",to:"/register",children:" regester "})]})]})})})}}}]);
//# sourceMappingURL=923.9c73609a.chunk.js.map