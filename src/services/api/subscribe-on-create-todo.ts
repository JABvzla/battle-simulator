import Amplify, { API } from "aws-amplify";
import { config } from "./graphql.config";

Amplify.configure(config);

export const subcribeTodo = async () => {
  console.log("subscription called");

  const subscription = await API.graphql({
    query: `
        subscription MySubscription {
          onCreateMyModelType {
            title
            id
            checked
          }
        }
      `
  })?.subscribe({
    next: ({ provider, value }) => {
      console.log("event disptached");
      console.log({ provider, value });
    }
  });

  return subscription?.unsubscribe;
};
