
import '../styles/SubmitButton.css'



function SubmitButton() {

    onclick = () => {
        event.preventDefault();
    }
    return (
        <button type="submit">Submit</button>
    )
}

export default SubmitButton