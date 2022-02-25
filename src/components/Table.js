import React, { useContext, useEffect } from 'react';
import { APIContext } from '../context/APIContext';
import { FilterContext } from '../context/FilterContext';

export default function Table() {
  const { load,
    setLoad,
    apiResponse,
    handleAPI } = useContext(APIContext);

  const { handleNameFilter, filtredRes, filter } = useContext(FilterContext);

  useEffect(() => {
    const asyncCall = async () => {
      setLoad(true);
      await handleAPI();
    };
    asyncCall();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const asyncCall = async () => {
      if (apiResponse) {
        await handleNameFilter(apiResponse);
        setLoad(false);
      }
    };
    asyncCall();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiResponse, filter]);

  return (
    <table>
      <thead>
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
      </thead>
      <tbody>

        {load
          ? (
            <tr>
              <td>
                loading..
              </td>
            </tr>
          ) : (
            filtredRes.map((plt, id) => (
              <tr key={ id }>
                <td>
                  {plt.name}
                </td>
                <td>
                  {plt.rotation_period}
                </td>
                <td>
                  {plt.orbital_period}
                </td>
                <td>
                  {plt.diameter}
                </td>
                <td>
                  {plt.climate}
                </td>
                <td>
                  {plt.gravity}
                </td>
                <td>
                  {plt.terrain}
                </td>
                <td>
                  {plt.surface_water}
                </td>
                <td>
                  {plt.population}
                </td>
                <td>
                  {plt.films}
                </td>
                <td>
                  {plt.created}
                </td>
                <td>
                  {plt.edited}
                </td>
                <td>
                  {plt.url}
                </td>
              </tr>
            ))
          )}
      </tbody>
    </table>
  );
}
