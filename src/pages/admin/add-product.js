import { UserInfo } from "../../components/login";
import { useContext, useState } from "react";
import { useForm } from "../../utils/use-form";
import { API } from "../../utils/constants";
import './add-product.scss'
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";

export function AddProduct() {
    const currenUserInfo = useContext(UserInfo);
    const [formValues, formProps] = useForm({
        name: '',
        slug: '',
        weight: 0,
        color: ''
    })
    const [message, setMessage] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();
        setMessage(null)
        fetch(`${API}/products`, {
            method: 'post',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(formValues)
        })
            .then(() => setMessage('Produs creat'))
            .catch(() => setMessage('Produsel nu a putut fi adaugat'))
    }


    if (!currenUserInfo.isAdmin) {
        return (
            <div>
                You don't have access to admin dashboard
            </div>
        )
    }

    return (
        <form className={'AddProductForm'} onSubmit={handleSubmit}>
            <TextField label={'Name'} type="text" {...formProps.name} />
            <TextField label={'Slug'} type="text" {...formProps.slug} />
            <TextField label={'Weight'} type="number" {...formProps.weight} />
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    label="Color"
                    {...formProps.color}
                >
                    <MenuItem value={'red'}>Red</MenuItem>
                    <MenuItem value={'black'}>Black</MenuItem>
                    <MenuItem value={'yellow'}>Yellow</MenuItem>
                </Select>
            </FormControl>

            <div>
                <Button variant="contained" type={'submit'}>Contained</Button>
            </div>
            {message && (
                <div>{message}</div>
            )}
        </form>
    )

}
