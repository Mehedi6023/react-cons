import React, { useState } from "react";
import Hero from "../Components/Hero";
import PhoneContainer from "../Components/PhoneContainer";
import { useLoaderData } from "react-router-dom";
import NoMatch from "../Components/NoMatch";
const Home = () => {
  const data = useLoaderData();
  const [phones, setPhones] = useState(data);
  const [noMatch, setNoMatch] = useState(false)
  const handleSearch = (e, text) => {
    e.preventDefault();

    const searchedPhones = data.filter(
      (phone) =>
        phone.name.toLowerCase().split(" ").includes(text.toLowerCase()) ||
        phone.brand.toLowerCase().split(" ").includes(text.toLowerCase())
    );
    setPhones(searchedPhones);
    if (searchedPhones.length < 1) setNoMatch(true)
  };
  return (
    <div>
      <Hero handleSearch={handleSearch} />
      {noMatch ? <NoMatch />:<PhoneContainer phones={phones} />}
    </div>
  );
};

export default Home;
