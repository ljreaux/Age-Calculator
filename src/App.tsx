import { useState } from "react";
import useAgeCalc from "./hooks/useAgeCalc";

type FormData = string | undefined;

function App() {
  const [formAge, setFormAge] = useState<FormData>();
  const { age, runAgeCalc } = useAgeCalc(formAge);

  return (
    <>
      <form
        action="submit"
        onSubmit={(e) => {
          e.preventDefault();
          const target = e.target as HTMLFormElement;
          setFormAge(target.date.value);
          runAgeCalc();
        }}
      >
        <h1>Calculate Your Current Age</h1>
        <label htmlFor="date">Enter your date of birth: </label>
        <input type="date" id="date" required />
        <button>Submit</button>
        <p>
          You are {age.years} years, {age.months} months, and {age.days} days
          old.
        </p>
      </form>
    </>
  );
}

export default App;
