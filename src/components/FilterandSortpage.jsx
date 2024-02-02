import React, { useState, useEffect } from 'react';
import image1 from '../assests/img1.jpg';
import image2 from '../assests/img2.jpg';
import image3 from '../assests/img3.jpg';
import image4 from '../assests/casualshirt.jpeg';
import image5 from '../assests/casualtrouser.jpeg';
import image6 from '../assests/hoodie.jpeg';
import image7 from '../assests/vesti.jpeg';
import image8 from '../assests/saree.jpeg';
import image9 from '../assests/turban.jpeg';

import './FilterAndSortPage.css';
const dressesData = [
  { id: 1, name: 'Casual Pants', price: 29.99, category: 'Casual', image: image1 },
  { id: 2, name: 'Party Wear', price: 49.99, category: 'Party', image: image2 },
  { id: 3, name: 'Formal Wear', price: 79.99, category: 'Formal', image: image3 },
  { id: 4, name: 'Casual shirt', price: 69.99, category: 'Casual', image: image4 },
  { id: 5, name: 'Casual trouser', price: 39.99, category: 'Casual', image: image5 },
  { id: 6, name: 'Hoodie', price: 109.99, category: 'Party', image: image6 },
  { id: 7, name: 'vesti', price: 16.99, category: 'Ethinic', image: image7 },
  { id: 8, name: 'Saree', price: 269.99, category: 'Ethinic', image: image8 },
  { id: 9, name: 'turbans', price: 19.99, category: 'Accessories', image: image9 },
  
];

const FilterAndSortPage = () => {
  const [filteredDresses, setFilteredDresses] = useState(dressesData);
  const [sortOption, setSortOption] = useState('price');


  // for the filter function

  const handleFilter = (category) => {
    const filtered = dressesData.filter((dress) => dress.category === category);
    setFilteredDresses(filtered);
  };

  const displayall=()=>{
    setFilteredDresses(dressesData);
  }

  //for the sorting function


  const handleSort = (option) => {
    setSortOption(option);
  };

  useEffect(() => {
    const sortedDresses = [...filteredDresses].sort((a, b) => {
      if (sortOption === 'price') {
        return a.price - b.price;
      } else if (sortOption === 'name') {
        return a.name.localeCompare(b.name);
      } else {
        return 0;
      }
    });

    setFilteredDresses(sortedDresses);
  }, [sortOption]);

  // data render in ui 
  return (
    <div>
      <nav>
        <div className="row">
            <div className="col-md-8">
                <h4 className='nav-head'>DB Commerce</h4>
            </div>
            <div className="col-md-2">
            <label className='label-nav'> Filter </label>
            <button className='btn-filter' onClick={() => handleFilter('Casual')}>Casual</button>
            <button className='btn-filter' onClick={() => displayall()}>All</button>
            </div>
            <div className="col-md-2">
            <label className='label-nav'> Sort </label> 
            <label>
            <input
            type="radio"
            name="sort"
            value="price"
            checked={sortOption === 'price'}
            onChange={() => handleSort('price')}
            />
            Price
            </label>
            <label>
              <input
                type="radio"
                name="sort"
                value="name"
                checked={sortOption === 'name'}
                onChange={() => handleSort('name')}
              />
              Name
            </label>
            </div>
        </div>
      </nav>
      <h4 className='disp-page-head'>Discover all the fashion Category in our platform</h4>
      {/* <p className='disp-page-subhead'></p> */}
      <div className='main-page'>
       
        {filteredDresses.map((dress) => (
          <div key={dress.id} className='prd-disp' >
            <img src={dress.image} alt={dress.name} className='image-style'/>
            <h3>{dress.name}</h3>
            <p>Category: {dress.category}</p>
            <p>Price: ${dress.price}</p>
            <button className='btn-atc'>Add To Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterAndSortPage;
