//import RecPic from "./images/rec-pic.gif"
//import RecPic2 from "./images/rec-pic-2.jpg"
//import RecPic3 from "./images/rec-pic-3.jpg"
import Practice from "./practice"
import cardData from "./data"


function CardsProps (props) {
  let badgeText
  if (props.data.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.data.openSpots > 0) {
    badgeText = "ONLINE"
  }

  return (
    <div className="card-div">
      {badgeText && <div className="batch">{badgeText}</div>}
      <img src={props.data.image} className="card-img"></img>
      <div className="rating-div">
        <img src="/images/star.png" className="star-img"></img>
        <span>{props.data.rating}</span>
        <span className="gray">({props.data.peopleCount}) &#x2022;</span>
        <span className="gray">{props.data.from}</span>
      </div>
      <p>{props.data.title}</p>
      <p><b>From ${props.data.price}</b>/Person</p>
    </div>
  )
}

function Card () {
  return (
    <div>
      <div className="card-props">
        {cardData.map((data) => (
        <div className="card-props" key={data.id}>
          <CardsProps 
            data={data}
          />
        </div>
        ))}
      </div>
      <div className="practice-div">
        <Practice />
      </div>
    </div>
  )
}

export default Card 

/*
function Card () {
  return (
    <div>
      <div className="card-props">
        <CardsProps 
          image={RecPic2}
          rating="3.8"
          from="South Korea"
          title="The Power Of Superhuman"
          price="126"
        />
        <CardsProps 
          image={RecPic3}
          rating="4.3"
          from="Australia"
          title="Moon or Ball of Fur"
          price="149"
        />
      </div>

      <div className="practice-div">
        <Practice />
      </div>
    </div>
  )
}

function CardsProps () {
  return (
    <div>
      <div className="card-props">
        {cardData.map((data) => (
          <div className="card-div" key={data.id}>
            <img src={data.image} className="card-img"></img>
            <div className="rating-div">
              <img src={Star} className="star-img"></img>
              <span>{data.rating}</span>
              <span className="gray">({data.peopleCount}) &#x2022;</span>
              <span className="gray">{data.from}</span>
            </div>
            <p>{data.title}</p>
            <p><b>From ${data.price}</b>/Person</p>
          </div>
        ))}
      </div>
      <div className="practice-div">
        <Practice />
      </div>
    </div>
  )
}
*/

