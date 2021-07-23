import './Title.css';

export default function Title(props) {
  const { main, title, subtitle } = props;

  return (
    <div className="Title">
      {main ? <h1 className="main">{title}</h1> : <h1>{title}</h1>}
      <hr />
      {subtitle && <h2>{subtitle}</h2>}
    </div>
  );
}
