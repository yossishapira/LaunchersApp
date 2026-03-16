import Launchers from "../models/Launchers.js";

export async function createLaunchers(city,rocketType,latitude,longitude,name) {
    const newlauncher = await Launchers.create({
        city,
        rocketType,
        latitude,
        longitude,
        name
    })
    return newlauncher
}


export async function getAllLaunchers() {
    const launchers = await Launchers.find({})
    return launchers.map((launcher) =>({
        id: launcher._id,
        city: launcher.city,
        rocketType: launcher.rocketType,
        latitude: launcher.latitude,
        longitude: launcher.longitude,
        name: launcher.name
    }))
    
}

export async function getByIdLaunchers(id) {
    const launcher = await Launchers.findById(id)
   if(!launcher) return "Not found"
    return {
        id: launcher._id,
        city: launcher.city,
        rocketType: launcher.rocketType,
        latitude: launcher.latitude,
        longitude: launcher.longitude,
        name: launcher.name
    }

    
}

export async function deleteLaunchers(id){
    const deleteId = await Launchers.findByIdAndDelete(id) 
    if(!deleteId) return "Not found"
    return deleteId
}

