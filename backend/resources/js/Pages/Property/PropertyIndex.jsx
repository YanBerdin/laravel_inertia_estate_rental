export default function PropertyIndex({ properties }) {
    return (
        <div>
            {properties.map((p) => (
                <li>{p.title}</li>
            ))}
        </div>
    );
}
