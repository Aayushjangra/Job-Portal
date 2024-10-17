
import multer from "multer";

const storage = multer.memoryStorage();
//file name vahe hoga vo fronted me use kare gee like here we use type = text in the field of file upload
export const singleUpload = multer({storage}).single("file");