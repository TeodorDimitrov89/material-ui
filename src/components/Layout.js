import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { makeStyles, Typography } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import SubjectIcon from '@material-ui/icons/Subject';
import AppBar from '@material-ui/core/AppBar';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { useTheme } from '@material-ui/core/styles';

const drawerWidth = 290;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  page: {
    background: '#f9f9f9',
    width: '100%',
    // marginTop: theme.spacing(7),
    // padding: theme.spacing(4),
  },
  active: {
    background: '#f4f4f4',
  },
  title: {
    padding: theme.spacing(3),
  },
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    boxShadow: 'none',
    background: '#f9f9f9',
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const menuItem = [
  {
    text: 'My Notes',
    icon: <SubjectIcon color='primary' />,
    path: '/',
  },
  {
    text: 'Create Notes',
    icon: <AddCircleOutlineIcon color='primary' />,
    path: '/create',
  },
];

export default function Layout({ children, window }) {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const container = window !== undefined ? () => window().document.body : undefined;
  const history = useHistory();
  const location = useLocation();

  const drawer = (
    <div>
      <List>
        {menuItem.map((item) => {
          return (
            <ListItem
              button
              key={item.text}
              onClick={() => history.push(item.path)}
              className={item.path === location.pathname ? classes.active : null}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          );
        })}
      </List>
    </div>
  );

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <div className={classes.root}>
      <nav className={classes.drawer} aria-label='mailbox folders'>
        {/* <Hidden mdUp implementation='css'>
          <Drawer
            container={container}
            variant='temporary'
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <div className={classes.title}>Ninja Notes</div>
            {drawer}
          </Drawer>
        </Hidden> */}
        <Hidden smDown implementation='css'>
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant='permanent'
            open
          >
            <Typography coponent='h2' variant='h4' className={classes.title}>
              Ninja Notes
            </Typography>
            {drawer}
          </Drawer>
        </Hidden>
      </nav>

      <div className={classes.page}>{children}</div>
    </div>
  );
}
