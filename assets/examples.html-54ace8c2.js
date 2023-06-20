import{_ as n,r as l,o as r,c as o,a as e,d as t,w as i,b as a}from"./app-7ac5536a.js";const d={},h=e("h1",{id:"fedml-parrot-examples",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#fedml-parrot-examples","aria-hidden":"true"},"#"),a(" FedML Parrot Examples")],-1),c=e("h2",{id:"simulation-with-a-single-process-standalone",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#simulation-with-a-single-process-standalone","aria-hidden":"true"},"#"),a(" Simulation with a Single Process (Standalone)")],-1),m=e("h2",{id:"simulation-with-message-passing-interface-mpi",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#simulation-with-message-passing-interface-mpi","aria-hidden":"true"},"#"),a(" Simulation with Message Passing Interface (MPI)")],-1),_=e("h2",{id:"simulation-with-nccl-based-mpi-the-fastest-training",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#simulation-with-nccl-based-mpi-the-fastest-training","aria-hidden":"true"},"#"),a(" Simulation with NCCL-based MPI (the fastest training)")],-1),u=e("ul",null,[e("li",null,"If your cross-GPU bandwidth is high (e.g., InfiniBand, NVLink, EFA, etc.), we suggest using this NCCL-based MPI FL simulator to accelerate your development.")],-1);function p(f,g){const s=l("RouterLink");return r(),o("div",null,[h,c,e("ul",null,[e("li",null,[t(s,{to:"/simulation/examples/sp_fedavg_mnist_lr_example.html"},{default:i(()=>[a("sp_fedavg_mnist_lr_example")]),_:1}),a(": Simulating FL using a single process in your personal laptop or server. This is helpful when researchers hope to try a quick algorithmic idea in small synthetic datasets (MNIST, shakespeare, etc.) and small models (ResNet-18, Logistic Regression, etc.).")])]),m,e("ul",null,[e("li",null,[t(s,{to:"/simulation/examples/mpi_torch_fedavg_mnist_lr_example.html"},{default:i(()=>[a("mpi_torch_fedavg_mnist_lr_example")]),_:1}),a(": MPI-based Federated Learning for cross-GPU/CPU servers.")])]),_,u])}const w=n(d,[["render",p],["__file","examples.html.vue"]]);export{w as default};
