import Note from "./componentes/Note";
import Note2 from "./componentes/Note2";
import { useState } from "react";
const App = () => {
  const [person, setPerson] = useState([{ name: "Juan", movil: 23443423 }]);
  const [newName, setNewName] = useState("");
  const [newNum, setNewNum] = useState("");
  const [searchTeam, setSearchTeam] = useState("");

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };
  const handleNumChange = (e) => {
    setNewNum(e.target.value);
  };

  const handleSearch = (e) => {
    setSearchTeam(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPerson = {
      id: person.length + 1,
      name: newName,
      movil: newNum,
    };
    setPerson([...person, newPerson]);
    setNewName("");
  };
  const filterPerson = (persons, search) => {
    return persons.filter((person) =>
      person.name.toLowerCase().includes(search.toLowerCase())
    );
  };
  return (
    <>
      <h1>Agenda Telefonica</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleNameChange}
          value={newName}
          placeholder="Nombre"
        />
        <input
          type="number"
          onChange={handleNumChange}
          value={newNum}
          placeholder="Numero"
        />

        <button type="submit">Agregar</button>
      </form>

      <h1>Lista de personas</h1>
      {person.map((n, i) => {
        return <Note key={i} note={n} />;
      })}
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
          {filterPerson(person, searchTeam).map((n, index) => (
            <Note2 key={index} note={n} />
          ))}
        </>
      )}
    </>
  );
};

export default App;
