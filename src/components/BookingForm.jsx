import { useState } from "react";

function BookingForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
  });

  const [success, setSuccess] = useState(false);

  return (
    <section className="booking">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSuccess(true);
        }}
      >
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            required
            value={formState.name}
            onChange={(e) =>
              setFormState({ ...formState, name: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            required
            value={formState.email}
            onChange={(e) =>
              setFormState({ ...formState, email: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            required
            value={formState.date}
            onChange={(e) =>
              setFormState({ ...formState, date: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="time">Time</label>
          <input
            type="time"
            id="time"
            required
            value={formState.time}
            onChange={(e) =>
              setFormState({ ...formState, time: e.target.value })
            }
          />
        </div>
        <button type="submit">RESERVE TABLE</button>
      </form>
      <div>
        {success && (
          <p
            style={{
              padding: "2rem",
              backgroundColor: "lightgreen",
              borderRadius: "1rem",
            }}
          >
            Successfully Reserved !
          </p>
        )}
      </div>
    </section>
  );
}

export default BookingForm;
