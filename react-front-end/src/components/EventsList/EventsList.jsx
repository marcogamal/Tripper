import React, { useEffect } from "react";
import Axios from "axios";

export default function EventsList() {
  let events = [];
  let showEvents = [];

  useEffect(() => {
    Axios.get("/api/users/plans/1").then((res) => {
      console.log(res.data.event);
      events = res.data.event;
      showEvents = events.map((event) => <li>{event.title}</li>);
    });
  });

  return (
    <div>
      <ol>{showEvents}</ol>
    </div>
  );
}
