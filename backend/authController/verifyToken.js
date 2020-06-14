const jwt = require("jsonwebtoken");

module.exports = function(req, res, next) {
    const token = req.header("token");
    if(!token) return res.status(401).send("Access Denied");
    try {
        const verified = jwt.verify(token, process.env.JWT_TOKEN)
        req.user = verified;
        next();
    } catch(err) {
        res.send(err);
    }
}


