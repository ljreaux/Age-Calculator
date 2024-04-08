import { useEffect, useState } from "react";

const useAgeCalc = (dob: string = Date()) => {
  const birthDate = new Date(dob);
  const [age, setAge] = useState({
    years: 0,
    months: 0,
    days: 0,
  });
  const [allowed, setAllowed] = useState(true);
  const runAgeCalc = () => setAllowed(true);

  const birthDay = birthDate.getDay();
  const birthMonth = birthDate.getMonth();
  const birthYear = birthDate.getFullYear();

  const now = new Date();
  const currentDay = now.getDay();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  useEffect(() => {
    let dayAge;
    let monthAge;
    let yearAge = currentYear - birthYear;
    if (currentMonth >= birthMonth)
      //get months when current month is greater
      monthAge = currentMonth - birthMonth;
    else {
      yearAge--;
      monthAge = 12 + currentMonth - birthMonth;
    }

    //get days
    if (currentDay >= birthDay)
      //get days when the current date is greater
      dayAge = currentDay - birthDay;
    else {
      monthAge--;
      dayAge = 31 + currentDay - birthDay;

      if (monthAge < 0) {
        monthAge = 11;
        yearAge--;
      }
    }

    if (allowed) {
      setAllowed(false);
      setAge({
        years: yearAge,
        months: monthAge,
        days: dayAge,
      });
    }
  }, [birthDate]);
  return { age, runAgeCalc };
};

export default useAgeCalc;
