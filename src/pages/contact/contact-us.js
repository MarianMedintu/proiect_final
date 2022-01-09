import React, {Component} from "react";
import ReactDOM from "react-dom";
import './contact.scss'
import { FormControl, TextField,TextareaAutosize } from "@mui/material";

function Form(){
    return (<form action={"#"} method="post">
        <TextField label={"name"} type={"text"} name={"name"} />
        <TextField label={"surname"} type={"text"} name={"surname"} />
        <TextField label={"email"} type={"email"} name={"email"} />
        <TextareaAutosize aria-label={"message"} placeholder={'message'} name={"message"}/>
        <div className={'checkbox-area'}>
            <label className={'form_checkbox'}>
                <input type={'checkbox'}/>
                <span className={'checkbox'}></span>
                <p className={'consent_text'}>
                    I hereby give consent for my personal data included in my
                    application to be processed for the purposes of the recruitment
                    process under the European Parliament’s and Council of the
                    European Union Regulation on the Protection of Natural Persons as
                    of 27 April 2016, with regard to the processing of personal data
                    and on the free movement of such data, and repealing Directive
                    95/46/EC (Data Protection Directive)
                </p>
            </label>
        </div>
        <FormControl className={'button-container'}>
            <button onSubmit={"s"}>Submit</button>
            <button>Cancel</button>
        </FormControl>

    </form>)
}

export function ContactUs() {
    return (
        <div className="contact-form">
            <Form/>
        </div>
    )
}

