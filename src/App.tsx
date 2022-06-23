import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react"
import { client } from "./lib/apollo";
import { Event } from "./pages/Event";

const GET_LESSONS_QUERY = gql`
  query{
    lessons {
      id
      title
    }
  }
`

interface Lesson {
  id: string;
  title: string;
}

function App() {

  // useEffect(() => {
  //   client.query({
  //     query: GET_LESSONS_QUERY
  //   }).then(response => {
  //     console.log(response.data);
  //   })
  // }, []);

  const { data } = useQuery<{ lessons: Lesson[]}>(GET_LESSONS_QUERY)

  return (
    // <h1 className="text-2xl font-bold text-violet-500">Hello World!</h1>
    // <ul>
    //   {data?.lessons.map(lesson => {
    //     return <li key={lesson.id}>{lesson.title}</li>
    //   })}
    // </ul>
    <div>
      <Event />
    </div>
  )
}

export default App
