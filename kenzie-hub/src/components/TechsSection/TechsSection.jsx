import { useContext } from "react"
import { TechContext } from "../../contexts/TechCotenxt"
import { TechCard } from "../TechCard/TechCard"
import { StyleTechsSection } from "./style"

export const TechsSection = () => {

    const { userTechs } = useContext(TechContext)



    return (
        <StyleTechsSection>
            <div>
                <p> Tecnologias</p>
                <button>+</button>
            </div>
            <ul>
                {userTechs?.map(element =>
                    <TechCard key={element.id} tech={element} />
                )}
            </ul>
        </StyleTechsSection>
    )
}   