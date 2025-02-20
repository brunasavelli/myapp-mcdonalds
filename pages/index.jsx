import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer"

export default function Home() {
    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.main}>
                <div className={styles.esquerda}>
                    <div className={styles.cards}>
                        <div className={styles.text}>
                            <h3>Big Mac</h3>
                            <p>Dois hambúrgueres (100% carne bovina), alface americana, queijo processado sabor cheddar, molho especial, cebola, picles e pão com gergelim.</p>
                        </div>
                        <div className={styles.imageLunch}>
                            <img src="https://cache-mcd-middleware.mcdonaldscupones.com/media/image/product$kzXCTbnv/200/200/original?country=br" alt="" />
                        </div>
                    </div>
                    <div className={styles.cards}>
                        <div className={styles.text}>
                            <h3>Duplo Cheddar McMelt</h3>
                            <p>Dois hambúrgueres (100% carne bovina), molho lácteo com queijo tipo cheddar, cebola ao molho shoyu e pão escuro com gergelim.</p>
                        </div>
                        <div className={styles.imageLunch}>
                            <img src="https://cache-mcd-middleware.mcdonaldscupones.com/media/image/product$kzXWKJ6A/200/200/original?country=br" alt="" />
                        </div>
                    </div>
                    <div className={styles.cards}>
                        <div className={styles.text}>
                            <h3>McCrispy Chicken Legend</h3>
                            <p>Composto por pão tipo brioche com batata, molho do CBO (o saboroso molho emulsionado com especiarias e derivados lácteos), cebola crispy, bacon em fatias, alface americana, queijo processado sabor cheddar e carne 100% de peito de frango, temperada e empanada.</p>
                        </div>
                        <div className={styles.imageLunch}>
                            <img src="https://cache-mcd-middleware.mcdonaldscupones.com/media/image/product$kfXTjKnx/200/200/original?country=br" alt="" />
                        </div>
                    </div>
                </div>
                <div className={styles.direita}>
                    <div className={styles.image}>
                        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ad6f8709-6b9d-48f7-b350-40979112a304/dg4qudr-17ee40aa-93a7-47d4-b054-64d86e9aba27.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FkNmY4NzA5LTZiOWQtNDhmNy1iMzUwLTQwOTc5MTEyYTMwNFwvZGc0cXVkci0xN2VlNDBhYS05M2E3LTQ3ZDQtYjA1NC02NGQ4NmU5YWJhMjcuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.nHwX-ztsQYTiuCJSvGm5AxjEW3ufKCZS8i5eia3wdxI" alt="" />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}