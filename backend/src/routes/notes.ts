import { publicProcedure, router } from "../trpc";
import z from "zod";
import Note from "../models/note";

const getNotes = publicProcedure.query(async () => {
  const notes = await Note.find();
  return notes;
});

const createNote = publicProcedure
  .input(
    z.object({
      title: z.string(),
      description: z.string(),
    })
  )
  .mutation(async ({ input }) => {
    const newNote = new Note({
      title: input.title,
      description: input.description,
    });
    const savedNote = await newNote.save();

    console.log(savedNote);
    return savedNote;
  });

const toggleDone = publicProcedure
  .input(z.string())
  .mutation(async ({ input }) => {
    try {
      const noteFound = await Note.findById(input);

      if (!noteFound) throw new Error("Note Not Found");

      noteFound.done = !noteFound.done;
      const updatedNote = await noteFound.save();

      return true;
    } catch (err) {
      if (err instanceof Error) throw new Error(err.message);
      return false;
    }
  });

const deleteNote = publicProcedure
  .input(z.string())
  .mutation(async ({ input }) => {
    const noteFound = await Note.findByIdAndDelete(input);

    if (!noteFound) throw new Error("Note Not Found");

    return true;
  });

export const nodeRouters = router({
  get: getNotes,
  create: createNote,
  delete: deleteNote,
  toggleDone: toggleDone,
});
