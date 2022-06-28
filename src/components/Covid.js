import React, { useEffect, useState } from "react";
import "./covid.css";

const Covid = () => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

  const getCovidData = async () => {
    try {
      const res = await fetch("https://covid-api.mmediagroup.fr/v1/cases");
      const actualData = await res.json();
      console.log(actualData.India);
      setData(actualData.India.All);
      setData2(actualData.India.Delhi);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <section>
        <h1 className="animated">🔴 LIVE</h1>
        <h2>COVID-19 CORONAVIRUS TRACKER</h2>
        <ul>
          <li className="card blue">
            <div className="card__main">
              <div className="card__inner blue">
                <p className="card__name blue">
                  <span className="blue"> OUR </span>COUNTRY
                </p>
                <p className="card__total card__large blue">INDIA</p>
              </div>
            </div>
          </li>
          <li className="card yellow">
            <div className="card__main">
              <div className="card__inner yellow">
                <p className="card__name yellow">
                  <span className="yellow"> TOTAL </span>CONFIRMED
                </p>
                <p className="card__total card__large yellow">
                  {data.confirmed}
                </p>
              </div>
            </div>
          </li>
          <li className="card orange">
            <div className="card__main">
              <div className="card__inner orange">
                <p className="card__name orange">
                  <span className="orange"> TOTAL </span>DEATHS
                </p>
                <p className="card__total card__large orange">{data.deaths}</p>
              </div>
            </div>
          </li>
          <li className="card green">
            <div className="card__main">
              <div className="card__inner green">
                <p className="card__name green">
                  <span className="green"> LIFE </span>EXPECTANCY
                </p>
                <p className="card__total card__large green">
                  {data.life_expectancy}
                </p>
              </div>
            </div>
          </li>
          <li className="card brown">
            <div className="card__main">
              <div className="card__inner brown">
                <p className="card__name brown">
                  <span className="brown"> LAST </span>UPDATED
                </p>
                <p className="card__total brown">{data2.updated}</p>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Covid;
