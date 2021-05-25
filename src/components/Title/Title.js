import './Title.css';

function Title(props) {
  const title = props.title;

  return (
    <div className="Title">
      <h1>{title}</h1>
      <hr />
    </div>
  );
}

export default Title;
