import React from 'react'
import "./Home.css"
import Items from './Items'
import img1 from '../Images/Vector.png'
import img2 from '../Images/Logo (1).png'
import img3 from '../Images/Vector (1).png'
import img4 from '../Images/Vector (2).png'

const Home = () => {
  return (
    <div className='container'>
      <header className='home__header'>
        <div><img className='headerImg1' src={img1}/></div>
        <div><img className='headerImg2' src={img2}/></div>
      </header>
      <div className='search__input'>
        <img src={img3}/>
        <input type='text' placeholder='Search'/>
        <img src={img4}/>
      </div>
      <Items />
    </div>
  )
}

export default Home