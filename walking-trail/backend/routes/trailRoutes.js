const express = require('express')
const router = express.Router()
const {getTrails, setTrails, updateTrails, deleteTrails} = require('../controllers/trailController')

router.route('/').get(getTrails).post(setTrails)
router.route('/:id').delete(deleteTrails).put(updateTrails)


module.exports = router