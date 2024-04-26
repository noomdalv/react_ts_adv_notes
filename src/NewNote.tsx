import { NoteData } from "./App";
import NoteForm from "./NoteForm";

type NewNoteProps = {
  onSubmit: (note: NoteData) => void;
};

function NewNote({ onSubmit }: NewNoteProps) {
  return (
    <>
      <h1 className="mb-4">New Note</h1>
      <NoteForm onSubmit={onSubmit} />
    </>
  );
}

export default NewNote;
