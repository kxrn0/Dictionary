import SCMain from "./Main.styled";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";

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

  useEffect(() => {
    refetch();
  }, [word]);

  if (isLoading) return <main>Loading...</main>;

  if (isError) return <main>Error!</main>;

  console.log(data)

  return <SCMain>{data[0].word}</SCMain>;
}
