import{_ as e,r as t,o,c as p,a as s,b as n,d as i,e as c}from"./app-7ac5536a.js";const l={},r=c(`<h1 id="fedml-beehive-api-reference" tabindex="-1"><a class="header-anchor" href="#fedml-beehive-api-reference" aria-hidden="true">#</a> FedML BeeHive API Reference</h1><p>FedML BeeHive (the cross-device FL) currently support <code>ServerMNN</code> related APIs, which operates a FL server compatible with our FedML Android SDK/APP.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>
<span class="token keyword">import</span> MNN
<span class="token keyword">import</span> fedml
<span class="token keyword">import</span> wandb
<span class="token keyword">from</span> fedml<span class="token punctuation">.</span>cross_device <span class="token keyword">import</span> ServerMNN
<span class="token keyword">from</span> fedml<span class="token punctuation">.</span>model <span class="token keyword">import</span> create_mnn_lenet5_model

<span class="token keyword">from</span> my_dataset <span class="token keyword">import</span> MnistDataset

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    <span class="token comment"># init FedML framework</span>
    args <span class="token operator">=</span> fedml<span class="token punctuation">.</span>init<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">if</span> args<span class="token punctuation">.</span>enable_wandb<span class="token punctuation">:</span>
        args<span class="token punctuation">.</span>wandb_obj <span class="token operator">=</span> wandb<span class="token punctuation">.</span>init<span class="token punctuation">(</span>
            entity<span class="token operator">=</span><span class="token string">&quot;fedml&quot;</span><span class="token punctuation">,</span> project<span class="token operator">=</span><span class="token string">&quot;mobile&quot;</span><span class="token punctuation">,</span> name<span class="token operator">=</span><span class="token string">&quot;MNN-Mobile&quot;</span><span class="token punctuation">,</span> config<span class="token operator">=</span>args
        <span class="token punctuation">)</span>

    <span class="token comment"># init device</span>
    device <span class="token operator">=</span> fedml<span class="token punctuation">.</span>device<span class="token punctuation">.</span>get_device<span class="token punctuation">(</span>args<span class="token punctuation">)</span>

    <span class="token comment"># load data</span>
    train_dataset <span class="token operator">=</span> MnistDataset<span class="token punctuation">(</span><span class="token boolean">True</span><span class="token punctuation">)</span>
    test_dataset <span class="token operator">=</span> MnistDataset<span class="token punctuation">(</span><span class="token boolean">False</span><span class="token punctuation">)</span>
    train_dataloader <span class="token operator">=</span> MNN<span class="token punctuation">.</span>data<span class="token punctuation">.</span>DataLoader<span class="token punctuation">(</span>train_dataset<span class="token punctuation">,</span> batch_size<span class="token operator">=</span><span class="token number">64</span><span class="token punctuation">,</span> shuffle<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
    test_dataloader <span class="token operator">=</span> MNN<span class="token punctuation">.</span>data<span class="token punctuation">.</span>DataLoader<span class="token punctuation">(</span>
        test_dataset<span class="token punctuation">,</span> batch_size<span class="token operator">=</span>args<span class="token punctuation">.</span>batch_size<span class="token punctuation">,</span> shuffle<span class="token operator">=</span><span class="token boolean">False</span>
    <span class="token punctuation">)</span>
    class_num <span class="token operator">=</span> <span class="token number">10</span>

    <span class="token comment"># load model</span>
    create_mnn_lenet5_model<span class="token punctuation">(</span>args<span class="token punctuation">.</span>global_model_file_path<span class="token punctuation">)</span>

    <span class="token comment"># start training</span>
    server <span class="token operator">=</span> ServerMNN<span class="token punctuation">(</span>
        args<span class="token punctuation">,</span> device<span class="token punctuation">,</span> test_dataloader<span class="token punctuation">,</span> <span class="token boolean">None</span>
    <span class="token punctuation">)</span>  <span class="token comment"># for MNN, the model is loaded using MNN file</span>
    server<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>For newly developed features, we will try to keep the form of these APIs and only add new arguments.</p>`,4),d={href:"https://github.com/FedML-AI/FedML/blob/master/python/fedml/__init__.py",target:"_blank",rel:"noopener noreferrer"},u=s("strong",null,"init",-1);function k(m,v){const a=t("ExternalLinkIcon");return o(),p("div",null,[r,s("p",null,[n("To check the details of the latest definition of each API, the best resource is always the source code itself. Please check comments of each API at: "),s("a",d,[n("https://github.com/FedML-AI/FedML/blob/master/python/fedml/"),u,n(".py"),i(a)])])])}const _=e(l,[["render",k],["__file","api.html.vue"]]);export{_ as default};
