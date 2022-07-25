import * as Yup from "yup";

export const loginValidation=Yup.object().shape({
    email:Yup.string().email().required("email is required mr arash").min(4,"email  must be at most at 5 caractor ").max(55),
    password:Yup.string().required("password is required mr arash").min(4).max(55),
})