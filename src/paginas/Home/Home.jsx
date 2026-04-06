import { Link } from "react-router-dom";
import Equipe from "../Equipe/Equipe";
import Navbar from "../../components/layout/Navbar/Navbar";
import heroImg from "../../assets/hero.png";
import ufpelImg from "../../assets/ufpel.png";


function Home() {
  return (
    <>
        <section 
            style={{ 
                display: "flex", 
                alignItems: "center", 
                gap: "40px", 
                padding: "40px" 
            }}
        >
            <div>
                <h1>Empresa Júnior de <br/>
                    <span style={{ color: "purple" }}>
                    Computação - UFPel
                    </span>
                </h1>

                <p>
                Desenvolvemos soluções tecnológicas personalizadas e inovadoras por um melhor custo-benefício, aproximando jovens universitários do mercado de trabalho.
                </p>

                <div style={{ marginTop: "20px" }}>
                    <button style={{ marginRight: "10px" }}>
                        Entre para a Hut8
                    </button>

                    <button>
                        Ver Portfólio
                    </button>
                </div>
            </div>
            <div>
                <img 
                    src={heroImg} 
                    alt="Equipe trabalhando"
                    style={{ width: "400px", borderRadius: "10px" }}
                />
            </div>
        </section>

        <section 
            style={{ 
                display: "flex", 
                justifyContent: "space-around", 
                padding: "40px" 
            }}
        >
            <div>
                <h2>10+</h2>
                <p>Anos de História</p>
            </div>

            <div>
                <h2>50+</h2>
                <p>Projetos entregues</p>
            </div>

            <div>
                <h2>100+</h2>
                <p>Membros Impactados</p>
            </div>

            <div>
                <h2>100%</h2>
                <p>Clientes Satisfeitos</p>
            </div>
        </section>

        <section 
            style={{ 
                display: "flex", 
                alignItems: "center", 
                padding: "40px", 
                gap: "40px" 
            }}
        >
            <div>
                <img 
                src={ufpelImg} 
                alt="Ilustração UFPel"
                style={{ width: "350px" }}
                />
            </div>

            <div>
                <h2>Quem somos</h2>
                <br/>
                <h1>
                Trazemos o mercado de trabalho para dentro do meio acadêmico
                </h1>

                <p>
                Fundada em maio de 2014, a Hut8 é a empresa júnior dos cursos de Ciência 
                e Engenharia da Computação, vinculada à Universidade Federal de Pelotas.
                <br/><br/>
                Sem fins lucrativos, somos constituídos por uma equipe de jovens 
                universitários que buscam obter conhecimento e experiência de mercado 
                além das grades curriculares.
                </p>

                <br/><br/>

                <h2>Qualidade Garantida</h2>
                <h3>Processos supervisionados por professores doutores da UFPel.</h3>
                <br/>
                <h2>Custo-Benefício</h2>
                <h3>Valores acessíveis e investimento no futuro da tecnologia.</h3>
            </div>
        </section>
    </>
  );
}

export default Home;


        
