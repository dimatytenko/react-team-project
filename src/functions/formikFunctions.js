import { useField } from 'formik';
import {
  TextFieldStyled,
  RadioButtonInput,
  RadioButtonLabel,
  RadioButtonContainer,
  CustomRadioButton,
} from '../components/DailyCaloriesForm/DailyCaloriesForm.styled';

export const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const inputProps = {
    min: 0,
    max: 500,
  };
  return (
    <>
      <TextFieldStyled
        id={props.name}
        {...field}
        {...props}
        inputProps={inputProps}
        label={label}
        variant="standard"
        color="primary"
        helperText={
          meta.touched && meta.error ? meta.error : null
        }
      />
    </>
  );
};

export const MyRadioButton = ({ label, ...props }) => {
  const [field, meta] = useField({
    ...props,
    type: 'radio',
  });
  return (
    <RadioButtonContainer>
      <RadioButtonInput
        {...field}
        {...props}
        type="radio"
      />
      <RadioButtonLabel htmlFor={props.id}>
        {label}
        <CustomRadioButton></CustomRadioButton>
      </RadioButtonLabel>
      {meta.touched && meta.error ? (
        <div>{meta.error}</div>
      ) : null}
    </RadioButtonContainer>
  );
};
