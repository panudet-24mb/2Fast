exports.userContent = (req, res) => {
    let userData = req.userData
    res.status(200).json({
        "meta_client" : userData
    });

}

