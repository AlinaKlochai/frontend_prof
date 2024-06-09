import DreamTeam from "./DreamTeam"
import FarGalaxy from "./FarGalaxy"
import Hero from "./Hero"


function Main() {
  return (
     <>
      <main>
        <section className="left">
          <Hero />
        </section>
        <section className="right">
          <h2>Dream Team</h2>
          <DreamTeam />
        </section>
        <FarGalaxy />
      </main>
    </>
  )
}

export default Main