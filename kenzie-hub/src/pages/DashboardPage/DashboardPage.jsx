import { StyleDashboardPage } from "./style"

export const DashboardPage = ({ user, logout }) => {

    return (
        <StyleDashboardPage>
            <header>
                <h2>Kenzie Hub</h2>
                <button onClick={() => logout()}>Sair</button>
            </header>

            <section>
                <h3>
                    Olá, {user?.user.name}
                </h3>
                <p>{user?.user.course_module}</p>
            </section>

        </StyleDashboardPage>
    )

}