import React, { useEffect, useState } from "react";
import SLUtils from "@slsanyi/utils";

console.log(SLUtils);

function ajaxData() {
  return fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
    response.json()
  );
}

export default function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    ajaxData()
      .then((res) => {
        setData(res);
        console.log("no optimize res", res);
      })
      .finally(() => {
        console.log("no optimize finally");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <>Loading...</>;
  }

  return (
    <>
      Main Content
      <div>
        {data.map((v) => (
          <div key={v.id}>{v.name}</div>
        ))}
      </div>
    </>
  );
}
