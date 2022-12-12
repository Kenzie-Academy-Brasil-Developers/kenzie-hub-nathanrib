import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../api/api";

export const UserContext = createContext({})

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        async function loadUser() {
            const token = localStorage.getItem('@token')
            const id = localStorage.getItem("@USER")


            if (!token) {
                setLoading(false)
                return
            }

            try {
                const { data } = await api.get(`users/${id}`, {
                    'authorization': `Bearer ${token}`
                })

                setUser(data)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        loadUser()
    }, [])


    async function loginRequest(formLoginData, setLoading) {
        try {
            setLoading(true)
            const response = await api.post("sessions ", formLoginData)

            const { token, user: userResponse } = response.data


            setUser(userResponse)
            localStorage.setItem('@token', token)
            localStorage.setItem('@USER', userResponse.id)

            navigate("/dashboard")


        } catch (error) {

            toast.error(error.response.data.message)

        } finally {
            setLoading((false))
        }
    }

    function logout() {
        localStorage.removeItem('@token')
        localStorage.removeItem('@USER')
        setUser(null)
        navigate('/')
    }


    async function registerRequest(formResgiterData, setLoading) {

        try {
            setLoading(true)
            const response = await api.post("users", formResgiterData)
            toast.success("Usuário criado com sucesso")
            navigate('/')

        } catch (error) {

            toast.error(error.response.data.message[0])

        } finally {
            setLoading((false))
        }
    }



    return (
        <UserContext.Provider value={{ user, loginRequest, logout, registerRequest, loading, navigate }}>
            {children}
        </UserContext.Provider>
    )
}