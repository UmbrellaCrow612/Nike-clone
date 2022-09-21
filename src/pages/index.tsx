import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <section className="px-4 mx-auto max-w-screen-2xl md:h-[40rem] h-[30rem]">
      <iframe
        className="w-full h-full"
        src="https://www.youtube-nocookie.com/embed/PZIqV7wNyyU?autoplay=1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </section>
  )
}

export default Home
