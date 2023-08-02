import React from "react";

class Main extends React.Component {

	render() {
		return (
			<React.Fragment>
				<section id="mainLayout" class="mainSection">

					<div class="container-fluid mainContent">

						<nav class="navbar navbar-expand-md navbar-dark">
							<div class="container-fluid " id="home">
								<a class="navbar-brand" href="#home">
									<img src="images/logo1.png" alt="Logo" width="222" height="222" class="d-inline-block align-text-top" />
								</a>
								<button class="navbar-toggler" type="button" data-bs-toggle="collapse"
									data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
									aria-label="Toggle navigation">
									<span class="navbar-toggler-icon"></span>
								</button>
								<div class="collapse navbar-collapse " id="navbarSupportedContent">
									<ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
										<li class="nav-item">
											<a class="nav-link active" aria-current="page" href="index.html">Home</a>
										</li>
										<li class="nav-item dropdown">
											<a class="nav-link dropdown-toggle" href="form" role="button" data-bs-toggle="dropdown"
												aria-expanded="false">
												Conócete
											</a>
											<ul class="dropdown-menu">
												<li><a class="dropdown-item" href="#form">Astrología Védica</a></li>
												<li>
													<hr class="dropdown-divider" />
												</li>
												<li><a class="dropdown-item" href="#testimonialsSection">Testimonios</a></li>
												<li><a class="dropdown-item" href="#pricing">Planes</a></li>
											</ul>
										</li>
										<li class="nav-item">
											<a class="nav-link" href="#footer">Contacto</a>
										</li>
									</ul>
									<form class="d-flex">
										<input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Busqueda" />
											<button class="btn btn-outline-light goldButton" type="submit">Buscar</button>
									</form>
								</div>
							</div>
						</nav>

						<div id="mainContent" class="carousel slide" data-bs-ride="carousel">
							<div class="carousel-inner">
								<div class="carousel-item active clearfix" data-bs-interval="8800">
									<h3 id="title1">Astrología Védica<br /><b></b></h3>
									<p class="col-5 float-md-start mb-3 ms-md-3" id="textWelcome">
										Tu carta astral es un mapa del cielo que representa el momento exacto en el que naciste. Más que
										predecir el destino o pronosticar los sucesos terrestres, se usa como una potente herramienta en
										el proceso individual de auto-conocimiento. <br />
										En <b> Entiéndeme </b> utilizamos la astrología védica, que está orientada a los propósitos y la
										identidad;
										más allá de tu signo, se trata de tu energía, tu personalidad y lo que decides hacer con eso.
										<br />
									</p>
									<a type="button" class="btn btn-dark btn-lg download-btn aware" href="#form"> Conócete </a>
									<img class="col-6 float-md-end mb-3 me-md-3 carousel-img1" src="images/mockup-manos-mujer.png"
										alt="manos mujer con App" />
								</div>
								<div class="carousel-item clearfix" data-bs-interval="8800">
									<img class="col-6 float-md-start mb-3 ms-md-3 carousel-img2" src="images/mockup-manos-hombre.png"
										alt="manos hombre con App" />
									<h3 id="title2">¿Qué viene en tu lectura?<br /><b></b></h3>
									<p class="col-6 float-md-end mb-3 me-md-3" id="textWelcome2">
										Se dice que el <b> Nakshatra </b> es el lenguaje original de las estrellas. Se relaciona con dos aspectos,
										lo que representa
										a las estrellas fijas que son constantes, y la Luna/mente que siempre está cambiando. <br />
										El <b>Yoni Porutham</b> define la compatibilidad físico-emocional y sexual. Es representado por un animal,
										y como tal, sigue las reglas de covivencia animal. Esto define tanto tu máxima compatibilidad con alguien,
										como la tendencia
										a las enemistades. <br />
										Finalmente, el <b>Ayurveda</b> es el sistema tradicional de sanación de la India, que considera la
										combinación
										de cuerpo, mente y espíritu como un todo. <br />
									</p>
									<a type="button" class="btn btn-dark btn-lg download-btn aware" href="#form"> Conócete </a>
									<a type="button" class="btn btn-outline-light btn-lg download-btn goldButton"
										href="#testimonialsSection">Testimonios</a> -->
								</div>
							</div>
							<button class="carousel-control-prev" type="button" data-bs-target="#mainContent" data-bs-slide="prev">
								<span class="carousel-control-prev-icon" aria-hidden="true"></span>
								<span class="visually-hidden">Previo</span>
							</button>
							<button class="carousel-control-next" type="button" data-bs-target="#mainContent" data-bs-slide="next">
								<span class="carousel-control-next-icon" aria-hidden="true"></span>
								<span class="visually-hidden">Siguiente</span>
							</button>
						</div>
					</div>
				</section>


				<section id="form">
					<div class="container mt-5">
						<div class="row d-flex justify-content-center align-items-center formSection">
							<div class="col-md-8 bgImg">
								<form id="regForm">
									<h1 id="register">Cuéntanos de ti</h1>
									<div class="all-steps" id="all-steps">
										<span class="step"><i class="fa fa-user"></i></span>
										<span class="step"><i class="fa fa-map-marker"></i></span>
										<span class="step"><i class="fa fa-calendar"></i></span>
									</div>

									<div class="tab">
										<label for="fName"> ¿Cómo te llamas? <span class="mandatory">*</span></label>
										<p>
											<input id="fName" type="text" placeholder="Nombre" oninput="this.className = ''" name="fName" required
												aria-required="true" />
										</p>

									</div>
									<div class="tab">
										<label for="location"> ¿Dónde naciste? <span class="mandatory">*</span></label>
										<div id="map"></div>
										<p><input type="text" placeholder="Click en Mapa" id="location" oninput="this.className = ''"
											name="location" required aria-required="true" /></p>


									</div>
									<div class="tab">
										<label for="DateOB"> ¿Cuándo y a qué hora naciste? <span class="mandatory">*</span></label>
										<p><input class="dob" type="datetime-local" id="DateOB" oninput="this.className = ''" name="dob"
											min="1923-01-01T00:00" max="2023-02-23T00:00" required aria-required="true" /></p>
										<span id="validity" class="validity"></span>
									</div>

									<div class="thanks-message text-center" id="text-message"> <img src="https://i.imgur.com/O18mJ1K.png"
										width="100" alt="Tus datos fueron enviados" class="mb-4" />
										<h3>¡Ya tenemos tus Datos!</h3> <span><b>Estamos interpretando tu carta para mostrarte tus
											resultados.</b></span>
									</div>

									<div style={{overflow:'auto'}} id="nextprevious">
										<div style={{float:'right'}}>
											<button class="formButton" type="button" id="prevBtn"><i class="fa fa-angle-double-left"></i></button>
											<button class="formButton" type="button" id="nextBtn"><i class="fa fa-angle-double-right"></i></button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</section>

				<section id="results">
					<div class="container cards">
						<div class="row" id="cards">
							{/* eslint-disable-next-line jsx-a11y/heading-has-content */}
							<h1 id="msgUser"></h1>
							<br />
							<div class="flip-box col-lg-3 col-md-3 col-sm-12">
								<div id="boxCard1" class="flip-box-inner">
									<div class="flip-box-front">
										<img class="back" src="images/carta.png" alt="reverso carta" />
									</div>
									<div class="flip-box-back">
										<img id="card1" class="back" src="images/carta.png" alt="carta con resultados" />
									</div>
								</div>
							</div>
							<div id="boxCard2" class="flip-box col-lg-3 col-md-3 col-sm-12">
								<div class="flip-box-inner">
									<div class="flip-box-front">
										<img class="back" src="images/carta.png" alt="reverso carta" />
									</div>
									<div class="flip-box-back">
										<img id="card2" class="back" src="images/carta.png" alt="carta con resultados" />
									</div>
								</div>
							</div>
							<div id="boxCard3" class="flip-box col-lg-3 col-md-3 col-sm-12">
								<div class="flip-box-inner">
									<div class="flip-box-front">
										<img class="back" src="images/carta.png" alt="reverso carta" />
									</div>
									<div class="flip-box-back">
										<img id="card3" class="front" src="images/carta.png" alt="carta con resultados" />
										<a href="http://" id="typeAyur" target="_blank" rel="noreferrer">aqui</a>
										<a href="http://" id="balanceAyur" target="_blank" rel="noreferrer">aqui</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

			</React.Fragment>
		);
	}
}

export default Main;