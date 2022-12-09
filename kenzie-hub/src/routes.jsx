import React from "react"
import { Routes, Route } from "react-router-dom"
import { DashboardPage } from "./pages/DashboardPage/DashboardPage"
import { LoginPage } from "./pages/LoginPage/LoginPage"
import { RegisterPage } from "./pages/RegisterPage/RegsiterPage"

export const RoutesComponents = ({ loginRequest, registerRequest, user, logout }) => {
    return (
        <Routes>
            <Route path="/" element={<LoginPage loginRequest={loginRequest} />} />
            <Route path="/register" element={<RegisterPage registerRequest={registerRequest} />} />
            <Route path="/dashboard" element={<DashboardPage user={user} logout={logout} />} />
        </Routes>
    )
}