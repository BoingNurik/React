import d from "./dialogs.module.css"


const Dialogs = () =>{
    return (
        <div className={d.dialogs}>
            <div className={d.dialogItems}>
                <div className="dialog">Davron</div>
                <div className="dialog">Sardor</div>
                <div className="dialog">Sanjar</div>
                <div className="dialog">Yulia</div>
                <div className="dialog">Vika</div>
                <div className="dialog">Maria</div>
            </div>
            <div className="messages">
                <div className="message">Hi</div>
                <div className="message">How are you?</div>
                <div className="message">What's up?</div>
            </div>
        </div>
    )
}

export default Dialogs;