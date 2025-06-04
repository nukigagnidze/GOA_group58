// App.js
import React from "react";
import CustomBox from "./CustomBox";

export default function App() {
  return (
    <div>
      <h1>Props და სტილიზაცია</h1>
      {/* ვუთითებთ სხვადასხვა props-ებს: ტექსტი და ფერი */}
      <CustomBox text="გამარჯობა React-დან!" bgColor="lightblue" />
      <CustomBox text="სხვა ბლოკი" bgColor="lightgreen" />
    </div>
  );
}
