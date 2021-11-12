import logo from '../images/movie-logo.png';

const Logo = () => {
    return(
        <div className="logo-title">
            <img className="logo" src={logo} />
            <h1>Movie Library</h1>
        </div>
    )
}

export default Logo;