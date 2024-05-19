import { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import TabCategories from "../components/TabCategories";
import axios from "axios";

const Home = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await axios(`${import.meta.env.VITE_API_URL}/jobs`);
    setJobs(data);
  };

  return (
    <div>
      <Carousel></Carousel>
      <TabCategories jobs={jobs}></TabCategories>
    </div>
  );
};

export default Home;
