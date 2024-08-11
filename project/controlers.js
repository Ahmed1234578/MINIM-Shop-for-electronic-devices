import path from "path";

const uploadImage = (req, res, next) => {
    if (!req.files) {
        return res.status(400).send("No files were uploaded.");
      }
      const file = req.files.image;
      const filename = Date.now() + path.extname(file.name);
      const uploadPath = "./public/image/" + filename;
      file.mv(uploadPath, async function  (err) {
        if (err) return res.status(500).send(err);
        req.body.image = uploadPath.substring(1);
        next();
      });
};

export {uploadImage};

const isAuth = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.redirect("/signin");
  }
};
const isAdmin = (req, res, next) => {
  if (req.session.user && req.session.user.isAdmin) {
    next();
  } else {
    res.redirect("/");
  }
};
export {isAuth,isAdmin};
