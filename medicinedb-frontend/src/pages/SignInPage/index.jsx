import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner, Alert } from 'react-bootstrap';
import Wrapper from './signin.styles';
import { loginPending } from '~/app/redux/auth/auth.slice';
import { fetchUsersPending } from '~/app/redux/users/users.slice';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const data = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsersPending());
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('フォームに全てのフィールドを入力してください。');
    }
    if (data.error) {
      setError(data.error.message);
    }
    return dispatch(loginPending({ email, password }));
  };

  return (
    <Wrapper>
      <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
        <h3>Medical</h3>
        {error && <Alert variant="danger">{error}</Alert>}
        <div className="form-group">
          <input
            type="email"
            value={email}
            className="form-control"
            placeholder="メールアドレス"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            value={password}
            className="form-control"
            placeholder="パスワード"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-dark btn-block login-btn">
            ログイン
          </button>
        </div>
        {data.loading && <Spinner variant="primary" animation="border" />}
      </form>
    </Wrapper>
  );
};

export default SignInPage;
