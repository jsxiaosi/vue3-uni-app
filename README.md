# Uni-App

## 安装使用

- 获取项目代码（https or ssh）

```bash
git clone https://github.com/jsxiaosi/vue3-uni_app.git

git clone git@github.com:jsxiaosi/vue3-uni_app.git
```

- 安装依赖

```bash
cd vue3-uni_app

npm install

# 建议不要直接使用 cnpm 安装以来，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
# 如果下载依赖慢可以使用淘宝镜像源安装依赖
npm install --registry=https://registry.npm.taobao.org

```

### 运行
- H5
```bash
npm run dev:h5
```
- 微信小程序
```bash
npm run dev:mp-weixin
```

### 打包

- H5
```bash
npm run build:h5
```
- 微信小程序
```bash
npm run build:mp-weixin
```

### 规范相关

- [esLint](https://eslint.org/) - js 语法检测
- [styleLint](https://stylelint.io/) - 样式语法检测
- [commitLint](https://commitlint.js.org/#/) - git commit 提交规范检测

## 如何贡献

**Pull Request:**

1. Fork 代码!
2. 创建自己的分支: `git checkout -b feature/xxxx`
3. 提交你的修改: `git commit -m 'feature: add xxxxx'`
4. 推送您的分支: `git push origin feature/xxxx`
5. 提交`pull request`

## Git 贡献提交规范

- 参考 [vue](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md) 规范

  - `feature` 增加新功能
  - `fixbug` 修复问题/BUG
  - `style` 不影响程序逻辑的代码修改(修改空白字符，格式缩进，补全缺失的分号等，没有改变代码逻辑)
  - `perf` 优化/性能提升
  - `refactor` 重构
  - `revert` 撤销修改
  - `docs` 文档/注释
  - `chore` 依赖更新/脚手架配置修改等

## 维护者

[@jsxiaosi](https://github.com/jsxiaosi)

## License

[MIT © 2022](./LICENSE)
