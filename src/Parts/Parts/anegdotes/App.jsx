const Header = ({ course }) => <h1>{course}</h1>;

const Part = ({ part, exercises }) => (
  <p>
    {part} {exercises}
  </p>
);

const Content = ({ parts }) => (
  <>
    <Part part={parts[0].name} exercises={parts[0].exercises} />
    <Part part={parts[1].name} exercises={parts[1].exercises} />{" "}
    <Part part={parts[2].name} exercises={parts[2].exercises} />
  </>
);

// const Total = ({ exercises1, exercises2, exercises3 }) => (
//   <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
// );
const Total = ({ parts }) => (
  <p>
    Number of exercises{" "}
    {parts[0].exercises + parts[1].exercises + parts[2].exercises}
  </p>
);

const App = () => {
  // const course = "Half Stack application development";
  // const part1 = "Fundamentals of React";
  // const exercises1 = 10;
  // const part2 = "Using props to pass data";
  // const exercises2 = 7;
  // const part3 = "State of a component";
  // const exercises3 = 14;

  const course = {
    name: "Half Stack application development",
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
      {/* <h1>Ejercicio 1.1</h1>
      <p>{course}</p>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Numeros de ejercicios {exercises1 + exercises2 + exercises3}</p> */}

      <hr />
      {/* <h1>Ejercicio 1.2</h1>
      <Header course={course} />
      <Content
        part1={part1}
        exercises1={exercises1}
        part2={part2}
        exercises2={exercises2}
        part3={part3}
        exercises3={exercises3}
      />
      <Total
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      /> */}
      <hr></hr>
      {/* <h1>Ejercicio 1.3 y 1.4</h1>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} /> */}
      <hr></hr>
      <h1>Ejercicio 1.5</h1>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  );
};

export default App;
