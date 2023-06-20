import{_ as a,r as n,o as s,c as o,a as t,b as e,d as r,w as d}from"./app-7ac5536a.js";const l={},c=t("h1",{id:"fedml-apis-high-level",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#fedml-apis-high-level","aria-hidden":"true"},"#"),e(" FedML APIs (high-level)")],-1);function m(h,p){const i=n("RouterLink");return s(),o("div",null,[c,t("p",null,[e("FedML-API is built based on "),r(i,{to:"/api_doc/api-core.html"},{default:d(()=>[e("FedML-Core")]),_:1}),e(". With the help of FedML-core, new algorithms in distributed version can be easily implemented by adopting the worker-oriented programming interface, which is a novel design pattern for flexible distributed computing. Such a distributed computing paradigm is essential for scenarios in which large DNN training cannot be handled by standalone simulation due to GPU memory and training time constraints. We specifically point out that this distributed computing design is not only used for FL, but it can also be used for conventional in-cluster large-scale distributed training (e.g., training modern neural architectures like CNNs or transformers). FedML-API also suggests a machine learning system practice that separates the implementations of models, datasets, and algorithms. This practice can enable code reuse and also fair comparison, avoiding statistical or system-level gaps among algorithms led by non-trivial implementation differences. Another benefit is that FL applications can develop more models and submit more realistic datasets without the need to understand the details of different distributed optimization algorithms. We hope that researchers in diverse FL applications can contribute more valuable models and realistic datasets to our community.")])])}const f=a(l,[["render",m],["__file","api-fedml-api.html.vue"]]);export{f as default};
