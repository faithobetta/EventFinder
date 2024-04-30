import { Link,} from "react-router-dom";
import { useEffect, useState } from "react";
import "../Css/home.css";
import axios from "axios";
function EventList({url}) {
    const [event, setEvent] = useState([]);
    useEffect(() => {
      axios
        .get(
          `https://app.ticketmaster.com/${url}`
        )
        .then((res) => {
          console.log(res.data._embedded.events);
          setEvent(res.data._embedded.events);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
  return (
    <div>
           
      <div className="events">
        {event.map((item) => (
          <div key={item.id} className="trending-events">
            <div className="img-div">
              <img src={item.images[0].url} alt="" />
            </div>
            <div className="event-name">
              <h4 className="">{item.name}</h4>
              {item.priceRanges && item.priceRanges.length > 0 && (
                <h4>£{item.priceRanges[0].max}</h4>
              )}
            </div>

            <div className="event-details">
              {console.log(item.dates.start)}
              <p>{item._embedded.venues[0].name}</p>
              <p>{item.dates.start.localTime}</p>
              <p>{item.dates.start.localDate}</p>
            </div>
            <Link key={item.id} to={`/single/${item.id}`}>
              <button>View Event</button>
            </Link>
          </div>
        ))}
      </div>
      {/* end of upcoming events  */}

    </div>
  )
}

export default EventList
