import React, { useState } from "react"

const LoginPage = () =>
{
    //Variables de estado
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [carreraIDSelected, setCarreraIdSelected] = useState(-1)
 
    return <div className="bg-success container" style={{width:"400px"}}>
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

        <button className="btn btn-primary text-black"
                type="button" 
                onClick={ () => console.log(`Username: ${username} Password: ${password} Carrera: ${carreraIDSelected}`)}>LOGIN</button>
    
    </div>
}

export default LoginPage