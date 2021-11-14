import Logo from './Logo.js';
import AddButton from './/AddButton.js';
import AuthBox from './AuthBox.js';

const Header = (props) => {
    return(
        <div className="header">
            <AddButton handleForm={props.handleForm} />
            <AuthBox user={props.user} handleSignIn={props.handleSignIn} handleSignOut={props.handleSignOut} />
        </div>
    )
}

export default Header;