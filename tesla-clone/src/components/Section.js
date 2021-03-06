import React from 'react'
import styled from 'styled-components'
import { Fade } from 'react-reveal'
function Section(props) {
    return (
        <Wrap bgImage = {props.backgroundImage}>
            <Fade bottom>
                <ItemText>
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                </ItemText>
            </Fade>


            <Buttons>
                <ButtonGroup>
                    <Fade left>
                        <LeftButton>
                            {props.leftBtnText}
                        </LeftButton>
                    </Fade>
                    <Fade right>
                        {props.rightBtnText &&
                            <RightButton>
                                {props.rightBtnText} 
                            </RightButton>
                        }
                    </Fade>
                </ButtonGroup>
                <Fade bottom>
                    <DownArrow src="/images/down-arrow.svg" />
                </Fade>
            </Buttons>
            
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${props => `url("/images/${props.bgImage}")`};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
    user-select: none;
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;

    @media (max-width: 768px){
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`

const RightButton = styled(LeftButton)`
    background: white;
    opacity: 0.5;
    color: black;
`

const DownArrow = styled.img`
    margin-top: 20px;
    height: 40px;
    overflow: hidden;
    animation: animateDown infinite 1.5s;
`

const Buttons = styled.div``