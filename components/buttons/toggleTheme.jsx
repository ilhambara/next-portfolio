import * as React from "react";
import { Icon, IconButton, Tooltip, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function ToggleTheme({ variant }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const ModeIcon = colorMode === "dark" ? SunIcon : MoonIcon;

  return (
    <Tooltip hasArrow label={`${colorMode} mode 🌓`} fontWeight="semibold">
      <IconButton
        aria-label={`Toggle ${colorMode} mode 🌓`}
        icon={<ModeIcon />}
        onClick={toggleColorMode}
        variant={variant ? variant : "outline"}
      />
    </Tooltip>
  );
}
