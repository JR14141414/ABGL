export default function HeaderBar() {
    return (
    <header>
        <div className="flex justify-center">
            <a href="/"><img src="/ABGL logo.png" alt="ABGL logo"/></a>
        </div>
        <nav>
            <a href="/upcomingEvents">Upcoming Events</a>
            <a href="/pastEvents">Past Events</a>
            <a href="/rules">How it Works</a>
            <a href="/about">About Us</a>
        </nav>
    </header>
    );
}