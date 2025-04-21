import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';

function Home() {
    const {recipeList, loading} = useContext(GlobalContext);

    return (
        <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
        </div>
    )
}

export default Home;