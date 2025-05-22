const Note = ({ note }) => {
  return (
    <>
      <li>
        Nombre: {note.name}/ Telefono: {note.movil}
      </li>
    </>
  );
};

export default Note;
