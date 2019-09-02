const express = require('express');

const router = express.Router();
//@route    GET api/contacts
//@desc     Get all users contacts
//@access   Private
router.get('/',(req,res) => {
    res.send('get all contacts');
})
//@route    POST api/contacts
//@desc     add new contact
//@access   Private
router.post('/',(req,res) => {
    res.send('add contact');
})
//@route    PUT api/contacts/:id
//@desc     update contact
//@access   Public
router.put('/:id',(req,res) => {
    res.send('Update contact');
})
//@route    Delete api/contacts/:id
//@desc     delete a  contact
//@access   Public
router.delete('/:id',(req,res) => {
    res.send('delete a contact');
})


module.exports = router;