const express = require('express');
const wetsuitRouter= express.Router();
const Wetsuit = require('../models/Wetsuit');

// Get All original
wetsuitRouter.get('/', (req, res, next) => {
  Wetsuit.find((err, wetsuit) => {
    if(err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(wetsuit);
  });
});


//GET ONE
wetsuitRouter.get("/:wetsuitId", (req, res, next) => {
 Wetsuit.findOne({
      _id: req.params.wetsuitId
  }, (err, foundWetsuit) => {
      if (err) {
          res.status(500)
          return next(err)
      }
      return res.status(200).send(foundWetsuit)
  })
})

//Post
wetsuitRouter.post('/', (req, res, next) => {
  const newWetsuit = new Wetsuit(req.body);
  newWetsuit.save((err, savedWetsuits) => {
    if(err){
      res.status(500);
      return next(err);
    }
    return res.status(201).send(savedWetsuits);
  });
});

//Delete
wetsuitRouter.delete('/:wetsuitId', (req, res) => {
  Wetsuit.findOneAndDelete(
    {_id: req.params.wetsuitId},
    (err, deletedItem) => {
      if(err) {
        res.status(500);
        return next(err);
      }
      return res.status(200).send(`successfully deleted ${deletedItem.model} from the database!`);
    }
  );
});

//Edit
wetsuitRouter.put('/:wetsuitId', (req,res,next)=> {
  Wetsuit.findOneAndUpdate(
    {_id: req.params.wetsuitId},
    req.body, {new: true}, 
    (err, updatedWetsuit) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedWetsuit)
    }
  )
})



module.exports = wetsuitRouter;