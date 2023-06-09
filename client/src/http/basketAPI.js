import {$authHost, $host} from "./index";

export const addDevice = async (deviceId, basketId) => {
    const {data} = await $authHost.post('api/basket/' + deviceId)
    return data
}

export const getDevices = async () => {
    const {data} = await $authHost.get('api/basket')
    return data
}

export const removeDevice = async (id) => {
    const {data} = await $authHost.delete('api/basket/' + id)
    return data
}