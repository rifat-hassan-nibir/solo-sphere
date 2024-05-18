import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobCard from "./JobCard";

const TabCategories = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl ">Browse Jobs By Categories</h1>

      <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 ">
        Three categories available for the time being. They are Web Development, Graphics Design and Digital Marketing. Browse them by
        clicking on the tabs below.
      </p>

      <Tabs>
        <div className="flex justify-center">
          <TabList>
            <Tab>Web</Tab>
            <Tab>Graphics Design</Tab>
            <Tab>Digital Marketing</Tab>
          </TabList>
        </div>

        <TabPanel>
          <JobCard></JobCard>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabCategories;
