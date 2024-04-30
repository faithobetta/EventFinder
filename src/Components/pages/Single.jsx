import { useEffect, useState } from "react";
import axios from "axios";
import "../../Css/single.css";
import { Link, useParams } from "react-router-dom";

function Single() {
  const key = import.meta.env.VITE_TICKETMASTER_API_KEY
  const [event, setEvent] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(
        `https://app.ticketmaster.com/discovery/v2/events/${id}.json?apikey=${key}`
      )
      .then((res) => {
        console.log(res);
        setEvent(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <div className="single">
      <img src={event?.images?.[0]?.url} alt="" className="single-image" />
      <h4 className="single-name">{event?.name}</h4>
      <p className="single-description">{event?.info}</p>
      <span className="single-time">{event?.dates?.start?.dateTime}</span>
      <Link to={event?.url}>
        <button className="single-button">Book</button>
      </Link>
    </div>
  );
}

export default Single;
