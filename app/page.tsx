export default function Home() {
  const mockArray = [...Array.from({ length: 100 })];
  return (
    <div>
      {mockArray.map((_, i) => (
        <div key={i}>{i}</div>
      ))}
    </div>
  );
}
