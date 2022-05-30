import React, { useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { DateRangePicker } from "react-date-range";
import { MdOutlineDateRange } from "react-icons/md";

const StyledAutocomplete = styled(Autocomplete)({
  "& label.Mui-focused": {
    color: "#84cc16",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#84cc16",
  },
});

const staticDestinations = [
  { label: "Antalya" },
  { label: "Bodrum" },
  { label: "Izmir" },
  { label: "Istanbul" },
  { label: "Marmaris" },
  { label: "Muğla" },
  { label: "Çeşme" },
  { label: "Alaçatı" },
  { label: "Kuşadası" },
  { label: "Alanya" },
];

var monthArr = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const Filter = () => {
  const [isOpenDate, setOpenDate] = useState(false);
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
  const [guestCount, setGuestCount] = useState("1");
  const startDate = selectionRange.startDate;
  const endDate = selectionRange.endDate;
  const handleSelect = (date) => {
    setSelectionRange(date.selection);
  };
  return (
    <div className="w-full h-fit space-y-2 sm:space-y-0 sm:h-[4.5rem] z-10 sticky top-0 py-2 px-6 rounded-b-[3rem] flex flex-col sm:flex-row justify-center  items-center shadow-md shadow-gray-400 bg-campgreen">
      <div className="w-[90%] sm:min-w-[25%] sm:max-w-[50%] h-fit px-3 pt-2 mx-3 bg-white shadow-sm shadow-white rounded-xl">
        <StyledAutocomplete
          id="auto-complete"
          multiple
          options={staticDestinations}
          onChange={(e, record) => {
            // setSearchValue(record);
          }}
          autoComplete
          limitTags={3}
          includeInputInList
          sx={{
            width: "100%",
            transform: "translateY(-8px)",
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="standard"
              label="Destinations"
              placeholder="Select Destination"
            />
          )}
        />
      </div>
      <div className="text-xs md:text-base bg-white relative min-w-[15%] mx-3 h-full shadow-sm shadow-white rounded-xl px-1 sm:px-3 py-4 sm:pt-6 flex items-center">
        <div
          onClick={() => setOpenDate((prev) => !prev)}
          className="w-full cursor-pointer flex flex-row justify-between"
        >
          <p className="font-semibold mr-3">Date Range:</p>
          <p className="text-gray-500">
            {`${monthArr[startDate.getMonth()]} 
              ${startDate.getDate()}, ${startDate.getFullYear()} ~
              ${monthArr[endDate.getMonth()]} 
              ${endDate.getDate()}, ${endDate.getFullYear()}`}
          </p>
          <MdOutlineDateRange className="ml-3 -translate-y-[0.05rem] text-base sm:text-xl" />
        </div>
        <div className="absolute top-20">
          {isOpenDate && (
            <DateRangePicker
              color="#84cc16"
              borderColor="#84cc16"
              rangeColors={"#84cc16"}
              ranges={[selectionRange]}
              onChange={handleSelect}
            />
          )}
        </div>
      </div>
      <div className="w-[50%] sm:w-[15%] h-full px-3 pt-2 shadow-sm mx-3 bg-white shadow-white rounded-xl">
        <StyledAutocomplete
          id="auto-complete"
          options={["1", "2", "3", "4", "5", "6", "7", "8"]}
          onChange={(e) => setGuestCount(Number(e.target.value))}
          autoComplete
          defaultValue={guestCount}
          includeInputInList
          sx={{
            width: "100%",
            transform: "translateY(-8px)",
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="standard"
              label="Guests"
              placeholder="Select Guest Count"
            />
          )}
        />
      </div>
    </div>
  );
};

export default Filter;
