import './App.css';
import { useQuery, gql } from "@apollo/client";

const CURRENCY_QUERY = gql`
query{
  currencies{
    label,
    symbol
  }
}
`;

function App() {
  const { data, loading, error } = useQuery(CURRENCY_QUERY);

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>


  return (
    <div>
      <h1>SpaceX Launches</h1>
      <ul>
        {data.currencies.map((launch) => (
          <li >{launch.label} -- {launch.symbol}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
