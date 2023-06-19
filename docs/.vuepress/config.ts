import { defineUserConfig, defaultTheme } from 'vuepress'
import {
    navbarEn,
    sidebarEn,
    navbarCn,
    sidebarCn
} from './configs'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
    lang: 'en',
    title: 'Welcome to FedML!',
    description: 'Thank you for visiting our site. This documentation provides you with everything you need to know about using the FedML platform.',
    locales: {
        '/en/': {
            lang: 'en',
            title: 'Welcome to FedML',
            description: 'Thank you for visiting our site. This documentation provides you with everything you need to know about using the FedML platform.',
        },
        '/cn/': {
            lang: 'cn',
            title: '欢迎使用 FedML！',
            description: '它将会在 /cn/ 子路径下生效',
        },
        '/es/': {
            lang: 'es',
            title: '欢迎使用 FedML！',
            description: '它将会在 /es/ 子路径下生效',
        }
    },
    plugins: [
        searchPlugin(),
    ],
    theme: defaultTheme({
        editLink: true,
        locales: {
            /**
               * English locale config
               *
               * As the default locale of @vuepress/theme-default is English,
               * we don't need to set all of the locale fields
               */
            '/en/': {
                // navbar
                navbar: navbarEn,
                // sidebar
                sidebar: sidebarEn,
                home: '/en/',
                // page meta
                editLinkText: 'Edit this page on GitHub',
            },

            /**
             * Chinese locale config
             */
            '/cn/': {
                // navbar
                navbar: navbarCn,
                selectLanguageName: '简体中文',
                selectLanguageText: '选择语言',
                selectLanguageAriaLabel: '选择语言',
                // sidebar
                sidebar: sidebarCn,
                // page meta
                editLinkText: '在 GitHub 上编辑此页',
                lastUpdatedText: '上次更新',
                contributorsText: '贡献者',
                // custom containers
                tip: '提示',
                warning: '注意',
                danger: '警告',
                // 404 page
                notFound: [
                    '这里什么都没有',
                    '我们怎么到这来了？',
                    '这是一个 404 页面',
                    '看起来我们进入了错误的链接',
                ],
                backToHome: '返回首页',
                // a11y
                openInNewWindow: '在新窗口打开',
                toggleColorMode: '切换颜色模式',
                toggleSidebar: '切换侧边栏',
            },
        }
    }),
    // use plugins
});
