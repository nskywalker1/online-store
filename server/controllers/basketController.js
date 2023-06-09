const {Basket, BasketDevice, User, Device, DeviceInfo} = require('../models/models')
const ApiError = require('../error/ApiError')
const jwt = require('jsonwebtoken')


class BasketController {

    async addDevice(req, res){
        const {id} = req.params
        const device = await Device.findOne({where: {id}})
        const token = req.headers.authorization.split(' ')[1];
        const decode = jwt.decode(token, process.env.SECRET_KEY);
        const basket = await Basket.findOne({ where: { userId: decode.id } });
        const basketDevice = await BasketDevice.create({basketId: basket.id, deviceId: device.id})
        return res.json({device, basket});
    }

    async getDevices(req, res){
        const token = req.headers.authorization.split(' ')[1];
        const decode = jwt.decode(token, process.env.SECRET_KEY);
        const basket = await Basket.findOne({ where: { userId: decode.id } });

        const devices = await BasketDevice.findAll({where: { basketId: basket.id }, include: Device});

        return res.json(devices)
    }

    async removeDevice(req, res){
        const {id} = req.params
        const token = req.headers.authorization.split(' ')[1];
        const decode = jwt.decode(token, process.env.SECRET_KEY);

        const device = await BasketDevice.destroy({where: { id: id}, include: Device});

        res.json(device)
    }

}

module.exports = new BasketController()