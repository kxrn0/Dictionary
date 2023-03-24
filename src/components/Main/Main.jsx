import SCMain from "./Main.styled";
import { ReactComponent as Play } from "../../assets/images/icon-play.svg";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";

export default function Main({ word }) {
  if (!word.trim())
    return <main className="empty-query heading-s">Query cannot be empty</main>;

  const [data, setData] = useState(null);
  const [audios, setAudios] = useState([]);

  function play_audio(i) {
    audios.find((audio) => audio.index === i).audio.play();
  }

  useEffect(() => {
    async function get_data(word) {
      setData(null);
      try {
        let res;

        res = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        );
        res = await res.json();

        audios.forEach((audio) => audio.audio.pause());
        setAudios(
          res
            .map((r, i) => {
              const audio = r.phonetics.some((phonetic) => phonetic.audio);

              if (audio) {
                return {
                  audio: new Audio(
                    r.phonetics.find((phonetic) => phonetic.audio).audio
                  ),
                  index: i,
                };
              }
              return null;
            })
            .filter((a) => a)
        );
        setData(res);
      } catch (error) {
        setData(undefined);
      }
    }

    get_data(word);
  }, [word]);

  if (data === null)
    return (
      <main className="loading">
        <Loading />
        <p className="heading-s">Loading...</p>
      </main>
    );

  if (data === undefined)
    return (
      <main className="error">
        <span className="error">😕</span>
        <h3 className="heading-s">No Definitions Found</h3>
        <p className="body-m">
          Sorry pal, we couldn't find definitions for the word you were looking
          for. You can try the search again at later time or head to the web
          instead.
        </p>
      </main>
    );

  return (
    <SCMain>
      {data.map((result, i) => (
        <section key={i} className="result">
          <div className="phonetics">
            <div className="word">
              <h1 className="heading-l">{result.word}</h1>
              <p className="heading-m">{result.phonetic}</p>
            </div>
            {audios.find((audio) => audio.index === i) ? (
              <button onClick={() => play_audio(i)}>
                <Play />
              </button>
            ) : null}
          </div>
          <ul className="meanings">
            {result.meanings.map((meaning, i) => (
              <li key={i} className="meaning">
                <h2 className="heading-s part">{meaning.partOfSpeech}</h2>
                <div className="definitions">
                  <p className="heading-s">Meaning</p>
                  <ul className="descriptions">
                    {meaning.definitions.map((definition, i) => (
                      <li key={i} className="body-m">
                        <div className="content">
                          <p className="body-m">{definition.definition}</p>
                          {definition.example ? (
                            <p className="body-m example">
                              "{definition.example}"
                            </p>
                          ) : null}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                {meaning.synonyms.length ? (
                  <div>
                    <span className="heading-s indicator">Synonyms </span>
                    <span className="heading-s list synonyms">
                      {meaning.synonyms.join(", ")}
                    </span>
                  </div>
                ) : null}
                {meaning.antonyms.length ? (
                  <div>
                    <span className="heading-s indicator">Antonyms </span>
                    <span className="heading-s list antonyms">
                      {meaning.antonyms.join(", ")}
                    </span>
                  </div>
                ) : null}
              </li>
            ))}
          </ul>
        </section>
      ))}
      <div className="source">
        <span className="body-s">Source</span>{" "}
        <a className="body-s" target="_blank" href={data[0].sourceUrls}>
          {data[0].sourceUrls}
        </a>
      </div>
    </SCMain>
  );
}
