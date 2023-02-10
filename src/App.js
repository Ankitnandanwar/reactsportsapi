import './App.css';
import cartImg from './assets/cart-shopping-solid.svg'
import userImg from './assets/user-solid.svg'
import phoneImg from './assets/phone-solid.svg'


function App() {
  return (
    <div className="App">
      <div className='container-fluid bg-light'>
        <div className='row'>
          <div className='col-2'>
            <img src="https://about.gitlab.com/images/press/logo/png/gitlab-logo-100.png" alt="globe-img" className='w-50 mt-3'/>
          </div>
          <div className='col-7 container '>
              <nav className='navbar navbar-expand-lg mt-0' style={{fontSize:'19px'}}>
                <a className='nav-link col-3 text-primary active' href="#">Home</a>
                <a className='nav-link col-3 text-dark' href="#">About</a>
                <a className='nav-link col-3 text-dark' href="#">Contact</a>
                <a className='nav-link col-3 text-dark' href="#">Carrers</a>
              </nav>
          </div>
          <div className='col-3'>
            <img src={cartImg} alt="cart-img" width='30' className='mt-3'/>
            <img src={userImg} alt="User-img" width='25' className='mt-3 ml-5'/>
            <img src={phoneImg} alt="User-img" width='27' className='mt-3 ml-5'/>
          </div>
        </div>
      </div>

      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg" style={{height:"660px"}} className="d-block w-100" alt="img-1"/>
          </div>
          <div className="carousel-item">
            <img src="https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{height:"660px"}} className="d-block w-100" alt="img2"/>
          </div>
          <div className="carousel-item">
            <img src="https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{height:"660px"}} className="d-block w-100" alt="img-3"/>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default App;
