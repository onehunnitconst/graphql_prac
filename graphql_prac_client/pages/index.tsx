import { useQuery, gql } from '@apollo/client';

export default function Home() {
  const { loading, error, data } = useQuery(gql`
    query GetBooks {
      books {
        title
        author
      }
    }
  `);

  return (
    <div className='h-screen'>
      <p>Hey</p>
      {loading && <p>Loading...</p>}
      {error && <p>Error!</p>}
      {!loading &&
        data.books.map((e) => (
          <p>
            {e.title} / {e.author}
          </p>
        ))}
    </div>
  );
}
