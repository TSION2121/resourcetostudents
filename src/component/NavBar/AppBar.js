import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About } from '../../pages/About/About'
import { Advices } from '../../pages/Advices/Advices'
import { Contact } from '../../pages/Contact/Contact'
import { Services } from '../../pages/Services/Services'
import Content from '../../pages/Home/Content '
import Navbar from './Navbar'
import Books from '../../pages/Services/Physics/Books'
import NotFound from '../../pages/NotFound/NotFound'
import Card from '../ServicesCard'
import Concepts from '../../pages/Services/Physics/Concepts'
import Experiments from '../../pages/Services/Physics/Experiments'
import Guides from '../../pages/Services/Physics/Guides'
import Labs from '../../pages/Services/Physics/Labs'
import Visuals from '../../pages/Services/Physics/Visuals'

export const AppBar = () => {
  return (
    <div>
        
        <Navbar />
    
    </div>
  )
}
