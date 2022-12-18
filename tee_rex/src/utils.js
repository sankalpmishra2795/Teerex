import { toast } from "react-toastify";

export const PRODUCT_API_URL = 'https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json'
export const typeArray = [
    {
      heading:'Colors',
      key: 'color',
      typeArr: ['Red', 'Blue', 'Green']
    },
    {
      heading:'Gender',
      key: 'gender',
      typeArr: ['Men', 'Women']
    },
    {
      heading:'Price',
      key: 'price',
      typeArr: ['0 - 250 Rs', '251 - 450 Rs', '451 Rs']
    },
    {
      heading:'Type',
      key: 'type',
      typeArr: ['Polo', 'Hoodie', 'Basic']
    },
  ]

  export  const notify = (msg,type) => {
    toast[type](msg);
  };
