import express from "express";

const app = express();

app.use(express.json());

let persons = [
  {
    id: "1",
    name: "Juan",
    number: "535353",
  },
  {
    id: "3",
    name: "lucas",
    number: "243534534",
  },
];

app.get("/", (request, response) => {
  response.json(persons);
});

app.get("/info", (req, res) => {
  const date = new Date();
  const info = ` <p> la canditdad de personas son ${persons.length} 
  <p> ${date} </p>`;

  res.send(info);
});
// obteniendo una sola persona
app.get("/api/persons/:id", (req, res) => {
  const id = req.params.id;
  const person = persons.find((p) => p.id === id);
  if (person) {
    res.json(person);
  } else {
    res.status(404).json({ error: "Persona no encontrada" });
  }
});

//Funcion para eliminar personas
app.delete("/api/persons/:id", (req, res) => {
  const id = req.params.id;
  persons = persons.filter((p) => p.id !== id);

  res.status(204).end();
});

//FUNCION para mandar datos
app.post("/api/persons", (req, res) => {
  const body = req.body;
  console.log(req.body);

  if (!body.name || !body.number) {
    return res.status(404).json({ error: "Persona y numero no existe" });
  }
  const nameExists = persons.some((p) => p.name === body.name);
  if (nameExists) {
    return res._construct.status(404).json({ error: "Nombre ya existente" });
  }

  const person = {
    id: (persons.length + 1).toString(),
    name: body.name,
    number: body.number,
  };
  persons = persons.concat(person);
  res.json(person);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor funcionando en el puerto ${PORT}`);
});
