import  { Router } from 'express'

const router = Router()

// get a product using a given ID 
router.get('/product/:id', (req, res) => {
    res.json({message:" This is a unique product"} )
})
//  get all the products (for an authenticated user)
router.get('/product', (req, res) => {
    res.json({message:" This is product"} )
})
//create a new product
router.post('/product/:id', (req, res) => {
})
// update or replace a product that matches a given ID
router.put('/product/:id', (req, res) => {
})
// delete a product by a give ID
router.delete('/product/:id', (req, res) => {
})

// Update
router.get('/update/:id', (req, res) => {
})

router.get('/update', (req, res) => {
})

router.post('/update/:id', (req, res) => {
})

router.put('/update/:id', (req, res) => {
})

router.delete('/update/:id', (req, res) => {
})

//updatepoint
router.get('/updatepoint/:id', (req, res) => {
})

router.get('/updatepoint', (req, res) => {
})

router.post('/updatepoint/:id', (req, res) => {
})

router.put('/updatepoint/:id', (req, res) => {
})

router.delete('/updatepoint/:id', (req, res) => {
})

export default router