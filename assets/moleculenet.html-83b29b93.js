import{_ as i,r,o,c as l,a as e,d as n,w as t,b as a,e as d}from"./app-7ac5536a.js";const c={},h=e("h1",{id:"federated-molecular-property-prediction",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#federated-molecular-property-prediction","aria-hidden":"true"},"#"),a(" Federated Molecular Property Prediction")],-1),p=e("h2",{id:"motivation",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#motivation","aria-hidden":"true"},"#"),a(" Motivation")],-1),u=e("p",null,"Molecular ML has been maturing rapidly over the last few years thanks to the graph neural networks. Due to privacy concerns and regulatory restrictions, it is hard to collect users and/or organizations data into a single silo. This is especially crucial for bioinformatics and drug discovery applications. Coupled with the aforementioned reasons, learnable representations still struggle to deal with complex tasks under data scarcity, heterogeneity, and highly imbalanced classification. As an example, biomedical institutions might hold their own set of molecules which cannot be directly shared across silos due to commercial and privacy reasons. To simulate such scenarios, we utilize datasets from MoleculeNet.",-1),m=e("p",null,"For this task we have two separate sub-tasks which have exactly the same coding style, only differing in task and the datasets:",-1),f=d(`<h2 id="dataset-preparation" tabindex="-1"><a class="header-anchor" href="#dataset-preparation" aria-hidden="true">#</a> Dataset Preparation</h2><p>Before training, each dataset has to be downloaded first from our servers. For instance, to process <code>sider</code> dataset, all you have to do is to run the bash script under <code>/moleculenet_graph_clf/data/sider</code> folder:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> data/sider
<span class="token function">sh</span> download_and_unzip.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Dataset preparation is same for all datasets.</p><h2 id="training" tabindex="-1"><a class="header-anchor" href="#training" aria-hidden="true">#</a> Training</h2><p>Before starting training, make sure that setup with <code>config/fedml_config.yaml</code> is correct. Then start the training with the desired number of GPU workers.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">WORKSPACE</span><span class="token operator">=</span>./FedML/app/fedgraphnn/applications/moleculenet_graph_clf
<span class="token builtin class-name">cd</span> <span class="token variable">$WORKSPACE</span>

<span class="token function">sh</span> run_moleculenet_clf.sh <span class="token number">4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function g(_,b){const s=r("RouterLink");return o(),l("div",null,[h,p,u,m,e("ul",null,[e("li",null,[n(s,{to:"/es/benchmark/fedgraphnn/FedML/app/fedgraphnn/moleculenet_graph_clf/"},{default:t(()=>[a("Graph Classification")]),_:1})]),e("li",null,[n(s,{to:"/es/benchmark/fedgraphnn/FedML/app/fedgraphnn/moleculenet_graph_reg/"},{default:t(()=>[a("Graph Property Regression")]),_:1})])]),f])}const k=i(c,[["render",g],["__file","moleculenet.html.vue"]]);export{k as default};