import { useState } from "react";
import Button from "./components/Button/Button";
import { Header } from "./components/Header";
import WayToTeach from "./components/WayToTeach";
import { ways, differences } from "./data";

export default function App() {
  const [contentType, setContentType] = useState(null);

  function handleClick(type) {
    setContentType(type);
  }

  return (
    <>
      <Header />

      <main>
        <h1>Hello React</h1>

        <section>
          <h3>Наш подход</h3>

          <ul>
            <WayToTeach
              title={ways[0].title}
              description={ways[0].description}
            />
            <WayToTeach {...ways[1]} />
            <WayToTeach {...ways[2]} />
            <WayToTeach {...ways[3]} />
          </ul>
        </section>

        <section>
          <h3>Отличие</h3>

          <Button onClick={() => handleClick("way")}> Подход </Button>
          <Button onClick={() => handleClick("easy")}> Доступность </Button>
          <Button onClick={() => handleClick("program")}> Концентрация</Button>

          {contentType ? (
            <p>{differences[contentType]}</p>
          ) : (
            <div>"Нажми на кнопку"</div>
          )}
        </section>
      </main>
    </>
  );
}
