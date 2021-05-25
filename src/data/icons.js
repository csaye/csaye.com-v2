function getImg(name) {
  return require(`../images/icons/${name}`).default;
}

export const icons = {
  aseprite: <div>Aseprite<i className="fas fa-images icon-brown"></i></div>,
  atom: <div>Atom<i className="fas fa-file-code icon-green"></i></div>,
  audacity: <div>Audacity<i className="fas fa-headphones icon-blue"></i></div>,
  bfxr: <div>BFXR<i className="fas fa-headphones icon-blue"></i></div>,
  bitly: <div>Bit.ly API<i className="fas fa-link icon-green"></i></div>,
  cpp: <div>C++<i className="fab devicon-cplusplus-plain icon-blue"></i></div>,
  c: <div>C<i className="fab devicon-c-plain icon-blue"></i></div>,
  cs: <div>C#<i className="fab devicon-csharp-plain icon-purple"></i></div>,
  css: <div>CSS<i className="fab fa-css3 icon-blue"></i></div>,
  datamuse: <div>Datamuse API<i className="fas fa-book icon-blue"></i></div>,
  firebase: <div>Firebase<i className="fas fa-fire-alt icon-orange"></i></div>,
  fl: <div>FL Studio<i className="fas fa-pepper-hot icon-orange"></i></div>,
  gimp: <div>GIMP<i className="fas fa-images icon-brown"></i></div>,
  haskell: <div>Haskell<i className="fab devicon-haskell-plain icon-purple"></i></div>,
  idle: <div>IDLE<i className="fas fa-code icon-blue"></i></div>,
  java: <div>Java<i className="fab fa-java icon-red"></i></div>,
  js: <div>JavaScript<i className="fab fa-js icon-yellow"></i></div>,
  monogame: <div>MonoGame<img className="img-icon" src={getImg("monogame.png")} alt="" /></div>,
  opencv: <div>OpenCV<i className="fas fa-video icon-green"></i></div>,
  openweather: <div>OpenWeather API<i className="fas fa-sun icon-orange"></i></div>,
  pygame: <div>Pygame<i className="fas fa-gamepad icon-green"></i></div>,
  python: <div>Python<img className="img-icon" src={getImg("python.png")} alt="" /></div>,
  randomword: <div>Random Word API<i className="fas fa-random icon-purple"></i></div>,
  react: <div>React.js<i className="fab fa-react icon-blue"></i></div>,
  sdl2: <div>SDL2<i className="fas fa-pencil-ruler icon-purple"></i></div>,
  shell: <div>Shell<i className="fas fa-terminal icon-black"></i></div>,
  spotify: <div>Spotify API<i className="fab fa-spotify icon-green"></i></div>,
  unity: <div>Unity<i className="fab fa-unity icon-black"></i></div>,
  vs: <div>Visual Studio<i className="fas fa-code icon-blue"></i></div>,
  vscode: <div>VSCode<i className="fas fa-code icon-blue"></i></div>
}
