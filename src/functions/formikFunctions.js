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
  return (
    <>
      <TextFieldStyled
        id={props.name}
        {...field}
        {...props}
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
      <RadioButtonLabel htmlFor={props.id}>
        <RadioButtonInput
          {...field}
          {...props}
          type="radio"
        />
        {label}
        <CustomRadioButton></CustomRadioButton>
      </RadioButtonLabel>
      {meta.touched && meta.error ? (
        <div>{meta.error}</div>
      ) : null}
    </RadioButtonContainer>
  );
};
