import React from 'react';
// import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
// import Link from '@material-ui/core/Link';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { TextField} from "@material-ui/core"
import '../components/css/Button.css';
import '../components/css/Section.css';




const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       main: '#f44336'
//     },
//     secondary: {
//       main: '#3f51b5'
//     },
//     error: {
//       main: '#009688'
//     },
//     text: {
//       primary: '#e91e63',
//       secondary: '#2196f3',
//       disabled: '#4caf50',
//       hint: '#ffc107',
//       myTextColor : '#039be5'
//     }
//   },
// })

export default function SignUp() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
      <img-second src="../glfp.png" />
        
        {/* <Typography component="h1" variant="h4">
          회원가입
        </Typography> */}
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="이름을 입력하세요"
                autoFocus
              />
            </Grid>


            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="이메일을 입력하세요(@sogang.ac.kr)"
                name="email"
                autoComplete="email"
              />
            </Grid>
           
            
           
          </Grid>
          <Grid container spacing={2}>
          
          <Grid item xs={12}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="accent"
            className={classes.submit}
          >
            메일로 임시비밀번호 발송하기
          </Button>
          </Grid>
            </Grid>
            
          <Grid container justify="flex-end">
            <Grid item>
              <Link to='/Log-in'
               href="#" variant="body2">
                아이디가 있으면 로그인
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
      </Box>
    </Container>
  );
}

