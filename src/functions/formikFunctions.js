import { useField } from 'formik';
import {
  TextFieldStyled,
  RadioButtonInput,
  RadioButtonLabel,
  RadioButtonContainer,
} from '../components/DailyCaloriesForm/DailyCaloriesForm.styled';

export const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <TextFieldStyled
        htmlFor={props.id || props.name}
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
      <RadioButtonInput
        {...field}
        {...props}
        type="radio"
      />
      <RadioButtonLabel htmlFor={props.id}>
        {label}
      </RadioButtonLabel>
      {meta.touched && meta.error ? (
        <div>{meta.error}</div>
      ) : null}
    </RadioButtonContainer>
  );
};
