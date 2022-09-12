const { Router} = require('express');
const { coffeeControllers } = require('../controllers/coffes.controllers');
const router = Router();
router.get("/drinks", coffeeControllers.getListDrink)
router.get("/drinks/in-stock", coffeeControllers.getListDrinkInStack)
router.get("/drinks/:id",coffeeControllers.drinkInformation)
router.post("/drinks", coffeeControllers.addDrink)
router.delete("/drinks/:id", coffeeControllers.dropDrink)
router.patch("/drinks/:id",coffeeControllers.patchDrink)



module.exports = router;