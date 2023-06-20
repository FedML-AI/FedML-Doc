import{_ as n}from"./cross-silo-hi-2a73b75b.js";import{_ as s,r as i,o,c as d,a as e,d as l,w as r,b as a}from"./app-7ac5536a.js";const _={},c=e("h1",{id:"fedml-octopus-examples",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#fedml-octopus-examples","aria-hidden":"true"},"#"),a(" FedML Octopus Examples")],-1),h=e("h2",{id:"horizontal-federated-learning",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#horizontal-federated-learning","aria-hidden":"true"},"#"),a(" Horizontal Federated Learning")],-1),m=e("h2",{id:"hierarchical-federated-learning",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#hierarchical-federated-learning","aria-hidden":"true"},"#"),a(" Hierarchical Federated Learning")],-1),u=e("code",null,"hierarchical",-1),p=e("img",{src:n,alt:"parrot",style:{width:"100%"}},null,-1);function f(g,x){const t=i("RouterLink");return o(),d("div",null,[c,h,e("ul",null,[e("li",null,[e("p",null,[l(t,{to:"/es/cross-silo/examples/mqtt_s3_fedavg_mnist_lr_example.html"},{default:r(()=>[a("mqtt_s3_fedavg_mnist_lr_example")]),_:1}),a(": an example to illustrate running horizontal federated learning in data silos (hospitals, banks, etc.)")])]),e("li",null,[e("p",null,[l(t,{to:"/es/cross-silo/examples/mqtt_s3_fedavg_attack_mnist_lr_example.html"},{default:r(()=>[a("mqtt_s3_fedavg_attack_mnist_lr_example")]),_:1}),a(": an example to illustrate running attackers on horizontal federated learning")])]),e("li",null,[e("p",null,[l(t,{to:"/es/cross-silo/examples/mqtt_s3_fedavg_defense_mnist_lr_example.html"},{default:r(()=>[a("mqtt_s3_fedavg_defense_mnist_lr_example")]),_:1}),a(": an example to illustrate running defense methods on horizontal federated learning")])])]),m,e("ul",null,[e("li",null,[l(t,{to:"/es/cross-silo/examples/mqtt_s3_fedavg_hierarchical_mnist_lr_example.html"},{default:r(()=>[a("hierarchical_fedavg_mnist_lr_example")]),_:1}),a(": an example to illustrate running hierarchical federated learning in data silos (hospitals, banks, etc.). As shown in the figure below, here "),u,a(" implies that each FL Client (data silo) has multiple GPUs that can run local distributed training with PyTorch DDP, and the FL server then aggregates globally from the results received from all FL Clients.")])]),p])}const k=s(_,[["render",f],["__file","examples.html.vue"]]);export{k as default};
