import * as launcherServices from '../services/launcherServices.js'

export async function createLaunchers(req, res) {
    try {
        const { city, rocketType, latitude, longitude, name } = req.body
        if (!city || !rocketType || !latitude || !longitude || !name) {
            return res.status(400).json({ eroor: "No standard fields sent" })
        }
        const latitudeNumber = Number(latitude);
        const longitudeNumber = Number(longitude);
        const data = await launcherServices.createLaunchers(
            city, 
            rocketType, 
            latitudeNumber, 
            longitudeNumber,
            name
    )
        res.status(201).json(data)
    }
    catch (err) {
        res.status(404).json(err)
    }
}

export async function getAllLaunchers(req, res) {
    try {
        const launchers = await launcherServices.getAllLaunchers()
        return res.status(201).json({ launchers })
    }
    catch (err) {
        res.jsom({ err: "Not found" })
    }
}

export async function getByIdLaunchers(req, res) {
    const id = req.params.id
    try {
        const launcher = await launcherServices.getByIdLaunchers(id)
        return res.status(200).json({ launcher })
    }

    catch (err) {
        res.json({ err: "Not found" })

    }
}

export async function deleteLaunchers(req,res) {
    const id = req.params.id
    const deleteId = await launcherServices.deleteLaunchers(id)
    if(!deleteId){
        return res.status(404).json({err:"Not found"})
    }
    return res.status(200).json({message:"Deletion successful"})
}