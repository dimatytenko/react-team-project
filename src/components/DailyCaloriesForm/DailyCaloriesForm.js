import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';

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
import '../../utils/i18next';

export const DailyCaloriesForm = ({
  onFormSubmit,
  data,
  isLoading,
}) => {
  const { t } = useTranslation();

  const {
    height,
    age,
    weight_current,
    weight_desired,
    blood,
  } = data;

  return (
    <FormContainer>
      <FormTitle>{t('calculator.title')}</FormTitle>
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
            .integer(`${t('calculator.integer')}`)
            .min(100, `${t('calculator.heightMin')}`)
            .max(250, `${t('calculator.heightMax')}`)
            .required(`${t('calculator.required')}`),
          age: Yup.number()
            .positive()
            .integer(`${t('calculator.integer')}`)
            .min(18, `${t('calculator.ageMin')}`)
            .max(100, `${t('calculator.ageMax')}`)
            .required(`${t('calculator.required')}`),
          weight_current: Yup.number()
            .positive()
            .integer(`${t('calculator.integer')}`)
            .min(20, `${t('calculator.weightMin')}`)
            .max(500, `${t('calculator.weightMax')}`)
            .required(`${t('calculator.required')}`),
          weight_desired: Yup.number()
            .positive()
            .integer(`${t('calculator.integer')}`)
            .min(20, `${t('calculator.weightDesiredMin')}`)
            .max(500, `${t('calculator.weightDesiredMax')}`)
            .required(`${t('calculator.required')}`),
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
            <CalculatorForm noValidate>
              <FormFlexContainer>
                <FormFlexContainerLeft>
                  <MyTextInput
                    label={t('calculator.height')}
                    name="height"
                    type="number"
                  />
                  <MyTextInput
                    label={t('calculator.age')}
                    name="age"
                    type="number"
                  />
                  <MyTextInput
                    label={t('calculator.currentWeight')}
                    name="weight_current"
                    type="number"
                  />
                </FormFlexContainerLeft>
                <div>
                  <MyTextInput
                    label={t('calculator.desireWeight')}
                    name="weight_desired"
                    type="number"
                  />
                  <RadioButtonsTitle id="my-radio-group">
                    {t('calculator.blood')}
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
                  ? `${t('calculator.calculating')}`
                  : `${t('calculator.start')}`}
              </Button>
            </CalculatorForm>
          );
        }}
      </Formik>
    </FormContainer>
  );
};
