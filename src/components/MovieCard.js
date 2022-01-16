const MovieCard = (props) => {
    return(
        <div className="movie-card">
            <p>{props.movie.title}</p>
            <p>{props.movie.director}</p>
            <p>{props.movie.genre}</p>
            <p>{props.movie.runtime} minutes</p>
        </div>
    )
}

export default MovieCard;