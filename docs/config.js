module.exports = {
  title: 'Vue Reform Documentation',
  description: 'Documentation for Vue Reform',
  theme: '@vuepress/theme-default',
  plugins: [
    '@vuepress/theme-default',
    '@vuepress/clean-urls',
    '@vuepress/container',
    '@vuepress/register-components',
    '@vuepress/active-header-links',
    '@vuepress/search',
    '@vuepress/nprogress',
    '@vuepress/back-to-top',
    '@vuepress/pagination',
    '@vuepress/pwa',
    '@vuepress/medium-zoom'
  ],
  serviceWorker: true,
  themeConfig: {
    home: true,
    heroImage: '/images/vue-reform-logo.png',
    heroText: 'Kick ass forms with Vue made simple and easy',
    footer: 'MIT Licensed | Copyright © 2018-present Les Harris',
    nav: [
      {text: 'Home', link: '/' },
      {text: 'Site', link: 'https://vuereform.dev'},
      {text: 'Github', link: 'https://github.com/lesharris/vue-reform.git'}
    ]
  }
}
