import * as Yup from "yup";

export const registerValidation=Yup.object().shape({
    username:Yup.string().required("username is required mr arash").trim("kossher nnvis").max(55),
    email:Yup.string().email().required("email is required mr arash").trim("kossher nnvis").min(4,"email  must be at most at 5 caractor ").max(55),
    password:Yup.string().required("password is required mr arash").trim("kossher nnvis").min(4).max(55),
})