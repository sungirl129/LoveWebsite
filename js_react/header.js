
var itemArray;

function Item(id,image,text) {
    this.id = id;
    this.image = image;
    this.text = text;
}

function setItemArray() {
    itemArray = new Array();
    itemArray[0] = new Item(0,"../images/slider-1.jpg","I love you!!!");
    itemArray[1] = new Item(1,"../images/slider-2.jpg","I love you!!!");
    itemArray[2] = new Item(2,"../images/slider-3.jpg","I love you!!!");
    itemArray[3] = new Item(3,"../images/slider-6.jpg","I love you!!!");
}

var HeaderNavCarouselIndicators = () =>{
    return (
        <ol className="carousel-indicators">
            {
                itemArray.map((item)=>{
                    if(item.id==0) {
                        return <li key={item.id} data-target="#headerNavCarousel"
                            data-slide-to="0" className="active"/>;
                    }else{ 
                        return <li key={item.id} data-target="#headerNavCarousel"
                                     data-slide-to={item.id}/>;
                    }
                })
            }
        </ol>
    )
};

var HeaderNavCarouselWrapper = ()=>{
    return(
        <div className="carousel-inner head-slider" role="listbox">
            {
                itemArray.map((item)=>{
                    if(item.id==0) return (
                        <div className="item active" key={item.id}>
                            <img src={item.image}/>
                            <div className="carousel-caption">
                                <h3>{item.text}</h3>
                            </div>
                        </div>
                    );
                    else return(
                        <div className="item" key={item.id}>
                            <img src={item.image}/>
                            <div className="carousel-caption">
                                <h3>{item.text}</h3>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    )  
};

var HeaderNavCarouselLeftControl = ()=>{
    return (
        <a className="left carousel-control" href="#headerNavCarousel" role="button" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left"></span>
            <span className="sr-only">Previous</span>
        </a>
    )
};

var HeaderNavCarouselRightControl = ()=>{
    return (
        <a className="right carousel-control" href="#headerNavCarousel" role="button" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right"></span>
            <span className="sr-only">Next</span>
        </a>
    )
};

var HeaderNavCarousel = ()=>{
    return (
        <div id="headerNavCarousel" className="carousel slide" data-ride="carousel">
            <HeaderNavCarouselIndicators/>
            <HeaderNavCarouselWrapper/>
            <HeaderNavCarouselLeftControl/>
            <HeaderNavCarouselRightControl/>
        </div>
    )
};

var HeaderNavMenu = ()=>{
    return (
        <ul className="menu">
            <li className="current"><a href="index.html" className="clr-1">Home</a></li>
            <li><a href="gallery.html" target="_blank" className="clr-2">Gallery</a></li>
            <li><a href="blog.html" target="_blank" className="clr-3">Blog</a></li>
            <li><a href="contacts.html" target="_blank" className="clr-4">Contacts</a></li>
        </ul>
    )
};
 
var HeaderNav = ()=>{
    return (
        <nav className="slide">
            <HeaderNavCarousel/>
            <HeaderNavMenu/>
        </nav>
    )
};
    
setItemArray();
ReactDOM.render(
    <HeaderNav/>,
    document.getElementById('header')
);

