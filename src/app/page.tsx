import HeaderBar from "@/components/headerBar";
import FooterBar from "@/components/footerBar";

export default function Home() {
  return (
  <div>
    <HeaderBar></HeaderBar>

      <div className="flex justify-center">
        <div className="next-event">
          <h2>Next Event</h2>
          <p>Description of the next event goes here.</p>
        </div>
      </div>
      
      <div className="flex justify-center">
        <div className="past-events">
          <div className="event-card">
            <p>Past Event 1:</p>
            <img src="/test_image_1.jpg" alt="Past Event 1" className="event-image" />
              <div>
                <p> Quick description of the round goes here, including the date, course name, total number of players and the overall winner.</p>
                <p>Div 1. Winner: blah blah</p>
                <p>Div 2. Winner: blah blah</p>
                <p>Div 3. Winner: blah blah</p>
                <p>Div 4. Winner: blah blah</p>
              </div>
          </div>
          <div className="event-card">
            <p>Past Event 2:</p>
            <img src="/test_image_2.jpg" alt="Past Event 2" className="event-image" />
              <div>
                <p> Quick description of the round goes here, including the date, course name, total number of players and the overall winner.</p>
                <p>Div 1. Winner: blah blah</p>
                <p>Div 2. Winner: blah blah</p>
                <p>Div 3. Winner: blah blah</p>
                <p>Div 4. Winner: blah blah</p>
              </div>
          </div>
            
          <div className="event-card">
            <p>Past Event 3:</p>
            <img src="/test_image_3.jpg" alt="Past Event 3" className="event-image" />
              <div>
                <p> Quick description of the round goes here, including the date, course name, total number of players and the overall winner.</p>
                <p>Div 1. Winner: blah blah</p>
                <p>Div 2. Winner: blah blah</p>
                <p>Div 3. Winner: blah blah</p>
                <p>Div 4. Winner: blah blah</p>
              </div>
          </div>
        </div>
      </div>
      <FooterBar></FooterBar>
    </div>
  );
}
