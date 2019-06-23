#  eslint config soda-works

基于 `eslint-config-airbnb-base` 修改的 JavaScript 代码规范

## 使用方法

> 前提已安装 `eslint` `babel-eslint`

```bash
$ npm i -D eslint-config-soda-works@latest
```


### 1、标准用法

在你的项目根目录下创建 `.eslintrc.js`，并将以下内容复制到文件中：

```js
module.exports = {
    extends: [
        'soda-works',
    ],
    globals: {
        // [key] 填入项目内需要的全局变量
        // [value] Boolean 表示这个全局变量是否允许被重新赋值
    },
};
```


### 2、Vue项目

- Vue项目需额外安装

```
$ npm i -D eslint-plugin-vue eslint-import-resolver-node
```

- 如果用到 `webpack` 还需额外安装
 
```
$ npm i -D eslint-import-resolver-webpack
```

- 在你的项目根目录下创建 `.eslintrc.js`，并将以下内容复制到文件中：

```js
module.exports = {
    extends: [
        'soda-works/vue',
    ],
    globals: {
        // [key] 填入项目内需要的全局变量
        // [value] Boolean 表示这个全局变量是否允许被重新赋值
    },
};
```

---

> 对不满足规则的语句，可以临时用以下方式对 `eslint` 进行禁用:
> 
> **1、单行规则禁用**
> 
> ```js
> console.log() // eslint-disable-line
> ```
> 或者在其后加具体规则
> ```js
> console.log() // eslint-disable-line semi
> ```
> 
> **2、下一行规则禁用**
> 
> ```js
> // eslint-disable-next-line
> console.log( );
> ```
> 或者在其后加具体规则
> ```js
> // eslint-disable-next-line space-in-parens
> console.log( );
> ```
> 
> **3、某个区域禁用**
>
> ```js
> /* eslint-disable */
> // 区域正文
> /* eslint-enable */
> ```
> 同样可在其后加具体规则
> 
> **4、整个文件禁用**
>
> 在文件开头添加：
> ```js
> /* eslint-disable */
> // 文件正文
> ```


## 规范修订

修改时需对照 [eslint airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base) 或 [eslint vue](https://vuejs.github.io/eslint-plugin-vue/) 的代码。（在对应的仓库中搜索关键字，再将配置进行自定义修改）
