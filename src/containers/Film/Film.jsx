import { useEffect } from "react"
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux"
import { Card, Container, Row, Col, Button } from 'react-bootstrap'
import { selectFilm, addFilmData, removeCard } from "./filmSlice"
import Filmcard from '../../components/Filmcard/Filmcard'

//import './Tiempo.scss'

const Film = props => {
    const dispatch = useDispatch()
    const films = useSelector(selectFilm)


    //let [weather, setWeather] = useState([])

    useEffect(()=> {
        axios.get('https://cch-mysql-videoclub-06-2022.herokuapp.com/films/')
        .then(resp => {
            console.log(resp.data)
            dispatch(addFilmData(resp.data))
            //setWeather(resp.data.ciudades)
        })
    }, [])

    /*const remCard = (id) => {
        dispatch(removeCard(id))
        console.log(id)
    }
    <button className="cardBtn" onClick={remCard(film.id)}>X</button>
    */

    return (
        <Container className="Tiempo">
            <Row>
                {
                    films.map((film, index)=> (
                        <Col key={index} xs={12} md={6} xl={3}>
                            <Card>
                                <Card.Img variant="top" src="https://saposyprincesas.elmundo.es/wp-content/uploads/2016/07/jumanji2.jpg" />
                                <Card.Body>
                                    <Card.Title>{film.name}</Card.Title>
                                    <Card.Text>
                                        {film.description}
                                        <h4>Información</h4>
                                         <ul>
                                            <li>Fecha de estreno: {film.release_date}</li>
                                            <li>Genero: {film.genre}</li>
                                            <li>Edad recomendada: {film.age}</li>
                                            <li>Duración: {film.lenght} minutos</li>
                                            <li>Precio: {film.price} EUR </li>
                                         </ul>
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export default Film 