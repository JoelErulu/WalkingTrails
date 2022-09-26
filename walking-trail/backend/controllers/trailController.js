const asyncHandler = require('express-async-handler')
const trailModel = require('../model/trailModel')

const Trail = require('../model/trailModel')

// @ desc - Get trails
// @route GET /api.goal
// @access Private
const getTrails = asyncHandler(async (req, res) => {
    const trails = await Trail.find()
    res.status(200).json(trails)
})

// @ desc - Set trails
// @route POST /api.goal
// @access Private
const setTrails = asyncHandler(async (req, res) => {
    if(!req.body.text){
      res.status(400)
      throw new Error('Please add a text field')
    }

    // Function to create a goal
    const trail = await Trail.create({
        text: req.body.text
    })
    
    res.status(200).json(trail)
})


// @ desc - Update trails
// @route PUT /api.goal/:id
// @access Private
const updateTrails = asyncHandler(async (req, res) => {
    const trail = await Trail.findById(req.params.id)
    

    if(!trail) {
        res.status(400)
        throw new Error('Trail not found')
    }

    const updatedTrail = await Trail.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedTrail)
})

// This command gets trails

// @ desc - Delete trails
// @route DELEte /api.goal/:id
// @access Private
const deleteTrails = asyncHandler(async (req, res) => {
    const trail = await Trail.findById(req.params.id)
    

    if(!trail) {
        res.status(400)
        throw new Error('Trail not found')
    }

    await trail.remove();


    res.status(200).json({id: req.params.id})
})



module.exports = {
    getTrails,
    setTrails,
    updateTrails,
    deleteTrails
}