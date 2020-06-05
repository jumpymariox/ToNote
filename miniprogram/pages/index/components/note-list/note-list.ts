//const pickBy = require("lodash.pickby")
import keys from "lodash.keys";
import pickBy from "lodash.pickby";

namespace NoteList {
  export type IData = {
    selectedNoteMap: Record<string, boolean>
  }
  export type IProperty = {
    editting: WechatMiniprogram.Component.AllProperty
    notes: WechatMiniprogram.Component.AllProperty
  }
  export type IMethod = {}
}

// pages/index/components/note-list.js
Component<NoteList.IData, NoteList.IProperty, NoteList.IMethod>({
  /**
   * Component properties
   */
  properties: {
    editting: {
      type: Boolean,
      value: false,
      observer() {
        this.setData({ selectedNoteMap: {} });
      }
    },
    notes: {
      type: Array,
      value: []
    }
  },

  /**
   * Component initial data
   */
  data: {
    selectedNoteMap: {}
  },

  /**
   * Component methods
   */
  methods: {
    redirectToNotePage(event: any) {
      const noteId = event.currentTarget.id;
      wx.navigateTo({ url: `/pages/note/note?id=${noteId}` })
    },
    readyToEditNotes() {
      if (this.properties.editting) {
        return
      }
      this.triggerEvent("readyToEditNotes")
    },
    selectNode(e: any) {
      const { id, selected }: { id: string, selected: boolean } = e.detail;
      this.setData({
        selectedNoteMap: { ...this.data.selectedNoteMap, [id]: selected }
      });

      const selectedNoteIds = keys(pickBy(this.data.selectedNoteMap, (value: boolean) => !!value))
      this.triggerEvent("selectedNotesChange", { selectedNoteIds: selectedNoteIds });
    }
  },

  lifetimes: {
    attached() {
    }
  }
})
