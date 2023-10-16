import React from "react";
import Wrapper from "../../../components/giveAway/wrapper/Wrapper";
import Marque from "../../../components/marque/Marque";
import TopLayout from "../../../components/topLayout/TopLayout";
import { getData } from "../../../utils/dashboardTablePagesFunctions";
const GiveAway = async () => {
  const response = await getData("giveaway/event");
  const entries = await getData("giveaway/eventEntries", {
    email: "psafwat16@gmail.com",
  });
  console.log(entries?.data);

  return (
    <div className="wrapper">
      <TopLayout />
      <div className="wrapper-2">
        <Marque />
        {/* <div className="center-under-dev">
          <UnderDevelopment />
        </div>
 */}
        <Wrapper eventData={response?.data?.data} entries={entries?.data} />
      </div>
    </div>
  );
};

export default GiveAway;
