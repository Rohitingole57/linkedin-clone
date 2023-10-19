import React from "react";
import "./Widgets.css";
import InfoIcon from"@mui/icons-material/Info"
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord"
const Widgets = () => {

  const newArticle = (heading, subtitle) => {
    return (
      <div className="widgets_article">
        <div className="widgets_article_left">
          <FiberManualRecordIcon />
        </div>
        <div className="widgets_article_right">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  };
  return (

    <div className="widgets">
      <div className="widgets_header">
        <h2>linkedIn News</h2>
        <InfoIcon />
      </div>
      {newArticle("Rohit is back","Top News -2000 readers")}
      {newArticle("Freshers are facing Jobs Issues","Top News -6665 readers")}
      {newArticle("Freshers Needs Experience to start Job?","Top News -5040 readers")}
      {newArticle("Gov Jobs are opening due to elections","Top News -22510 readers")}
      
    </div>
  );
};

export default Widgets;
