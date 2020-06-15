module.exports = {
  title: 'Jest + Vue Walkthrough',
  description: 'A testing strategy for large Vue apps using Jest',
  
  themeConfig: {
    // logo: '/vuepress-logo.png',
    // lastUpdated: 'Last updated',
    // repo: 'https://github.com/bencodezen/vuepress-starter-kit',
    repo: 'drewalth/jest-walkthrough',
    // docsDir: 'docs',
    // editLinks: true,
    // editLinkText: 'Recommend a change',
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
        items: [
          {
            text: 'Introduction',
            link: '/guide/#introduction'
          },
          // {
          //   text: 'Some More Content!',
          //   link: '/section/#some-more-content'
          // }
        ]
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
    plugins: ['@vuepress/active-header-links']
  }
}
