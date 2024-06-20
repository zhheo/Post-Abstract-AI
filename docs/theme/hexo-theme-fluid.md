# hexo-theme-fluid

## 安装教程

你需要插入自定义js和css，插入教程详见：

[自定义js和css](https://hexo.fluid-dev.com/docs/guide/#%E8%87%AA%E5%AE%9A%E4%B9%89-js-css-html)

```yaml
# 指定自定义 js 文件路径，路径是相对 source 目录
custom_js: 
    https://ai.tianli0.top/static/public/tianli_gpt.min.js

# 指定自定义 css 文件路径，路径是相对 source 目录
custom_css: 
    https://ai.tianli0.top/static/public/tianli_gpt.min.css

# 自定义 <head> 节点中的 HTML 内容
custom_head: '<script>let tianliGPT_postSelector = '#board .post-content';let tianliGPT_key = '5Q5mpqRK5DkwT1X9Gi5e';</script>'
```