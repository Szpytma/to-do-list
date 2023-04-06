function Footer() {
  const paw = "https://github.com/Szpytma/";
  const ben = "https://github.com/BGS89";
  // TODO change it use new Date
  let year = new Date().getFullYear();
  return (
    <footer>
      Created by{" "}
      <a href={paw} target="_blank" rel="noreferrer">
        Paw
      </a>{" "}
      and{" "}
      <a href={ben} target="_blank" rel="noreferrer">
        Ben
      </a>{" "}
      ® {year}
    </footer>
  );
}

export default Footer;
