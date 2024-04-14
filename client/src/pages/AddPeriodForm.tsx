import { useForm } from "react-hook-form";
import { Box, TextField, Button, MenuItem } from "@mui/material";
import { useMutation } from "react-query";
import * as apiClient from "../apiClient";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

export type PeriodFormData = {
    name: string,
    startDate: Date | number,
    startPeriod: string,
    endDate: Date | number,
    endPeriod: string,
    Icon: File,
    Era: string
}

const AddPeriodForm = () => {
    // console.log("Add Period Form")
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<PeriodFormData>();
    const navigate = useNavigate();
    // console.log("Destructure elements")

    const mutation = useMutation(apiClient.addPeriod, {
        onSuccess: async () => {
            alert("Period Added Succesfully")
            navigate("/")
            console.log("Success")
        },
        onError: () => {
            alert("Error Adding Period")
        },
    });
    
    console.log("Mutation Created")

    // console.log("Mutation complete")
    const onSubmit = handleSubmit((data) => {
        console.log(data)
        mutation.mutate(data);
    });

    // console.log("Return started")

    const [selectedEra, setSelectedEra] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const era = event.target.value.replace(/\s+/g, '').toLowerCase();
        setSelectedEra(era);
    };

    return (
        <form
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: "2rem"
            }}
            onSubmit={onSubmit} // attach handleSubmit to the form
        >
            <Box display="flex" flexDirection="column" gap="1rem">

                <TextField
                    fullWidth
                    variant="outlined"
                    label="Name"
                    {...register("name", { required: "This field is required" })}
                    error={!!errors.name}
                    helperText={errors.name && errors.name.message}
                />

                <TextField
                    fullWidth
                    variant="outlined"
                    label="Start Year"
                    type="number"
                    {...register("startDate", { required: "This field is required" })}
                    error={!!errors.startDate}
                    helperText={errors.startDate && errors.startDate.message}
                />

                <TextField
                    fullWidth
                    variant="outlined"
                    label="Start Period"
                    {...register("startPeriod", { required: "This field is required" })}
                    error={!!errors.startPeriod}
                    helperText={errors.startPeriod && errors.startPeriod.message}
                />

                <TextField
                    fullWidth
                    variant="outlined"
                    label="End Year"
                    type="number"
                    {...register("endDate", { required: "This field is required" })}
                    error={!!errors.endDate}
                    helperText={errors.endDate && errors.endDate.message}
                />

                <TextField
                    fullWidth
                    variant="outlined"
                    label="End Period"
                    {...register("endPeriod", { required: "This field is required" })}
                    error={!!errors.endPeriod}
                    helperText={errors.endPeriod && errors.endPeriod.message}
                />

                <TextField
                    fullWidth
                    variant="outlined"
                    label="Icon"
                    type="file"
                    {...register("Icon", { required: "This field is required" })}
                    error={!!errors.Icon}
                    helperText={errors.Icon && errors.Icon.message}
                />

                <TextField
                    fullWidth
                    variant="outlined"
                    label="Era"
                    select
                    {...register("Era", { required: "This field is required" })}
                    error={!!errors.Era}
                    helperText={errors.Era && errors.Era.message}
                    value={selectedEra}
                    onChange={handleChange}
                >
                    <MenuItem value="Prehistory">Prehistory</MenuItem>
                    <MenuItem value="Ancient history">Ancient history</MenuItem>
                    <MenuItem value="Post-classical history">Post-classical history</MenuItem>
                    <MenuItem value="Early modern period">Early modern period</MenuItem>
                    <MenuItem value="Late modern period">Late modern period</MenuItem>
                </TextField>

                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </Box>
        </form>
    );
};

export default AddPeriodForm;
