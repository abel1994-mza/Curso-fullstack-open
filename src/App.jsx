const Header = (props) => {
  console.log(props);
  return <h1>{props.course}</h1>;
};

const Content = ({ part, exercises }) => {
  return (
    <>
      <p>Parte: {part}</p>
      <p>Ejercicios: {exercises}</p>
    </>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };
  return (
    <>
      <Header course={course} />
      <p>
        {part1.name} {part1.exercises}
      </p>
      <p>
        {part2.name} {part2.exercises}
      </p>
      <p>
        {part3.name} {part3.exercises}
      </p>
    </>
  );
};

export default App;
