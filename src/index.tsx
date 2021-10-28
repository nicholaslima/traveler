import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { cities } from "./config/citiesData";
import { createServer, Model } from "miragejs";

createServer({
  models: {
    cities: Model,
  },
  seeds(server) {
    server.db.loadData({
      cities,
    });
  },
  routes() {
    this.namespace = "api";

    this.get("/cities", () => {
      return this.schema.all("cities");
    });

    this.get("/cities/:name", (schema, request) => {
      const { name } = request.params;
      return this.db.cities.filter((city) => city.name.startsWith(name));
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
