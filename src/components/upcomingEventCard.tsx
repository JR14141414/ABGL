export default function UpcomingEventCard({eventTitle, image}: {eventTitle: string, image:string}) {

    return (
        <div className="flex rounded-2xl bg-eventCard">
            <div className="p-5">
                <p>{eventTitle}</p>
                <p>Description of the next event goes here.</p>
            </div>
        </div>
    )
}