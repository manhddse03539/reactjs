import { useContext } from 'react';
import './App.css';
import { I18nContext } from './context/i18n';

function App() {
  const { translate } = useContext(I18nContext);
  return (
    <div className="App">
      <p>{translate('data.greeting')}</p>
      <p>{translate('data.time')}</p>
    </div>
  );
}

export default App;
