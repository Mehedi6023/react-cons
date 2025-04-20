import React, { useEffect, useState } from 'react'
import { BookMarkContext } from './Context'
import { getDataFromLocal } from '../Utils'

const BookmarksProvider = ({children}) => {
    const [bookMarks, setBookMarks] = useState([])
    useEffect(() => {
        setBookMarks(getDataFromLocal())
    }, [])
  return (
    <BookMarkContext.Provider value={{bookMarks, setBookMarks}}>
        {children}
    </BookMarkContext.Provider>
  )
}

export default BookmarksProvider