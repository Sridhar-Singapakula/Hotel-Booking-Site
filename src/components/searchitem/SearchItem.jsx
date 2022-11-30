import { useNavigate } from "react-router-dom"
import "./searchItem.css"

const SearchItem = () => {
    const navigate=useNavigate()
      const handleSearch=()=>{
              navigate("/hotels/:id")
      }
  return (
    <div className="searchItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/407986040.webp?k=22ce22636fa393202b38febcac24db8292280b0388b034ae1514941f6658d929&o=&s=1" alt="" className="siImg" />
        <div className="siDesc">
            <h1 className="siTitle">Tower Street Apartments</h1>
            <span className="siDistance">500m from center</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle">Studio Apartment with Air Conditioning</span>
            <span className="siFeatures">Entire studio . 1 bathroom .21m2 1 full bed</span>
            <span className="siCancelOp">Free Cancellation</span>
            <span className="siCancelOpSubtitle">You can cancel , so lock in this great price today!</span>
        </div>
        <div className="siDetails">
            <div className="siRating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className="siDetailsTexts">
                <span className="siPrice">$273</span>
                <span className="siTaxOp">Includes taxes and fees</span>
                <button onClick={handleSearch} className="siCheckButton">See Availability</button>
            </div>
        </div>
    </div>
  )
}

export default SearchItem