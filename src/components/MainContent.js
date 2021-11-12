import AddMovieForm from './AddMovieForm';
const MainContent = (props) => {

    return(
        <div className="content-container">
            {props.showForm ?  <AddMovieForm /> : ''}
        </div>
    )
}

export default MainContent;