import client from "@sanity/client";

export default client({
  projectId: "p5rt0hai",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-19",
});
