import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Container, Row, Col } from 'react-bootstrap'
import { selectFilm, addFilmCard } from "./filmSlice"
import Filmcard from '../../components/Filmcard/Filmcard'
import axios from 'axios'

import './Film.scss'

const Film = props => {

    const dispatch = useDispatch()

    const films = useSelector(selectFilm)

    useEffect(() => {
        
        axios.get('https://heroku-sqlurl.herokuapp.com/films')
            .then(resp => {
                dispatch(addFilmCard(resp.data))
            })
    }, [])

    return (

        <Container className="Film">
            <Row>
                {
                    films.map((data, index) => (

                        <Col key={index} xs={6} sm={4} md={3} xl={2}>
                            <Filmcard {...data} />
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export default Film 