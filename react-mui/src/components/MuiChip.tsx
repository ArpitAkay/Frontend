import { Avatar, Chip, Stack } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
import React from "react";

interface Chip {
  key: number;
  label: string;
}

const MuiChip = () => {
  const [chipData, setChipData] = React.useState<Chip[]>([
    { key: 0, label: "Angular" },
    { key: 1, label: "jQuery" },
    { key: 2, label: "Polymer" },
    { key: 3, label: "React" },
    { key: 4, label: "Vue.js" },
  ]);

  const handleDelete = (chipToDelete: Chip) => () => {
    const newChipdata = chipData.filter(
      (chip) => chip.key !== chipToDelete.key
    );
    setChipData(newChipdata);
  };

  return (
    <Stack spacing={2} direction={"row"}>
      <Chip label="Chip" color={"primary"} size="medium" icon={<FaceIcon />} />
      <Chip
        label="Chip outlined"
        color={"secondary"}
        size="medium"
        variant="outlined"
        avatar={<Avatar>V</Avatar>}
      />
      <Chip
        label={"Clickable"}
        color={"success"}
        onClick={() => alert("clicked")}
      />
      <Chip
        label={"Delete"}
        color={"error"}
        onClick={() => alert("clicked")}
        onDelete={() => alert("Delete handler clicked")}
      />
      {chipData.map((data) => {
        return (
          <Chip
            key={data.key}
            label={data.label}
            color={"primary"}
            size="medium"
            variant="outlined"
            avatar={<Avatar>{data.label[0]}</Avatar>}
            onDelete={handleDelete(data)}
          />
        );
      })}
    </Stack>
  );
};

export default MuiChip;
