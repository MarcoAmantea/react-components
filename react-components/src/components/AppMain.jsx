import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import style from "./AppMain.module.css";
function AppMain() {
    return <main>

        <Card className={style.card} style={{ width: '35rem' }}>
            <img src="../hqdefault.jpg" alt="" />
            <Card.Body>
                <Card.Title>Vomito - Enzo Salvi</Card.Title>
                <Card.Text>
                    Vomito è un personaggio inventato da Enzo Salvi, presente nel film Natale in India con Christian De Sica e Massimo Boldi. E' un rapper romano noto per la sua skill di accensione di accendini.
                </Card.Text>
                <Button className={style.button} variant="warning">Leggi di più</Button>
            </Card.Body>
        </Card>
        ;<img src="" alt="" />
    </main>
}

export default AppMain