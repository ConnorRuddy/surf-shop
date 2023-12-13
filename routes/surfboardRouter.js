const express = require('express');
const surfboardRouter= express.Router();
const Surfboard = require('../models/Surfboard');



//GET ALL
surfboardRouter.get('/', (req, res, next) => {
  Surfboard.find((err, surfboard) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(surfboard);
  });
});

//GET ONE
surfboardRouter.get("/:surfboardId", (req, res, next) => {
  Surfboard.findOne({
      _id: req.params.surfboardId
  }, (err, foundSurfboard) => {
      if (err) {
          res.status(500)
          return next(err)
      }
      return res.status(200).send(foundSurfboard)
  })
})


//POST
surfboardRouter.post('/', (req, res, next) => {
  const newSurfboard = new Surfboard(req.body);
  newSurfboard.save((err,savedSurfboards) => {
    if(err){
      res.status(500);
      return next(err);
    }
    return res.status(201).send(savedSurfboards);
  });
});

//DELETE
surfboardRouter.delete('/:surfboardId', (req, res) => {
  Surfboard.findOneAndDelete(
    {_id: req.params.surfboardId},
    (err, deletedItem) => {
      if(err) {
        res.status(500);
        return next(err);
      }
      return res.status(200).send(`successfully deleted ${deletedItem.model} from the database!`);
    }
  );
});

//EDIT
surfboardRouter.put('/:surfboardId', (req,res,next)=> {
  Surfboard.findOneAndUpdate(
    {_id: req.params.surfboardId},
    req.body, {new: true}, 
    (err, updatedSurfboard) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedSurfboard)
    }
  )
})

module.exports = surfboardRouter;