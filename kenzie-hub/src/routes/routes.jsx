import React from "react"
import { Routes, Route } from "react-router-dom"
import { DashboardPage } from "../pages/DashboardPage/DashboardPage"
import { LoginPage } from "../pages/LoginPage/LoginPage"
import { RegisterPage } from "../pages/RegisterPage/RegsiterPage"

export const RoutesComponents = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
    )
}