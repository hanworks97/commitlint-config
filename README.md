# @hanworks/commitlint-config

这是我个人的 commitlint 配置预设。

## 安装

在你的项目中安装 `@hanworks/commitlint-config` 包：

```bash
pnpm add -D husky lint-staged czg @hanworks/commitlint-config
```

在你的项目根目录下创建 commitlint.config.js：

```js
// commitlint.config.js
export default {
  extends: ['@hanworks/commitlint-config'],
}
```

## 配置

1. 初始化 husky

```sh
pnpm husky install
```

2. 然后在 `package.json` 添加 `prepare`，保证以后 `install` 会自动注册：

```json
{
  "scripts": {
    "prepare": "husky install"
  }
}
```

> 然后执行一次 pnpm install 来触发 prepare。

3. 添加 pre-commit hook `.husky/pre-commit`

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged
```

4. 配置 lint-staged 在 `package.json` 中添加：

```json
{
  "lint-staged": {
    "*.{js,ts,vue}": "eslint --fix"
  }
}
```

5. 将以下命令添加到你的脚本 package.json 部分：

```json
{
  "scripts": {
    "commit": "czg"
  }
}
```
