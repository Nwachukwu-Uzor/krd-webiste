import client from "@sanity/client";

export default client({
  projectId: "waetjrnj",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-19",
});
