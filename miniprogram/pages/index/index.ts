// index.ts
import { noteService } from "../../service/note.service"

// 获取应用实例
Page({
  data: {},
  onLoad() {
  },
  createNote() {
    const note = { title: "test", content: "lalallaal" }
    noteService.createNote(note).then(() => {
      console.log("create success")
    })
  }
})
