import React, {useState} from 'react';
import styles from './Form.module.css'
import HeadLine from "../../shared/HeadLine/HeadLine";
import Input from "../../shared/Input/Input";
import RadioButton from "../../shared/RadioButton/RadioButton";
import Button from "../../shared/Button/Button";



const options = ['Frontend developer', 'Backend developer', 'Designer', 'QA'];
const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhoneNumber] = useState('');
  
  const [selectedOption, setSelectedOption] = useState(options[0]);
  
  const [selectedFile, setSelectedFile] = useState(null);
  
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };
  const handleInputName = (e) => {
    setName(e.target.value);
  }
    const handleInputEmail = (e) => {
    setEmail(e.target.value);
  }
    const handleInputPhone = (e) => {
      let input = e.target.value;
      input = input.replace(/\D/g, '');
      let formattedPhoneNumber = '';
      if (input.length > 0) {
        formattedPhoneNumber = '+' + input.substring(0, 2);
      }
      if (formattedPhoneNumber === '+38') {
        formattedPhoneNumber += '(' + input.substring(2, 5);
      }
      if(input.length > 5) {
        formattedPhoneNumber += ')' + input.substring(5, 8);
      }
      if(input.length > 8) {
        formattedPhoneNumber += '-' + input.substring(8, 10);
      }
      if(input.length > 10) {
        formattedPhoneNumber += '-' + input.substring(10, 12);
      }
      setPhoneNumber(formattedPhoneNumber);
    }
  
  
  
  return (
    <div className={styles.formWrapper}>
      <HeadLine className={'primary'} text={'Working with POST request'} />
      <Input className={'primary'} type={'text'} value={name} onChange={handleInputName} placeholder={'Your name'}/>
      <Input className={'primary'} type={'email'} value={email} onChange={handleInputEmail} placeholder={'Email'}/>
      <Input className={'primary'} type={'tel'} value={phone} onChange={handleInputPhone} placeholder={'Phone'}/>
      <label className={styles.phoneLabel} htmlFor="phone">+38 (XXX) XXX - XX - XX</label>
      <p className={styles.radioBtnLabel}>Select your position</p>
      <RadioButton options={options} selectedOption={selectedOption} onOptionSelect={handleOptionSelect}/>
      <Input className={'fileInput'} type={'file'} onChange={handleFileChange}/>
      <div className={styles.btnWrapper}>
        <Button text={'Sign up'} className={'third'} />
      </div>
    </div>
  );
};

export default Form;
