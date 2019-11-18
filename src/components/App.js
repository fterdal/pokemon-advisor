import React from "react"
import { useLocation } from "react-router-dom"
import { parse } from "query-string"
import SingleType from "./SingleType.js"
import SearchBar from "./SearchBar.js"

import types from "../data"

import "./App.scss"
import NavBar from "./NavBar.js"
const App = () => {
  const typeEntries = Object.entries(types)
  const location = useLocation()
  const { search } = parse(location.search)
  const matchingTypes =
    search === undefined
      ? typeEntries
      : typeEntries.filter(([typeName]) => {
          return typeName.includes(search)
        })
  return (
    <div className="app-container">
      {/* <h1>Pokémon Type Advisor</h1> */}
      <NavBar />
      <SearchBar />
      <div className="types-list">
        {matchingTypes.map(([typeName, typeData]) => (
          <SingleType typeName={typeName} typeData={typeData} key={typeName} />
        ))}
      </div>
    </div>
  )
}

export default App
