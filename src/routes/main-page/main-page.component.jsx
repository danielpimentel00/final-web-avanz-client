import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./main-page.styles.scss";
import { getComics } from "../../utils/service";

const MainPage = () => {
  const [comics, setComics] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    try {
      getComics().then(({ results }) => {
        const mappedItems = results.map((item) => ({
          id: item.id,
          image: item.image.original_url,
          date: item.date_added,
          name: item.name,
          issue_number: item.issue_number,
        }));

        setComics(mappedItems);
      });
    } catch (e) {
      console.log(e);
    }
  }, []);

  const handleImgClick = (id) => {
    navigate(`/comic/${id}`);
  };

  return (
    <div className="main-page">
      <h1>Comic Books</h1>
      <div className="cards">
        {comics.map((item) => (
          <div className="card" key={item.id}>
            <img
              src={item.image}
              alt={item.name}
              onClick={() => handleImgClick(item.id)}
            />
            <span className="title">
              {item.name} {item.issue_number}
            </span>
            <span className="date">{item.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
