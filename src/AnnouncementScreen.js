const AnnouncementScreen = ( {announcements} ) => {
    return(
        <div className='announcements'>
            <h1>Announcements:</h1>
            {announcements.map((announcements) => (
                <div>
                    <h2>{announcements.date}</h2>
                    <h3>{announcements.body}</h3>
                </div>
             ))
            }
        </div>
    );
}

export default AnnouncementScreen;