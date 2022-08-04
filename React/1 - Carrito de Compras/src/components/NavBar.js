import { Component } from "react";
import Logo from "./Logo";
import Carro from './Carro';

const styles = {
    navbar: {
        display: 'flex',
        flexDIrection: 'row',
        alignItems: 'center',
        height: '100px',
        justifyContent: 'space-between',
        position: 'relative',
        padding: '0 50px',
        boxShadow: '0 2px 3px rgba(0,0,0,0.1)',
    }
}
class NavBar extends Component {
    render() {
        const { carro, esCarroVisible, mostrarCarro } = this.props;
        return(
            <nav style={styles.navbar}>
                <Logo></Logo>
                <Carro carro={carro}
                       esCarroVisible={esCarroVisible}
                       mostrarCarro={mostrarCarro}
                />
            </nav>
        );
    }
}
export default NavBar;