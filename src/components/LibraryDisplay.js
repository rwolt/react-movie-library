import MovieCard from './MovieCard';
const LibraryDisplay = (props) => {
    return(
    <div className="movie-card-container">
        {props.movies.map((movie) => {
            return(
                <MovieCard movie={movie} 
                    key={movie.id}
                    handleDelete={props.handleDelete}
                />
                )
        })}
    </div>  
    )
}

export default LibraryDisplay;