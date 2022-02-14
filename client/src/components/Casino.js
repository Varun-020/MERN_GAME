import React from 'react'
import Cards from './Cards'

function Casino() {
    const games = [
        {
            link: "/teen-patti",
            name: "Teen Patti"
        },
        {
            link: "/dragon-tiger",
            name: "Dragon Tiger"
        },

    ]
    return (
        <div className="row mt-10">
            <div className="card_container">
                {
                    games.map((game, index) => (
                        <Cards link={game.link} name={game.name} key={game.name + index} />
                    ))
                }
            </div>

        </div>


    )
}

export default Casino