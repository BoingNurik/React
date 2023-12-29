import c3 from "./profile.module.css"
import MyPost from "./post/Mypost";


const Profile = () => {
  return (
    <div className={c3.content}>
      <div>
        <img src='https://th.bing.com/th/id/OIP.wwxK07x0Umfnh0l-nrjxjgHaDg?rs=1&pid=ImgDetMain' />
      </div>
      <div>ava + description</div>
      <MyPost/>
    </div>
  );
}
export default Profile