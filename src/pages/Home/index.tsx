import axios from 'axios';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { ContainerGeral, ContainerItems, ListGroupProducts, TitleAndPrice, ButtonClickHere, FooterPage } from './styles';
import Header from '../../components/Header';
import { CartItem, add, open } from '../../store/reducers/cart';
import bagCar from '../../assets/image/shopping-bag.svg';



export interface Product {
    id: number;
    name: string;
    price: number;
    photo: string;
    description?: string;
}

const fetchProducts = async () => {
    try {
        const response = await axios.get('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=ASC');
        return response.data.products as Product[];
    } catch (error) {
        console.error('Erro ao buscar produtos:', error);
        return [];
    }
};

const HomePage = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const productsData = await fetchProducts();
            setProducts(productsData);
        };

        fetchData();
    }, []);

    const dispatch = useDispatch();
    
    const addToCart = (product: Product) => {
        const item: CartItem = { ...product, quantity: 1 }; // Convertendo Product em CartItem
        dispatch(add(item));
        dispatch(open());
    };

    return (
        <>
            <ContainerGeral>
                <Header />
                <ContainerItems>
                    <ListGroupProducts>
                        {products.map(product => (
                            <motion.li 
                                key={product.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <li key={product.id}>
                                    <img src={product.photo} alt={product.name} />
                                    <TitleAndPrice>
                                        <h3>{product.name}</h3>
                                        <span>R$ {product.price}</span>
                                    </TitleAndPrice>
                                    <p>{product.description}</p>
                                    <ButtonClickHere id='data-test-id' onClick={() => addToCart(product)}>
                                        <img src={bagCar} alt="Comprar" />
                                        Comprar
                                    </ButtonClickHere>
                                </li>
                            </motion.li>
                        ))}
                    </ListGroupProducts>
                </ContainerItems>
            </ContainerGeral>
            <FooterPage>
                <p>MKS sistemas &copy; Todos os direitos  reservados</p>
            </FooterPage>
        </>
    );
};

export default HomePage;
