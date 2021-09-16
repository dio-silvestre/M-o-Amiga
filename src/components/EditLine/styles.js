import styled from "styled-components"

export const Content = styled.div`
    form{
        display: flex ;
        flex-direction: row;
        align-items: center;
        div{
            padding: 2.5px;
            input{
                height: 30px;
            }
        }
        div + button{
            margin-left: 10px ;
        }
        button{
            display: flex;
            align-items: center;
            justify-content: center;
            background: none;
            border: 0;
            svg{
                margin: 0;
                padding: 0;
                height: 30px;
            }
        }
    }
`