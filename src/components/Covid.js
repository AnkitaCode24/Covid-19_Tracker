import React, { useEffect, useState } from "react";
import "../styling/covid19.css";

export default function Covid19Tracker() {
  const [data, setData] = useState();

  const GetData = async () => {
    const response = "https://api.covid19india.org/data.json";
    const res = await fetch(response);
    const finalData = await res.json();
    console.log("data", finalData.statewise[0]);
    setData(finalData.statewise[0]);
  };
  useEffect(() => {
    GetData();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="heading">
          <h1>Covid-19 Tracking</h1>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 card-main">
            <div
              className="card-inner"
              style={{ backgroundColor: "brown", height: "250px" }}
            >
              <p className="card-name">
                <span>OUR </span>COUNTRY
              </p>
              <p className="card-total card-small">INDIA</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 card-main">
            <div
              className="card-inner"
              style={{ backgroundColor: "green", height: "250px" }}
            >
              <p className="card-name">
                <span>Total </span>RECOVERED
              </p>
              <p className="card-total card-small"> {data?.recovered}</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 card-main">
            <div
              className="card-inner"
              style={{ backgroundColor: "gray", height: "250px" }}
            >
              <p className="card-name">
                <span>Total </span>CONFIRMED
              </p>
              <p className="card-total card-small"> {data?.confirmed}</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 card-main">
            <div
              className="card-inner"
              style={{ backgroundColor: "orange", height: "250px" }}
            >
              <p className="card-name">
                <span>Total </span>DEATH
              </p>
              <p className="card-total card-small"> {data?.deaths}</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 card-main">
            <div
              className="card-inner"
              style={{ backgroundColor: "pink", height: "250px" }}
            >
              <p className="card-name">
                <span>Total </span>ACTIVE
              </p>
              <p className="card-total card-small"> {data?.active}</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 card-main">
            <div
              className="card-inner"
              style={{ backgroundColor: "red", height: "250px" }}
            >
              <p className="card-name">
                <span>Last </span>UPDATES
              </p>
              <p className="card-total card-small">{data?.lastupdatedtime}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
