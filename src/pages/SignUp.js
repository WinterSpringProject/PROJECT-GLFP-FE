import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
// import Link from '@material-ui/core/Link';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { TextField, MenuItem } from "@material-ui/core"
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

            <Grid item xs={6}>

            <TextField select label="성별" variant="outlined" size="large">
             <MenuItem>남자</MenuItem>
             <MenuItem>여자</MenuItem>
             </TextField>
             </Grid>

            <Grid item xs={6}>
            <TextField
                id="date"
                label="생년월일"
                type="date"
                defaultValue="2000-01-01"
                className={classes.textField}
                InputLabelProps={{
                shrink: true,
              }}
              />
            </Grid>
            

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="ID"
                label="아이디를 입력하세요"
                name="ID"
                autoComplete="ID"
              />
            </Grid><Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="nickname"
                label="닉네임를 입력하세요"
                name="nickname"
                autoComplete="nickname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="비밀번호를 입력하세요"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="비밀번호를 한번 더 입력하세요"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="email"
                label="학교 이메일을 입력해주세요(@sogang.ac.kr)"
                type="email"
                id="email"
              />
            </Grid>
            
          </Grid>
          <Grid container spacing={2}>
          <Grid item xs={6}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="#ffff"
            className={classes.submit}
          >
            메일을 보내 인증하기
          </Button>
          </Grid>
          <Grid item xs={6}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="accent"
            className={classes.submit}
          >
            뒤로가기
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