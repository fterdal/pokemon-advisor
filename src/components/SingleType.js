import React from "react"

const SingleType = ({ typeName, typeData }) => {
  const {
    double_damage_from,
    double_damage_to,
    half_damage_from,
    half_damage_to
  } = typeData
  return (
    <>
      <h2>{typeName}</h2>
      <div>
        <h3>Double Damage From:</h3>
        <ul>
          {double_damage_from.map(type => (
            <li key={type}>{type}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Double Damage To:</h3>
        <ul>
          {double_damage_to.map(type => (
            <li key={type}>{type}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Half Damage From:</h3>
        <ul>
          {half_damage_from.map(type => (
            <li key={type}>{type}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Half Damage To:</h3>
        <ul>
          {half_damage_to.map(type => (
            <li key={type}>{type}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default SingleType
