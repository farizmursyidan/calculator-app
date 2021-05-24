toggleTheme = () => {
  if (document.getElementById('theme').getAttribute('theme') === 'one') {
    document.getElementById('theme').href = 'style2.css';
    document.getElementById('theme').setAttribute('theme', 'two');
  } else if (document.getElementById('theme').getAttribute('theme') === 'two') {
    document.getElementById('theme').href = 'style3.css';
    document.getElementById('theme').setAttribute('theme', 'three');
  } else if (document.getElementById('theme').getAttribute('theme') === 'three') {
    document.getElementById('theme').href = 'style.css';
    document.getElementById('theme').setAttribute('theme', 'one');
  }
}