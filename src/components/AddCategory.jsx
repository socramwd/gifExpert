
import { useState } from "react"

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
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}