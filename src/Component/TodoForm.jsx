import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Typography } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';import AddIcon from '@mui/icons-material/Add';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'), 
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

export default function ValidationTextFields() {
  return (
    <>
      
    <Typography variant='h3' sx={{marginLeft: '37%',marginTop:'10%'}}> <FavoriteIcon sx={{color:'red',fontSize:'40px'}} />WELCOME</Typography>
    <Formik
      initialValues={{ name: '',  password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log('Form values:', values);
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            '& .MuiTextField-root': {
              m: 5,
              width: '25ch',
              display: 'flex',
              marginLeft: '40%',
              marginTop: '20px',
            },
          }}
          
        >
          <div>
            <TextField
              label="UserName"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              color="success" focused
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
            />
           
          </div>
          <div>
            <TextField
              label="Password"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              color="success" focused
            />
          </div>
          <ButtonGroup variant="outlined" aria-label="Loading button group" sx={{marginLeft:'43%', color:'black'}}>
      <Button type='sumbit'  variant="contained"> <Checkbox
        
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />}
      />Login</Button>
      
    </ButtonGroup>
        </Box>
      )}
    </Formik>
    </>
  );
}
