import styled from 'styled-components';

export default styled.div`
    padding: 3%;
    margin: auto;
    .search-form {
        margin-bottom: 42px;
    }
    .action {
        justify-content: center;
        align-items: center;
        button {
            margin-right: 8px;
            height: 35px;
        }
        button:focus {
            outline: none;
            box-shadow: none;
        }
    }
`;