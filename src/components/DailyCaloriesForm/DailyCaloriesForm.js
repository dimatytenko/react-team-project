import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {
  MyTextInput,
  MyRadioButton,
} from '../../functions/formikFunctions';

export const DailyCaloriesForm = ({ onFormSubmit }) => {
  return (
    <div>
      <h1>Calculate your daily calorie intake right now</h1>
      <Formik
        initialValues={{
          height: '',
          age: '',
          currentWeight: '',
          desiredWeight: '',
          bloodType: '1',
        }}
        validationSchema={Yup.object({
          height: Yup.number()
            .positive()
            .min(100, 'Height must be more than 100cm')
            .max(250, 'Height must be less than 250cm')
            .required('Required'),
          age: Yup.number()
            .positive()
            .integer()
            .min(18, 'Age must be over 18 years old')
            .max(100, 'Age must be less than 100 years old')
            .required('Required'),
          currentWeight: Yup.number()
            .positive()
            .min(20, 'Weight must be more than 20kg')
            .max(500, 'Weight must be less than 500kg')
            .required('Required'),
          desiredWeight: Yup.number()
            .positive()
            .min(20, 'Weight must be more than 20kg')
            .max(500, 'Weight must be less than 500kg')
            .required('Required'),
          bloodType: Yup.string().oneOf(
            ['1', '2', '3', '4'],
            'Invalid Blood Type'
          ),
        })}
        onSubmit={values => {
          onFormSubmit(values);
        }}
      >
        <Form>
          <div>
            <MyTextInput
              label="Height *"
              name="height"
              type="text"
            />
            <MyTextInput
              label="Age *"
              name="age"
              type="text"
            />
            <MyTextInput
              label="Current weight *"
              name="currentWeight"
              type="text"
            />
          </div>
          <div>
            <MyTextInput
              label="Desired weight *"
              name="desiredWeight"
              type="text"
            />
            <p id="my-radio-group">Blood type *</p>
            <div
              role="group"
              aria-labelledby="my-radio-group"
            >
              <MyRadioButton
                label="1"
                id="bloodTypeChoice"
                name="bloodType"
                value="1"
                checked
              />
              <MyRadioButton
                label="2"
                id="bloodTypeChoice"
                name="bloodType"
                value="2"
              />
              <MyRadioButton
                label="3"
                id="bloodTypeChoice"
                name="bloodType"
                value="3"
              />
              <MyRadioButton
                label="4"
                id="bloodTypeChoice"
                name="bloodType"
                value="4"
              />
            </div>
          </div>
          <button type="submit">Start losing weight</button>
        </Form>
      </Formik>
    </div>
  );
};
