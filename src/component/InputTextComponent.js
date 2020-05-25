import React from 'react';
import { InputText } from 'primereact/inputtext';


export function inputTextComponent(){
    return(
        <div>
            <InputText id='inputtextStyle' label='Name' placeholder='Please Enter Name...'>
          </InputText>
        </div>
    )
}

export default inputTextComponent;