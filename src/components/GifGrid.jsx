
import { GifItem } from "./GifItem"
import { useFetchGifs } from "../hooks/useFetchGifs"

// eslint-disable-next-line react/prop-types
export const GifGrid = ({category}) => {
    const { images, isLoading } = useFetchGifs(category)

    return (
        <>
            <section className="contenido">
                <h3 className="category_name">{category}</h3>

                {
                    isLoading && (
                        <p>...cargando...</p>
                    )
                }

                <div className="card-grid">
                    {
                        images.map( image => (
                            <GifItem
                                key={image.id}
                                { ...image } // Esparcimos todas las props así no tenemos que poner tantas variables
                            />
                        ))
                    }
                </div>
            </section>
        </>
    )
}
