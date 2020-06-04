import { noteService } from "../../../../service/note.service"

type IData = {
  notes?: Note[],
  selectedNoteMap: Record<string, boolean>
}
type IProperty = {
  editting: WechatMiniprogram.Component.AllProperty
}
type IMethod = {}

// pages/index/components/note-list.js
Component<IData, IProperty, IMethod>({
  /**
   * Component properties
   */
  properties: {
    editting: {
      type: Boolean, value: false, observer() {
        this.setData({ selectedNoteMap: {} });
      }
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
    }
  },

  lifetimes: {
    attached() {
      noteService.fetchNotes().then(({ notes }: { notes: Note[] }) => {
        this.setData({ notes: notes })
      })
    }
  }
})
