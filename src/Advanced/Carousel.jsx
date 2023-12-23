import React, { Component } from 'react'

export default class Carousel extends Component {
  constructor(props){
    super(props)
    this.state = {
      shortTitle : {
          stitle1:"live course with imran",
          stitle2:"live course with kamran  ",
          stitle3:"live course with kamran  "
      },
      longTitle : {
          ltitle1:" Live adda with imran"  ,
          ltitle2:" Live with kamran vai  ",
          ltitle3:" Live with IELTS trainer golam kibria emruz "
      },
      Date : {
          Date1:" 20 dec , 2023"  ,
          Date2:" 18 dec , 2023  ",
          Date3:" 25 dec , 2023 "
      } ,
      description : {
          des1:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nobis voluptatibus iusto non, quisquam quod aut dolorem at ullam aperiam itaque fugit! In, ipsum distinctio inventore quidem corporis vero adipisci."  ,
          des2:" Iure nobis voluptatibus iusto non, quisquam quod aut dolorem at ullam aperiam itaque fugit! In, ipsum distinctio inventore quidem corporis vero adipisci.  ",
          des3:" sit amet consectetur adipisicing elit. Iure nobis voluptatibus iusto non, quisquam quod aut dolorem at ullam aperiam itaque fugit! In, ipsum distinctio inventore quidem corporis vero adipisci. "
      } 
    }
  } 

  render() {
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
              <p className="shortTitle" > {this.state.shortTitle.stitle1} </p>
              <h3>{this.state.longTitle.ltitle1}</h3>
              <p className='description'>{this.state.description.des1}
              </p>
              <b>ImranAhmed.net</b>
              <p>{this.state.Date.Date1}</p>
              </div>
          </div> 
        </div> 
        <div className="carousel-item  ">
          <div className="row">
            <div className="col-6"><img src="kamran.jpg" className="d-block w-100 " alt="..."/> </div> 
            <div className="col-6">
              <p className="shortTitle"> {this.state.shortTitle.stitle2}</p>
              <h3>{this.state.longTitle.ltitle2}</h3>
              <p>{this.state.description.des2}
              </p>
              <b>ImranAhmed.net</b>
              <p>{this.state.Date.Date2}</p>
              </div> 
          </div> 
        </div> 
        <div className="carousel-item  ">
          <div className="row">
            <div className="col-6 col-sm-12"><img src="kibbut.webp" className="d-block w-100 " alt="..."/> </div>
            <div className="col-6 col-sm-12">
              <p className="shortTitle"> {this.state.shortTitle.stitle3}</p>
              <h3>{this.state.longTitle.ltitle3}</h3>
              <p>{this.state.description.des3}</p>
              <b>gulamkibria.net</b>
              <p>{this.state.Date.Date3}</p> 
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
}
