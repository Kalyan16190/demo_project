import react from 'react';
import { useForm } from 'react-hook-form';
import './App.css';

function App() {
  const onSubmit = (data:any)=>{console.log(data)}
  const {register, formState:{errors}, handleSubmit}= useForm()  
  return (
    <div className="App">
      <div className='form-App'>
      <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="UserName">UserName</label>
        <input {...register("UserName", {required:true})}type="text" name='UserName'/>
        {errors.UserName?.type === 'required' && "UserName is required"}
        
      <label htmlFor="email">Email :</label>
        <input {...register("email", {required:true})}type="email" name='email'/>
        {errors.email?.type === 'required' && "email is required"}
        
        <label htmlFor="password">Password:</label> 
        <input {...register("password", {required:true})} type="password" name='password'/>
        {errors.password?.type === 'required' && "Password is required"}
        <button type='submit' name='Submit'>Submit</button>
       </form>
       </div>
    </div>
  );
}
export default App;

