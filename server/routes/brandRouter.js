const Router = new require('express')
const router = new Router()
const brandController = require('../controllers/brandController')
const checkRoleMiddleware = require("../middleware/checkRoleMiddleware");

router.post('/', checkRoleMiddleware('ADMIN'), brandController.create)
router.get('/', brandController.getAll)
router.get('/:id', brandController.getOne)

module.exports = router