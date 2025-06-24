import HeaderBar from "@/components/headerBar";

export default function Home() {
  return (
  <div>
    <HeaderBar></HeaderBar>
    
    <div className="title">
      <h1>
          The ABGL Tour
      </h1>
    </div>

    <main className="main"> 
            <div className="about-tour">
                <div className="about">
                    <p> The ABGL tour was created to celebrate the game of golf and the connection of friends and family, this tournament will be played monthly. A venue will be appointed by
                    the founders of the competition - Sir Harry and Sir Jacob. This is an invitational event, we will also play with a handicap. We encourage participation.</p>
                </div>
            </div>
        </main> 
    </div>
  );
}
