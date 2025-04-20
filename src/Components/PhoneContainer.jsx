import React, { useEffect, useState } from "react";
import PhoneCard from "./PhoneCard";
import Button from "../UI/Button";

const PhoneContainer = ({ phones }) => {
  const [phonesArr, setPhoneArr] = useState([]);
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    if (showAll) {
      setPhoneArr(phones);
    } else {
      setPhoneArr(phones.slice(0, 6));
    }
  }, [phones, showAll]);
  return (
    <div className="w-11/12 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {phonesArr.map((phone) => (
          <PhoneCard key={phone.id} phone={phone} />
        ))}
      </div>
      <Button
        onClick={() => {
          setShowAll(!showAll);
          if (showAll) window.scrollTo(0, 500);
        }}

        label={showAll ? "Show Less" : "Show All"}
      />
      
    </div>
  );
};

export default PhoneContainer;
