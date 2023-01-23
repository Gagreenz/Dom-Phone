import { useField } from "formik";
import React from "react";

function InputField({inputClass,errorClass,placeholder,...props}){
    const [field, meta] = useField(props)
    return(
        <div className="auth-input-container">
            <input
                className={inputClass}
                {...field} {...props} required
            />
            <span className="auth-input-label">{placeholder}</span>
            {meta.touched && meta.error ?(
            <span className={errorClass}>
                {meta.error}
            </span>
            ): null}
        </div>

    )
}

export default InputField;