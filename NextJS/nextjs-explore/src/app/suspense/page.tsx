import { Suspense } from "react";

const getData = async (): Promise<{ id: number; name: string }[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "John" },
        { id: 2, name: "Jane" },
        { id: 3, name: "Alice" },
        { id: 4, name: "Bob" },
        { id: 5, name: "Eva" },
      ]);
    }, 5000);
  });
};

export default async function ArtistPage() {
  const data = await getData();

  return (
    <>
      <h1>"Arpit Kumar"</h1>
      <Suspense fallback={<Loading />}>
        {data.map((item) => {
          return (
            <div key={item.id}>
              <h2>{item.name}</h2>
            </div>
          );
        })}
      </Suspense>
    </>
  );
}

function Loading() {
  return <h2>🌀 Loading...</h2>;
}
