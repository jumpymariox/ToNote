import { MOCK } from "../mock/mock";

export class NoteService {
  constructor() { }

  fetchNotes(): Promise<{ notes: Note[] }> {
    return new Promise((resolve: (value: { notes: Note[] }) => void) => {
      wx.request({
        url: "http://192.168.88.106:3000/notes", success() {
          resolve({ notes: MOCK.notes });
        }, fail() {

        }
      })
    })
  }
}
