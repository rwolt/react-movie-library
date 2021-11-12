const AddMovieForm = () => {
    return(
        <div className="form-container">
            <form className="movie-form">
                <label htmlFor="movieTitle">Title</label>
                <input type="text"></input>
                <label htmlFor="movieTitle">Director</label>
                <input type="text"></input>
                <label htmlFor="movieTitle">Genre</label>
                <input type="text"></input>
                <label htmlFor="movieTitle">Runtime</label>
                <input type="text"></input>
                <button className="add-to-lib-button" type="submit">Add To Library</button>
            </form>
        </div>
    )
}

export default AddMovieForm;