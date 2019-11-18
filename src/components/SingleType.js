import React from "react"

import './SingleType.scss'
const SingleType = ({ typeName, typeData }) => {
  const {
    double_damage_from,
    double_damage_to,
    half_damage_from,
    half_damage_to
  } = typeData
  return (
    <div className="single-type-container">
      {/* <hr /> */}
      <h3>{typeName.toUpperCase()}</h3>
      <div className="single-type-grid-parent">
        <div />
        <div className="grid-label">Damage From</div>
        <div className="grid-label">Damage To</div>
        <div className="grid-label">Double</div>
        <div>
          <p className="shorthand-label">Vulnerable To:</p>
          <ul>
            {double_damage_from.map(type => (
              <li key={type}>{type}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="shorthand-label">Super Effective Against:</p>
          <ul>
            {double_damage_to.map(type => (
              <li key={type}>{type}</li>
            ))}
          </ul>
        </div>
        <div className="grid-label">Half</div>
        <div>
          <p className="shorthand-label">Resistant To:</p>
          <ul>
            {half_damage_from.map(type => (
              <li key={type}>{type}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="shorthand-label">Not Very Effective Against:</p>
          <ul>
            {half_damage_to.map(type => (
              <li key={type}>{type}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SingleType
