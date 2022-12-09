import React from 'react'

const data = [
    { id: 1, name: "Faisal" },
    { id: 2, name: "Shajib" }
]

const Home = () => {
    return (
        <div>
            {
                data.map(d => {
                    return <p>{d.name}</p>
                })
            }
        </div>
    )
}

export default Home