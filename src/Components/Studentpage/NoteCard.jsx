
function NoteCard({ note }) {
    return (
        <div className="note-card">
            <img src={note.logoUrl} alt="Note Logo" className="note-logo" />
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <button>Download</button>
        </div>
    );
}

export default NoteCard;