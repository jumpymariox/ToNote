// index.ts

// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
    notes: [
      { title: "hello", content: "world" },
      { title: "hello", content: "wx" },
      { title: "hello", content: "js" },
      { title: "hello", content: "css" }
    ]
  },
  onLoad() {
  }
})
