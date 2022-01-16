import MovieCard from './MovieCard';
const LibraryDisplay = (props) => {
    return(
    <div className="movie-card-container">
        {props.movies.map((movie) => {
            return(
                <MovieCard movie={movie} />
            )
        })}
    </div>  
    )
}

export default LibraryDisplay;