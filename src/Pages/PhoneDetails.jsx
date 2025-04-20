
import { useLoaderData, useParams } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import Button from "../UI/Button";
import { FaBookmark } from "react-icons/fa";
import { addCart, addToLocal, getCart, getDataFromLocal } from "../Utils";
import { useContext } from "react";
import { BookMarkContext, CartContext } from "../Providers/Context";
import { toast } from 'react-toastify';

const PhoneDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const singlePhone = data.filter((phone) => phone.id === +id);
  const [singlePhoneObj] = singlePhone;
  const { image, name, description } = singlePhoneObj;
  const {cart, setCart} = useContext(CartContext)
  const {bookMarks, setBookMarks} = useContext(BookMarkContext)
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img src={image} alt="Phone" />
      </figure>
      <div className="card-body">
        <h1 className="card-title text-4xl">{name}</h1>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Button onClick={() => {
            addCart(singlePhoneObj);
            setCart(getCart());
            {
            const isExist =  cart.find(item => item.id === +singlePhoneObj.id)
            if(isExist) {
              toast.warn('Item already exist')
            } else {
              toast.success("Item added successfully")
            }
          }
            
            }} label={<FaCartPlus />} />
          <Button onClick={() => {addToLocal(singlePhoneObj);
          {
            const isExist =  bookMarks.find(item => item.id === +singlePhoneObj.id)
            if(isExist) {
              toast.warn('Item already exist')
            } else {
              toast.success("Bookmarked successful")
            }
          };
          setBookMarks(getDataFromLocal())}} label={<FaBookmark />
} />
        </div>
      </div>
    </div>
  );
};

export default PhoneDetails;
