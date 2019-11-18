import React, { useState, useEffect } from "react"
import { useHistory, useLocation } from "react-router-dom"
import { stringify, parse } from "query-string"

import "./SearchBar.scss"
const SearchBar = () => {
  const history = useHistory()
  const { search } = useLocation()
  const [searchValue, setSearchValue] = useState("")
  useEffect(() => {
    if (search) {
      const parsedSearch = parse(search)
      setSearchValue(parsedSearch.search)
    }
  }, [])
  const handleChange = evt => {
    if (evt.target.value) {
      const stringifiedQuery = stringify({
        search: evt.target.value
      })
      history.replace(`?${stringifiedQuery}`)
    } else history.replace("")
    setSearchValue(evt.target.value)
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
