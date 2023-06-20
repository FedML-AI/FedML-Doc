import{_ as r}from"./mlops_workflow_new-8802a177.js";import{_ as p,a as c,b as d,c as u,d as m,e as v,f as g,g as h,h as b}from"./MLOps_experimental_tracking_logging-d89a6af8.js";import{_ as k}from"./model_download-5f48d16e.js";import{_ as f,r as o,o as _,c as y,a as e,b as a,d as s,w as l,e as i}from"./app-7ac5536a.js";const w={},x=e("h1",{id:"fedml-mlops-user-guide",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#fedml-mlops-user-guide","aria-hidden":"true"},"#"),a(" FedML MLOps User Guide")],-1),M={href:"https://www.youtube.com/embed/Xgm0XEaMlVQ",target:"_blank",rel:"noopener noreferrer"},T=e("p",null,[e("strong",null,"Write Once, Run Anywhere: Seamlessly Migrate Your Local Development to the Real-world Edge-cloud Deployment")],-1),O=e("h3",{id:"how-does-fedml-mlops-platform-work",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#how-does-fedml-mlops-platform-work","aria-hidden":"true"},"#"),a(" How Does FedML MLOps Platform Work?")],-1),L=e("p",null,[e("img",{src:r,alt:"image"}),a(),e("br"),a(" Figure 1: the workflow describing how MLOps works")],-1),F=e("p",null,"MLOps works following the figure above; this workflow is handled by a web UI and thus avoids complex deployment. To begin, please create an account:",-1),N=e("br",null,null,-1),E={href:"https://open.fedml.ai",target:"_blank",rel:"noopener noreferrer"},C=e("h3",{id:"local-development-and-building-mlops-packages",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#local-development-and-building-mlops-packages","aria-hidden":"true"},"#"),a(" Local Development and Building MLOps Packages")],-1),A={href:"https://github.com/FedML-AI/FedML/tree/master/python/examples/cross_silo/mqtt_s3_fedavg_mnist_lr_example/one_line",target:"_blank",rel:"noopener noreferrer"},S=i('<h3 id="_1-create-application-and-upload-local-packages" tabindex="-1"><a class="header-anchor" href="#_1-create-application-and-upload-local-packages" aria-hidden="true">#</a> 1. Create Application and Upload Local Packages</h3><p><img src="'+p+`" alt="image"></p><p>You can use the following FedML CLI to build the package, and then upload the packages as shown in the figure above.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>fedml build <span class="token parameter variable">-t</span> client <span class="token parameter variable">-sf</span> <span class="token variable">$SOURCE</span> <span class="token parameter variable">-ep</span> <span class="token variable">$ENTRY</span> <span class="token parameter variable">-cf</span> <span class="token variable">$CONFIG</span> <span class="token parameter variable">-df</span> <span class="token variable">$DEST</span>

Usage: fedml build <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span>

  Commands <span class="token keyword">for</span> open.fedml.ai MLOps platform

Options:
  -t, <span class="token parameter variable">--type</span> TEXT            client or server? <span class="token punctuation">(</span>value: client<span class="token punctuation">;</span> server<span class="token punctuation">)</span>
  -sf, <span class="token parameter variable">--source_folder</span> TEXT  the <span class="token builtin class-name">source</span> code folder path
  -ep, <span class="token parameter variable">--entry_point</span> TEXT    the entry point of the <span class="token builtin class-name">source</span> code
  -cf, <span class="token parameter variable">--config_folder</span> TEXT  the config folder path
  -df, <span class="token parameter variable">--dest_folder</span> TEXT    the destination package folder path
  <span class="token parameter variable">--help</span>                     Show this message and exit.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The following script uses <code>examples/cross_silo/mqtt_s3_fedavg_mnist_lr_example/one_line</code> as an example to illustrate the arguments for building MLOps packages. Please replace related values with your own.</p><ul><li>Build the deployable package for the client</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/FedML-AI/FedML
<span class="token builtin class-name">cd</span> ./FedML/python/examples/cross_silo/mqtt_s3_fedavg_mnist_lr_example/one_line

<span class="token assign-left variable">SOURCE</span><span class="token operator">=</span>client
<span class="token assign-left variable">ENTRY</span><span class="token operator">=</span>torch_client.py
<span class="token assign-left variable">CONFIG</span><span class="token operator">=</span>config
<span class="token assign-left variable">DEST</span><span class="token operator">=</span>./mlops
fedml build <span class="token parameter variable">-t</span> client <span class="token parameter variable">-sf</span> <span class="token variable">$SOURCE</span> <span class="token parameter variable">-ep</span> <span class="token variable">$ENTRY</span> <span class="token parameter variable">-cf</span> <span class="token variable">$CONFIG</span> <span class="token parameter variable">-df</span> <span class="token variable">$DEST</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Note: for ENTRY, please only specify the file name (torch_client.py) under the SOURCE folder; please do not pass the absolute path.</p><p>If the script works correctly, the console log should be as follows.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">(</span>mnn37<span class="token punctuation">)</span> chaoyanghe@Chaoyangs-MBP python % fedml build <span class="token parameter variable">-t</span> client <span class="token parameter variable">-sf</span> <span class="token variable">$SOURCE</span> <span class="token parameter variable">-ep</span> <span class="token variable">$ENTRY</span> <span class="token parameter variable">-cf</span> <span class="token variable">$CONFIG</span> <span class="token parameter variable">-df</span> <span class="token variable">$DEST</span>
Argument <span class="token keyword">for</span> type: client
Argument <span class="token keyword">for</span> <span class="token builtin class-name">source</span> folder: examples/cross_silo/mqtt_s3_fedavg_mnist_lr_example/one_line/client
Argument <span class="token keyword">for</span> entry point: torch_client.py
Argument <span class="token keyword">for</span> config folder: examples/cross_silo/mqtt_s3_fedavg_mnist_lr_example/one_line/config
Argument <span class="token keyword">for</span> destination package folder: ./mlops
Now, you are building the fedml packages <span class="token function">which</span> will be used <span class="token keyword">in</span> the MLOps platform.
The packages will be used <span class="token keyword">for</span> client training and server aggregation.
When the building process is completed, you will <span class="token function">find</span> the packages <span class="token keyword">in</span> the directory as follows: ./mlops/dist-packages.
Then you may upload the packages on the configuration page <span class="token keyword">in</span> the MLOps platform to start the federated learning flow.
Building<span class="token punctuation">..</span>.
You have finished all building process. 
Now you may use ./mlops/client-package.zip to start your federated learning run.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Build the deployable package for the server</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">SOURCE</span><span class="token operator">=</span>server
<span class="token assign-left variable">ENTRY</span><span class="token operator">=</span>torch_server.py
<span class="token assign-left variable">CONFIG</span><span class="token operator">=</span>config
<span class="token assign-left variable">DEST</span><span class="token operator">=</span>./mlops
fedml build <span class="token parameter variable">-t</span> server <span class="token parameter variable">-sf</span> <span class="token variable">$SOURCE</span> <span class="token parameter variable">-ep</span> <span class="token variable">$ENTRY</span> <span class="token parameter variable">-cf</span> <span class="token variable">$CONFIG</span> <span class="token parameter variable">-df</span> <span class="token variable">$DEST</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Note: for ENTRY, please only specify the file name (torch_server.py) under the SOURCE folder; please do not pass the absolute path.</p><p>If the script works correctly, the console log should be as follows.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">(</span>mnn37<span class="token punctuation">)</span> chaoyanghe@Chaoyangs-MBP python % fedml build <span class="token parameter variable">-t</span> server <span class="token parameter variable">-sf</span> <span class="token variable">$SOURCE</span> <span class="token parameter variable">-ep</span> <span class="token variable">$ENTRY</span> <span class="token parameter variable">-cf</span> <span class="token variable">$CONFIG</span> <span class="token parameter variable">-df</span> <span class="token variable">$DEST</span>
Argument <span class="token keyword">for</span> type: server
Argument <span class="token keyword">for</span> <span class="token builtin class-name">source</span> folder: examples/cross_silo/mqtt_s3_fedavg_mnist_lr_example/one_line/server
Argument <span class="token keyword">for</span> entry point: torch_server.py
Argument <span class="token keyword">for</span> config folder: examples/cross_silo/mqtt_s3_fedavg_mnist_lr_example/one_line/config
Argument <span class="token keyword">for</span> destination package folder: ./mlops
Now, you are building the fedml packages <span class="token function">which</span> will be used <span class="token keyword">in</span> the MLOps platform.
The packages will be used <span class="token keyword">for</span> client training and server aggregation.
When the building process is completed, you will <span class="token function">find</span> the packages <span class="token keyword">in</span> the directory as follows: ./mlops/dist-packages.
Then you may upload the packages on the configuration page <span class="token keyword">in</span> the MLOps platform to start the federated learning flow.
Building<span class="token punctuation">..</span>.
You have finished all building process. 
Now you may use ./mlops/server-package.zip to start your federated learning run.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The output package is located in <code>mlops</code> folder.</p><h3 id="_2-install-fedml-agent-fedml-login-account-id" tabindex="-1"><a class="header-anchor" href="#_2-install-fedml-agent-fedml-login-account-id" aria-hidden="true">#</a> 2. Install FedML Agent: fedml login $account_id</h3>`,17),I=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>fedml login <span class="token variable">$account_id</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Please change $account_id to your own (see the screenshot shown below).</p><p><img src="`+c+`" alt="image"> Figure 2: login your edge devices to our platform</p><p>In the edge device, you will see the log as below if the script works correctly. You can also press the &quot;refresh&quot; button in Figure 2 to check the status of your device.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">(</span>fedml3.7<span class="token punctuation">)</span> chaoyanghe@Chaoyangs-MBP cross_silo % fedml login <span class="token number">302</span>
client None, server None
login as client: True, as server: None
/Users/chaoyanghe/sourcecode/FedML_product/FedML/python/fedml/cli/edge_deployment/client_login.py
<span class="token punctuation">(</span>fedml3.7<span class="token punctuation">)</span> chaoyanghe@Chaoyangs-MBP cross_silo % Namespace<span class="token punctuation">(</span>local_server<span class="token operator">=</span><span class="token string">&#39;127.0.0.1&#39;</span>, <span class="token assign-left variable">type</span><span class="token operator">=</span><span class="token string">&#39;login&#39;</span>, <span class="token assign-left variable">user</span><span class="token operator">=</span><span class="token string">&#39;302&#39;</span>, <span class="token assign-left variable">version</span><span class="token operator">=</span><span class="token string">&#39;release&#39;</span><span class="token punctuation">)</span>
Namespace<span class="token punctuation">(</span>account_id<span class="token operator">=</span><span class="token number">302</span>, <span class="token assign-left variable">cloud_region</span><span class="token operator">=</span><span class="token string">&#39;&#39;</span>, <span class="token assign-left variable">config_version</span><span class="token operator">=</span><span class="token string">&#39;release&#39;</span>, <span class="token assign-left variable">current_running_dir</span><span class="token operator">=</span><span class="token string">&#39;/Users/chaoyanghe/fedml-client&#39;</span>, <span class="token assign-left variable">device_id</span><span class="token operator">=</span><span class="token string">&#39;0xb6ff42da6a7e&#39;</span>, <span class="token assign-left variable">local_server</span><span class="token operator">=</span><span class="token string">&#39;127.0.0.1&#39;</span>, <span class="token assign-left variable">log_file_dir</span><span class="token operator">=</span><span class="token string">&#39;/Users/chaoyanghe/fedml-client/fedml/logs&#39;</span>, <span class="token assign-left variable">os_name</span><span class="token operator">=</span><span class="token string">&#39;MacOS&#39;</span>, <span class="token assign-left variable">type</span><span class="token operator">=</span><span class="token string">&#39;login&#39;</span>, <span class="token assign-left variable">user</span><span class="token operator">=</span><span class="token number">302</span>, <span class="token assign-left variable">version</span><span class="token operator">=</span><span class="token string">&#39;release&#39;</span><span class="token punctuation">)</span>
Current directory of client agent: /Users/chaoyanghe/fedml-client
client ids:<span class="token punctuation">[</span><span class="token number">266</span><span class="token punctuation">]</span>
log <span class="token function">file</span> path /Users/chaoyanghe/fedml-client/fedml/logs/fedml-run-0-edge-266-upload.log
login: unique_device_id <span class="token operator">=</span> @0xb6ff42da6a7e.MacOS
login: edge_id <span class="token operator">=</span> <span class="token number">266</span>
subscribe: flserver_agent/266/start_train
subscribe: flserver_agent/266/stop_train
subscribe: fl_client/flclient_agent_266/status
Congratulations, you have logged into the FedML MLOps platform successfully<span class="token operator">!</span>
Your device <span class="token function">id</span> is @0xb6ff42da6a7e.MacOS. You may review the device <span class="token keyword">in</span> the MLOps edge device list.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-invite-collaborators-create-a-group-and-a-project" tabindex="-1"><a class="header-anchor" href="#_3-invite-collaborators-create-a-group-and-a-project" aria-hidden="true">#</a> 3. Invite Collaborators, Create a Group and a Project</h2><ul><li>3.1 Invite Collaborators <br></li></ul><p>(1) Copy your invitation link</p><p>(2) Send the invitation link to your collaborators via any communication tools (e.g., Slack, Facebook Messenger, Email, etc.)</p><p>(3) Your collaborators can open the URL and accept the invitation</p><p>Now you and your collaborators should be able to see each other on the <code>My Collaborators</code> page.</p><p><img src="`+d+'" alt="image"> Figure 3: invite your collaborators</p><ul><li>3.2 Group Management</li></ul><p>After inviting your collaborators, you can <code>Create New Group</code>, input the group name, and select your collaborators into the group.</p><p>We support a topology visualization to assist you and your collaborators in checking all collaborative edge devices in that group.</p><p>Note that after creation, our platform will add newly bound devices from all members to the group. If you would like to change the members in this group, you will have to create a new group.</p><p><img src="'+u+'" alt="image"> Figure 4: showing the topology of the group</p><h2 id="_4-start-run-training-via-automated-deployment-and-scaling" tabindex="-1"><a class="header-anchor" href="#_4-start-run-training-via-automated-deployment-and-scaling" aria-hidden="true">#</a> 4. Start Run (Training) via Automated Deployment and Scaling</h2><p>Now let&#39;s create a project and get training started!</p><ul><li>Create a new project for a specific group or utilize the existing project you created before</li><li>Open a project and create a new run under the project. By clicking <code>Start</code>, the run will begin.</li></ul><p><img src="'+m+'" alt="image"> Figure 5: create and start a new run</p><h2 id="_5-experimental-tracking-via-simplified-project-management" tabindex="-1"><a class="header-anchor" href="#_5-experimental-tracking-via-simplified-project-management" aria-hidden="true">#</a> 5. Experimental Tracking via Simplified Project Management</h2><p>Now you are ready to start the training. Enjoy! We provide the following experimental tracking abilities as follows.</p><ul><li><p>monitoring device status (including logging in each device) and training progress <img src="'+v+'" alt="image"></p></li><li><p>visualizing training results <img src="'+g+'" alt="image"></p></li><li><p>visualizing system performance <img src="'+h+'" alt="image"></p></li><li><p>model downloading/serving <img src="'+k+`" alt="image"> You can use the &#39;Download&#39; button on the &#39;Models&#39; tab to download the model parameters. The file is in binary format, storing the parameters of the model after each round of training. To load it, you need to initialize the model using your original model network definition, and then using the pickle module to load these parameters.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>  model <span class="token operator">=</span> YourModelNetwork<span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>path_to_download_file<span class="token punctuation">,</span> <span class="token string">&#39;rb&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> model_params_file_obj<span class="token punctuation">:</span>
    model_params <span class="token operator">=</span> pickle<span class="token punctuation">.</span>load<span class="token punctuation">(</span>model_params_file_obj<span class="token punctuation">)</span>
    model<span class="token punctuation">.</span>load_state_dict<span class="token punctuation">(</span>model_params<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>distributed logging <img src="`+b+`" alt="image"></p><p>Also, you may review your edge client logs via the command &#39;fedml logs&#39; in your edge client device, and you may review your edge server logs via the command &#39;fedml logs -s&#39; in your edge server device.</p></li></ul><h2 id="_6-fedml-ota-over-the-air-upgrade-mechanism" tabindex="-1"><a class="header-anchor" href="#_6-fedml-ota-over-the-air-upgrade-mechanism" aria-hidden="true">#</a> 6. FedML OTA(Over-the-Air) upgrade mechanism</h2><p>The OTA process is a useful feature of FedML because it ensures that all agents in a run group are using the same version of the platform. This helps to avoid compatibility issues and ensures that everyone is working with the same set of features and bug fixes.</p><p>The FedML core framework provides an easy way to upgrade to the latest version of the platform using an over-the-air (OTA) process. When you use the CLI command <code>fedml login $YourUserId</code> to log into the MLOps platform, the core framework compares the local version with the latest version available on the pypi.org repository. If the local version is outdated, the framework initiates the OTA process to upgrade the local fedml pip to the latest version.</p><p>Additionally, when you start a new run on the MLOps platform, the FedML server agent runs the OTA process to upgrade its local version. Once the server agent completes the upgrade process, it forwards the OTA request to all FedML client agents in the same run group. The client agents then run the same OTA process to upgrade their local versions.</p><p>Although the OTA process automatically upgrades FedML to the latest version, there may be situations where you want to upgrade to a specific version. In this case, you can use the fedml_config.yaml file to specify the version you want to upgrade to. Simply add the following configuration keys under the common_args section:</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>  <span class="token key atrule">common_args</span><span class="token punctuation">:</span>
      <span class="token key atrule">upgrade_version</span><span class="token punctuation">:</span> 0.8.2
      <span class="token key atrule">no_upgrade</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you set the value of no_upgrade to true, neither the FedML server agent nor the client agent will run the OTA process when you start a new run.</p><p>Overall, the OTA process and the ability to specify a specific version to upgrade to make upgrading FedML convenient and flexible for users.</p><p>More advanced features will be supported soon. We appreciate your valuable feedback.</p>`,33);function $(R,U){const n=o("ExternalLinkIcon"),t=o("RouterLink");return _(),y("div",null,[x,e("p",null,[e("a",M,[a("Video Tutorial"),s(n)])]),T,O,L,F,e("ul",null,[e("li",null,[a("Instructions for registration: "),N,a(" Please open "),e("a",E,[a("https://open.fedml.ai"),s(n)]),a(' and click "Sign Up".')])]),C,e("p",null,[a("After you finish the local developing/debugging of the FedML project using FedML library (e.g., successfully run the example "),s(t,{to:"/en/cross-silo/examples/mqtt_s3_fedavg_mnist_lr_example.html"},{default:l(()=>[a("example")]),_:1}),a("), you can now deploy it into the real-world edge-cloud system.")]),e("p",null,[a("Next, we use the cross-silo project example at "),e("a",A,[a("https://github.com/FedML-AI/FedML/tree/master/python/examples/cross_silo/mqtt_s3_fedavg_mnist_lr_example/one_line"),s(n)]),a(" to guide you through how to deploy it and collaborate with others' data silos.")]),S,e("p",null,[a("After "),s(t,{to:"/starter/installation.html"},{default:l(()=>[a("installing the FedML library")]),_:1}),a(" at your edge devices, you can bind it to MLOps platform with a simple CLI:")]),I])}const D=f(w,[["render",$],["__file","user_guide.html.vue"]]);export{D as default};