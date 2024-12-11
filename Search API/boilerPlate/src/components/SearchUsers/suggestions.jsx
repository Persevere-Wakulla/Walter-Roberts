


export default function Suggestions({ data, handleClick }) {
    return (
        <ul>
            {data && data.length
            ? data.map((post, index) => (
            <li onClick={handleClick} key={index}>
                {post}
            </li>
            ))
            : null}
        </ul>
    );
}