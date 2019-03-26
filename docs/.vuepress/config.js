module.exports = {
  title: 'Vue Reform Documentation',
  description: 'Documentation for Vue Reform',
  theme: '@vuepress/theme-default',
  plugins: [
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
  serviceWorker: {
    updatePopup: true
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Site', link: 'https://vuereform.dev' }
    ],
    sidebar: [
      '/'
    ],
    repo: 'lesharris/vue-reform',
    repoLabel: 'Contribute!',
    docsRepos: 'lesharris/vue-reform-docs',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    displayAllHeaders: true
  }
}
