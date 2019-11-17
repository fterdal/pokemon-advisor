// Run this in a NodeJS environment

const axios = require("axios")
const { writeFileSync } = require("fs")

;(async function() {
  try {
    for (let i = 1; i <= 18; i++) {
      const { data } = await axios.get(`https://pokeapi.co/api/v2/type/${i}`)
      console.log(`Writing ${data.name}...`)
      let transformedData = {}
      Object.keys(data.damage_relations).forEach(key => {
        transformedData[key] = data.damage_relations[key].reduce(
          (acc, elem) => {
            return [...acc, elem.name]
          },
          []
        )
      })
      writeFileSync(`./type-${data.name}.json`, JSON.stringify(transformedData))
    }
    console.log("Done Writing!")
  } catch (err) {
    console.error(err)
  }
})()
