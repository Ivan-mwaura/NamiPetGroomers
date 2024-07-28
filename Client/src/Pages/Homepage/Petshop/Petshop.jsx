
import { useDispatch } from 'react-redux';
import './Petshop.scss';
import dog from '../../../assets/images/gallery-7.jpg';
import cat from '../../../assets/images/petshop/cat.jpeg';
import bird from '../../../assets/images/petshop/bird.jpg';
import fish from '../../../assets/images/petshop/fish.jpeg';
import horse from '../../../assets/images/petshop/horse.jpeg';
import smallAnimals from '../../../assets/images/petshop//hamster.jpg';
import { setSelectedPet } from '../../../Components/Redux/PetActions'; 

const Petshop = () => {
  const dispatch = useDispatch();

  const pets = [
    { name: 'Dog', img: dog },
    { name: 'Cat', img: cat },
    { name: 'SmallAnimals', img: smallAnimals },
    { name: 'Birds', img: bird },
    { name: 'FishAndAquaticPets', img: fish },
    { name: 'Horse', img: horse }
  ];

  const handlePetSelect = (pet) => {
    dispatch(setSelectedPet(pet)); // Dispatch the action
    window.location.href = '/Petshop/PetCategorySection';
    localStorage.setItem('selectedPet', pet);
  }

  return (
    <div className="petshop">
      <h1>Pet Shop</h1>
      <h2>Shop By Pet</h2>
      <div className="pet-grid">
        {pets.map((pet, index) => (
          <div key={index} className="pet-item" onClick={() => handlePetSelect(pet.name)}>
            <div className="pet-image">
              <img src={pet.img} alt={pet.name} />
            </div>
            <p>{pet.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Petshop;
