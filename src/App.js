import { useEffect, useState } from "react";
import NavigationBar from "./components/Navbar";
import HeaderPage from "./pages/HeaderPage";
import TechnologyPage from "./pages/TechnologyPage";
import TravelPage from "./pages/TravelPage";
import { fetchLatestArticles, fetchTechnologyArticles, fetchTravelArticles, fetchSportArticles } from "./Api";
import "./custom.css";
import SportPage from "./pages/SportPage";

const App = () => {
  const [latestNews, setLatestNews] = useState([]);
  const [technologyNews, setTechnologyNews] = useState([]);
  const [travelNews, setTravelNews] = useState([]);
  const [sportNews, setSportNews] = useState([]);
  useEffect(() => {
    const getLatestArticles = async () => {
      try {
        const latestArticles = await fetchLatestArticles();
        const technologyArticles = await fetchTechnologyArticles();
        const travelArticles = await fetchTravelArticles();
        const sportArticles = await fetchSportArticles();
        setLatestNews(latestArticles);
        setTechnologyNews(technologyArticles);
        setTravelNews(travelArticles);
        setSportNews(sportArticles);
      } catch (error) {
        console.error("Error in fetching articles:", error);
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

          <TechnologyPage technews={technologyNews} />
        </div>
      </div>
      {/* Technology Page End */}

      {/* Travel Page Start */}
      <div className="bg-fixed">

        <div className="custom-border-top">

          <TravelPage travelnews={travelNews} />
        </div>
      </div>
      {/* Travel Page End */}

      {/* Sport Page Start */}
      <div style={{ backgroundColor: "#364a4d" }}>

        <div className="custom-border-top">

          <SportPage sportnews={sportNews} />
        </div>
      </div>
      {/* Sport Page End */}

    </div>
  )
}

export default App;
