import { MOCK } from "../mock/mock";

export class NoteService {
  constructor() { }

  fetchNotes(): Promise<{ notes: Note[] }> {
    return new Promise((resolve: (value: { notes: Note[] }) => void) => {
      wx.request({
        url: "localhost:8080/notes", success() {
          resolve({ notes: MOCK.notes });
        }, fail() {

        }
      })
    })
  }
}
