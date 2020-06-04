// index.ts
import { noteService } from "../../service/note.service"

// 获取应用实例
Page({
  data: {
    showAddBtn: true,
    showDeleteBtn: false,
    showUndoBtn: false,
    editting: false
  },
  onLoad() {
  },
  createNote() {
    const note = { title: "test", content: "lalallaal" }
    noteService.createNote(note).then(() => {
      console.log("create success")
    })
  },
  readyToEditNotes() {
    this.setData({
      showAddBtn: false,
      showDeleteBtn: true,
      showUndoBtn: true,
      editting: true
    })
  },

  cancelEditNotes() {
    this.setData({
      showAddBtn: true,
      showDeleteBtn: false,
      showUndoBtn: false,
      editting: false
    })
  },

  deleteNotes() {

  }
})
