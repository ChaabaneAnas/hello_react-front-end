import { useGetGreetingsQuery } from "./api/apiSlice";

const Greeting = () => {
  const { data: greeting } = useGetGreetingsQuery();

  return greeting ? <div>{greeting.message}</div> : <p> no greetings yet ! </p>;
};

export default Greeting;
