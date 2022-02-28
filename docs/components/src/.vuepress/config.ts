import { addViteOptimizeDepsInclude } from "@mr-hope/vuepress-shared";
import { path } from "@vuepress/utils";
import { defineHopeConfig } from "vuepress-theme-hope";

const base = process.env.BASE || "/";

export default defineHopeConfig({
  base: `/${base.replace(/^\//, "")}components/`,

  dest: "./dist",

  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css",
      },
    ],
  ],

  locales: {
    "/": {
      lang: "en-US",
      title: "Components Lib",
      description: "Components Lib plugin for VuePress",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "组件库",
      description: "VuePress 的组件库插件",
    },
  },

  theme: "hope",

  themeConfig: {
    hostname: "https://vuepress-theme-hope.github.io",

    author: {
      name: "Mr.Hope",
      url: "https://mrhope.site",
    },

    iconPrefix: "iconfont icon-",

    repo: "https://github.com/vuepress-theme-hope/vuepress-theme-hope",

    docsDir: "docs/components/src",

    logo: "/logo.svg",

    footer: "MIT Licensed | Copyright © 2019-present Mr.Hope",
    displayFooter: true,

    pageInfo: ["PageView", "Category", "Tag", "ReadingTime"],

    locales: {
      "/": {
        navbar: ["/", "/guide/", "/config"],

        sidebar: {
          "/": [
            {
              text: "Guide",
              icon: "creative",
              prefix: "guide/",
              collapsable: false,
              children: ["", "article-info"],
            },
            "config",
          ],
        },
      },

      "/zh/": {
        navbar: ["/zh/", "/zh/guide/", "/zh/config"],

        sidebar: {
          "/zh/": [
            {
              text: "Guide",
              icon: "creative",
              prefix: "guide/",
              children: ["", "article-info"],
            },
            "config",
          ],
        },
      },
    },

    plugins: {
      comment: {
        type: "waline",
        serverURL: "https://vuepress-theme-hope-comment.vercel.app",
      },

      docsearch: {
        appId: "VXIEHELDL1",
        apiKey: "595796f71b6ba14326719682c3738c0c",
        indexName: "vuepress-theme-hope-v2",
      },

      mdEnhance: {
        codegroup: true,
      },

      pwa: {
        favicon: "/favicon.ico",
        themeColor: "#46bd87",
        cachePic: true,
        apple: {
          icon: "/assets/icon/apple-icon-152.png",
          statusBarColor: "black",
        },
        msTile: {
          image: "/assets/icon/ms-icon-144.png",
          color: "#ffffff",
        },
        manifest: {
          name: "@mr-hope/vuepress-plugin-components",
          short_name: "components plugin",
          icons: [
            {
              src: "/assets/icon/chrome-mask-512.png",
              sizes: "512x512",
              purpose: "maskable",
              type: "image/png",
            },
            {
              src: "/assets/icon/chrome-mask-192.png",
              sizes: "192x192",
              purpose: "maskable",
              type: "image/png",
            },
            {
              src: "/assets/icon/chrome-512.png",
              sizes: "512x512",
              type: "image/png",
            },
            {
              src: "/assets/icon/chrome-192.png",
              sizes: "192x192",
              type: "image/png",
            },
          ],
          shortcuts: [
            {
              name: "Guide",
              short_name: "Guide",
              url: "/guide/",
              icons: [
                {
                  src: "/assets/icon/guide-maskable.png",
                  sizes: "192x192",
                  purpose: "maskable",
                  type: "image/png",
                },
                {
                  src: "/assets/icon/guide-monochrome.png",
                  sizes: "192x192",
                  purpose: "monochrome",
                  type: "image/png",
                },
              ],
            },
            {
              name: "Config",
              short_name: "Config",
              url: "/config.html",
              icons: [
                {
                  src: "/assets/icon/config-maskable.png",
                  sizes: "192x192",
                  purpose: "maskable",
                  type: "image/png",
                },
                {
                  src: "/assets/icon/config-monochrome.png",
                  sizes: "192x192",
                  purpose: "monochrome",
                  type: "image/png",
                },
              ],
            },
          ],
        },
        appendBase: true,
      },
    },
  },

  plugins: [
    (_options, app) => {
      addViteOptimizeDepsInclude(app, [
        "three",
        "three/examples/jsm/controls/OrbitControls",
        "three/examples/jsm/loaders/STLLoader",
      ]);

      return {
        name: "theme-enhance",
        alias: {
          "@theme-hope/components/HomeHero": path.resolve(
            __dirname,
            "./components/HopeHero"
          ),
        },
      };
    },
  ],
});
