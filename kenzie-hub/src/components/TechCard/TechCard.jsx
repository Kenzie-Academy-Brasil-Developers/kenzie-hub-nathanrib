import React, { useContext } from "react"
import { FaRegTrashAlt } from 'react-icons/fa'
import { TechContext } from "../../contexts/TechCotenxt"
import { StyleTechCard } from "./style"

export const TechCard = ({ tech }) => {
    const { removeTech } = useContext(TechContext)


    return (
        <>
            <StyleTechCard>
                <p>{tech.title}</p>
                <div>
                    <p>{tech.status}</p>
                    <FaRegTrashAlt onClick={() => removeTech(tech.id)} />
                </div>
            </StyleTechCard>
        </>
    )
}
