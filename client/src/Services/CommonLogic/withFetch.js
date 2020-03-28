import React, { useState } from "react";

export default Component => {
  const Fetcher = ({ ...props }) => {
    const [loading, setLoading] = useState(true);
    let data = {};

    const fetcher = async ({
      path = "/",
      method = "GET",
      headers = { "Content-type": "application/json" },
      object
    }) => {
      await fetch(path, {
        method,
        body: JSON.stringify(object),
        headers
      })
        .then(result => {
          return result.json();
        })
        .then(res => {
          data = res;
          setLoading(false);
        });
      return data;
    };

    return (
      <Component fetcher={fetcher} data={data} loading={loading} {...props} />
    );
  };

  return Fetcher;
};
