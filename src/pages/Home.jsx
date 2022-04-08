import React ,{useState} from "react";
import HeroSection from "../Components/HeroSection/HeroSection";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";

const Home = () => {
const [isOpen , setIsOpen] = useState(false)

const toggleHandler = () => setIsOpen(!isOpen)

  return (
    <>
      <Sidebar toggleHandler={toggleHandler} isOpen={isOpen} />
      <Navbar toggleHandler={toggleHandler} />
      <HeroSection/>
    </>
  );
};

export default Home;
