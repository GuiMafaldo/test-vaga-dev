import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../store';
import { close, add, remove } from '../../store/reducers/cart';
import { CartItem } from '../../store/reducers/cart';
import { ButtonFinalizar, CardsItems, CloseCart, ContainerCart, CountDiv, RenderValueTotal, SideBar, TitleAndClose } from './styles';
import img from '../../assets/image/Close_cart.svg';
import { Product } from '../../pages/Home';

const CartItems = () => {
    const { isOpen, items } = useSelector((state: RootReducer) => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    }, [isOpen]);

    const handleClose = () => {
        dispatch(close());
    };

    const handleAdd = (item: Product, e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        e.stopPropagation(); // Impede a propagação do evento para o elemento pai
        const carItem: CartItem = {
            ...item,
            quantity: 1
        }
        dispatch(add(carItem));
    };

    const removeCartItem = (id: number, e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        e.stopPropagation()
        const item = items.find((item) => item.id === id);
        if (item && item.quantity > 1) {
            dispatch(remove(item.id)); 
        }
    };
    const handleClearCart = (id: number, e:React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        e.stopPropagation()
        dispatch(remove(id))

    }

    const calculateTotal = () => {
        return items.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    return (
        <>
            <ContainerCart className={isOpen ? 'is-open' : ''} onClick={handleClose}>
                    {isOpen && (
                        <div className="overlay" onClick={handleClose} />
                    )}
                    <SideBar>
                        <TitleAndClose>
                            <h2>Carrinho <br /> de compras</h2>
                            <img className='closeIcon' src={img} alt="" onClick={() => handleClose()} />
                        </TitleAndClose>
                        <ul className='data-test-ul'>
                            {items.map((item: CartItem) => (
                                <li className='data-test-list' key={item.id}>
                                    <CardsItems>
                                        <CloseCart>
                                            <img className='photo-apple' src={item.photo} alt={item.name} />
                                            <CountDiv>
                                                <h4>{item.name}</h4>
                                                <span onClick={(e) => removeCartItem(item.id, e)} className='countAdd'>-</span>
                                                <span className='countAdd'>{item.quantity}</span>
                                                <span onClick={(e) => handleAdd(item, e)} className='countAdd'>+</span>
                                                <span className='priceSpan'>R$ {item.price}</span>
                                            </CountDiv>
                                            <img onClick={(e) => handleClearCart(item.id, e)} className='iconClose' src={img} alt="" />
                                        </CloseCart>
                                    </CardsItems>
                                </li>
                            ))}
                        </ul>
                        <RenderValueTotal>
                            <p>Total:</p>
                            <span>R$ {calculateTotal()}</span> 
                        </RenderValueTotal>
                        <ButtonFinalizar onClick={handleClose}>Finalizar compra</ButtonFinalizar>
                    </SideBar>
            </ContainerCart>
        </>
        
    );
};

export default CartItems;
