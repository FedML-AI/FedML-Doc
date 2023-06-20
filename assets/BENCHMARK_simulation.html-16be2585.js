import{_ as l,a as p,b as i,c as o}from"./result_femnist_cnn-15b6857a.js";import{_ as r,r as c,o as u,c as d,a as n,b as s,d as t,e as a}from"./app-7ac5536a.js";const k={},m=a(`<h1 id="benchmarking-results-when-using-single-process-based-simulation" tabindex="-1"><a class="header-anchor" href="#benchmarking-results-when-using-single-process-based-simulation" aria-hidden="true">#</a> Benchmarking results when using single process-based simulation</h1><table><thead><tr><th>Dataset</th><th>Model</th><th>Accuracy (Exp/Ref)</th></tr></thead><tbody><tr><td>MNIST</td><td>LR</td><td>81.9 /</td></tr><tr><td>Federated EMNIST</td><td>CNN</td><td>80.2 / 84.9</td></tr><tr><td>fed_CIFAR100</td><td>ResNet</td><td>34.0 / 44.7</td></tr><tr><td>shakespeare (LEAF)</td><td>RNN</td><td>53.1 /</td></tr><tr><td>fed_shakespeare (Google)</td><td>RNN</td><td>57.1 / 56.9</td></tr><tr><td>stackoverflow_nwp</td><td>RNN</td><td>18.3 / 19.5</td></tr></tbody></table><p>Note: Experimental results are the test accuracy of the last communication rounds, while the reference results are the validation results from referenced paper.</p><h2 id="hyper-parameters-to-reproduce-the-benchmarking-results-non-iid" tabindex="-1"><a class="header-anchor" href="#hyper-parameters-to-reproduce-the-benchmarking-results-non-iid" aria-hidden="true">#</a> <strong>Hyper-parameters to reproduce the benchmarking results (non-IID)</strong></h2><h3 id="mnist-logistic-regression" tabindex="-1"><a class="header-anchor" href="#mnist-logistic-regression" aria-hidden="true">#</a> <strong>MNIST + Logistic Regression</strong></h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">data_args</span><span class="token punctuation">:</span>
  <span class="token key atrule">dataset</span><span class="token punctuation">:</span> <span class="token string">&quot;mnist&quot;</span>
  <span class="token key atrule">partition_method</span><span class="token punctuation">:</span> <span class="token string">&quot;hetero&quot;</span>
  <span class="token key atrule">partition_alpha</span><span class="token punctuation">:</span> <span class="token number">0.5</span>

<span class="token key atrule">model_args</span><span class="token punctuation">:</span>
  <span class="token key atrule">model</span><span class="token punctuation">:</span> <span class="token string">&quot;lr&quot;</span>
  
<span class="token key atrule">train_args</span><span class="token punctuation">:</span>
  <span class="token key atrule">federated_optimizer</span><span class="token punctuation">:</span> <span class="token string">&quot;FedAvg&quot;</span>
  <span class="token key atrule">client_id_list</span><span class="token punctuation">:</span> <span class="token string">&quot;[]&quot;</span>
  <span class="token key atrule">client_num_in_total</span><span class="token punctuation">:</span> <span class="token number">1000</span>
  <span class="token key atrule">client_num_per_round</span><span class="token punctuation">:</span> <span class="token number">10</span>
  <span class="token key atrule">comm_round</span><span class="token punctuation">:</span> <span class="token number">200</span>
  <span class="token key atrule">epochs</span><span class="token punctuation">:</span> <span class="token number">1</span>
  <span class="token key atrule">batch_size</span><span class="token punctuation">:</span> <span class="token number">10</span>
  <span class="token key atrule">client_optimizer</span><span class="token punctuation">:</span> sgd
  <span class="token key atrule">learning_rate</span><span class="token punctuation">:</span> <span class="token number">0.03</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),v={href:"https://app.wandb.ai/automl/fedml/runs/ybv29kak",target:"_blank",rel:"noopener noreferrer"},b=a('<img src="'+l+`" alt="MNIST + Logistic Regressio" style="width:100%;"><h3 id="shakespeare-leaf-rnn" tabindex="-1"><a class="header-anchor" href="#shakespeare-leaf-rnn" aria-hidden="true">#</a> <strong>Shakespeare (LEAF) + RNN</strong></h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">data_args</span><span class="token punctuation">:</span>
  <span class="token key atrule">dataset</span><span class="token punctuation">:</span> <span class="token string">&quot;mnist&quot;</span>
  <span class="token key atrule">partition_method</span><span class="token punctuation">:</span> <span class="token string">&quot;hetero&quot;</span>
  <span class="token key atrule">partition_alpha</span><span class="token punctuation">:</span> <span class="token number">0.5</span>

<span class="token key atrule">model_args</span><span class="token punctuation">:</span>
  <span class="token key atrule">model</span><span class="token punctuation">:</span> <span class="token string">&quot;lr&quot;</span>
  
<span class="token key atrule">train_args</span><span class="token punctuation">:</span>
  <span class="token key atrule">federated_optimizer</span><span class="token punctuation">:</span> <span class="token string">&quot;FedAvg&quot;</span>
  <span class="token key atrule">client_id_list</span><span class="token punctuation">:</span> <span class="token string">&quot;[]&quot;</span>
  <span class="token key atrule">client_num_in_total</span><span class="token punctuation">:</span> <span class="token number">10</span>
  <span class="token key atrule">client_num_per_round</span><span class="token punctuation">:</span> <span class="token number">10</span>
  <span class="token key atrule">comm_round</span><span class="token punctuation">:</span> <span class="token number">10</span>
  <span class="token key atrule">epochs</span><span class="token punctuation">:</span> <span class="token number">1</span>
  <span class="token key atrule">batch_size</span><span class="token punctuation">:</span> <span class="token number">10</span>
  <span class="token key atrule">client_optimizer</span><span class="token punctuation">:</span> sgd
  <span class="token key atrule">learning_rate</span><span class="token punctuation">:</span> <span class="token number">0.8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),_={href:"https://app.wandb.ai/automl/fedml/runs/2al5q5mi",target:"_blank",rel:"noopener noreferrer"},h=a('<img src="'+p+`" alt="Shakespeare + RNN" style="width:100%;"><h3 id="shakespeare-google-rnn" tabindex="-1"><a class="header-anchor" href="#shakespeare-google-rnn" aria-hidden="true">#</a> <strong>Shakespeare (Google) + RNN</strong></h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">data_args</span><span class="token punctuation">:</span>
  <span class="token key atrule">dataset</span><span class="token punctuation">:</span> <span class="token string">&quot;shakespeare&quot;</span>
  <span class="token key atrule">partition_method</span><span class="token punctuation">:</span> <span class="token string">&quot;hetero&quot;</span>
  <span class="token key atrule">partition_alpha</span><span class="token punctuation">:</span> <span class="token number">0.5</span>

<span class="token key atrule">model_args</span><span class="token punctuation">:</span>
  <span class="token key atrule">model</span><span class="token punctuation">:</span> <span class="token string">&quot;lr&quot;</span>
  
<span class="token key atrule">train_args</span><span class="token punctuation">:</span>
  <span class="token key atrule">federated_optimizer</span><span class="token punctuation">:</span> <span class="token string">&quot;FedAvg&quot;</span>
  <span class="token key atrule">client_id_list</span><span class="token punctuation">:</span> <span class="token string">&quot;[]&quot;</span>
  <span class="token key atrule">client_num_in_total</span><span class="token punctuation">:</span> <span class="token number">10</span>
  <span class="token key atrule">client_num_per_round</span><span class="token punctuation">:</span> <span class="token number">10</span>
  <span class="token key atrule">comm_round</span><span class="token punctuation">:</span> <span class="token number">1000</span>
  <span class="token key atrule">epochs</span><span class="token punctuation">:</span> <span class="token number">1</span>
  <span class="token key atrule">batch_size</span><span class="token punctuation">:</span> <span class="token number">10</span>
  <span class="token key atrule">client_optimizer</span><span class="token punctuation">:</span> sgd
  <span class="token key atrule">learning_rate</span><span class="token punctuation">:</span> <span class="token number">0.8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),g={href:"https://wandb.ai/automl/fedml/runs/4btyrt0u",target:"_blank",rel:"noopener noreferrer"},y=a('<img src="'+i+`" alt="Shakespeare + RNN"><h3 id="federated-emnist-cnn" tabindex="-1"><a class="header-anchor" href="#federated-emnist-cnn" aria-hidden="true">#</a> <strong>Federated EMNIST + CNN</strong></h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">data_args</span><span class="token punctuation">:</span>
  <span class="token key atrule">dataset</span><span class="token punctuation">:</span> <span class="token string">&quot;femnist&quot;</span>
  <span class="token key atrule">partition_method</span><span class="token punctuation">:</span> <span class="token string">&quot;hetero&quot;</span>
  <span class="token key atrule">partition_alpha</span><span class="token punctuation">:</span> <span class="token number">0.5</span>

<span class="token key atrule">model_args</span><span class="token punctuation">:</span>
  <span class="token key atrule">model</span><span class="token punctuation">:</span> <span class="token string">&quot;lr&quot;</span>
  
<span class="token key atrule">train_args</span><span class="token punctuation">:</span>
  <span class="token key atrule">federated_optimizer</span><span class="token punctuation">:</span> <span class="token string">&quot;FedAvg&quot;</span>
  <span class="token key atrule">client_id_list</span><span class="token punctuation">:</span> <span class="token string">&quot;[]&quot;</span>
  <span class="token key atrule">client_num_in_total</span><span class="token punctuation">:</span> <span class="token number">10</span>
  <span class="token key atrule">client_num_per_round</span><span class="token punctuation">:</span> <span class="token number">10</span>
  <span class="token key atrule">comm_round</span><span class="token punctuation">:</span> <span class="token number">1000</span>
  <span class="token key atrule">epochs</span><span class="token punctuation">:</span> <span class="token number">1</span>
  <span class="token key atrule">batch_size</span><span class="token punctuation">:</span> <span class="token number">20</span>
  <span class="token key atrule">client_optimizer</span><span class="token punctuation">:</span> sgd
  <span class="token key atrule">learning_rate</span><span class="token punctuation">:</span> <span class="token number">0.03</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),f={href:"https://wandb.ai/automl/fedml/runs/3lv4gmpz",target:"_blank",rel:"noopener noreferrer"},q=a('<img src="'+o+`" alt="Federated EMNIST + CNN" style="width:100%;"><h3 id="fed-cifar100-cnn" tabindex="-1"><a class="header-anchor" href="#fed-cifar100-cnn" aria-hidden="true">#</a> <strong>Fed-CIFAR100 + CNN</strong></h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">data_args</span><span class="token punctuation">:</span>
  <span class="token key atrule">dataset</span><span class="token punctuation">:</span> <span class="token string">&quot;fed_cifar100&quot;</span>
  <span class="token key atrule">partition_method</span><span class="token punctuation">:</span> <span class="token string">&quot;hetero&quot;</span>
  <span class="token key atrule">partition_alpha</span><span class="token punctuation">:</span> <span class="token number">0.5</span>

<span class="token key atrule">model_args</span><span class="token punctuation">:</span>
  <span class="token key atrule">model</span><span class="token punctuation">:</span> <span class="token string">&quot;resnet18_gn&quot;</span>
  
<span class="token key atrule">train_args</span><span class="token punctuation">:</span>
  <span class="token key atrule">federated_optimizer</span><span class="token punctuation">:</span> <span class="token string">&quot;FedAvg&quot;</span>
  <span class="token key atrule">client_id_list</span><span class="token punctuation">:</span> <span class="token string">&quot;[]&quot;</span>
  <span class="token key atrule">client_num_in_total</span><span class="token punctuation">:</span> <span class="token number">10</span>
  <span class="token key atrule">client_num_per_round</span><span class="token punctuation">:</span> <span class="token number">10</span>
  <span class="token key atrule">comm_round</span><span class="token punctuation">:</span> <span class="token number">4000</span>
  <span class="token key atrule">epochs</span><span class="token punctuation">:</span> <span class="token number">1</span>
  <span class="token key atrule">batch_size</span><span class="token punctuation">:</span> <span class="token number">10</span>
  <span class="token key atrule">client_optimizer</span><span class="token punctuation">:</span> sgd
  <span class="token key atrule">learning_rate</span><span class="token punctuation">:</span> <span class="token number">0.1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),N={href:"https://wandb.ai/automl/fedml/runs/1canbwed",target:"_blank",rel:"noopener noreferrer"},w=a(`<h3 id="stackoverflow-logistic-regression" tabindex="-1"><a class="header-anchor" href="#stackoverflow-logistic-regression" aria-hidden="true">#</a> <strong>Stackoverflow + Logistic Regression</strong></h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">data_args</span><span class="token punctuation">:</span>
  <span class="token key atrule">dataset</span><span class="token punctuation">:</span> <span class="token string">&quot;stackoverflow_lr&quot;</span>
  <span class="token key atrule">partition_method</span><span class="token punctuation">:</span> <span class="token string">&quot;hetero&quot;</span>
  <span class="token key atrule">partition_alpha</span><span class="token punctuation">:</span> <span class="token number">0.5</span>

<span class="token key atrule">model_args</span><span class="token punctuation">:</span>
  <span class="token key atrule">model</span><span class="token punctuation">:</span> <span class="token string">&quot;lr&quot;</span>
  
<span class="token key atrule">train_args</span><span class="token punctuation">:</span>
  <span class="token key atrule">federated_optimizer</span><span class="token punctuation">:</span> <span class="token string">&quot;FedAvg&quot;</span>
  <span class="token key atrule">client_id_list</span><span class="token punctuation">:</span> <span class="token string">&quot;[]&quot;</span>
  <span class="token key atrule">client_num_in_total</span><span class="token punctuation">:</span> <span class="token number">10</span>
  <span class="token key atrule">client_num_per_round</span><span class="token punctuation">:</span> <span class="token number">10</span>
  <span class="token key atrule">comm_round</span><span class="token punctuation">:</span> <span class="token number">2000</span>
  <span class="token key atrule">epochs</span><span class="token punctuation">:</span> <span class="token number">1</span>
  <span class="token key atrule">batch_size</span><span class="token punctuation">:</span> <span class="token number">10</span>
  <span class="token key atrule">client_optimizer</span><span class="token punctuation">:</span> sgd
  <span class="token key atrule">learning_rate</span><span class="token punctuation">:</span> <span class="token number">0.03</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),x={href:"https://wandb.ai/automl/fedml/runs/3aponqml",target:"_blank",rel:"noopener noreferrer"},z=a(`<h3 id="stackoverflow-rnn" tabindex="-1"><a class="header-anchor" href="#stackoverflow-rnn" aria-hidden="true">#</a> <strong>Stackoverflow + RNN</strong></h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">data_args</span><span class="token punctuation">:</span>
  <span class="token key atrule">dataset</span><span class="token punctuation">:</span> <span class="token string">&quot;stackoverflow_nwp&quot;</span>
  <span class="token key atrule">partition_method</span><span class="token punctuation">:</span> <span class="token string">&quot;hetero&quot;</span>
  <span class="token key atrule">partition_alpha</span><span class="token punctuation">:</span> <span class="token number">0.5</span>

<span class="token key atrule">model_args</span><span class="token punctuation">:</span>
  <span class="token key atrule">model</span><span class="token punctuation">:</span> <span class="token string">&quot;rnn&quot;</span>
  
<span class="token key atrule">train_args</span><span class="token punctuation">:</span>
  <span class="token key atrule">federated_optimizer</span><span class="token punctuation">:</span> <span class="token string">&quot;FedAvg&quot;</span>
  <span class="token key atrule">client_id_list</span><span class="token punctuation">:</span> <span class="token string">&quot;[]&quot;</span>
  <span class="token key atrule">client_num_in_total</span><span class="token punctuation">:</span> <span class="token number">10</span>
  <span class="token key atrule">client_num_per_round</span><span class="token punctuation">:</span> <span class="token number">10</span>
  <span class="token key atrule">comm_round</span><span class="token punctuation">:</span> <span class="token number">2000</span>
  <span class="token key atrule">epochs</span><span class="token punctuation">:</span> <span class="token number">1</span>
  <span class="token key atrule">batch_size</span><span class="token punctuation">:</span> <span class="token number">10</span>
  <span class="token key atrule">client_optimizer</span><span class="token punctuation">:</span> sgd
  <span class="token key atrule">learning_rate</span><span class="token punctuation">:</span> <span class="token number">0.03</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),R={href:"https://wandb.ai/automl/fedml/runs/7pf2c9r2",target:"_blank",rel:"noopener noreferrer"},F=a(`<h3 id="cifar-10-resnet-56" tabindex="-1"><a class="header-anchor" href="#cifar-10-resnet-56" aria-hidden="true">#</a> <strong>CIFAR-10 + ResNet-56</strong></h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">data_args</span><span class="token punctuation">:</span>
  <span class="token key atrule">dataset</span><span class="token punctuation">:</span> <span class="token string">&quot;cifar10&quot;</span>
  <span class="token key atrule">partition_method</span><span class="token punctuation">:</span> <span class="token string">&quot;hetero&quot;</span>
  <span class="token key atrule">partition_alpha</span><span class="token punctuation">:</span> <span class="token number">0.5</span>

<span class="token key atrule">model_args</span><span class="token punctuation">:</span>
  <span class="token key atrule">model</span><span class="token punctuation">:</span> <span class="token string">&quot;resnet56&quot;</span>
  
<span class="token key atrule">train_args</span><span class="token punctuation">:</span>
  <span class="token key atrule">federated_optimizer</span><span class="token punctuation">:</span> <span class="token string">&quot;FedAvg&quot;</span>
  <span class="token key atrule">client_id_list</span><span class="token punctuation">:</span> <span class="token string">&quot;[]&quot;</span>
  <span class="token key atrule">client_num_in_total</span><span class="token punctuation">:</span> <span class="token number">10</span>
  <span class="token key atrule">client_num_per_round</span><span class="token punctuation">:</span> <span class="token number">10</span>
  <span class="token key atrule">comm_round</span><span class="token punctuation">:</span> <span class="token number">200</span>
  <span class="token key atrule">epochs</span><span class="token punctuation">:</span> <span class="token number">1</span>
  <span class="token key atrule">batch_size</span><span class="token punctuation">:</span> <span class="token number">10</span>
  <span class="token key atrule">client_optimizer</span><span class="token punctuation">:</span> sgd
  <span class="token key atrule">learning_rate</span><span class="token punctuation">:</span> <span class="token number">0.03</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function A(T,I){const e=c("ExternalLinkIcon");return u(),d("div",null,[m,n("p",null,[s("The reference experimental result: "),n("a",v,[s("https://app.wandb.ai/automl/fedml/runs/ybv29kak"),t(e)])]),b,n("p",null,[s("The experimental result refers to："),n("a",_,[s("https://app.wandb.ai/automl/fedml/runs/2al5q5mi"),t(e)])]),h,n("p",null,[s("The experimental result refers to："),n("a",g,[s("https://wandb.ai/automl/fedml/runs/4btyrt0u"),t(e)])]),y,n("p",null,[s("The experimental result refers to："),n("a",f,[s("https://wandb.ai/automl/fedml/runs/3lv4gmpz"),t(e)])]),q,n("p",null,[s("The experimental result refers to："),n("a",N,[s("https://wandb.ai/automl/fedml/runs/1canbwed"),t(e)])]),w,n("p",null,[s("The experimental result refers to："),n("a",x,[s("https://wandb.ai/automl/fedml/runs/3aponqml"),t(e)])]),z,n("p",null,[s("The experimental result refers to: "),n("a",R,[s("https://wandb.ai/automl/fedml/runs/7pf2c9r2"),t(e)])]),F])}const C=r(k,[["render",A],["__file","BENCHMARK_simulation.html.vue"]]);export{C as default};
