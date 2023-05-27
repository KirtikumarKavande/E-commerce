import React from "react";
import { Link, useParams } from "react-router-dom";

const AlbumDetails = () => {
  const paramsData = useParams();
  console.log(paramsData);
  return <div>
    <div>
    {paramsData.details}
    </div>
  <Link to={'..'} relative="path">Go back</Link>
  
  </div>;
};

export default AlbumDetails;
