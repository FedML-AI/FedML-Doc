import{_ as a,r as l,o as d,c as r,a as e,b as t,d as n,e as o}from"./app-7ac5536a.js";const s={},p=e("h1",{id:"benchmarking-results-for-mpi-based-federated-learning",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#benchmarking-results-for-mpi-based-federated-learning","aria-hidden":"true"},"#"),t(" Benchmarking Results for MPI-based federated learning")],-1),c={href:"https://app.wandb.ai/automl/fedml/reports/FedML-Benchmark-Experimental-Results--VmlldzoxODE2NTU",target:"_blank",rel:"noopener noreferrer"},g={href:"https://arxiv.org/pdf/2007.13518.pdf",target:"_blank",rel:"noopener noreferrer"},x=o('<h3 id="linear-models" tabindex="-1"><a class="header-anchor" href="#linear-models" aria-hidden="true">#</a> Linear Models</h3><table><thead><tr><th style="text-align:center;">Data</th><th style="text-align:center;">Model</th><th style="text-align:center;">Alg</th><th style="text-align:center;">Partition</th><th style="text-align:center;">#C</th><th style="text-align:center;">#C_p</th><th style="text-align:center;">bs</th><th style="text-align:center;">c_opt</th><th style="text-align:center;">lr</th><th style="text-align:center;">e</th><th style="text-align:center;">#R</th><th style="text-align:center;">acc</th></tr></thead><tbody><tr><td style="text-align:center;">MNIST</td><td style="text-align:center;">LR</td><td style="text-align:center;">FedAvg</td><td style="text-align:center;">Power Law</td><td style="text-align:center;">1000</td><td style="text-align:center;">10</td><td style="text-align:center;">10</td><td style="text-align:center;">SGD</td><td style="text-align:center;">0.03</td><td style="text-align:center;">1</td><td style="text-align:center;">&gt;100</td><td style="text-align:center;">&gt;75</td></tr><tr><td style="text-align:center;">Federated EMNIST</td><td style="text-align:center;">LR</td><td style="text-align:center;">FedAvg</td><td style="text-align:center;">Power Law</td><td style="text-align:center;">200</td><td style="text-align:center;">10</td><td style="text-align:center;">10</td><td style="text-align:center;">SGD</td><td style="text-align:center;">0.003</td><td style="text-align:center;">1</td><td style="text-align:center;">&gt;200</td><td style="text-align:center;">10~40</td></tr><tr><td style="text-align:center;">Synthetic(α,β）</td><td style="text-align:center;">LR</td><td style="text-align:center;">FedAvg</td><td style="text-align:center;">Power Law</td><td style="text-align:center;">30</td><td style="text-align:center;">10</td><td style="text-align:center;">10</td><td style="text-align:center;">SGD</td><td style="text-align:center;">0.01</td><td style="text-align:center;">1</td><td style="text-align:center;">&gt;200</td><td style="text-align:center;">&gt;60</td></tr></tbody></table><p>Note: #C stands for client_num_in_total; #C_p stands for client_num_per_round; bs = batch_size; c_opt = client optimizer; e = epoch; #R = number of rounds; acc = accuracy. For Synthetic(α,β), (α,β) is chosen from (0,0), (0.5,0.5), (1,1)</p><ul><li>MNIST – Logistic Regression – FedAvg <ul><li>Patition Method: ‘Federated optimization in heterogeneous networks’, page 7, Section 5.1, ‘Real data’</li><li>client_num_in_total: ‘Federated optimization in heterogeneous networks’, page 7, Section 5.1, ‘Real data’</li><li>client_num_per_round: ‘Federated optimization in heterogeneous networks’, page 18, Appendix C.2, ‘Hyperparameters’</li><li>batch_size: ‘Federated optimization in heterogeneous networks’, page 18, Appendix C.2, ‘Hyperparameters’</li><li>client_optimizer: ‘Federated optimization in heterogeneous networks’, page 8, Section 5.1, ‘Implementation</li><li>lr: ‘Federated optimization in heterogeneous networks’, page 18, Appendix C.2, ‘Hyperparameters’</li><li>epochs: ‘Federated optimization in heterogeneous networks’, page 21, Appendix C.3.2 Figure 9 description</li><li>comm_round: ‘Federated optimization in heterogeneous networks’, page 21, Appendix C.3.2 Figure 10</li><li>accuracy: ‘Federated optimization in heterogeneous networks’, page 21, Appendix C.3.2 Figure 10</li></ul></li><li>Federated EMNIST – Logistic Regression-FedAvg <ul><li>Patition Method: ‘Federated optimization in heterogeneous networks’, page 7, Section 5.1, ‘Real data’</li><li>client_num_in_total: ‘Federated optimization in heterogeneous networks’, page 7, Section 5.1, ‘Real data’</li><li>client_num_per_round: ‘Federated optimization in heterogeneous networks’, page 18, Appendix C.2, ‘Hyperparameters’</li><li>batch_size: ‘Federated optimization in heterogeneous networks’, page 18, Appendix C.2, ‘Hyperparameters’</li><li>client_optimizer: ‘Federated optimization in heterogeneous networks’, page 8, Section 5.1, ‘Implementation</li><li>lr: ‘Federated optimization in heterogeneous networks’, page 18, Appendix C.2, ‘Hyperparameters’</li><li>epochs: ‘Federated optimization in heterogeneous networks’, page 21, Appendix C.3.2 Figure 9 description</li><li>comm_round: ‘Federated optimization in heterogeneous networks’, page 21, Appendix C.3.2 Figure 10</li><li>accuracy: ‘Federated optimization in heterogeneous networks’, page 21, Appendix C.3.2 Figure 10</li></ul></li><li>Synthetic(α,β) – Logistic Regression -FedAvg <ul><li>Patition Method: ‘Federated optimization in heterogeneous networks’, page 18, Appendix C.1, ‘Synthetic’</li><li>client_num_in_total: ‘Federated optimization in heterogeneous networks’, page 18, Appendix C.1, ‘Synthetic’</li><li>client_num_per_round: ‘Federated optimization in heterogeneous networks’, page 18, Appendix C.2, ‘Hyperparameters’</li><li>batch_size: ‘Federated optimization in heterogeneous networks’, page 18, Appendix C.2, ‘Hyperparameters’</li><li>client_optimizer: ‘Federated optimization in heterogeneous networks’, page 8, Section 5.1, ‘Implementation</li><li>lr: ‘Federated optimization in heterogeneous networks’, page 18, Appendix C.2, ‘Hyperparameters’</li><li>epochs: ‘Federated optimization in heterogeneous networks’, page 8, Section 5.1, ‘Hyperparameters &amp; evaluation metrics’</li><li>comm_round: ‘Federated optimization in heterogeneous networks’, page 19, Appendix C.3.2 Figure 6</li><li>accuracy: ‘Federated optimization in heterogeneous networks’, page 19, Appendix C.3.2 Figure 6</li></ul></li></ul><h3 id="lightweight-and-shallow-neural-network-models" tabindex="-1"><a class="header-anchor" href="#lightweight-and-shallow-neural-network-models" aria-hidden="true">#</a> Lightweight and shallow neural network models</h3><table><thead><tr><th style="text-align:center;">Task</th><th style="text-align:center;">Data Set</th><th style="text-align:center;">Model</th><th style="text-align:center;">Alogrithm</th><th style="text-align:center;">Partition Method</th><th style="text-align:center;">Partition Alpha</th><th style="text-align:center;">client_num_in_total</th><th style="text-align:center;">client_num_per_round</th><th style="text-align:center;">batch_size</th><th style="text-align:center;">client_optimizer</th><th style="text-align:center;">lr</th><th style="text-align:center;">wd</th><th style="text-align:center;">epochs</th><th style="text-align:center;">comm_round</th><th style="text-align:center;">accuracy</th></tr></thead><tbody><tr><td style="text-align:center;">CV</td><td style="text-align:center;">Federated EMNIST</td><td style="text-align:center;">CNN (2 Conv + 2 FC)</td><td style="text-align:center;">FedAvg</td><td style="text-align:center;">Power Law</td><td style="text-align:center;"></td><td style="text-align:center;">3400</td><td style="text-align:center;">10</td><td style="text-align:center;">20</td><td style="text-align:center;">SGD</td><td style="text-align:center;">0.1</td><td style="text-align:center;">-</td><td style="text-align:center;">1</td><td style="text-align:center;">&gt;1500</td><td style="text-align:center;">84.9</td></tr><tr><td style="text-align:center;">CV</td><td style="text-align:center;">CIFAR-100</td><td style="text-align:center;">ResNet-18+group normalization</td><td style="text-align:center;">FedAvg</td><td style="text-align:center;">Pachinko Allocation</td><td style="text-align:center;">100/500(ex/cli)</td><td style="text-align:center;">500</td><td style="text-align:center;">10</td><td style="text-align:center;">20</td><td style="text-align:center;">SGD</td><td style="text-align:center;">0.1</td><td style="text-align:center;">-</td><td style="text-align:center;">1</td><td style="text-align:center;">&gt;4000</td><td style="text-align:center;">44.7</td></tr><tr><td style="text-align:center;">NLP</td><td style="text-align:center;">Shakespeare</td><td style="text-align:center;">RNN (2 LSTM + 1 FC)</td><td style="text-align:center;">FedAvg</td><td style="text-align:center;">realistic patition</td><td style="text-align:center;"></td><td style="text-align:center;">715</td><td style="text-align:center;">10</td><td style="text-align:center;">4</td><td style="text-align:center;">SGD</td><td style="text-align:center;">1</td><td style="text-align:center;">-</td><td style="text-align:center;">1</td><td style="text-align:center;">&gt;1200</td><td style="text-align:center;">56.9</td></tr><tr><td style="text-align:center;">NLP</td><td style="text-align:center;">StackOverflow</td><td style="text-align:center;">RNN (1 LSTM + 2 FC)</td><td style="text-align:center;">FedAvg</td><td style="text-align:center;">Pachinko Allocation</td><td style="text-align:center;"></td><td style="text-align:center;">342477</td><td style="text-align:center;">50</td><td style="text-align:center;">16</td><td style="text-align:center;">SGD</td><td style="text-align:center;">pow(10,-0.5)</td><td style="text-align:center;">-</td><td style="text-align:center;">1</td><td style="text-align:center;">&gt;1500</td><td style="text-align:center;">19.5</td></tr></tbody></table><ul><li>Federated EMNIST-CNN-FedAvg (https://openreview.net/pdf?id=LkFG3lB13U5) <ul><li>Patition Method: ‘Adaptive federated optimization’ (https://openreview.net/pdf?id=LkFG3lB13U5), page 23, Appendix C.2</li><li>client_num_in_total: ‘Adaptive federated optimization’, page 23, Appendix C Dataset &amp; Models, Table2</li><li>client_num_per_round: ‘Adaptive federated optimization’, page 6, Section 4, ‘Optimizer and hyperparameters’</li><li>batch_size: ‘Adaptive federated optimization’, page 27, Appendix D Experiment Hyperparameters, Table7</li><li>client_optimizer: ‘Adaptive federated optimization’, page 25, Appendix D.1, Paragraph 1</li><li>lr: ‘Adaptive federated optimization’, page 27, Appendix D.4, Table8</li><li>wd (learning rate decay): ‘Adaptive federated optimization’, page34, Appendix E.6, Paragraph 2</li><li>epochs: ‘Adaptive federated optimization’, page34, Appendix E.6, Paragraph 1</li><li>comm_round:‘Adaptive federated optimization’, page28, Appendix E.1, figure 3</li><li>accuracy: ‘Adaptive federated optimization’, page 7, Section 5, Table1</li></ul></li><li>CIFAR-100 – ResNet18 -FedAvg <ul><li>Patition Method: ‘Adaptive federated optimization’, page 23, Appendix C.1, Paragraph 3</li><li>Patition_alpha: ‘Adaptive federated optimization’, page 23, Appendix C.1, Paragraph 2</li><li>client_num_in_total: ‘Adaptive federated optimization’, page 23, Appendix C Dataset &amp; Models, Table2</li><li>client_num_per_round: ‘Adaptive federated optimization’, page 6, Section 4, ‘Optimizer and hyperparameters’</li><li>batch_size: ‘Adaptive federated optimization’, page 27, Appendix D Experiment Hyperparameters, Table7</li><li>client_optimizer: ‘Adaptive federated optimization’, page 25, Appendix D.1, Paragraph 1</li><li>lr: ‘Adaptive federated optimization’, page 27, Appendix D.4, Table8</li><li>epochs: ‘Adaptive federated optimization’, page 6, Section 4, ‘Optimizer and hyperparameters’</li><li>comm_round: ‘Adaptive federated optimization’, page 7, Section 4, figure 1</li><li>accuracy: ‘Adaptive federated optimization’, page 7, Section 5, Table1</li></ul></li><li>Shakespeare – RNN – FedAvg <ul><li>Patition Method: ‘Adaptive federated optimization’, page 23, Appendix C.3</li><li>client_num_in_total: ‘Adaptive federated optimization’, page 23, Appendix C Dataset &amp; Models, Table2</li><li>client_num_per_round: ‘Adaptive federated optimization’, page 6, Section 4, ‘Optimizer and hyperparameters’</li><li>batch_size: ‘Adaptive federated optimization’, page 27, Appendix D Experiment Hyperparameters, Table7</li><li>client_optimizer: ‘Adaptive federated optimization’, page 25, Appendix D.1, Paragraph 1</li><li>lr: ‘Adaptive federated optimization’, page 27, Appendix D.4, Table8</li><li>epochs: ‘Adaptive federated optimization’, page 6, Section 4, ‘Optimizer and hyperparameters’</li><li>comm_round: ‘Adaptive federated optimization’, page 7, Section 4, figure 1</li><li>accuracy: ‘Adaptive federated optimization’, page 7, Section 5, Table1</li></ul></li><li>StackOverflow – RNN – FedAvg <ul><li>Patition Method: ‘Adaptive federated optimization’, page 23, Appendix C.4, Paragraph 2</li><li>client_num_in_total: ‘Adaptive federated optimization’, page 25, Appendix C.4, Paragraph 1</li><li>client_num_per_round: ‘Adaptive federated optimization’, page 6, Section 4, ‘Optimizer and hyperparameters’</li><li>batch_size: ‘Adaptive federated optimization’, page 27, Appendix D Experiment Hyperparameters, Table7</li><li>client_optimizer: ‘Adaptive federated optimization’, page 25, Appendix D.1, Paragraph 1</li><li>lr: ‘Adaptive federated optimization’, page 27, Appendix D.4, Table8</li><li>epochs: ‘Adaptive federated optimization’, page 6, Section 4, ‘Optimizer and hyperparameters’</li><li>comm_round: ‘Adaptive federated optimization’, page 7, Section 4, figure 1</li><li>accuracy: ‘Adaptive federated optimization’, page 7, Section 5, Table1</li></ul></li></ul><h3 id="benchmarking-using-modern-dnns" tabindex="-1"><a class="header-anchor" href="#benchmarking-using-modern-dnns" aria-hidden="true">#</a> Benchmarking using modern DNNs</h3><table><thead><tr><th style="text-align:center;">Data</th><th style="text-align:center;">Model</th><th style="text-align:center;">Alg</th><th style="text-align:center;"># C</th><th style="text-align:center;"># C_p</th><th style="text-align:center;">bs</th><th style="text-align:center;">c_opt</th><th style="text-align:center;">lr</th><th style="text-align:center;">wd</th><th style="text-align:center;">e</th><th style="text-align:center;">round</th><th style="text-align:center;">IID acc</th><th style="text-align:center;">non-IID acc</th></tr></thead><tbody><tr><td style="text-align:center;">CIFAR10</td><td style="text-align:center;">ResNet-56</td><td style="text-align:center;">FedAvg</td><td style="text-align:center;">10</td><td style="text-align:center;">10</td><td style="text-align:center;">64</td><td style="text-align:center;">SGD</td><td style="text-align:center;">0.001</td><td style="text-align:center;">0.001</td><td style="text-align:center;">20</td><td style="text-align:center;">100</td><td style="text-align:center;">93.19</td><td style="text-align:center;">87.12</td></tr><tr><td style="text-align:center;">CIFAR100</td><td style="text-align:center;">ResNet-56</td><td style="text-align:center;">FedAvg</td><td style="text-align:center;">10</td><td style="text-align:center;">10</td><td style="text-align:center;">64</td><td style="text-align:center;">SGD</td><td style="text-align:center;">0.001</td><td style="text-align:center;">0.001</td><td style="text-align:center;">20</td><td style="text-align:center;">100</td><td style="text-align:center;">68.91</td><td style="text-align:center;">64.70</td></tr><tr><td style="text-align:center;">CINIC10</td><td style="text-align:center;">ResNet-56</td><td style="text-align:center;">FedAvg</td><td style="text-align:center;">10</td><td style="text-align:center;">10</td><td style="text-align:center;">64</td><td style="text-align:center;">SGD</td><td style="text-align:center;">0.001</td><td style="text-align:center;">0.001</td><td style="text-align:center;">20</td><td style="text-align:center;">100</td><td style="text-align:center;">82.57</td><td style="text-align:center;">73.49</td></tr><tr><td style="text-align:center;">CIFAR10</td><td style="text-align:center;">MobileNet</td><td style="text-align:center;">FedAvg</td><td style="text-align:center;">10</td><td style="text-align:center;">10</td><td style="text-align:center;">64</td><td style="text-align:center;">SGD</td><td style="text-align:center;">0.001</td><td style="text-align:center;">0.001</td><td style="text-align:center;">20</td><td style="text-align:center;">100</td><td style="text-align:center;">91.12</td><td style="text-align:center;">86.32</td></tr><tr><td style="text-align:center;">CIFAR100</td><td style="text-align:center;">MobileNet</td><td style="text-align:center;">FedAvg</td><td style="text-align:center;">10</td><td style="text-align:center;">10</td><td style="text-align:center;">64</td><td style="text-align:center;">SGD</td><td style="text-align:center;">0.001</td><td style="text-align:center;">0.001</td><td style="text-align:center;">20</td><td style="text-align:center;">100</td><td style="text-align:center;">55.12</td><td style="text-align:center;">53.54</td></tr><tr><td style="text-align:center;">CINIC10</td><td style="text-align:center;">MobileNet</td><td style="text-align:center;">FedAvg</td><td style="text-align:center;">10</td><td style="text-align:center;">10</td><td style="text-align:center;">64</td><td style="text-align:center;">SGD</td><td style="text-align:center;">0.001</td><td style="text-align:center;">0.001</td><td style="text-align:center;">20</td><td style="text-align:center;">100</td><td style="text-align:center;">79.95</td><td style="text-align:center;">71.23</td></tr></tbody></table><p>Note: Non-IID distribution is set using LDA ( LDA = Latent Dirichlet Allocation) with alpha = 0.5; #C stands for client_num_in_total; #C_p stands for client_num_per_round; bs = batch size; c_opt = client optimizer.</p>',10);function y(h,m){const i=l("ExternalLinkIcon");return d(),r("div",null,[p,e("p",null,[t("Please visit the following link to check the latest benchmark experimental results: "),e("a",c,[t("https://app.wandb.ai/automl/fedml/reports/FedML-Benchmark-Experimental-Results--VmlldzoxODE2NTU"),n(i)]),t(" FedML white paper ("),e("a",g,[t("https://arxiv.org/pdf/2007.13518.pdf"),n(i)]),t(") also summarizes the dataset list and related benchmarks. We refer the hyper-parameters and reproduce results from many top-tier ML conferences. Please check details of our reference hyperparameters as follows.")]),x])}const _=a(s,[["render",y],["__file","BENCHMARK_MPI.html.vue"]]);export{_ as default};
