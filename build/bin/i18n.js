'use strict';

var fs = require('fs');
var path = require('path');
var langConfig = require('../../examples/i18n/page.json');

langConfig.forEach(lang => {//lang 例如：zh-CN
  try {
    fs.statSync(path.resolve(__dirname, `../../examples/pages/${lang.lang}`));
  } catch (e) {
    fs.mkdirSync(path.resolve(__dirname, `../../examples/pages/${lang.lang}`));
  }
  //获取 keys 例如 [index,component,theme]
  Object.keys(lang.pages).forEach(page => {
    //template 路径，其实就是vue 文件 +  <%= > 插值表达式
    var templatePath = path.resolve(__dirname, `../../examples/pages/template/${page}.tpl`);
    var outputPath = path.resolve(__dirname, `../../examples/pages/${lang.lang}/${page}.vue`);
    var content = fs.readFileSync(templatePath, 'utf8');
    var pairs = lang.pages[page];

    Object.keys(pairs).forEach(key => {
      //替换插值 ，new RegExp动态创建正则
      content = content.replace(new RegExp(`<%=\\s*${key}\\s*>`, 'g'), pairs[key]);
    });

    fs.writeFileSync(outputPath, content);
  });
});
