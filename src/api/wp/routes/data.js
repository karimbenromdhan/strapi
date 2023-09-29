module.exports = {
  routes: [
    {
      method: "POST",
      path: "/wps/getbd",
      handler: "data.postdb",
      "config": {
        "policies": []
      }
    },
  ],
};
