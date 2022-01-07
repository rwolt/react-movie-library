import AddMovieForm from './AddMovieForm';
const MainContent = (props) => {

    return(
        <div className="content-container">
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