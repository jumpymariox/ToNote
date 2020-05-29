
class NoteService {
  constructor() { }

  fetchNotes(): Promise<{ notes: Note[] }> {
    return new Promise((resolve: (value: { notes: Note[] }) => void) => {
      wx.request({
        url: "http://192.168.88.106:3000/notes",
        dataType: 'json',
        success(response) {
          const notes = response.data as Note[];
          resolve({ notes: notes });
        },
        fail() {

        }
      })
    })
  }

  createNote(note: { title: string, content: string }): Promise<void> {
    return new Promise((resolve, reject) => {
      wx.request({
        url: "http://192.168.88.106:3000/notes",
        method: "POST",
        data: JSON.stringify(note),
        success() {
          resolve()
        },
        fail() {
          reject()
        }
      })
    })
  }
}

const noteService = new NoteService();
export { noteService }
