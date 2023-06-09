import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = []
        this._brands = []
        this._devices = []
        this._selectedType = {}
        this._selectedBrand = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 3
        makeAutoObservable(this)
    }

    setTypes(types){
        this._types = types
    }

    setPage(page){
        this._page = page
    }

    setTotalCount(count){
        this._totalCount = count
    }

    setLimit(limit){
        this._limit = limit
    }

    setSelectedType(type){
        this.setPage(1)
        this._selectedType = type
    }

    setBrands(brands){
        this._brands = brands
    }

    setSelectedBrand(brand){
        this.setPage(1)
        this._selectedBrand = brand
    }

    setDevices(devices){
        this._devices = devices
    }

    setIsAuth(bool){
        this._isAuth = bool
    }

    setUser(user){
        this._user = user
    }

    get isAuth(){
        return this._isAuth
    }

    get page(){
        return this._page
    }

    get totalCount(){
        return this._totalCount
    }

    get limit(){
        return this._limit
    }

    get types(){
        return this._types
    }

    get selectedType(){
        return this._selectedType
    }

    get brands(){
        return this._brands
    }

    get selectedBrand(){
        return this._selectedBrand
    }

    get devices(){
        return this._devices
    }

    get user(){
        return this._user
    }
}