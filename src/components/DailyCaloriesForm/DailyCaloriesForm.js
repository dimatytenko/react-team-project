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

export const DailyCaloriesForm = ({
  onFormSubmit,
  data,
  isLoading,
}) => {
  const {
    height,
    age,
    weight_current,
    weight_desired,
    blood,
  } = data;

  return (
    <FormContainer>
      <FormTitle>
        Calculate your daily calories intake right now
      </FormTitle>
      <Formik
        initialValues={{
          height: height || '',
          age: age || '',
          weight_current: weight_current || '',
          weight_desired: weight_desired || '',
          blood: blood || 1,
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
        {({ values, setFieldValue }) => {
          return (
            <CalculatorForm>
              <FormFlexContainer>
                <FormFlexContainerLeft>
                  <MyTextInput
                    label="Height, cm *"
                    name="height"
                    type="number"
                  />
                  <MyTextInput
                    label="Age *"
                    name="age"
                    type="number"
                  />
                  <MyTextInput
                    label="Current weight, kg *"
                    name="weight_current"
                    type="number"
                  />
                </FormFlexContainerLeft>
                <div>
                  <MyTextInput
                    label="Desired weight, kg *"
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
                      id="1"
                      name="blood"
                      value="1"
                      checked={values.blood === 1}
                      onChange={() =>
                        setFieldValue('blood', 1)
                      }
                    />
                    <MyRadioButton
                      label="2"
                      id="2"
                      name="blood"
                      value="2"
                      checked={values.blood === 2}
                      onChange={() =>
                        setFieldValue('blood', 2)
                      }
                    />
                    <MyRadioButton
                      label="3"
                      id="3"
                      name="blood"
                      value="3"
                      checked={values.blood === 3}
                      onChange={() =>
                        setFieldValue('blood', 3)
                      }
                    />
                    <MyRadioButton
                      label="4"
                      id="4"
                      name="blood"
                      value="4"
                      checked={values.blood === 4}
                      onChange={() =>
                        setFieldValue('blood', 4)
                      }
                    />
                  </div>
                </div>
              </FormFlexContainer>
              <Button type="submit">
                {isLoading
                  ? 'Calculating...'
                  : 'Start losing weight'}
              </Button>
            </CalculatorForm>
          );
        }}
      </Formik>
    </FormContainer>
  );
};
