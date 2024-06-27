import Carousel from "../components/Carousel";
import TabCategories from "../components/TabCategories";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../components/LoadingSpinner";

const Home = () => {
  // fetch all jobs data
  const {
    data: jobs = [],
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/jobs`);
      return data;
    },
  });

  if (isPending) return <LoadingSpinner />;
  if (isError) return <p>{error.message}</p>;

  return (
    <div>
      <Carousel></Carousel>
      <TabCategories jobs={jobs}></TabCategories>
    </div>
  );
};

export default Home;
