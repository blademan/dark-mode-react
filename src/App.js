import data from './data';
import Article from './Article';
import Header from './Header';

function App() {
 return (
  <>
   <Header />
   {data.map((item) => (
    <Article {...item} key={item.id} />
   ))}
  </>
 );
}

export default App;
