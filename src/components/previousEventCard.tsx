export default function PreviousEventCard({eventTitle, image}: {eventTitle: string, image:string}) {

    return (
      //Creates the rounded box around the card
      <div className="flex rounded-2xl bg-eventCard">

        <div className="p-5">
          {/* Creates the event name field */}
          <p className="text-2xl text-center">{eventTitle}</p>

          {/* Creates the image */}
          <img className="flex rounded-xl aspect-video mt-3" src={image} alt={image}/>
          
          <div className="pt-3">
            {/* Creates the event information */}
            <p className="text-2xl text-center">Location - Date</p>
            <p className="text-l text-center pt-3">Overall Winner - Name</p>
            <p className="text-l text-center">Participants - 43</p>

            {/* Creates the division winners table */}
            <div className="grid grid-cols-4 gap-1 justify-center px-1 pt-3">
              <p className="col-span-full text-l text-center">Divisional Winners</p>
              <p className="col-span-1 text-l text-center">Div 1</p>
              <p className="col-span-1 text-l text-center">Div 2</p>
              <p className="col-span-1 text-l text-center">Div 3</p>
              <p className="col-span-1 text-l text-center">Div 4</p>
              <p className="col-span-1 text-l text-center">Name</p>
              <p className="col-span-1 text-l text-center">Name</p>
              <p className="col-span-1 text-l text-center">Name</p>
              <p className="col-span-1 text-l text-center">Name</p>
            </div>

            {/* Creates the view more button */}
            <div className="flex rounded-2xl w-30 h-10 bg-foreground items-center justify-center justify-self-center mt-3">
              <p className="text-background">View More</p>
            </div>

          </div>
        </div>
      </div>
    )
}