## 高级技巧

以下都是可选变量，如果能正常运行，可以不填写。添加方式就是在填写key的那一段代码的`</script>`之前添加即可。

例如：`<script>let tianliGPT_wordLimit = 2000; let tianliGPT_postURL = '*/p/*'; let tianliGPT_postSelector = '\#article-container';let tianliGPT_key = '这是你的key';</script>`

### tianliGPT_postURL

当主题存在其他页面和文章页面结构相同时，可以通过通配符url域名来实现只在指定域名中执行。

例如：`let tianliGPT_postURL = '*/p/*';`

只会在地址含有`/p/`的域名中执行。避免非文章页面添加。

### tianliGPT_wordLimit

⚠️危险：更改此变量损失已消耗过的key，因为你提交的内容发生了变化。

可以设置字数限制，默认为1000字。这意味着每个文章最多消耗你1000字符。你可以降低字符数来让扣费变得更少，也可以增加字符数让文章变得更准确。上限为5000，超过5000字符将被截断。

例如：`let tianliGPT_wordLimit = 1000;`