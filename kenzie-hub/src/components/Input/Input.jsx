import React from "react";
import { StyleFieldset } from "./style";

export const Input = ({ id, label, type, register, placeholder, disabled }) => {
    return (
        <StyleFieldset>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} placeholder={placeholder} disabled={disabled} {...register} />
        </StyleFieldset>
    )
}