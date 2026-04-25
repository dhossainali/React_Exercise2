import './Welcome.css'
export function Welcome({name}) {
    return (
        <div className="wellcome">
            <p> Welcome, {name}!</p>
        </div>
    )
}