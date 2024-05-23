import { useEffect, useState } from "react";
import NavigationBar from "./components/Navbar";
import HeaderPage from "./pages/HeaderPage";
import TechnologyPage from "./pages/TechnologyPage";
import TravelPage from "./pages/TravelPage";
import { fetchLatestArticles, fetchTechnologyArticles, fetchTravelArticles, fetchSportArticles, fetchEntArticles, filterArticles } from "./Api";
import "./custom.css";
import "./custom.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import SportPage from "./pages/SportPage";
import EntPage from "./pages/EntPage";
import FooterPage from "./pages/FooterPage";
import RingLoader from "react-spinners/RingLoader";

const App = () => {
  const [loading,setLoading] = useState(false);
  const [latestNews, setLatestNews] = useState([]);
  const [technologyNews, setTechnologyNews] = useState([]);
  const [travelNews, setTravelNews] = useState([]);
  const [sportNews, setSportNews] = useState([]);
  const [entNews, setEntNews] = useState([]);
  const [query,setQuery] = useState();
  useEffect(() => {
    const getLatestArticles = async () => {
      try {
        const latestArticles = await fetchLatestArticles();
        const technologyArticles = await fetchTechnologyArticles();
        const travelArticles = await fetchTravelArticles();
        const sportArticles = await fetchSportArticles();
        const entArticles = await fetchEntArticles();
        setLatestNews(latestArticles);
        setTechnologyNews(technologyArticles);
        setTravelNews(travelArticles);
        setSportNews(sportArticles);
        setEntNews(entArticles);
      } catch (error) {
        console.error("Error in fetching articles:", error);
      }
    };

    getLatestArticles();
  }, []);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  const handleFilter = async (query) => {
    setQuery(query);
    const filteredArticle = await filterArticles({ q : query });
    setLatestNews(filteredArticle);
  };

  return (
    <div>
      {
        loading ?
          <div style={{ backgroundColor: "#000", height: "100vh" }} className="d-flex justify-content-center align-items-center">
            <RingLoader
              color={"#36d7b7"}
              loading={loading}
              size={80}
              aria-label="Ring Loader"
            />
          </div>
          :
          <>

            {/* Start progress */}
            <div id="progress">
              <span id="progressvalues">0%</span>
            </div>
            {/* End progress  */}

            {/* Header Page Start */}
            <div>
              <div className="h-100 d-flex flex-column">
                <NavigationBar onFilter={handleFilter} />
                <HeaderPage articles={latestNews} query={query} />
              </div>
            </div>
            {/* Header Page End */}

            {/* Technology Page Start */}
            <div id="technology" style={{ backgroundColor: "#364a4d" }} className="pt-5">
              <div className="custom-border-top">
                <TechnologyPage technews={technologyNews} />
              </div>
            </div>
            {/* Technology Page End */}

            {/* Science Page Start */}
            <div id="science" className="bg-fixed">
              <div className="custom-border-top">
                <TravelPage travelnews={travelNews} />
              </div>
            </div>
            {/* Science Page End */}

            {/* Sport Page Start */}
            <div id="sport" style={{ backgroundColor: "#364a4d" }}>
              <div className="custom-border-top">
                <SportPage sportnews={sportNews} />
              </div>
            </div>
            {/* Sport Page End */}

            {/* Entertainment Page Start */}
            <div id="entertainment" style={{ backgroundColor: "#364a4d" }} className="pt-5">
              <div className="custom-border-top">
                <EntPage entnews={entNews} />
              </div>
            </div>
            {/* Entertainment Page End */}

            {/* Footer Page Start */}
            <div className="bg-dark">
              <FooterPage />
            </div>
            {/* Footer Page Start */}
          </>
      }
    </div>
  )
}

export default App;
