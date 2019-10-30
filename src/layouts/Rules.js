import React from "react";
import "../styles/Rules.scss";

const Rules = props => {
  return (
    <main className="content rules">
      <h2 className="rules__title">Zasady</h2>
      <p className="rules__text">
        <strong className="rules__text--strong">ReactionHunt</strong> to mała
        gra w której liczy się skupienie i reakcja gracza.
      </p>
      <p className="rules__text">
        Gra zbudowana jest z{" "}
        <span className="rules__text--span">kilku kolorowych pól</span>, z
        których <span className="rules__text--span">jedno jest właściwe</span>.
        W przeciągu trzech sekund na prawidłowym z nich pojawi się na krótki
        czas <span className="rules__text--span">symbol oka</span>.
      </p>
      <img className="rules__img" src="/images/eye-on.png" alt="symbol oka" />
      <p className="rules__text">
        Zadaniem gracza jest wychwycenie lub trafienie które pole jest prawdziwe
        oraz{" "}
        <span className="rules__text--span">
          zdobycie jak największej liczby punktów
        </span>{" "}
        bez spudłowania.
      </p>
      <p className="rules__text">
        U góry ekranu{" "}
        <span className="rules__text--span">
          wyświetla się czas (w postaci żóltego paska)
        </span>{" "}
        w przeciągu którego ma się pojawić symbol oka. Po jego upływie gracz
        jest zdany na swoją intuicje.
      </p>

      <p className="rules__text">
        <span className="rules__text--span">
          Można wybrać pole w dowolnym momencie gry
        </span>
        , zarówno przed pojawieniem się samego symbolu jak i po upływie czasu
        sugerującego kiedy się może pojawić.
      </p>
      <p className="rules__text">W grze mamy trzy tryby:</p>
      <ol className="rules__list">
        <li className="rules__list-text">
          <span className="rules__text--span">Standardowy</span> – Klasyczny
          tryb w którym grę zaczynam od 4 pól, a wraz z rosnącym poziomem
          zwiększa się ich ilość do sześciu.
        </li>
        <li className="rules__list-text">
          <span className="rules__text--span">Tylko 4 pola</span> – Tryb łatwy,
          w którym przez cała grę wybieramy spośród tylko 4 pól.
        </li>
        <li className="rules__list-text">
          <span className="rules__text--span">Tylko 6 pól</span> – Tryb trudny,
          w którym przez cała grę wybieramy spośród 6 pól.
        </li>
      </ol>
      <p className="rules__text">
        Dodatkowo wraz ze wzrostem poziomów{" "}
        <span className="rules__text--span">zwiększa się trudność gry</span> w
        postaci zmiany wielkości i widoczności ikony oka.
      </p>
    </main>
  );
};

export default Rules;
