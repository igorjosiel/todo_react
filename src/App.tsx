import Text from "./components/Text";

export default function App() {
  return (
    <div className="flex flex-col gap-2">
      <Text variant="body-sm-bold" className="text-pink-base">Olá Mundo!</Text>
      <Text className="text-green-base">Olá Mundo!</Text>
      <Text variant="body-md-bold">Olá Mundo!</Text>
    </div>
  );
}
