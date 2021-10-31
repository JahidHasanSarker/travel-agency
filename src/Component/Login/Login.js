import { Button, Col, Row } from 'react-bootstrap';
import useAuth from '../../Hook/useAuth';
import { useHistory, useLocation } from "react-router";
import authInit from './firebase/firebase.init';
import './Login.css';
import { getAuth } from '@firebase/auth';

authInit();

const Login = () => {

    const {auth} = getAuth();

const {signInUsingGoogle, setLoading} = useAuth();
const location = useLocation();
const history = useHistory();
const redirect_uri = location.state?.from || '/'
console.log('came from', location.state?.from);

const handleGoogleLogin = () => {
    signInUsingGoogle()
    .then(result =>{
      setLoading(true)
        history.push(redirect_uri)
    })
    .catch((err) => console.log(err))
    .finally(() => {
      setLoading(false);
    });
}

    return (
            <div className="login-space">
                <Row>
                            <Col sm={7}>
                            <div className="d-flex justify-content-center align-items-center my-3 ">
                            <div className=" py-4 px-4 rounded shadow" style={{ marginTop: "100px"}}>
                            <form className="mx-auto ">
                            <h3 className="text-danger mb-4 text-center">Login</h3>
                            <div className="row mb-3">
                                <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">Email</label>
                                <div className="col-sm-9">
                                <input type="email" className="form-control" id="inputEmail3" placeholder="example@email.com"required />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="inputPassword3" className="col-sm-3 col-form-label">Password</label>
                                <div className="col-sm-9">
                                <input type="password" className="form-control" id="inputPassword3" placeholder="Your Password" required />
                                </div>
                            </div>
                            <div className="my-4 d-flex justify-content-center">
                            <button type="submit" className="btn btn-warning">Login
                            </button>
                            </div>

                            </form>
                            <hr />
                            <div className="d-grid px-4 mx-auto my-2">
                                <Button onClick={handleGoogleLogin} className="d-flex justify-content-around align-items-center" variant="success" size="lg">
                                <i className="fab fa-google loginIcon"></i> <span className="loginText">Login using Google</span>
                                </Button>
                            </div>
                            </div>
                    </div>
                            </Col>
                            <Col sm={5}>
                                <img src="https://image.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg" className="img-fluid" alt="" />
                            </Col>
                </Row>
            </div>
        
    );
};

export default Login;



