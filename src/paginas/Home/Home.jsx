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
        
        
        <section className="services">
        <span className="services-label">O Que Fazemos</span>
        <h1 className="services-title">Soluções Digitais Completas</h1>
        <p className="services-subtitle">
          Temos a solução e as ferramentas perfeitas a sua necessidade, do conceito ao código.
        </p>

        <div className="services-cards">
          <div className="service-card">
            <div className="service-card-icon icon-purple">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2"/>
                <path d="M8 21h8M12 17v4"/>
              </svg>
            </div>
            <h3>Plataformas Web</h3>
            <p>Sites institucionais, e-commerces e sistemas web robustos. Levamos seu negócio para a internet com tecnologia de ponta.</p>
            <Link to="#">Saiba mais →</Link>
          </div>

          <div className="service-card">
            <div className="service-card-icon icon-green">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="5" y="2" width="14" height="20" rx="2"/>
                <path d="M12 18h.01"/>
              </svg>
            </div>
            <h3>Aplicativos Mobile</h3>
            <p>Esteja sempre perto de seus clientes. Desenvolvimento de aplicativos nativos e híbridos para iOS e Android.</p>
            <Link to="#">Saiba mais →</Link>
          </div>

          <div className="service-card">
            <div className="service-card-icon icon-purple">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="16 18 22 12 16 6"/>
                <polyline points="8 6 2 12 8 18"/>
              </svg>
            </div>
            <h3>Soluções Personalizadas</h3>
            <p>Tem uma ideia inovadora? Transformamos sua visão em software funcional com consultoria especializada.</p>
            <Link to="#">Saiba mais →</Link>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="cta-container">
            <div className="cta-text">
                <h2>Pronto para tirar sua ideia do papel?</h2>
                <p>
                     Nossa equipe está pronta para desenvolver a solução perfeita para o seu negócio.
                </p>
            </div>
            <button className="cta-button">Solicitar Orçamento</button>
        </div>
        </section>

        <footer className="footer">
  <div className="footer-container">

    <div className="footer-brand">
      <h3>Hut8</h3>
      <p>
        Empresa Júnior de Computação da UFPel. Inovação e tecnologia ao alcance do seu negócio.
      </p>
    </div>

    <div className="footer-links">
      <h4>Links Rápidos</h4>
      <p>Home</p>
      <p>Sobre Nós</p>
      <p>Projetos</p>
      <p>Equipe</p>
    </div>

    <div className="footer-links">
      <h4>Serviços</h4>
      <p>Desenvolvimento Web</p>
      <p>Aplicativos Mobile</p>
      <p>Consultoria em TI</p>
      <p>Sistemas Personalizados</p>
    </div>

    <div className="footer-links">
      <h4>Contato</h4>
      <p>Pelotas - RS</p>
      <p>hut8@inf.ufpel.edu.br</p>
      <p>(53) 99999-9999</p>
    </div>

  </div>

  <div className="footer-bottom">
    <p>© 2025 Hut8. Todos os direitos reservados.</p>
  </div>
</footer>
    </>
  );
}

export default Home;



