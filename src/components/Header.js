import vuslat from './header/vuslat.png';

function Header() {
  return (
    <>
      <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: '30vmin',
          fontSize: '2vmin',
          userSelect: 'none',
          borderTop: '1px solid black',
      }}>
          <img src={vuslat} alt="vuslat" style={{width: '10vmax', height: '10vmax', display: 'block'}} />
          <h1>illegal-instruction</h1>
      </ div>
      <ul style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          listStyleType: 'none',
          padding: 0,
          margin: 0,
          borderTop: '1px solid black',
          borderBottom: '1px solid black',
      }}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
        </ul>
    </>
  );
}

export default Header;
