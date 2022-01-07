const AddMovieForm = (props) => {
    
    return(
        <div className="form-container">
            <form className="movie-form" 
                onChange={props.handleChange}
                onSubmit={props.handleSubmit}
            >
                <label htmlFor="movieTitle">Title</label>
                <input type="text" name="title" value={props.movie.title}></input>
                <label htmlFor="movieDirector">Director</label>
                <input type="text" name="director" value={props.movie.director}></input>
                <label htmlFor="movieGenre">Genre</label>
                <input type="text" name="genre" value={props.movie.genre}></input>
                <label htmlFor="movieRuntime">Runtime</label>
                <input type="text" name="runtime" value={props.movie.runtime}></input>
                <button className="add-to-lib-button" type="submit">Add To Library</button>
            </form>
        </div>
    )
}

export default AddMovieForm;