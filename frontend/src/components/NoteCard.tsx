import { trpc } from "../trpc";

interface Props {
  note: {
    _id: string;
    title: string;
    description: string;
    done: boolean;
  };
}

export function NoteCard({ note }: Props) {
  const deleteNote = trpc.node.delete.useMutation();
  const toggleDone = trpc.node.toggleDone.useMutation();
  const utils = trpc.useUtils();
  return (
    <div className="bg-zinc-900 p-2 mb-2 flex justify-between ">
      <div>
        <h1 className="font-bold text-xl">{note.title}</h1>
        <p>{note.description}</p>
      </div>

      <div className="flex gap-x-2">
        <button
          onClick={() => {
            deleteNote.mutate(note._id, {
              onSuccess: (data) => {
                if (data) {
                  utils.node.get.invalidate();
                }
              },
              onErrror: (error) => {
                console.log(error);
              },
            });
          }}
          className="bg-red-500 text-white px-3 p-2 rounded-b-md ml-auto cursor-pointer"
        >
          delete
        </button>

        <button
          onClick={() => {
            toggleDone.mutate(note._id, {
              onSuccess: (data) => {
                if (data) {
                  utils.node.get.invalidate();
                }
              },
              onErrror: (error) => {
                console.log(error);
              },
            });
          }}
          className={`bg-green-500 text-white px-3 p-2 rounded-b-md ml-auto cursor-pointer
            ${note.done ? "bg-red-500" : "bg-green-500"}`}
        >
          {note.done ? "unDone" : "Done"}
        </button>
      </div>
    </div>
  );
}

export default NoteCard;
