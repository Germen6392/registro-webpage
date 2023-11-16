function Form() {
    return (
        <>
            <form action="">
                <h2>Registrate</h2>
                <fieldset>
                    <legend>Nombre y Apellido</legend>
                    <input type="text" placeholder="Nombre"/>
                    <input type="text" placeholder="Apellido"/>
                </fieldset>
                <fieldset>
                    <legend>E-Mail</legend>
                    <input type="email" name="" id="" placeholder="correo@correo.com"/>
                </fieldset>
                <fieldset>
                    <legend>Teléfono</legend>
                    <input type="tel" name="" id="" placeholder="1234567890"/>
                </fieldset>
                <fieldset>
                    <legend>Registra tu contraseña</legend>
                    <label htmlFor="">Clave</label>
                    <input type="password" name="" id=""/>
                    <label htmlFor="">Repite tu Clave</label>
                    <input type="password" name="" id=""/>
                </fieldset>
                <fieldset>
                    <button type="submit">Enviar</button>
                </fieldset>
            </form>
        </>
    )
}
export default Form;