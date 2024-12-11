export default function Text({ content }) {
    return (
        <div>
            <p className="paragraph">{content.content}</p>
            <p className="sourceLink">Source: <a href={content.source}>wikipedia</a></p>
        </div>
    )
}