import React from 'react';
import Hello from './components/Hello'; //コンポーネントの追加
import { BrowserRouter, Route, Link} from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";




const App = () => {
  const colors = ['espresso', 'cafe latte', 'cold brew'];
  const getDataFromAPI = async keyword => {
    const requestUrl = 'https://www.googleapis.com/books/v1/volumes?q=intitle:'
    const result = await axios.get(`${requestUrl}${keyword}`);
    return result;
  };
  return (
    <BrowserRouter>
    <div style={{'text-align':'center'}}>
      <h1>What are you in the mood?</h1>
      <img src="https://coffee.alexflipnote.dev/random" width="250" height="350" />

      <ul style={{'list-style':'none'}}>
        <li><Link to='/'><FontAwesomeIcon icon={faCoffee} />ESPRESSO</Link></li>
        <li><Link to='/latte'><FontAwesomeIcon icon={faCoffee} />LATTE</Link></li>
        <li><Link to='/coldbrew'><FontAwesomeIcon icon={faCoffee} />COLD BREW</Link></li>
      </ul>
      <hr />
      {/* タグの様にコンポーネントを出力 */}
      {/* <Hello color ={colors[0]} />  */}
      <Route exact path='/' 
      render={props => <Hello color = {colors[0]}
      getData={keyword => getDataFromAPI(keyword)}
       />} />
      <Route path='/latte'
       render={props => <Hello color = {colors[1]} 
      getData={keyword => getDataFromAPI(keyword)}
       />} />

      <Route path='/coldbrew' 
      render={props => <Hello color = {colors[2]}
      getData={keyword => getDataFromAPI(keyword)}
       />} />

      
      {/* <img src="https://joeschmoe.io/api/v1/random" /> */}
     
  
    </div>
    </BrowserRouter>
  );
}
export default App;