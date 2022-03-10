import React, { useState } from 'react';
import Input from '@mui/material/Input';
import ButtonUnstyled, { ButtonUnstyledProps, buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import './signup.css';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

const names = ['Oliver Hansen', 'Van Henry', 'April Tucker', 'Ralph Hubbard', 'Omar Alexander', 'Carlos Abbott', 'Miriam Wagner', 'Bradley Wilkerson', 'Virginia Andrews', 'Kelly Snyder'];
const red = {
  500: '#FF0000',
  600: '#FF3131',
  700: '#D2042D'
};

const CustomButtonRoot = styled('span')`
  font-family: IBM Plex Sans, sans-serif;
  font-weight: bold;
  font-size: 0.875rem;
  padding: 10px 34px;
  border-radius: 5px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;
  width: 64px;
  height: 27px;
  border-radius: 1px;
  background-color: #ff0e2a;
`;

function CustomButton(props: ButtonUnstyledProps) {
  return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
}
const SignUp = () => {
  const [firstPage, setFirstPage] = useState(true);
  const [secondPage, setSecondPage] = useState(false);
  const [thirdPage, setThirdPage] = useState(false);
  const [fourthPage, setFourthPage] = useState(false);
  const [fivethPage, setFivethPage] = useState(false);
  const [sixthPage, setSixthPage] = useState(false);
  const [seventhPage, setSeventhPage] = useState(false);
  const [eigthPage, setEigthPage] = useState(false);
  const [ninethPage, setNinethPage] = useState(false);
  const [tenthPage, setTenthPage] = useState(false);
  const [eleventhPage, setEleventhPage] = useState(false);
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value }
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };
  const handleFirstPage = () => {
    setFirstPage(false);
    setSecondPage(true);
    setThirdPage(false);
    setFourthPage(false);
    setFivethPage(false);
    setSixthPage(false);
    setSeventhPage(false);
    setEigthPage(false);
    setNinethPage(false);
    setTenthPage(false);
    setEleventhPage(false);
  };
  const handleSecondPage = () => {
    setFirstPage(false);
    setSecondPage(false);
    setThirdPage(true);
    setFourthPage(false);
    setFivethPage(false);
    setSixthPage(false);
    setSeventhPage(false);
    setEigthPage(false);
    setNinethPage(false);
    setTenthPage(false);
    setEleventhPage(false);
  };
  const handleThirdPage = () => {
    setFirstPage(false);
    setSecondPage(false);
    setThirdPage(false);
    setFourthPage(true);
    setFivethPage(false);
    setSixthPage(false);
    setSeventhPage(false);
    setEigthPage(false);
    setNinethPage(false);
    setTenthPage(false);
    setEleventhPage(false);
  };
  const handleFourthPage = () => {
    setFirstPage(false);
    setSecondPage(false);
    setThirdPage(false);
    setFourthPage(false);
    setFivethPage(true);
    setSixthPage(false);
    setSeventhPage(false);
    setEigthPage(false);
    setNinethPage(false);
    setTenthPage(false);
    setEleventhPage(false);
  };
  const handleFivethPage = () => {
    setFirstPage(false);
    setSecondPage(false);
    setThirdPage(false);
    setFourthPage(false);
    setFivethPage(false);
    setSixthPage(true);
    setSeventhPage(false);
    setEigthPage(false);
    setNinethPage(false);
    setTenthPage(false);
    setEleventhPage(false);
  };
  const handleSixthPage = () => {
    setFirstPage(false);
    setSecondPage(false);
    setThirdPage(false);
    setFourthPage(false);
    setFivethPage(false);
    setSixthPage(false);
    setSeventhPage(true);
    setEigthPage(false);
    setNinethPage(false);
    setTenthPage(false);
    setEleventhPage(false);
  };
  const handleSeventhPage = () => {
    setFirstPage(false);
    setSecondPage(false);
    setThirdPage(false);
    setFourthPage(false);
    setFivethPage(false);
    setSixthPage(false);
    setSeventhPage(false);
    setEigthPage(true);
    setNinethPage(false);
    setTenthPage(false);
    setEleventhPage(false);
  };
  const handleEigthPage = () => {
    setFirstPage(false);
    setSecondPage(false);
    setThirdPage(false);
    setFourthPage(false);
    setFivethPage(false);
    setSixthPage(false);
    setSeventhPage(false);
    setEigthPage(false);
    setNinethPage(true);
    setTenthPage(false);
    setEleventhPage(false);
  };
  const handleNinethPage = () => {
    setFirstPage(false);
    setSecondPage(false);
    setThirdPage(false);
    setFourthPage(false);
    setFivethPage(false);
    setSixthPage(false);
    setSeventhPage(false);
    setEigthPage(false);
    setNinethPage(false);
    setTenthPage(true);
    setEleventhPage(false);
  };
  const handleTenthPage = () => {
    setFirstPage(false);
    setSecondPage(false);
    setThirdPage(false);
    setFourthPage(false);
    setFivethPage(false);
    setSixthPage(false);
    setSeventhPage(false);
    setEigthPage(false);
    setNinethPage(false);
    setTenthPage(false);
    setEleventhPage(true);
  };
  const handleEleventhPage = () => {
    setFirstPage(false);
    setSecondPage(false);
    setThirdPage(false);
    setFourthPage(false);
    setFivethPage(false);
    setSixthPage(false);
    setSeventhPage(false);
    setEigthPage(false);
    setNinethPage(false);
    setTenthPage(false);
    setEleventhPage(false);
  };
  return (
    <div className="signup-first">
      {firstPage && !secondPage && !thirdPage && !fourthPage && !fivethPage && !sixthPage && !seventhPage && !eigthPage && !ninethPage && !tenthPage && !eleventhPage ? (
        <ul>
          <li>
            <h1>Enter Full Name of your Company</h1>
          </li>
          <li>
            <Input fullWidth={true} placeholder="Type your answer here..." />
          </li>
          <li>
            <CustomButton onClick={handleFirstPage}>OK</CustomButton>
          </li>
        </ul>
      ) : !firstPage && secondPage && !thirdPage && !fourthPage && !fivethPage && !sixthPage && !seventhPage && !eigthPage && !ninethPage && !tenthPage && !eleventhPage ? (
        <ul>
          <li>
            <h1>Enter the full and last name</h1>
          </li>
          <li>
            <Input fullWidth={true} placeholder="Type your answer here..." />
          </li>
          <li>
            <CustomButton onClick={handleSecondPage}>OK</CustomButton>
          </li>
        </ul>
      ) : !firstPage && !secondPage && thirdPage && !fourthPage && !fivethPage && !sixthPage && !seventhPage && !eigthPage && !ninethPage && !tenthPage && !eleventhPage ? (
        <ul>
          <li>
            <h1>Enter a valid email address</h1>
          </li>
          <li>
            <Input fullWidth={true} placeholder="name@example.com" />
          </li>
          <li>
            <CustomButton onClick={handleThirdPage}>OK</CustomButton>
          </li>
        </ul>
      ) : !firstPage && !secondPage && !thirdPage && fourthPage && !fivethPage && !sixthPage && !seventhPage && !eigthPage && !ninethPage && !tenthPage && !eleventhPage ? (
        <ul>
          <li>
            <h1>How many products do you currently have?</h1>
          </li>
          <li>
            <Input fullWidth={true} placeholder="Type your answer here..." />
          </li>
          <li>
            <CustomButton onClick={handleFourthPage}>OK</CustomButton>
          </li>
        </ul>
      ) : !firstPage && !secondPage && !thirdPage && !fourthPage && fivethPage && !sixthPage && !seventhPage && !eigthPage && !ninethPage && !tenthPage && !eleventhPage ? (
        <ul>
          <li>
            <h1>Do you ship your products from United States?</h1>
          </li>
          <li>
            <Stack spacing={2} direction="row">
              <Button variant="contained" color="error" onClick={handleFivethPage}>
                Yes
              </Button>
              <Button variant="outlined" color="error">
                No
              </Button>
            </Stack>
          </li>
        </ul>
      ) : !firstPage && !secondPage && !thirdPage && !fourthPage && !fivethPage && sixthPage && !seventhPage && !eigthPage && !ninethPage && !tenthPage && !eleventhPage ? (
        <ul>
          <li>
            <h1>What's your average processing time? (be specific)</h1>
          </li>
          <li>
            <Input fullWidth={true} placeholder="Type your answer here...(e.g: 1-2 days)" />
          </li>
          <li>
            <CustomButton onClick={handleSixthPage}>OK</CustomButton>
          </li>
        </ul>
      ) : !firstPage && !secondPage && !thirdPage && !fourthPage && !fivethPage && !sixthPage && seventhPage && !eigthPage && !ninethPage && !tenthPage && !eleventhPage ? (
        <ul>
          <li>
            <h1>What's your average US shipping time? (be specific)</h1>
          </li>
          <li>
            <Input fullWidth={true} placeholder="Type your answer here...(e.g: 1-2 days)" />
          </li>
          <li>
            <CustomButton onClick={handleSeventhPage}>OK</CustomButton>
          </li>
        </ul>
      ) : !firstPage && !secondPage && !thirdPage && !fourthPage && !fivethPage && !sixthPage && !seventhPage && eigthPage && !ninethPage && !tenthPage && !eleventhPage ? (
        <ul>
          <li>
            <h1>What's your average international shipping time? (be specific)</h1>
          </li>
          <li>
            <Input fullWidth={true} placeholder="Type your answer here...(e.g: 3 days)" />
          </li>
          <li>
            <CustomButton onClick={handleEigthPage}>OK</CustomButton>
          </li>
        </ul>
      ) : !firstPage && !secondPage && !thirdPage && !fourthPage && !fivethPage && !sixthPage && !seventhPage && !eigthPage && ninethPage && !tenthPage && !eleventhPage ? (
        <ul>
          <li>
            <h1>What's countries do you offer shipping to?</h1>
          </li>
          <li>
            <FormControl sx={{ m: 1, width: 300 }} fullWidth={true}>
              <InputLabel id="demo-multiple-checkbox-label">Select countries</InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput label="Tag" />}
                renderValue={(selected) => selected.join(', ')}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={personName.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </li>
          <li>
            <CustomButton onClick={handleNinethPage}>OK</CustomButton>
          </li>
        </ul>
      ) : !firstPage && !secondPage && !thirdPage && !fourthPage && !fivethPage && !sixthPage && !seventhPage && !eigthPage && !ninethPage && tenthPage && !eleventhPage ? (
        <ul>
          <li>
            <h1>What's niche are your products in?</h1>
          </li>
          <li>
            <Input fullWidth={true} placeholder="Home goods, apparel, jewelry etc." />
          </li>
          <li>
            <CustomButton onClick={handleTenthPage}>OK</CustomButton>
          </li>
        </ul>
      ) : !firstPage && !secondPage && !thirdPage && !fourthPage && !fivethPage && !sixthPage && !seventhPage && !eigthPage && !ninethPage && !tenthPage && eleventhPage ? (
        <ul>
          <li>
            <h1>Enter in the URL for your company website.</h1>
          </li>
          <li>
            <Input fullWidth={true} placeholder="https://" />
          </li>
          <li>
            <CustomButton onClick={handleEleventhPage}>OK</CustomButton>
          </li>
        </ul>
      ) : (
        <p>
          Thank you for submitting an application to be a Drophook supplier! As of right now, you’re on the waiting list of America’s most trusted marketplace of online distributers. You’ll receive a
          confirmation email from us shortly. As soon as a spot opens up, and we think you’d be a good fit, we’ll be back in touch with you.
        </p>
      )}
    </div>
  );
};

export default SignUp;
