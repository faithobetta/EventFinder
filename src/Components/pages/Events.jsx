import "../../Css/events.css"
import EventList from "../EventList"


const Events = () => {
  return (
    <div className="event-page">
      <div className="event-text-container">
      
        <div className="event-banner">
          <div className="image-div">
            <img src="https://images.pexels.com/photos/1805895/pexels-photo-1805895.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          </div>
          
          <div className="event-banner-text">
            <h3>Create an amazing memories at EventFinder</h3>
            <p>Explore an endless array of entertainment options happening near you. From electrifying concerts and captivating theater performances and thrilling sports events </p>
            <p>Start exploring now and let the excitement begin!</p>
          </div>
        </div>
      </div>

      <h2 className="all-events-h2">Explore all Events</h2>
      <EventList url ="discovery/v2/events.json?classificationName=music&dmaId=324&apikey=E7cYSgaUVVKdkEoylfqYq2WwXPbWkqo9"/>

    </div>
  )
}

export default Events
