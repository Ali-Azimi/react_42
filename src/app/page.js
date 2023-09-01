import Counter from "./Counter";
import StudentPanel from "./StudentPanel";

function Home() {
  const scores = [1, 2, 3, 4, 5];
  const studentScore = scores.find((score) => score > 4);
  return (
    <>
      <h1>HELLO WORLD! {studentScore}</h1>
      <StudentPanel />
      <Counter />
    </>
  );
}

export default Home;
