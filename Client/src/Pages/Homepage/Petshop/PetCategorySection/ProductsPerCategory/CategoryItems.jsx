import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './CategoryItems.scss';

const CategoryItems = () => {
  const [items, setItems] = useState([]);
  const selectedPetCategory = useSelector(state => state.pet.selectedPetCategory);
  const navigate = useNavigate();
  const [selectedAnimal, setSelectedAnimal] = useState('Dog');

  useEffect(() => {
    const storedAnimal = localStorage.getItem('selectedPet');
    if (storedAnimal) {
      setSelectedAnimal(storedAnimal);
    }
  }, []);

  useEffect(() => {
    const fetchItems = async () => {
      let url = '';
      switch (selectedAnimal) {
        case 'Dog':
          url = 'http://localhost:5000/api/v1/getDogProducts';
          break;
        case 'Cat':
          url = 'http://localhost:5000/api/v1/getCatProducts';
          break;
        case 'Birds':
          url = 'http://localhost:5000/api/v1/getBirdProducts';
          break;
        case 'Horse':
          url = 'http://localhost:5000/api/v1/getHorseProducts';
          break;
        case 'FishAndAquaticPets':
          url = 'http://localhost:5000/api/v1/getFishAndAcquaticAnimalsProducts';
          break;
        case 'SmallAnimals':
          url = 'http://localhost:5000/api/v1/getSmallAnimalsProducts';
          break;
        default:
          break;
      }

      if (url) {
        try {
          const response = await fetch(url);
          const data = await response.json();
          const filteredItems = data.data.filter(item => item.productCategory === selectedPetCategory);
          setItems(filteredItems);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };

    fetchItems();
  }, [selectedPetCategory, selectedAnimal]);

  const handleSelectedItem = (item) => {
    navigate('/AddToCart', { state: { product: item } });
  };

  return (
    <div className="category-items">
      <div className="items-grid">
        {items.map((item, index) => (
          <div key={index} className="item" onClick={() => handleSelectedItem(item)}>
            {item.productImage && (
              <img 
                src={item.productImage} 
                alt={item.productName} 
              />
            )}
            <p>{item.productName}</p>
            <p>{item.productPrice}</p>
            <p>Rating: {item.productRating} ⭐</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryItems;
