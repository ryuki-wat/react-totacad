import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

class MenuContrainer extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu>
                <Menu.Item header>WattShop</Menu.Item>
                <Menu.Item
                    name='Home'
                    active={activeItem === 'Home'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='ARTIST'
                    active={activeItem === 'ARTIST'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='ALL PRODUCTS'
                    active={activeItem === 'ALL PRODUCTS'}
                    onClick={this.handleItemClick}
                />
            </Menu>
        )
    }
}

export default MenuContrainer