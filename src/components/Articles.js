import React from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
    card: {
      display: 'flex',
   
    
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 100,
      height:100
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    
  }));

class Articles extends React.Component{

 
    render(){
    
     return(
       <div>



<Card className={useStyles.card}>
    <Grid container spacing={3} >
    <Grid item xs={4}>
     <div>
   
    <img src={this.props.img1} style={{height:200}}></img>
      
        </div>
        </Grid>
    
    <Grid item xs={8}>
      <div className={useStyles.details}>
        <CardContent className={useStyles.content}>
          <Typography component="h5" variant="h5">
          {this.props.title1}
          </Typography>
         <Typography variant="subtitle1" color="primary">
          {this.props.author1}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
          {this.props.content1}
          </Typography>
        </CardContent>
      </div>
      </Grid>
      
        </Grid>
    </Card>

   
   
    <Card className={useStyles.card}>
    <Grid container spacing={3} >
    <Grid item xs={4}>
     <div>
   
    <img src={this.props.img2} style={{height:200}}></img>
      
        </div>
        </Grid>
    
    <Grid item xs={8}>
      <div className={useStyles.details}>
        <CardContent className={useStyles.content}>
          <Typography component="h5" variant="h5">
          {this.props.title2}
          </Typography>
         <Typography variant="subtitle1" color="primary">
          {this.props.author2}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
          {this.props.content2}
          </Typography>
        </CardContent>
      </div>
      </Grid>
      
        </Grid>
    </Card>





    <Card className={useStyles.card}>
    <Grid container spacing={3} >
    <Grid item xs={4}>
     <div>
   
    <img src={this.props.img3} style={{height:200}}></img>
      
        </div>
        </Grid>
    
    <Grid item xs={8}>
      <div className={useStyles.details}>
        <CardContent className={useStyles.content}>
          <Typography component="h5" variant="h5">
          {this.props.title3}
          </Typography>
         <Typography variant="subtitle1" color="primary">
          {this.props.author3}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
          {this.props.content3}
          </Typography>
        </CardContent>
      </div>
      </Grid>
      
        </Grid>
    </Card>

 </div>)}
};
export default Articles;



