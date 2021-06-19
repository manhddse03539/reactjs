import styled from 'styled-components';

export default styled.div`
  .navbar {
    background: #635ba2;
    padding: 0 35px;
  }
  #responsive-navbar-nav {
    justify-content: flex-end;
    .nav-items {
      display: flex;
      align-items: center;
      a {
        margin-right: 50px;
        color: #ccc;
        text-decoration: none;
        font-size: 0.9rem;
      }
      a:last-child {
        margin-right: 0px;
      }
      a:last-child::after {
        content: '';
      }
      a:hover {
        color: #fff;
      }
      .user {
        margin-right: 50px;
        display: flex;
        align-items: center;
        svg {
          margin-right: 5px;
        }
        span {
          font-size: 1rem;
          color: #fff;
        }
      }
    }
  }
`;
