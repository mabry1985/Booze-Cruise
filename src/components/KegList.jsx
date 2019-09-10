import React from 'react';
import Keg from './Keg';

const masterKegList = [
  {
    name: 'Apocolypse IPA',
    brewery: '10 Barrel Brewing',
    abv: '9.2%',
    price: '$6.00',
  },
  {
    name: 'Superfuzz Blood Orange Pale',
    brewery: 'Elysian Brewing',
    abv: '6.4%',
    price: '$6.00',
  },
  {
    name: 'Sweet As Pale',
    brewery: "Everybody's Brewing",
    abv: '5.0%',
    price: '$6.00',
  },
  {
    name: 'PBR',
    brewery: 'Pabst Brewing Company',
    abv: '3.2%',
    price: '$2.00',
  },
  {
    name: 'Pilsner',
    brewery: 'Pfreim Brewing',
    abv: '6.1%',
    price: '$6.00',
  },
];

function KegList() {
  return (
    <div>
      <hr />
      {masterKegList.map((keg, index) =>
        <Keg name={keg.name}
          brewery={keg.brewery}
          price={keg.price}
          abv={keg.abv}
          key={index} />
      )}
     </div>
   );
};

export default KegList;
