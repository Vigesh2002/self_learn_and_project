import React from 'react'
import Weather from './components/Weather'
import UserStatus from './components/UserStatus'
import Greeting from './components/Greeting'


const Index6 = () => {
  return (
    <div>
        <Weather/>
        <UserStatus loggedIn={true} isAdmin={true} />
        <Greeting timeOfDay = "morning"/>
    </div>
  )
}

export default Index6
