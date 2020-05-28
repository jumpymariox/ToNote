import { NoteService } from "../../../../service/note.service"

interface IData { notes: Note[] }
interface IPrpperty { }
interface IMethod { }

// pages/index/components/note-list.js
Component<IData, IPrpperty, IMethod>({
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
