import Amplify, { API } from "aws-amplify";
import { config } from "./graphql.config";

Amplify.configure(config);

export const getTodos = async () => {
  const todoList = await API.graphql({
    query: `
      query listMyModelTypes {
        listMyModelTypes {
          items {
            id
            title
            checked
          }
        }
      }
  `
  });

  return todoList?.data?.listMyModelTypes?.items || [];
};
