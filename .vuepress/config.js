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
        path: '/collection/ol-tools/',      // 可选的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
      },
      {
        title: '计算机术语',   // 必要的
        path: '/collection/terms/',      // 可选的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
      },
      {
        title: '开发工具',   // 必要的
        path: '/dev/',      // 可选的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/dev/git/',
          '/dev/github/',
          '/dev/idea/',
          '/dev/vscode/'
        ]
      },
      {
        title: 'Chrome',   // 必要的
        path: '/chrome/',      // 可选的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
      },
      {
        title: 'Linux 工具',   // 必要的
        path: '/linux/',      // 可选的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/vim/'
        ]
      },
      {
        title: 'MacOS 工具',   // 必要的
        path: '/macos/',      // 可选的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
      },
      {
        title: '知识工具',   // 必要的
        path: '/knowledge/',      // 可选的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/markdown/',
          '/xmind/'
        ]
      }
    ]
  }
}
