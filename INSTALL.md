## VUE + ElementUI + Webpack 项目搭建

### VUE
vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。

### ElementUI
一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库。

### Webpack

WebPack可以看做是模块打包机：它做的事情是，分析你的项目结构，找到JavaScript模块以及其它的一些浏览器不能直接运行的拓展语言（Scss，TypeScript等），并将其打包为合适的格式以供浏览器使用。

今的很多网页其实可以看做是功能丰富的应用，它们拥有着复杂的JavaScript代码和一大堆依赖包。为了简化开发的复杂度，前端社区涌现出了很多好的实践方法a:模块化，让我们可以把复杂的程序细化为小的文件;b:类似于TypeScript这种在JavaScript基础上拓展的开发语言：使我们能够实现目前版本的JavaScript不能直接使用的特性，并且之后还能能装换为JavaScript文件使浏览器可以识别；c:scss，less等CSS预处理器.........这些改进确实大大的提高了我们的开发效率，但是利用它们开发的文件往往需要进行额外的处理才能让浏览器识别,而手动处理又是非常反锁的，这就为WebPack类的工具的出现提供了需求。

### 基础工具

### npm工具
推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。

#### 本地安装

`npm install vue/cli@3.2.1`

#### 全局安装

`npm install -g vue/cli@3.2.1`

#### 已经安装的包
`npm list --depth 0`

#### 查看全局已经安装的包
`npm list -g --depth 0`

### 方案1:使用[vue-cli@3](httpshttps://github.com/ElementUI/vue-cli-plugin-element)搭建项目
此方案为官方推荐方案，提供项目管理后台，可管理多个项目，准备了相应的 Element 插件，快速简便。

#### 安装vue-cli, element-ui

```
// 如果已经安装vue 2.x版本的先卸载
npm uninstall vue-cli -g

// 安装vue 3.x版本
npm install -g @vue/cli

// 查看vue版本
vue -V

// 安装element ui
npm i element-ui -S
```

#### 创建项目
```
vue create xdapp-admin

? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, Router, Vuex, CSS Pre-processors, Linter, Unit
? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): Sass/SCSS
? Pick a linter / formatter config: Prettier
? Pick additional lint features: (Press <space> to select, <a> to toggle all, <i> to invert selection)Lint on save
? Pick a unit testing solution: Mocha
? Where do you prefer placing config for Babel, PostCSS, ESLint, etc.? In dedicated config files
? Save this as a preset for future projects? No

$ cd xdapp-admin

$ npm run serve  // 运行server

$ npm run build  // 生产环境执行
```

#### 项目引入emelent
```
vue add element

? How do you want to import Element? // Fully import
? Do you wish to overwrite Elements SCSS variables? // Yes
? Choose the locale you want to load// zh-CN

```
