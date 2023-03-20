import SCMain from "./Main.styled";
import { ReactComponent as Play } from "../../assets/images/icon-play.svg";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import axios from "axios";

export default function Main({ word }) {
  if (!word.trim()) return <main>Query cannot be empty</main>;

  const { isLoading, isError, data, refetch } = useQuery({
    queryKey: ["word"],
    queryFn: async () => {
      try {
        const { data } = await axios(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        );

        return data;
      } catch (error) {
        throw error;
      }
    },
  });
  const audioRef = useRef([]);

  useEffect(() => {
    refetch();

    audioRef.current.forEach((audio) => audio.pause());
    audioRef.current = [];
  }, [word]);

  if (isLoading) return <main>Loading...</main>;

  if (isError) return <main>Error!</main>;

  console.log(data);

  return (
    <SCMain>
      {data.map((result, i) => {
        const audio = result.phonetics.some((phonetic) => phonetic.audio);

        if (audio)
          audioRef.current.push(
            new Audio(result.phonetics.find((phonetic) => phonetic.audio).audio)
          );
        else audioRef.current.push(null);

        function play_audio(i) {
          if (audioRef.current[i]) audioRef.current[i].play();
        }

        return (
          <section key={i} className="result">
            <div className="phonetics">
              <div className="word">
                <h1 className="heading-l">{result.word}</h1>
                <p className="heading-m">{result.phonetic}</p>
              </div>
              {audio ? (
                <button onClick={() => play_audio(i)}>
                  <Play />
                </button>
              ) : null}
            </div>
            <ul className="meanings">
              {result.meanings.map((meaning, i) => (
                <li key={i} className="meaning">
                  <h2 className="heading-s">{meaning.partOfSpeech}</h2>
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
                      <span className="heading-s synonyms">
                        {meaning.synonyms.join(", ")}
                      </span>
                    </div>
                  ) : null}
                  {meaning.antonyms.length ? (
                    <div>
                      <span className="heading-s indicator">Antonyms </span>
                      <span className="heading-s antonyms">
                        {meaning.antonyms.join(", ")}
                      </span>
                    </div>
                  ) : null}
                </li>
              ))}
            </ul>
          </section>
        );
      })}
      <div className="source">
        <span className="body-s">Source</span>{" "}
        <a className="body-s" target="_blank" href={data[0].sourceUrls}>
          {data[0].sourceUrls}
        </a>
      </div>
    </SCMain>
  );
}
