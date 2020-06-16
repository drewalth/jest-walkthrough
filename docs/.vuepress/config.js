module.exports = {
  title: 'Jest Walkthrough',
  description: 'A sandbox app with a few examples for unit testing with Jest.',
  themeConfig: {
    // logo: '/vuepress-logo.png',
    lastUpdated: 'Last updated',
    repo: 'https://github.com/drewalth/jest-walkthrough',
    // docsDir: 'docs',
    editLinks: true,
    editLinkText: 'Recommend a change',
    nav: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'Guide',
        link: '/section/#getting-started'
      }
    ],
    plugins: ['@vuepress/active-header-links']
  }
}
