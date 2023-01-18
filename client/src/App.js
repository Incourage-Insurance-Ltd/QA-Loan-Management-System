import './App.css';
import React, { Fragment, useState } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Dashboard from './components/dashboard/Dashboard';
import Home from './components/dashboard/pages/home/Home';
import Login from './components/auths/Login';
import Landing from './components/landing/Landing';

import Register from './components/auths/Register';

import GetAllLoans from './components/dashboard/pages/loans/ClientLoans';
import AddLoan from './components/dashboard/pages/loans/AddLoan';
import AddBorrower from './components/dashboard/pages/borrowers/AddBorrower';
import Borrower from './components/dashboard/pages/borrowers/Borrower';
import Borrowers from './components/dashboard/pages/borrowers/Borrowers';
import EditLoan from './components/dashboard/pages/loans/EditLoan';
import EditBorrower from './components/dashboard/pages/borrowers/EditBorrower';
import AddLoans from './components/dashboard/pages/loans/AddLoans';
import AddPayments from './components/dashboard/pages/payments/AddPayments';
import Payments from './components/dashboard/pages/payments/AllPayments';
import Message from './components/dashboard/pages/messages/Message';
import EmailPage from './components/dashboard/pages/messages/EmailPage';
import PaymentLoansInfo from './components/dashboard/pages/payments/PaymentLoanInfo';
import Dash from './components/dash/Dash';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };
  return (
    <Router>
      <div className='App py-10 px-10 '>
        {/* <Topbar /> */}
        <div>
          <Fragment>
            <Routes>
              {/* LANDING */}
              <Route
                exact
                path='/'
                element={
                  !isAuthenticated ? <Landing /> : <Navigate to='/login' />
                }
              ></Route>

              {/* REGISTER */}
              <Route
                exact
                path='/register'
                element={
                  !isAuthenticated ? (
                    <Register setAuth={setAuth} />
                  ) : (
                    <Navigate to='/home' />
                  )
                }
              ></Route>

              {/* LOGIN */}
              <Route
                exact
                path='/login'
                element={
                  !isAuthenticated ? (
                    <Login setAuth={setAuth} />
                  ) : (
                    <Navigate to='/home' />
                  )
                }
              ></Route>

              {/* HOME */}
              <Route
                exact
                path='/home'
                element={
                  isAuthenticated ? (
                    <Home setAuth={setAuth} />
                  ) : (
                    <Navigate to='/login' />
                  )
                }
              ></Route>

              {/* DASHBOARD */}
              <Route
                exact
                path='/dashboard'
                element={
                  !isAuthenticated ? (
                    <Dashboard setAuth={setAuth} />
                  ) : (
                    <Navigate to='/login' />
                  )
                }
              ></Route>

              {/* BORROWERS */}
              {/* <Route exact path='/borrowers' element={<Borrowers />}></Route> */}

              <Route
                exact
                path='/borrowers'
                element={
                  isAuthenticated ? (
                    <Borrowers setAuth={setAuth} />
                  ) : (
                    <Navigate to='/home' />
                  )
                }
              ></Route>

              {/* BORROWER */}

              <Route
                exact
                path='/borrower/:id'
                element={
                  isAuthenticated ? (
                    <Borrower setAuth={setAuth} />
                  ) : (
                    <Navigate to='/borrowers' />
                  )
                }
              ></Route>

              {/* EDIT BORROWER */}
              <Route
                exact
                path='/editBorrower/:id'
                element={
                  isAuthenticated ? (
                    <EditBorrower setAuth={setAuth} />
                  ) : (
                    <Navigate to='/borrower' />
                  )
                }
              ></Route>

              {/* ADD BORROWER */}
              <Route
                exact
                path='/addBorrower'
                element={
                  isAuthenticated ? (
                    <AddBorrower setAuth={setAuth} />
                  ) : (
                    <Navigate to='/borrowers' />
                  )
                }
              ></Route>

              {/* LOANS */}

              <Route
                exact
                path='/loans'
                element={
                  isAuthenticated ? (
                    <GetAllLoans setAuth={setAuth} />
                  ) : (
                    <Navigate to='/login' />
                  )
                }
              ></Route>
              {/* ADD LOAN (BORROWER PAGE)*/}
              <Route
                exact
                path='/addLoan/:id'
                element={
                  isAuthenticated ? (
                    <AddLoan setAuth={setAuth} />
                  ) : (
                    <Navigate to='/loans' />
                  )
                }
              ></Route>

              {/* ADD LOANS (LOANS PAGE) */}
              <Route
                exact
                path='/addLoan'
                element={
                  isAuthenticated ? (
                    <AddLoans setAuth={setAuth} />
                  ) : (
                    <Navigate to='/loans' />
                  )
                }
              ></Route>

              {/* EDIT LOANS */}
              <Route
                exact
                path='/editLoan/:id'
                element={
                  isAuthenticated ? (
                    <EditLoan setAuth={setAuth} />
                  ) : (
                    <Navigate to='/loans' />
                  )
                }
              ></Route>

              {/* PAYMENTS */}
              {/* ALL PAYMENTS */}

              <Route
                exact
                path='/payments'
                element={
                  isAuthenticated ? (
                    <Payments setAuth={setAuth} />
                  ) : (
                    <Navigate to='/login' />
                  )
                }
              ></Route>

              {/* ADD PAYMENT (BORROWER PAGE)*/}
              <Route
                exact
                path='/addPayments/:id'
                element={
                  isAuthenticated ? (
                    <PaymentLoansInfo setAuth={setAuth} />
                  ) : (
                    <Navigate to='/loans' />
                  )
                }
              ></Route>

              <Route
                exact
                path='/payment/:client_id/:loan_id'
                element={
                  isAuthenticated ? (
                    <PaymentLoansInfo setAuth={setAuth} />
                  ) : (
                    <Navigate to='/loans' />
                  )
                }
              ></Route>

              {/* MESSAGES */}
              <Route
                exact
                path='/emailClient'
                element={
                  isAuthenticated ? (
                    <EmailPage setAuth={setAuth} />
                  ) : (
                    <Navigate to='/home' />
                  )
                }
              ></Route>
            </Routes>
          </Fragment>
        </div>
      </div>
    </Router>
  );
}

export default App;
