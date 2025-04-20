import React, { useEffect, useState } from 'react'
import { getCart } from '../Utils';
import PhoneCard from '../Components/PhoneCard';

const Cart = () => {
  const [phonesArr, setPhoneArr] = useState([]);
  useEffect(() => {
    setPhoneArr(getCart())
  }, [])
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-11/12 mx-auto">
        {phonesArr.map((phone) => (
          <PhoneCard deletable={false} key={phone.id} phone={phone} />
        ))}
      </div>
  )
}

export default Cart