import React, { useEffect, useState } from "react";
import Button from "./Button";
import StatisticLine from "./StatisticLine";

function Statistics({ good, neutral, bad, setGood, setNeutral, setBad }) {
  const [empty, setEmpty] = useState(false);
  useEffect(() => {
    const check = () => {
      const total = good + neutral + bad;
      if (total === 0) {
        setEmpty(true);
      } else {
        setEmpty(false);
      }
    };
    check();
  }, [good, neutral, bad]);

  return (
    <>
      <h3>give feedback</h3>
      <Button
        setGood={setGood}
        setNeutral={setNeutral}
        setBad={setBad}
        good={good}
        neutral={neutral}
        bad={bad}
      />
      <h3>statistics</h3>
      {empty ? (
        <p>No feedback given</p>
      ) : (
        <>
          <table>
            <tbody>
              <StatisticLine text="good" value={good} />
              <StatisticLine text="neutral" value={neutral} />
              <StatisticLine text="bad" value={bad} />
              <tr>
                <td>all</td>
                <td>{good + neutral + bad}</td>
              </tr>
              <tr>
                <td>average</td>
                <td>{(good - bad) / (good + neutral + bad)}</td>
              </tr>
              <tr>
                <td>positive </td>
                <td>{(good * 100) / (good + neutral + bad)} %</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </>
  );
}

export default Statistics;
