import { Link } from "react-router-dom";
import Equipe from "../Equipe/Equipe";
import Navbar from "../../components/layout/Navbar/Navbar";
import heroImg from "../../assets/hero.png";
import check_circle from "../../assets/check_circle.svg";
import monetization_on from "../../assets/monetization_on.svg";
import Team_meeting from "../../assets/Team_meeting.svg";
import school from "../../assets/school.svg";
import image_2 from "../../assets/image_2.png";
import "../../styles/home.css";


function Home() {
  return (
    <>
        <section className="hero">
            <div className="hero-text">
                <h1>
                    Empresa Júnior de <br />
                    <span>Computação - UFPel</span>
                </h1>
                <p>
                   Desenvolvemos soluções tecnológicas personalizadas e inovadoras por um melhor custo-benefício, aproximando jovens universitários do mercado de trabalho.
                </p>
                <div className="hero-buttons">
                    <button>Entre para a Hut8</button>
                    <button>Ver Portfólio</button>
                </div>
            </div>
            <div className="hero-img">
                <img src={heroImg} alt="Equipe trabalhando" />
            </div>
        </section>

        <section className="stats">
            <div className="stat-item">
                <h2>10+</h2>
                <p>Anos de História</p>
            </div>
            <div className="stat-item">
                <h2>50+</h2>
                <p>Projetos entregues</p>
            </div>
            <div className="stat-item">
                <h2>100+</h2>
                <p>Membros Impactados</p>
            </div>
            <div className="stat-item">
                <h2>100%</h2>
                <p>Clientes Satisfeitos</p>
            </div>
        </section>

        <section className="about">
            <div className="about-container">
                <div className="about-image">
                    <img src={Team_meeting} alt="Team meeting" />
                    <div className="image-overlay">
                        <div className="inner-circle">
                            <img src={school} alt="school" />
                        </div>
                    </div>
                    <img src={image_2} alt="image_2" />
                </div>
                <div className="about-text">
                    <h2 className="about-title">Quem somos</h2>

                    <h1 className="about-titleH1">
                        Trazemos o mercado de trabalho para dentro do meio acadêmico
                    </h1>

                    <p>
                        Fundada em maio de 2014, a Hut8 é a empresa júnior dos cursos de Ciência 
                        e Engenharia da Computação, vinculada à Universidade Federal de Pelotas.
                        <br /><br />
                        Sem fins lucrativos, somos constituídos por uma equipe de jovens 
                        universitários que buscam obter conhecimento e experiência de mercado 
                        além das grades curriculares.
                    </p>

                    <div className="about-features">
                        <div className="feature-item">
                            <div className="overlay">
                            <img src={check_circle} alt="check" />
                            </div>

                            <div>
                            <h2>Qualidade Garantida</h2>
                            <p>Processos supervisionados por professores doutores da UFPel.</p>
                            </div>
                        </div>

                        <div className="feature-item">
                            <div className="overlay">
                            <img src={monetization_on} alt="monetization" />
                            </div>

                            <div>
                            <h2>Custo-Benefício</h2>
                            <p>Valores acessíveis e investimento no futuro da tecnologia.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section>
            <h2>O Que Fazemos</h2>
                <br/>
                <h1>
                Soluções Digitais Completas
                </h1>
                <br></br>
                <h3>Temos a solução e as ferramentas perfeitas a sua necessidade, do conceito ao código.</h3>
                <section style={{ padding: "40px" }}>
                    <h2>Soluções Digitais</h2>

                    <div style={{ display: "flex", gap: "20px" }}>

                        <div style={{ border: "1px solid #ccc", padding: "20px" }}>
                        <h3>Plataformas Web</h3>
                        <p>Sites e sistemas web.</p>
                        <p>Saiba mais</p>
                        </div>

                        <div style={{ border: "1px solid #ccc", padding: "20px" }}>
                        <h3>Aplicativos Mobile</h3>
                        <p>Apps para Android e iOS.</p>
                        <p>Saiba mais</p>
                        </div>

                        <div style={{ border: "1px solid #ccc", padding: "20px" }}>
                        <h3>Soluções Personalizadas</h3>
                        <p>Software sob medida.</p>
                        <p>Saiba mais</p>
                        </div>

                    </div>
                </section>
        </section>
    </>
  );
}

export default Home;



