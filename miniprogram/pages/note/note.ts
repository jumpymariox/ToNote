// miniprogram/pages/note/note.js

import { noteService } from "../../service/note.service";

type IData = { id?: string, note?: Note }
type ICustom = {}

Page<IData, ICustom>({
  /**
   * Page initial data
   */
  data: {},

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    if (!options) {
      return
    }
    if (typeof options.id === "string") {
      noteService.fetchNote(options.id).then(({ note }: { note: Note }) => {
        this.setData({ id: note.id, note: note })
      });
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

  }
})