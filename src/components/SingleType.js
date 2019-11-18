import React from "react"

import './SingleType.scss'
const SingleType = ({ typeName, typeData }) => {
  const {
    double_damage_from,
    double_damage_to,
    half_damage_from,
    half_damage_to,
    no_damage_from,
    no_damage_to,

  } = typeData
  return (
    <div className="single-type-container">
      <h3 className="single-type-header">{typeName.toUpperCase()}</h3>
      <div className="single-type-grid-parent">
        <div className="single-type-grid-cell">
          <p className="shorthand-label">Vulnerable To:</p>
          <ul>
            {double_damage_from.map(type => (
              <li key={type}>{type}</li>
            ))}
          </ul>
        </div>
        <div className="single-type-grid-cell">
          <p className="shorthand-label">Super Effective Against:</p>
          <ul>
            {double_damage_to.map(type => (
              <li key={type}>{type}</li>
            ))}
          </ul>
        </div>
        <div className="single-type-grid-cell">
          <p className="shorthand-label">Resistant To:</p>
          <ul>
            {half_damage_from.map(type => (
              <li key={type}>{type}</li>
            ))}
          </ul>
        </div>
        <div className="single-type-grid-cell">
          <p className="shorthand-label">Not Very Effective Against:</p>
          <ul>
            {half_damage_to.map(type => (
              <li key={type}>{type}</li>
            ))}
          </ul>
        </div>
        <div className="single-type-grid-cell">
          <p className="shorthand-label">Immune To:</p>
          <ul>
            {no_damage_from.map(type => (
              <li key={type}>{type}</li>
            ))}
          </ul>
        </div>
        <div className="single-type-grid-cell">
          <p className="shorthand-label">No Damage Against:</p>
          <ul>
            {no_damage_to.map(type => (
              <li key={type}>{type}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SingleType
