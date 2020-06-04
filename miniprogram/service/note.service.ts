
class NoteService {
  static domain = "192.168.88.106";

  constructor() { }

  fetchNotes(): Promise<{ notes: Note[] }> {
    return new Promise((resolve: (value: { notes: Note[] }) => void) => {
      wx.request({
        url: `http://${NoteService.domain}:3000/notes`,
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

  fetchNote(id: string): Promise<{ note: Note }> {
    return new Promise((resolve: (value: { note: Note }) => void) => {
      wx.request({
        url: `http://${NoteService.domain}:3000/notes/${id}`,
        dataType: 'json',
        success(response) {
          const note = response.data as Note;
          resolve({ note: note });
        },
        fail() {

        }
      })
    })
  }

  createNote(note: { title: string, content: string }): Promise<void> {
    return new Promise((resolve, reject) => {
      wx.request({
        url: `http://${NoteService.domain}:3000/notes`,
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
