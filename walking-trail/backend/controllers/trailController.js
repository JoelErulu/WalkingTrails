const asyncHandler = require('express-async-handler')

// @ desc - Get trails
// @route GET /api.goal
// @access Private
const getTrails = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Get Trails'})
})

// @ desc - Set trails
// @route POST /api.goal
// @access Private
const setTrails = asyncHandler(async (req, res) => {
    if(!req.body.text){
      res.status(400)
      throw new Error('Please add a text field')
    }
    
    res.status(200).json({message: 'Post Trails'})
})


// @ desc - Update trails
// @route PUT /api.goal/:id
// @access Private
const updateTrails = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
})

// This command gets trails

// @ desc - Delete trails
// @route DELEte /api.goal/:id
// @access Private
const deleteTrails = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})
})



module.exports = {
    getTrails,
    setTrails,
    updateTrails,
    deleteTrails
}