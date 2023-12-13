const express = require('express');
const accessoryRouter = express.Router();
const Accessory = require('../models/Accessory');



//GET All
accessoryRouter.get('/', (req, res, next) => {
  Accessory.find((err, accessory) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(accessory);
  });
});



//GET ONE
accessoryRouter.get("/:accessoryId", (req, res, next) => {
  Accessory.findOne({
      _id: req.params.accessoryId
  }, (err, foundAccessory) => {
      if (err) {
          res.status(500)
          return next(err)
      }
      return res.status(200).send(foundAccessory)
  })
})



//GET by Brand
accessoryRouter.get('/search/brand', (req, res, next) => {
 Accessory.find({brand: req.query.brand}, (err,accessories) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(accessories)
  })
  })


//Post
accessoryRouter.post('/', (req, res, next) => {
  const newAccessory= new Accessory(req.body)
 newAccessory.save((err, savedAccessory) => {
    if(err){
      res.status(500);
      return next(err);
    }
    return res.status(201).send(savedAccessory);
  });
});


//Delete
accessoryRouter.delete('/:accessoryId', (req, res) => {
  Accessory.findOneAndDelete(
    {_id: req.params.accessoryId},
    (err, deletedItem) => {
      if(err) {
        res.status(500);
        return next(err);
      }
      return res.status(200).send(`Successfully deleted ${deletedItem.model}`);
    }
  );
});


accessoryRouter.put('/:accessoryId', (req,res,next)=> {
  Accessory.findOneAndUpdate(
    {_id: req.params.accessoryId},
    req.body, {new: true}, 
    (err, updatedAccessory) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedAccessory)
    }
  )
})




module.exports = accessoryRouter;