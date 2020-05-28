import { NoteService } from "../../../../service/note.service"

type IData = { notes: Note[] }
type IProperty = {}
type IMethod = {}

// pages/index/components/note-list.js
Component<IData, IProperty, IMethod>({
  /**
   * Component properties
   */
  properties: {},

  /**
   * Component initial data
   */
  data: {
    notes: []
  },

  /**
   * Component methods
   */
  methods: {

  },

  lifetimes: {
    attached() {
      const noteService = new NoteService();
      noteService.fetchNotes().then(({ notes }: { notes: Note[] }) => {
        this.setData({ notes: notes })
      })
    }
  }
})
