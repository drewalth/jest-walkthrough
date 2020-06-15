module.exports = {
  title: 'Jest + Vue Walkthrough',
  description: 'A Vue app testing strategy using Jest and @vue/test-utils',
  
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
      // {
      //   text: 'Basic Page',
      //   link: '/basic/'
      // },
      {
        text: 'Guide',
        link: '/guide/getting-started.md'
      },
      // {
      //   text: 'Contact',
      //   items: [
      //     {
      //       text: 'Twitter',
      //       link: 'https://www.twitter.com/'
      //     },
      //     {
      //       text: 'Email',
      //       link: 'mailto:hello@email.com'
      //     }
      //   ]
      // },
      // {
      //   text: 'Component Example',
      //   link: '/component-example'
      // }
      
    ],
    sidebar: [
      {
        title: 'Guide',
        path: '/guide/',
        collapsable: false,
        children: [
          '/guide/getting-started.md'
        ]
      }
    ],
    plugins: ['@vuepress/active-header-links']
  }
}
