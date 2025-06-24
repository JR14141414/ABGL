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
            <img src="/ABGL logo.png" alt="Past Event 1" className="event-image" />
          </div>
          <div className="event-card">
            <p>Past Event 2:</p>
            <img src="/ABGL logo.png" alt="Past Event 2" className="event-image" />
          </div>
          <div className="event-card">
            <p>Past Event 3:</p>
            <img src="/ABGL logo.png" alt="Past Event 3" className="event-image" />
          </div>
        </div>
      </div>
      <FooterBar></FooterBar>
    </div>
  );
}
