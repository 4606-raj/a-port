const ListItemText = {
  styleOverrides: {
    root: {},
    primary: ({ theme }) => ({
      marginTop: theme.spacing(0.15),
      color: theme.palette.text.disabled,
      fontSize: theme.typography.body2.fontSize,
      fontWeight: 700,
    }),
  },
};

export default ListItemText;
