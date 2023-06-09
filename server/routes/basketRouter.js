const Router = new require('express')
const router = new Router()
const basketController = require('../controllers/basketController')


router.post('/:id', basketController.addDevice)
router.get('/', basketController.getDevices)
router.delete('/:id', basketController.removeDevice)


module.exports = router