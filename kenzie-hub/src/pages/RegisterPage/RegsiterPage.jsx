import { Link } from "react-router-dom"
import { RegisterForm } from "../../components/RegisterForm/RegisterForm"
import { StyleRegisterPage } from "./style"

export const RegisterPage = () => {
    return (
        <StyleRegisterPage>
            <div>
                <h2>Kezie Hub </h2>
                <Link to='/'>
                    Voltar
                </Link>
            </div>
            <RegisterForm />

        </StyleRegisterPage>
    )
}