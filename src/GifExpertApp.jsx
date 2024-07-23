
import { useState } from "react"
import { Header } from "./components/Header"
import { GifGrid} from './components'

export const GifExpertApp = () => {
    // const apiKey = '0gaWD8fMnAHBpIIgXeUYJJ6YTN3wTgHv'

    const [categories, setCategories] = useState(['Dragon Ball'])

    const onAddCategory = ( newCategory ) => {
        if( categories.includes( newCategory )) return

        setCategories([ newCategory, ...categories ])
    }

    return (
        <>
            <Header
                onAddCategory={onAddCategory}
            />

            {
                categories.map( category => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }
        </>
    )
}
