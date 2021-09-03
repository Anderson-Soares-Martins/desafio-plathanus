import * as React from 'react';
import { BottomNavigation, BottomNavigationAction, Paper } from '@material-ui/core';
import { Home, PostAdd } from '@material-ui/icons';
import Link from 'next/link'

function Menu() {
    return (
        <React.Fragment>
            <style>
                {`
                    .navBar{
                        background-color: rgb(45, 2, 74);
                    }
                    .icons{
                        color: white;
                    }
                `}
            </style>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, top: 0 }} elevation={3}>
                <BottomNavigation className="navBar" showLabels>
                    <Link href='/'>
                        <BottomNavigationAction label="Posts" icon={<Home className="icons" />} />
                    </Link>
                    <Link href='/new'>
                        <BottomNavigationAction label="PostAdd" icon={<PostAdd className="icons" />} />
                    </Link>
                </BottomNavigation>
            </Paper>
        </React.Fragment>
    );
}

export default Menu
