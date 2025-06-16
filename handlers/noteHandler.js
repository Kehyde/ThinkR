import Note from "../models/noteModel.js";

const createNote = async (noteData, user) => {
  const fullNote = { ...noteData, user };
  console.log("note data in handler", noteData);
  return await Note.create(fullNote);
};

const getAllNotes = async (userId) => {
  return await Note.find({ user: userId }).lean();
};

const getNoteById = async ({ id }) => {
  return await Note.findOne({ _id: id }).lean();
};

const updateNote = async (id, noteData) => {
  return await Note.findOneAndUpdate({ _id: id }, noteData, {
    new: true,
    runValidators: true,
  }).lean();
};

const deleteNote = async (id) => {
  return await Note.findByIdAndDelete(id).lean();
};

export default {
  createNote,
  getAllNotes,
  updateNote,
  getNoteById,
  deleteNote,
};
