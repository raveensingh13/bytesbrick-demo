import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import HomeUI from './HomeUI';

const HomeComponent = () => {
  const brands = [
    {
      id: 1,
      name: 'acana',
      checked: false
    },
    {
      id: 2,
      name: 'dibaq',
      checked: false
    },
    {
      id: 3,
      name: 'reew',
      checked: false
    },
    {
      id: 4,
      name: 'ada',
      checked: false
    },
    {
      id: 5,
      name: 'sjdsi',
      checked: false
    },
    {
      id: 6,
      name: 'skdpoaap',
      checked: false
    },
  ];

  const products = [
    {
      id: 1,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzgM7SCcPgToGKL0yI3ZYAs6PcB-N97Mw3oA&usqp=CAU',
      name: 'Product 1',
      favourite: false,
      price: 123,
    },
    {
      id: 2,
      image: 'https://cdn.shopify.com/s/files/1/0272/4714/9155/products/healthy-pet-food-adult_800x.jpg?v=1622095363',
      name: 'Product 2',
      favourite: false,
      price: 43,
    },
    {
      id: 3,
      image: 'https://www.bigbasket.com/media/uploads/p/l/30005118_16-pedigree-wet-dog-food-chicken-liver-chunks-in-gravy-for-adult-dogs.jpg',
      name: 'Product 3',
      favourite: false,
      price: 123,
    },
    {
      id: 4,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzgM7SCcPgToGKL0yI3ZYAs6PcB-N97Mw3oA&usqp=CAU',
      name: 'Product 4',
      favourite: false,
      price: 123,
    },
    {
      id: 5,
      image: 'https://cdn.shopify.com/s/files/1/0272/4714/9155/products/healthy-pet-food-adult_800x.jpg?v=1622095363',
      name: 'Product 5',
      favourite: false,
      price: 5434,
    },
    {
      id: 6,
      image: 'https://www.bigbasket.com/media/uploads/p/l/30005118_16-pedigree-wet-dog-food-chicken-liver-chunks-in-gravy-for-adult-dogs.jpg',
      name: 'Product 6',
      favourite: false,
      price: 5434,
    },
  ];

  const [brandsList, setBrandsList] = useState([]);
  const [productsList, setProductsList] = useState(products);
  const router = useRouter();




  const handleChange = (id) => {
    const list = brandsList;
    const brandIndex = list.findIndex(element => element.id === id);
    if (Object.keys(router.query).length === 0) {
      router.push({
        query: {
          brands: list[brandIndex].name
        },
      })
    }
    if (Object.keys(router.query).length > 0 && !list[brandIndex].checked) {
      router.push({
        query: {
          brands: `${router.query.brands},${list[brandIndex].name}`
        },
      })
    }
    if (Object.keys(router.query).length > 0 && list[brandIndex].checked) {
      const data = router.query.brands.split(',');
      console.log(data, list[brandIndex], data.findIndex(element => element === list[brandIndex].name));
      data.splice(data.findIndex(element => element === list[brandIndex].name), 1);
      if (data.length >= 1) {
        router.push({
          query: {
            brands: data.join(',')
          },
        });
      }
      if (data.length === 0) {
        router.push({
          pathname: '/'
        });
      }
    }
    list.splice(brandIndex, 1, { ...list[brandIndex], checked: !list[brandIndex].checked });
    setBrandsList([...brandsList]);
  }

  useEffect(() => {
    const { query } = router;
    const data = query?.brands?.split(',') || [];
    if (!brandsList.length) {
      const list = [...brands];
      const newList = [];
      if (data?.length > 0) {
        brands.forEach(element => {
          if (data.includes(element.name)) {
            newList.push({ ...element, checked: true });
            list.splice(list.findIndex(item => item === element.name), 1);
          } else {
            newList.push(element);
          }
        });
      }
      setBrandsList([...newList]);
    }
    if (data?.length === 0) {
      setBrandsList([...brands]);
    }
  });



  return (
    <HomeUI
      brandsList={brandsList}
      productsList={productsList}
      handleChange={handleChange}
    />
  );
};

export default HomeComponent;
