import{_ as s}from"./chunks/文章摘要认证.69624fa8.js";import{_ as n,o as a,c as l,Q as p}from"./chunks/framework.867ce416.js";const D=JSON.parse('{"title":"hexo-theme-solitude","description":"","frontmatter":{},"headers":[],"relativePath":"theme/hexo-theme-solitude.md","filePath":"theme/hexo-theme-solitude.md"}'),o={name:"theme/hexo-theme-solitude.md"},e=p('<h1 id="hexo-theme-solitude" tabindex="-1">hexo-theme-solitude <a class="header-anchor" href="#hexo-theme-solitude" aria-label="Permalink to &quot;hexo-theme-solitude&quot;">​</a></h1><div class="img_container"><p><img src="'+s+`" alt="已接入文章摘要"></p></div><p>详细配置信息前往 <a href="https://solitude-docs.efu.me/third_party/tianliai" target="_blank" rel="noreferrer">Solitude 文档</a> 查看。</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 文章摘要AI</span></span>
<span class="line"><span style="color:#6A737D;"># post abstract AI</span></span>
<span class="line"><span style="color:#85E89D;">post_ai</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">enable</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># 右侧显示的模型名称</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># Model name displayed on the right</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">modelName</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">GPT 4</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># key</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># 具体获取方法见文档</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># Specific acquisition method, see the document</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">key</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># 自介</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># talk</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">talk</span><span style="color:#E1E4E8;">: </span><span style="color:#6A737D;"># 我是 Efu 开发的摘要生成助理EfuGPT，EfuGPT在静态部署时进行摘要的撰写，并且在访客访问时通过EfuCorrection转译后的文本摘要实现工具。我在这里只负责已经生成的摘要显示，你无法与我直接沟通，但我可以回答一些预设的问题。</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># 随机文章按钮</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># Random post button</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">randomPost</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># 举报链接，不填不显示</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># Report link, do not fill in and do not display</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">report</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">https://efu.me/</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># 底部提示</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># Bottom tip</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">tips</span><span style="color:#E1E4E8;">: </span><span style="color:#6A737D;"># 此内容根据文章生成，并经过人工审核，仅用于文章内容的解释与总结</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 文章摘要AI</span></span>
<span class="line"><span style="color:#6A737D;"># post abstract AI</span></span>
<span class="line"><span style="color:#22863A;">post_ai</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">enable</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;"># 右侧显示的模型名称</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;"># Model name displayed on the right</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">modelName</span><span style="color:#24292E;">: </span><span style="color:#032F62;">GPT 4</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;"># key</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;"># 具体获取方法见文档</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;"># Specific acquisition method, see the document</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">key</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;"># 自介</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;"># talk</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">talk</span><span style="color:#24292E;">: </span><span style="color:#6A737D;"># 我是 Efu 开发的摘要生成助理EfuGPT，EfuGPT在静态部署时进行摘要的撰写，并且在访客访问时通过EfuCorrection转译后的文本摘要实现工具。我在这里只负责已经生成的摘要显示，你无法与我直接沟通，但我可以回答一些预设的问题。</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;"># 随机文章按钮</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;"># Random post button</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">randomPost</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;"># 举报链接，不填不显示</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;"># Report link, do not fill in and do not display</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">report</span><span style="color:#24292E;">: </span><span style="color:#032F62;">https://efu.me/</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;"># 底部提示</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;"># Bottom tip</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">tips</span><span style="color:#24292E;">: </span><span style="color:#6A737D;"># 此内容根据文章生成，并经过人工审核，仅用于文章内容的解释与总结</span></span></code></pre></div>`,4),t=[e];function c(r,E,i,y,d,h){return a(),l("div",null,t)}const u=n(o,[["render",c]]);export{D as __pageData,u as default};
