const React = require('react')
const Def = require('../default')

function Index(data) {
    let placesFormatted = data.places.map((places) => {
        return (
            <div>
                <h2>{places.name}</h2>
                <img src={place.pic} alt={place.name} />
            </div>
        )
    })
        return (
            <Def>
                <div>
                    <h1>This is the Index</h1>
                    {placesFormatted}
                </div>
            </Def>
        )
}

module.exports = Index