import { trpc } from "../trpc";
import NoteCard from "./NoteCard";

function NodeList() {
  const { data, isLoading, isError, error } = trpc.node.get.useQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      {data.map((note: any) => (
        <NoteCard key={note._id} note={note} />
      ))}
    </>
  );
}

export default NodeList;
