
const AllRepository = require("../repositories");
const Repository = new AllRepository();
const { uploadToBucket } = require("../services/S3");

exports.createActivity = async (req, res, next) => {
    try {
        const { name, content } = req.body;
        const { image } = req.files;
        const payload = { key: image.name, buffer: image.data };

        const { Location: imageUrl } = await uploadToBucket(payload);

        const newActivity = await Repository.createPayload("Activities", { name: name, content: content, image: imageUrl });
        !newActivity
            ? res.status(200).json({ message: "No se pudo crear la actividad!" })
            : res.status(201).json({ message: "Actividad creada con éxito!" });
    } catch (error) {
        next(error);
    }
};

exports.getActivity = async function (req, res, next) {
    try {
        const id = req.params.id

        const activity = await Repository.findByParams("Activities", { id })
        if (activity) {
            res.status(200).json(activity)
        } else {
            res.status(200).json({ message: "La actividad no existe" })
        }
    } catch (error) {
        next(error);
    }
}

exports.updateActivity = (req, res, next) => {
    const { id } = req.params
    const newParams = req.body
    Repository.updatePayload("Activities", id, newParams)
        .then(update => {
            !update ? res.status(400).json("Activity not found") :
                res.json(update)
        })
}