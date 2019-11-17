import React from "react"
import ReactDOM from "react-dom"

import bug from "./data/type-bug.json"
import dark from "./data/type-dark.json"
import dragon from "./data/type-dragon.json"
import electric from "./data/type-electric.json"
import fairy from "./data/type-fairy.json"
import fighting from "./data/type-fighting.json"
import fire from "./data/type-fire.json"
import flying from "./data/type-flying.json"
import ghost from "./data/type-ghost.json"
import grass from "./data/type-grass.json"
import ground from "./data/type-ground.json"
import ice from "./data/type-ice.json"
import normal from "./data/type-normal.json"
import poison from "./data/type-poison.json"
import psychic from "./data/type-psychic.json"
import rock from "./data/type-rock.json"
import steel from "./data/type-steel.json"
import water from "./data/type-water.json"
import SingleType from "./components/SingleType.js"

const types = {
  bug,
  dark,
  dragon,
  electric,
  fairy,
  fighting,
  fire,
  flying,
  ghost,
  grass,
  ground,
  ice,
  normal,
  poison,
  psychic,
  rock,
  steel,
  water
}

const Main = () => {
  const typeEntries = Object.entries(types)
  return (
    <>
      <h1>Pokémon Type Advisor</h1>
      <ul className="types-list">
        {typeEntries.map(([typeName, typeData]) => (
          <SingleType typeName={typeName} typeData={typeData} key={typeName} />
        ))}
      </ul>
    </>
  )
}

ReactDOM.render(<Main />, document.getElementById("main"))
