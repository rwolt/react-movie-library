const MovieCard = (props) => {
    return(
        <div className="movie-card">
            <div className="movie-card-kill-box"
                id={props.movie.id}
                onClick={props.handleDelete} 
            >
            </div>
            <div className="movie-details">
            <p>{props.movie.title}</p>
            <p>{props.movie.director}</p>
            <p>{props.movie.genre}</p>
            <p>{props.movie.runtime} minutes</p>
            </div>
        </div>
    )
}

export default MovieCard;