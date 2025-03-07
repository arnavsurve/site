import React from "react";

interface LightProps {
  children: React.ReactNode;
}

const Light: React.FC<LightProps> = ({ children }) => {
  return <p style={{ color: "gray", marginTop: "0.25rem" }}>{children}</p>;
};

const Reading = () => {
  return (
    <>
      <a href="/">Back</a>
      <ul>
        <li>
          Flatland: A Romance of Many Dimensions{" "}
          <Light>Edwin Abbott Abbott</Light>
        </li>
        <li>
          The White Tiger
          <Light>Aravind Adiga</Light>
        </li>
        <li>
          Siddhartha
          <Light>Hermann Hesse</Light>
        </li>
      </ul>
    </>
  );
};

export default Reading;
