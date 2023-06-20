import{_ as e,r as t,o,c as i,a as s,b as n,d as p,e as l}from"./app-7ac5536a.js";const c={},r=l(`<h1 id="fedml-parrot-api-reference" tabindex="-1"><a class="header-anchor" href="#fedml-parrot-api-reference" aria-hidden="true">#</a> FedML Parrot API Reference</h1><p>The philosophy of our API design is to reduce the number of APIs as much as possible while simultaneously maintaining the flexibility.</p><p>For Simplicity, FedML Parrot has only one line API as the following example:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> fedml

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    fedml<span class="token punctuation">.</span>run_simulation<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To meet the customization demands, FedML Parrot also has five lines of APIs as the following example.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> fedml
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

    <span class="token comment"># start training</span>
    simulator <span class="token operator">=</span> SimulatorMPI<span class="token punctuation">(</span>args<span class="token punctuation">,</span> device<span class="token punctuation">,</span> dataset<span class="token punctuation">,</span> model<span class="token punctuation">)</span>
    simulator<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>For newly developed features, we will try to preserve the form of these APIs and only add new arguments.</p>`,7),d={href:"https://github.com/FedML-AI/FedML/blob/master/python/fedml/__init__.py",target:"_blank",rel:"noopener noreferrer"},u=s("strong",null,"init",-1);function m(k,v){const a=t("ExternalLinkIcon");return o(),i("div",null,[r,s("p",null,[n("To check out the details of the latest definition of each API, the best resource is always the source code itself. Please check comments of each API at: "),s("a",d,[n("https://github.com/FedML-AI/FedML/blob/master/python/fedml/"),u,n(".py"),p(a)])])])}const _=e(c,[["render",m],["__file","api.html.vue"]]);export{_ as default};
