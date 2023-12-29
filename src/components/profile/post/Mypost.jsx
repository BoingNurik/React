import pClass from "./posts.module.css"
import Post from "./post/post"
const MyPost = () => {

    return (
        <div>
            My posts
            <div>
                <textarea cols="30" rows="2"></textarea>
                <button>add post</button>
            </div>
            <Post message="Hello" />
            <Post message="World" />
            <Post message="I Learning react" />
        </div>
    )
}
export default MyPost