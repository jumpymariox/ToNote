
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

  createNote(note: { title: string, content: string, text: string }): Promise<void> {
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

  updateNote(note: Note): Promise<void> {
    return new Promise((resolve, reject) => {
      wx.request({
        url: `http://${NoteService.domain}:3000/notes/${note.id}`,
        method: "PUT",
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

  deleteNotes(ids: string[]): Promise<void[]> {
    return Promise.all<void>(ids.map((id: string) => {
      return new Promise<void>((resolve: () => void) => {
        wx.request({
          url: `http://${NoteService.domain}:3000/notes/${id}`,
          method: "DELETE",
          success({ statusCode }) {
            if (statusCode === 200) {
              resolve()
            }
          }
        })
      })
    }));

  }
}

const noteService = new NoteService();
export { noteService }
