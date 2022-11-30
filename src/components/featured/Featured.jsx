import "./featured.css"

const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
           <img src="https://cf.bstatic.com/xdata/images/city/540x270/684764.webp?k=6c3c9e920a39ca4f9eddcdfaa916999ea5d2765844610dd59349f4271f7596b3&o="></img>
            <div className="featuredTitle">
                <h1>Dublin</h1>
                <h2>123 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
           <img src="https://cf.bstatic.com/xdata/images/city/540x270/619923.webp?k=4fb13225390240a51ee5aa1d76318d03dc0de8a046ddc06e4598f17b287bdcc9&o="></img>
            <div className="featuredTitle">
                <h1>Austin</h1>
                <h2>123 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
           <img src="https://cf.bstatic.com/xdata/images/city/540x270/689744.webp?k=3c7c6d59d968c2bade9003d9ebf8a1346455ce92abe94ffaa29247839161f09e&o="></img>
            <div className="featuredTitle">
                <h1>Reno</h1>
                <h2>123 properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured