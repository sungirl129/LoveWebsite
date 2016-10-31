/**
 * Created by zhuangqf on 10/30/16.
 */

var blogInfoArray;
var albumInfoArray;
//后期改为ajax获取服务器资源信息
function BlogInfo(id,src,title,description) {
    this.id = id;
    this.title = title;
    this.src = src;
    this.description = description;
}

function setBlogInfoArray() {
    blogInfoArray = new Array();
    blogInfoArray[0] = new BlogInfo(0,"../blog.html","博客一","博客一内容内容内容");
    blogInfoArray[1] = new BlogInfo(1,"../blog.html","博客二","博客二内容内容内容");
    blogInfoArray[2] = new BlogInfo(2,"../blog.html","博客三","博客三内容内容内容");
    blogInfoArray[3] = new BlogInfo(3,"../blog.html","博客四","博客四内容内容内容");
    blogInfoArray[4] = new BlogInfo(0,"../blog.html","博客五","博客五内容内容内容");
}

function AlbumInfo(id,src,title,titlePage) {
    this.id = id;
    this.src = src;
    this.title = title;
    this.page = titlePage;
}

function setAlbumInfoArray() {
    albumInfoArray = new Array();
    albumInfoArray[0] = new AlbumInfo(0,"../viewalbum.html","相册一","../images/gallery-1.jpg");
    albumInfoArray[1] = new AlbumInfo(1,"../viewalbum.html","相册二","../images/gallery-1.jpg");
    albumInfoArray[2] = new AlbumInfo(2,"../viewalbum.html","相册三","../images/gallery-1.jpg");
    albumInfoArray[3] = new AlbumInfo(3,"../viewalbum.html","相册四","../images/gallery-1.jpg");
}



var ContainerAlbumModuleContent = () =>{
    return (
        <div className="block-1">
            <div className="block-1-shadow">
                <h2 className="clr-5 p4">最新相册</h2>
                <div className="box-1">
                    <a href={albumInfoArray[0].src} target="_blank" 
                       className="img-border">
                        <img src={albumInfoArray[0].page} alt=""/>
                    </a>
                    <p className="text-2">{albumInfoArray[0].title}</p>
                </div>
                <div className="box-1 last">
                    <a href={albumInfoArray[1].src} target="_blank" 
                       className="img-border">
                        <img src={albumInfoArray[1].page} alt=""/>
                    </a>
                    <p className="text-2">{albumInfoArray[1].title}</p>
                </div>
                <div className="clear p5"></div>
                <div className="box-1">
                    <a href={albumInfoArray[2].src} target="_blank"
                       className="img-border">
                        <img src={albumInfoArray[2].page} alt=""/>
                    </a>
                    <p className="text-2">{albumInfoArray[2].title}</p>
                </div>
                <div className="box-1 last">
                    <a href={albumInfoArray[3].src} target="_blank"
                       className="img-border">
                        <img src={albumInfoArray[3].page} alt=""/>
                    </a>
                    <p className="text-2">{albumInfoArray[3].title}</p>
                </div>
                <div className="clear"></div>
                <div className="pad-2">
                </div>
            </div>
        </div>
    )
};

var LoveLetter = () =>{
    return (
        <div className="pad-1">
            <h2 className="p2 text-1">ZQF & CYJ</h2>
            <p className="text-1">No matter the ending is perfect or not, you cannot disappear from my world.<br />Distance makes the hearts grow fonder.<br />Without you,<br />however beautiful the city is,<br />it is just null.</p>
        </div>
    )
};

var ContainerAlbumModule = () => {
    return (
        <div className="grid_2">
            <LoveLetter/>
            <ContainerAlbumModuleContent/>
        </div>
    )
};

var ContainerBlogModule = () => {
    return (
        <div className="grid_1 bot-1">
            <h2 className="top-1 p2">最近博客</h2>
            {
                blogInfoArray.map((blogInfo)=>{
                    return(
                        <div key={blogInfo.id}>
                            <p className="text-1 p3">
                                <a href={blogInfo.src} target="_black">{blogInfo.title}</a>
                            </p>
                            <p>{blogInfo.description}</p>
                        </div>
                    )
                })
            }
        </div>
    )
};

var Container = () => {
    return (
        <div className="container_one">
            <ContainerBlogModule/>
            <ContainerAlbumModule/>
        </div>
    )
};

setBlogInfoArray();
setAlbumInfoArray();

ReactDOM.render(
    <Container/>,
    document.getElementById('content')
);