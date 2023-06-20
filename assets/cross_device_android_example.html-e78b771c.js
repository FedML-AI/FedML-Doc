import{_ as o,a as i,b as r,c as d,d as l,e as p,f as c,g as u,h as m}from"./beehive_account-8ea3990a.js";import{_ as h,r as k,o as g,c as v,a as e,b as a,d as s,e as t}from"./app-7ac5536a.js";const b={},f=e("h1",{id:"federated-learning-on-android-smartphones",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#federated-learning-on-android-smartphones","aria-hidden":"true"},"#"),a(" Federated Learning on Android Smartphones")],-1),_=e("table",null,[e("tr",null,[e("td",{valign:"center"},[e("img",{src:o,alt:"drawing",style:{width:"300px"}})]),e("td",{valign:"center"},[e("img",{src:i,alt:"drawing",style:{width:"400px"}})])])],-1),M=e("p",null,"This example will guide you to work through how to run federated learning on Android smartphones. The code for this example locates in the following two paths:",-1),y={href:"https://github.com/FedML-AI/FedML/tree/master/android",target:"_blank",rel:"noopener noreferrer"},A={href:"https://github.com/FedML-AI/FedML/tree/master/android/app",target:"_blank",rel:"noopener noreferrer"},x={href:"https://github.com/FedML-AI/FedML/tree/master/android/app",target:"_blank",rel:"noopener noreferrer"},L={href:"https://github.com/FedML-AI/FedML/tree/master/android/fedmlsdk",target:"_blank",rel:"noopener noreferrer"},w=e("br",null,null,-1),F={href:"https://github.com/FedML-AI/FedML/tree/master/android/fedmlsdk/MobileNN",target:"_blank",rel:"noopener noreferrer"},I=e("br",null,null,-1),N={href:"https://github.com/FedML-AI/MNN",target:"_blank",rel:"noopener noreferrer"},D=e("br",null,null,-1),S={href:"https://github.com/FedML-AI/pytorch",target:"_blank",rel:"noopener noreferrer"},P={href:"https://github.com/FedML-AI/FedML/tree/master/python/quick_start/beehive",target:"_blank",rel:"noopener noreferrer"},R=t('<p>The software architecture design for Android App/SDK is illustrated in the figure below.</p><img src="'+r+'" alt="drawing" style="width:600px;"><p>Next show you the step-by-step user experiment of using FedML Beehive.</p><h2 id="_1-setup-environment-and-run-android-app-or-android-demo" tabindex="-1"><a class="header-anchor" href="#_1-setup-environment-and-run-android-app-or-android-demo" aria-hidden="true">#</a> 1. Setup Environment and Run Android App or Android Demo</h2><h3 id="_1-1-android-installation" tabindex="-1"><a class="header-anchor" href="#_1-1-android-installation" aria-hidden="true">#</a> 1.1 Android Installation</h3>',5),q={href:"https://developer.android.com/studio/install",target:"_blank",rel:"noopener noreferrer"},T=e("br",null,null,-1),O={href:"https://developer.android.com/about/versions/12/setup-sdk",target:"_blank",rel:"noopener noreferrer"},C={href:"https://developer.android.com/studio/releases/platforms",target:"_blank",rel:"noopener noreferrer"},E=e("li",null,[e("p",null,"Step 3: Setup Android NDK and CMake - https://developer.android.com/studio/projects/install-ndk")],-1),j=e("h3",{id:"_1-2-compile-and-build",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-2-compile-and-build","aria-hidden":"true"},"#"),a(" 1.2 Compile and Build")],-1),K={href:"https://github.com/FedML-AI/MNN",target:"_blank",rel:"noopener noreferrer"},z=e("code",null,"FedML/android/fedmlsdk/MobileNN/MNN",-1),B=t('<img src="'+d+'" alt="drawing" style="width:400px;"><ul><li>Compile and Build Android NDK layer by clicking &quot;Make Project&quot;</li></ul><img src="'+l+'" alt="drawing"><ul><li>Start to run if your Android smartphone is connected properly.</li></ul><img src="'+p+'" alt="drawing"><h2 id="_2-bind-fedml-android-app-to-fedml-mlops-platform" tabindex="-1"><a class="header-anchor" href="#_2-bind-fedml-android-app-to-fedml-mlops-platform" aria-hidden="true">#</a> 2. Bind FedML Android App to FedML MLOps Platform</h2><p>This section guides you through 1) installing Android Apk, 2) binding your Android smartphone devices to FedML MLOps Platform, and 3) set the data path for training.</p><h3 id="_2-1-connect-android-app-with-fedml-mlops-platform" tabindex="-1"><a class="header-anchor" href="#_2-1-connect-android-app-with-fedml-mlops-platform" aria-hidden="true">#</a> 2.1 Connect Android App with FedML MLOps Platform</h3>',8),$={href:"https://github.com/FedML-AI/FedML/tree/master/android/app",target:"_blank",rel:"noopener noreferrer"},H={href:"https://open.fedml.ai",target:"_blank",rel:"noopener noreferrer"},U=e("code",null,"Edge Devices",-1),V=e("strong",null,"My Edge Devices",-1),Y=e("strong",null,"Account ID:XXX",-1),J=t('<img src="'+c+`" alt="image-20220427204703095" style="zoom:67%;"><p>You can also see the binding devices in <strong>My Edge Devices</strong> list on the web page.</p><h2 id="_3-install-synthetic-data-and-set-the-data-path" tabindex="-1"><a class="header-anchor" href="#_3-install-synthetic-data-and-set-the-data-path" aria-hidden="true">#</a> 3 Install Synthetic Data and Set the Data Path</h2><h3 id="_3-1-transferring-data-to-mobile-devices" tabindex="-1"><a class="header-anchor" href="#_3-1-transferring-data-to-mobile-devices" aria-hidden="true">#</a> 3.1 Transferring data to mobile devices</h3><p>You can download the required data and transfer it to the specified directory of the device with the following command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># under \`FedML/android/data\` folder</span>
<span class="token function">bash</span> prepare.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>prepare.sh</code> is as follows:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">MNIST_DIR</span><span class="token operator">=</span>mnist
<span class="token assign-left variable">CIFAR10_DIR</span><span class="token operator">=</span>cifar10
<span class="token assign-left variable">ANDROID_DIR</span><span class="token operator">=</span>/sdcard/ai.fedml

<span class="token function">rm</span> <span class="token parameter variable">-rf</span> <span class="token variable">$MNIST_DIR</span>
<span class="token function">mkdir</span> <span class="token variable">$MNIST_DIR</span>
<span class="token function">wget</span> http://yann.lecun.com/exdb/mnist/train-images-idx3-ubyte.gz <span class="token parameter variable">-P</span> <span class="token variable">$MNIST_DIR</span>
<span class="token function">wget</span> http://yann.lecun.com/exdb/mnist/train-labels-idx1-ubyte.gz <span class="token parameter variable">-P</span> <span class="token variable">$MNIST_DIR</span>

<span class="token function">rm</span> <span class="token parameter variable">-rf</span> <span class="token variable">$CIFAR10_DIR</span>
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> cifar-10-binary.tar.gz
<span class="token function">wget</span> <span class="token function">wget</span> https://www.cs.toronto.edu/~kriz/cifar-10-binary.tar.gz
<span class="token function">tar</span> <span class="token parameter variable">-xzvf</span> cifar-10-binary.tar.gz
<span class="token function">mv</span> cifar-10-batches-bin <span class="token variable">$CIFAR10_DIR</span>

adb push <span class="token variable">$MNIST_DIR</span> <span class="token variable">$ANDROID_DIR</span>
adb push <span class="token variable">$CIFAR10_DIR</span> <span class="token variable">$ANDROID_DIR</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The MNIST dataset folder and the CIFAR-10 dataset folder can be moved to <code>/sdcard/ai</code> by running the above script.</p><h3 id="_3-2-set-the-data-path" tabindex="-1"><a class="header-anchor" href="#_3-2-set-the-data-path" aria-hidden="true">#</a> 3.2 Set the Data Path</h3><img src="`+o+'" alt="image-20220428113930309" style="width:350px;margin:0 auto;"><p>To set data path on your device, click the top green bar. Set it as the path to the corresponding dataset moved to the Android device (find the folder name starting from ai.fedml).</p><h4 id="_3-deploy-fl-server" tabindex="-1"><a class="header-anchor" href="#_3-deploy-fl-server" aria-hidden="true">#</a> 3. <strong>Deploy FL Server</strong></h4>',13),X={href:"https://open.fedml.ai",target:"_blank",rel:"noopener noreferrer"},W=e("li",null,[e("p",null,"Run local test fo")],-1),G=e("li",null,[e("p",null,'Build Python Server Package and Upload to FedML MLOps Platform ("Create Application")')],-1),Q={href:"https://github.com/FedML-AI/FedML/tree/master/python/quick_start/beehive",target:"_blank",rel:"noopener noreferrer"},Z=t(`<ol><li>First, you need to have sanity check of this example to make it bug free. By default, the server code example is bug free.</li></ol><p>Note that this example relies on MNN library (https://pypi.org/project/MNN/). It can only support python 3.7. So make sure to test this server code example under python 3.7 environment.</p><ol start="2"><li>Second, please build the server package by running the following command:</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>bash build_mlops_pkg.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>After correct execution, you can find the package <code>server-package.zip</code> under <code>mlops</code> folder.</p><ol start="3"><li>Then you need to upload the <code>server-package.zip</code> package to FedML MLOps Platform as the UI shown below.</li></ol><img src="`+u+'">',7),ee={href:"https://open.fedml.ai",target:"_blank",rel:"noopener noreferrer"},ae=t(`<p>Steps at MLOps: create group -&gt; create project -&gt; create run -&gt; select application (the one we uploaded server package for Android) -&gt; start run</p><p>On the Android side, you will see training status if every step works correctly.</p><h2 id="_4-get-started-with-integrating-android-sdk-for-your-host-app" tabindex="-1"><a class="header-anchor" href="#_4-get-started-with-integrating-android-sdk-for-your-host-app" aria-hidden="true">#</a> 4. Get Started with Integrating Android SDK for Your Host App</h2><p><code>android/fedmlsdk_demo</code> is a short tutorial for integrating Android SDK for your host App.</p><ol><li>add repositories by maven</li></ol><div class="language-groovy line-numbers-mode" data-ext="groovy"><pre class="language-groovy"><code>    maven <span class="token punctuation">{</span> url <span class="token string">&#39;https://s01.oss.sonatype.org/content/repositories/snapshots&#39;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>add dependency in build.gradle</li></ol><p>check <code>android/fedmlsdk_demo/build.gradle</code> as an example:</p><div class="language-groovy line-numbers-mode" data-ext="groovy"><pre class="language-groovy"><code>    implementation <span class="token string">&#39;ai.fedml:fedml-edge-android:1.1.0-SNAPSHOT&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>add FedML account id to meta-data in AndroidManifest.xml</li></ol><p>check <code>android/fedmlsdk_demo/src/main/AndroidManifest.xml</code> as an example:</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta-data</span> <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fedml_account<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">android:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>208<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>or</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta-data</span> <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fedml_account<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">android:</span>resource</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@string/fed_ml_account<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>You can find your account ID at FedML Open Platform (https://open.fedml.ai): <img src="`+m+`" alt="account"></p><ol start="4"><li>initial FedML Android SDK on your <code>Application</code> class.</li></ol><p>Taking <code>android/fedmlsdk_demo/src/main/java/ai/fedml/edgedemo/App.java</code> as an example:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">ai<span class="token punctuation">.</span>fedml<span class="token punctuation">.</span>edgedemo</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">android<span class="token punctuation">.</span>app<span class="token punctuation">.</span></span><span class="token class-name">Application</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">android<span class="token punctuation">.</span>os<span class="token punctuation">.</span></span><span class="token class-name">Handler</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">android<span class="token punctuation">.</span>os<span class="token punctuation">.</span></span><span class="token class-name">Looper</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">ai<span class="token punctuation">.</span>fedml<span class="token punctuation">.</span>edge<span class="token punctuation">.</span></span><span class="token class-name">FedEdgeManager</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Application</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Handler</span> sHandler <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Handler</span><span class="token punctuation">(</span><span class="token class-name">Looper</span><span class="token punctuation">.</span><span class="token function">getMainLooper</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onCreate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">onCreate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">// initial Edge SDK</span>
        <span class="token class-name">FedEdgeManager</span><span class="token punctuation">.</span><span class="token function">getFedEdgeApi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">// set data path (to prepare data, please check this script \`android/data/prepare.sh\`)</span>
        <span class="token class-name">FedEdgeManager</span><span class="token punctuation">.</span><span class="token function">getFedEdgeApi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setPrivatePath</span><span class="token punctuation">(</span><span class="token class-name">Environment</span><span class="token punctuation">.</span><span class="token function">getExternalStorageDirectory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token operator">+</span> <span class="token string">&quot;/ai.fedml/device_1/user_0&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-android-sdk-apis" tabindex="-1"><a class="header-anchor" href="#_5-android-sdk-apis" aria-hidden="true">#</a> 5. Android SDK APIs</h2><p>At the current stage, we provide high-level APIs with the following three classes.</p><ul><li>ai.fedml.edge.FedEdgeManager</li></ul><p>This is the top APIs in FedML Android SDK, it supports core training engine and related control commands on your Android devices.</p><ul><li>ai.fedml.edge.OnTrainProgressListener</li></ul><p>This is the message flow to interact between FedML Android SDK and your host APP.</p><ul><li>ai.fedml.edge.request.RequestManager</li></ul><p>This is used to connect your Android SDK with FedML Open Platform (https://open.fedml.ai), which helps you to simplify the deployment, edge collaborative training, experimental tracking, and more.</p><p>You can import them in your Java/Android projects as follows. See <a href="fedmlsdk_demo/src/main/java/ai/fedml/edgedemo/ui/main/MainFragment.java">android/fedmlsdk_demo/src/main/java/ai/fedml/edgedemo/ui/main/MainFragment.java</a> as an example.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import ai.fedml.edge.FedEdgeManager;
import ai.fedml.edge.OnTrainProgressListener;
import ai.fedml.edge.request.RequestManager;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="need-more-help" tabindex="-1"><a class="header-anchor" href="#need-more-help" aria-hidden="true">#</a> Need More Help?</h2><p>Join the Community:</p>`,30),ne={href:"https://join.slack.com/t/fedml/shared_invite/zt-havwx1ee-a1xfOUrATNfc9DFqU~r34w",target:"_blank",rel:"noopener noreferrer"},se={href:"https://discord.gg/9xkW8ae6RV",target:"_blank",rel:"noopener noreferrer"};function te(oe,ie){const n=k("ExternalLinkIcon");return g(),v("div",null,[f,_,M,e("p",null,[a("Android Client (App) and SDK: "),e("a",y,[a("https://github.com/FedML-AI/FedML/tree/master/android"),s(n)])]),e("ul",null,[e("li",null,[e("p",null,[a("App: "),e("a",A,[a("https://github.com/FedML-AI/FedML/tree/master/android/app"),s(n)])])]),e("li",null,[e("p",null,[a("fedmlsdk_demo: "),e("a",x,[a("https://github.com/FedML-AI/FedML/tree/master/android/fedmlsdk_demo"),s(n)])])]),e("li",null,[e("p",null,[a("Android SDK layer (Java API + JNI + So library): "),e("a",L,[a("https://github.com/FedML-AI/FedML/tree/master/android/fedmlsdk"),s(n)])])]),e("li",null,[e("p",null,[a("MobileNN: FedML Mobile Training Engine Layer (C++, MNN, PyTorch, etc.): "),w,e("a",F,[a("https://github.com/FedML-AI/FedML/tree/master/android/fedmlsdk/MobileNN"),s(n)]),a(),I,e("a",N,[a("https://github.com/FedML-AI/MNN"),s(n)]),a(),D,e("a",S,[a("https://github.com/FedML-AI/pytorch"),s(n)])])])]),e("p",null,[a("Python Server: "),e("a",P,[a("https://github.com/FedML-AI/FedML/tree/master/python/quick_start/beehive"),s(n)])]),R,e("ul",null,[e("li",null,[e("p",null,[a("Step 1: Install Android Studio - "),e("a",q,[a("https://developer.android.com/studio/install"),s(n)])])]),e("li",null,[e("p",null,[a("Step 2: Setup Android SDK "),T,e("a",O,[a("https://developer.android.com/about/versions/12/setup-sdk"),s(n)]),e("a",C,[a("https://developer.android.com/studio/releases/platforms"),s(n)]),a(" (we are using API 32 starting from August 2022)")])]),E]),j,e("ul",null,[e("li",null,[a("Clone customized MNN library ("),e("a",K,[a("https://github.com/FedML-AI/MNN"),s(n)]),a(") into "),z,a(" (shown as below)")])]),B,e("p",null,[a("After installing FedML Android App ("),e("a",$,[a("https://github.com/FedML-AI/FedML/tree/master/android/app"),s(n)]),a("), please go to the MLOps platform ("),e("a",H,[a("https://open.fedml.ai"),s(n)]),a(") - Beehive and switch to the "),U,a(" page, you can see a list of "),V,a(" at the bottom, as well as a QR code and "),Y,a(" at the top right.")]),J,e("ul",null,[e("li",null,[e("p",null,[a("Create an account at FedML MLOps Platform ("),e("a",X,[a("https://open.fedml.ai"),s(n)]),a(")")])]),W,G]),e("p",null,[a("Our example code is provided at: "),e("a",Q,[a("https://github.com/FedML-AI/FedML/tree/master/python/quick_start/beehive"),s(n)])]),Z,e("ul",null,[e("li",null,[a("Launch the training by using FedML MLOps ("),e("a",ee,[a("https://open.fedml.ai"),s(n)]),a(")")])]),ae,e("p",null,[a("Slack: "),e("a",ne,[a("https://join.slack.com/t/fedml/shared_invite/zt-havwx1ee-a1xfOUrATNfc9DFqU~r34w"),s(n)])]),e("p",null,[a("Discord: "),e("a",se,[a("https://discord.gg/9xkW8ae6RV"),s(n)])])])}const le=h(b,[["render",te],["__file","cross_device_android_example.html.vue"]]);export{le as default};
