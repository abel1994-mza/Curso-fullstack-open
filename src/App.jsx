const Header = (props) => {
  console.log(props);
  return <h1>{props.course}</h1>;
};

const Content = ({ part, exercises }) => {
  console.log(part, exercises);
  return (
    <>
      <p>Parte: {part}</p>
      <p>Ejercicios: {exercises}</p>
    </>
  );
};
const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0);
  console.log(total);
  return (
    <>
      <p>Number of exercises {total}</p>
    </>
  );
};

const App = () => {
  const course = {
    name: "Half Stack applications development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <>
      <Header course={course.name} />
      {course.parts.map((part) => (
        <Content key={part.name} part={part.name} exercises={part.exercises} />
      ))}
      <Total parts={course.parts} />
    </>
  );
};

export default App;
