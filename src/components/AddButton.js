import Logo from './Logo';
const AddButton = (props) => {
    return(
        <div className="button-container">
            <Logo />
            <button className="add-button" onClick={props.handleForm}>Add A Movie</button>
        </div>
    )
}

export default AddButton;