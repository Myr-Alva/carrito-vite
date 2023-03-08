import React from 'react';

function Amigurumi(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <p>{props.price}</p>
    </div>
  );
}
/*import ReactDOM from 'react-dom'

function Amigurumi(props) {
  return <h2> I am a { props.muñeco }!</h2>;

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Amigurumi/>)*/
export default Amigurumi;
