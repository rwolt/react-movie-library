
const LibraryDisplay = (props) => {
    return(
    <div>
        {props.movies.forEach(movie => {
            <p>{movie.title}</p>
        })}
    </div>  
    )
}

export default LibraryDisplay;