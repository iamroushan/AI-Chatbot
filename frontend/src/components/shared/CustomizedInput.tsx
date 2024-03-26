import { TextField } from '@mui/material'

type Props = {
    name: string
    type: string
    label: string
    required?: boolean // Add required prop
    error?: boolean // Add error prop
    helperText?: string | null // Add helperText prop
}

const CustomizedInput = (props: Props) => {
  return (
    <TextField 
        margin="normal"
        InputLabelProps={{style: { color: "white" }}}
        name={props.name} 
        label={props.label} 
        type={props.type} 
        required={props.required} // Pass required prop
        error={props.error} // Pass error prop
        helperText={props.helperText} // Pass helperText prop
        InputProps={{
            style: {
                width: "400px",
                borderRadius: 10,
                fontSize: 20,
                color: "white",
            },
        }}
    />
  )
}

export default CustomizedInput
