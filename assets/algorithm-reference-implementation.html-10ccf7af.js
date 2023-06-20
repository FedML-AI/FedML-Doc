import{_ as a}from"./fedml-topology-dd2b4c11.js";import{_ as e,r as t,o as i,c as o,a as l,b as n,d as p,w as c,e as r}from"./app-7ac5536a.js";const u={},d=r('<h1 id="algorithm-reference-implementations" tabindex="-1"><a class="header-anchor" href="#algorithm-reference-implementations" aria-hidden="true">#</a> Algorithm Reference Implementations</h1><p>FedML Parrot supports representative algorithms in different communication topologies (as the figure shown below), including Fedvg, FedOpt (ICLR 2021), FedNova (NeurIPS 2020), FedGKT (NeurIPS 2020), Decentralized FL, Vertical FL, Hierarchical FL, FedNAS, and Split Learning.</p><img src="'+a+`" alt="drawing" style="width:800px;"><p>The API for each algorithm is as simple as follows:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> fedml
<span class="token keyword">from</span> fedml<span class="token punctuation">.</span>simulation <span class="token keyword">import</span> SimulatorMPI

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    <span class="token comment"># init FedML framework</span>
    args <span class="token operator">=</span> fedml<span class="token punctuation">.</span>init<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># init device</span>
    device <span class="token operator">=</span> fedml<span class="token punctuation">.</span>device<span class="token punctuation">.</span>get_device<span class="token punctuation">(</span>args<span class="token punctuation">)</span>

    <span class="token comment"># load data</span>
    dataset<span class="token punctuation">,</span> output_dim <span class="token operator">=</span> fedml<span class="token punctuation">.</span>data<span class="token punctuation">.</span>load<span class="token punctuation">(</span>args<span class="token punctuation">)</span>

    <span class="token comment"># load model</span>
    model <span class="token operator">=</span> fedml<span class="token punctuation">.</span>model<span class="token punctuation">.</span>create<span class="token punctuation">(</span>args<span class="token punctuation">,</span> output_dim<span class="token punctuation">)</span>

    <span class="token comment"># start training (use &quot;SimulatorSingleProcess&quot; for single process-based simulation)</span>
    simulator <span class="token operator">=</span> SimulatorMPI<span class="token punctuation">(</span>args<span class="token punctuation">,</span> device<span class="token punctuation">,</span> dataset<span class="token punctuation">,</span> model<span class="token punctuation">)</span>
    simulator<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To specify the algorithm, please change <code>federated_optimizer</code> at <code>fedml_config.yaml</code>. For example, the following <code>fedml_config.yaml</code> will enable FedOpt algorithm.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">train_args</span><span class="token punctuation">:</span>
  <span class="token key atrule">federated_optimizer</span><span class="token punctuation">:</span> <span class="token string">&quot;FedOpt&quot;</span>
  <span class="token key atrule">client_id_list</span><span class="token punctuation">:</span> <span class="token string">&quot;[]&quot;</span>
  <span class="token key atrule">client_num_in_total</span><span class="token punctuation">:</span> <span class="token number">1000</span>
  <span class="token key atrule">client_num_per_round</span><span class="token punctuation">:</span> <span class="token number">10</span>
  <span class="token key atrule">comm_round</span><span class="token punctuation">:</span> <span class="token number">200</span>
  <span class="token key atrule">epochs</span><span class="token punctuation">:</span> <span class="token number">1</span>
  <span class="token key atrule">batch_size</span><span class="token punctuation">:</span> <span class="token number">10</span>
  <span class="token key atrule">client_optimizer</span><span class="token punctuation">:</span> sgd
  <span class="token key atrule">learning_rate</span><span class="token punctuation">:</span> <span class="token number">0.03</span>
  <span class="token key atrule">weight_decay</span><span class="token punctuation">:</span> <span class="token number">0.001</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function m(k,v){const s=t("RouterLink");return i(),o("div",null,[d,l("p",null,[n("For more details, please heck "),p(s,{to:"/es/simulation/user_guide/user_guide/examples.html"},{default:c(()=>[n("FedML Parrot examples")]),_:1}),n(".")])])}const g=e(u,[["render",m],["__file","algorithm-reference-implementation.html.vue"]]);export{g as default};
