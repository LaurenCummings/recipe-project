function Navbar() {
    return (
        <nav className="navbar">
            <h2>Food Recipe</h2>
            <form>
                <input 
                    type="text"
                    name="search"
                    placeholder="Enter Items..."
                />
            </form>

        </nav>
    )
}

export default Navbar;