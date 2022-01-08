import React from "react";
import { Container } from 'react-bootstrap'
import styled from "styled-components";

const FooterHeight = styled.section`
    height: 50px;
`

const Footer = () => {
    return (
        <footer className="bg-dark text-white">
            <Container>
                <FooterHeight className="d-flex flex-md-row flex-column justify-content-between align-items-center">
                    <div>
                        present by Kylen Chen
                    </div>
                    <div>
                        © Kylen Chen 2021
                    </div>
                </FooterHeight>
            </Container>
        </footer>
    )
}

export default Footer