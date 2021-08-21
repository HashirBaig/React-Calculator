import React, { useState } from 'react';


function Calculator() {
    const [value, setValue] = useState("");

    const ops = ['+','-'];
    const updateValue = (paramValue) => {
        if( ( (value.slice(0,-1)===ops[0]) && (paramValue===ops[0]) ) || ( (value.slice(0,-1)===ops[1]) && (paramValue===ops[1]) ) ){
            setValue(value);
        }else{
            setValue(value + paramValue);
        }
    }
    const calculate = ()=>{
        setValue(eval(value).toString());
    }
    return (
        <div id='container'>
            <div className='screen'>    
                { value || '0' }
            </div>
            <div className='keypad'>
                <div className='keys'>
                    <div className='keys-row-1'>
                        <div className='button'>
                            <button
                                onClick = {()=>{
                                    updateValue('1');
                                }}
                            >1</button>
                        </div>
                        <div className='button'>
                            <button
                                onClick = {()=>{
                                    updateValue('2');
                                }}
                            >2</button>
                        </div>
                        <div className='button'>
                            <button
                                onClick = {()=>{
                                    updateValue('3');
                                }}
                            >3</button>
                        </div>
                    </div>
                    <div className='keys-row-2'>
                        <div className='button'>
                            <button
                                onClick = {()=>{
                                    updateValue('4');
                                }}
                            >4</button>
                        </div>
                        <div className='button'>
                            <button
                                onClick = {()=>{
                                    updateValue('5');
                                }}
                            >5</button>
                        </div>
                        <div className='button'>
                            <button
                                onClick = {()=>{
                                    updateValue('6');
                                }}
                            >6</button>
                        </div>
                    </div>     
                    <div className='keys-row-3'>
                        <div className='button'>
                            <button
                                onClick = {()=>{
                                    updateValue('7');
                                }}
                            >7</button>
                        </div>
                        <div className='button'>
                            <button
                                onClick = {()=>{
                                    updateValue('8');
                                }}
                            >8</button>
                        </div>
                        <div className='button'>
                            <button
                                onClick = {()=>{
                                    updateValue('9');
                                }}
                            >9</button>
                        </div>
                    </div>   
                    <div className='keys-row-4'>
                        <div className='button'>
                            <button
                                onClick = {()=>{
                                    updateValue('0');
                                }}
                            >0</button>
                        </div>
                    </div>
                </div>
                <div className='operator-keys'>
                    <div id='minus-button'>
                        <button
                            onClick = {()=>{
                                updateValue('-');
                            }}
                        >-</button>
                    </div>
                    <div id='plus-button'>
                        <button
                            onClick = {()=>{
                                updateValue('+');
                            }}
                        >+</button>
                    </div>
                    <div id='equal-button'>
                        <button
                            onClick = {()=>{
                                calculate();
                            }}
                        >=</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Calculator;