// src/actions/petActions.js

export const setSelectedPet = (pet) => ({
    type: 'SET_SELECTED_PET',
    payload: pet,
  });
  
  export const setSelectedPetCategory = (category) => ({
    type: 'SET_SELECTED_PET_CATEGORY',
    payload: category,
  });
  
  export const setSelectedPetSubcategory = (subcategory) => ({
    type: 'SET_SELECTED_PET_SUBCATEGORY',
    payload: subcategory,
  });

  export const setSubscriptionId = (id) => ({
    type: 'SET_SUBSCRIPTION_ID',
    payload: id,
  });
  