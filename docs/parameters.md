# 配置参数

TianliGPT可以配置你想要的参数。

以下都是可选变量，如果能正常运行，可以不填写。添加方式就是在填写key的那一段代码的`</script>`之前添加即可。

![](/img/advanced.png)

例如：

```HTML
<script>

let tianliGPT_wordLimit = 2000;

let tianliGPT_postURL = '*/p/*';

let tianliGPT_postSelector = '\#article-container';

let tianliGPT_key = '这是你的key';

</script>
```

### tianliGPT_postURL

当主题存在其他页面和文章页面结构相同时，可以通过通配符url域名来实现只在指定域名中执行。

例如：`let tianliGPT_postURL = '*/p/*';`

只会在地址含有`/p/`的域名中执行。避免非文章页面添加。

支持正则表达式，要求格式为`/`开头和`/`结尾。例如：`let tianliGPT_postURL = "/^https?://[^/]+/[0-9]{4}/[0-9]{2}/[0-9]{2}/"`

### tianliGPT_blacklist

当你有一些页面不想要使用文章摘要，那么你可以将所有的黑名单放入一个json文件中。例如`blacklist.json`

```json
{
  "blackurls": [
    "https://example.com/somepath/*",
    "https://*.example.com/",
    "https://www.example.org/specificpage.html",
    "http://127.0.0.1:5500/dev.html"
  ]
}
```
然后添加`tianliGPT_blacklist`变量，将json文件的地址放入进去，例如：

`let tianliGPT_blacklist = 'https://example.com/blacklist.json'`

### tianliGPT_wordLimit

⚠️危险：更改此变量损失已消耗过的key，因为你提交的内容发生了变化。

可以设置提交的字数限制，默认为1000字。这意味着每个文章最多消耗你1000字符（因为只有提交扣费，生成文本不扣费）。你可以降低字符数来让扣费变得更少，也可以增加字符数让文章变得更准确。上限为5000，超过5000字符将被截断。

例如：`let tianliGPT_wordLimit = 1000;`

### tianliGPT_typingAnimate

当此变量为false时，那么不执行打字动画。

例如：`let tianliGPT_typingAnimate = false;`

### tianliGPT_Title

当设置此变量后，TianGPT顶部的名称“AI摘要”可以被修改。

例如：`let tianliGPT_Title = '宇宙无敌智能摘要';`

### tianliGPT_injectDom

当设置此变量后，文章摘要将不插入到文章之前，而是此变量对应的节点之前。

例如：`let tianliGPT_injectDom = '.ai-content';`