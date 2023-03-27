import './FormInput.scss';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const FormInput: React.FC<FormInputProps> = ({ name, ...inputProps }) => {
  return (
    <div className='form-input-container'>
      <div className='form-input-name'>{name}</div>
      <input className='form-input' {...inputProps}></input>
    </div>
  );
};

export default FormInput;
