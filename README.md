# Uni-App

## 安装使用

- 获取项目代码（https or ssh）

```bash
git clone https://github.com/jsxiaosi/vue3-uni_app.git

git clone git@github.com:jsxiaosi/vue3-uni_app.git
```

或者通过[`xs-cli`](https://github.com/jsxiaosi/xs-cli)快速创建

```bash
npx @jsxiaosi/xs-cli create [project-name]
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

## &常见问题

### 1、在HBuilder中运行脚手架项目

在HBuilder中运行脚手架项目需要在HBuilder的cli安装依赖`npm install` / `yarn install`。如果项目要运行到App端，那么建议你再HBuilder中运行脚手架项目

### 2、运行时报错：You installed esbuild on another platform than the one you're currently using

``` bash
You installed esbuild on another platform than the one you're currently using.
00:23:04.503 This won't work because esbuild is written with native code and needs to
00:23:04.504 install a platform-specific binary executable.
00:23:04.519 Specifically the "esbuild-darwin-arm64" package is present but this platform
00:23:04.519 needs the "esbuild-darwin-64" package instead. People often get into this
00:23:04.535 situation by installing esbuild on Windows or macOS and copying "node_modules"
00:23:04.551 into a Docker image that runs Linux, or by copying "node_modules" between
00:23:04.552 Windows and WSL environments.
00:23:04.568 If you are installing with npm, you can try not copying the "node_modules"
00:23:04.585 directory when you copy the files over, and running "npm ci" or "npm install"
00:23:04.601 on the destination platform after the copy. Or you could consider using yarn
00:23:04.602 instead which has built-in support for installing a package on multiple
00:23:04.619 platforms simultaneously.
00:23:04.635 If you are installing with yarn, you can try listing both this platform and the
00:23:04.652 other platform in your ".yarnrc.yml" file using the "supportedArchitectures"
00:23:04.653 feature: https://yarnpkg.com/configuration/yarnrc/#supportedArchitectures
00:23:04.669 Keep in mind that this means multiple copies of esbuild will be present.
00:23:04.669 Another alternative is to use the "esbuild-wasm" package instead, which works
00:23:04.685 the same way on all platforms. But it comes with a heavy performance cost and
00:23:04.685 can sometimes be 10x slower than the "esbuild" package, so you may also not
```

造成这种原因是因为你的依赖是从外部的终端安装的，解决办法就是在HBuilder中使用`npm install` / `yarn install`重新安装依赖

### 3、使用pnpm 安装依赖在HBuilder中运行项目会报错

在HBuilder中使用pnpm安装依赖会产生一些未知报错，目前还没找到解决办法，所以在HBuilder中使用还是用`npm install` / `yarn install`安装依赖。如果项目不需要运行到App端那么可以剥离在HBuilder中运行项目

### 4、运行项目报错：fs_1.default.rmSync is not a function

手动删除运行打包文件夹`dist`或者在运行命令前添加上`npm run clean`

``` bash
"dev:mp-weixin": "npm run clean && uni -p mp-weixin"
```

[原文链接](https://ask.dcloud.net.cn/question/154572)

### 5、运行报错：CACError: Unknown option `--watch`

``` bash
throw new CACError(`Unknown option \`${name.length > 1 ? `--${name}` : `-${name}`}\``);
21:03:47.375           ^
21:03:47.379 CACError: Unknown option `--watch`
```

造成此问题请在HBuilder中打开manifest.json，在基础设置中找到Vue版本选择，是否已经选择到Vue3编译

### 6、运行带有nvue项目报错：No matching export in "dist/dev/.nvue/--/--/--/.js" for import "default"

``` bash
X [ERROR] No matching export in "dist/dev/.nvue/pages/index/index.js" for import "default"  

    <stdin>:1:7:  
      1 │ import App from './pages/index/index.js'  
        ╵        ~~~  

[plugin:uni:app-nvue-esbuild] Build failed with 1 error:  
<stdin>:1:7: ERROR: No matching export in "dist/dev/.nvue/pages/index/index.js" for import "default"  
```

出现这种问题请暂时先把vite版本控制在3.2.4先不要升级到vite4.*，后续官方解决之后我在update

## 维护者

[@jsxiaosi](https://github.com/jsxiaosi)

## License

[MIT © 2022](./LICENSE)
