const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const surfboardSchema = new Schema({
  image: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
  // store: {
  //   type: Schema.Types.ObjectId,
  //   ref: "Store",
  //   required: true
  // }
  //Then go to postman and make new post localhost:8019/store
  // in postman POST {name: "redskull"}
  //Then take the id "exampleID"
  //Then go in each Seperate Router and add the ID to the req.body
  //IN the POST REQUEST under each router, pass the ID in as a parameter
  //SUrfboardRouter Example
  // surfboardRouter.post('/:storeID', (req, res, next) => {
    //Add this - req.body.store = req.params.storeID
  //   const newSurfboard = new Surfboard(req.body);
  //   newSurfboard.save((err,savedSurfboards) => {
  //     if(err){
  //       res.status(500);
  //       return next(err);
  //     }
  //     return res.status(201).send(savedSurfboards);
  //   });
  // });

  //Now when you do a post request for surboards in POSTMAN
  //localhost:8019/surfboards/(storeID)
  //Add the Store model parameters and do a normal post request

  //Now write a GET request in each Router that will allow you view everyting in store
  //In This example were gonna use the surfboardRouter
  //surfboardRouter.get("/:storeID", (req, res, next) => {
  // Store.find({ store: req.params.storeID}, (err, products) => {
    //if(err){
      // res.status(500)
    //return next(err)
  //}
  //return res.status(200).send(products)
  //})
  // })
  // 

});

module.exports = mongoose.model('Surfboard', surfboardSchema);