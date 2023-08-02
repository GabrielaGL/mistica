import React from "react";

class Main extends React.Component {

	render() {
		return (
			<React.Fragment>
				<section id="mainLayout" className="mainSection">

					<div className="container-fluid mainContent">

						<nav className="navbar navbar-expand-md navbar-dark">
							<div className="container-fluid " id="home">
								<a className="navbar-brand" href="#home">
									<img src="../assets/imgs/logo1.png" alt="Logo" width="222" height="222" className="d-inline-block align-text-top" />
								</a>
								<button className="navbar-toggler" type="button" data-bs-toggle="collapse"
									data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
									aria-label="Toggle navigation">
									<span className="navbar-toggler-icon"></span>
								</button>
								<div className="collapse navbar-collapse " id="navbarSupportedContent">
									<ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
										<li className="nav-item">
											<a className="nav-link active" aria-current="page" href="index.html">Home</a>
										</li>
										<li className="nav-item dropdown">
											<a className="nav-link dropdown-toggle" href="form" role="button" data-bs-toggle="dropdown"
												aria-expanded="false">
												Conócete
											</a>
											<ul className="dropdown-menu">
												<li><a className="dropdown-item" href="#form">Astrología Védica</a></li>
												<li>
													<hr className="dropdown-divider" />
												</li>
												<li><a className="dropdown-item" href="#testimonialsSection">Testimonios</a></li>
												<li><a className="dropdown-item" href="#pricing">Planes</a></li>
											</ul>
										</li>
										<li className="nav-item">
											<a className="nav-link" href="#footer">Contacto</a>
										</li>
									</ul>
									<form className="d-flex">
										<input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Busqueda" />
										<button className="btn btn-outline-light goldButton" type="submit">Buscar</button>
									</form>
								</div>
							</div>
						</nav>

						<div id="mainContent" className="carousel slide" data-bs-ride="carousel">
							<div className="carousel-inner">
								<div className="carousel-item active clearfix" data-bs-interval="8800">
									<h3 id="title1">Astrología Védica<br /><b></b></h3>
									<p className="col-5 float-md-start mb-3 ms-md-3" id="textWelcome">
										Tu carta astral es un mapa del cielo que representa el momento exacto en el que naciste. Más que
										predecir el destino o pronosticar los sucesos terrestres, se usa como una potente herramienta en
										el proceso individual de auto-conocimiento. <br />
										En <b> Entiéndeme </b> utilizamos la astrología védica, que está orientada a los propósitos y la
										identidad;
										más allá de tu signo, se trata de tu energía, tu personalidad y lo que decides hacer con eso.
										<br />
									</p>
									<a type="button" className="btn btn-dark btn-lg download-btn aware" href="#form"> Conócete </a>
									<img className="col-6 float-md-end mb-3 me-md-3 carousel-img1" src="../assets/imgs/mockup-manos-mujer.png"
										alt="manos mujer con App" />
								</div>
								<div className="carousel-item clearfix" data-bs-interval="8800">
									<img className="col-6 float-md-start mb-3 ms-md-3 carousel-img2" src="../assets/imgs/mockup-manos-hombre.png"
										alt="manos hombre con App" />
									<h3 id="title2">¿Qué viene en tu lectura?<br /><b></b></h3>
									<p className="col-6 float-md-end mb-3 me-md-3" id="textWelcome2">
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
									<a type="button" className="btn btn-dark btn-lg download-btn aware" href="#form"> Conócete </a>
									<a type="button" className="btn btn-outline-light btn-lg download-btn goldButton"
										href="#testimonialsSection">Testimonios</a> -->
								</div>
							</div>
							<button className="carousel-control-prev" type="button" data-bs-target="#mainContent" data-bs-slide="prev">
								<span className="carousel-control-prev-icon" aria-hidden="true"></span>
								<span className="visually-hidden">Previo</span>
							</button>
							<button className="carousel-control-next" type="button" data-bs-target="#mainContent" data-bs-slide="next">
								<span className="carousel-control-next-icon" aria-hidden="true"></span>
								<span className="visually-hidden">Siguiente</span>
							</button>
						</div>
					</div>
				</section>


				<section id="form">
					<div className="container mt-5">
						<div className="row d-flex justify-content-center align-items-center formSection">
							<div className="col-md-8 bgImg">
								<form id="regForm">
									<h1 id="register">Cuéntanos de ti</h1>
									<div className="all-steps" id="all-steps">
										<span className="step"><i className="fa fa-user"></i></span>
										<span className="step"><i className="fa fa-map-marker"></i></span>
										<span className="step"><i className="fa fa-calendar"></i></span>
									</div>

									<div className="tab">
										<label htmlFor="fName"> ¿Cómo te llamas? <span className="mandatory">*</span></label>
										<p>
											<input id="fName" type="text" placeholder="Nombre" onInput={this.className = ''} name="fName" required
												aria-required="true" />
										</p>

									</div>
									<div className="tab">
										<label htmlFor="location"> ¿Dónde naciste? <span className="mandatory">*</span></label>
										<div id="map"></div>
										<p><input type="text" placeholder="Click en Mapa" id="location" onInput={this.className = ''}
											name="location" required aria-required="true" /></p>


									</div>
									<div className="tab">
										<label htmlFor="DateOB"> ¿Cuándo y a qué hora naciste? <span className="mandatory">*</span></label>
										<p><input className="dob" type="datetime-local" id="DateOB" onInput={this.className = ''} name="dob"
											min="1923-01-01T00:00" max="2023-02-23T00:00" required aria-required="true" /></p>
										<span id="validity" className="validity"></span>
									</div>

									<div className="thanks-message text-center" id="text-message"> <img src="https://i.imgur.com/O18mJ1K.png"
										width="100" alt="Tus datos fueron enviados" className="mb-4" />
										<h3>¡Ya tenemos tus Datos!</h3> <span><b>Estamos interpretando tu carta para mostrarte tus
											resultados.</b></span>
									</div>

									<div style={{ overflow: 'auto' }} id="nextprevious">
										<div style={{ float: 'right' }}>
											<button className="formButton" type="button" id="prevBtn"><i className="fa fa-angle-double-left"></i></button>
											<button className="formButton" type="button" id="nextBtn"><i className="fa fa-angle-double-right"></i></button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</section>

				<section id="results">
					<div className="container cards">
						<div className="row" id="cards">
							{/* eslint-disable-next-line jsx-a11y/heading-has-content */}
							<h1 id="msgUser"></h1>
							<br />
							<div className="flip-box col-lg-3 col-md-3 col-sm-12">
								<div id="boxCard1" className="flip-box-inner">
									<div className="flip-box-front">
										<img className="back" src="../assets/imgs/carta.png" alt="reverso carta" />
									</div>
									<div className="flip-box-back">
										<img id="card1" className="back" src="../assets/imgs/carta.png" alt="carta con resultados" />
									</div>
								</div>
							</div>
							<div id="boxCard2" className="flip-box col-lg-3 col-md-3 col-sm-12">
								<div className="flip-box-inner">
									<div className="flip-box-front">
										<img className="back" src="images/carta.png" alt="reverso carta" />
									</div>
									<div className="flip-box-back">
										<img id="card2" className="back" src="images/carta.png" alt="carta con resultados" />
									</div>
								</div>
							</div>
							<div id="boxCard3" className="flip-box col-lg-3 col-md-3 col-sm-12">
								<div className="flip-box-inner">
									<div className="flip-box-front">
										<img className="back" src="images/carta.png" alt="reverso carta" />
									</div>
									<div className="flip-box-back">
										<img id="card3" className="front" src="images/carta.png" alt="carta con resultados" />
										<a href="http://" id="typeAyur" target="_blank" rel="noreferrer">aqui</a>
										<a href="http://" id="balanceAyur" target="_blank" rel="noreferrer">aqui</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>


				<section id="testimonialsSection">

					<div id="testimonials" className="carousel slide" data-bs-ride="carousel">
						<div className="carousel-inner">
							<div className="carousel-item active" data-bs-interval="8800">
								<h3>"Había intentado con diversos métodos para balancear mi estado de salud. En 'entiéndeme' pude comprender
									varios aspectos de mi vida y mi cuerpo.<br /> ¡Gracias, <b>entiéndeme</b>!"</h3>
								<img src="images/Testimonial_3.jpg" className="d-block w-100" alt="testimonio hombre peruano" />
								<p>Trujillo, Perú</p>
							</div>
							<div className="carousel-item" data-bs-interval="8800">
								<h3>"Estaba pasando por estados emocionales que afectaban mi vida laboral y familiar. Ahora que entiendo de
									donde provenía eso soy más feliz."</h3>
								<img src="images/Testimonial_1.jpg" className="d-block w-100" alt="testimonio mujer argentina" />
								<p>Córdoba, Argentina</p>
							</div>
							<div className="carousel-item" data-bs-interval="8800">
								<h3>"Nunca había considerado la importancia del autoconocimiento, y menos en lo sexual. El saber sobre mi yoni
									ha optimizado mi vida sexual totalmente."</h3>
								<img className="d-block w-100" src="images/Testimonial_4.jpg" alt="testimonio hombre ecuatoriano" />
								<p>Cuenca, Ecuador</p>
							</div>
							<div className="carousel-item" data-bs-interval="8800">
								<h3>"El conocer mi Nakshatra me ha ayudado a entenderme y aceptarme en mis días 'buenos' y 'malos', y a
									mejorar mis relaciones."</h3>
								<img className="d-block w-100" src="images/Testimonial_2.jpg" alt="testimonio mujer colombiana" />
								<p>Villavicencio, Colombia</p>
							</div>
						</div>
						<button className="carousel-control-prev" type="button" data-bs-target="#testimonials" data-bs-slide="prev">
							<span className="carousel-control-prev-icon" aria-hidden="true"></span>
							<span className="visually-hidden">Previo</span>
						</button>
						<button className="carousel-control-next" type="button" data-bs-target="#testimonials" data-bs-slide="next">
							<span className="carousel-control-next-icon" aria-hidden="true"></span>
							<span className="visually-hidden">Siguiente</span>
						</button>
					</div>
				</section>




				<section id="press">
					<img src="images/laboratoria.png" alt="lab-logo" />
					<img src="images/tnw.png" alt="tnw-logo" />
					<img src="images/bizinsider.png" alt="biz-insider-logo" />
					<img src="images/td.png" alt="td-logo" />

				</section>



				<section id="pricing">
					<div className="w-80 px-3 py-3 pt-md-4 pb-md-4 mx-auto text-center">
						<h1 className="font-weight-bold">Un <b>plan</b> <br />para la necesidad de cada <br /><b>Nakshatra</b>.</h1>
						<p className="lead">Completos y asequibles planes para conocerte y conocer a tus seres queridos.</p>
					</div>
					<div className="container text-center">
						<div className="row">
							<div className="col-lg-4 col-md-6 col-sm-10 pb-4 d-block m-auto">
								<div className="pricing-item">
									<div className="pt-4 pb-2 plan-name">
										<h4>Soorya Rasi</h4>
									</div>
									<div className="pricing-description">
										<ul className="list-unstyled mt-3 mb-1">
											<li><i className="fa fa-check-circle check"></i> 3 consultas por día</li>
											<li><i className="fa fa-check-circle check"></i> Asistencia Técnica 24/7</li>
											<br />
											<br />
											<li></li>
											<li></li>
										</ul>
									</div>
									<div className="pricing-price pb-1 text-primary mb-3">
										<h1 className="price">
											<span></span>Gratuito
										</h1>
									</div>
									<div className="pricing-button pb-4">
										<button type="button" className="btn btn-lg btn-outline-primary w-75">Vamos</button>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 col-sm-10 pb-4 d-block m-auto">
								<div className="pricing-item middle">
									<div className="pt-4 pb-2 plan-name">
										<h4>Chandra Rasi</h4>
									</div>
									<div className="pricing-description">
										<ul className="list-unstyled mt-3 mb-1">
											<li><i className="fa fa-check-circle check"></i>Consultas Ilimitadas</li>
											<li><i className="fa fa-check-circle check"></i>1 consulta de compatibilidad personalizada mensual</li>
											<li><i className="fa fa-check-circle check"></i>Asistencia Técnica 24/7</li>
											<br />
											<li></li>
										</ul>
									</div>
									<div className="pricing-price pb-1 text-primary mb-3">
										<h1 className="price">
											<span>£</span>49
										</h1>
									</div>
									<div className="pricing-button pb-4">
										<button type="button" className="btn btn-lg btn-outline-light w-75 goldButton ">Vamos</button>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 col-sm-10 pb-4 d-block m-auto">
								<div className="pricing-item">
									<div className="pt-4 pb-2 plan-name">
										<h4>Nakshatra</h4>
									</div>
									<div className="text-primary check">
									</div>
									<div className="pricing-description ">
										<ul className="list-unstyled mt-3 mb-1">
											<li><i className="fa fa-check-circle check"></i>Consultas Ilimitadas</li>
											<li><i className="fa fa-check-circle check"></i>3 consultas de compatibilidad personalizadas mensuales</li>
											<li><i className="fa fa-check-circle check"></i>Prioridad de Agenda</li>
											<li><i className="fa fa-check-circle check"></i>Asistencia Técnica 24/7</li>
										</ul>
									</div>
									<div className="pricing-price pb-1 text-primary mb-3">
										<h1 className="price">
											<span>£</span>99
										</h1>
									</div>
									<div className="pricing-button pb-4">
										<button type="button" className="btn btn-lg btn-outline-primary w-75">Vamos</button>
									</div>
								</div>
							</div>
						</div>
					</div>

				</section>



				<footer id="footer">
					<a href="https://twitter.com/" target="_blank" rel="noreferrer"><i className="fab fa-twitter contact-icon"></i></a>
					<a href="https://web.facebook.com/" target="_blank" rel="noreferrer"><i className="fab fa-facebook contact-icon"></i></a>
					<a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><i className="fab fa-instagram contact-icon"></i></a>
					<a href="mailto:info@entiendeme.com" target="_blank" rel="noreferrer"><i className="fas fa-envelope contact-icon"></i></a>

					<p>© Copyright 2023 entiéndeme</p>

				</footer>

			</React.Fragment>
		);
	}
}

export default Main;