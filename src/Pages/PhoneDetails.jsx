
import { useLoaderData, useParams } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import Button from "../UI/Button";
import { FaBookmark } from "react-icons/fa";
import { addCart, addToLocal, getCart, getDataFromLocal } from "../Utils";
import { useContext } from "react";
import { BookMarkContext, CartContext } from "../Providers/Context";

const PhoneDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const singlePhone = data.filter((phone) => phone.id === +id);
  const [singlePhoneObj] = singlePhone;
  const { image, name, description } = singlePhoneObj;
  const {setCart} = useContext(CartContext)
  const {setBookMarks} = useContext(BookMarkContext)
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img src={image} alt="Phone" />
      </figure>
      <div className="card-body">
        <h1 className="card-title text-4xl">{name}</h1>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Button onClick={() => {addCart(singlePhoneObj); setCart(getCart()) }} label={<FaCartPlus />} />
          <Button onClick={() => {addToLocal(singlePhoneObj); setBookMarks(getDataFromLocal())}} label={<FaBookmark />
} />
        </div>
      </div>
    </div>
  );
};

export default PhoneDetails;
