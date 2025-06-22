const ListItemButton = {
  styleOverrides: {
    root: ({ theme }) => ({
      padding: theme.spacing(0.875, 2),
      borderRadius: theme.shape.borderRadius * 2.5,
      '&:hover': { backgroundColor: theme.palette.info.main },
    }),
  },
};

export default ListItemButton;
