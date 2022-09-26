import React, { useState } from "react"
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () =>
{
    //Variables de estado
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [carreraIDSelected, setCarreraIdSelected] = useState(-1)
    const [error, setError] = useState(false)


    //Hook navegacion
    const navigate = useNavigate();

    const loginOnclick = () =>
    {
        if(username !== "" && password !== "" && carreraIDSelected !== -1)
        {
            //Si puedo hacer el login
            navigate("/main")
        }
        else{
            setError(true)
        }

    }

 
    return <div className="container">
        <h1>Login</h1>
        <div>
            <label className="form-label">
                Usuario
            </label>
            <input type="text" className="form-control" 
                   placeholder="Ingrese su usuario" value= {username}
                   onChange={ (obj) => 
                    {
                        setUsername(obj.target.value)
                    }} />
        </div>
            
        <div>
            <label className="form-label">
                Password
            </label>
            <input type="password" className="form-control"
                   placeholder="Ingrese su clave" value={password}
                   onChange = {(obj) => 
                   {
                        setPassword(obj.target.value)
                   }} />
        </div>



        <div>
            <label className="form-label">Carrera</label>
            <select className="form-select" 
                value={carreraIDSelected}
                onChange= {(obj) =>
                {
                    setCarreraIdSelected(obj.target.value)
                }}> 
                <option value={1} >Ingeniería de Sistemas</option>
                <option value={2} >Ingeniería Industrial</option>
                <option value={3} >Ingeniería Civil</option>
                <option value={-1}> --- Ingrese su carrera --- </option>
            </select>
        </div>
        
        <br />

        <button className="btn btn-primary text-black"
                type="button" 
                onClick={loginOnclick}>
                    LOGIN</button>

        <div>
            {
                (() =>
                {
                    //Validación de formularios
                    const arrAlerts = []

                    if(error && username === "")
                    {
                        arrAlerts.push(<div className="alert alert-danger">Ingrese UserName</div>)
                    }
                    if(error && password === "")
                    {
                        arrAlerts.push(<div className="alert alert-danger">Ingrese Password</div>)
                    }
                    if(error && carreraIDSelected === -1)
                    {
                        arrAlerts.push(<div className="alert alert-danger">Selecciona carrera</div>)
                    }

                    return arrAlerts
                })()
                
                
            }
            
        </div>
    
    </div>
}

export default LoginPage