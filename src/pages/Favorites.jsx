import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import RecipeItem from "../components/RecipeItem";

function Favorites() {
    const {favorites} = useContext(GlobalContext);

    return (
        <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
            {favorites && favorites.length > 0 
                ? favorites.map((item) => <RecipeItem key={item.id} item={item} />)
                : <div>
                    <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
                        Nothing is added to favorites.
                    </p>
                </div>
            }
        </div>
    )
}

export default Favorites;