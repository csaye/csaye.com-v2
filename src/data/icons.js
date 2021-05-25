function getImg(name) {
  return require(`../images/icons/${name}`).default;
}

export const icons = {
  "Aseprite": <div>Aseprite<i className="fas fa-images icon-brown"></i></div>,
  "Atom": <div>Atom<i className="fas fa-file-code icon-green"></i></div>,
  "Audacity": <div>Audacity<i className="fas fa-headphones icon-blue"></i></div>,
  "BFXR": <div>BFXR<i className="fas fa-headphones icon-blue"></i></div>,
  "Bit.ly API": <div>Bit.ly API<i className="fas fa-link icon-green"></i></div>,
  "C": <div>C<i className="fab devicon-c-plain icon-blue"></i></div>,
  "C++": <div>C++<i className="fab devicon-cplusplus-plain icon-blue"></i></div>,
  "C#": <div>C#<i className="fab devicon-csharp-plain icon-purple"></i></div>,
  "CSS": <div>CSS<i className="fab fa-css3 icon-blue"></i></div>,
  "Datamuse API": <div>Datamuse API<i className="fas fa-book icon-blue"></i></div>,
  "Firebase": <div>Firebase<i className="fas fa-fire-alt icon-orange"></i></div>,
  "FL Studio": <div>FL Studio<i className="fas fa-pepper-hot icon-orange"></i></div>,
  "GIMP": <div>GIMP<i className="fas fa-images icon-brown"></i></div>,
  "Haskell": <div>Haskell<i className="fab devicon-haskell-plain icon-purple"></i></div>,
  "IDLE": <div>IDLE<i className="fas fa-code icon-blue"></i></div>,
  "Java": <div>Java<i className="fab fa-java icon-red"></i></div>,
  "JavaScript": <div>JavaScript<i className="fab fa-js icon-yellow"></i></div>,
  "MonoGame": <div>MonoGame<img className="img-icon" src={getImg("monogame.png")} alt="" /></div>,
  "OpenCV": <div>OpenCV<i className="fas fa-video icon-green"></i></div>,
  "OpenWeather API": <div>OpenWeather API<i className="fas fa-sun icon-orange"></i></div>,
  "Pygame": <div>Pygame<i className="fas fa-gamepad icon-green"></i></div>,
  "Python": <div>Python<img className="img-icon" src={getImg("python.png")} alt="" /></div>,
  "Random Word API": <div>Random Word API<i className="fas fa-random icon-purple"></i></div>,
  "React.js": <div>React.js<i className="fab fa-react icon-blue"></i></div>,
  "SDL2": <div>SDL2<i className="fas fa-pencil-ruler icon-purple"></i></div>,
  "Shell": <div>Shell<i className="fas fa-terminal icon-black"></i></div>,
  "Spotify API": <div>Spotify API<i className="fab fa-spotify icon-green"></i></div>,
  "Unity": <div>Unity<i className="fab fa-unity icon-black"></i></div>,
  "Visual Studio": <div>Visual Studio<i className="fas fa-code icon-blue"></i></div>,
  "VSCode": <div>VSCode<i className="fas fa-code icon-blue"></i></div>
}
