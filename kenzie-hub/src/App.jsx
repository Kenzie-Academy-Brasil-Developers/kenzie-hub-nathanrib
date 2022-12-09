import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { api } from "./api/api";
import { RoutesComponents } from "./routes";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { GlobalStyle } from "./Styles/GlobalStyle";


function App() {

  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  async function loginRequest(formLoginData, setLoading) {
    try {
      setLoading(true)
      const response = await api.post("sessions ", formLoginData)

      setUser(response.data)
      navigate("/dashboard")
      localStorage.setItem('@token', response.data.token)


    } catch (error) {

      toast.error(error.response.data.message)

    } finally {
      setLoading((false))
    }
  }

  function logout() {
    localStorage.removeItem('@token')
    setUser(null)
    navigate('/')
  }


  async function registerRequest(formResgiterData, setLoading) {
    console.log(formResgiterData)
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
    <div className="App">
      <GlobalStyle />
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <RoutesComponents setUser={setUser} loginRequest={loginRequest} registerRequest={registerRequest} user={user} logout={logout} />
    </div>
  );
}

export default App;
