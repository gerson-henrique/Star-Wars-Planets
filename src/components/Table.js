import React, { useContext, useEffect } from 'react';
import { APIContext } from '../context/APIContext';

export default function Table() {
  const { load,
    apiResponse,
    // setApiResponse,
    handleAPI } = useContext(APIContext);

  useEffect(() => {
    handleAPI();
    console.log(apiResponse);
  }, {});
  return (
    <table>
      <tr>
        <th> Name </th>
        <th> Rotation Period </th>
        <th> Orbital Period</th>
        <th> Diameter</th>
        <th> Climate</th>
        <th> Gravity</th>
        <th> Terrain</th>
        <th> Surface Water</th>
        <th> Population</th>
        <th> films</th>
        <th> Created</th>
        <th> Edited</th>
        <th> URL</th>
      </tr>
      {console.log(apiResponse)}
    </table>
  );
}
