import axios from "axios";

export const handleMakingReport = async (reportData, toggleReport, notify) => {
    try {
      const response = await axios.post(
        `${process.env.BACKEND_SERVER}/reportedLinks`,
        reportData
      );
      console.log("response", response);
      toggleReport();
      notify(
        "Thank you for reporting a problem with our service. We are working hard to fix it quickly. ",
        "success"
      );
    } catch (err) {
      console.log("err", err);
    }
  };
