# 安装

TianliGPT适用于几乎所有主题，你可以轻松的更改几个变量，就可以让博客安装AI摘要。我尽可能的对安装过程进行简化，你可以尝试安装，安装成功后再购买Key。

## 通用教程

如果你的主题在文档中没有标注变量名或安装方法，可以尝试使用通用教程来自己适配，过程非常简单，有详细的图文教程。

[通用教程](/theme/custom)

## 主题适配

非常多的小伙伴提供了他们对应主题的安装教程，你可以更加轻松的去使用他们。

| 主题名称             | tianliGPT_postSelector         | tianliGPT_postURL | 备注 |
| -------------------- | ------------------------ | --- | --- |
| [hexo-theme-butterfly](./theme/hexo-theme-butterfly) | #post #article-container | 无需添加 | 无 |
| [hexo-theme-fluid](./theme/hexo-theme-fluid) | #board .post-content | 无需添加 | 无 |
| hexo-theme-next      | #posts .post-body        | 无需添加 | 无 |
| [hexo-theme-redefine](https://github.com/zhheo/Post-Abstract-AI/issues/42)      | .article-content.markdown-body       | 无需添加 | 无 |
| [hexo-theme-stellar](https://github.com/zhheo/Post-Abstract-AI/issues/1) | .md-text.content.post | 无需添加 | 无 |
| hexo-theme-volantis | #post #post-body | 无需添加 | 无 |
| [hexo-theme-solitude](./theme/hexo-theme-solitude) | #post #post-body | 无需添加 | 无 |
| hugo-theme-DoIt | .page.single:not(.special) .content | 无需添加 | 无 |
| [halo-theme-hao](./theme/halo-theme-hao) | 在后台配置 | 在后台配置 |
| halo-theme-xue | #container .article-content #lightGallery | 无需添加 | 无 |
| [wordpress: argon](./theme/wordpress-argon) | #post_content | 无需添加 | 无 |
| wordpress: 7B2 | #primary-home .entry-content | 修改里面的域名：`b2.7b2.com/*.html` | 无 |
| [wordpress：pix](https://github.com/zhheo/Post-Abstract-AI/issues/8) | .single-content | `https://*/*.html` | 无 |
| wordpress: Sakurairo | .post .entry-content | 无需添加 | 无 |
| [wordpress: 子比主题](./theme/wordpress-zibi) | .single-post .wp-posts-content | 无需添加 | 无 |
| wordpress: CorePress | .post-content-content | 无需添加 | 无 |
| [wordpress: OneNav](https://github.com/zhheo/Post-Abstract-AI/issues/14) | .post-template-default .panel-body | 无需添加 | 无 |
| [wordpress: ripro](https://github.com/zhheo/Post-Abstract-AI/issues/26) | .post-template-default .content-wrapper | 无需添加 | 无 |
| valaxy-theme-yun | .content .markdown-body | `*/posts/*` | 无 |
| [typecho-bearsimple](https://github.com/zhheo/Post-Abstract-AI/issues/29) | #post-content #bearsimple-images | 无需添加 | 无 |
| [typecho-bearhoney](https://github.com/zhheo/Post-Abstract-AI/issues/30) | .post-content-block .content | 无需添加 | 无 |
| [typecho-handsome](https://github.com/zhheo/Post-Abstract-AI/issues/12) | #postpage #md_handsome_origin | 无需添加 | 无 |
| [typecho-joe](https://github.com/zhheo/Post-Abstract-AI/issues/27) | .joe_post .joe_detail__article | 无需添加 | 无 |
| [typecho-void](https://github.com/zhheo/Post-Abstract-AI/issues/32) | .articleBody | 无需添加 | 无 |

如你撰写了你所用主题的适配教程，或者你是主题的开发者已经完成适配，可以联系`zhheo@qq.com`获取认证或收录教程。

<div class="img_container">

![已接入PostChat](/img/PostChat认证.svg) ![已接入文章摘要](/img/文章摘要认证.svg)
<style>
  .img_container p {
    display: flex; 
    gap: 8px;
  }
</style>
</div>



## 自行开发

如果你有前端编写能力，可以通过api开发属于自己的tianliGPT。你可以通过API文档实现自己想要的功能。

[前往API文档](/api)

## 教程投稿

如果您已经编写了关于TianliGPT部署的教程，欢迎投稿。

请联系`zhheo@qq.com`。