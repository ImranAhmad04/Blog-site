import React from 'react'
import './Blog.css'
function MyCarousel() {
  return (
    <> 
  <nav class="navbar navbar-expand-lg bg-light container">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a class="navbar-brand" href="#">ImranAhmedBlog</a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">Blog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">Contact Us</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    <hr />
    <br />
        <div id="carouselExampleFade" className="carousel slide carousel-fade container ml-5 ">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="row">
        <div className="col-6"><img src="logo512.png" className="d-block w-100 " alt="..."/> </div>
        <div className="col-6">
          <p>Lorem ipsum dolor sit amet.</p>
          <h3>react course bangla  </h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nobis voluptatibus iusto non, quisquam quod aut dolorem at ullam aperiam itaque fugit! In, ipsum distinctio inventore quidem corporis vero adipisci.
          </p>
          <b>ImranAhmed.net</b>
          <p>20 Jun , 2023</p>
          </div>
      </div> 
    </div> 
    <div className="carousel-item  ">
      <div className="row">
        <div className="col-6"><img src="kamran.jpg" className="d-block w-100 " alt="..."/> </div> 
        <div className="col-6">
          <p>Lorem ipsum dolor sit amet.</p>
          <h3>Live with kamran vai </h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nobis voluptatibus iusto non, quisquam quod aut dolorem at ullam aperiam itaque fugit! In, ipsum distinctio inventore quidem corporis vero adipisci.
          </p>
          <b>ImranAhmed.net</b>
          <p>20 Jun , 2023</p>
          </div> 
      </div> 
    </div> 
    <div className="carousel-item  ">
      <div className="row">
        <div className="col-6"><img src="kibbut.webp" className="d-block w-100 " alt="..."/> </div>
        <div className="col-6">
          <p>Lorem ipsum dolor sit amet.</p>
          <h3>Live with kibria vaia </h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nobis voluptatibus iusto non, quisquam quod aut dolorem at ullam aperiam itaque fugit! In, ipsum distinctio inventore quidem corporis vero adipisci.
          </p>
          <b>gulamkibria.net</b>
          <p>20 Jun , 2023</p> 
        </div>
      </div> 
    </div> 
  </div>
  <button className=" carousel-control-prev " type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className=" carousel-control-prev-icon bg-dark  " ></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className=" carousel-control-next " type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span  className=" carousel-control-next-icon bg-dark  " > </span>   
    <span className="visually-hidden">Next </span>
  </button>
</div> 
    </>
  )
}

export default MyCarousel