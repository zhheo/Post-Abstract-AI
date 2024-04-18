# wordpress: 子比主题

以下内容引用自：[子比主题接入TianliGPT](https://blog.sakura.vin/1329.html)

## 如何部署TianliGPT

我们可以通过在网页中嵌入TianliGPT的服务支持，让TianliGPT能够获取到你需要提交的内容。

在博客任意位置引入以下代码（推荐放在Zibll主题设置→文章&列表→文章页面→在文章内容后-插入内容处，或者Zibll主题设置→全局&功能→自定义代码→自定义头部HTML代码处即可）：

```html
<link rel="stylesheet" href="https://cdn1.tianli0.top/gh/zhheo/Post-Abstract-AI@0.17/tianli_gpt.css">
<script>
let tianliGPT_postSelector ='.single-post .wp-posts-content';
let tianliGPT_key = '你购买的key';
</script>
<script src="https://cdn1.tianli0.top/gh/zhheo/Post-Abstract-AI@0.17/tianli_gpt.js"></script>
```

## 如何更改模块中的TianliGPT和AI摘要字样

下载JS文件到本地并以修改模式打开，找到第38行的AI摘要和第44行的TianliGPT，修改为你想要的内容，然后存至本地或者上传至云存储，并将`<script src="https://cdn1.tianli0.top/gh/zhheo/Post-Abstract-AI@0.17/tianli_gpt.js">`中的`https://cdn1.tianli0.top/gh/zhheo/Post-Abstract-AI@0.17/tianli_gpt.js`替换为新的地址即可。

![](https://p.zhheo.com/tUZWHm22390881693363883296.png!blogimg)