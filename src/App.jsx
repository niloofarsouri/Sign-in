import { Button } from '@mui/material';
import './App.css'

function App() {


  return (
    <>
      <section className='main'>
        <div className='left_section'></div>

        <div className='right_section'>

          <div className='right_section_sub_one'>
            <img src="./icons8-add-user-male-50.png" alt="persona" />
            <h1>Sign in</h1>
            <input type="text" placeholder='Name' />
            <input type="text" placeholder='Family' />

            <div className='checkbox_box'>
              <input type="checkbox" />
              <span>Remmember me</span>
            </div>
            

            <Button variant="contained">Sign in</Button>
          </div>

          <div className='right_section_sub_two'>
            <a href="#">Forgot password?</a>
            <a href="#">Don't have an account? Sign Up</a>
          </div>

        </div>
      </section>
    </>
  )
}

export default App;
