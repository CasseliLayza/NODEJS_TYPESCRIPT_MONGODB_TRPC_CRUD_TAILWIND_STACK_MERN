import { ChangeEvent, FormEvent, useState } from "react";
import { trpc } from "../trpc";

function NoteForm() {
  const [note, setNote] = useState({
    title: "",
    description: "",
  });

  const addNota = trpc.node.create.useMutation();
  const utils = trpc.useUtils();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNote({
      ...note,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!note.title || !note.description) return;
    console.log(note);
    addNota.mutate(note, {
      onSuccess: () => {
        console.log("New Note added");
        utils.node.get.invalidate();
        resetForm();
      },
      onError: (error:a) => {
        console.log(error);
        if (error.data) {
          throw new Error(error.data.message);
        }
      },
    });
  };

  const resetForm = () => {
    setNote({
      title: "",
      description: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-zinc-900 p-10 rounded-md">
      <input
        type="text"
        placeholder="Tittle"
        name="title"
        onChange={handleChange}
        autoFocus
        className="bg-neutral-900 p-3 py-2 w-full block rounded-md"
        value={note.title}
      />
      <textarea
        placeholder="Description"
        name="description"
        onChange={handleChange}
        className="bg-neutral-900 p-3 py-2 w-full block rounded-md"
        value={note.description}
      />

      <button
        type="submit"
        className="bg-zinc-500 px-3 py-2 rounded-md text-white cursor-pointer"
      >
        Add Note
      </button>
    </form>
  );
}

export default NoteForm;
