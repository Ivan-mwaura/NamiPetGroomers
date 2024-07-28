const express = require('express')
const router = express.Router();

const {
    DogProducts,
    CatProducts,
    BirdProducts,
    HorseProducts,
    FishAndAcquaticAnimalsProducts,
    updateDogProduct,
    deleteDogProduct,
    updateCatProduct,
    deleteCatProduct,
    updateBirdProduct,
    deleteBirdProduct,
    updateHorseProduct,
    deleteHorseProduct,
    updateFishAndAcquaticAnimalsProduct,
    deleteFishAndAcquaticAnimalsProduct,
    getDogProducts,
    getCatProducts,
    getBirdProducts,
    getHorseProducts,
    getFishAndAcquaticAnimalsProducts

    } = require('../Controllers/PetshopProducts');

router.route('/dogProducts').post(DogProducts);
router.route('/catProducts').post(CatProducts);
router.route('/birdProducts').post(BirdProducts);
router.route('/horseProducts').post(HorseProducts);
router.route('/fishAndAquaticAnimalsProducts').post(FishAndAcquaticAnimalsProducts);

// Update Dog Product
router.route('/updateDogProduct/:id').patch(updateDogProduct);
//delete a Dog Product
router.route('/deleteDogProduct/:id').delete(deleteDogProduct);
//get all Dog Products
router.route('/getDogProducts').get(getDogProducts);

//update a Cat Product
router.route('/updateCatProduct/:id').patch(updateCatProduct);
//delete a Cat Product
router.route('/deleteCatProduct/:id').delete(deleteCatProduct);
//get all Cat Products
router.route('/getCatProducts').get(getCatProducts);

//update a Bird Product
router.route('/updateBirdProduct/:id').patch(updateBirdProduct);
//delete a Bird Product
router.route('/deleteBirdProduct/:id').delete(deleteBirdProduct);
//get all Bird Products
router.route('/getBirdProducts').get(getBirdProducts);

//update a Horse Product
router.route('/updateHorseProduct/:id').patch(updateHorseProduct);
//delete a Horse Product
router.route('/deleteHorseProduct/:id').delete(deleteHorseProduct);
//get all Horse Products
router.route('/getHorseProducts').get(getHorseProducts);

//update a Fish and Aquatic Animals Product
router.route('/updateFishAndAquaticAnimalsProduct/:id').patch(updateFishAndAcquaticAnimalsProduct);
//delete a Fish and Aquatic Animals Product
router.route('/deleteFishAndAquaticAnimalsProduct/:id').delete(deleteFishAndAcquaticAnimalsProduct);
//get all Fish and Aquatic Animals Products
router.route('/getFishAndAcquaticAnimalsProducts').get(getFishAndAcquaticAnimalsProducts);

module.exports = router;