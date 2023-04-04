import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { observer } from "mobx-react";
import { useState } from "react";

function BasicSelect<T extends string>({
  title,
  items,
  onChange,
}: {
  title: string;
  items: string[];
  onChange: (item: T) => void;
}) {
  const [selected, setSelected] = useState<string>(items[0]);

  const handleChange = (event: SelectChangeEvent) => {
    setSelected(event.target.value as string);
    onChange(event.target.value as T);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{title}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selected as string}
          label={selected as string}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          {items.map((item, index) => (
            <MenuItem value={item} key={index}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(1),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: "transparent",
    border: "2px solid rgba(0,0,0,0.1)",
    fontSize: 16,
    padding: "10px 10px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#ffffff",
      outline: "none",
    },
  },
}));
export default observer(BasicSelect);
