function Home() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-gradient-to-b from-white to-gray-100">
      <h1 className="text-4xl md:text-6xl font-extrabold text-blue-600 mb-4">
        DocTools.io
      </h1>
      <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-8">
        Ferramentas simples e poderosas para manipulação de documentos. Sem
        anúncios, sem limites, totalmente gratuito.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="/extract"
          className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition"
        >
          Extrair documentos
        </a>
        <a
          href="/merge"
          className="bg-gray-200 text-gray-900 px-6 py-3 rounded-xl font-medium hover:bg-gray-300 transition"
        >
          Meclar PDFs
        </a>
      </div>
    </section>
  );
}

export default Home;
