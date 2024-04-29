import { Container, FirstDivHeader, PageHeader, SecondaryDivHeader, TitlePage } from "./styles"
import CartImage from '../../assets/image/Vector.svg'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from "react-redux"
import { RootReducer } from "../../store"

const Header = () => {
    const dispatch = useDispatch()
    const { items } = useSelector((state: RootReducer) => state.cart)

    const openCart = () => {
        dispatch(open())
    }
    return(
        <Container>
            <PageHeader>
                <FirstDivHeader>
                    <TitlePage>MKS</TitlePage>
                    <p>Sistemas</p>
                </FirstDivHeader>
                <SecondaryDivHeader>
                    <a onClick={openCart}>
                        <img src={CartImage} alt="CartImage" /> {items.length}
                    </a>
                </SecondaryDivHeader>
            </PageHeader>
        </Container>
    )
}

export default Header