"use client";
import React, { useEffect } from "react";

const Rejester = () => {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          console.log(
            "Service Worker registered with scope: ",
            registration.scope
          );
        })
        .catch((error) => {
          console.log("Service Worker registration failed: ", error);
        });
    }
  }, []);

  return <div></div>;
};

export default Rejester;
