import React, { useState, useEffect } from "react"
import { useHistory, useLocation } from "react-router-dom"
import { stringify } from "query-string"

import './SearchBar.scss'
const SearchBar = () => {
  const history = useHistory()
  const { search } = useLocation()
  const [searchValue, setSearchValue] = useState("")
  useEffect(() => {
    if (search) setSearchValue(search)
  }, [])
  const handleChange = evt => {
    console.log(evt.target.value)
    history.search
  }
  return (
    <input
      className="search-bar"
      value={searchValue}
      onChange={handleChange}
      placeholder="Filter by type name"
      type="text"
    />
  )
}

export default SearchBar
