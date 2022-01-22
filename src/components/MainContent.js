import AddMovieForm from './AddMovieForm';
import LibraryDisplay from './LibraryDisplay';
const MainContent = (props) => {

    return(
        <div className="content-container">
            <LibraryDisplay movies={props.movies}
                handleDelete={props.handleDelete}
             />
            {props.showForm ?  
                <AddMovieForm 
                    handleChange={props.handleChange} 
                    handleSubmit={props.handleSubmit}
                    movie={props.movie} 
                /> 
            : ''}
        </div>
    )
}

export default MainContent;