import React from "react";

const Trends = ({ trendLovation, trendTitle, tweets }) => {
  return (
    <div className="trend">
      <div>
        <p className="trend__location">{trendLovation}</p>
        <h5 className="trend__title">{trendTitle}</h5>
        <p className="trend__tweets trend__location">
          <span className="trend__tweets-num"> {tweets}</span> Tweets
        </p>
      </div>
    </div>
  );
};

export default Trends;
