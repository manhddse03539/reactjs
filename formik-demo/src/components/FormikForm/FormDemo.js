import React from 'react';
import { Form, Label, FormGroup, Input, Button } from 'reactstrap';
import Wraper from './Wraper.style';

import { Circle } from 'react-feather';

const FormDemo = (initialValues, values, handleOnSubmit, handleChange, handleBlur) => {
    return (
        <Wraper>
            <Form className="form-demo col-6" onSubmit={handleOnSubmit}>
                <FormGroup className="form-header">
                    <Input className="col-6" type="Date" name="date" id="date-time" />
                    <div className="col-3 status">
                        <Circle /><span>no data</span>
                    </div>
                </FormGroup>
                <FormGroup className="temp-weather">
                    <span className="temp1">{initialValues.initialValues.temp1}</span>
                    <span className="temp2">{initialValues.initialValues.temp2}</span>
                    <span className="weather">{initialValues.initialValues.weather}</span>
                </FormGroup>
                <FormGroup className="title1">
                    <Label>Label1</Label>
                    <Input
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.title1}
                        type="text"
                        name="title1"
                    />
                </FormGroup>
                <FormGroup className="title2">
                    <Label>Label2</Label>
                    <Input
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.title2}
                        type="text"
                        name="title2"

                    />
                </FormGroup>
                <FormGroup className="title3">
                    <Label>Label3</Label>
                    <Input type="text" name="text3" />
                </FormGroup>
                <FormGroup className="btn col-6">
                    <Button className="save-btn">Save</Button>
                    <Button type="submit" className="submit-btn">Register</Button>
                </FormGroup>
            </Form>
        </Wraper>
    )
}

export default FormDemo;
