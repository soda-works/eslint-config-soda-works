module.exports = {
    plugins: [
        // https://github.com/vuejs/eslint-plugin-vue
        'eslint-plugin-vue',
    ],
    extends: [
        // https://vuejs.github.io/eslint-plugin-vue/
        'plugin:vue/recommended',
        ...['./index.js'].map(require.resolve),
    ],
    settings: {
        'import/resolver': {
            webpack: {
                config: (() => {
                    try {
                        return require.resolve('@vue/cli-service/webpack.config.js');
                    } catch (e) { return false; }
                })(),
            },
            node: {
                extensions: ['.js', '.jsx', '.vue']
            }
        },
    },
    // 自定义规则覆盖extends部分规范
    rules: {
        /* 覆盖 plugin:vue/recommended */
        // 允许引入组件不被使用
        'vue/no-unused-components': 'off',
        // 允许变量参数不被使用
        'vue/no-unused-vars': 'off',
        // 允许 v-html 指令
        'vue/no-v-html': 'off',
        // v-for 与 v-if 同时使用时，仅允许 v-if 指令引用是 v-for 中的变量参数
        'vue/no-use-v-if-with-v-for': ['error', {
            allowUsingIterationVar: true,
        }],
        // 仅允许组件属性以短横线形式使用
        'vue/attribute-hyphenation': ['error', 'always'],
        // 允许组件以短横线或驼峰形式使用皆可，但建议使用驼峰形式
        'vue/component-name-in-template-casing': 'off',
        // 元素标签换行时>符号位置
        'vue/html-closing-bracket-newline': ['error', {
            singleline: 'never',
            multiline: 'never',
        }],
        // 元素标签自关闭规则
        'vue/html-self-closing': ['error', {
            html: {
                void: 'any',
                normal: 'never',
                component: 'any',
            }
        }],
        // 元素标签换行规则，一行时最大允许5个参数等
        'vue/max-attributes-per-line': ['error', {
            singleline: 3,
            multiline: {
                max: 1,
                allowFirstLine: true
            }
        }],
        // 单行元素内容可不换行
        'vue/singleline-html-element-content-newline': 'off',
        // 元素属性顺序
        'vue/attributes-order': ['error', {
            order: [
                'DEFINITION', // ex: is
                'LIST_RENDERING', // ex: v-for
                'CONDITIONALS', // ex: v-if v-else-if v-else v-show v-cloak
                'RENDER_MODIFIERS', // ex: v-once v-pre
                ['GLOBAL', 'UNIQUE'], // ex: id, ref key slot
                'TWO_WAY_BINDING', // ex: v-model
                'CONTENT', // ex: v-text v-html
                'OTHER_DIRECTIVES', // ex: v-custom-directive
                'OTHER_ATTR', // ex: custom-prop="foo" v-bind:prop="foo" :prop="foo"
                'EVENTS', // ex: @click="functionCall" v-on="event"
            ],
        }],
        // 组件选项顺序
        'vue/order-in-components': ['error', {
            order: [
                'el',
                'name',
                'parent',
                'functional',
                'comments',
                'delimiters',
                ['template', 'render'],
                ['extends', 'mixins'],
                'components',
                'directives',
                'filters',
                'inheritAttrs',
                'model',
                ['props', 'propsData'],
                'data',
                'computed',
                'watch',
                'beforeCreate',
                'created',
                'beforeMount',
                'mounted',
                'beforeUpdate',
                'updated',
                'activated',
                'deactivated',
                'beforeDestroy',
                'destroyed',
                'methods',
                'renderError',
            ],
        }],
        // <template> 缩进规则
        'vue/html-indent': ['error', 4, {
            attribute: 1,
            baseIndent: 0,
            closeBracket: 0,
            alignAttributesVertically: true,
        }],
        /* 补充 */
        // <script> 缩进规则
        'vue/script-indent': ['error', 4, {
            baseIndent: 0,
            switchCase: 1,
        }]
    },
};
