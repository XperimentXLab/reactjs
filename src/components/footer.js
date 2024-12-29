function Footer (props) {
  return (
    <div className="footer-div" id={props.darkMode ? "" : "lightBody"}>
      <p>You just learned fun fact about Reacts!</p>
      <small>&#169; XperimentXLab</small>
    </div>
  )
}

export default Footer