import { useField } from 'formik';

export const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>
        {label}
      </label>
      <input {...field} {...props} />
      {meta.touched && meta.error ? (
        <div>{meta.error}</div>
      ) : null}
    </>
  );
};

export const MyRadioButton = ({ label, ...props }) => {
  const [field, meta] = useField({
    ...props,
    type: 'radio',
  });
  return (
    <>
      <input {...field} {...props} type="radio" />
      <label htmlFor={props.id}>{label}</label>
      {meta.touched && meta.error ? (
        <div>{meta.error}</div>
      ) : null}
    </>
  );
};
