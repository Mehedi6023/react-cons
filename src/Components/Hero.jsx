import React, { useState } from "react";
import banner from "../assets/banner.png";
import Button from "../UI/Button";
const Hero = ({handleSearch}) => {
  const [searchText, setSearchText] = useState('')
  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col">
        <img src={banner} className="max-w-8/12 rounded-lg shadow-2xl" />
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6 max-w-[80ch] text-center">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <form onSubmit={(e) => (
            handleSearch(e, searchText),
            setSearchText('')
          )} className="w-full flex flex-col sm:flex-row gap-6 justify-center items-center  my-10">
            <label className="input w-[70%]">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input value={searchText} onChange={e => setSearchText(e.target.value)} className="w-[100%] inline-block" type="search" required placeholder="Search Phone by name" />
            </label>
            <Button type='submit' label='Search' />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
