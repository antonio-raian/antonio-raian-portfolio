import "./styles.css";

function gerarArrayAleatorio(tamanho: number, min: number, max: number) {
  const array: number[] = [];
  while (array.length < tamanho) {
    const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!array.includes(numeroAleatorio)) {
      array.push(numeroAleatorio);
    }
  }
  return array;
}

export default function Coffee() {
  const arrayAleatorio = gerarArrayAleatorio(20, 1, 20);
  return (
    <div className="body">
      <div className="container">
        <div className="plate"></div>
        <div className="cup">
          <div className="top">
            <div className="vapour">
              {arrayAleatorio.map((item) => {
                return <span key={item} style={{ "--i": item }}></span>;
              })}
              {/* <span style={{ "--i": 1 }}></span>
              <span style={{ "--i": 2 }}></span>
              <span style={{ "--i": 17 }}></span>
              <span style={{ "--i": 13 }}></span>
              <span style={{ "--i": 3 }}></span>
              <span style={{ "--i": 14 }}></span>
              <span style={{ "--i": 6 }}></span>
              <span style={{ "--i": 15 }}></span>
              <span style={{ "--i": 7 }}></span>
              <span style={{ "--i": 11 }}></span>
              <span style={{ "--i": 8 }}></span>
              <span style={{ "--i": 16 }}></span>
              <span style={{ "--i": 19 }}></span>
              <span style={{ "--i": 10 }}></span>
              <span style={{ "--i": 12 }}></span>
              <span style={{ "--i": 9 }}></span>
              <span style={{ "--i": 4 }}></span>
              <span style={{ "--i": 18 }}></span>
              <span style={{ "--i": 5 }}></span>
              <span style={{ "--i": 20 }}></span> */}
            </div>
            <div className="circle">
              <div className="tea"></div>
            </div>
          </div>
          <h1 className="logo-cup lt">&lt;</h1>
          <h1 className="logo-cup slash">/</h1>
          <h1 className="logo-cup gt">&gt;</h1>
        </div>
        <div className="handle"></div>
      </div>
    </div>
  );
}
