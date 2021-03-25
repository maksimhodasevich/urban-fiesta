import './App.module.scss';

const App = () => {
  let a;

  if (true) {
    a = 'Test text';
  }

  return <div className="app-wrapper">{a}</div>;
};

export default App;
