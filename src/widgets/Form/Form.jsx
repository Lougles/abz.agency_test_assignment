import React, {useState, useEffect} from 'react';
import styles from './Form.module.css'
import HeadLine from "../../shared/HeadLine/HeadLine";
import Input from "../../shared/Input/Input";
import RadioButton from "../../shared/RadioButton/RadioButton";
import Button from "../../shared/Button/Button";
import axios from "axios";

const options = ['Lawyer', 'Content manager', 'Security', 'Designer'];
const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhoneNumber] = useState('');
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(1);
  const [photo, setSelectedFile] = useState(null);
  const [newUser, setNewUser] = useState(null);
  const [token, setToken] = useState('');
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const handleOptionSelect = (option, index) => {
    setSelectedOption(option);
    setSelectedOptionIndex(index + 1);
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
      formattedPhoneNumber += input.substring(2, 5);
    }
    if(input.length > 5) {
      formattedPhoneNumber += input.substring(5, 8);
    }
    if(input.length > 8) {
      formattedPhoneNumber += input.substring(8, 10);
    }
    if(input.length > 10) {
      formattedPhoneNumber += input.substring(10, 12);
    }
    setPhoneNumber(formattedPhoneNumber);
  }
  
  useEffect(() => {
    axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/token')
    .then(res => {
      setToken(res.data.token)
    })
    .catch(e => {
      console.error(e);
    })
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('position_id', selectedOptionIndex);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('photo', photo);
    const headers = {
      'Token': token
    };
    axios.post('https://frontend-test-assignment-api.abz.agency/api/v1/users', formData, {headers})
    .then((response) => {
      console.log(response);
      if(!response.data.success) {
        alert(response.data.message);
      }
      // setNewUser(response.data);
      console.log(response.data);
      alert(response.data.message)
    })
    .catch((error) => {
      console.error(error);
    });
  };
  
  
  return (
    <form className={styles.formWrapper} onSubmit={handleSubmit}>
      <HeadLine className={'primary'} text={'Working with POST request'} />
      <Input className={'primary'} type={'text'} value={name} onChange={handleInputName} placeholder={'Your name'}/>
      <Input className={'primary'} type={'email'} value={email} onChange={handleInputEmail} placeholder={'Email'}/>
      <Input className={'primary'} type={'tel'} value={phone} onChange={handleInputPhone} placeholder={'Phone'}/>
      <label className={styles.phoneLabel} htmlFor="phone">+38 (XXX) XXX - XX - XX</label>
      <p className={styles.radioBtnLabel}>Select your position</p>
      <RadioButton options={options} selectedOption={selectedOption} onOptionSelect={handleOptionSelect}/>
        <Input className={'fileInput'} type={'file'} onChange={handleFileChange} placeholder={'qwe'}/>
      <div className={styles.btnWrapper}>
        <Button text={'Sign up'} className={'third'} type={'submit'} />
      </div>
    </form>
  );
};

export default Form;
