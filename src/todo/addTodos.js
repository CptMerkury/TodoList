import React, {useState} from "react";
import PropTypes from 'prop-types'

function useInputValue(defaultValue = '') {
    const [value, setValue] = useState(defaultValue)

    return {
        bind: {
            value,
            onChange: event => setValue(event.target.value)
        },
        clear: () => setValue(''),
        value: () => value

    }
}

function AddTodo({onCreate}) {
    const input = useInputValue('')

    function submitHandler(event) {
        event.preventDefault()

        if (input.value().trim()) {
            onCreate(input.value())
            input.clear()
            // setValue('')
        }
    }

    return (
        <form action="" style={{marginBottom: '1rem'}} onSubmit={submitHandler}>
            <input style={{borderRadius: '50px', border: '1px solid #ccc', outline: 'none', fontFamily: 'Montserrat'}}
                   {...input.bind}/>
            <button className='rm' type='submit'>Add todo</button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}


export default AddTodo