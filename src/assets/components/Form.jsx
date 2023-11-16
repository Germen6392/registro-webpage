import './Form.css'
function Form({label,inputType,placeholderValue}) {
    return (
        <>
                          
                <fieldset>
                    <legend>{label}</legend>
                    <input type={inputType} placeholder={placeholderValue}/>
                    
                </fieldset>
                
            
        </>
    )
}
export default Form;