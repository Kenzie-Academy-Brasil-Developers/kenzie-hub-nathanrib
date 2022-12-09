
import { LoginForm } from "../../components/LoginForm/LoginForm"
import { StyleLoginPage } from "./style"

export const LoginPage = ({ loginRequest }) => {
    return (
        <StyleLoginPage>
            <h2>Kenzie Hub</h2>
            <LoginForm loginRequest={loginRequest} />
        </StyleLoginPage>
    )
}