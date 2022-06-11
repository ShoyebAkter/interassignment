import React from 'react';
import { useQuery, gql } from "@apollo/client";

const PRODUCTS_QUERY = gql`
query{
    categories{
      name,
      products{
        name,
        gallery,
        prices{
          amount
        }
      }
    }
  }
`;
const Shop = () => {
    const { data, loading, error } = useQuery(PRODUCTS_QUERY);

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>
  console.log(data)

    return (
        <div>
            
        </div>
    );
};

export default Shop;