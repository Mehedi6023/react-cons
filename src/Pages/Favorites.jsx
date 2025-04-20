import React, { useEffect, useState } from 'react'
import { getDataFromLocal, removeFavorite } from '../Utils'
import PhoneCard from '../Components/PhoneCard';

const Favorites = () => {
  const [phonesArr, setPhoneArr] = useState([]);
  const handleDelete = (id) => {
    removeFavorite(id)
    setPhoneArr(getDataFromLocal())
  }
  useEffect(() => {
    const savedPhones = getDataFromLocal()
    setPhoneArr(savedPhones)
  }, [])
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-11/12 mx-auto">
        {phonesArr.map((phone) => (
          <PhoneCard handleDelete = {handleDelete} deletable={true} key={phone.id} phone={phone} />
        ))}
      </div>
  )
}

export default Favorites