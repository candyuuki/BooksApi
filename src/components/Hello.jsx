import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle} from "@fortawesome/free-solid-svg-icons";

//propsで受け取ってdiv出力
const Hello = props => {
  const [bookData, setBookData] = useState(null); //bookData=変数 null=初期値
useEffect(() => {
  const result = props.getData?.(props.color).then((response) => setBookData(response)); //?を使用することで、getDataが存在する場合のみ実行
//props,配列に入っている値に変化があったときのみ実行
},[props]);
  return (
    <div>
      <ul>
      {/* const iconStyle: React.CSSProperties = { padding: 10, fontSize: 50 }; */}


  

 
        {
          bookData === null
          ? <p>now loading...</p>
  : 
  bookData.data.items.map((x, index) => <li style={{'list-style':'none'}} key={index}>{<FontAwesomeIcon icon={faBook} />}{x.volumeInfo.title}{<br />}{<FontAwesomeIcon icon={faUserCircle} />}{x.volumeInfo.authors}{<br />}{x.volumeInfo.description}{<br />}</li>)
        }

  {/* </ul>/map関数で<li>タグ  volumeInfoに入っている*/}
  
      </ul>
      {/* <p>My favarite color is ...{JSON.stringify(bookData)}</p>  */}
      <br />

    </div>
    
  );

}

export default Hello;