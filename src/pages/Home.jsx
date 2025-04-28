import home_side from "../assets/home-side.png";

function Home() {
  return (
    <section className="flex w-full">
      <main className="border-1">
        <div className=" font-mono text-2xl">
          Simplifique a forma de lidar com documentos.
        </div>
        <p>Extraia, edite e mescle documentos com facilidade.</p>
        <a href="#">Faça o Upload do seu PDF</a>
      </main>
      <aside className="border-1">
        <img src={home_side} alt="" />
      </aside>
    </section>
  );
}

export default Home;
