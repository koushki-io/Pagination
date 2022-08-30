import React from 'react'
import Content from '../content/Content'
import Header from '../header/Header'

const Home = ({count, setcount,user}) => {
  return (
    <>
     <Header user={user} count={count}/>
 <Content setcount={setcount} />
    </>
  )
}

export default Home