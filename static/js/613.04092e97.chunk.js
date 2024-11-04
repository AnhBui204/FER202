"use strict";(self.webpackChunknetflix=self.webpackChunknetflix||[]).push([[613],{6496:(e,s,a)=>{a.r(s),a.d(s,{default:()=>m});var r=a(5043),n=a(3216);const t=a.p+"static/media/background.f9e6d0a92e9bb9581f88.png";var o=a(3204),i=a(579);const d=e=>{let{formValue:s,formError:a,handleChange:r,handleLoginSubmit:n}=e;return(0,i.jsxs)("form",{onSubmit:n,children:[(0,i.jsx)("h1",{children:"Login"}),(0,i.jsxs)("div",{className:"input-box",children:[(0,i.jsx)("input",{type:"text",name:"UserName",placeholder:"Username",value:s.UserName,onChange:r}),(0,i.jsx)(o.x$1,{className:"icon"}),a.UserName&&(0,i.jsx)("div",{className:"error-feedback",children:a.UserName})]}),(0,i.jsxs)("div",{className:"input-box",children:[(0,i.jsx)("input",{type:"password",name:"PassWord",placeholder:"Password",value:s.PassWord,onChange:r}),(0,i.jsx)(o.JhU,{className:"icon"}),a.PassWord&&(0,i.jsx)("div",{className:"error-feedback",children:a.PassWord})]}),(0,i.jsx)("div",{className:"remember-forgot",children:(0,i.jsxs)("label",{children:[(0,i.jsx)("input",{type:"checkbox"}),"Remember me"]})}),(0,i.jsx)("button",{type:"submit",children:"Login"})]})},l=e=>{let{formValue:s,formError:a,handleChange:r,handleRegisterSubmit:n}=e;return(0,i.jsxs)("div",{id:"register-form",children:[(0,i.jsx)("h1",{children:"Register"}),(0,i.jsxs)("form",{onSubmit:n,children:[(0,i.jsxs)("div",{className:"input-box",children:[(0,i.jsx)("input",{type:"text",name:"UserName",placeholder:"Username",value:s.UserName,onChange:r}),(0,i.jsx)(o.x$1,{className:"icon"}),a.UserName&&(0,i.jsx)("div",{className:"error-feedback",children:a.UserName})]}),(0,i.jsxs)("div",{className:"input-box",children:[(0,i.jsx)("input",{type:"password",name:"PassWord",placeholder:"Password",value:s.PassWord,onChange:r}),(0,i.jsx)(o.JhU,{className:"icon"}),a.PassWord&&(0,i.jsx)("div",{className:"error-feedback",children:a.PassWord})]}),(0,i.jsxs)("div",{className:"input-box",children:[(0,i.jsx)("input",{type:"password",name:"ConfirmPassword",placeholder:"Confirm Password",value:s.ConfirmPassword,onChange:r}),(0,i.jsx)(o.JhU,{className:"icon"}),a.ConfirmPassword&&(0,i.jsx)("div",{className:"error-feedback",children:a.ConfirmPassword})]}),(0,i.jsx)("button",{type:"submit",children:"Register"})]})]})},c=e=>{let{handleForgotPasswordSubmit:s,handleBackToLogin:a,fetchUsers:n}=e;const[t,o]=(0,r.useState)(""),[d,l]=(0,r.useState)(""),[c,h]=(0,r.useState)(""),[m,u]=(0,r.useState)(""),[p,x]=(0,r.useState)(!1);return(0,i.jsxs)("form",{onSubmit:e=>{e.preventDefault(),s(t,u,h,x)},children:[(0,i.jsx)("h1",{children:"Forgot Password"}),(0,i.jsxs)("div",{className:"input-box",children:[(0,i.jsx)("input",{type:"text",name:"username",placeholder:"Enter your username",value:t,onChange:e=>o(e.target.value)}),c&&(0,i.jsx)("div",{className:"error-feedback",children:c})]}),p?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"input-box",children:(0,i.jsx)("input",{type:"password",name:"newPassword",placeholder:"Enter new password",value:d,onChange:e=>l(e.target.value)})}),(0,i.jsx)("button",{type:"button",onClick:async()=>{if(d)try{const e=await fetch(`http://localhost:5000/users?username=${t}`),s=(await e.json())[0];s?(await fetch(`http://localhost:5000/users/${s.id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({...s,password:d})}),u("Password updated successfully!"),l(""),h(""),await n(),setTimeout((()=>{a()}),1e3)):h("User not found")}catch(c){h("An error occurred while updating the password")}else h("New password is required")},children:"Update Password"})]}):(0,i.jsx)("button",{type:"submit",children:"Submit"}),m&&(0,i.jsx)("div",{className:"success-feedback",children:m}),(0,i.jsx)("button",{type:"button",onClick:a,children:"Back to Login"})]})},h=()=>{const[e,s]=(0,r.useState)([]),a=async()=>{try{const e=await fetch("http://localhost:5000/users"),a=await e.json();s(a)}catch(e){console.error("Failed to fetch users:",e)}};return(0,r.useEffect)((()=>{a()}),[]),{users:e,fetchUsers:a}},m=e=>{let{setIsLoggedIn:s}=e;const a=(0,n.Zp)(),[o,m]=(0,r.useState)(!1),[u,p]=(0,r.useState)({UserName:"",PassWord:"",ConfirmPassword:""}),[x,f]=(0,r.useState)({}),[j,g]=(0,r.useState)(""),{users:w,fetchUsers:b}=h(),[N,P]=(0,r.useState)(!1),v=e=>{const{value:s,name:a}=e.target;p((e=>({...e,[a]:s})))},y=e=>!e||e.trim().length<1,C=()=>{const e={};return y(u.UserName)&&(e.UserName="UserName is required"),y(u.PassWord)&&(e.PassWord="PassWord is required"),o&&y(u.ConfirmPassword)&&(e.ConfirmPassword="Confirm Password is required"),o&&u.PassWord!==u.ConfirmPassword&&(e.ConfirmPassword="Passwords do not match"),f(e),0===Object.keys(e).length};return(0,i.jsx)("div",{className:"login-body",style:{backgroundImage:`url(${t})`},children:(0,i.jsxs)("div",{className:"wrapper",children:[j&&(0,i.jsx)("div",{className:"success-feedback",children:j}),o||N?N?(0,i.jsx)(c,{handleForgotPasswordSubmit:async(e,s,a,r)=>{try{const n=await fetch("http://localhost:5000/users"),t=await n.json();t.find((s=>s.username===e))?(s("Please input new password."),r(!0)):(a("Username not found. Please try again."),r(!1))}catch{a("An error occurred. Please try again later.")}},handleBackToLogin:()=>P(!1),fetchUsers:b}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l,{formValue:u,formError:x,handleChange:v,handleRegisterSubmit:async e=>{if(e.preventDefault(),C()){if(w.find((e=>e.username===u.UserName)))return void f((e=>({...e,UserName:"Username already exists"})));const e={id:w.length+1,username:u.UserName,password:u.PassWord,role:"user"};await fetch("http://localhost:5000/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),b(),g("Registration successful! Please log in."),m(!1),a("/login",{replace:!0})}}}),(0,i.jsx)("div",{className:"login-link",children:(0,i.jsxs)("p",{children:["Already have an account?"," ",(0,i.jsx)("a",{href:"#",onClick:()=>m(!1),children:"Login"})]})})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d,{formValue:u,formError:x,handleChange:v,handleLoginSubmit:async e=>{if(e.preventDefault(),C()){const e=w.find((e=>e.username===u.UserName&&e.password===u.PassWord));e?(s(!0),sessionStorage.setItem("role",e.role),"admin"===e.role?a("/admin"):a("/")):f({...x,UserName:"Invalid username or password"})}}}),(0,i.jsx)("div",{className:"register-link",children:(0,i.jsxs)("p",{children:["Don't have an account?"," ",(0,i.jsx)("a",{href:"#",onClick:()=>m(!0),children:"Register"})]})}),(0,i.jsx)("div",{className:"forgot-password-link",children:(0,i.jsx)("p",{children:(0,i.jsx)("a",{href:"#",onClick:()=>P(!0),children:"Forgot Password?"})})})]})]})})}}}]);
//# sourceMappingURL=613.04092e97.chunk.js.map