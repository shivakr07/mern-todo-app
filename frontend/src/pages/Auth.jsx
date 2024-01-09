
// -------------------------------------------------------------

// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Login from '../components/auth/Login';
// import Register from '../components/auth/Register';
// import Layout from '../components/Layout';
// import useAuth from '../hooks/useAuth';
// import classes from './Auth.module.scss';

// function Auth() {
//   const { auth } = useAuth();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (auth) {
//       navigate('/');
//     }
//   }, [auth, navigate]);

//   return (
//     <Layout>
//       <div className={classes.form_container}>
//         <Login />
//         <Register />
//       </div>
//     </Layout>
//   );
// }

// export default Auth;

// --------------------------------------------------------------

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';
import Layout from '../components/Layout';
import useAuth from '../hooks/useAuth';
import classes from './Auth.module.scss';

function Auth() {
  const { auth } = useAuth();
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    if (auth) {
      navigate('/');
    }
  }, [auth, navigate]);

  const toggleForm = () => {
    setShowLogin((prevShowLogin) => !prevShowLogin);
  };

  return (
    <Layout>
      <div className={classes.form_container}>
        {showLogin ? <Login /> : <Register />}
      </div>
      <div className={classes.bottom_text}>
        <p>
          {showLogin ? "Don't have an account? " : 'Already have an account? '}
          <button onClick={toggleForm}>
            {showLogin ? 'Register' : 'Login'}
          </button>
        </p>
      </div>
    </Layout>
  );
}

export default Auth;


