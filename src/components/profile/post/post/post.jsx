import pClass from "./post.module.css"

const Post = (props) => {
    return (
        <div className={pClass.item}>
            <img src="https://images-cdn.9gag.com/photo/aZxDem3_700b.jpg" />
            {props.message}
            <div>
                <span>like</span>
            </div>
        </div>
    )
}
export default Post