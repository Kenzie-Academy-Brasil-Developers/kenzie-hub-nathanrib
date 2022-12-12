import { useContext } from "react"
import { TechsSection } from "../../components/TechsSection/TechsSection"
import { TechProvider } from "../../contexts/TechCotenxt"
import { UserContext } from "../../contexts/UserContext"
import { StyleDashboardPage } from "./style"

export const DashboardPage = () => {

    const { user, logout, loading, navigate } = useContext(UserContext)

    if (loading) {
        return null
    }


    if (!user) {
        navigate('/')
    }

    return (

        <TechProvider>
            <StyleDashboardPage>
                <header>
                    <h2>Kenzie Hub</h2>
                    <button onClick={() => logout()}>Sair</button>
                </header>

                <section>
                    <h3>
                        Olá, {user?.name}
                    </h3>
                    <p>{user?.course_module}</p>
                </section>
                <TechsSection />
            </StyleDashboardPage>
        </TechProvider>


    )

}