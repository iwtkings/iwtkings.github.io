module.exports = {
  "title": "iwtkings个人博客",
  "description": "Share what, and share you can.",
  "dest": "doc", // 打包到该文件夹下
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    // 密钥
    // "keyPage": {
    //   "keys": ["e10adc3949ba59abbe56e057f20f883e"], // 1.3.0 版本后需要设置为密文
    //   "color": "#42b983", // 登录页动画球的颜色
    //   "lineColor": "#42b983" // 登录页动画线的颜色
    // },
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "文章",
        "icon": "reco-document",
        "items": [
          {
            "text": "散记",
            "link": "/articles/sanji/"
          }
        ]
      },
      {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "联系我",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/iwtkings",
            "icon": "reco-github"
          },
          {
            "text": "Gitee",
            "link": "https://gitee.com/iwtkings",
            "icon": "reco-mayun"
          }
        ]
      }
    ],
    // 侧边栏，根据路由自定义侧边栏
    "sidebar": {
      "/blogs/ios/": [
        "introduce",
        "to-code",
        "bug-project",
      ],
      "/blogs/uniapp/": [
        "introduce",
        "share-two",
        "share-three"
      ],
      "/articles/sanji/": [
        "",
        "theme",
        "plugin",
        "api",
        "china"
      ]
    },
    "type": "blog",
    "blogConfig": {
      // 导航-分类
      "category": {
        "location": 2,
        "text": "分类"
      },
      // 导航-标签
      "tag": {
        "location": 4,
        "text": "标签"
      },
      // 信息栏展示社交信息
      "socialLinks": [
        { "icon": "reco-github", "link": "https://github.com/iwtkings" },
        { "icon": "reco-mayun", "link": "https://gitee.com/iwtkings" }
      ]
    },
    // 友情链接
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "上次更新",
    "author": "iwtkings",
    "authorAvatar": "/avatar.png",
    // 备案号
    "record": "备案号：xxx",
    // 项目开始时间
    "startYear": "2017",
    "subSidebar": "auto", //在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    // "noFoundPageByTencent": false, // 404腾讯公益关闭
  },
  "markdown": {
    "lineNumbers": true
  },
  "plugins": [
    [
      // 动态标题
      "dynamic-title",
      {
        showIcon: "/favicon.ico",
        showText: "(/≧▽≦/)咦！又好了！",
        hideIcon: "/failure.ico",
        hideText: "(●—●)喔哟，崩溃啦！",
        recoverTime: 2000
      }
    ],

    [
      // 看板
      "@vuepress-reco/vuepress-plugin-kan-ban-niang"
    ],

    [
      //鼠标点击特效
      "cursor-effects",
      {
        size: 3,                    // size of the particle, default: 2
        shape: ['circle'],  // shape of the particle, default: 'star'
        zIndex: 999999999           // z-index property of the canvas, default: 999999999
      }
    ],

    [
      // 代码复制
      "vuepress-plugin-nuggets-style-copy",
      {
        copyText: "复制代码",
        tip: {
          content: "复制成功!"
        }
      }
    ],

    [
      // 首页 动画 加载
      "@vuepress-reco/vuepress-plugin-loading-page"
    ],

    [
      // 评论、访问量
      "@vuepress-reco/vuepress-plugin-comments",
      {
        solution: 'valine',
        options: {
          appId: 'qlj65EW610J7ssgB0jnxkAlK-gzGzoHsz',
          appKey: 'nv7XYRyue69Cw9gifkR8QM7g',
        }
      }
    ],

    // [
    //   // 在您的 Vuepress 中添加美丽的丝带！
    //   'ribbon',
    //   {
    //     size: 90, // width of the ribbon, default: 90
    //     opacity: 0.8, // opacity of the ribbon, default: 0.3
    //     zIndex: -1, // z-index property of the background, default: -1
    //   },
    // ],

    // [
    //   // 背景音乐 插件1
    //   "@vuepress-reco/vuepress-plugin-bgm-player",
    //   {
    //     audios: [
    //       {
    //         name: '강남역 4번 출구',
    //         artist: 'Plastic / Fallin` Dild',
    //         url: 'https://assets.smallsunnyfox.com/music/2.mp3',
    //         cover: 'https://assets.smallsunnyfox.com/music/2.jpg'
    //       }
    //     ],
    //     autoShrink: true,
    //     shrinkMode: "float"
    //   }
    // ],

    [
      // 背景音乐 插件2
      'meting',
      {
        meting: {
          server: "netease",
          type: "playlist",
          mid: "84595839",
        },
        aplayer: {
          fixed: true,
          mini: true,
          autoplay: false,
          loop: "all", // 'all' | 'one' | 'none'
          order: "list", // 'list' | 'random'
          listFolded: true,
        },
        mobile: {
          cover: true,
          lrc: false
        }
      },
    ],

    [
      // 樱花飘落
      "sakura",
      {
        num: 20,  // 默认数量
        show: true, //  是否显示
        zIndex: -1,   // 层级
        img: {
          replace: false,  // false 默认图 true 换图 需要填写httpUrl地址
          httpUrl: '...'     // 绝对路径
        }
      }
    ],

    [
      // 为博客文章自动随机添加名人名言或其他
      "vuepress-plugin-boxx"
    ],

    // 图片放大组件，安装自动生效

  ]
}