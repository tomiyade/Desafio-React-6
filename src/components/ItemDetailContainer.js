import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { getItem, getProducts } from "../Api"

const ItemDetailContainer = ({ item }) => {
    const [product, setProduct] = useState({});
    useEffect(() => {

        getItem().then((product) => {
            setProduct(product)
        });
    }, [])


    return (
        <ItemDetail item={product} />
    )
}

export default ItemDetailContainer