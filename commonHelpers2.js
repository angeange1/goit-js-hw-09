import"./assets/modulepreload-polyfill-3cfb730f.js";const t=document.querySelector(".feedback-form"),l=t.elements.email,s=t.elements.message,e=JSON.parse(localStorage.getItem("feedback-form-state"));l.value=e&&e.email?e.email:"";s.value=e&&e.message?e.message:"";t.addEventListener("input",o);function o(){const a={email:l.value.trim(),message:s.value.trim()};localStorage.setItem("feedback-form-state",JSON.stringify(a))}t.addEventListener("submit",m);function m(a){a.preventDefault(),l.value.trim()===""||s.value.trim()===""?alert("Please fill all the fields"):console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),localStorage.clear(),t.reset()}
//# sourceMappingURL=commonHelpers2.js.map