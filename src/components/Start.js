const { Link } = require("react-router-dom");

function Start(props){
    return (
        <div className="start-page">
            <div className="content">
                <p>
                    <Link to='/trivia' className="animated bounceInRight start-button"> Start Trivia </Link>
                </p>
            </div>
        </div>
    );
}

export default Start