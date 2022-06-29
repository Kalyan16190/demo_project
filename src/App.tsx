import react from 'react';
import { useForm } from 'react-hook-form';

import './App.css';


function App() {
  const onSubmit = (data:any)=>{console.log(data)}
const {register, formState:{errors}, handleSubmit}
 = useForm()  
 
 return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="UserName">User Name:</label>
        <input {...register("UserName", {required:true})}type="text"/><br/>
        {errors.UserName?.type === 'required' && "UserName is required"}<br/>
        
      <label htmlFor="email">Email :</label>
        <input {...register("email", {required:true})}type="email"/><br/>
        {errors.email?.type === 'required' && "email is required"}<br/>
        
        <label htmlFor="password">Password:</label> 
        <input {...register("password", {required:true})} type="password"/><br/>
        {errors.password?.type === 'required' && "Password is required"}<br/>
        <input type='submit' name='Submit'  />
       </form>
      
    </div>
  );
}
export default App;

