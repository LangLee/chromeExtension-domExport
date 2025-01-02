chrome.storage.sync.get(['targetDomId', 'titleDomId'], (result) => {
  console.log("storage loaded", result);
  try {
    // 选择要转换的DOM元素
    const element = document.getElementById(result.targetDomId || 'wiki_content');
    const wikiName = document.getElementById(result.titleDomId || 'wikiName');
  
    // 生成文件名
    const fileName = `${wikiName ? wikiName.innerText : 'file'}.pdf`;
  
    if (element) {
      // 设置元素的内边距
      element.style.padding = '16px';
  
      // 使用html2pdf库将元素转换为PDF
      html2pdf().from(element).save(fileName).then(() => {
        // 恢复元素的内边距
        element.style.padding = '0';
      }).catch((pdfError) => {
        console.error('Error saving PDF:', pdfError);
        alert('Failed to save PDF');
      });
    } else {
      console.error('指定的DOM元素未找到:', result.targetDomId);
      alert(`id为${result.targetDomId}的DOM元素未找到!`);
    }
  } catch (e) {
    console.error('Error in content.js:', e);
    alert('发生错误: ' + e.message);
  }
});