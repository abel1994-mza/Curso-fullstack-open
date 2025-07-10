const Note = ({ note, handleDelete, handleEditClick }) => {
  return (
    <>
      Nombre: {note.name}/ Telefono: {note.movil}
      <button onClick={() => handleDelete(note.id)}>Eliminar</button>{" "}
      <button onClick={() => handleEditClick(note)}>Actualizar</button>
    </>
  );
};

export default Note;
