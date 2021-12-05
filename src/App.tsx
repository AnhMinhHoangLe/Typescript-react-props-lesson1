import React from "react";
import "./App.css";
import { Header } from "./Components/Header/Header";
import { Person } from "./Components/Person/Person";
import { PersonList } from "./Components/PersonList/PersonList";
import { Status } from "./Components/Status/Status";
import { Footer } from "./Components/Footer/Footer";
import { Oscar } from "./Components/Oscar/Oscar";
function App() {
  //////////////PERSON///////////////////
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };
  //////////////PERSON LIST//////////////////////
  const nameList = [
    {
      first: "Anh",
      last: "Le",
    },
    {
      first: "Clark",
      last: "Kem",
    },
  ];
  return (
    <div className="App">
      <Status status="loading" />
      <Header name="Anh" isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Oscar>
        <Footer>Hello</Footer>
      </Oscar>
    </div>
  );
}

export default App;
