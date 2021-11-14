import defaultProfile from '../images/user.png';

const AuthBox = (props) => {
    return(
        <div onClick={props.user.name === '' ? props.handleSignIn : props.handleSignOut} className="auth-box">
            <img className="profile-picture" src={props.user.name !== '' ? props.user.photoURL: defaultProfile} />
            <p className="user-name">{props.user.name !== '' ? props.user.name : 'Sign In'}</p>
        </div>
    )
}

export default AuthBox;