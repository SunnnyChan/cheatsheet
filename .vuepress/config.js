// .vuepress/config.js
module.exports = {
  title: 'CheatSheet',  // 设置网站标题
  description : "",
  base : '/cheatsheet/',
  themeConfig: {
    nav : [
        { text: 'Github', link: 'http://www.github.com/sunnnychan' }
    ],
    sidebar: [
      {
        title: '在线工具',   // 必要的
        path: '/ol-tools/',      // 可选的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
      },
      {
        title: '对照表',   // 必要的
        path: '/table/',      // 可选的
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
      },
      {
        title: '开发工具',   // 必要的
        path: '/dev/',      // 可选的
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/dev/git/',
          '/dev/github/',
          '/dev/idea/',
          '/dev/vscode/',
          '/dev/chrome/',
          '/dev/online-tls/'
        ]
      },
      {
        title: '软件工程',   // 必要的
        path: '/se/',      // 可选的
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/se/law/'
        ]
      },
      {
        title: '软件工具',   // 必要的
        path: '/component/',      // 可选的
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/component/nginx/'
        ]
      },
      {
        title: 'Linux',   // 必要的
        path: '/linux/',      // 可选的
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/linux/cls/',
          '/linux/cmds/',
          '/linux/vim/'
        ]
      },
      {
        title: 'Shell',   // 必要的
        path: '/shell/',      // 可选的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
      },
      {
        title: 'MacOS',   // 必要的
        path: '/macos/',      // 可选的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
      },
      {
        title: '知识工具',   // 必要的
        path: '/knowledge/',      // 可选的
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/knowledge/markdown/',
          '/knowledge/latex/',
          '/knowledge/xmind/'
        ]
      },
      {
        title: '收藏',   // 必要的
        path: '/collections/',      // 可选的
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/collections/websites/'
        ]
      }
    ]
  },
  plugins: [
    'vuepress-plugin-mathjax' 
  ]
}
