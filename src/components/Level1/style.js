import styled from 'styled-components';

export const Style = styled.div`
    margin: 0 auto;
    padding: 0;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-color: #E1E1E1;

    .tabs-title-wrap {
        width: 100%;
        margin: 0 auto;
        background: #4A90E2;
        .tabs-title {
            width: 90%;
            margin: 0 auto;
            padding: 0;
            display: flex;
            & > li {
                width: 33.3%;
                background: #4A90E2;
                list-style: none;
                height: 76px;
                
                font-family: Roboto-Medium;
                font-size: 24px;
                color: #FFFFFF;
                text-align: center;
                line-height: 76px;
                cursor: pointer;
            }
        }
    }
    
    .tabs-content-wrap {
        width: 90%;
        margin: 0 auto;
        padding: 0;
        
        .task-list-container {
            margin-top: 20px;
        }
    }
    
        
`;