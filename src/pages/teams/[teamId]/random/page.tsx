import { getRandomInRange } from "../../../../lib/getRandomInRange";

export function TeamRandom() {
  const team = JSON.parse(localStorage.getItem("team") as string);
  const selectedIndex = getRandomInRange(team.players.length);

  return (
    <div>
      <div>
        <strong>Name</strong>: {team.name}
      </div>

      <div>
        <strong>Players</strong>

        <div>
          {team.players.map((p: string, index: number) => {
            return (
              <div
                style={{
                  borderColor:
                    selectedIndex === index ? "green" : "transparent",
                  borderWidth: 2,
                  borderStyle: "solid",
                }}
                key={index}
              >
                {p}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
