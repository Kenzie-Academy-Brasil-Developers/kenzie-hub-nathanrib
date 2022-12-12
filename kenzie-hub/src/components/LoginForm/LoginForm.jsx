import { useForm } from "react-hook-form"
import { Input } from "../Input/Input"
import { yupResolver } from "@hookform/resolvers/yup"
import { loginSchema } from "./loginSchema"
import { useContext, useState } from "react"
import { StyleFormLogin } from "./style"
import { Link } from "react-router-dom"
import { ButtonConfirm } from "../ButtonConfirm/ButtonConfirm"
import { UserContext } from "../../contexts/UserContext"


export const LoginForm = () => {


    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema)
    })

    const { loginRequest } = useContext(UserContext)
    const [loading, setLoading] = useState()

    const submit = (data) => {

        loginRequest(data, setLoading)
    }

    const buttonMessage = loading ? "Entrando" : "Entar"

    return (
        <StyleFormLogin onSubmit={handleSubmit(submit)}>
            <h3>Login</h3>
            <Input id="email " type="text" label="Email" placeholder="Digite seu email" disabled={loading} register={register("email")} />
            {errors.email && <p>{errors.email.message}</p>}
            <Input id="password" type="password" label="Senha" placeholder="Digite sua senha" disabled={loading} register={register("password")} />
            {errors.password && <p>{errors.password.message}</p>}
            <ButtonConfirm type="submit" disabled={loading} text={buttonMessage} />
            <p>Ainda não possui uma conta?</p>
            <Link to='/register'>Cadastre-se</Link>
        </StyleFormLogin>
    )
}