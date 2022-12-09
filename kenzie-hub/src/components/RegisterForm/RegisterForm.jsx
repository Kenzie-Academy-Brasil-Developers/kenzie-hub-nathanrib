import { useForm } from "react-hook-form"
import { Input } from "../Input/Input"
import { yupResolver } from "@hookform/resolvers/yup"
import { useState } from "react"
import { RegisterSchema } from "./RegisterSchema"
import { StyleRegisterForm } from "./style"
import { ButtonConfirm } from "../ButtonConfirm/ButtonConfirm"

export const RegisterForm = ({ registerRequest }) => {


    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(RegisterSchema)
    })

    const [loading, setLoading] = useState()


    const submit = (data) => {
        registerRequest(data, setLoading)
    }

    const buttonMessage = loading ? "Cadastrando" : "Cadastrar"

    return (
        <StyleRegisterForm onSubmit={handleSubmit(submit)}>
            <h3>Crie sua conta </h3>
            <p>Rápido e gratis, vamos nessa</p>

            <Input id="name " type="text" label="Nome" placeholder="Digite seu nome" disabled={loading} register={register("name")} />
            {errors.name?.message}

            <Input id="email " type="mail" label="Email" placeholder="Digite seu email" disabled={loading} register={register("email")} />
            {errors.email?.message}

            <Input id="password " type="password" label="Senha" placeholder="Digite sua senha" disabled={loading} register={register("password")} />
            {errors.password?.message}

            {/* <Input id="passwordValidation " type="password" label="password" placeholder="Digite sua senha" disabled={loading} register={register("passsword")} />
            {errors.password?.message} */}

            <Input id="bio " type="text" label="Bio" placeholder="Digite uma descrticao" disabled={loading} register={register("bio")} />
            {errors.bio?.message}

            <Input id="contact " type="number" label="Contato" placeholder="Digite seu contato" disabled={loading} register={register("contact")} />
            {errors.contact?.message}

            <Input id="course_module " type="text" label="Modulo" placeholder="Digite seu nome" disabled={loading} register={register("course_module")} />
            {errors.course_module?.message}


            <ButtonConfirm text={buttonMessage} />
        </StyleRegisterForm>
    )
}