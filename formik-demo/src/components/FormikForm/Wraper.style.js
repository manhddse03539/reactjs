import styled from 'styled-components';

const Wrapper = styled.div`
    .form-demo {
        border: 1px solid #cccccc;
        display: flex;
        flex-direction: column;
        align-item: center;
        margin: auto;
        padding: 30px 50px;
        .form-header, .temp-weather, .btn {
            display: flex;
            flex-direction: row;
        }
        .title1, .title2, .title3 {
            display: flex;
            flex-direction: column;
        }
    }
    .form-header {
        justify-content: space-between;
        .status {
            font-size: 14px;
            span {
                margin-left: 10px;
            }
        }

    }
    .temp-weather {
        span {
            border: 1px solid #cccccc;
            width: 60px;
            height: 60px;
            border-radius: 5px;
            text-align: center;
            line-height: 60px;
            margin-right: 20px;
        }
    }
    .btn {
        display: flex;
        justify-content: space-between;
        margin: auto;
        button {
            background: #FFCC99;
            width: 120px;
            display: block;
            border: none;
            outline: none;
            text-align: center;
        }
    }
`
export default Wrapper;