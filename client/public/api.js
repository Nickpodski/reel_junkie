const API = {
    async getAmountWatched() {
      let res;
      try {
        res = await fetch("/api/badge/amountwatched");
      } catch (err) {
        console.log(err)
      }
      const json = await res.json();
  
      return json[json.length - 1];
    },
    // async addMovie(data) {
    //   const id = location.search.split("=")[1];
  
    //   const res = await fetch("/api/badge/amountwatched/" + id, {
    //     method: "PUT",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(data)
    //   });
  
    //   const json = await res.json();
  
    //   return json;
    // },
    // async createWorkout(data = {}) {
    //   const res = await fetch("/api/workouts", {
    //     method: "POST",
    //     body: JSON.stringify(data),
    //     headers: { "Content-Type": "application/json" }
    //   });
  
    //   const json = await res.json();
  
    //   return json;
    // },
  
    // async getWorkoutsInRange() {
    //   const res = await fetch(`/api/workouts/range`);
    //   const json = await res.json();
  
    //   return json;
    // },
  };
  