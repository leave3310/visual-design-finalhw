import React from "react";
import { Container } from 'react-bootstrap'
import style from './style.css'
const Footer = () => {

    return (
        <footer className="bg-dark text-white">
            <Container>
                <section className="d-flex flex-md-row flex-column justify-content-between align-items-center h-200">
                    <div>
                        present by Kylen Chen
                    </div>
                    <div>
                        © Kylen Chen 2021
                    </div>
                </section>
            </Container>
        </footer>
    )
}

export default Footer