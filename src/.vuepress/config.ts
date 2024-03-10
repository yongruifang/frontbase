import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "frontbase",
  description: "个人前端知识库",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
