import jwt from "jsonwebtoken";

export default (req, res, next) => {
  const token = (req.headers.authorization || "").replace(/Bearer\s?/, "");

  console.log(token)
  if (token) {
    try {
      const decoded = jwt.verify(token, "secret123");

      console.log(decoded, 'это decoded')

      req.userId = decoded._id; // в токене зашифрован айдишник

      next(); // нужен что бы пустить код дальше
    } catch (error) {
      res.status(403).json({
        message: "Нет доступа",
      });
    }
  } else {
    return res.status(403).json({
      message: "Нет доступа",
    });
  }
};
