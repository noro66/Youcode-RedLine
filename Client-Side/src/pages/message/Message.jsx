
import './Message.scss'
import {Link} from "react-router-dom";

const Message = (props) => {
return (
    <div className={'message'}>
        <div className="container">
            <span className={'breadcrumbs'}>
                <Link to="/messages" className={'link'}>MESSAGES</Link>  > John Doe  >
            </span>
            <div className="messages">
                <div className="item">
                    <img src="/images/profile.svg" alt=""/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore dolores doloribus enim eos illo illum incidunt ipsum, iste laudantium nisi possimus ratione rem repellat saepe tempore, vero. Tempora, tenetur?</p>
                </div>
                <div className="item owner">
                    <img src="/images/profile.svg" alt=""/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore dolores doloribus enim eos illo illum incidunt ipsum, iste laudantium nisi possimus ratione rem repellat saepe tempore, vero. Tempora, tenetur?</p>
                </div><div className="item">
                    <img src="/images/profile.svg" alt=""/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore dolores doloribus enim eos illo illum incidunt ipsum, iste laudantium nisi possimus ratione rem repellat saepe tempore, vero. Tempora, tenetur?</p>
                </div>
                <div className="item owner">
                    <img src="/images/profile.svg" alt=""/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore dolores doloribus enim eos illo illum incidunt ipsum, iste laudantium nisi possimus ratione rem repellat saepe tempore, vero. Tempora, tenetur?</p>
                </div><div className="item">
                    <img src="/images/profile.svg" alt=""/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore dolores doloribus enim eos illo illum incidunt ipsum, iste laudantium nisi possimus ratione rem repellat saepe tempore, vero. Tempora, tenetur?</p>
                </div>
                <div className="item owner">
                    <img src="/images/profile.svg" alt=""/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore dolores doloribus enim eos illo illum incidunt ipsum, iste laudantium nisi possimus ratione rem repellat saepe tempore, vero. Tempora, tenetur?</p>
                </div><div className="item">
                    <img src="/images/profile.svg" alt=""/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore dolores doloribus enim eos illo illum incidunt ipsum, iste laudantium nisi possimus ratione rem repellat saepe tempore, vero. Tempora, tenetur?</p>
                </div>
                <div className="item owner">
                    <img src="/images/profile.svg" alt=""/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore dolores doloribus enim eos illo illum incidunt ipsum, iste laudantium nisi possimus ratione rem repellat saepe tempore, vero. Tempora, tenetur?</p>
                </div><div className="item">
                    <img src="/images/profile.svg" alt=""/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore dolores doloribus enim eos illo illum incidunt ipsum, iste laudantium nisi possimus ratione rem repellat saepe tempore, vero. Tempora, tenetur?</p>
                </div>
                <div className="item owner">
                    <img src="/images/profile.svg" alt=""/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore dolores doloribus enim eos illo illum incidunt ipsum, iste laudantium nisi possimus ratione rem repellat saepe tempore, vero. Tempora, tenetur?</p>
                </div><div className="item">
                    <img src="/images/profile.svg" alt=""/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore dolores doloribus enim eos illo illum incidunt ipsum, iste laudantium nisi possimus ratione rem repellat saepe tempore, vero. Tempora, tenetur?</p>
                </div>
                <div className="item owner">
                    <img src="/images/profile.svg" alt=""/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore dolores doloribus enim eos illo illum incidunt ipsum, iste laudantium nisi possimus ratione rem repellat saepe tempore, vero. Tempora, tenetur?</p>
                </div><div className="item">
                    <img src="/images/profile.svg" alt=""/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore dolores doloribus enim eos illo illum incidunt ipsum, iste laudantium nisi possimus ratione rem repellat saepe tempore, vero. Tempora, tenetur?</p>
                </div>
                <div className="item owner">
                    <img src="/images/profile.svg" alt=""/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore dolores doloribus enim eos illo illum incidunt ipsum, iste laudantium nisi possimus ratione rem repellat saepe tempore, vero. Tempora, tenetur?</p>
                </div><div className="item">
                    <img src="/images/profile.svg" alt=""/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore dolores doloribus enim eos illo illum incidunt ipsum, iste laudantium nisi possimus ratione rem repellat saepe tempore, vero. Tempora, tenetur?</p>
                </div>
                <div className="item owner">
                    <img src="/images/profile.svg" alt=""/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore dolores doloribus enim eos illo illum incidunt ipsum, iste laudantium nisi possimus ratione rem repellat saepe tempore, vero. Tempora, tenetur?</p>
                </div><div className="item">
                    <img src="/images/profile.svg" alt=""/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore dolores doloribus enim eos illo illum incidunt ipsum, iste laudantium nisi possimus ratione rem repellat saepe tempore, vero. Tempora, tenetur?</p>
                </div>
                <div className="item owner">
                    <img src="/images/profile.svg" alt=""/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore dolores doloribus enim eos illo illum incidunt ipsum, iste laudantium nisi possimus ratione rem repellat saepe tempore, vero. Tempora, tenetur?</p>
                </div>
            </div>
            <hr/>
            <div className="write">
                <textarea name="" placeholder={'Write a message'}  cols="30" rows="10"></textarea>
                <button>Send</button>
            </div>
        </div>
    </div>
)
};

export default Message;