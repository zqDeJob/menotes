# grafana 相关

## 软件的介绍与使用

这里不过多介绍，网上有很多使用用例

比如：

[Grafana的介绍与使用](https://zhuanlan.zhihu.com/p/689527911)

[Grafana的使用教程](https://blog.csdn.net/weixin_44462773/article/details/135843318)

[Grafana快速入门指南上篇](https://www.cnblogs.com/almco/p/18692589)


## 软件的二次开发（前端部分）

github 仓库地址：[https://github.com/grafana/grafana](https://github.com/grafana/grafana)

::: tip 注意，二次开发优先查看这个文档

[适用于 Windows 环境的 Grafana 设置指南](https://grafana.com/blog/2021/03/03/how-to-set-up-a-grafana-development-environment-on-a-windows-pc-using-wsl/)
[开发人员指南](https://github.com/grafana/grafana/blob/v11.5.x/contribute/developer-guide.md)

:::

### 安装

官方推荐使用yarn安装，源码里有lock

```
git clone https://github.com/grafana/grafana.git
cd grafana
yarn install --immutable
```

### 结构说明

```
grafana
├─ public
│ └─ app
│ └─ dashboards
│ └─ emails // 用于存放 Grafana 发送邮件时使用的模板文件，例如报警通知邮件的模板
│ └─ fonts
│ └─ gazetteer
│ └─ img // 存放 Grafana 的静态图片资源，例如图标、背景图等
│ └─ lib
│ └─ locales // 包含多语言支持的本地化文件
│ └─ maps
│ └─ sass // 包含 Grafana 的 CSS 样式文件，用于定义前端界面的样式
│ └─ swagger
│ └─ test
│ └─ vendor // 存放第三方库或框架的静态资源，例如 jQuery、React 等
│ └─ views
├─ docs
└─ package.json
```

#### package.json 中常用命令

```
"scripts": {
    "dev": ... // 启动项目
    "start": ... // 启动项目 + 热更新
    "storybook": ... // 查看文档说明
    "ci": ... // 单元测试
    "build": ... // 打包
    "build:nominify": ... // 打包 + 不压缩
    "build:stats": ... // 打包 + 体积/依赖关系等统计信息
}
```

<b>构建模块</b>

要构建和查看所有这些插件，您可以运行以下命令。请注意，这可能会占用大量资源，因为它将为每个插件启动单独的构建过程。

`yarn plugin:build:dev`

相反，如果您想要构建和监视特定插件，则可以运行以下命令。确保将<name_of_plugin>替换为其 package.json 中的插件名称字段。例如@grafana-plugins/tempo 。

`yarn workspace @grafana-plugins/tempo dev`

## 错误及解决方案

::: tip 

如果在项目运行过程中遇到了类似问题，可以参考下以下解决方案

:::


::: details 如果您收到来自链接的依赖项的错误 `The remote archive doesn't match the expected checksum`

这是暂时的不匹配。要解决此错误（当有人纠正此问题时），您可以在yarn install --immutable命令前加上YARN_CHECKSUM_BEHAVIOR=update 

:::

::: details 构建项目时提示 `Type-checking in progress...`

由支持增量构建的 tsbuildinfo 缓存引起的。在这种情况下，您可以输入rm tsconfig.tsbuildinfo并重试

:::

::: details `npm run start` 运行提示错误 `'NODE_ENV' is not recognized as an internal or external command...`

不要使用 npm 改为 `yarn start`

:::

::: details `yarn start` 运行提示错误 `Command failed: "webpack" "--config" "scripts/webpack/webpack.dev.js" "--watch"`



:::


