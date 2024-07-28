import {  useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedPetCategory, setSelectedPetSubcategory } from '../../../../Components/Redux/PetActions'; // Import the action
import './PetCategorySection.scss';
import categories from './DataSection/categories';
import CategoryItems from './ProductsPerCategory/CategoryItems';

const PetCategorySection = () => {
  //const selectedPet = useSelector(state => state.pet.selectedPet);
  const selectedPetCategory = useSelector(state => state.pet.selectedPetCategory);
  //const selectedPetSubcategory = useSelector(state => state.pet.selectedPetSubcategory);
  const dispatch = useDispatch();

  const [currentCategories, setCurrentCategories] = useState([]);
  const [showsSubcategories, setShowsSubcategories] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const[ selectedAnimal, setSelectedAnimal] = useState('Dog');

  const topRef = useRef(null);

    useEffect(() => {
    const selectedAnimal = localStorage.getItem('selectedPet');
    setSelectedAnimal(selectedAnimal);
  }, []);



  useEffect(() => {
 
    setCurrentCategories(categories[selectedAnimal] || []);
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' });
    }

  }, [selectedAnimal]);



  const handleSelectedPetCategory = (category) => {
    dispatch(setSelectedPetCategory(category));
    setShowsSubcategories(true);
    //dispatch(setSelectedPetSubcategory(null));
    const selectedCat = currentCategories.find(cat => cat.name === category);
    setSelectedCategory(selectedCat);
  };


  return (
    <div className="pet-category-section" ref={topRef}>
      <div className="sidebar">
        <h2>CATEGORIES</h2>
        {showsSubcategories && selectedCategory ? (
          <ul>
            {selectedCategory.subcategory.map((subcategory, index) => (
              <li key={index} onClick={() => dispatch(setSelectedPetSubcategory(subcategory))}>{subcategory}</li>
            ))}
          </ul>
        ) : (
          <ul>
            {currentCategories.map((category, index) => (
              <li key={index} onClick={() => handleSelectedPetCategory(category.name)}>{category.name}</li>
            ))}
          </ul>
        )}
        <h3>FILTER BY PRICE</h3>
        <div className="price-filter">
          <input type="range" min="0" max="125000" />
          <span>Price: 0 KSh — 125000 KSh</span>
          <button>FILTER</button>
        </div>
      </div>
      <div className="content">
        <div className="breadcrumb">
          <span>Home / Pet Store / {selectedAnimal} Supplies{'>'}</span>
          <select>
            <option>Sort by popularity</option>
            <option>Sort by latest</option>
            <option>Sort by price: low to high</option>
            <option>Sort by price: high to low</option>
          </select>
        </div>

        {selectedPetCategory ? (
          <CategoryItems />
        ) : (
          <div className="category-grid">
            {currentCategories.map((category, index) => (
              <div key={index} className="category-item" onClick={() => handleSelectedPetCategory(category.name)}>
                <img src={category.img} alt={category.name} />
                <p>{category.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PetCategorySection;
