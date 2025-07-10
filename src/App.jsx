import Note from "./componentes/Note";
import Note2 from "./componentes/Note2";
import { useState, useEffect } from "react";
import personServices from "./personServices/persons";
import Notification from "./componentes/notification";
import "./css/index.css";
const App = () => {
  const [person, setPerson] = useState([{ name: "Juan", movil: 23443423 }]);
  const [newName, setNewName] = useState("");
  const [newNum, setNewNum] = useState("");
  const [searchTeam, setSearchTeam] = useState("");
  const [editingPersonId, setEditingPersonId] = useState(null); // para saber si editamos
  const [message, SetMessage] = useState(null);

  useEffect(() => {
    personServices.getAll().then((initialPerson) => setPerson(initialPerson));
  }, []);

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };
  const handleNumChange = (e) => {
    setNewNum(e.target.value);
  };
  const handleSearch = (e) => {
    setSearchTeam(e.target.value);
  };

  const handleDelete = (id) => {
    const personToDelete = person.find((p) => p.id === id);
    const confinm = window.confirm(
      `Èstas seguro que quieres Eliminar ${personToDelete.name}?`
    );

    if (confinm) {
      personServices
        .deletePerson(id)
        .then(() => setPerson(person.filter((p) => p.id !== id)))
        .catch((error) => {
          SetMessage({ text: "La persona fue Eliminada", type: "Error" });
          setTimeout(() => {
            SetMessage(null);
          }, 5000);
        });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingPersonId !== null) {
      // Actualizar persona existente
      const updatedPerson = {
        id: editingPersonId,
        name: newName,
        movil: newNum,
      };

      personServices
        .update(editingPersonId, updatedPerson)
        .then((returnedPerson) => {
          setPerson(
            person.map((p) => (p.id !== editingPersonId ? p : returnedPerson))
          );
          SetMessage({
            text: "Los datos fueron actualizado correctamente",
            type: "success",
          });
          setTimeout(() => {
            SetMessage(null);
          }, 5000);

          resetForm();
        })
        .catch(() => alert("Error al actualizar"));
    } else {
      // Crear nueva persona
      const newPerson = {
        name: newName,
        movil: newNum,
      };
      personServices
        .create(newPerson)
        .then((returnedPerson) => {
          setPerson([...person, returnedPerson]);
          SetMessage({
            text: "La persona se agrego correctamente",
            type: "success",
          });
          setTimeout(() => {
            SetMessage(null);
          }, 5000);
          resetForm();
        })
        .catch(() => alert("Error al crear"));
    }
  };
  const resetForm = () => {
    setNewName("");
    setNewNum("");
    setEditingPersonId(null);
  };

  // Cuando se clickea "Actualizar" en una persona, cargamos sus datos al formulario
  const handleEditClick = (p) => {
    setNewName(p.name);
    setNewNum(p.movil);
    setEditingPersonId(p.id);
  };

  const filterPerson = (persons, search) => {
    return persons.filter((person) =>
      person.name.toLowerCase().includes(search.toLowerCase())
    );
  };
  return (
    <>
      <h1>Agenda Telefonica</h1>
      <Notification message={message} />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleNameChange}
          value={newName}
          placeholder="Nombre"
        />
        <input
          type="tel"
          placeholder="Número"
          value={newNum}
          onChange={handleNumChange}
          required
        />
        <button type="submit">
          {editingPersonId ? "Actualizar" : "Guardar"}
        </button>

        {editingPersonId && (
          <button type="button" onClick={resetForm}>
            Cancelar
          </button>
        )}
      </form>

      <h1>Lista de personas</h1>
      <ul>
        {person.map((n) => (
          <li key={n.id}>
            <Note
              note={n}
              handleDelete={handleDelete}
              handleEditClick={handleEditClick}
            />
          </li>
        ))}
      </ul>

      <h1>Buscar Nombre</h1>

      <input
        type="text"
        value={searchTeam}
        onChange={handleSearch}
        placeholder="Buscar nombre"
      />

      {searchTeam && (
        <>
          <h2>Personas buscadas</h2>

          {filterPerson(person, searchTeam).length > 0 ? (
            filterPerson(person, searchTeam).map((n, index) => (
              <Note2 key={n.id || index} note={n} />
            ))
          ) : (
            <p>No se ha encontrado la persona.</p>
          )}
        </>
      )}
    </>
  );
};

export default App;
