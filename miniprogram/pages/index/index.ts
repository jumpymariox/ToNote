// index.ts

import { noteService } from "../../service/note.service"

// 获取应用实例
// const app = getApp<IAppOption>()

Page({
  data: {
    tabbar: [
      { text: "笔记", iconPath: "../../../asset/img/note.png", selectedIconPath: "../../../asset/img/note_active.png" },
      { text: "个人", iconPath: "../../../asset/img/user.png", selectedIconPath: "../../../asset/img/user_active.png" }
    ]
  },
  onLoad() {
  },
  createNote() {
    const note = { title: "test", content: "lalallaal" }
    noteService.createNote(note).then(() => {
      console.log("create success")
    })
  }
})
