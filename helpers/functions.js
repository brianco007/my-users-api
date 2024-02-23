import jwt from "jsonwebtoken";

// payload is an object that takes info to be encrypted
export function tokenGenerator(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, "secretKey", { expiresIn: "24h" }, (error, token) => {
      if (error) {
        reject({ error });
      } else {
        resolve({ token });
      }
    });
  });
}

export function tokenValidator(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, "secretKey", (error, decodedToken) => {
      if (error) {
        reject(error);
      } else {
        resolve(decodedToken );
      }
    });
  });
}
