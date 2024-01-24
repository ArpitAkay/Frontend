import './App.css';
import MuiAutoComplete from './components/MuiAutoComplete';
import MuiBox from './components/MuiLayout';
import MuiButton from './components/MuiButton';
import MuiButtonGroup from './components/MuiButtonGroup';
import MuiCheckbox from './components/MuiCheckbox';
import MuiRadioButton from './components/MuiRadioButton';
import MuiRating from './components/MuiRating';
import MuiSelect from './components/MuiSelect';
import MuiSwitch from './components/MuiSwitch';
import MuiTextField from './components/MuiTextField';
import MuiToggleButton from './components/MuiToggleButton';
import MuiTypography from './components/MuiTypography';
import MuiLayout from './components/MuiLayout';
import MuiCard from './components/MuiCard';
import MuiAccordion from './components/MuiAccordion';
import MuiImageList from './components/MuiImageList';
import MuiNavbar from './components/MuiNavbar';
import MuiLink from './components/MuiLink';
import MuiBreadCrumbs from './components/MuiBreadCrumbs';
import MuiDrawer from './components/MuiDrawer';
import MuiSpeedDial from './components/MuiSpeedDial';
import MuiBottomNavigation from './components/MuiBottomNavigation';
import MuiAvatar from './components/MuiAvatar';
import MuiBadge from './components/MuiBadge';
import MuiList from './components/MuiList';
import MuiChip from './components/MuiChip';
import MuiToolTip from './components/MuiToolTip';
import MuiTable from './components/MuiTable';
import MuiAlert from './components/MuiAlert';
import MuiSnackBar from './components/MuiSnackBar';
import MuiDialog from './components/MuiDialog';
import MuiProgress from './components/MuiProgress';
import MuiSkeleton from './components/MuiSkeleton';
import MuiLoadingButton from './components/MuiLoadingButton';
import MuiDateTimePicker from './components/MuiDateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import MuiDateRangePicker from './components/MuiDateRangePicker';
import MuiTabs from './components/MuiTabs';
import MuiTimeline from './components/MuiTimeline';
import MuiMasonry from './components/MuiMasonry';
import MuiResponsiveness from './components/MuiResponsiveness';
import { ThemeProvider, colors, createTheme } from '@mui/material';

const theme = createTheme({
  status: {
    danger: '#e53e3e'
  },
  palette: {
    secondary: {
      main: colors.orange[500],
    },
    neutral: {
      main: colors.grey[500],
      darker: colors.grey[700]
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div className="App">
          {/* <MuiTypography /> */}
          {/* <MuiButton /> */}
          {/* <MuiButtonGroup /> */}
          {/* <MuiToggleButton /> */}
          {/* <MuiTextField /> */}
          {/* <MuiSelect /> */}
          {/* <MuiRadioButton /> */}
          {/* <MuiCheckbox /> */}
          {/* <MuiSwitch /> */}
          {/* <MuiRating /> */}
          {/* <MuiAutoComplete /> */}
          {/* <MuiLayout /> */}
          {/* <MuiCard /> */}
          {/* <MuiAccordion /> */}
          {/* <MuiImageList /> */}
          {/* <MuiNavbar /> */}
          {/* <MuiLink /> */}
          {/* <MuiBreadCrumbs /> */}
          {/* <MuiDrawer /> */}
          {/* <MuiSpeedDial /> */}
          {/* <MuiBottomNavigation /> */}
          {/* <MuiAvatar /> */}
          {/* <MuiBadge /> */}
          <MuiList />
          {/* <MuiChip /> */}
          {/* <MuiToolTip /> */}
          {/* <MuiTable /> */}
          {/* <MuiAlert /> */}
          {/* <MuiSnackBar /> */}
          {/* <MuiDialog /> */}
          {/* <MuiProgress /> */}
          {/* <MuiSkeleton /> */}
          {/* <MuiLoadingButton /> */}
          {/* <MuiDateTimePicker /> */}
          {/* <MuiDateRangePicker /> */}
          {/* <MuiTabs /> */}
          {/* <MuiTimeline /> */}
          {/* <MuiMasonry /> */}
          {/* <MuiResponsiveness /> */}
        </div>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
