import "./comic-detail.styles.scss";
import { useParams, useNavigate } from "react-router-dom";
import { getComicById } from "../../utils/service";
import { useEffect } from "react";
import { useState } from "react";

const ComicDetail = () => {
  const [comic, setComic] = useState();
  const navigate = useNavigate();
  const param = useParams();

  useEffect(() => {
    try {
      getComicById(param.id).then(({ results }) => {
        const data = {
          id: results.id,
          name: results.name,
          issue_number: results.issue_number,
          image: results.image.original_url,
          character_credits: results.character_credits,
          team_credits: results.team_credits,
          location_credits: results.location_credits,
          concept_credits: results.concept_credits,
        };

        setComic(data);
        console.log(results);
      });
    } catch (e) {
      console.log(e);
    }
  }, []);

  const handleBackBtnClick = () => {
    navigate("/");
  };

  return (
    <div className="comic-detail">
      <button onClick={handleBackBtnClick}>Back</button>
      <div className="details">
        <h2>
          {comic?.name} {comic?.issue_number}
        </h2>
        <div className="info">
          <div className="data">
            <div className="category">
              <span className="title">Characters</span>
              <ul>
                {comic?.character_credits?.map((item, index) => (
                  <li key={index}>{item.name}</li>
                ))}
              </ul>
            </div>

            <div className="category">
              <span className="title">Teams</span>
              <ul>
                {comic?.team_credits?.map((item, index) => (
                  <li key={index}>{item.name}</li>
                ))}
              </ul>
            </div>

            <div className="category">
              <span className="title">Locations</span>
              <ul>
                {comic?.location_credits?.map((item, index) => (
                  <li key={index}>{item.name}</li>
                ))}
              </ul>
            </div>

            <div className="category">
              <span className="title">Concepts</span>
              <ul>
                {comic?.concept_credits?.map((item, index) => (
                  <li key={index}>{item.name}</li>
                ))}
              </ul>
            </div>
          </div>
          <img src={comic?.image} alt={comic?.name} />
        </div>
      </div>
    </div>
  );
};

export default ComicDetail;
