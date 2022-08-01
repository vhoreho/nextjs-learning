// @ts-ignore
import useSWR from 'swr';
import {v4} from "uuid";

const fetcher = async () => {
    const response = await fetch(`https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=ZGnYeMXFe2qj5uVKnmdIF36750qfoiG0`);
    const data = await response.json();
    return data;
}

function stories() {
   const {data, error} = useSWR('news', fetcher);

   if(error) return "Something went wrong";
   if(!data) return 'Loading...';

   return (
       <div>
           <h2>Top Sport Stories:</h2>
           <ul>
               {data?.results.map(
                   story =>
                       <li key={v4()}>{story.title}</li>
               )}
           </ul>
       </div>
    )
}

export default stories;
