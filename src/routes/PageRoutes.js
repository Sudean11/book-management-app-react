import React from 'react'
import { Routes , Route} from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Book from '../components/Book';



const PageRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />}/>
            <Route path="/books" element={<Book/>}/>
        </Routes>
    )
}

export default PageRoutes