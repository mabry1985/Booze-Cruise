import React from 'react';
import Keg from './Keg';

const masterKegList = [
  {
    name: 'Apocolypse IPA',
    brand: '10 Barrel',
    abv: '9.2%',
  },
  {
    name: 'Superfuzz Blood Orange Pale',
    brand: 'Elysian',
    abv: '6.4%',
  },
  {
    name: 'Sweet As Pale',
    brand: "Everybody's Brewing",
    abv: '5.0%',
  },
  {
    name: 'PBR',
    brand: 'Pabst Brewing Company',
    abv: '3.2%',
  },
  {
    name: 'Pilsner',
    brand: 'Pfreim',
    abv: '6.1%',
  },
];

function KegList() {
  return (
    <div>
      <hr />
      {masterKegList.map((keg, index) =>
        <Keg name={keg.name}
          brand={keg.brand}
          price={keg.price}
          abv={keg.abv}
          key={index} />
      )}
     </div>
   );
};

export default KegList;
