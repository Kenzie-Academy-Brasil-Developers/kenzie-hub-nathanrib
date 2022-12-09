import * as yup from "yup"

export const RegisterSchema = yup.object().shape({
    
    name: yup.string().required('nome obrigatório'),
    email: yup.string().required('Email obrigatório'),
    password: yup.string().required('Senha obrigatória'),
    bio: yup.string().required('bio obrigatória'),
    contact:  yup.string().required('contato obrigatório'),
    course_module: yup.string().required('modulo obrigatório')
    
})