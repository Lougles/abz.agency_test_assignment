import React, {useState, useEffect} from 'react';
import styles from './Form.module.css'
import HeadLine from "../../shared/HeadLine/HeadLine";
import Input from "../../shared/Input/Input";
import RadioButton from "../../shared/RadioButton/RadioButton";
import Button from "../../shared/Button/Button";
import axios from "axios";

// const options = ['Lawyer', 'Content manager', 'Security', 'Designer'];
const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhoneNumber] = useState('');
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(1);
  const [photo, setSelectedFile] = useState(null);
  const [token, setToken] = useState('');
  
  const isNameValid = /^.{2,60}$/.test(name);
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  const isPhoneValid = /^\+380\d{9}$/.test(phone);
  const isPhotoValid = photo && (photo.type === 'image/jpeg' || photo.type === 'image/jpg') && photo.size <= 5 * 1024 * 1024;
  
  useEffect(() => {
    axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/positions')
    .then(res => {
      const positionsNames = res.data.positions.map(position => position.name);
      setOptions(positionsNames);
    })
    .catch(e => {
      console.error(e);
    })
  }, []);
  
  useEffect(() => {
    axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/token')
    .then(res => {
      setToken(res.data.token)
    })
    .catch(e => {
      console.error(e);
    })
  }, []);
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
  
  const handleReset = () => {
    setName('');
    setPhoneNumber('');
    setEmail('');
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if(!isNameValid || !isEmailValid || !isPhoneValid || !isPhotoValid) {
      return;
    }
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
      handleReset();
      alert(response.data.message);
    })
    .catch((error) => {
      alert(`${error?.response?.data?.message || 'error'}: ${error?.response?.data?.fails?.name[0] || error.message}`)
    });
  };
  
  return (
    <form className={styles.formWrapper} onSubmit={handleSubmit}>
      <HeadLine className={'primary'} text={'Working with POST request'} />
      <Input className={'primary'} validation={isNameValid ? 'good' : 'bad'} type={'text'} value={name} onChange={handleInputName} placeholder={'Your name'}/>
      <Input className={'primary'} validation={isEmailValid ? 'good' : 'bad'} type={'email'} value={email} onChange={handleInputEmail} placeholder={'Email'}/>
      <Input className={'primary'} validation={isPhoneValid ? 'good' : 'bad'} type={'tel'} value={phone} onChange={handleInputPhone} placeholder={'Phone'}/>
      <label className={styles.phoneLabel} htmlFor="phone">+38 (XXX) XXX - XX - XX</label>
      <p className={styles.radioBtnLabel}>Select your position</p>
      <RadioButton options={options} selectedOption={selectedOption} onOptionSelect={handleOptionSelect}/>
        <Input className={'fileInput'} type={'file'} accept=".jpg,.jpeg" onChange={handleFileChange}/>
      <div className={styles.btnWrapper}>
        <Button text={'Sign up'} className={'third'} type={'submit'} />
      </div>
    </form>
  );
};

export default Form;
