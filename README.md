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

## 更新UniApp

- 更新到最新正式版

``` bash
npx @dcloudio/uvm
```

- 更新到最新 alpha 版

``` bash
npx @dcloudio/uvm alpha
```

- 更新到正式版指定版本

``` bash
npx @dcloudio/uvm 3.2.12.20211029
```

- 更新到 alpha 版指定版本

``` bash
npx @dcloudio/uvm 3.2.14.20211112-alpha
```

## 规范相关

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

  - `feat` 新增功能
  - `fix` 修复缺陷
  - `docs` 文档变更
  - `style` 代码格式
  - `refactor` 代码重构
  - `perf` 性能优化
  - `test` 添加疏漏测试或已有测试改动
  - `build` 构建流程、外部依赖变更 (如升级 npm 包、修改打包配置等)
  - `ci` 修改 CI 配置、脚本
  - `revert` 回滚 commit
  - `chore` 对构建过程或辅助工具和库的更改 (不影响源文件)
  - `wip` 正在开发中
  - `types` 类型定义文件修改

## 维护者

[@jsxiaosi](https://github.com/jsxiaosi)

## License

[MIT © 2022](./LICENSE)
