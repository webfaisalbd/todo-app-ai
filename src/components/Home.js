import React from 'react'

import Todos from './Todos'
import style from './Home.module.css'

const demoData = [
    { id: 1, title: "Javascript", desc: "es6, spread operator" },
    { id: 2, title: "React", desc: "router dom 6, props, useState..." }
]

const Home = () => {
    return (
        <div className={style.container}>
           <Todos todos={demoData} /> 
        </div>
    )
}

export default Home