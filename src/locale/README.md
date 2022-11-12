# i18n

前言：按照uni-app官方文档配置方法，如果项目组件或者模块数量较大，全部翻译堆积到一个文件里面后面想查找或者修改是非常难的，所以这里为了业务的翻译模块化，以及符合uni-app配置规范做了一些限制性的处理。

## 业务翻译

业务翻译处理是放在locale->en/ja/zh-Hans->modules目录里面，这里按照不同的业务创建不同的翻译文件，来编写业务翻译。创建的翻译文件会自动引入并且会把多级对象转成平级对象。

这么做的意义是为了迎合nvue页面。nvue页面不支持多层级对象引用i18n，所以打平结构

## JSON 翻译文件

locale->en/ja/zh-Hans.json文件是为了做page.json翻译。
文档中详细说明过：

``` base
pages.json不属于vue页面，其中的原生tabbar和原生导航栏里也有文字内容。这部分内容的国际化方案如下：

项目根目录的locale目录下配置语言json文件，locale/语言地区代码.json，如：en.json，zh-Hans.json，zh-Hant.json
```

由此可得 en.json，zh-Hans.json，ja.json文件还是必须要存在的，所以这里en.json，zh-Hans.json，ja.json单纯作为pages.json/manifest.json的翻译配置

文档地址：[page.json](https://uniapp.dcloud.net.cn/tutorial/i18n.html#pages)、[manifest.json](https://uniapp.dcloud.net.cn/tutorial/i18n.html#manifest)

### uni-app.*.json

uni-app.*.json为框架api翻译文件实现方式和文档一致：[框架内置组件和api国际化](https://uniapp.dcloud.net.cn/tutorial/i18n.html#%E6%A1%86%E6%9E%B6%E5%86%85%E7%BD%AE%E7%BB%84%E4%BB%B6%E5%92%8Capi%E5%9B%BD%E9%99%85%E5%8C%96)

## 使用官方配置方式

如果觉得这种配置方式过于复杂并且你认为不是很有必要那么按照以下方式更改

1. 删除文件
   - en、ja、zh-Hans目录
   - utils.ts文件
  
2. 修改locale->index.ts配置

``` base
import { createI18n } from 'vue-i18n';
import En from './en.json';
import Ja from './ja.json';
import ZhHans from './zh-Hans.json';

const messages = {
  en: En,
  ja: Ja,
  "zh-Hans": ZhHans,
}

const i18n = createI18n({
  locale: uni.getLocale(),
  legacy: false,
  globalInjection: true,
  messages: messages,
});

export default i18n;
```
