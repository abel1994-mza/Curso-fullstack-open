const Header = (props) => {
  console.log(props);
  return <h1>{props.course}</h1>;
};

const Content = ({ parts }) => {
  console.log(parts);
  return (
    <>
      {parts.map((part) => (
        <p key={part.id}>
          {part.name}: {part.exercises}
        </p>
      ))}
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

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} exercises={course.exercises} />
      <Total parts={course.parts} />
    </div>
  );
};

export default Course;
