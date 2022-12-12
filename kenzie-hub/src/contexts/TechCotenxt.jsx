import { createContext, useContext, useState } from "react"
import { UserContext } from "./UserContext"

export const TechContext = createContext({})

export const TechProvider = ({ children }) => {
    const { user } = useContext(UserContext)
    const [userTechs, setUserTechs] = useState(user.techs)

    function removeTech(techID) {

        const newtechList = userTechs.filter((element) => element.id !== techID)
        setUserTechs(newtechList)

    }


    return (

        <TechContext.Provider value={{ userTechs, setUserTechs, removeTech }}>
            {children}
        </TechContext.Provider>
    )

}