import noteHandler from "../handlers/noteHandler.js";

const addNote = async (req, res) => {
  res.render("addNote", { title: "Add Note" });
};

const createNote = async (req, res) => {
  const noteData = req.body;
  const user = req.user._id;
  await noteHandler.createNote(noteData, user);
  res.redirect("/");
};

const viewNotes = async (req, res) => {
  const notes = await noteHandler.getAllNotes(req.user._id);
  res.render("notes", { title: "My Notes", notes });
};

const editNote = async (req, res) => {
  const note = await noteHandler.getNoteById({ id: req.params.id });
  res.render("editNote", { title: `Edit Note "${note.name}"`, note });
};

const updateNote = async (req, res) => {
  const id = req.params.id;
  const noteData = req.body;
  const note = await noteHandler.updateNote(id, noteData);
  res.redirect("/");
};

const deleteNote = async (req, res) => {
  const id = req.params.id;
  const note = await noteHandler.deleteNote(id);
  res.redirect("/");
};

export default {
  addNote,
  createNote,
  viewNotes,
  updateNote,
  editNote,
  deleteNote,
};
