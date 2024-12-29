
function Header () {
  return (
    <nav className="nav-header">
      <img src="/images/airbnb-logo.png" className="airbnbLogo"></img>
    </nav>
  )
}

function UpperPage () {
  return (
    <section className="upperPage">
      <img src="/images/airbnb-clone-image-promo.png" className="imageGrid"></img>
      <h4>Online Experience</h4>
      <p>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home</p>
    </section>
  )
}

export default function Static () {
  return (
    <div>
      <Header />
      <UpperPage />
    </div>
  )
}
