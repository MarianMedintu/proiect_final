import {UserInfo} from "../login/login";
import {useContext, useState} from "react";
import {useForm} from "../../utils/use-form";
import {API} from "../../utils/constants";
import './add-product.scss'
import {Button, FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";

export function AddProduct() {
    const currenUserInfo = useContext(UserInfo);
    const [formValues, formProps] = useForm({
        name: '',
        slug: '',
        weight: '',
        price: '',
        url: ''
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
            .then(() => setMessage('Added product'))
            .catch(() => setMessage('The product has not been added'))
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
            <TextField label={'URL'} type="text" {...formProps.url} />
            <TextField label={'Price (lei)'} type={'number'} {...formProps.price} />
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Weight</InputLabel>
                <Select
                    label="Weight"
                    {...formProps.weight}
                >
                    <MenuItem value={200}>200 g</MenuItem>
                    <MenuItem value={300}>300 g</MenuItem>
                    <MenuItem value={400}>400 g</MenuItem>
                </Select>
            </FormControl>
            <div>
                <Button variant="contained" type={'submit'}>Add product</Button>
            </div>
            {message && (
                <div>{message}</div>
            )}
        </form>
    )

}
