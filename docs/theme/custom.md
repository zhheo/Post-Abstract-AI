# 通用教程

这个教程是教你如何让自己的网页适配TianliGPT。

## 将代码插入到网页

我们需要将下面的代码插入到网页的任何位置。

```HTML
<link rel="stylesheet" href="https://ai.tianli0.top/static/public/tianli_gpt.min.css">
<script>
let tianliGPT_postSelector = '#post #article-container';
let tianliGPT_key = '5Q5mpqRK5DkwT1X9Gi5e';
</script>
<script src="https://ai.tianli0.top/static/public/tianli_gpt.min.js"></script>
```

我们可以观察一下代码，里面有**tianliGPT_postSelector**和**tianliGPT_key**这两个变量，我们需要更改里面的值来适配不同的主题，并且配置更多内容。

## 获取tianliGPT_postSelector

打开你的文章界面，按下`F12`键，打开开发者工具。

![](https://p.zhheo.com/EEdhvU22290881693362742498.png!blogimg)

点击选择器按钮。

![](https://p.zhheo.com/QzCimX25390881693362773087.png!blogimg)

然后鼠标选中到博客的文章。通过滑动鼠标尽可能的让方块涵盖文章中的所有内容。例如：

![](https://p.zhheo.com/UEujWb20790881693362787946.png!blogimg)

我的鼠标大致在红色的位置。

然后点击一下。我们可以看到这一行变灰了，说明被选中了。

![](https://p.zhheo.com/I1GSxv22890881693362808100.png!blogimg)

然后我们鼠标放在灰色部分，来检查选中的部分是否包含整个文章，但是不包含文章外的东西。

很显然，鼠标放在post行时，出现了下方的按钮被选中的情况。

![](https://p.zhheo.com/jdpnEp24090881693362820382.png!blogimg)

我们观察一些页面结构，发现post里面有多个结构，我们选择符合我们的要求的div元素。

![](https://p.zhheo.com/jCy8He21090881693362850466.png!blogimg)

我们发现这一行正好符合我们的要求。

- 包含了整个文章

- 不包含文章外的内容

我们右键单击，然后复制这一行的选择器：

![](https://p.zhheo.com/CjZKlk22290881693362862149.png!blogimg)

复制的内容就是我们的 tianliGPT_postSelector。

## 常见问题

### 在不应该出现摘要的界面出现了摘要

你可以再添加一个变量来实现只匹配文章url。这个是通过`tianliGPT_postURL`来实现。

你可以添加

```JavaScript
let tianliGPT_postURL = "";
```

其中双引号的内容为匹配的文章地址，支持通配符。例如在张洪Heo博客中，文章的地址通常为：

[https://blog.zhheo.com/p/8eb7249d.html](https://blog.zhheo.com/p/8eb7249d.html)

[https://blog.zhheo.com/p/463d306b.html](https://blog.zhheo.com/p/463d306b.html)

所以我们可以填写通用格式：`*/p/*.html`