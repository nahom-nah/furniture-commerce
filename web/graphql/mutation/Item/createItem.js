import { gql } from "@apollo/client";
const CREATE_ITEM = gql`
  mutation CreateItemMutation($createItemInput: itemInput) {
    createItem(input: $createItemInput) {
      name
      description
      price
      quantity
      image {
        url
      }
      status
    }
  }
`;

export { CREATE_ITEM };
