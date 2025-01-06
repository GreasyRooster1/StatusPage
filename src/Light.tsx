
interface LightProps {
    name: string;
}

function Light(props:LightProps) {
    return (
        <div className = "wrapper">
            <span className="light"></span>
            <span className="title">{props.name}</span>
        </div>
    );
}

export default Light;