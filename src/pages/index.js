import { React, useState } from 'react'
import Background from '../components/Background';
import Content from '../components/Content';
import axios from '../axios'


function Index() {
    
    return (
        <div className='App'>
            < Background />
            < Content />
        </div>
    )
}

export default Index
