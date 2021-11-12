import defaultProfile from '../images/user.png';

const AuthBox = (props) => {
    return(
        <div className="auth-box">
            <img className="profile-picture" src={defaultProfile} />
            <p className="user-name">Sign In</p>
        </div>
    )
}

export default AuthBox;