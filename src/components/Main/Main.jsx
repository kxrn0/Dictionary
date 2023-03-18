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
                <li key={i}>
                  <h2>{meaning.partOfSpeech}</h2>
                  <div className="definitions">
                    <p>Meaning</p>
                    <ul>
                      {meaning.definitions.map((definition, i) => (
                        <li key={i}>{definition.definition}</li>
                      ))}
                    </ul>
                  </div>
                  {meaning.synonyms.length ? (
                    <div>
                      <span className="indicator">Synonyms</span>
                      <span>{meaning.synonyms.join(",")}</span>
                    </div>
                  ) : null}
                  {meaning.antonyms.length ? (
                    <div>
                      <span className="indicator">Antonyms</span>
                      <span>{meaning.antonyms.join(",")}</span>
                    </div>
                  ) : null}
                </li>
              ))}
            </ul>
            <div className="source"></div>
          </section>
        );
      })}
    </SCMain>
  );
}
