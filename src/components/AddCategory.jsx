
import { useState } from "react"
import PropTypes from 'prop-types'

// eslint-disable-next-line react/prop-types
export const AddCategory = ({onNewCategory}) => {
    const[inputValue, setInputValue] = useState('One Punch')

    const onInputChange = ({target}) => {
        setInputValue(target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const newInputValue = inputValue.trim()

        if( newInputValue.length <= 1) return

        onNewCategory(newInputValue)
        
        setInputValue('')
    }

    return (
        <form onSubmit={onSubmit} aria-label="form">
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}