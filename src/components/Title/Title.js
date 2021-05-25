import './Title.css';

function Title(props) {
  const title = props.title;
  const subtitle = props.subtitle;

  return (
    <div className="Title">
      <h1>{title}</h1>
      {subtitle && <h2>{subtitle}</h2>}
      <hr />
    </div>
  );
}

export default Title;
