import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section
                title = "Model S"
                description = "Order Online the Model S"
                backgroundImage = "model-s.jpg"
                leftBtnText = "Custom order"
                rightBtnText = "Existing inventory"
            />
            <Section 
                title = "Model Y"
                description = "Order Online the Model Y"
                backgroundImage = "model-y.jpg"
                leftBtnText = "Custom order"
                rightBtnText = "Existing inventory"
            />
            <Section 
                title = "Model 3"
                description = "Order Online the Model 3"
                backgroundImage = "model-3.jpg"
                leftBtnText = "Custom order"
                rightBtnText = "Existing inventory"
            />
            <Section 
                title = "Model X"
                description = "Order Online the Model X"
                backgroundImage = "model-x.jpg"
                leftBtnText = "Custom order"
                rightBtnText = "Existing inventory"
            />
            <Section 
                title = "Solar Panels"
                description = "Lowes Cost Solar Panels"
                backgroundImage = "solar-panel.jpg"
                leftBtnText = "Order Now"
                rightBtnText = "Learn more"
            />
            <Section 
                title = "Solar roof"
                description = "Solar roof"
                backgroundImage = "solar-roof.jpg"
                leftBtnText = "Order Now"
                rightBtnText = "Learn more"
            />
            <Section 
                title = "Accessories"
                description = ""
                backgroundImage = "accessories.jpg"
                leftBtnText = "Order Now"
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`
