import { Formik } from 'formik';
import React from 'react';
import FormDemo from './FormDemo';

const FormContainer = () => {
    return (
        <>
            <Formik
                initialValues={{
                    temp1: '30°C',
                    temp2: '200°F',
                    weather: '雨',
                    title1: 'vc',
                    date: new Date()
                }}
                onSubmit={(data) => console.log("data", data)}
            >
                {props => (
                    <FormDemo {...props} />
                )}
            </Formik>
        </>
    )
}

export default FormContainer;
