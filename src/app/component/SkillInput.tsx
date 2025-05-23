import { Autocomplete, Chip, TextField } from "@mui/material";
import { useState } from "react";
import { skills } from "../constant/constant";

const SkillInput = () => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  return (
    <Autocomplete
      multiple
      options={skills}
      value={selectedSkills}
      onChange={(event, newValue) => setSelectedSkills(newValue)}
      renderTags={(value: string[], getTagProps) =>
        value.map((option: string, index: number) => (
          <Chip
            label={option}
            {...getTagProps({ index })}
            color="primary"
            variant="outlined"
          />
        ))
      }
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label="Select Skills"
          placeholder="Start typing..."
        />
      )}
      sx={{ width: '100%', maxWidth: 500 }}
    />
  );
};

export default SkillInput;
