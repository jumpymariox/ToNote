// miniprogram/pages/note/note.js

import { noteService } from "../../service/note.service";

type IData = {
  id?: string,
  note?: Note,
  isCreate: boolean,
  showSaveBtn: boolean
}
type ICustom = {
  saveNote: (e: any) => void,
  createNote: (note: { title: string, content: string, text: string }) => void,
  updateNote: (note: Note) => void
}

Page<IData, ICustom>({
  /**
   * Page initial data
   */
  data: {
    isCreate: false,
    showSaveBtn: true
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    if (!options) {
      return
    }
    if (typeof options.id === "string") {
      wx.showLoading({ title: "加载中" })
      this.setData({ isCreate: false })
      noteService.fetchNote(options.id).then(({ note }: { note: Note }) => {
        this.setData({ id: note.id, note: note })
        wx.hideLoading();
      }).catch(() => {
        wx.hideLoading();
      });
    } else {
      this.setData({ isCreate: true })
    }
  },
  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  async saveNote(e: any) {

    let content = '';
    let text = '';
    await this.selectComponent("#noteEditor").getContents().then((editorContent: any) => {
      content = editorContent.html;
      text = editorContent.text;
    });
    const title = e.detail.value.title;

    if (this.data.isCreate) {
      this.createNote({ title, content, text });
    } else if (!!this.data.note) {
      const updatedNote = { id: this.data.note.id, content, title, text };
      this.updateNote(updatedNote);
    }
  },

  createNote({ title, content, text }: { title: string, content: string, text: string }) {
    if (!content && !title) {
      return
    }
    noteService.createNote({ title, content, text }).then(() => {
      wx.navigateBack()
    })
  },

  updateNote(note: Note) {
    const { title, content } = note;
    if (!content && !title) {
      return
    }
    noteService.updateNote(note).then(() => {
      wx.navigateBack()
    })
  }
})