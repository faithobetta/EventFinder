import { Link } from "react-router-dom"
import "../../Css/categories.css"

const Categories = () => {
  return (
    <div className='category-page'>
      <div className="text-container">
        <div className="banner-text">
          <h3>EventFinder provides you with all kinds of categories of Entertainment</h3>
          <p>Find the perfect event that suit your interests and create unforgettable memories.</p>
        </div>
      </div>

      <div className="categories-container">
        <h2>All Entertainments Events Categories</h2>
   
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

          <Link  to={'/category/art'}>
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

          <Link  to={'/category/film'}>
          <div className="categories-page-details">
            <img src="https://media.istockphoto.com/id/490263249/photo/empty-cinema-screen-with-audience.jpg?s=612x612&w=0&k=20&c=n_tXv3YBoIxDa8RFbt7ct3WmNQhJnc4-EFlH1kK5Bew=" alt="" />
            <h3>Film and Movie Events</h3>
          </div>
          </Link>

          <Link  to={'/category/festival'}>
          <div className="categories-page-details">
            <img src="https://images.pexels.com/photos/763412/pexels-photo-763412.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <h3>Festival</h3>
          </div>
          </Link>

        </div>
      </div>

    </div>
  )
}

export default Categories
