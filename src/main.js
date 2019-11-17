import React from "react"
import ReactDOM from "react-dom"

const types = [
  "bug",
  "dark",
  "dragon",
  "electric",
  "fairy",
  "fighting",
  "fire",
  "flying",
  "ghost",
  "grass",
  "ground",
  "ice",
  "normal",
  "poison",
  "psychic",
  "rock",
  "steel",
  "water"
]

const Main = () => {
  return (
    <>
      <h1>Pokémon Type Advisor</h1>
      <ul className="types-list">
        {types.map(type => (
          <li key={type}>{type}</li>
        ))}
      </ul>
    </>
  )
}

ReactDOM.render(<Main />, document.getElementById("main"))
