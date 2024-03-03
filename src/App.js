import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

const App = () => {
  return (
    <div>
     <Navbar title="TextUtil"  />
    <div className="container my-3">
    <TextForm heading="Enter the text to analyze Below"/>
    </div>
    </div>
  
    
  );
}

export default App;