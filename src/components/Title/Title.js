import './Title.css';

function Title(props) {
  const main = props.main;
  const title = props.title;
  const subtitle = props.subtitle;

  return (
    <div className="Title">
      {main ? <h1 className="main">{title}</h1> : <h1>{title}</h1>}
      <hr />
      {subtitle && <h2>{subtitle}</h2>}
    </div>
  );
}

export default Title;
