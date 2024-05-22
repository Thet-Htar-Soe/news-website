import { useEffect, useState } from "react";
import NavigationBar from "./components/Navbar";
import HeaderPage from "./pages/HeaderPage";
import TechnologyPage from "./pages/TechnologyPage";
import TravelPage from "./pages/TravelPage";
import { fetchLatestArticles } from "./Api";
import "./custom.css";

const App = () => {
  const [latestNews, setLatestNews] = useState([]);
  useEffect(() => {
    const getLatestArticles = async () => {
      try {
        const latestArticles = await fetchLatestArticles();
        setLatestNews(latestArticles);
      } catch (error) {
        console.error("Error in fetching latest articles:", error);
      }
    };

    getLatestArticles();
  }, []);


  return (
    <div>

      {/* Header Page Start */}
      <div style={{}}>

        <div className="h-100 d-flex flex-column">
          <NavigationBar />
          <HeaderPage articles={latestNews} />
        </div>

      </div>
      {/* Header Page End */}

      {/* Technology Page Start */}
      <div style={{ backgroundColor: "#364a4d" }} className="pt-5">

        <div className="custom-border-top">

          <TechnologyPage technews={latestNews} />
        </div>
      </div>
      {/* Technology Page End */}

      {/* Travel Page Start */}
      <div className="bg-fixed">

        <div className="custom-border-top">

          <TravelPage travelnews={latestNews} />
        </div>
      </div>
      {/* Travel Page End */}

    </div>
  )
}

export default App;
