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