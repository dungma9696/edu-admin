import React from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Avatar,
  Badge,
  Menu,
  MenuItem,
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Dashboard,
  People,
  ShoppingCart,
  BarChart,
  Settings,
  Notifications,
  AccountCircle,
  Logout,
  ChevronLeft,
  ChevronRight,
  Inbox,
  Mail,
  MoreVert,
} from "@mui/icons-material";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppState } from "@/stores";

interface NavigationItem {
  text: string;
  icon: React.ReactElement;
  path: string;
}

const navigationItems: NavigationItem[] = [
  { text: "Dashboard", icon: <Dashboard />, path: "/dashboard" },
  { text: "Users", icon: <People />, path: "/users" },
  { text: "Products", icon: <ShoppingCart />, path: "/products" },
  { text: "Analytics", icon: <BarChart />, path: "/analytics" },
  { text: "Messages", icon: <Mail />, path: "/messages" },
  { text: "Inbox", icon: <Inbox />, path: "/inbox" },
  { text: "Settings", icon: <Settings />, path: "/settings" },
];

export default function AdminLayout() {
  const { profile } = useSelector((state: AppState) => state.profile);

  const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedItem, setSelectedItem] = React.useState("Dashboard");

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const drawerWidth = sidebarCollapsed ? 64 : 240;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNavigationClick = (text: string) => {
    setSelectedItem(text);
    if (isMobile) {
      setMobileOpen(false);
    }
  };

  const handleSidebarToggle = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const drawer = (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {/* Header */}
      <Toolbar>
        {!sidebarCollapsed && (
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Admin Panel
          </Typography>
        )}
        <IconButton onClick={handleSidebarToggle}>
          {sidebarCollapsed ? <ChevronRight /> : <ChevronLeft />}
        </IconButton>
      </Toolbar>
      <Divider />

      <List sx={{ flexGrow: 1 }}>
        {navigationItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              selected={selectedItem === item.text}
              onClick={() => handleNavigationClick(item.text)}
              sx={{
                minHeight: 48,
                justifyContent: sidebarCollapsed ? "center" : "initial",
                px: 2.5,
                "&.Mui-selected": {
                  backgroundColor: theme.palette.primary.main + "20",
                  "&:hover": {
                    backgroundColor: theme.palette.primary.main + "30",
                  },
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: sidebarCollapsed ? "auto" : 3,
                  justifyContent: "center",
                  color:
                    selectedItem === item.text
                      ? theme.palette.primary.main
                      : "inherit",
                }}
              >
                {item.icon}
              </ListItemIcon>
              {!sidebarCollapsed && (
                <ListItemText
                  primary={item.text}
                  sx={{
                    opacity: sidebarCollapsed ? 0 : 1,
                    "& .MuiListItemText-primary": {
                      color:
                        selectedItem === item.text
                          ? theme.palette.primary.main
                          : "inherit",
                      fontWeight: selectedItem === item.text ? 600 : 400,
                    },
                  }}
                />
              )}
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      {/* User Menu at Bottom */}
      <Divider />
      <Box sx={{ p: sidebarCollapsed ? 1 : 2 }}>
        <ListItemButton
          onClick={handleProfileMenuOpen}
          sx={{
            minHeight: 48,
            justifyContent: sidebarCollapsed ? "center" : "initial",
            px: sidebarCollapsed ? 0 : 2,
            borderRadius: 1,
            "&:hover": {
              backgroundColor: theme.palette.action.hover,
            },
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: sidebarCollapsed ? "auto" : 2,
              justifyContent: "center",
            }}
          >
            <Avatar sx={{ width: 32, height: 32 }}>
              <AccountCircle />
            </Avatar>
          </ListItemIcon>
          {!sidebarCollapsed && (
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="subtitle2" noWrap>
                {profile?.email}
              </Typography>
              <Typography variant="caption" color="text.secondary" noWrap>
                Administrator
              </Typography>
            </Box>
          )}
          {!sidebarCollapsed && (
            <IconButton size="small">
              <MoreVert />
            </IconButton>
          )}
        </ListItemButton>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* App Bar */}
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
          transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            {selectedItem}
          </Typography>

          {/* Notifications */}
          <IconButton size="large" color="inherit">
            <Badge badgeContent={4} color="error">
              <Notifications />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Profile Menu */}
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={handleProfileMenuClose}
      >
        <MenuItem onClick={handleProfileMenuClose}>
          <Avatar sx={{ width: 24, height: 24, mr: 2 }} />
          Profile
        </MenuItem>
        <MenuItem onClick={handleProfileMenuClose}>
          <Settings sx={{ width: 24, height: 24, mr: 2 }} />
          Settings
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleProfileMenuClose}>
          <Logout sx={{ width: 24, height: 24, mr: 2 }} />
          Logout
        </MenuItem>
      </Menu>

      {/* Navigation Drawer */}
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
      >
        {/* Mobile drawer */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>

        {/* Desktop drawer */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              transition: theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
              }),
              overflowX: "hidden",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { md: `calc(100% - ${drawerWidth}px)` },
          transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
