/* eslint-disable react/jsx-key */
import { useContext } from 'react';
import dataContext from '../utilities/context';
import Continent from './Continent';

const Continents = () => {
  const data = useContext(dataContext);
  return (
    <div>
      <h1>Hello</h1>
      {
        data.continents.map((i) => (
          <div>
            <p key={i.code}>{i.name}</p>
            <ul>
              {i.countries.map((o) => <Continent o={o} />)}
            </ul>
          </div>
        ))
      }
    </div>
  );
};

export default Continents;
