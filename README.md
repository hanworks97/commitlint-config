# @stackou/commitlint-config

这是我个人的 commitlint 配置预设。

## 安装

在你的项目中安装 `@stackou/commitlint-config` 包：

```bash
pnpm add -D lefthook czg @stackou/commitlint-config
```

在你的项目根目录下创建 commitlint.config.js：

```js
// commitlint.config.js
export default {
  extends: ['@stackou/commitlint-config'],
}
```

## 配置

初始化 lefthook

```sh
npx lefthook install
```

创建配置文件 .lefthook.yml

```yml
pre-commit:
  commands:
    eslint:
      glob: '*.{js,jsx,ts,tsx,vue}'
      run: pnpm eslint --cache --fix {staged_files}
    stylelint:
      glob: '*.{css,scss,less,vue}'
      run: pnpm stylelint --fix --allow-empty-input {staged_files}

commit-msg:
  commands:
    commitlint:
      run: pnpm exec commitlint --edit $1
```

将以下命令添加到你的脚本 package.json 部分：

```json
{
  "scripts": {
    "commit": "czg"
  }
}
```
