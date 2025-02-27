import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Cards from "../components/Cards";

export default function Home() {
    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.main}>
                <div className={styles.esquerda}>
                        <Cards title="Rio de Janeiro" content="O Rio de Janeiro é um destino que encanta viajantes do mundo todo, e não é à toa! A cidade oferece uma combinação única de belezas naturais, cultura vibrante e um estilo de vida contagiante."/>
                        <Cards title="Guarujá" content="O Guarujá, conhecido como a 'Pérola do Atlântico', é um destino turístico popular no litoral de São Paulo, oferecendo diversas vantagens para os viajantes"/>
                        <Cards title="Fortaleza" content="Fortaleza, a vibrante capital do Ceará, é um destino turístico que oferece uma combinação irresistível de sol, mar, cultura e gastronomia. As vantagens de viajar para lá são muitas."/>
                </div>
                <div className={styles.direita}>
                    <div className={styles.image}>
                        <img src="https://cdn.cosmos.so/0e507f09-d8e7-4a15-9e06-bdb9dcb47d20?format=jpeg" alt="" />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}