import './styles.css'
import NoteCard from './NoteCard';
import Navbar from '../Navbar';
function Student(){
    return (
        <div>
            <Navbar />
            <div className="Search-section">
                <h1>Student Protal</h1>
                <input type="text" placeholder="Search Resources" />
                <select>
                    <option value="All">All Subjects</option>
                    <option value="Algo">Algorithms</option>
                    <option value="DS">Data Structures</option>
                    <option value="Database">Databases</option>
                    <option value="Network">Networking</option>
                </select>
            </div>
            <div className="note-list">
                <NoteCard note={{ logourl: '#', title: 'Note 1', content: 'This is the first note.' }} />
                <NoteCard note={{ logourl: '#', title: 'Note 2', content: 'This is the second note.' }} />
                <NoteCard note={{ logourl: '#', title: 'Note 3', content: 'This is the third note.' }} />
            </div>
        </div>
    );
}

export default Student;