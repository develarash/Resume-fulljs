import * as Yup from "yup";

export const insertBlogSchema=Yup.object().shape({
    title:Yup.string().required("title is required mr arash"),
    desc:Yup.string().required("desc is required mr arash"),
    status:Yup.boolean().required("status is required mr arash"),

})