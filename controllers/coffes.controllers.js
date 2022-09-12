const Coffe = require("../models/coffe.model");
const Coffee = require("../models/coffe.model");
module.exports.coffeeControllers = {
getListDrink: async (req, res) =>{
 try {
     const getNews = await Coffe.find()
    res.json(getNews)
}
 catch(error){
    res.json(`${error} : Ошибка при выводе всех напитков `)

 }
},
getListDrinkInStack: async (req, res) => {
  try{  const inStget = Coffe.find({inStock: true})
  res.json(inStget)
} catch(error){
    res.json(`${eroor} : Ошибка при выводе напитков, которые есть в наличии`)
}},
drinkInformation: async (req, res) => {
 try {
    const getId = await Coffe.findById(req.params.id)
    res.json(getId)
 }catch(error){
 res.json(`${error} : ошибка вывода определенного напитка`)
 }
},
addDrink:async (req,res)  => {
 const {name, price, inStock, presenceOfСaffeine, volume, description } = req.body;
 try{
    const coffe = await Coffe.create({
        name,
        price,
        inStock,
        presenceOfСaffeine,
        volume,
        description
    });
    res.json(coffe)

 }catch(error){
    res.json(`${error}: ошибка при добавлении напитка`)
 }
},
dropDrink: async (req, res) =>{
try{
 await Coffe.findByIdAndRemove(req.params.id)
 res.json("Напиток удален")
}catch(error){
    res.json(`${error}: Ошибка при удалении напитка`)
}
},
patchDrink: async (req, res) => {
    const {name, price, inStock, presenceOfСaffeine, volume, description } = req.body;
try{ const patchDr = await Coffe.findByIdAndUpdate(req.params.id, {
    name,
    price,
    inStock,
    presenceOfСaffeine,
    volume,
    description
});
res.json(patchDr)

}catch(error){
    res.json(`${error} : Ошибка при изменении напитка`)
}
}



}