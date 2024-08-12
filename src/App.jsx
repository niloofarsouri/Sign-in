import { Button } from '@mui/material';
import './App.css'






function App() {


  return (
    <>

      <section className='main d-none d-md-flex'>
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




      <section className='main-xs d-flex d-md-none'>
        <div className='right-section-xs'>

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

          <div className='right_section_sub_two-xs'>
            <a href="#">Forgot password?</a>
            <a href="#">Don't have an account? Sign Up</a>
          </div>

        </div>
      </section>






      {/* <Container>
        <Grid container>

          <Grid item xs={12} md={6} lg={3}>
            <ColoredComponent color="#764abc" />
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <ColoredComponent color="#764abc" />
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <ColoredComponent color="#764abc" />
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <ColoredComponent color="#764abc" />
          </Grid>

        </Grid>
      </Container> */}

    </>
  )
}

export default App;
