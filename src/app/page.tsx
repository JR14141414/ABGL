import Image from "next/image";

export default function Home() {
  return (
  <div>
    <header>
        <img src="images/ABGL logo.png" alt="ABGL logo"/>
        <nav>
            <a href="PastTour.html">Past Tournaments</a>
            <a href="Leaderboard.html">Leaderboard</a>
            <a href="NextTour.html">Next Tournament</a>
        </nav>
    </header>

    <h1>
        The ABGL Tour
    </h1>

    <main>
                <p> The ABGL tour was created to celebrate the gmae of Golf and the connection of friends and family, this tournament will be played monthly. A venue will be appointed by
                    the founders of the competition - Sir Harry and Sir Jacob. This is an invitational event, we will also play with a handicap. We encourage participation.
                </p>
    </main>
    </div>
  );
}
