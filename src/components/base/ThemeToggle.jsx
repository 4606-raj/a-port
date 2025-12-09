import { Box } from "@mui/material";
import { Icon } from "@iconify/react";
import { useThemeMode } from "../../theme/AppThemeProvider";

const ThemeToggle = () => {
  const { mode, toggle } = useThemeMode();

  return (
    <Box
      onClick={toggle}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        cursor: "pointer",
        padding: "6px 10px",
        borderRadius: "8px",
        transition: "0.2s",
        ":hover": {
          backgroundColor: "action.hover",
        },
      }}
    >
      <Icon
        icon={mode === "dark" ? "solar:sun-bold" : "solar:moon-bold"}
        width="22"
        height="22"
      />
    </Box>
  );
};

export default ThemeToggle;
