exports.myMiddleware = (req, res, next) => {
    req.name = 'nick';
    next();
}

exports.homePage = (req, res) => {
    res.render('index');
};