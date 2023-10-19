const path = require('path')

const fileExtLimiter = (allowedExtArray) => {
    return(req, res, next) => {
        const files = req.files;

    const flieExtensions = [];

    Object.keys(files).forEach(key => {
        flieExtensions.pust(path.extname(files[key].name))
    })

    // are file ext allowed
    const allowed = flieExtensions.every(extension => allowedExtArray.includes(extension))

    if (!allowed) {
        const message =  `Upload failed. only  ${allowedExtArray.toString()} files allowed `.replaceAll(",", ",");

        // unprocessable content
        return res.status(422).json({ status: "error", message})
    }
    next()
    }
}

module.exports = fileExtLimiter