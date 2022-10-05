import { Col, Container, Row } from "react-bootstrap"
import MainLayout from "../components/MainLayout"
import Image from 'next/image'
import Ban from '../assets/ban.png'


const Home = () => {
  const user: boolean = true
  return (
    <MainLayout>
      <Container>
        <Row>
          <Col  style={{ height: '200px', maxWidth: '300px', width: "100%" }}>
          <Image src={Ban}  layout="fill" objectFit="contain"  />
          </Col>
        </Row>
      </Container>
    </MainLayout>
  
  )
}

export default Home
