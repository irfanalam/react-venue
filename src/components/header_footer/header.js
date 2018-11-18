import React, { Component } from 'react';
//material-ui imports
import Appbar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import SideDrawer from './sideDrawer';

class header extends Component {
    state = {
        drawerOpen : false, 
        headerShow: false,
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
        console.log('headerShow:', this.state.headerShow)
    }

    handleScroll = () => {
        console.log('user Scrolling')
        if(window.scrollY > 0){
            this.setState({
                headerShow: true,
            })
        } else {
            this.setState({
                headerShow: false,
            })
        }
    }

    toggleDrawer = (value) => {
        this.setState({
            drawerOpen: value,
        })
    }

    render() {
        return (
            <Appbar 
                position="fixed"
                style={{
                    backgroundColor: this.state.headerShow ? '#2f2f2f' : 'transparent',
                    boxShadow: 'none',
                    padding: "10px 0",
                }}
            >
                <Toolbar>
                    <div className="header_logo">
                        <div className="font_righteous header_logo_venue">The Venue</div>
                        <div className="header_logo_title"> Musical Events </div>
                    </div>
                    <IconButton
                        aria-label="Menu"
                        color="inherit"
                        onClick={()=> this.toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <SideDrawer
                        open={this.state.drawerOpen}
                        onClose={(value) => this.toggleDrawer(value) }
                    />
                </Toolbar> 
            </Appbar>
        );
    }
}

export default header;