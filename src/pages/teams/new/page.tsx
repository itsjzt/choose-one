import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";

export function TeamNew() {
  const navigate = useNavigate();

  function handleSubmit(values: any) {
    // FIXME: use indexDB
    localStorage.setItem("team", JSON.stringify(values));
    // navigate to choose screen
    navigate("/teams/123/random");
  }

  return (
    <div>
      <Formik onSubmit={handleSubmit} initialValues={{ name: "", players: [] }}>
        {({ values, setFieldValue }) => {
          return (
            <Form>
              <h2>Create a new team</h2>

              <div className="">
                <label>
                  <span>Name of team: </span>
                  <Field required name="name" />
                </label>
              </div>

              {values.players.map((_, index) => (
                <div>
                  <label>
                    <span>Player {index}'s Name: </span>
                    <Field required name={`players.${index}`} />
                    <button
                      type="button"
                      onClick={() => {
                        const remainingPlayers = values.players.filter(
                          (p, i) => i !== index
                        );

                        setFieldValue("players", remainingPlayers);
                      }}
                    >
                      - Remove
                    </button>
                  </label>
                </div>
              ))}

              <button
                onClick={() => {
                  setFieldValue("players", [...values.players, ""]);
                }}
                type="button"
              >
                + Add Player
              </button>

              <div>
                <button type="submit">Create Team</button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
