import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function AppMain() {
    return <main>

        <Card className='card' style={{ width: '35rem' }}>
            <div className='picture'>600 X 400</div>
            <Card.Body>
                <Card.Title>Titolo del Post</Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum cumque fugiat magni labore aliquid harum officia quas sit? Eius nobis fugit blanditiis? Amet corrupti labore odit ut voluptates voluptate culpa.
                </Card.Text>
                <Button className='button' variant="warning">Leggi di più</Button>
            </Card.Body>
        </Card>
        ;<img src="" alt="" />
    </main>
}

export default AppMain