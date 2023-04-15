console.log("\n %c Post-Abstract-AI 开源博客文章摘要AI生成工具 %c https://github.com/zhheo/Post-Abstract-AI \n", "color: #fadfa3; background: #030307; padding:5px 0;", "background: #fadfa3; padding:5px 0;")

function insertAIDiv(selector) {
  // 获取目标元素
  const targetElement = document.querySelector(selector);

  // 如果没有找到目标元素，不执行任何操作
  if (!targetElement) {
    return;
  }

  // 创建要插入的HTML元素
  const aiDiv = document.createElement('div');
  aiDiv.className = 'post-TianliGPT';

  const aiTitleDiv = document.createElement('div');
  aiTitleDiv.className = 'tianliGPT-title';
  aiDiv.appendChild(aiTitleDiv);

  const aiIcon = document.createElement('i');
  aiIcon.className = 'heofont icon-jiqiren tianliGPT-title-icon';
  aiTitleDiv.appendChild(aiIcon);

  const aiTitleTextDiv = document.createElement('div');
  aiTitleTextDiv.className = 'tianliGPT-title-text';
  aiTitleTextDiv.textContent = 'AI摘要';
  aiTitleDiv.appendChild(aiTitleTextDiv);

  const aiTagDiv = document.createElement('div');
  aiTagDiv.className = 'tianliGPT-tag';
  aiTagDiv.id = 'tianliGPT-tag';
  aiTagDiv.textContent = 'TianliGPT';
  aiTitleDiv.appendChild(aiTagDiv);

  const aiExplanationDiv = document.createElement('div');
  aiExplanationDiv.className = 'tianliGPT-explanation';
  aiExplanationDiv.innerHTML = '生成中...' + '<span class="blinking-cursor"></span>';
  aiDiv.appendChild(aiExplanationDiv); // 将 tianliGPT-explanation 插入到 aiDiv，而不是 aiTitleDiv

  // 将创建的元素插入到目标元素的顶部
  targetElement.insertBefore(aiDiv, targetElement.firstChild);
}



var tianliGPT = {
  //读取文章中的所有文本
  getTitleAndContent: function() {
    const title = document.title;
    const container = document.querySelector(tianliGPT_postSelector);
    const paragraphs = container.getElementsByTagName('p');
    const headings = container.querySelectorAll('h1, h2, h3, h4, h5');
    let content = '';
  
    for (let h of headings) {
      content += h.innerText + ' ';
    }
  
    for (let p of paragraphs) {
      // 移除包含'http'的链接
      const filteredText = p.innerText.replace(/https?:\/\/[^\s]+/g, '');
      content += filteredText;
    }
  
    const combinedText = title + ' ' + content;
    const truncatedText = combinedText.slice(0, 1000);
    return truncatedText;
  },
  fetchTianliGPT: async function(content) {
    const apiUrl = `https://summary.tianli0.top/?content=${encodeURIComponent(content)}&key=${encodeURIComponent(tianliGPT_key)}`;
    const timeout = 20000; // 设置超时时间（毫秒）
  
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), timeout);
  
      const response = await fetch(apiUrl, { signal: controller.signal });
  
      if (response.ok) {
        const data = await response.json();
        return data.summary;
      } else {
        throw new Error('请求失败');
      }
    } catch (error) {
      if (error.name === 'AbortError') {
        console.error('请求超时');
      } else {
        console.error('请求失败：', error);
      }
      return '获取文章摘要超时。当你出现这个问题时，可能是因为文章过长导致的AI运算量过大， 您可以稍等一下然后重新切换到TianliGPT模式，或者尝试使用HeoGPT模式。';
    }
  },
}

function runTianliGPT() {
  insertAIDiv(tianliGPT_postSelector);
  const content = tianliGPT.getTitleAndContent();
  tianliGPT.fetchTianliGPT(content).then(summary => {
    const aiExplanationDiv = document.querySelector('.tianliGPT-explanation');
    aiExplanationDiv.innerHTML = summary;
  })
}

runTianliGPT();