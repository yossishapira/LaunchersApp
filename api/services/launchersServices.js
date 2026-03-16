import Launchers from "../models/Launchers";

export async function createLaunchers(launcher) {
    const newlauncher = await Launchers.create({
        city: launcher.city,
        rocketType: launcher.rocketType,
        latitude: launcher.latitude,
        longitude: launcher, longitude,
        name: launcher.name
    })
    return newlauncher
}