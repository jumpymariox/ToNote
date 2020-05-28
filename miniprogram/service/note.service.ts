import { MOCK } from "../mock/mock";

export class NoteService {
  constructor() { }

  fetchNotes(): Promise<{ notes: Note[] }> {
    return new Promise((resolve: (value: { notes: Note[] }) => void) => {
      resolve({ notes: MOCK.notes });
    })
  }
}
