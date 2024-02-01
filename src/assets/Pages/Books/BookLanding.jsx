import { Link, useNavigate, useParams } from "react-router-dom";
import BaseLayout from "../../../Components/BaseLayout";
import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";


const BookLanding = () => {
  const { id } = useParams();
  const {userInfo} = useSelector(state=>state.auth)
  console.log(id)
  const {bookList} = useSelector(state => state.book);

  const [ selectedBook, setSelectedBook] = useState({});
  const navigate = useNavigate();


  // 1. Display the book detail based on the id
  // fetch book from redux
  // get all books
  // find by id (match)

  // Burrow
  // should be logged in
  // if not logged in, login button (redirect to login)
  // pass the current path in state

  // login -> if path exists navigate to path else dashboard

  useEffect(()=>{
      const currentBook = bookList.find(book => book.id=== id);
      if(currentBook){
        setSelectedBook(currentBook);
      }
      else{
          navigate('/');
      }
      
      
  }, [])

  return (
    <BaseLayout>
      <Container>
        <Row>
          <Link to={'/'}><Button> Go Back</Button> </Link>

        </Row>
        <Row>
          <Col>
            <img src={selectedBook.url} alt="book image"/>
          </Col>
          <Col>
            <h3>{selectedBook.title}</h3>
            <p> By {selectedBook.author}</p>
            <p>Ratin 5 star</p>
            <p>Published {selectedBook.year}</p>
            <p>{selectedBook.summary}</p>
            <div>
              {userInfo.uid ? (<Button>Burrow</Button>) :(<Link to={'/login'} state= {{ path:`books/${id}`}}><Button>Login to Burrow</Button></Link>)}
              
            </div>

          </Col>
          
        </Row>
      </Container>

    </BaseLayout>
  )
}

export default BookLanding;