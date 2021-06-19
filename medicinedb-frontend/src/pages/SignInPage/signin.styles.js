import styled from 'styled-components';

export default styled.div`
  max-width: 300px;
  margin: 10% auto;

  .login-form {
    border: 1px solid #ccc;
    padding: 30px;
    border-radius: 10px;
  }
  h3 {
    text-align: center;
  }
  .form-group {
    margin-top: 20px;
    .login-btn {
      width: 100%;
    }
    .login-btn:hover {
      opacity: 0.8;
    }
  }
  input:focus {
    box-shadow: none;
  }
  .alert-danger {
    font-size: 0.8rem;
  }
`;
