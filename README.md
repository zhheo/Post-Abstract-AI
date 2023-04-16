# Post-Abstract-AI

![](https://bu.dusays.com/2023/04/15/643a29d0cf651.png)

适用于博客的文章摘要生成器

最近研究AI在博客和文章领域的应用，发现AI摘要是一个很不错的方向，研究了很久给搞出来了。在这篇文章中，我将帮助大家如何让你的博客接入TianliGPT。

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
<link rel="stylesheet" href="https://cdn1.tianli0.top/gh/zhheo/Post-Abstract-AI@0.4/tianli_gpt.css">
<script>
let tianliGPT_postSelector = '#post #article-container';
let tianliGPT_key = '5Q5mpqRK5DkwT1X9Gi5e';
</script>
<script src="https://cdn1.tianli0.top/gh/zhheo/Post-Abstract-AI@0.4/tianli_gpt.js"></script>
```

如果你使用的是Butterfly主题，可以在主题文件夹下的`themes/butterfly/_config.yml`文件中的inject属性中配置：

```yaml
inject:
  head:
    - <link rel="stylesheet" href="https://cdn1.tianli0.top/gh/zhheo/Post-Abstract-AI@0.4/tianli_gpt.css">
  bottom:
    - <script>let tianliGPT_postSelector = '\#post \#article-container';let tianliGPT_key = '5Q5mpqRK5DkwT1X9Gi5e';</script>
    - <script src="https://cdn1.tianli0.top/gh/zhheo/Post-Abstract-AI@0.4/tianli_gpt.js"></script>
```

我们需要更改一些参数来让这个模型运作起来。

`tianliGPT_postSelector`和`tianliGPT_key`

### tianliGPT_postSelector

这个参数是填写你的博客文章所在的元素属性的选择器，在生成提交的文本时，只会将这个选择器对应的元素内的文本进行提交，并且在这个选择器对应的元素上放插入AI摘要。如果你使用的是Butterfly主题，那么为`#post #article-container`。

这里列出一些常见博客主题的选择器值（部分未经过测试，如果有问题欢迎反馈）：

| 主题名称             | tianliGPT_postSelector         |
| -------------------- | ------------------------ |
| hexo-theme-butterfly | #post #article-container |
| hexo-theme-next      | #posts .post-body        |
| hexo-theme-fluid | #board .post-content |
| hexo-theme-stellar | .md-text.content.post |

如果你没有在上面看到你的主题，可以到issues中提交你的主题名称，我会进行适配。

### tianliGPT_key

到[爱发电](https://afdian.net/item/f18c2e08db4411eda2f25254001e7c00)中购买，10元5万字符（限时折扣9元）。请求过的内容再次请求不会消耗key，可以无限期使用。

- 相比实时请求openai，使用tianliGPT可以让你请求过的内容不再消耗key，适合生产环境。
- 相比实时请求openai，使用tianliGPT可以在国内更快速的获取摘要。

- key消耗完毕，已经请求过的内容仍然可以继续请求，避免了被恶意请求造成的资金损失和业务停摆。

- 符合中国大陆法律法规。

购买完成后，添加机器人客服：2102916311，回复`/chat 你的key 你的博客地址注意保留最后的斜杠`

例如：

```
/chat 5Q5mpqRK5DkwT1X9Gi5e https://blog.zhheo.com/
```

即可绑定成功。

## 查询余额

向机器人客服再次发送绑定时的内容，会返回你剩余的tocken额度。

## 注意

key与博客地址为绑定状态，所以本地调试时是无法接收到数据的。

## 高级技巧

更多的参数变量详见[高级文档](/Advanced.md)

## 开发团队

[@张洪Heo](https://github.com/zhheo) [@Tianli](https://github.com/Tianli0)

## 技术支持请联系

zhheo@qq.com

针对此项目的任何技术支持与关于API的相关问题，可以联系此邮箱，会在24小时内回复。