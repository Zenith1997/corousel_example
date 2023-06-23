import "./styles.css";
import CarouselComponent from "./CorouselComponent";

export default function App() {
  const slides = [
    {
      title: "Slide 1",
      image: "https://picsum.photos/200/300"
    },
    {
      title: "Slide 2",
      image: "https://picsum.photos/200/300"
    },
    {
      title: "Slide 3",
      image: "https://picsum.photos/200/300"
    }
  ];
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <CarouselComponent slides={slides} />
    </div>
  );
}
