// @mui
import { enUS, frFR } from "@mui/material/locale";

// LAYOUT
// ----------------------------------------------------------------------

export const HEADER = {
  MOBILE_HEIGHT: 64,
  MAIN_DESKTOP_HEIGHT: 88,
  DASHBOARD_DESKTOP_HEIGHT: 92,
  DASHBOARD_DESKTOP_OFFSET_HEIGHT: 92 - 32,
};

export const allLangs = [
  {
    label: "English",
    value: "en",
    systemValue: enUS,
  },
  {
    label: "French",
    value: "fr",
    systemValue: frFR,
  },
];

export const defaultLang = allLangs[1]; // English
