// index.ts
import { noteService } from "../../service/note.service"

namespace Index {
  export type IData = {
    showAddBtn: boolean,
    showDeleteBtn: boolean,
    showUndoBtn: boolean,
    editting: boolean,
    notes: Note[],
    selectedNoteIds: string[]
  }
  export type ICustom = {
    createNote: () => void,
    readyToEditNotes: () => void,
    cancelEditNotes: () => void,
    deleteNotes: () => void,
    selectedNotesChange: (e: any) => void,
    fetchAndSetNotes: () => Promise<void>
  }
}

// 获取应用实例
Page<Index.IData, Index.ICustom>({
  data: {
    showAddBtn: true,
    showDeleteBtn: false,
    showUndoBtn: false,
    editting: false,
    notes: [],
    selectedNoteIds: []
  },
  onLoad() {
    this.fetchAndSetNotes();
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
    this.cancelEditNotes();
    noteService.deleteNotes(this.data.selectedNoteIds).then(() => {
      this.fetchAndSetNotes();
    })
  },

  selectedNotesChange(e: any) {
    this.setData({ selectedNoteIds: e.detail.selectedNoteIds });
  },

  fetchAndSetNotes(): Promise<void> {
    return new Promise((resolve, reject) => {
      noteService.fetchNotes().then(({ notes }: { notes: Note[] }) => {
        this.setData({ notes: notes });
        resolve();
      }).catch(reject)
    });
  }
})
