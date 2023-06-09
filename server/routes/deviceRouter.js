const Router = new require('express')
const router = new Router()
const deviceController = require('../controllers/deviceController')
const checkRoleMiddleware = require("../middleware/checkRoleMiddleware");

router.post('/', checkRoleMiddleware('ADMIN'), deviceController.create)
router.get('/', deviceController.getAll)
router.get('/:id', deviceController.getOne)

module.exports = router