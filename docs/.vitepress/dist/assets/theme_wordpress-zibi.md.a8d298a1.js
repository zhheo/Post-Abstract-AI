import{_ as s,o as a,c as t,Q as n}from"./chunks/framework.867ce416.js";const g=JSON.parse('{"title":"wordpress: 子比主题","description":"","frontmatter":{},"headers":[],"relativePath":"theme/wordpress-zibi.md","filePath":"theme/wordpress-zibi.md"}'),l={name:"theme/wordpress-zibi.md"},p=n(`<h1 id="wordpress-子比主题" tabindex="-1">wordpress: 子比主题 <a class="header-anchor" href="#wordpress-子比主题" aria-label="Permalink to &quot;wordpress: 子比主题&quot;">​</a></h1><p>以下内容引用自：[子比主题接入TianliGPT](<a href="https://blog.sakura.vin/1329.html" target="_blank" rel="noreferrer">https://blog.sakura.vin/1329.html</a></p><h2 id="如何部署tianligpt" tabindex="-1">如何部署TianliGPT <a class="header-anchor" href="#如何部署tianligpt" aria-label="Permalink to &quot;如何部署TianliGPT&quot;">​</a></h2><p>我们可以通过在网页中嵌入TianliGPT的服务支持，让TianliGPT能够获取到你需要提交的内容。</p><p>在博客任意位置引入以下代码（推荐放在Zibll主题设置→文章&amp;列表→文章页面→在文章内容后-插入内容处，或者Zibll主题设置→全局&amp;功能→自定义代码→自定义头部HTML代码处即可）：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">link</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">rel</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;stylesheet&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">href</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;https://cdn1.tianli0.top/gh/zhheo/Post-Abstract-AI@0.12/tianli_gpt.css&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> tianliGPT_postSelector </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;.single-post .wp-posts-content&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> tianliGPT_key </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;你购买的key&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;https://cdn1.tianli0.top/gh/zhheo/Post-Abstract-AI@0.12/tianli_gpt.js&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">link</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">rel</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;stylesheet&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">href</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;https://cdn1.tianli0.top/gh/zhheo/Post-Abstract-AI@0.12/tianli_gpt.css&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> tianliGPT_postSelector </span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;.single-post .wp-posts-content&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> tianliGPT_key </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;你购买的key&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;https://cdn1.tianli0.top/gh/zhheo/Post-Abstract-AI@0.12/tianli_gpt.js&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="如何更改模块中的tianligpt和ai摘要字样" tabindex="-1">如何更改模块中的TianliGPT和AI摘要字样 <a class="header-anchor" href="#如何更改模块中的tianligpt和ai摘要字样" aria-label="Permalink to &quot;如何更改模块中的TianliGPT和AI摘要字样&quot;">​</a></h2><p>下载JS文件到本地并以修改模式打开，找到第38行的AI摘要和第44行的TianliGPT，修改为你想要的内容，然后存至本地或者上传至云存储，并将<code>&lt;script src=&quot;https://cdn1.tianli0.top/gh/zhheo/Post-Abstract-AI@0.11/tianli_gpt.js&quot;&gt;</code>中的<code>https://cdn1.tianli0.top/gh/zhheo/Post-Abstract-AI@0.11/tianli_gpt.js</code>替换为新的地址即可。</p><p><img src="https://p.zhheo.com/tUZWHm22390881693363883296.png!blogimg" alt=""></p>`,9),o=[p];function e(r,c,i,E,y,h){return a(),t("div",null,o)}const _=s(l,[["render",e]]);export{g as __pageData,_ as default};
