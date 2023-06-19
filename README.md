# Post-Abstract-AI

<p align="center">
  <img src="https://bu.dusays.com/2023/04/15/643a29d0cf651.png" />
  <br>
  <br>
  适用于绝大多数博客的文章摘要生成器
</p>


最近研究AI在博客和文章领域的应用，发现AI摘要是一个很不错的方向，研究了很久给搞出来了。在这篇文章中，我将帮助大家如何让你的博客接入TianliGPT。

![](https://bu.dusays.com/2023/04/18/643e3befa73d5.png)

## 什么是TianliGPT

TianliGPT是一个基于GPT-3.5的文字摘要生成工具，你可以将需要提取摘要的文本内容发送给TianliGPT，稍等一会他就可以给你发送一个基于这段文本内容的摘要。

- 实时生成的摘要
- 自动生成，无需人工干预
- 一次生成，再次生成无需消耗key
- 包含文字审核过滤，适用于中国大陆
- 支持中国大陆访问

## 如何部署TianliGPT

我们可以通过在网页中嵌入TianliGPT的服务支持，让TianliGPT能够获取到你需要提交的内容。

你需要在博客后面位置引入js和css（**引入的位置应该在文章之后**）

```html
<link rel="stylesheet" href="https://cdn1.tianli0.top/gh/zhheo/Post-Abstract-AI@0.8/tianli_gpt.css">
<script>
let tianliGPT_postSelector = '#post #article-container';
let tianliGPT_key = '5Q5mpqRK5DkwT1X9Gi5e';
</script>
<script src="https://cdn1.tianli0.top/gh/zhheo/Post-Abstract-AI@0.8/tianli_gpt.js"></script>
```

如果你使用的是Butterfly主题，可以在主题文件夹下的`themes/butterfly/_config.yml`文件中的inject属性中配置：

```yaml
inject:
  head:
    - <link rel="stylesheet" href="https://cdn1.tianli0.top/gh/zhheo/Post-Abstract-AI@0.8/tianli_gpt.css">
  bottom:
    - <script>let tianliGPT_postSelector = '\#post \#article-container';let tianliGPT_key = '5Q5mpqRK5DkwT1X9Gi5e';</script>
    - <script src="https://cdn1.tianli0.top/gh/zhheo/Post-Abstract-AI@0.8/tianli_gpt.js"></script>
```
如果开启了pjax，那么`<script src="...tianli_gpt.js"></script>`要添加data-pjax属性：`<script data-pjax src="...tianli_gpt.js"></script>`

我们需要更改一些参数来让这个模型运作起来。

`tianliGPT_postSelector`和`tianliGPT_key`

### tianliGPT_postSelector

这个参数是填写你的博客文章所在的元素属性的选择器，在生成提交的文本时，只会将这个选择器对应的元素内的文本进行提交，并且在这个选择器对应的元素上放插入AI摘要。如果你使用的是Butterfly主题，那么为`#post #article-container`。

这里列出一些常见博客主题的选择器值（部分未经过测试，如果有问题欢迎反馈）：

| 主题名称             | tianliGPT_postSelector         | tianliGPT_postURL | 备注 |
| -------------------- | ------------------------ | --- | --- |
| hexo-theme-butterfly | #post #article-container | 无需添加 | 无 |
| hexo-theme-fluid | #board .post-content | 无需添加 | 无 |
| hexo-theme-next      | #posts .post-body        | 无需添加 | 无 |
| hexo-theme-stellar | .md-text.content.post | 无需添加 | 无 |
| hexo-theme-volantis | #post #post-body | 无需添加 | 无 |
| wordpress: 7B2 | #primary-home .entry-content | 修改里面的域名：`b2.7b2.com/34000.html` | 无 |
| wordpress：pix | .single-content | `https://*/*.html` | 无 |
| wordpress: Sakurairo | .post .entry-content | 无需添加 | 无 |
| wordpress: 子比主题 | .single-post .wp-posts-content | 无需添加 | 无 |
| Siuyo/Ying | .post-content | `https://*/*.html` | 需使用[定制JS](/custom/README.md) |
| valaxy-theme-yun | .content .markdown-body | `*/posts/*` | 无 |
| typecho-handsome | #postpage #md_handsome_origin | 无需添加 | 无 |

如果你没有在上面看到你的主题，可以到issues中提交你的主题名称，我会进行适配。

### tianliGPT_key

到[爱发电](https://afdian.net/item/f18c2e08db4411eda2f25254001e7c00)中购买，10元5万字符（限时折扣9元）。请求过的内容再次请求不会消耗key，可以无限期使用。

- 相比实时请求openai，使用tianliGPT可以让你请求过的内容不再消耗key，适合生产环境。
- 相比实时请求openai，使用tianliGPT可以在国内更快速的获取摘要。

- key消耗完毕，已经请求过的内容仍然可以继续请求，避免了被恶意请求造成的资金损失和业务停摆。

- 符合中国大陆法律法规。

购买完成后，进入QQ频道：点击链接加入讨论子频道【TianliGPT 博客摘要】：https://pd.qq.com/s/7cx85i9l0

@咕哩咕哩 回复`/chat 你的key 你的博客地址注意保留最后的斜杠`

例如：

```
@咕哩咕哩 /chat 5Q5mpqRK5DkwT1X9Gi5e https://blog.zhheo.com/
```

![](https://bu.dusays.com/2023/06/19/648fb935438a4.png)

即可绑定成功。

## 高级技巧

更多的参数变量详见[高级文档](/Advanced.md)

## 升级版本

**⚠️ 非必要，不升级。**

基本上功能是固定下来的，本仓库作为提供稳定的基础服务，更新版本大多数情况是为了做兼容性，所以你的兼容性没有问题，是完全没有必要升级版本。

升级版本方式：只需要将js和css链接中的`@0.5`这种的版本号更改为最新的版本即可。

![](https://bu.dusays.com/2023/04/19/643f7028bce50.png)

最新版本的位置：

![](https://bu.dusays.com/2023/04/19/643f709998402.png)

## 开发团队

[@张洪Heo](https://github.com/zhheo) [@Tianli](https://github.com/Tianli0)

## 技术支持请联系

zhheo@qq.com

点击链接加入讨论子频道【TianliGPT 问题交流】：https://pd.qq.com/s/7cx85i9l0

针对此项目的任何技术支持与关于API的相关问题，可以联系此邮箱，会在24小时内回复。
