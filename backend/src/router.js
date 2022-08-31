const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.browse);
/** 
fetch("http://localhot:5000/items", {
    method: 'GET',  *GET, POST, PUT, DELETE, etc.
    mode: 'cors', });
*/
router.get("/items/:id", itemControllers.read);
/**
 fetch("http://localhot:5000/items/12, {
     method: 'GET',  *GET, POST, PUT, DELETE, etc.
     mode: 'cors', }");
 */
router.put("/items/:id", itemControllers.edit);
/**
 fetch("http://localhot:5000/items/12, {
     method: 'PUT',  *GET, POST, PUT, DELETE, etc.
     mode: 'cors', }");
 */
router.post("/items", itemControllers.add);
/**
 fetch("http://localhot:5000/items/12, {
     method: 'POST',  *GET, POST, PUT, DELETE, etc.
     mode: 'cors', }");
 */
router.delete("/items/:id", itemControllers.destroy);
// fetch("http://localhot:5000/items/12");
/**
 fetch("http://localhot:5000/items/12, {
     method: 'DELETE',  *GET, POST, PUT, DELETE, etc.
  mode: 'cors', }");
 */

module.exports = router;
