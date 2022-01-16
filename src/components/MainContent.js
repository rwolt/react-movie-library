import AddMovieForm from './AddMovieForm';
import LibraryDisplay from './LibraryDisplay';
const MainContent = (props) => {

    return(
        <div className="content-container">
            {props.showForm ?  
                <AddMovieForm 
                    handleChange={props.handleChange} 
                    handleSubmit={props.handleSubmit}
                    movie={props.movie} 
                /> 
            : <LibraryDisplay movies={props.movies} />}
        </div>
    )
}

export default MainContent;