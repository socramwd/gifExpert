
import { AddCategory } from "./AddCategory"

export const Header = ({onAddCategory}) => {
    return (
        <header className="header">
            <h1>GifExpertApp</h1>

            <AddCategory
                // setCategories={setCategories}
                onNewCategory={onAddCategory}
            />
        </header>
    )
}