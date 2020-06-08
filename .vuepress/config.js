module.exports = {
  title: "CodeLife",
  description: "Personal Code Learning and Experience Accumulation .",
  dest: "public",
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  // 移动端优化
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
  theme: "reco",

  themeConfig: {
    nav: [
      { text: "主页", link: "/", icon: "reco-home" },
      { text: "时间轴", link: "/timeline/", icon: "reco-date" },
      {
        text: "文档",
        icon: "reco-document",
        items: [{ text: "vuepress-reco", link: "/docs/theme-reco/" }],
      },
      {
        text: "Github",
        link: "https://github.com/yuqing521",
        icon: "reco-github",
      },
      {
        text: "联系我",
        icon: "reco-message",
        items: [
          {
            text: "CSDN",
            link: "https://blog.csdn.net/qq_15102659",
            icon: "reco-csdn",
          },
          {
            text: "掘金",
            link: "https://juejin.im/user/5e1f0c756fb9a02fe654adf6",
            icon: "reco-juejin",
          },
        ],
      },
    ],
    sidebar: {
      "/docs/theme-reco/": ["", "theme", "plugin", "api"],
    },
    type: "blog",
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: "分类", // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: "标签", // 默认 “标签”
      },
    },
    friendLink: [
      // {
      //   title: "yuqing521",
      //   desc: "Enjoy when you can, and endure when you must.",
      //   email: "1581446178@qq.com",
      //   link: "",
      // },
      // {
      //   title: "vuepress-theme-reco",
      //   desc: "A simple and beautiful vuepress Blog & Doc theme.",
      //   avatar:
      //     "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
      //   link: "https://vuepress-theme-reco.recoluan.com",
      // },
    ],
    logo: "/logo.jpg",
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    sidebar: "auto",
    // 最后更新时间
    lastUpdated: "Last Updated",
    // 作者
    author: "yuqing521",
    // 作者头像
    authorAvatar: "/3WYk5j.jpg",
    // 备案号
    // record: "xxxx",
    // 项目开始时间
    startYear: "2019",
    /**
     * 密钥 (if your blog is private)
     */

    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    /**
     * valine 设置 (if you need valine comment )
     */

    // valineConfig: {
    //   appId: '...',// your appId
    //   appKey: '...', // your appKey
    // }
  },

  markdown: {
    lineNumbers: true,
  },
};
