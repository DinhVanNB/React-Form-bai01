import './App.css';
import React, {useState} from 'react';
import { Formik } from "formik";

export const App=() =>{
  const [form,setForm] = useState([]);
  const regex = {
      name: /^[a-zA-Z0-9_.+-]{2,20}$/,
      email: /^[a-zA-Z0-9_.+-]{5,}@[a-zA-Z0-9-]{3,10}\.[a-zA-Z0-9-.]{2,}$/,
      phone:/^[0-9.]{10,}$/
  };

  const onChange=(e)=>{
    setForm( {
      ...form,[e.target.name]:e.target.value
    })
  }
  function handleValidate(){
    const errors = {};
    if(!form.name){
      return errors.name="Bạn phải nhập tên liên hệ!!";
    }
    else if(!regex.name.test(form.name)){
      errors.name = "Tên hợp lệ phải dài hơn 2 ký tự và ngắn hơn 20 ký tự!!"
    }
    if (!form.email) {
      errors.email = "Bạn phải nhập email liên hệ!!";
    }
    else if(!regex.email.test(form.email)){
      errors.email = "Email không hợp lệ, định dạng chuẩn examp@abc.gi!!"
    }
    if (!form.phone) {
      errors.phone = "Bạn phải nhập tell liên hệ!!";
    }
    else if(!regex.phone.test(form.phone)){
      errors.phone = "Phone không hợp lệ, độ dài ít nhất 10 số!!"
    }
    return errors;
      
  }
  function handleSubmit(){
    console.log(2)
      alert(`Thêm ${form.name} thành công`)
  }
  return(
  <div className='container float-start'>
    <h1 className='mt-2 my-3'>Contact form</h1>
      <Formik 
      initialValues={form}
      validate={handleValidate}
      onSubmit={handleSubmit}
      >
      {({ errors , handleSubmit })=>(
        <form onSubmit={handleSubmit }>
        <div className= {`custom-input ${errors.name ? "custom-input-error" : ""}`}>
          <label>Name</label>
          <input name='name' type="text" value={form.name||''} onChange={onChange}/>
          <p className="error">{errors.name}</p>
        </div>
        <div className= {`custom-input ${errors.email ? "custom-input-error" : ""}`}>
          <label>Email</label>
          <input name='email' type="text" value={form.email||''} onChange={onChange}/>
          <p className="error">{errors.email}</p>
        </div>
        <div className= {`custom-input ${errors.phone ? "custom-input-error" : ""}`}>
          <label>Phone</label>
          <input name="phone" type="tel" value={form.phone||''} onChange={onChange}/>
          <p className="error">{errors.phone}</p>
        </div>
        <div className="custom-input">
          <label>Message</label>
          <textarea  name="mess" cols={24} rows={2} type="textarea" value={form.mess||''}     onChange={onChange}></textarea>
        </div>
        <button className='btn btn-success' type="submit">Submit</button>
        </form>
      )}
      </Formik>
  </div>
  );
}

