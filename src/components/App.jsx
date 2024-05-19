import OfficerList from "./OfficerList";
import data from "../officers.json";

export default function App() {
  //   const titleText = "React is Amazing!";
  //   const linkHref = "goit.global";

  // const firstOfficer = {
  //   id: 1,
  //   name: "Jacob Mercer",
  //   rank: "Commander",
  //   age: 42,
  //   yearsOfService: 10,
  //   specialization: "Fighter Pilot",
  //   awards: ["Starfleet Medal of Honor", "Distinguished Service Cross"],
  //   skills: ["Combat Maneuvers", "Navigation", "Strategic Planning"],
  //   status: "Active",
  //   missionHistory: [
  //     "Operation Red Comet - Battle of Orion Nebula",
  //     "Operation Blackout - Stealth Reconnaissance",
  //     "Operation Phoenix - Search and Rescue",
  //   ],
  // };

  // const secondOfficer = {
  //   id: 2,
  //   name: "Adrian Cross",
  //   rank: "Lieutenant",
  //   age: 35,
  //   yearsOfService: 7,
  //   specialization: "Reconnaissance",
  //   awards: ["Silver Star", "Meritorious Service Medal"],
  //   skills: ["Stealth Operations", "Surveillance", "Data Analysis"],
  //   status: "Retired",
  //   missionHistory: [
  //     "Operation Deep Space - Exploration Mission",
  //     "Operation Shadowfall - Covert Surveillance",
  //     "Operation Stardust - Intelligence Gathering",
  //   ],
  // };

  //   const isModalOpen = false;

  return (
    <>
      <h1>Available Officers</h1>
      <OfficerList officers={data} />

      {/* {isModalOpen && <p>Is Open</p>} */}
      {/* {isModalOpen ? <p>Is Open</p> : <p>Is Closed</p>} */}

      {/* <h1>Officers</h1> */}

      {/* <OfficerProfile officer={firstOfficer} />
      <OfficerProfile officer={secondOfficer} /> */}

      {/* <h1>{titleText}</h1>
      <a href={linkHref}>GoIt</a>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
        perferendis, obcaecati enim omnis quidem voluptas est vel odio unde
        expedita quos nam pariatur blanditiis, sed quo repellat amet possimus
        facilis!
      </p>
      <button>Click</button>
      <img src="" alt="" />
      <input type="text" /> */}
    </>
  );
}

// null, false, undefined - not will render
