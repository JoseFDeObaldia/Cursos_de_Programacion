import styled from 'styled-components';
import { Field, useField } from 'formik';

const Control = styled.div`
    margin-bottom: 20px;
    background-color: #eee;

`

const Label = styled.label`
    color: #000;
    display: block;
    margin-botom: 5px;
`

const MyInput = styled.input`
    outline: none;
    padding: 8px;
    border: 1px solid #B1B3B5;
    border-radius: 4px;
    width: 100%;
    margin-bottom: 5px;
`
const  ErrorMessage = styled.div`
    color: #f00;
`

function Input ({label, ...props}) {
    const [field, meta] = useField(props);

    return(
        <Control>
            <Label>{label}</Label>
            <MyInput {...field} {...props} />
            {meta.touched && meta.error ? (<ErrorMessage>{meta.error}</ErrorMessage>) : null}
        </Control>
    );
}


export default Input;