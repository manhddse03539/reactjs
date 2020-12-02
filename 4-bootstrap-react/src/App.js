import './App.css';
import { Button, Card, CardBody, CardTitle, CardSubtitle, CardText, CardImg } from 'reactstrap';
import PropTypes from 'prop-types';
import Profile from './imgs/profile.svg';

function App() {
  return (
    <div className="App">
      <Card>
        <CardImg top width="100%" src={Profile} style={{ height: 180 }} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
}
Button.PropTypes = {
  active: PropTypes.bool,
  block: PropTypes.bool,
  disabled: PropTypes.bool
}

export default App;
