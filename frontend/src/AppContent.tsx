import NameApp from "./components/NameApp.js";
import NodeList from "./components/NodeList.js";
import NoteForm from "./components/NoteForm.js";

function AppContent() {
  return (
    <div className="max-w-2xl mx-auto h-screen py-40">
      <h1 className="text-2xl font-bold text-center py-5"></h1>
      <NameApp />
      <NoteForm />
      <NodeList />
    </div>
  );
}

export default AppContent;
