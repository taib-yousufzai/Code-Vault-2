import './styles.css'

function Recent() {
    return (
        <div className='recent'>
            <h1>Recent Updates</h1>
            <ul>
                <li><a href="#">New Algorithm notes Added</a></li>
                <li><a href="#">Daily Code Challenge: Binary Trees</a></li>
                <li><a href="#">Updated Database Course Materials</a></li>
            </ul>
        </div>
    );
}

export default Recent;