import "../../Css/home.css";
import EventList from "../EventList";
import { Link } from "react-router-dom";
import Search from "../Search";


const Home = () => {

  return (
    <div className="home">
      <div className="header">
        
        <div className="header-text">
          <h1>Discover Your Next Unforgettable Experience on Entertainment</h1>
          <h4>Explore Easily. Book Instantly. Enjoy Endlessly.</h4>
        </div>
      </div>

<Search/>
      {/* categories of events starts here  */}
      <div className="categories">
        <h2>Categories of Events</h2>

        <div className="categories-page-event">

          <Link to={'/category/comedy'}>
          <div className="categories-page-details">
            <img src="https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <h3>Comedy Events</h3>
          </div>
          </Link>

          <Link  to={'/category/music'}>
          <div className="categories-page-details">
            <img src="https://images.pexels.com/photos/1625355/pexels-photo-1625355.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <h3>Music</h3>
          </div>
          </Link>

          <Link  to={'/category/'}>
          <div className="categories-page-details">
            <img src="https://images.pexels.com/photos/1545505/pexels-photo-1545505.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <h3>Visual Arts</h3>
          </div>
          </Link>

          <Link  to={'/category/sport'}>
          <div className="categories-page-details">
            <img src="https://images.pexels.com/photos/248547/pexels-photo-248547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <h3>Sports</h3>
          </div>
          </Link>

          <Link  to={'/category/theatre'}>
          <div className="categories-page-details">
            <img src="https://images.pexels.com/photos/2057274/pexels-photo-2057274.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <h3>Theater and Arts</h3>
          </div>
          </Link>

          <Link  to={'/category/festival'}>
          <div className="categories-page-details">
            <img src="https://media.istockphoto.com/id/490263249/photo/empty-cinema-screen-with-audience.jpg?s=612x612&w=0&k=20&c=n_tXv3YBoIxDa8RFbt7ct3WmNQhJnc4-EFlH1kK5Bew=" alt="" />
            <h3>Film and Movie Events</h3>
          </div>
          </Link>

        </div>

      </div>

      {/* upcoming events starts here  */}
      <h2 className="event-h2">Upcoming Events</h2>
      <EventList url ="discovery/v2/events.json?classificationName=music&dmaId=324&apikey=E7cYSgaUVVKdkEoylfqYq2WwXPbWkqo9"/>
      <section>
        <div className="section-text">
          <h4>As a lover of Entertainment, EventFinder is here to give you all access to Entertainment events</h4>
        </div>
        <div className="section-img">  
          <img src="https://images.pexels.com/photos/433452/pexels-photo-433452.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
      </section>


    </div>
  );
};

export default Home;
