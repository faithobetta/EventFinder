import { useParams } from "react-router-dom";
import "../../Css/category.css";
import EventList from "../EventList";

function Category() {
  const key = import.meta.env.VITE_TICKETMASTER_API_KEY
  const { id } = useParams(); 
  const eventsUrl = `discovery/v2/events.json?classificationName=${id}&dmaId=324&apikey=${key}`;


  return (
    <div className="category-home">
        <EventList url={eventsUrl} />
        {/* <EventList url={eventsUrl} /> */}
    </div>
  );

}

export default Category;
