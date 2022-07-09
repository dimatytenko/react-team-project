import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  MyTextInput,
  MyRadioButton,
} from '../../functions/formikFunctions';
import {
  FormContainer,
  FormTitle,
  FormFlexContainer,
  FormFlexContainerLeft,
  RadioButtonsTitle,
  CalculatorForm,
  Button,
} from './DailyCaloriesForm.styled';

export const DailyCaloriesForm = ({ onFormSubmit }) => {
  return (
    <FormContainer>
      <FormTitle>
        Calculate your daily calories intake right now
      </FormTitle>
      <Formik
        initialValues={{
          height: '',
          age: '',
          weight_current: '',
          weight_desired: '',
          blood: 1,
        }}
        validationSchema={Yup.object({
          height: Yup.number('Only numbers allowed')
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
          weight_current: Yup.number()
            .positive()
            .min(20, 'Weight must be more than 20kg')
            .max(500, 'Weight must be less than 500kg')
            .required('Required'),
          weight_desired: Yup.number()
            .positive()
            .min(20, 'Weight must be more than 20kg')
            .max(500, 'Weight must be less than 500kg')
            .required('Required'),
          blood: Yup.string().oneOf(
            ['1', '2', '3', '4'],
            'Invalid Blood Type'
          ),
        })}
        onSubmit={values => {
          onFormSubmit(values);
        }}
      >
        <CalculatorForm>
          <FormFlexContainer>
            <FormFlexContainerLeft>
              <MyTextInput
                label="Height *"
                name="height"
                type="number"
              />
              <MyTextInput
                label="Age *"
                name="age"
                type="number"
              />
              <MyTextInput
                label="Current weight *"
                name="weight_current"
                type="number"
              />
            </FormFlexContainerLeft>
            <div>
              <MyTextInput
                label="Desired weight *"
                name="weight_desired"
                type="number"
              />
              <RadioButtonsTitle id="my-radio-group">
                Blood type *
              </RadioButtonsTitle>
              <div
                role="group"
                aria-labelledby="my-radio-group"
              >
                <MyRadioButton
                  label="1"
                  id="bloodTypeChoice"
                  name="blood"
                  value="1"
                  checked
                />
                <MyRadioButton
                  label="2"
                  id="bloodTypeChoice"
                  name="blood"
                  value="2"
                />
                <MyRadioButton
                  label="3"
                  id="bloodTypeChoice"
                  name="blood"
                  value="3"
                />
                <MyRadioButton
                  label="4"
                  id="bloodTypeChoice"
                  name="blood"
                  value="4"
                />
              </div>
            </div>
          </FormFlexContainer>
          <Button type="submit">Start losing weight</Button>
        </CalculatorForm>
      </Formik>
    </FormContainer>
  );
};
