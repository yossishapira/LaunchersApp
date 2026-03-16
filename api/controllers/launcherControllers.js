import * as launcherServices from '../services/launcherServices.js'

export async function createLaunchers(req, res) {
    try {
        const { city, rocketType, latitude, longitude, name } = req.body
        if (!city || !rocketType || !latitude || !longitude || !name) {
            return res.status(400).json({ eroor: "No standard fields sent" })
        }

        const data = await launcherServices.createLaunchers(city, rocketType, latitude, longitude, name)
        res.status(201).json(data)
    }
    catch (err) {
        res.status(404).jsom(err)
    }
}

